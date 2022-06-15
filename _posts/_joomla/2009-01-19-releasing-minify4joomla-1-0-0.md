---
id: 4050
title: 'Releasing Minify4Joomla 1.0.0'
date: '2009-01-19T22:24:11+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/01/minify4joomla.png
---

| ![minify4joomla](/assets/images/2009/01/minify4joomla.png) | This is the version 1.0.0.  What does this plugin do?  [More performances for #Joomla! with com\_minify](http://www.waltercedric.com/joomla-mainmenu-247/372-comminify/1457-more-performances-for-joomla-with-comminify.html)  It is working as described at  [Reduce HTTP requests with Minify4Joomla](http://www.waltercedric.com/joomla-mainmenu-247/372-comminify/1462-reduce-http-requests-with-minify4joomla.html)  and in my WIKI:  [http://wiki.waltercedric.com/index.php?title=Com\_minify](http://wiki.waltercedric.com/index.php?title=Com_minify)  Please use the forum **[Minify4Joomla Bugtracker](http://forums.waltercedric.com/index.php?board=53.0)** for bugs and the WIKI if you find any error in the documentation. Thanks |
|---|---|

 **The next version 1.1.0** will have a major new feature: I am currently patching (patch/un-patch through a button) the #Joomla! HTML Head Renderer (*JDocumentRendererHead*) that output the HTML code.

This will transparently minify all #JavaScript URL’s and CSS that are added by

- Plugin,
- Components,
- Templates,

As long as they use the #Joomla! API’s. This is more end users friendly and wont require hacking too much around 🙂

[Download HERE](http://www.waltercedric.com/index.php?option=com_versions&catid=16)