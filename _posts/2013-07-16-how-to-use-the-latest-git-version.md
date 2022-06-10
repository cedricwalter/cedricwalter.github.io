---
id: 8093
title: 'How to use the latest Git version'
date: '2013-07-16T20:58:16+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8093'
permalink: /linux/how-to-use-the-latest-git-version/
tags:
    - git
    - HowTo
    - linux
    - tutorial
---

![](/assets/images/2013/07/linux.png)

> Git is a [free and open source](http://git-scm.com/about/free-and-open-source) distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
> 
> Git is [easy to learn](http://git-scm.com/documentation) and has a [tiny footprint with lightning fast performance](http://git-scm.com/about/small-and-fast). It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like [cheap local branching](http://git-scm.com/about/branching-and-merging), convenient[staging areas](http://git-scm.com/about/staging-area), and [multiple workflows](http://git-scm.com/about/distributed).

If you can, it’s generally useful to install Git from source, because you’ll get the most recent version and be able to use the latest features.

Here is a small how to install the latest [GIT](http://git-scm.com/) version on Debian

```
wget <a href="https://www.kernel.org/pub/software/scm/git/git-1.8.3.tar.gz" rel="noopener noreferrer" target="_blank">https://www.kernel.org/pub/software/scm/git/git-1.8.3.tar.gz</a>
apt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev tar -zxf git-1.8.3.tar.gz cd git-1.8.3 make prefix=/usr/bin all sudo make prefix=/usr/bin install
```

Check that everything went fine by issuing

```
# git --version git version 1.8.3
```