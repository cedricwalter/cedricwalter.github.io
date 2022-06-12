---
id: 7008
title: 'Ipod, iPhone, iPad Add to Home Screen for Joomla! CMS'
date: '2011-08-01T14:56:36+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7008'

tags:
    - ipad
    - iphone
    - ipod
    - message
---

[![add2Home_ipod_iphone_ipad_joomla_000](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_000_thumb.png "add2Home_ipod_iphone_ipad_joomla_000")](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_000.png)

This small plugin for #Joomla! add a message inviting iPhone/iPad users to add the web application to the home screen.

> The code is compatible with iPhone/iPod touch, iPhone4 and iPad. On older devices the “add” icon is a “+” while on iOS 4.2 it has been replaced with . The script detects the OS version and displays the appropriate icon.
> 
> The message appears after 2 seconds (customizable) from page load, and is destroyed after 20 seconds (also customizable). The balloon enters and exits the screen with a quick configurable animation: drop from top, bubble from bottom or fade in/out. Additionally it also let you choose a custom icon for your blog when a visitor adds your website to start screen.

[![add2Home_ipod_iphone_ipad_joomla_001](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_001_thumb.png "add2Home_ipod_iphone_ipad_joomla_001")](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_001.png) [![add2Home_ipod_iphone_ipad_joomla_002](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_002_thumb.png "add2Home_ipod_iphone_ipad_joomla_002")](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_002.png)

This plugin is based on the project [add2Home](http://cubiq.org/add-to-home-screen) (MIT license) and all credits goes to the author [Matteo Spinelli](http://cubiq.org/)

[Download here](https://waltercedric.com/new/?p=2354)

- plg\_add2home\_j15.zip for #Joomla! 1.5
- plg\_add2home\_j16.zip for #Joomla! 1.6/1.7

[![add2Home_ipod_iphone_ipad_joomla_00](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_00_thumb.png "add2Home_ipod_iphone_ipad_joomla_00")](/assets/images/2011/08/add2Home_ipod_iphone_ipad_joomla_00.png)

- **animationIn:** the animation the balloon appears with. Can be: `drop`, `bubble` and `fade`. Default: drop.
- **animationOut:** the animation the balloon exits with. Can be: `drop`, `bubble` and `fade`. Default: fade.
- **startDelay:** milliseconds to wait before showing the message. Default: 2000
- **lifespan:** milliseconds to wait before hiding the message. Default: 20000
- **bottomOffset:** distance in pixels from the bottom (iPhone) or the top (iPad). Default: 14
- **expire:** minutes before displaying the message again. If you don’t want to show the message at each and every page load, you can set a timeframe in minutes. The message will be shown only one time inside that timeframe. Default: 0 (=always show).
- **message:** Define a custom message to display OR set a fixed locale. If you don’t like the default message we have chosen for you, you can add your own. You can also force a language by passing the respective locale (eg: ‘en\_us’ will always display the English message). Default: ” (=script decides).
- **touchIcon:** if set to `true`, the script checks for `link rel="apple-touch-icon"` in the page `HEAD` and displays the application icon next to the message. Default: false.
- **arrow:** shows the little arrow pointing the bottom bar “add” icon. For custom designs you may want to disable it (ie: set it to `false`). Default: true.

You can see a demo of it at <http://vimeo.com/19090508> and it is currently active on this blog.

You can create your own Apple icon using free online service like

<http://wizardtoolkit.com/shooter/iPhone-Icon-Generator>