---
id: 2678
title: 'demo site renewed'
date: '2006-08-11T22:00:24+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2678'
permalink: /joomla/demo-site-renewed/
image: /wp-content/uploads/2006/08/demo.waltercedric.com_.logo_.jpg
---

 ![](/assets/images/2006/08/demo.waltercedric.com_.logo_.jpg)  
The demo site at [demo.waltercedric.com](http://demo.waltercedric.com/) has been refreshed with the latest stable version

- securityimages 3.0.7 (solve a severe security issue in 3.0.5)
- hashcash 1.2.2 (solve a severe security issue in 1.2.1)
- joomlacloud 1.0.2
- run with #Joomla 1.0.10

In the development queue, I have new versions of my components:  
  
<span style="font-weight: bold;">Securityimages version 4.0.0 which allow many captcha on the same page a I have introduce a notion of package visibility. I’ve add a new plugin: supersmall which is foreseen for all modules, or components where space is an issue. the code is stable enough to be in a version

<span style="font-weight: bold;">Joomlacloud version 1.1.0 has a lot of new features:

- Can now lowercase all words if desired, so CeDRIC = CeDRIC = Cedric in order to avoid duplicate entry in cloud.
- Can search across MetaTag, configurable through the admin panel, this settings can be finely change at the module, component, mambot level.
- Real factories Classes, user can now choose a default limiter, scanner, analyze But components, mambots, modules may force another classes type at runtime.
- A better admin panel.
- An English dictionary of all dummy words You would not want to see in the list of words. (now XXX words instead of only 38 in previous version)

<span style="font-weight: bold;">Opencomment 3.0.0beta1 has been protected against replaying attack, mass attack and injection of parameters. Installer has to be debugged…

<span style="font-weight: bold;">Virtuemart patches are also developed for using securityimages…

All components above will be deployed on the demo site soon…