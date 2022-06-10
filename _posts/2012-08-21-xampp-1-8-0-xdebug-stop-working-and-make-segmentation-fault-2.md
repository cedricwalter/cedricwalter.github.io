---
id: 7797
title: 'XAMPP 1.8.0 Xdebug stop working and make segmentation fault'
date: '2012-08-21T21:30:27+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7797'
permalink: /joomla/xampp-1-8-0-xdebug-stop-working-and-make-segmentation-fault-2/
image: /wp-content/uploads/2012/08/xampp.logo_thumb.gif
---

![](/assets/images/2012/08/xampp.logo_thumb.gif)

There’s a new version of [Xdebug](http://xdebug.org) released which fixes a major bug where inspecting static properties caused [Xdebug](http://xdebug.org) to crash in [XAMPP](http://www.apachefriends.org "XAMPP is an easy to install Apache distribution containing MySQL, PHP and Perl. XAMPP is really very easy to install and to use - just download, extract and start.") 1.8.0.

Unfortunately, you’ll need to update manually the version of [Xdebug](http://xdebug.org) shipped with [XAMPP](http://www.apachefriends.org "XAMPP is an easy to install Apache distribution containing MySQL, PHP and Perl. XAMPP is really very easy to install and to use - just download, extract and start.") to Xdebug 2.2.1 rather than 2.2.0:

Simply download the correct [Xdebug](http://xdebug.org) binary (VC9 threadsafe [PHP 5.4 VC9 TS (64 bit)](http://xdebug.org/files/php_xdebug-2.2.1-5.4-vc9-x86_64.dll) (MD5: 81cacc87168c99c7f65ba202dc12c4b2)) and copy it in your XAMPP installation at xampp\\php\\ext\\php\_xdebug.dll

restart Apache and you can continue debugging!