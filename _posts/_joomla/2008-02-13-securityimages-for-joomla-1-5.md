---
id: 3186
title: 'SecurityImages for JOOMLA! 1.5'
date: '2008-02-13T23:27:34+01:00'
author: 'Cédric Walter'



tags:
    - joomla
    - securityimages
---

 More than 4 years since the first version of securityimages,

 <big style="font-weight: bold; font-style: italic"><big><big>SecurityImages for JOOMLA! 1.5 will be out soon</big></big></big>

 <span style="font-weight: bold; color: #3333ff">NEW: full translation now possible of static pages about.html, developer.html and troubles.html  
 <span style="font-weight: bold; color: #3333ff">NEW: migration to #Joomla! 1.5 API, security, database factory, logging, installer -> reduction of code  
 <span style="font-weight: bold; color: #3333ff">NEW: unique language files following #Joomla! 1.5 convention  
 <span style="font-weight: bold; color: #3333ff">NEW: utf8 support

 But  
 <span style="font-weight: bold; color: #ff0000">NOT fully MVC for all views in Administration Area  
 <span style="font-weight: bold; color: #ff0000">NO added functionalities compare to SecurityImages 4.2.3

 <span style="font-weight: bold; color: #ff0000">Right now I am blocked and can not store any data in the PHP session using   
 <span style="font-size: 10pt"><span style="font-family: Courier New">$session = &amp;JFactory::getSession();  
 <span style="font-family: Courier New">$session->set(‘key’, value);  
 Since all <span style="font-size: 10pt"><span style="font-family: Courier New">imageGenerator.php not in a #Joomla! include script run

 This is the latest issue, i’ve seen, and I will find a way to get around it. moreover my site [www.waltercedric.com](http://www.waltercedric.com) will be also migrated to #Joomla! 1.5 in no more than 2 weeks