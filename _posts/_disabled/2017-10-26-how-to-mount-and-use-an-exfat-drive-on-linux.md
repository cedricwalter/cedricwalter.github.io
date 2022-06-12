---
id: 8688
title: 'How to Mount and Use an exFAT Drive on Linux'
date: '2017-10-26T23:12:40+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8688'

header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - cli
    - HowTo
    - linux
    - tutorial
    - ubuntu
---

Note: Newest Kernel 5.7.0 will support NTFS and ExFat out of the box!

Try connecting an exFAT-formatted drive without installing the required software and you’ll often see “Unable to mount” error message saying “unknown file system type: ‘exfat’.”

Even (still) with the latest Linux Ubuntu 17.10, the same cryptic error is displayed. Searching in Ubuntu Software for exFat return nothing. Damn! normal users are lost and go back to Windows / MacOS. My next move was to google for a response, which I found of course:

```
sudo apt-get install exfat-fuse exfat-utils
```

If Linux want to get more desktop shares, all theses App Store, Ubuntu Software, Gnome Software, KDE Discover need to work on content instead of losing time arguing for the next icons set, wallpaper or even distribution name!

BTW I ❤ my Ubuntu 17.10 on AMD1950x!