---
id: 3022
title: chkrootkit
date: '2007-07-20T00:48:23+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3022'
permalink: /security/chkrootkit/
tags:
    - security
---

 [chkrootkit](http://www.chkrootkit.org/) is a tool to locally check for signs of a [rootkit](http://www.chkrootkit.org/links/). chkrootkit is a common unix-based program intended to help system administrators check their system for known rootkits. It works by using several mechanisms, including comparison of file signatures to known rootkits, checking for suspicious activity (processes listed in the proc filesystem but not in the output of the ‘ps’ command.<colorscheme colors="#ffffff,#000000,#808080,#000000,#bbe0e3,#333399,#009999,#99cc00"></colorscheme>

If you ever get a positive alarm, you can try to remove the rootkit, but all professionals would advice you to reinstall the server from scratch, and restore a previous backup (that mean saving nothing from server as soon as the rootkit is revealed….)  <span style="font-weight: bold;">Links  
 chkrootkit](http://www.chkrootkit.org/)