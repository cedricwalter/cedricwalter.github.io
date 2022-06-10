---
id: 7429
title: 'CedThumbnails 2.5.0 for Joomla 1.6/1.7/2.5 available'
date: '2012-01-12T20:47:13+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7429'
permalink: /joomla/cedthumbnails-2-5-0-for-joomla-1-6-1-7-2-5-available/
image: /wp-content/uploads/2012/01/cedThumbnails.png
---

![cedThumbnails](/assets/images/2012/01/cedThumbnails.png "cedThumbnails")

[CedThumbnails 2.5.0 is now available](http://wiki.waltercedric.com/index.php?title=CedThumbnails_for_Joomla "Extension CedThumbnails documentation for #Joomla") (download at the bottom of this post) and contains in one single installation the following:

###### Module Latest article with thumbnails (mod\_articles\_latest\_thumb)

This is a drop in replacement for the #Joomla! core module "Latest Articles", it offer the same level of features but also add thumbnails.

###### Module Popular articles with thumbnails (mod\_articles\_popular\_thumb)

This is a drop in replacement for the Joomla! core module "Popular Articles", it offer the same level of features but also add thumbnails.

###### Module Related articles with thumbnails (mod\_related\_items\_thumb)

This is a drop in replacement for the Joomla! core module "Related Articles", it offer the same level of features but also add thumbnails.   
This Module displays other Articles that are related to the one currently being viewed. These relations are established by the Meta Keywords.   
All the keywords of the current Article are searched against all the keywords of all other published Articles. For example, you may have an Article on "Breeding Parrots" and another on "Hand Raising Black Cockatoos". If you include the keyword "parrot" in both Articles, then the Related Items Module will list the "Breeding Parrots" Article when viewing "Hand Raising Black Cockatoos" and vice-versa.

###### Plugin Related articles with thumbnails (plg\_content\_relatedthumbarticles)

This plugin displays other Articles that are related to the one currently being viewed. These relations are established by the Meta Keywords or using Joomla categories.   
All the keywords of the current Article are searched against all the keywords of all other published Articles. For example, you may have an Article on "Breeding Parrots" and another on "Hand Raising Black Cockatoos". If you include the keyword "parrot" in both Articles, then the Related Items Module will list the "Breeding Parrots" Article when viewing "Hand Raising Black Cockatoos" and vice-versa.

###### Library WideImage (lib\_wideimage)

Is a famous PHP library for manipulating images. WideImage is a lot better than TimThumb for that job,.

Note that Joomla 2.5 though **JImage support images manipulations**, this new extension will let you the choice to use JImage or WideImage. It support both!

<div class="attention"><div class="typo-icon">Note that Joomla 2.5 though **JImage support images manipulations**, this new extension will let you the choice to use JImage or WideImage. It support both!<div class="alert"><div class="typo-icon">Attention **JImage** do not support manipulation of remote file. If your articles, in introtext or fulltext, have images not located on your Joomla host, it will be better to use WideImage.<div class="typo-icon">Due to an error in the Joomla platform < 11.4, you can not install twice (update) the extension com_cedthumbnails, in Joomla 2.5 this is running correctly in all previous version you’ll get this error: JLibraryManifest::$libraryname already in Tracker <http://t.co/LPhupqnk>. A workaround is to run the sql query delete from xx_extensions where name = ‘’wideimage” and type=’library’; before updating. ##### DOWNLOAD / DOCUMENTATION / SUPPORT

###### Previous user of the following extensions?

**Remove any previous** **extensions** from me, here is the list:

- lib\_wideimage\_j17.zip / lib\_wideimage\_j16.zip
- lib\_TimThumb\_j16\_j17.zip
- mod\_articles\_latest\_thumb\_j16\_j17.zip
- mod\_related\_items\_thumb\_j17.zip
- mod\_articles\_popular\_thumb\_j16\_j17.zip
- plg\_relatedThumbArticles\_j17.zip / plg\_relatedThumbArticles\_j16.zip

All these extensions are removed from the download sections and are no more supported, it is recommended to use only cedThumbnails

###### First time installation

Download the latest copy of com\_cedthumbnails.zip, from **Extensions → Install / Uninstall** and install with the fresh copy.

[![](http://www.waltercedric.com/images/download-zip.png)](http://www.waltercedric.com/downloads/thumbnails.html "Download Extension CedThumbnails for Joomla")[![](http://www.waltercedric.com/images/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=CedThumbnails_for_Joomla "Extension CedThumbnails documentation for Joomla")[![](http://www.waltercedric.com/images/support.png)](http://forums.waltercedric.com/)