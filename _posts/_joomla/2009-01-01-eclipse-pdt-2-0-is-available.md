---
id: 4022
title: 'Eclipse PDT 2.0 is available'
date: '2009-01-01T21:24:13+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4022'

header:
  teaser: /assets/images/2009/01/zend.debugger.active.in_.xampp_.png
tags:
    - apache
    - box
    - browser
    - chrome
    - code
    - create
    - debug
    - details
    - development
    - Download
    - downloads
    - eclipse
    - HowTo
    - java
    - linux
    - php
---

The [PDT project](http://www.eclipse.org/pdt/) is working towards providing a PHP Development Environment framework. This project was formerly known as **PHP IDE**.

- see [PDT 2.0 New &amp; Noteworthy](http://www.eclipse.org/pdt/release-notes/pdt2_0.php)
- see [the eclipse PDT WIKI](http://wiki.eclipse.org/index.php/PDT)

# Make #Eclipse PDT work for #Joomla development

## Install a PHP debugger

In order to be able to perform debugging using [eclipse PDT](http://www.eclipse.org/pdt/), you must download one of the following extra packages: XDEBUG or ZEND debugger. I was not able to get the debugger running with XDEBUG even after reading many tutorials and trial error approach. Both packages are free, and it has work nicely for me with ZEND debugger after 5 minutes…

Unfortunately, XDEBUG/ZEND can not be packaged with PDT due to license restrictions, so both tools are not just running out of the box without few efforts.

### PDT and Zend Debugger

#### Download

PDT + Zend in one package thanks to Zend.com (118MB), highly recommended

- [Download all-in-one for #Linux](http://downloads.zend.com/pdt/all-in-one/pdt-2.0.0GA_debugger-5.2.15.v20081217-all-in-one-linux-gtk.tar.gz)
- [Download all-in-one for Windows](http://downloads.zend.com/pdt/all-in-one/pdt-2.0.0GA_debugger-5.2.15.v20081217-all-in-one-win32.zip)
- [Download all-in-one for MacOS ](http://downloads.zend.com/pdt/all-in-one/pdt-2.0.0RC1_debugger-5.2.14.v20080602-all-in-one-macosx-carbon.tar.gz)

# OR** PDT (105MB) and add Zend debugger through software update later

- Open #Eclipse and go to Help-> Software Updates-> Find and Install
- Select “Search for new features to install” and click “Next”
- Create a New Remote Site with the following details:
- Name: PDT
- URL: <http://downloads.zend.com/pdt>
- Check the PDT box and click “Next” to start the installation

### XAMPP, Zend debugger working together

open the php.ini located at \xampp\\apache\\bin\\php.ini

and add the following

[DEBUGGER\]  
zend\_extension\_ts=**E:\\php\\bin\\eclipse\\plugins\\org.zend.php.debug.debugger.win32.x86\_5.2.15.v20081217\\resources\\php5\\ZendDebugger.dll** zend\_debugger.allow\_hosts=127.0.0.1/192.168.1.100  
zend\_debugger.expose\_remotely=always

# Notes**:

- Only one key zend\_extension\_ts is allowed per php.ini file, un-comment all other or it wont work,
- Attention: I did not move ZendDebugger.dll but use the one coming with eclipse Zend plugin, this may cause issues, if you update this plugin and the path change…

Restart XAMPP apache

By going to <http://localhost/xampp/phpinfo.php> check that you have a section # module_Zend Debugger">Zend Debugger</a>

![zend.debugger.active.in.xampp](/assets/images/2009/01/zend.debugger.active.in_.xampp_.png)

Put now a breakpoint in index.php of any Joomla! installation or deeper in any component you want to debug

And right click on index.php, debug as PHP Web Page (Alt-Shift-D, W)

# Attention**

While the first page get properly rendered in the internal browser of eclipse PDT, I was getting some strange rendering issues (html code produced look fine), by using an external browser like Chrome, Firefox, the problem has disappear.

### PDT and XDebug

Installing with PEAR/PECL is as easy as opening a command prompt and typing

```
# \xampp\php\pecl install xdebug
```

open the php.ini located at \\xampp\\apache\\bin\\php.ini

and un-comment the following

extension=php\_xdebug.dll

and

[XDebug\]  
;; Only Zend OR (!) XDebug  
zend\_extension\_ts=”e:\\xampp\\php\\ext\\php\_xdebug.dll”  
xdebug.remote\_enable=1  
xdebug.remote\_host=localhost  
xdebug.remote\_port=9001  
xdebug.remote\_handler=dbgp  
xdebug.profiler\_enable=0  
xdebug.profiler\_output\_dir=”\\xampp\\tmp”

Caveats:

1. Modify the correct php.ini file, check the page phpinfo, normally the right php.ini is located at \\xampp\\apache\\bin\\php.ini
2. You need to comment out any other references to “zend\_extension\_ts” in the php.ini file (the zend optimizer use it already as default)
3. Restart apache, and check the page <http://localhost/xampp/phpinfo.php> to make sure XDebug has been successfully installed

debugging AkoBookPlus:

![debugging.joomla.components](/assets/images/2009/01/debugging.joomla.components.png)

## Add subversion plugin

##### Install [subversive](http://www.eclipse.org/subversive/) by pointing the update manager to subversive update site

![svn.subversive.install](/assets/images/2009/01/svn.subversive.install.png)

You need also to install SVN connectors by adding a new update site:

<http://www.polarion.org/projects/subversive/download/eclipse/2.0/update-site/> – \[required\] Subversive SVN Connectors

![svn.subversive.install.connector](/assets/images/2009/01/svn.subversive.install.connector.png)

Eclipse will restart, you should be able to browse [www.joomlaCode.org](http://www.joomlaCode.org) repositories.

Happy Joomla! development and PHP debugging!