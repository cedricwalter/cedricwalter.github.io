---
id: 1380
title: 'useful RPMs and apt-rpm SuSe repositories'
date: '2004-11-19T10:22:35+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1380'

tags:
- OpenSuse
---

# RPMs**

- <http://packman.links2linux.de/>

# APT repositories**

- <http://linux01.gwdg.de/apt4rpm/> This is an apt repository for SuSE as well. It’s not run by SuSE but it integrates
  very well into their distribution.
- <ftp://ftp.gwdg.de/linux/suse/apt/SuSE/9.2-i386/>   
  Here you find a lot of packages (mplayer, xine, kernels, and much more). The repository is organized in folders.
  Browse them first, to understand the packages you need (and in what folders they are). Then, you’ll have to install
  apt and apt-libs (from the dir called “*suser-rbos*“). Then, add the directories you need to you apt/sources.list.
  Import the GPG keys, and you’ll be able to use apt to install unofficial packages.

> here is the line you must add to the file *sources.list*:
>
> *rpm* [*ftp://ftp.gwdg.de/pub/linux/suse/apt/*](ftp://ftp.gwdg.de/pub/linux/suse/apt/) *SuSE/9.2-i386 suser-rbos
packman-i686 packman base funktronics suser-scorot suser-tcousin suser-ollakka suser-oc2pus suser-jogley suser-gbv
suse-people suser-guru suser-sbarnin rpmkeys ximian xorg wine*

You usually have to wait a bit for the “base” directory to be filled with official packages, So apt may fail when it
deals with the base dir.