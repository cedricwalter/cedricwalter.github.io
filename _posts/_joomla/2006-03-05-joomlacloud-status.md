---
id: 2352
title: 'JoomlaCLoud status'
date: '2006-03-05T11:27:57+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/t_core1.0.gif
tags:
    - configurable
    - efficiency
    - joomla
---

 You can see below the output of the first 2 plugins of #JoomlaCloud, the plugins has scanned my online content (17000 unique words found)

| <small>core 1   CSS driven   output like [<font color="#800080">www.tagcloud.com ](http://www.tagcloud.com/)</small> | <small>core 2   No CSS   Changing font height</small>    |
|---|---|
| [![](/assets/images/2006/03/t_core1.0.gif)](/assets/images/2006/03/core1.0.gif) | [![](/assets/images/2006/03/t_core2.0.gif)](/assets/images/2006/03/core2.0.gif) |

What it can do

- Do not count words found in a dictionary,
- Do not count words less than XX character,
- Do not display words which have less than YY occurences,
- Limit number of words displayed to ZZ,
- Separator between word is configurable,
- CSS driven,
- Database caching (primary),
- Editor for CSS, Language, dictionary for both engine and core.
- Display Tag cloud result when component is linked in a menu

What must be done before a release

- The cache mechanism has to be better design, it only able to store a Tag cloud site wide, it must take section and categoryid, itemid into account
- Create a mambot which will scan content of articles readen and store it in database for efficiency (Prio 2)
- Create a simple module to display the sitewide tagcloud (Prio 1)