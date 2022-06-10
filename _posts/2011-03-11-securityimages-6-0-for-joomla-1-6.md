---
id: 6573
title: 'SecurityImages 6.0 for Joomla! 1.6'
date: '2011-03-11T20:31:25+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6573'
permalink: /joomla/securityimages-6-0-for-joomla-1-6/
tags:
    - backend
    - demo
    - joomla
    - login
    - protect
    - securityimages
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2011/03/joomla_cms.png)

Protect any #Joomla! 1.6 forms with [CAPTCHA](http://www.captcha.net/). SecurityImages has been written a long time ago, born in 2004, first running under Mambo then rapidly #Joomla! 1.0, 1.5 till today in #Joomla! 1.6

For all those that still don’t know what a [CAPTCHA](http://www.captcha.net/) is:

> A [CAPTCHA](http://www.captcha.net/) is a program that can tell whether its user is a human or a computer. You’ve probably seen them — colorful images with distorted text at the bottom of Web registration forms. CAPTCHAs are used by many websites to prevent abuse from “bots,” or automated programs usually written to generate spam. No computer program can read distorted text as well as humans can, so bots cannot navigate sites protected by CAPTCHAs.

# Demo site

[See the demo here](http://localhost/demo-joomla-1.6/index.php/using-joomla/extensions/components/users-component/registration-form), login to administrator backend with login=visitor and password=visitor

# Features

- Support all #Joomla! 1.6 or 3rd party extensions that use the latest JForm fields
- Update manager is also supported, keep up to date this extension with only one click using #Joomla! 1.6 extensions manager
- **SecurityImages 6.x is #Joomla! 1.6 native**, it wont run in #Joomla! 1.5 (use SecurityImages 5.x) nor #Joomla! 1.0 (use SecurityImages 4.x)
- License as always under GNU/GPL v3.0 or later
- It support the latest [CAPTCHA](http://www.captcha.net/) online engine: [KeyCaptcha](https://www.keycaptcha.com/), [NUCaptcha](http://www.nucaptcha.com/), [Recaptcha](http://www.google.com/recaptcha/whyrecaptcha)

[![](components/com_docman/themes/mjaztools_blogtheme/images/icons/32x32/zip.png)](https://waltercedric.com/new/?p=600) [![](/assets/images/2011/02/wiki_icon.jpg)](http://wiki.waltercedric.com/index.php?title=SecurityImages6.0.X) [![](/assets/images/2011/02/forums_icon.gif)](http://forums.waltercedric.com/)

## KeyCaptcha

# Require to create a free account and register** your site at <https://www.keycaptcha.com/>

- Spam-bots are powerless against KeyCAPTCHA
- It isn’t possible to transfer it to third parties for recognition
- Only KeyCAPTCHA servers know the right solution
- It works in all modern browsers
- There are two modes of work: HTML5 and Flash
- It supports iPhone, iPad and Android
- It’s user-friendly

[![securityimages.keycaptcha.joomla.1.6](/assets/images/2011/03/securityimages.keycaptcha.joomla.1.6_thumb.png "securityimages.keycaptcha.joomla.1.6")](/assets/images/2011/03/securityimages.keycaptcha.joomla.1.6.png)

## NUCaptcha

# Require to create a free account and register** your site at <http://www.nucaptcha.com/>

[![securityimages.nucaptcha.joomla.1.6](/assets/images/2011/03/securityimages.nucaptcha.joomla.1.6_thumb.png "securityimages.nucaptcha.joomla.1.6")](/assets/images/2011/03/securityimages.nucaptcha.joomla.1.6.png)

## ReCaptcha

reCAPTCHA is a free CAPTCHA service that helps to digitize books, newspapers and old time radio shows.

# Require to create a free account and register** your site at <http://www.google.com/recaptcha/whyrecaptcha>

[![securityimages.recaptcha.joomla.1.6](/assets/images/2011/03/securityimages.recaptcha.joomla.1.6_thumb.png "securityimages.recaptcha.joomla.1.6")](/assets/images/2011/03/securityimages.recaptcha.joomla.1.6.png)

# Limitations

1. Only register Joomla! 1.6 form is protected by the captcha for now. This is because **not all** [Joomla!](http://www.joomla.org/) 1.6 forms are using JForm Fields. I hope to see all forms rapidly migrated in later version (Joomla! 1.6.1???)
2. Currently my own captcha engine: HNCaptcha, Calculator and Core are not migrated and thus not supported. They are anyway outdated.