---
id: 2332
title: 'com_securityimages 3.0.0rc2'
date: '2006-03-02T17:20:13+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2332'

tags:
    - displaying
    - installation
    - localization
    - screenshots
    - securityimages
---

Has been released at #Joomla Forge, [see details here](/component/option,com_versions/Itemid,250/)

It is also rnning on my homepage so it is a pretty stable version 😉 tested against akcomment, akobook, contact

# Securityimages 3.0.0rc2**

- new: Logged in Users No/Yes Switch off the system for logged in users?
- new: new plugin HNCapctha which create beautiful captcha (as seen on my site)
- new: better localization of installation
- new: A system class detector which detect GD library and help users
- new: add 3 more fonts
- bug: reverse logic for displaying reload, sound button
- new start sound support, not active in this release.
- new better admin panel with screenshots of possible captcha and securityimage virtual box
- **Refactoring**:   
    – OO improvments: 8 new classes, DAO, move common setting to general tabs   
    – move fonts to root of components/com\_securityimages so they can be share among plugins