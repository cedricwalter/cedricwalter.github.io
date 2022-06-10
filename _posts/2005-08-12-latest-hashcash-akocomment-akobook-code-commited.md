---
id: 1984
title: 'Latest hashcash, akocomment, akobook code commited'
date: '2005-08-12T23:47:21+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1984'
permalink: /development/latest-hashcash-akocomment-akobook-code-commited/
tags:
    - dependencies
    - securityimages
---

I have just committed the latest code **Hashcash 1.0** and 3rd party components AkoComment, Akobook from Arthur Konze to cvs.hashcash.mamboforge.net (cvs tag: v01\_00\_00)

**I have also**

- Created a new administrator component for security images (GNU/GPL release). <font color="#ff0000" style="BACKGROUND-COLOR: #ffff00">com\_securityimages, done and tested
- Modified successfuly AkoComment and AkoBook, done and tested
- Create an admin panel-&gt; not tested. It is really a pain to create stunning admin backend panel….

I will soon publish this code to mamboforge, maybe in a new project. Only problem, by designing Mambo framework components, I still have a strong dependencies tree:

*com\_akobook and com\_akocomment **required** com\_hashcash and com\_securityimages **required** com\_log4php*

So it is pretty difficult to maintain version number across 5 components (with 2 not being mine) and make new version of each without going through testing and bulk delivery (all five together)