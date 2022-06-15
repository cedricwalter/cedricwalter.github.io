---
id: 4621
title: 'PhotoWidget 1.1.0 avalaible'
date: '2009-09-14T16:55:25+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/09/photowidgetSmugmugHTML.png
---

[![logo_simplepie_horizontal](images/stories/PhotoWidget1.1.0_121E9/logo_simplepie_horizontal_thumb.png "logo_simplepie_horizontal")](images/stories/PhotoWidget1.1.0_121E9/logo_simplepie_horizontal.png) [![feature_feed](images/stories/PhotoWidget1.1.0_121E9/feature_feed_thumb.png "feature_feed")](images/stories/PhotoWidget1.1.0_121E9/feature_feed.png)

The module PhotoWidget has been totally rewritten using [simplepie.org](http://simplepie.org/), a famous open source RSS parser, by the way #Joomla!, Drupal, and a lot of open source projects use it natively.

> ***SimplePie is a very fast and easy-to-use class, written in PHP, that puts the ‘simple’ back into ‘really simple syndication’.*** Flexible enough to suit beginners and veterans alike, SimplePie is focused on [speed, ease of use, compatibility and standards compliance](http://simplepie.org/wiki/faq/what_is_simplepie).

Code is now:

- Smaller,
- Object oriented: it is funny how you always start to hack small project in php in a non object oriented way at the beginning 🙂
- More robust toward multiple RSS feeds.

But it also contains some new interesting features! Below is an example of Photowidget ouput with a Smugmug RSS feed. Photowidget support: Picasa, Flickr, G2, and a lot of other RSS feeds.

 <object data="http://www.waltercedric.com/demo/modules/mod_photowidget/photowidget.swf" height="350" type="application/x-shockwave-flash" width="350"><param name="bgcolor" value="#ffffff"></param><param name="allowscriptaccess" value="always"></param><param name="flashvars" value="feed=http://demo2.waltercedric.com/cache/photowidget-1.xml"></param><param name="src" value="http://www.waltercedric.com/demo/modules/mod_photowidget/photowidget.swf"></param></object>

# What’s new

# BUG**: by clicking on Smugmug/Picasa/Flickr thumbnail, it drive you to the correct gallery

# NEW**: Code use SimplePie and no more my custom RSS parser, this mean more compatibility, speed, and quality of RSS parsing/caching.

# NEW**: if you don’t like the flash output, you can now output pictures from an RSS feed in a full HTML badge manner. It will just fill the space you give in the module as seen below

![photowidgetSmugmugHTML](/assets/images/2009/09/photowidgetSmugmugHTML.png "photowidgetSmugmugHTML")

# NEW**: Flickr thumbnail picture size can now be selected

# NEW**: Picasa thumbnail picture size can now be selected

# ![photowidget-Picasa-Flickr.size](/assets/images/2009/09/photowidgetPicasaFlickr.size_.png "photowidget-Picasa-Flickr.size")** 

# NEW**: You can copy this module many times and use it at different places in your layout (before only one instances was able to run for each Joomla!) at the condition to use an unique id for each.

![photowidget-UniqueID](/assets/images/2009/09/photowidgetUniqueID.png "photowidget-UniqueID")

# Resources

The wiki page is here <http://wiki.waltercedric.com/index.php?title=Photowidget>

The demo site is here <http://demo2.waltercedric.com/> examples at the bottom of the page

##### [Download here](joomla-releases-mainmenu-269.html?QUERY_STRING=#photowidget) and [keep up to date with the download RSS](index2.php?option=com_versions&catid=22&task=feed) ![Feed Icon](components/com_versions/feed-icon.png)