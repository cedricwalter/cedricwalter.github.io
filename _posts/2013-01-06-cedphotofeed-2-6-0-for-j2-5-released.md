---
id: 7938
title: 'cedPhotofeed 2.6.0 for J2.5 Released'
date: '2013-01-06T15:38:39+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7938'
permalink: /joomla/cedphotofeed-2-6-0-for-j2-5-released/
header:
  teaser: /assets/images/2012/03/flickr.photofeed_thumb_b762b40a05c32e0ad752d1260a32a6b1.png
tags:
    - joomla
---

![](/assets/images/2012/03/flickr.photofeed_thumb_b762b40a05c32e0ad752d1260a32a6b1.png)

This extension for #Joomla! 2.5 allow you to inline a set of images from your favorite online gallery: Smugmug, Flickr, Picasa, Gallery2/Gallery3 and YouTube or any RSS feed in any article.

CedPhotoFeed #Joomla extension consist of

- 2 plugins,
- 1 module (NEW),
- 1 component.

[![](/assets/images/2011/11/download-zip.png)](http://www.waltercedric.com/downloads/photofeed.html)[![](/assets/images/2013/01/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Photofeed_fo_Joomla)[![](/assets/images/2011/12/support.png)](http://forums.waltercedric.com/)

# News and Noteworthy

## New Extension installer

Borrowed from K2 (credits goes to them) only uninstall the component to remove everything automatically and safely

## Redesigned backend panel 

The administrator area has been redesigned and now support direct links to Manual, [Forums](http://forums.waltercedric.com/), Joomla extensions directory, download area and social links.

[![cedphotofeed_2-6-0_newadminpanel](http://www.waltercedric.com/images/cedPhotofeed-2.6.0-for-J2.5-Released_10D94/cedphotofeed_2-6-0_newadminpanel_thumb.png "cedphotofeed_2-6-0_newadminpanel")](http://www.waltercedric.com/images/cedPhotofeed-2.6.0-for-J2.5-Released_10D94/cedphotofeed_2-6-0_newadminpanel.png)

## A new Joomla Module [photofeed](http://wiki.waltercedric.com/index.php?title=Photofeed_fo_Joomla)

CedPhotoFeed is also now available as a module, it support

- Module Class Suffix,
- Prepare content plugins inside the module
- and all the features of the plugins!

[![cedphotofeed_2-6-0_newmodule](http://www.waltercedric.com/images/cedPhotofeed-2.6.0-for-J2.5-Released_10D94/cedphotofeed_2-6-0_newmodule_thumb.png "cedphotofeed_2-6-0_newmodule")](http://www.waltercedric.com/images/cedPhotofeed-2.6.0-for-J2.5-Released_10D94/cedphotofeed_2-6-0_newmodule.png)

## New Layout “Flow” 

This new layout display images in the space available, use better the space than always using a fixed grid of n \* m images,

[![cedphotofeed_2-6-0_newflowlayout](http://www.waltercedric.com/images/cedPhotofeed-2.6.0-for-J2.5-Released_10D94/cedphotofeed_2-6-0_newflowlayout_thumb.png "cedphotofeed_2-6-0_newflowlayout")](http://www.waltercedric.com/images/cedPhotofeed-2.6.0-for-J2.5-Released_10D94/cedphotofeed_2-6-0_newflowlayout.png)

## New Sorting method 

New sorting methods have been added to give you more control in which order the images will be displayed from RSS feed

- Random order (NEW)
- Reverse order (NEW)
- No sorting (NEW)
- EXIF meta data


## Search Engine Optimizations (SEO)

From the RSS feed and for each images, the Description is now added as HTML “alt” attribute for the following renderer: Lightbox, Lightbox2, Shadowbox and Html,

## Prepared for Joomla 3.0, but not ready yet

Improved administrator panel using Bootstrap UI

New [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") installer, ready to support Joomla 3.0,

## Miscellaneous

Security has been improved: missing index.html, more input data validations added,

## Behind the scene

The code has been refactored (using interfaces, factories and responsibilities splitting) to meet new challenges and add new functionalities faster (yes they will be soon some new [jquery](http://jquery.com/ "jQuery ajax library") layouts ![Winking smile](http://www.waltercedric.com/images/cedPhotofeed-2.6.0-for-J2.5-Released_10D94/wlEmoticon-winkingsmile.png))

```
CedPhotoFeed
```

```
│   index.html │   PhotoFeedHTML.php │ ├───helpers │       helper.php │       index.html │ ├───layout │       flow.php │       grid.php │       index.html │       jquery.php │       layout.php │       layoutfactory.php │ ├───models │       cedphotofeed.php │       index.html ││ ├───plugins │       flickr.php │       g2.php │       generic.php │       index.html │       picasa.php │       plugins.php │       pluginsfactory.php │       smugmug.php │       youtube.php │ ├───rendering │       html.php │       index.html │       lightbox.php │       lightbox2.php │       renderingfactory.php │       rokbox.php │       shadowbox.php │ └───sorting         exif.php         index.html         none.php         random.php         reverse.php         sortingfactory.php
```