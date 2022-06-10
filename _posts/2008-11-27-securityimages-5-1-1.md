---
id: 3942
title: 'Securityimages 5.1.1'
date: '2008-11-27T19:51:01+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3942'
permalink: /joomla/securityimages-5-1-1/
---

**[![compat_15_native](/assets/images/2008/09/compat_15_native_thumb.png)](/assets/images/2008/11/compat_15_native.png) -** [![ext_com](/assets/images/2008/11/ext_com_thumb.png)](/assets/images/2008/09/ext_com.png) Component – [![ext_mod](/assets/images/2008/11/ext_mod_thumb.png)](/assets/images/2008/09/ext_mod.png) Module – [![ext_plugin](/assets/images/2008/11/ext_plugin_thumb.png)](/assets/images/2008/09/ext_plugin.png) Plugin

| [![com_securityimages](/assets/images/2008/11/com_securityimages_thumb.jpg)](/assets/images/2008/11/com_securityimages.jpg) | **This is an intermediate release before the new version 5.2.0** It solved the following major issues in version    5.1.0 |
|---|---|

**BUG**: logs table were not properly deleted after removing the component

**BUG**: securityimages was not installing at all in #Joomla! 1.5.8 but properly in previous version.

The error has been found, it was my fault, I was incorrectly having 2 xml installer with the same name!

- File A in {ziproot}/securityimages.xml for installing the main component
- File B in {ziproot}/plugin/securityimages.xml for the system plugin configuration/install

So it seems that #Joomla! previous to 1.5.8 was searching or ordering zip file entries differently…   
In previous versions (before 1.5.8), #Joomla! found the file A, and install was a success, while in #Joomla! 1.5.8 it just found file B and failed to install the main component part.

Now my solution has been to zip the system plugin in an additional zip file plugin.zip that will get unpacked at install time in /plugins/system/

I’ve tested the install with the following version of #Joomla! 1.5.5, 1.5.6, 1.5.7 and 1.5.8

[This page will keep you informed](updater.php?option=com_versions&catid=10), RSS also available [![Feed Icon](/assets/images/2008/09/feed-icon.png)](index2.php?option=com_versions&catid=12&task=feed)