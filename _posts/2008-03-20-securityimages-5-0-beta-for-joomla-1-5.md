---
id: 3272
title: 'SecurityImages 5.0 BETA for Joomla! 1.5'
date: '2008-03-20T17:52:43+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3272'
permalink: /joomla/securityimages-5-0-beta-for-joomla-1-5/
image: /wp-content/uploads/2008/03/index.php_thumb.jpg
---

[![index.php](/assets/images/2008/03/index.php_thumb.jpg)](/assets/images/2008/03/index.php_.jpg)

 **Beta to be released before end of week!** 

**NEW:** No HTML warning, XHTML compliant   
**NEW:** GPL v3 The FSF Compliance Lab has published [A Quick Guide to GPLv3](http://www.fsf.org/licensing/licenses/quick-guide-gplv3.html), a developer-friendly article explaining the new features and benefits of GPLv3. Be sure to check it out.   
**NEW**: full translation now possible of static pages about.html, developer.html and troubles.html   
**NEW**: migration to #Joomla! 1.5 API, security, database factory, logging, installer -> reduction of code   
**NEW**: unique language files following #Joomla! 1.5 convention (ini files)   
**NEW**: utf8 support   
**NEW**: no PHP warning in logs

**Architectural changes NEW**: a system plugin (to install separately) for generating captcha in any 3rd party component using events trigger

**NEW**: MVC model for the public component part. Now all request creating images are going through the component controller for:

- improved security
- having access to #Joomla! framework (no more session or database issues)

Developer can now request to use a particular captcha plugin:

This request give you the captcha defined in the administrator panel configuration of SecurityImages

[http://localhost/prod2/index.php?option=com\_securityimages&amp;task=displaycaptcha](http://localhost/prod2/index.php?option=com_securityimages&task=displaycaptcha)

While this request, let you specify the plugin and version

[http://localhost/prod2/index.php?option=com\_securityimages&amp;task=displayCaptchaByPlugin&amp;plugin=hncaptcha&amp;version=1.0](http://localhost/prod2/index.php?option=com_securityimages&task=displayCaptchaByPlugin&plugin=hncaptcha&version=1.0)

To check what the user has entered:

<font color="#0000bb">$return <font color="#007700">= <font color="#0000bb">false<font color="#007700">;   
<font color="#0000bb">$securityImagesJoomlaContactUserTry <font color="#007700">= <font color="#0000bb">JRequest<font color="#007700">::<font color="#0000bb">getVar<font color="#007700">(<font color="#dd0000">‘securityImagesJoomlaContactUserTry’<font color="#007700">, <font color="#0000bb">false<font color="#007700">, <font color="#dd0000">”<font color="#007700">, <font color="#dd0000">‘CMD’<font color="#007700">);   
<font color="#0000bb">$mainframe<font color="#007700">-><font color="#0000bb">triggerEvent<font color="#007700">(<font color="#dd0000">‘<font color="#dd0000">onSecurityImagesCheck<font color="#dd0000">‘<font color="#007700">, array(<font color="#0000bb">$securityImagesJoomlaContactUserTry<font color="#007700"> &amp;<font color="#0000bb">$return<font color="#007700">));

<font face="Trebuchet MS">If return is true, then the user / bots has solved the captcha correctly.

**Attention:** SecurityImages is still WAY to intrusive toward #Joomla! as core file has to be changed in order to use captcha.

 Moreover #Joomla! 1.5 use now a kind of hashcash protection to avoid request forgeries (a crypto encrypted time/server dependent magic value in form)

**Insert in any HTML form with** JHTML::\_( ‘form.token’ )   
**check in your controller with** JRequest::checkToken() or die( ‘Invalid Token’ );