---
id: 2966
title: 'Installing Linux on PS3'
date: '2007-05-13T14:05:54+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2966'
permalink: /games/installing-linux-on-ps3/
image: /wp-content/uploads/2005/06/sony_playstation_ps3.jpg
tags:
    - gadget
    - linux
    - 'Sony PS3'
---

![sony_playstation_ps3](/assets/images/2005/06/sony_playstation_ps3.jpg "sony_playstation_ps3")

![](/assets/images/2007/05/ps3-love-linux.jpg)Sony PS3 love linux…

These instructions show you how to install LINUX on a Playstation 3 with the latest firmware.

**Downloading a #Linux flavor**

Download one of these #Linux versions:

| <span style="font-weight: bold;">Ubuntu |
|---|
| - [Kubuntu](http://cdimage.ubuntu.com/kubuntu/ports/releases/feisty/release/kubuntu-7.04-desktop-powerpc+ps3.iso) – Ubuntu with KDE (recommended I can’t stand GNOME desktop) - [Ubuntu](http://cdimage.ubuntu.com/ports/releases/feisty/release/ubuntu-7.04-desktop-powerpc+ps3.iso) – The standard version using Gnome Desktop. - [Xubuntu](http://cdimage.ubuntu.com/xubuntu/ports/releases/feisty/release/xubuntu-7.04-desktop-powerpc+ps3.iso) – Using the lightweight XFCE desktop environment - [Edubuntu](http://cdimage.ubuntu.com/edubuntu/ports/releases/feisty/release/edubuntu-7.04-desktop-powerpc+ps3.iso) – Designed for use in school classrooms |
| <span style="font-weight: bold;">Yellow Dog |
| - [Yellow Dog Linux 5.0](http://www.terrasoftsolutions.com/tss_home.shtml) |
| <span style="font-weight: bold;">Debian |
| - [Debian Live](http://www.keshi.org/moin/moin.cgi/PS3/Debian/Live) |
| <span style="font-weight: bold;">Fedora |
| Fedora Core 5 PPC DVD – 3.4GB - HTTP Download: \[<http://mirror.linux.duke.edu/pub/fedora/linux/core/5/ppc/iso/FC-5-ppc-DVD.iso>\] - Bittorrent Download: \[<http://torrent.fedoraproject.org/torrents/bordeaux-DVD-ppc.torrent>\] - More HTTP Mirrors: \[<http://fedora.redhat.com/Download/mirrors.html>\] |
| <span style="font-weight: bold;">OpenSUSE |
| not working, work in progress \[<http://en.opensuse.org/PS3>\] |
| <span style="font-weight: bold;">Gentoo linux |
| how to \[<http://whitesanjuro.googlepages.com/>\] |

Burn the iso-file onto a CD/DVD depending on the size of the distribution

**Preparing the PS3**

In this step we will format the PlayStation 3 and create two partitions, one for the XMB (the PS3 operating system) and one for Linux. Before formatting the PS3, you MUST backup your games saved data.

- In the XMB go to *Settings > System Settings > Format Utility > Format Hard Disk*. Choose Yes.
- Choose *Custom* partition setting and *Allot 10GB to the Other OS*. Perform a *Quick Format*.
- Reboot the PS3 by pressing X on your controller.

**Preparing to run the LiveCD**

- Insert the Linux CD/DVD you burned into your Playstation 3.
- Go to *Settings > System Settings > Install* *Other OS*.
- The system will detect a file called otheros.bld on your disk. Hit X to start the installer.
- Go to *Settings > System Settings > Default System*. Set it to *Other OS*. Restart your PS3 by clicking X.
- At the kboot: prompt, hit Enter. Linux will boot, slowly, from the CD.

Once the system is up and running from the disc, you may choose to install Linux permanently.

- Double click the install icon on the desktop.
- Select Manual partitioning, and choose the 10.7GB drive.

**Back to normal operations under XMB**

To boot back to the XMB environment, type *boot-game-os* at the kboot: prompt.