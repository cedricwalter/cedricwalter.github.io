---
id: 2016
title: 'What&#8217;s new in version 1.1'
date: '2005-08-26T19:42:39+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2016'

header:
  teaser: /assets/images/2005/08/logobuginLogs.gif
tags:
    - background
    - characters
    - OpenSuse
    - securityimages
---

Be patient, the package 1.1 of captcha for mambo will be soon available. click read more to see what’s new…

  **com\_securityimages for Mambo 1.1**| **bug:** | ![](/assets/images/2005/08/logobuginLogs.gif) | Logo was not displayed in "view logs file" |
|---|---|---|
| **bug:** |  | since imageGenerator.php was in /administrator/components/com\_securityimages it was impossible to have a file .htaccess to protect this zone (admin panel). I have move moved this file to /components/com\_securityimages (in semi public zone) |
| **bug:** |  | error while viewing logfile |
| **bug:** |  | in Mambo installer, not all file were copied -> false XMl deployment descriptor |
| **bug:** |  | not checking that security.txt has write right before opening it -> a warning is also in the settings panel |
| **new:** | ![](/assets/images/2005/08/emptyTable.gif) | in database panel, empty temporary table and get an idea of pending post (statistics) |
| **new:** | ![](/assets/images/2005/08/previewBkgImages.gif) | available backgound image preview |
| **new:** | ![](/assets/images/2005/08/interval.gif) | better documentation |
| **new:** | ![](/assets/images/2005/08/newcharacter.gif) | Using following new characters:   "+","\*","%", "&amp;","/","(",")","=","?","!","$","Â£","@","#" |
| **new:** | ![](/assets/images/2005/08/textTab.gif) | Use a different number of characters each time |
| **new:** | ![](/assets/images/2005/08/newbkg.gif) | 5 new background from an other GNU-GPL project: Authen   By Seth T. Jackson, Josh I. Miller |
| **new:** |  | **More free TTF fonts**   from <http://www.webpagepublicity.com/free-fonts.html>    If You choose more than one, each character will be render with one random fonts |
| **new:** |  | **Add a grid**    above image with random color line |
| **new:** |  | Possibiliy to choose **the range of color for text** |
| **new:** |  | **Previewing your changes**   Use and abuse of it! because You can create images that sometimes are unreadable! |
| **new:** |  | **Support a mix of true type fonts**– The whole text will use the same font   – Each character in the text will use a different font. |