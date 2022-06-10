---
id: 7561
title: 'Add2Home 1.6.3 for J2.5 Released'
date: '2012-03-07T21:41:23+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7561'
permalink: /joomla/add2home-1-6-3-for-j2-5-released/
header:
  teaser: /assets/images/2011/09/add2Home_ipod_iphone_ipad_joomla_000_thumb.png
tags:
    - joomla
---

![](/assets/images/2011/09/add2Home_ipod_iphone_ipad_joomla_000_thumb.png)

This small plugin for #Joomla! add a message inviting iPhone/iPad users to add the web application to the home screen.

> The code is compatible with iPhone/iPod touch, iPhone4 and iPad. On older devices the “add” icon is a “+” while on iOS 4.2 it has been replaced with . The script detects the OS version and displays the appropriate icon.
> 
> The message appears after 2 seconds (customizable) from page load, and is destroyed after 20 seconds (also customizable). The balloon enters and exits the screen with a quick configurable animation: drop from top, bubble from bottom or fade in/out. Additionally it also let you choose a custom icon for your blog when a visitor adds your website to start screen.

## What’s new

- New version for #Joomla 2.5 / 1.5
- New javascript engine in version 2.0,
- New CSS,
- Add support for returningVisitor: show the message to returning visitors only. Set this to true and the message won’t be shown the first time an user visits your site. Default: false,
- Add support for autostart: should the balloon be automatically initiated? Default: true.
- BUG: avoid duplicate javascript insertion now using onAfterDispatch() instead of onAfterInitialise
- BUG: now touchIcon is properly inserted in message
- Add support for custom iconMessage,
- add support status-bar styling:   
    Sets the style of the status bar for a web application.   
    This meta tag has no effect unless you first specify full-screen mode as described in “apple-mobile-web-app-capable.”   
    If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar. The default value is default.

Full list of changes available in [GIT](http://git-scm.com/) commit [e1e375cc44d594236db2a84702bad6f426ce99b6](https://github.com/cedricwalter/add2home/commit/e1e375cc44d594236db2a84702bad6f426ce99b6)

[![](http://www.waltercedric.com/images/download-zip.png)](http://www.waltercedric.com/downloads/add2home.html)[![](http://www.waltercedric.com/images/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Add2Home_(Apple_springboard)_your_Joomla_site)[![](http://www.waltercedric.com/images/support.png)](http://forums.waltercedric.com/)

[![add2Home_ipod_iphone_ipad_joomla_001](http://www.waltercedric.com/images/3c663fc23a4e_D1BD/add2Home_ipod_iphone_ipad_joomla_001_thumb.png "add2Home_ipod_iphone_ipad_joomla_001")](http://www.waltercedric.com/images/3c663fc23a4e_D1BD/add2Home_ipod_iphone_ipad_joomla_001.png) [![add2Home_ipod_iphone_ipad_joomla_002](http://www.waltercedric.com/images/3c663fc23a4e_D1BD/add2Home_ipod_iphone_ipad_joomla_002_thumb.png "add2Home_ipod_iphone_ipad_joomla_002")](http://www.waltercedric.com/images/3c663fc23a4e_D1BD/add2Home_ipod_iphone_ipad_joomla_002.png)

This plugin is based on the project [add2Home](http://cubiq.org/add-to-home-screen) (MIT license) and all credits goes to the author [Matteo Spinelli](http://cubiq.org/)

You can see a demo of it at <http://vimeo.com/19090508> and it is currently active on this blog.

You can create your own Apple icon using free online service like <http://wizardtoolkit.com/shooter/iPhone-Icon-Generator>