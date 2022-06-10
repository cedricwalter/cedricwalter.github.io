---
id: 2654
title: 'soon ZFS under Linux'
date: '2006-06-18T20:36:11+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2654'
permalink: /gadget/soon-zfs-under-linux/
tags:
    - linux
    - 'PC and Hardware'
    - Storage
---

 I am still testing my <span style="font-weight: bold;">NAS system (seven 300Gb disks) and while testing [OpenSolaris](http://www.opensolaris.org/) (under [Belenix](http://www.belenix.org/)), and Googling I found that page:

 [This blog is about the Google Summer of Code project "ZFS filesystem for FUSE/Linux"](http://zfs-on-fuse.blogspot.com/)

 For all of You that do not know what [FUSE](http://fuse.sourceforge.net/) is, [FUSE is the Filesystem in Userspace #Linux kernel module](http://en.wikipedia.org/wiki/FUSE_%28linux%29). This module allows nonprivileged users to create their own filesystems without writing any kernel code.

 While [ZFS](http://www.opensolaris.org/os/community/zfs/) has many features which can benefit all kinds of users – from the simple end-user to the biggest enterprise systems: <span class="anchor" id="line-18"><span class="anchor" id="line-19">

- <span style="font-weight: bold;"> Provable integrity – it checksums all data (and meta-data), which makes it possible to detect hardware errors (hard disk corruption, flaky IDE cables..).
- <span style="font-weight: bold;"> Atomic updates – means that the on-disk state is consistent at all times, there’s no need to perform a lengthy filesystem check after forced reboots/power failures.
- Instantaneous snapshots and clones – it makes it possible to have hourly, daily and weekly backups efficiently, as well as experiment with new system configurations without any risks.
- <span style="font-weight: bold;">Built-in compression, encryption
- Highly scalable
- <span style="font-weight: bold;">Pooled storage model – creating filesystems is as easy as creating a new directory. You can efficiently have thousands of filesystems, each with it’s own quotas and reservations, and different properties (compression algorithm, checksum algorithm, etc..).
- <span style="font-weight: bold;">Built-in stripes (RAID-0), mirrors (RAID-1) and RAID-Z (it’s like software RAID-5, but more efficient due to ZFS’s copy-on-write transactional model).
- Variable sector sizes, adaptive endianness etc…

 In fact this is a sponsored Google summer of code project. Note that Apple is also currently porting [ZFS](http://www.opensolaris.org/os/community/zfs/) under OS-X. That could mean that [ZFS](http://www.opensolaris.org/os/community/zfs/) could be mainstream in a future not far away than 2 years.

- [Google SoC Application Proposal](http://www.wizy.org/wiki/ZFS_on_FUSE/ApplicationProposal) [(PDF)](http://www.wizy.org/zfs-on-fuse-opensolaris.pdf)
- **Deadline:** August 21st, 2006

And I expect to test [RAID-Z](http://blogs.sun.com/roller/page/bonwick?entry=RAID_z)…For those interested by RAID-Z raw performances, You can read this highly technical blog entry:<span style="font-family: monospace;"> [WHEN TO (AND NOT TO) USE RAID-Z](http://blogs.sun.com/roller/page/roch?entry=when_to_and_not_to)

Sun expect to have a stable [ZFS](http://www.opensolaris.org/os/community/zfs/) version by June 2006.