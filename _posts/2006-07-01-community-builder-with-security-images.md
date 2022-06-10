---
id: 2659
title: 'Community Builder with security images?'
date: '2006-07-01T10:21:20+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2659'
permalink: /joomla/community-builder-with-security-images/
header:
  teaser: /assets/images/2006/07/CommunityBuilder_logo.gif
tags:
    - joomla
    - securityimages
---

 Someone write me an email:  
Do you have anywhere people can chat about com\_securityimages? I want to use it but because I use Community Builder 1.0, there’s nothing I can do to use it without direct support for CB. I’m hoping there’s some place I can discuss this, maybe others have worked around it somehow etc? Is there a chance you’ll be able to make support for CB for this?

| ![](/assets/images/2006/07/CommunityBuilder_logo.gif) |Community Builder is- A #Joomla/Mambo component and 3 collaborating core modules - An environment for producing and maintaining online communities on #Joomla/Mambo driven sites - A system that provides user profile capabilities for #Joomla/Mambo sites - A different registration/login process for #Joomla/Mambo sites (supports 4 different workflows) - An environment that enables Mambo/Joomla site administrators to create user profiles that capture extra information from users (with the creation of new fields) that can be presented and organized in tabs (again defined by the administrator) - A framework for other #Joomla/Mambo components to integrate with user profiles |
|---|---|

I can look at the code for You, download Community Builder and make a patch, but right now I have a serious bug in securityimages 3.0.5 and all previous version, that require me to work on it…  
As soon as You have 2 capctha in the same page, securityimages won’t work! and this because I am using the same hidden field behind for both images.

So ideally I will first patch securityimages, and that will break compatibility with all 3rd party component (guestbook, comments, blogxx, …) , then patch Community Builder…