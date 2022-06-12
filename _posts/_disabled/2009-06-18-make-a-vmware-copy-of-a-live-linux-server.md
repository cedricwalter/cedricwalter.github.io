---
id: 4462
title: 'Make a VMWARE copy of a live Linux server'
date: '2009-06-18T20:31:29+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4462'

---

[![logo_virtualized_vmware_s](/assets/images/2009/06/logo_virtualized_vmware_s_thumb.jpg "logo_virtualized_vmware_s")](/assets/images/2009/06/logo_virtualized_vmware_s.jpg)

My idea is to be able to run my production server (STRATO- OpenSuse) hosting [www.waltercedric.com](http://www.waltercedric.com) in a VMWARE instance. So I can test and make change to the operating first there before bringing down my host for several hours 😉

I would like to duplicate the whole LINUX system (lets call it PROD for now), including data and make 2 VMWARE instance.. why two instances you may ask?

1. One will be called DEV, and be very instable by definition, it is always a copy of the TEST instance, and will be use to try dirty system changes, that may never be deployed to TEST or PROD
2. The instance named TEST will be by definition identical to the main server (or PROD). All changes made there has to be documented in small release notes so they can be applied to PROD.

I am in the process of documenting everything, and I will provide You the set of scripts to make the whole things works. (mainly a bash file that use RSYNC to keep your new server TEST up to date with the PROD), First step is to copy the server on the fly and luckily this is the purpose of this article!

## Solution 1: cloning with VMware vCenter Converter (if no raid, easiest)

You’ll see later why but VMWARE vCenter Converter is not able to copy software raid /boot devices (what a shame)

### Install VMware vCenter Converter Standalone

This software is free, all you have to do is register and [download the software HERE](http://www.vmware.com/download/converter/)

You can install it like any other windows software, just follow the steps

 [![vmware.vcenter.converter](/assets/images/2009/06/vmware.vcenter.converter_thumb.png "vmware.vcenter.converter")](http://www.waltercedric.com/images/stories/makeavmwareofalivelinuxserver_14B43/vmware.vcenter.converter.png)

 [![vmware.vcenter.converter.1](/assets/images/2009/06/vmware.vcenter.converter.1_thumb.png "vmware.vcenter.converter.1")](http://www.waltercedric.com/images/stories/makeavmwareofalivelinuxserver_14B43/vmware.vcenter.converter.1.png)

Note the default port or change them if you already have another services running on your PC (XAMPP, TeamCity, Bamboo etc…)

# Https Service port: 443**   
Remote Converter clients connect to this port on the server and submit conversion tasks.

# HTTP Service port: 80**   
Remote machines connect to the server through this port to download the converter client.

# Agent service Port: 9089**   
Remote converter agents connect to this port to convert this machine.

 [![vmware.vcenter.converter.2](/assets/images/2009/06/vmware.vcenter.converter.2_thumb.png "vmware.vcenter.converter.2")](http://www.waltercedric.com/images/stories/makeavmwareofalivelinuxserver_14B43/vmware.vcenter.converter.2.png)

### Authorize root access through SSH

Even if this is considered highly unsecure, VMware vCenter Converter will require it. But temporary having a ssh root access open to the outside world is ok for the time taken to replicate through SSH all disks.

# vi /etc/ssh/sshd\_config

and set

PermitRootLogin yes

Restart the SSH daemon by issuing the following command

# /etc/init.d/sshd restart

### Tell the converter to start replication of remote server

[![vmware.vcenter.converter.3](/assets/images/2009/06/vmware.vcenter.converter.3_thumb.png "vmware.vcenter.converter.3")](http://www.waltercedric.com/images/stories/makeavmwareofalivelinuxserver_14B43/vmware.vcenter.converter.3.png)

bang!

checking that /boot is mounted on my server

\# mount –l   
..   
/dev/md0 on /boot type ext2 (rw,acl,user\_xattr) \[/boot\]   
..

The device /boot is mounted, I did Google for it and found that:

### **Converter Standalone 4.0 does not recognize source volumes that reside on Linux Software RAID configurations**

During cloning of powered-on Linux machines, Converter Standalone does not recognize source volumes that are part of a Software RAID configuration (also referred to as multiple disk, or md, configurations).   
(If your question has been resolved please mark the answers as "Helpful" or "Correct".)

That’s because the /boot is on Software RAID which is not supported by Linux P2V: [http://www.vmware.com/support/converter/doc/releasenotes\_conv40.html#58](http://www.vmware.com/support/converter/doc/releasenotes_conv40.html#58)

I have a RAID1 array

> RAID 1 (mirrored settings/disks) duplicates data across every disk in the array, providing full redundancy. Two (or more) disks each store exactly the same data, at the same time, and at all times. Data is not lost as long as one disk survives. Total capacity of the array equals the capacity of the smallest disk in the array. At any given instant, the contents of each disk in the array are identical to that of every other disk in the array.

## Solution 2: cloning with VMware vCenter Converter (workaround for raid)

If you still want to clone your server with VMware vCenter Converter and

- if /boot is the only important file system on Software RAID (/dev/md\*), which is not my case :-()
- You can plug an external non RAID USB disk into the server

you could workaround this by:

1. Back up the /boot files to /tmp (or some place with space),
2. unmount /boot,
3. Create a new volume (partition or LVM logical volume) on some available storage (might need to plug in a USB drive),
4. Formatting it with ext3/ext4
5. Mount it at /boot
6. Copy all the /boot files over to there,
7. Make backups of /etc/fstab and /boot/grub/menu.lst
8. Change fstab and menu.lst to point to the new /boot file system.

That should allow Converter to work. And you can revert this all very easily by restoring the backups of fstab and menu.lst, unmounting /boot, remounting the original /boot (/dev/md0).

## Solution 3: cloning with VMware vCenter Converter (awful workaround raid)

Another solution would be to break the Software RAID mirroring, just temporary to make a snapshot, but that would also require me to boot the server –> not acceptable for me!

## Solution 4 cloning with clonesys

# [clonesys](http://www.trickytools.com/php/clonesys.php)** is a Shell script that can be used to get an image of running Linux boxes.   
The image can then be burned on CD/DVD. This CD/DVD is bootable and can be used to restore the system as well as to install new similar boxes.   
# [clonesys](http://www.trickytools.com/php/clonesys.php)** \*IS NOT\* a backup tool: it should not be used to backup users data, it is more similar to other tools such as MkCdRec, Mondo Rescue, Timo’s Rescue CD, etc…

1. Get the latest version (wget) and unpack
2. Configure config.ini and backup.ini
3. Start ./clonesys.sh and wait
4. ISO disc will be available in /tmp/clonesys/iso

Create a new VMWARE machine and boot on the CD to create your new machine.

## Solution 5 cloning live system with Mondo

> **[Mondo](http://www.mondorescue.org/) is reliable.** It backs up your GNU/Linux server or workstation to tape, CD-R, CD-RW, DVD-R\[W\], DVD+R\[W\], NFS or hard disk partition. In the event of catastrophic data loss, you will be able to restore all of your data \[or as much as you want\], from bare metal if necessary. Mondo is in use by Lockheed-Martin, Nortel Networks, Siemens, HP, IBM, NASA’s JPL, the US Dept of Agriculture, dozens of smaller companies, and tens of thousands of users.

> ****[Mondo](http://www.mondorescue.org/)** is comprehensive.** **[Mondo](http://www.mondorescue.org/)**supports LVM 1/2, RAID, ext2, ext3, ext4, JFS, XFS, ReiserFS, VFAT, and can support additional filesystems easily: just e-mail the [mailing list](http://www.mondorescue.org/support.shtml) with your request. It supports software raid as well as most hardware raid controllers. It supports adjustments in disk geometry, including migration from non-RAID to RAID. **[Mondo](http://www.mondorescue.org/)**runs on all major Linux distributions (RedHat, RHEL, SuSE, SLES, Mandriva, Debian, Gentoo) and is getting better all the time. You may even use it to backup non-Linux partitions, such as NTFS.
> 
> ****[Mondo](http://www.mondorescue.org/)**is free!** It has been published under the GPL v2 (GNU Public License), partly to expose it to thousands of potential beta-testers but mostly as a contribution to the Linux community.

Its main advantages are in my case

- It wont require any reboot,
- It can create CD (.ISO with ISOLINUX) that can be later booted in VMWARE.

If you want to come from a RAID 0,1,5 to a non RAID host setup, [this article may help you](http://www.digwig.net/toys/2008/10/15/cloning-production-linux-into-vmware/).

## Solution 6: manual RSYNC or the “you’re on your own”

Fallback to manual RSYNC of the server…quite tricky. This is what what VMware vCenter is doing in background when it works 🙁

1. Boot with Knoppix in mode 2 (terminal only)
2. Create partitions with fdisk (or the utility of your choice).
3. Make file systems, run mkswap, etc.
4. Mount partitions appropriately.
5. Run something like: rsync -zav -e ssh oldhost:/ /mnt (FYI, I almost always botch the syntax the first try)
6. Make changes as appropriate for new system (/etc/fstab, /etc/sysconfig/network and /etc/sysconfig/network-scripts/ifcfg-\*, /etc/hosts, and so on).
7. Run grub to install the boot loader
8. Reboot. If it boots, do a quick check to make sure all the partitions are started, swap has been turned on, etc.

[I’ve made it once but was blocked at step 9 (because of grub 1 / OpenSuSE 9.3)](http://www.waltercedric.com/component/content/article/1367.html)

If you know any other method that dont require the server to be rebooted (no solutions with dd please as it make corrupted disk on running server)