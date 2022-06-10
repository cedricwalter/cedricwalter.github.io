---
id: 2035
title: 'Working antispam v1.1 package!'
date: '2005-09-29T17:41:24+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2035'
permalink: /joomla/working-antispam-v1-1-package/
tags:
    - cryptographic
    - development
    - securityimages
---

# We** lost, Colin (<http://espresso.ts.uvic.ca/> from Canada) and I nearly one week on securityimages….

The package was installing fine on windows powered machine, but refuse to install fully on #Linux kernel. I made it work by simply removing all space character in the XML deployment descriptor of #Joomla/Mambo. I will give me more time to find a better solution…

# Project administrator at Mamboforge (Mambo CMS discontinued)**

1. <http://log4php4mambo.mamboforge.net> (PHP – GPL) Log4PHP for Mambo – consistent and quality logging framework in a core component
2. <http://hashcash.mamboforge.net> (PHP – GPL) a framework using cryptographic techniques to protect posting form

# Project administrator at #Joomlaforge (Joomla CMS):**

1. [http://developer.joomla.org/sf/projects/com\_securityimages](http://developer.joomla.org/sf/projects/com_securityimages) (PHP – GPL) a framework for generating CAPTCHA and protecting posting forms from spammers
2. [http://developer.joomla.org/sf/projects/com\_hashcash](http://developer.joomla.org/sf/projects/com_hashcash) (PHP – GPL) a framework using cryptographic techniques and protecting posting forms from spammers
3. [http://developer.joomla.org/sf/projects/com\_bayesianspamfiltering](http://developer.joomla.org/sf/projects/com_bayesianspamfiltering) (PHP – GPL) a framework using statistical techniques and protecting posting forms from spammers
4. [http://developer.joomla.org/sf/projects/com\_log4php](http://developer.joomla.org/sf/projects/com_log4php) (PHP – GPL) the famous log4j converted to PHP packed in a component
5. [http://developer.joomla.org/sf/projects/com\_akocommentplus](http://developer.joomla.org/sf/projects/com_akocommentplus) (PHP – GPL) a modified version of a commenting system (Akocomment from Arthur Konze) using framework 1 and/or 2 and/or 3 and/or
6. [http://developer.joomla.org/sf/projects/com\_akobookplus](http://developer.joomla.org/sf/projects/com_akobookplus) (PHP – GPL) a modified version of a guestbook system (Akocbook from Arthur Konze) using framework 1 and/or 2 and/or 3 and/or 4

I will commit as soon as possible the code there and do a version which can be downloaded.  
(I opt for [Joomla](http://www.joomla.org/) since Mambo developer have decided to stop Mambo development and continue with [Joomla](http://www.joomla.org/). I want to follow GPL convinced people 🙂 )

A big thanks to [Colin](http://espresso.ts.uvic.ca/) for the time he invested in testing and support my bad english 😉