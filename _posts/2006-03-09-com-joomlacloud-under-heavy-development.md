---
id: 2358
title: 'Com_joomlacloud under heavy development'
date: '2006-03-09T09:49:10+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2358'
permalink: /joomla/com-joomlacloud-under-heavy-development/
tags:
    - Collectibles
    - joomla
    - refactoring
    - responsible
---

 I am currently refactoring my whole PHP code, interfaces, abstract classes, default implementations, factories and a lot of tricks in code will make joomlacloud maybe the more advanced PHP code I've ever written.  
 Concepts are emerging, code is lot less hard coded than 20 lines of PHP (which may also work well)

- Scanner is responsible for returning a subset of data: can be the whole site, the current article etc…many implementations can be used and or created
- Analyzer is responsible for analyzing words and take them or not into account: based on length, dictionary etc…
- Limiter is responsible for limiting size of collection: the top 20, only the first 100 words, sorting etc…many implementations can be used and or created
- Tokennizer is the process of transforming a list of words into a list of token, etc…many implementations can be used and or created
- Plugins are responsible on how the list of words are written or displayed, .etc…many implementations can be used and or created
- Caching factories to save mips on the server…

 This make the code more complex to develop but also a lot more easy to read or extends…