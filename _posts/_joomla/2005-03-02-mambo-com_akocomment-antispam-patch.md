---
id: 1595
title: 'Mambo com_akocomment antispam patch'
date: '2005-03-02T20:01:17+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1595'

header:
  teaser: /assets/images/2005/03/stopspamming.jpg
tags:
    - consuming
    - javascript
    - joomla
    - technology
---



| ![](/assets/images/2005/03/stopspamming.jpg)   Comments are welcomed! | Here we go….   I’ve patched the component Ako comment of Arthur Konze with a hashcash technology….:   A new form hidden field: - with a random name (Hname), - with a random MD5 value (Hvalue),  is now send to the user.  If the user want to submit a comment, a browser has to:  - Locate the random hidden field name (Hname) with javascript: (function replace()) - Rehash with a javascript MD5 the hidden field value (Hvalue) (and this is time consuming for spammer 🙂 )  and send everything to server.  If the spammer do not follow the challenge, the comment wont be accepted!  required: com\_log4php and com\_hashcash library   The zip file in download sections contains the components and the mambot! decompress first before installing both.   All credit to Arthur Konze for his wonderful component. |
|---|---|

