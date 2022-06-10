---
id: 3815
title: 'SecurityImages 5.1.0 Release H-24 hours'
date: '2008-09-19T19:41:22+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3815'
permalink: /joomla/securityimages-5-1-0-release-h-24-hours/
---

**[![compat_15_native](/assets/images/2008/09/compat_15_native_thumb.png)](/assets/images/2008/09/compat_15_native.png) –** [![ext_com](/assets/images/2008/09/ext_com_thumb.png)](/assets/images/2008/09/ext_com.png) Component – [![ext_mod](/assets/images/2008/09/ext_mod_thumb.png)](/assets/images/2008/09/ext_mod.png) Module – [![ext_plugin](/assets/images/2008/09/ext_plugin_thumb.png)](/assets/images/2008/09/ext_plugin.png) Plugin

The focus on this release is to make the install more easier, as it is one major source of complains. I did also set up new release management tools so you should never search again for a file on my homepage…

**Component**

**NEW**: plugin is now part of the component, it is installed and published automatically when you install my component. It is also remove automatically when you remove the component.   
**NEW**: German translations thanks to Simon Grazioli from Switzerland   
**NEW: **Italian translations thanks to   
**NEW**: icons are back in menu for more clarity   
**BUG**: one variable not set in /components/com\_user/controller.php; line 48 : captcha not displayed as a result.   
**BUG**: Reload limit not taken into account. Reload limit is configured in the SecurityImages system plugin Extensions-&gt;Plugin Manager-&gt;System – SecurityImages-&gt;Plugin Parameters-&gt;Reload captcha count   
**BUG**: Several subtle bugs discovered by **[svert](http://forums.waltercedric.com/index.php?action=profile;u=753)** (forum [HERE](http://forums.waltercedric.com/index.php?topic=575.msg2123#msg2123))

**NEW**: Better check you system page checking now permissions. Remark, securityimages5 just require read permissions, so for 99% of your php files r–r–r– (chmod 444) is more than enough! configuration file must have rw-r–r– (chmod 644) or you wont be able to change configuration file with the #Joomla GUI. NEVER NEVER use chmod 777 on any directory or file!

**NEW**: #Joomla! Patches are now fully configurable -&gt; you can decide to activate captcha on some area or not   
(require to install new patches **#Joomla\_1.5.x-Stable-Full\_PackageForSecurityImages5.1.0\_v01.00.00.zip** )

Note the version PackageForSecurityImages5.1.0

These patches are still way too intrusive toward #Joomla! I am looking for an alternative for the next versions…

 [Contact me if you have an idea how it should be made in #Joomla!](-contact-me.html)

[![securityimages5.1.0.joomla.patches](/assets/images/2008/09/securityimages5.1.0.joomla.patches_thumb.gif)](/assets/images/2008/09/securityimages5.1.0.joomla.patches.gif)

**TODO**: recaptcha plugin is not available for legacy 3rd party application, as SecurityImages send only an image back. This is clearly not the most flexible way to get an HTML back instead (sic). So at the moment, I need to change API’s, SecurityImages should return a HTML block with everything inside (image, field, #JavaScript, links). The change is trivial but not for all 3rd party application around that get suddenly broken…

**NEW**: XHTML 1.0 compliant for all #Joomla! patches.

**NEW**: Better documentation on how to add SecurityImages in contact, login, register

[![securityimages5_betterdoc](/assets/images/2008/09/securityimages5_betterdoc_thumb.png)](/assets/images/2008/09/securityimages5_betterdoc.png)

> Download files for your right version of #Joomla [HERE](updater.php?option=com_versions&catid=11) (33kB) and **EXTRACT ARCHIVE!**   
> overwrite file on your server **VIA FTP/SCP**   
> Go to #Joomla! control panel and HIT at least SAVE config once, this will add a new boolean value   
> (true or false) in #Joomla! configuration for using SecurityImages.

**Updating, security**

**NEW**: Menu “Check for latest version” drive you to Securityimages5, it [has now its own category (10) in my version manager](updater.php?option=com_versions&catid=10), so users of SecurityImages 4.x.x (Joomla! 1.0.x only) do not get confuse. You may also want to register the RSS of that category [![Feed Icon](/assets/images/2008/09/feed-icon.png)](index2.php?option=com_versions&catid=10&task=feed) for never missing any new release 🙂

**NEW**: #Joomla! 1.5 patches [have now their own category in my version manager](updater.php?option=com_versions&catid=11), You may also want to register the RSS of that category [![Feed Icon](/assets/images/2008/09/feed-icon.png)](index2.php?option=com_versions&catid=11&task=feed), you’ll never search for the right patch again as everything is resume there.

The same apply for all previous users of SecurityImages4/Joomla1.0.X, [this page will keep you informed](updater.php?option=com_versions&catid=12), RSS also available [![Feed Icon](/assets/images/2008/09/feed-icon.png)](index2.php?option=com_versions&catid=12&task=feed)

Both are available using the menu as seen below:

[![securityimages5_checkgetpatches](/assets/images/2008/09/securityimages5_checkgetpatches_thumb.png)](/assets/images/2008/09/securityimages5_checkgetpatches.png)