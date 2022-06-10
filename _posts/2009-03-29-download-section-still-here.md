---
id: 4237
title: 'Download section still here'
date: '2009-03-29T22:10:15+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4237'
permalink: /internet/download-section-still-here/
image: /wp-content/uploads/2009/03/downloadicon.gif
tags:
    - homepage
---

**UPDATE:** issue has been solved!

![download-icon](/assets/images/2009/03/downloadicon.gif "download-icon")

I have a huge CSS issue on my site, the download section is still available, it is just at the bottom, scroll down, and you will find the links

Only Level 1 in [DOCMAN](http://www.joomlatools.eu/products/docman.html) ( [http://www.waltercedric.com/downloads.html](downloads.html) ) is working, all sub categories seems to have a CSS issue with [Terran Tribute (Rocket Theme)](http://www.rockettheme.com/joomla?xyz=2643)

I am still investigating and trying to solve the problem will it may take some time as the HTML output is XHTML compliant or has no error that could explain the problem


- Downloads are still available!
- You can download everything for free!
- No need to register!
- Downloads are and will always be GPL v3!

**Solution**

[Content being pushed down](http://www.rockettheme.com/forum/index.php?f=175&t=54455&rb_v=viewtopic&start=15#p283293)

> Usually the content gets pushed down one of the elements is being too wide. This issue is most common with the various IE browsers.

**Apply to Virtuemart/Docman/forum wrapper**

In index.php, locate

&lt;jdoc:include type="component" /&gt;

and replace it with

&lt;table width="100%"&gt;&lt;tr&gt;&lt;td&gt; &lt;jdoc:include type="component" /&gt; &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;