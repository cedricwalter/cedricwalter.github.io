---
id: 3932
title: 'Securityimages 5.1.0 not installing with Joomla 1.5.8'
date: '2008-11-21T13:52:52+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/11/software.bug_thumb.jpg
---

[![software.bug](/assets/images/2008/11/software.bug_thumb.jpg)](/assets/images/2008/11/software.bug_.jpg) Many users have reported issues in my forums, it is currently not possible to install SecurityImages   
 5.1.0 in the latest version of #Joomla! 1.5.8

I already test the following locally in my developer environment

1. A previous version of SecurityImages 5.0.0RC1 is properly installing in #Joomla! 1.5.8 but you need to install also the   
    system plugin manually
2. The latest version of SecurityImages 5.1.0 is properly installing in #Joomla! 1.5.5, 1.5.6 and 1.5.7 but not in #Joomla! 1.5.8
3. If I remove in SecurityImages 5.1.0 the automatic install of the system plugin along with the component, the install succeed   
     but you need to install also the system plugin manually

So it seems that installing the component through the #Joomla! installer framework, together with a system plugin   
(using install.securityimages.php) in one shot is no more possible due to…???

I am still investigating, but that will take a bit of time as there is no error in logs files of apache, php and #Joomla!