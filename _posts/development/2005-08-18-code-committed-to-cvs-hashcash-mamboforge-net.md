---
id: 2002
title: 'Code committed to cvs.hashcash.mamboforge.net'
date: '2005-08-18T20:14:59+02:00'
author: 'Cédric Walter'



tags:
    - background
    - combination
    - cryptographic
    - javascript
    - securityimages
    - submitting
---

I have decided to put *com\_securityimages* in the same cvs tree as com\_hashcash since these 2 components are designed to protect You against spammers.

- **com\_hashcash:** Forcing the spammer to pay the price (computing power) before submitting rubish to Your homepage (comments, guestbook for example). The user will have to create a new cryptographic value of a hidden field (Javascript code provided) and that may take 1 to 2 seconds, but may be more with RSA 1024….  
    This also do not allow robot to easily sumbit code without parsing Your HTML page before…
- **com\_securityimages**: Security images are dynamically generated images containing hard to read text, it is using a combination of font colors, font size, fuzzy background, font   
    angles in order to disallow computer to automate reading (and so limit spamming).  
    The user (a human) has to reproduce all character correctly before being allowed  
    to post.

At the same time, Akobook and Akocomment are also commited and the core contact component (***com\_contact***) of Mambo too. Enjoy.   
You can see these 2 components, 3 modifed version in action on my homepage…Tomorrow a binary bundle of all components will be available.