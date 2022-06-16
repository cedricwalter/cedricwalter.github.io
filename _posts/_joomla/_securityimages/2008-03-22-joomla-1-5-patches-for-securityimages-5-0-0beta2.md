---

title: 'Joomla! 1.5 patches for SecurityImages 5.0.0Beta2'
date: '2008-03-22T18:01:33+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/03/patches.altered.files_thumb.gif
---

I always dislike doing this (changing core file of #Joomla!) but here they ARE…

If any core developer of #Joomla! read this, can’t we look together to have more event hook (in views, more in controller) in #Joomla! core?

# Patches:

- Allow login views, login modules, register, lost password, lost user account and contact section to be protected by SecurityImages
- Are for #Joomla! 1.5.1 only and SecurityImages 5.0.0Beta2
- 14 files has been altered, mostly views, and com\_contact/com\_user controller, click on picture below for more details   
    [![patches.altered.files](/assets/images/2008/03/patches.altered.files_thumb.gif)](/assets/images/2008/03/patches.altered.files_.gif)
- Download file Joomla\_1.5.1-Stable-Full\_PackageForSecurityImages5.0.0.zip (33kB) and overwrite file on your server

Report all bugs [in the forums in the new section](http://forums.waltercedric.com/index.php?board=47.0)

Below are some screen shots of the BETA2 in #Joomla! 1.5 in action

## User operations

[![confirm.your.account](/assets/images/2008/03/confirm.your_.account_thumb.gif)](/assets/images/2008/03/confirm.your_.account.gif)

[![forgot.your.password](/assets/images/2008/03/forgot.your_.password_thumb.gif)](/assets/images/2008/03/forgot.your_.password.gif)

[![forgot.your.username](/assets/images/2008/03/forgot.your_.username_thumb.gif)](/assets/images/2008/03/forgot.your_.username.gif)

To switch these patches ON/Off, go to the Global Configuration page as seen in the screen shot below

[![global,configuration](/assets/images/2008/03/globalconfiguration_thumb.gif)](/assets/images/2008/03/globalconfiguration.gif)

You want to customize the error message? then edit the file language\\en-GB\\en-GB.com\_user.ini and change the key

<font face="Courier New" size="2">SECURITYIMAGES REJECT USER ENTRY=Invalid Captcha word, Please enter the correct value you see in picture

<font face="Courier New" size="2">SECURITYIMAGES LABEL=Anti-spamming protection:

## Contact section

On a per user/contact basis, a new switch is available:

[![contact.settings.securityimages.5.0](/assets/images/2008/03/contact.settings.securityimages.5.0_thumb.gif)](/assets/images/2008/03/contact.settings.securityimages.5.0.gif) 

<font face="tre">Result:

[![contact.sections](/assets/images/2008/03/contact.sections_thumb.gif)](/assets/images/2008/03/contact.sections.gif)

## Login area

Customize labels, keys are in language\\en-GB\\en-GB.mod\_login.ini

[![login.joomla](/assets/images/2008/03/login.joomla_thumb.gif)](/assets/images/2008/03/login.joomla.gif)

and in module

[![mod.login](/assets/images/2008/03/mod.login_thumb.gif)](/assets/images/2008/03/mod.login_.gif)

## Administrator area

<font face="tre">Patches for administrator area are missing because the plugin SecurityImages in front end start a session that is different from the backend. I will for sure find a way to get around it. In between I recommend You to use htaccess login to enhance admin login protection and reduce brute force attacks.