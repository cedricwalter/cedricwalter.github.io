---

title: 'Map Synology network drive under linux'
date: '2010-07-25T16:43:28+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - cli
    - HowTo
    - linux
    - map
    - synology
    - tutorial
---

How to mount your [Synology NAS](http://www.synology.com) (or any other NAS brand) shared folder under #Linux using CIFS.

> CIFS stands for “Common Internet File System,” also known under the older name SMB (Server Message Block), which is a network protocol used by Windows clients for issuing file access requests to Windows servers

Open a terminal and as root, create as many directory as needed in /mnt/

```
sudo mkdir /mnt/video
sudo mkdir /mnt/music
```

Unfortunately there is no frontend or editor user interface for maintaining the entries of /etc/fstab, you’ll have to use your favorite text editor to add the following entries (one shared folder = **one line**)

```
vi /etc/fstab
```

```
//ipadress/shareName  /mnt/directory cifs iocharset=utf8,user=synologyUser,password=synologyUserPassword,rw, 
uid=linuxLogonUser,gid=linuxLogonUserGroup 0 0
```

[![linux.synology.mount.disk.fastb](/assets/images/2010/07/linux.synology.mount_.disk_.fastb_thumb.png "linux.synology.mount.disk.fastb")](/assets/images/2010/07/linux.synology.mount_.disk_.fastb_.png)For example, in [OpenSuSE 11.3](http://www.opensuse.org/)

```
//nas/video /mnt/video cifs iocharset=utf8, 
user=admin,password=admin,rw,uid=cedric,gid=users 0 0
```

Start also Dolphin (Dolphin is the default KDE 4 file manager), or your preferred file explorer, and navigate to /mnt.

You can now drag each directory to the left bar (“Places”) for quicker access

[![linux.synology.mount.disk.dolphin](/assets/images/2010/07/linux.synology.mount_.disk_.dolphin_thumb.png "linux.synology.mount.disk.dolphin")](/assets/images/2010/07/linux.synology.mount_.disk_.dolphin.png)Or you can drag them on the desktop

![linux.synology.mount.disk.plasma](/assets/images/2010/07/linux.synology.mount_.disk_.plasma.png "linux.synology.mount.disk.plasma")Choose either Folder view to view content in real time in a plasma widget, or as icon. You can see the result below:

[![linux.synology.mount.disk.desktop](/assets/images/2010/07/linux.synology.mount_.disk_.desktop_thumb.png "linux.synology.mount.disk.desktop")](/assets/images/2010/07/linux.synology.mount_.disk_.desktop.png)You’re done, I did also remove Kaffeine, install VLC and I am enjoying Streaming from the Synology NAS

NOTE:

I did also add this how to to the official Synology WIKI page [http://forum.synology.com/wiki/index.php/Mapping\_a\_Network\_Drive](http://forum.synology.com/wiki/index.php/Mapping_a_Network_Drive)