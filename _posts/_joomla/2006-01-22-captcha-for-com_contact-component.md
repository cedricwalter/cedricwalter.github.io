---
id: 2288
title: 'captcha for com_contact component'
date: '2006-01-22T10:53:54+01:00'
author: 'Cédric Walter'



tags:
    - integration
    - securityimages
---

 I have receive 3 email yesterday asking me how to integrate com\_securityimages into the contact section   
  
just wondering how you have implemented the CAPtcha for this contact us form, i mean the integration of your wonderful component with the com\_contact or the joomla/mambo contact us page…

thanks for the compliments I always appreciate 🙂  
  
Some remarqs:

- com\_contact is a core component of Mambo/Joomla
- com\_contact has no extension mechanism, no way till today to plug code on the fly -> I must add 8 lines of ly code in a portion of code manually. I am doing this for You, and publish the latest #Joomla version at joomlaforge
- I have never tried to deinstall com\_contact, (You can try if you want), and use the installer to install my modified version, I personnally prefer using FTP and overwrite files at the right place…since I am a developer I feel I have more control

Download: [com\_contact HERE ](http://forge.joomla.org/sf/go/projects.com_securityimages/frs.3rd_party_or_core_components)(choose the right version for You #Joomla install) and overwrite file on your server