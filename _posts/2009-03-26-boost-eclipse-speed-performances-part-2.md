---
id: 4227
title: 'Boost Eclipse speed performances part 2'
date: '2009-03-26T17:15:26+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4227'
permalink: /java/boost-eclipse-speed-performances-part-2/
header:
  teaser: /assets/images/2008/04/eclipse_home_header_thumb.jpg
tags:
    - background
    - category
    - code
    - cpu
    - desktop
    - development
    - digital
    - directory
    - disk
    - eclipse
    - edition
    - feedback
    - fly
    - free
    - java
    - linux
---

[![eclipse_home_header](/assets/images/2008/04/eclipse_home_header_thumb.jpg)](/assets/images/2009/03/eclipse_home_header.jpg) After the huge success and feedback of [my first tips on how to speed eclipse](http://www.waltercedric.com/java-j2ee-mainmenu-53/107-eclipse/1298-boost-eclipse-speed-performances.html), here are more performances tips, some are obvious some not:

 **Disabled/Exclude the virus scanner for the eclipse directory:** while obvious It will or may be difficult to achieve if you’re not administrator on your machine (while not impossible) and that may not make some people happy especially security officers 😉 It is obvious that scanning on the fly every resources in a workspace, is detrimental for speed. You’ll get at least 15 to 20% more raw input output speed and gain 5 to 15% CPU cycles.

# Defragment often:** NTFS fragment, File get changed, added or remove, so NTFS will fragment very fast, it is time to defragment your disks. And since [there is a lot of free program floating around](http://www.google.com/search?q=free+defrag+tool&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a), why not trying to get the last 20% loses in access time and transfer rate? Defragment at least one time a week your [Eclipse](http://www.eclipse.org/) workspace.

# Get more memory!** Windows Server 64bits or Linux 64bits allow you to start with 3GB contiguous memory without complaining, the more memory the better!

# Get a faster disk for your notebook** (western Digital black edition / Seagate momentus 1.3 are cheap), or better [build yourself a RAID0 array](http://en.wikipedia.org/wiki/Redundant_array_of_independent_disks) made of 3 disks as you’ll get the IO output of 3 disks. Since we do usually more READ access (searching code, browsing hierarchy of objects) than write (writing code, let the compiler run)

> *RAID 0 (striped disks) distributes data across several disks in a way that gives improved speed and full capacity, but all data on all disks will be lost if any one disk fails.*

# Stop as many thread as possible that are not needed,** in this category go all 3rd party nice to have software you may have authorized or not on your notebook: Google desktop search , Windows desktop search, widgets, Rss feeds… the less threads running in the background the better…

# Change for another operating system** 🙂 Linux file systems are blazing fast compare to the venerable NTFS, and threading seems to be a lot better on any 2.6 Linux Kernel.