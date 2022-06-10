---
id: 1757
title: 'More sources for Yast'
date: '2005-05-21T17:15:15+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1757'
permalink: /linux/more-sources-for-yast/
image: /wp-content/uploads/2005/05/addMoreSourcesToYastunderSuseLinux.png
---

Do You ever want to install some "non standard" package under SuSE like Mplayer, VLC which are not officialy supported, or found on the DVD of Suse #Linux?

There is a way to do it using YaST without any effort…All You have to do is to add some new Install sources

# Add the following source to YaST, go to YaST, in "Software", "Change Source of Installation"**

| Add | Server name | directory on server |
|---|---|---|
| http | [ftp.gwdg.d](ftp://ftp.gwdg.de/) | <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta> <meta content="Kate, the KDE Advanced Text Editor" name="Generator"></meta>pub/linux/misc/suser-guru/rpm/9.3/ |
| p | packman.iu-bremen.de | suse/9.3/ |
| http | [<span style="font-weight: normal;">ftp.belnet.be  ](ftp://ftp.belnet.be/) | mirror/ftp.suse.com/suse/i386/9.3/ |
| http | fr2.rpmfind.net | linux/SuSE-Linux/i386/9.3/ |
| ftp | [ftp.gwdg.de](ftp://ftp.gwdg.de/pub/linux/suse/ftp.suse.com/suse/i386/supplementary/KDE/update_for_9.3/yast-source) | [/pub/linux/suse/ftp.suse.com/suse/i386/supplementary/KDE/update\_for\_9.3/yast-source](ftp://ftp.gwdg.de/pub/linux/suse/ftp.suse.com/suse/i386/supplementary/KDE/update_for_9.3/yast-source) |

or look at the pictures below:

![](/assets/images/2005/05/addMoreSourcesToYastunderSuseLinux.png)

I recommend You to put packman and ludwig server in the place 1 and 2, also not like in my picture 😉