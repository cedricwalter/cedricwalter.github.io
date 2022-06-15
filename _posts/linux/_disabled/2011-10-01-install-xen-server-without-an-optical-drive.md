---

title: 'Install XEN Server without an Optical Drive'
date: '2011-10-01T12:10:46+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/10/xenServer_thumb.png
tags:
    - english
    - install
    - server
    - www
---

![xenServer](/assets/images/2011/10/xenServer_thumb.png "xenServer")

> Citrix XenServer is a complete, managed [server virtualization](http://www.citrix.com/xenserver/server-virtualization) platform built on the powerful Xen hypervisor. Xen technology is widely acknowledged as the fastest and most secure virtualization software in the industry.

In case you don’t have any optical drive attached to the server, this small how to will help you to install [Xen Server](http://www.citrix.com) as domain 0 (*dom0*) using USB flash drive.

1. Download XEN server iso from <http://www.citrix.com/English/ss/downloads/index.asp>
2. Format your USB drive using FAT32,
3. Use an older version of [UNetbootin](http://unetbootin.sourceforge.net/) to create a bootable disk. Download, start and follow the instruction in user interface,
4. Just plug the USB flash drive and boot on it to complete the installation of Xen Server.

> [UNetbootin](http://unetbootin.sourceforge.net/) allows you to create bootable Live USB drives for #Ubuntu, Fedora, and other #Linux distributions without burning a CD. It runs on Windows, #Linux, and Mac OS X. You can either let UNetbootin download one of the many [distributions supported out-of-the-box](http://unetbootin.sourceforge.net/#features) for you, or [supply your own #Linux .iso file](http://unetbootin.sourceforge.net/#other) if you’ve already downloaded one or your preferred distribution isn’t on the list (such as #Ubuntu, Fedora, openSUSE, FreeBSD, PartedMagic)

 I used the version 393 and it worked, the latest version (549), seems to have a bug and refuse to boot with an error message

`mboot.c32: not a COM32R image`