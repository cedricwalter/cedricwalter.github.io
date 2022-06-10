---
id: 2254
title: 'scratching my head in mediawiki code'
date: '2006-01-03T23:59:31+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2254'
permalink: /joomla/scratching-my-head-in-mediawiki-code/
tags:
    - background
    - extensions
    - integration
    - securityimages
    - technology
---

I work 2 hours on the integration of my framework securityimages (CAPTCHA) into the latest stable version of MediaWiki 1.5.4. Right now the code is not far away from working, in fact I hit the complexity of MediaWiki framework (a huge and well written code, but huge huge)

I am able to:

- I have create an extension with my latest code of securityimages for #Joomla 2.2.7
- I can locate a tag <check></check> in articles, ideally it should be an inputbox, but for a prof of concept, it is more than enough…
- Check a captcha for exactitude, but can’t insert the image into the editing page (which is of course a requirement)
- The structure of plugins, background and dynamic of code is preserved!
- No admin panel but the original config file ( text file)

If any developer of wikimedia read this, and want to help, You can contact me. I have the technology to bring captcha security (which is relative remembr there is some OCR program to defat them) very fast.

# References** [List of existing MediaWiki extensions](http://meta.wikimedia.org/wiki/Category:Mediawiki_Extensions)