---
id: 1982
title: 'Security images in Mambo'
date: '2005-08-10T20:20:21+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1982'

header:
  teaser: /assets/images/2005/08/securityImagesInMambo.png
tags:
    - configurable
---

| ![](/assets/images/2005/08/securityImagesInMambo.png) |
|---|
| In order to avoid spamming at any cost, I include security images in Mambo. The component (a part of hashcash) wont be released before end of the week even if it is functionnal mainly because:  - I want to integrate this technology in the guestbook (Akobook) ->**Not done yet** - I want to integrate this technology in the administrator login page, this for avoiding brute force attack ->**Not done yet** - I want to have a beautiful backend panel, because this functionnality is highly configurable: ->**Not done yet** Ex of variables in code (not all):       *$textLength = 8;       $useRandomSize = true;       $textFontSizeDefualt = 14;       $textFontSizeMin = 12;       $textFontSizeMax = 18;       $textFontName = "garamond.ttf";       $useRandomTextAngle = true;       $textAngleMin = -5;       $textAngleMax = 5;       $cleanupTable = "10 minutes";* - So what is done? the commenting system of Mambo (the excellent akocomment component) is migrated…. see picture - A GNU/GPL release of course 😉 (for my code only, there is strong copyright on akocomment and akobook) |