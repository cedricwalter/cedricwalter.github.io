---
id: 3703
title: 'Virtualizes a Linux server on the fly with RSYNC'
date: '2008-08-17T20:28:34+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3703'
permalink: /security/virtualizes-a-linux-server-on-the-fly-with-rsync/
image: /wp-content/uploads/2008/08/LOGO_virtualized_vmware_S_thumb.jpg
---

| [![LOGO_virtualized_vmware_S](/assets/images/2008/08/LOGO_virtualized_vmware_S_thumb.jpg)](/assets/images/2008/08/LOGO_virtualized_vmware_S.jpg) | You’ll need a lot of patience…Since there is no VMWARE Converter for #Linux…  My objective is to virtualizes my Internet server running SUSE in a VMWARE to ease the migration to a more powerful and up to date server. |
|---|---|

I am using RSYNC since:

- I have no access to the machine, So I can’t stop the server and make a binary images of the disk as the server is in a [STRATO data center in Germany (Berlin)](http://www.strato.de/)
- I don’t like operations down time.

I HAVE TO virtualize my server because:

- The operating system SuSE is too old and is no more security patches available.
- I want to have a local reference in VMWARE of my Internet server.

This tutorial can be see as an add-on of this one : <http://www.linuxjournal.com/article/9942> (very good by the way) I just complete the missing steps or document some issues I’ve encountered..

On your server, run

# \# fdisk -l**

> <font color="#0000ff" face="Courier New">Disk /dev/sda: 164.6 GB, 164696555520 bytes   
> 255 heads, 63 sectors/track, 20023 cylinders   
> Units = cylinders of 16065 \* 512 = 8225280 bytes 
> 
> <font color="#0000ff" face="Courier New"> Device Boot Start End Blocks Id System   
> /dev/sda1 \* 1 7 56196 fd Linux raid autodetect   
> /dev/sda2 8 138 1052257+ 82 Linux swap / Solaris   
> /dev/sda3 139 20023 159726262+ fd Linux raid autodetect 
> 
> <font color="#0000ff" face="Courier New">Disk /dev/sdb: 164.6 GB, 164696555520 bytes   
> 255 heads, 63 sectors/track, 20023 cylinders   
> Units = cylinders of 16065 \* 512 = 8225280 bytes 
> 
> <font color="#0000ff" face="Courier New"> Device Boot Start End Blocks Id System   
> /dev/sdb1 \* 1 7 56196 fd Linux raid autodetect   
> /dev/sdb2 8 138 1052257+ 82 Linux swap / Solaris   
> /dev/sdb3 139 20023 159726262+ fd Linux raid autodetect 
> 
> <font color="#0000ff" face="Courier New">Disk /dev/md0: 57 MB, 57475072 bytes   
> 2 heads, 4 sectors/track, 14032 cylinders   
> Units = cylinders of 8 \* 512 = 4096 bytes 
> 
> <font color="#0000ff" face="Courier New">Disk /dev/md0 doesn’t contain a valid partition table 
> 
> <font color="#0000ff" face="Courier New">Disk /dev/md1: 163.5 GB, 163559571456 bytes   
> 2 heads, 4 sectors/track, 39931536 cylinders   
> Units = cylinders of 8 \* 512 = 4096 bytes 
> 
> <font color="#0000ff" face="Courier New">Disk /dev/md1 doesn’t contain a valid partition table

This is how partitions look like, sda1 is the root partition, sda2 is a swap partition and sda3 is my home. The server use a RAID0 with 2 \* 160GB disk.

You’ll have to recreate them in the virtual machine. Nothing force me to have a RAID0 also in my VMWARE. I will only create a normal disk layout (sda1,sda2, sda3). Save this output in a text file for further references. By reading the fstab, I will be able to look at the mount point name later. On your server, run:

# \# cat /etc/fstab**   
<font color="#0000ff" face="Courier New">/dev/md1 / ext3 acl,user\_xattr,usrquota 1 1   
/dev/md0 /boot ext2 acl,user\_xattr 1 2   
/dev/sda2 swap swap pri=42 0 0   
/dev/sdb2 swap swap pri=42 0 0  
<font color="#0000ff" face="Courier New">devpts /dev/pts devpts mode=0620,gid=5 0 0   
proc /proc proc defaults 0 0   
sysfs /sys sysfs noauto 0 0

Download [VMWARE Server](http://www.vmware.com/products/server/), you’ll have to register and will receive a limited in time version.

Create a new Virtual machine matching as close as possible the distribution you are using on your production server. Boot the virtual machine with a Knoppix CD, type knoppix 2 at boot time to jump into console mode of Knoppix. Use cfdisk to create the same partition layout, this tool is very easy to use (use bottom menu). Use the same file system, partitions can be set bigger or smaller depending on your intentions with the virtual machine (backup or replacement of a productive machine). My Old server was using GRUB (and not GRUB2), GRUB do not accept to install a boot loader on partition with 256-byte inodes. Unfortunately this is exactly what cfdisk create as default!

The quickest and easiest option (when you have control of file system creation) is to format any new Ext3 file systems with 128-byte inodes. This command tells you your e2fsprogs version:

# mke2fs -V   
mke2fs 1.40.8 (13-Mar-2008)   
Using EXT2FS Library version 1.40.8

This is the usual command for creating new Ext3 file systems with e2fsprogs:

# mkfs.ext3 /dev/sda1

The newer versions that default to 256-byte inodes will emit this warning, and create your new file system anyway:

Warning: 256-byte inodes not usable on older systems

To force the creation of 128-byte inodes partitions:

# mkfs.ext3 -I 128 /dev/sda1

You can check your work with tune2fs, if you read 128 it is OK to continue

# tune2fs -l /dev/sda1 | grep -i ‘**inode** **size**’   
# Inode** **size**: 128

## Create new file system

According to the # cat /etc/fstab

\# sudo mkfs -t ext3 /dev/sda1  
\# sudo mkswap /dev/sda2  
\# sudo mkfs -t ext2 /dev/sda3

[![creating fylsystem](/assets/images/2008/08/creatingfylsystem_thumb.jpg)](/assets/images/2008/08/creatingfylsystem.jpg)

## RSYNC your data

The example in article was not using a SSH connection with secure keys. If you use public private key pair (recommended), just copy your public, private key in Knoppix root home

```
# su

# cd ~/.ssh
```

I have my RSA key on a USB stick, Knoppix mount it thanks to UDEV automatically

\# cp /mnt/usbstick/id\_rsa\* .

<font face="tre">Try to connect to your host

```
# ssh -l root yourHostOrIP
```

You’ll be prompted for your pass phrase, enter it, if everything work…its time to sync the first partition /mnt/sda1

```
# rsync -avx --numeric-ids --progress yourHostOrIP:/ /mnt/sda1/
```

You’ll be prompted for your pass phrase, enter it, if everything work just wait, when finished do the same for the second partition /mnt/sda3

```
# rsync -avx --numeric-ids --progress yourHostOrIP:/home/ /mnt/sda3/ 
```

That was easy.. the most difficult is to make this virtual machine boot, and that mean play with GRUB…

TO BE CONTINUED… next part this week