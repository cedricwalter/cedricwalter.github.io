---

title: 'Welcome to the install of opencomment 3.0.30 BETA'
date: '2007-05-18T12:48:18+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/opencomment-72.jpg
tags:
    - joomla
---

![](/assets/images/2006/03/opencomment-72.jpg)opencomment 3.0.30   
<span style="font-weight: bold; color: rgb(0, 153, 0);">NEW: you can disable the paging algorithm… so users do not have to click many times to go through all comments  
<span style="font-weight: bold; color: rgb(0, 153, 0);">NEW: admin can unpublish comment in frontEnd  
<span style="font-weight: bold; color: rgb(0, 153, 0);">NEW: more security check for admin AJAX functions  
BUG: language not correct in frontend, fallback to english. was only if register globals off  
BUG: [newest comment first fix …](http://forums.waltercedric.com/index.php?topic=274.msg1046#msg1046) submitted by Fanno  
BUG: [bbcode support fix ?](http://forums.waltercedric.com/index.php?topic=271.msg1043#msg1043) submitted by Fanno  
BUG: [small admin fix](http://forums.waltercedric.com/index.php?topic=273.msg1045#msg1045) submitted by Fanno  
BUG: [IMPORTANT FIX](http://forums.waltercedric.com/index.php?topic=281.msg1071#msg1071) do not allow visitor to delete comment – submitted by Fanno

1. You will be able to see the latest version running at demo.waltercedric.comsoon
2. Recommended is to do a backup of your database prior to install!

Install file in order specified by number…

- 001.mambot\_xajax4joomla.plugin.zip
- 002.component\_opencommentxx.yy.zz.zip
- 003.mambots\_opencommentxx.yy.zz.zip

 The optionnal directory contains modules and components not required by Opencomment depending  
 on your setup

 Against spammers:  
 (You only need to use one of these)

 /optionnal/com\_securityimagesxx.yy.zz.zip  
 install com\_securityimages security against spammers using CAPCTHA. May annoy users as they have to solve a puzzle

 /optionnal/com\_askimetxx.yy.zz.zip  
 install com\_askimetxx.yy.zz sagainst spammers using askimet webservices. Transparent for users.

 /optionnal/module\_opencommentlatestxx.yy.zz.zip  
 A module for displaying the latest 10 comments

 Issues? #Joomla component troubleshooting  
 Please read [http://www.waltercedric.com/content/view/1059/247/](../content/view/1059/247/)

 Download HERE (2MB) unpack first! [http://www.waltercedric.com/dmdocuments/UnpackFirst-OpenComment3.0.30.zip](../dmdocuments/UnpackFirst-OpenComment3.0.30.zip)