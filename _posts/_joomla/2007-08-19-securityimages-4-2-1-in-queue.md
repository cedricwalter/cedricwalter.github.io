---

title: 'Securityimages 4.2.1 in queue'
date: '2007-08-19T17:22:21+02:00'
author: 'Cédric Walter'



tags:
    - joomla
    - securityimages
---

BUG: links to downloadable #Joomla patches change from #Joomla Forge to www.waltercedric.com  
<span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: a new plugin watercap   
<span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: possibility to remove the backlink to this site in admin panel.  
BUG: akocomment switch for activating securityimage was the same as akobook switch

Following has been done to resolve common issues support in forum.  
<span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: better detection of GD library and warnings if not detectedduring installation  
<span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: error message if GD is not detected instead of a broken image during runtime.  
  
Thanks to Lukas Wymann  
BUG: "Switch component OFF globally" and "Switch component to debug" switch were exchanged  
BUG: constant $copyright not initialized in 2 places, <span style="font-family: monospace;"> $refreshlink not created  
BUG: missing files calculator.jpg in installer

To be release in a few hours

Do not forget that GD library is required, 90% of [forums entries](http://forums.waltercedric.com/) are related to this issues.

GD is an open source code library for the dynamic creation of images by programmers. GD creates PNG, JPEG and GIF images, among other formats. GD is commonly used to generate charts, graphics, thumbnails, and most anything else, on the fly. While not restricted to use on the web, the most common applications of GD involve web site development. from <http://www.libgd.org/>

[How to install GD](http://www.google.com/search?hl=en&rlz=1B2GGGL_enCH207CH207&q=GD+library+not+installed&btnG=Search)  
[SecurityImages manual](http://wiki.waltercedric.com/index.php?title=Com_securityimages_a_captcha_framework#Require%27%3ERequirement%20of%20securityimages)