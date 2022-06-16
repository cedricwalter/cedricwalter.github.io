---

title: 'cedThumbnails 2.5.9 for J2.5 Released'
date: '2012-08-07T20:56:26+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/cedThumbnails.png
tags:
    - joomla
---

![](/assets/images/2012/01/cedThumbnails.png)

[CedThumbnails](https://waltercedric.com/new/?p=7429) has been updated to version 2.5.9 and contains 4 new features and correct some bug for #Joomla 2.5. For existing users the update will display in the Extensions Manager under Updates. If you do not have this currently installed, you can click the link below and install like you are use to via the Extensions Manager.

# NEW: The function that detect images in your articles is now clever and now support better fallbacks. It now support [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") articles metadata (intro image and full article image). With the first option selected the system will always find at least one image to render as thumbnail. Priority is from left to right.

- search in intro text -> use intro image -> in full text -> use full article image (NEW) it’s the default,
- search in intro text only,
- search in intro text -> use intro image (NEW),
- search in full text only,
- search in full text -> use full article image (NEW),
- search in intro text -> in full text,
- search in full text -> in intro text,

If no images are found, despite going through intro text, full text, intro image and full article image, the system will fallback to a default image that can be set up per modules/plugins.

# NEW: Support for alternate images text and caption.

# NEW: Support for new resizing method:

- inside: image fits the given dimensions from the inside, aspect ratio will be kept.
- outside: image will be at least as big as X x Y, aspect ratio will be kept.
- fill: image will be stretched as necessary, aspect ratio may not be kept. it’s the default resizing method.

# NEW: Support for scaling method, this determines when to scale an image:

- any: resize regardless of the image size. it’s the default scaling method.
- up: resize if image is smaller than the new dimensions.
- down: resize if image is larger than the new dimensions.

On a side note the code has been improved, no static methods, better decoupling, but that’s another story that interest only developers. Anyway adding new features will be easier!

[![](/assets/images/2011/11/download-zip.png)](downloads/thumbnails.html)[![](/assets/images/2012/08/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=CedThumbnails_for_Joomla)[![](/assets/images/2011/12/support.png)](http://forums.waltercedric.com/)