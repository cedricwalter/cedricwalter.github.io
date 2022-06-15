---

title: 'WideImage Library Plugin for Joomla 1.5/1.7'
date: '2011-11-27T13:18:42+01:00'
author: 'Cédric Walter'



---

# ![wideimage-php-image-manipulation](/assets/images/2011/11/wideimage-php-image-manipulation.jpg "wideimage-php-image-manipulation")**

# NOTE: starting with version 3.2 of the extension [Related Thumbs Articles for #Joomla](http://www.waltercedric.com/downloads/relatedthumbitem.html "Download relatedthumbitem for #Joomla"), you can either select [TimThumb for #Joomla](http://www.waltercedric.com/downloads/timthumb.html) or [WideImage for #Joomla](http://www.waltercedric.com/downloads/wideimage.html) for the creation of thumbnails.**

# WideImage for #Joomla is targeted for developer of #Joomla! 3rd party extensions, don’t install it if not asked otherwise**

[WideImage](http://wideimage.sourceforge.net/) is an object-oriented library for image manipulation. It requires PHP 5.2+ with GD2 extension. The library provides a simple way to [loading](http://wideimage.sourceforge.net/documentation/loading-images/), [manipulating](http://wideimage.sourceforge.net/documentation/manipulating-images/) and [saving](http://wideimage.sourceforge.net/documentation/saving-images/) images in the most [common image formats](http://wideimage.sourceforge.net/documentation/supported-formats/).

The library does resizing, cropping, rotating, watermarking (full list is here <http://wideimage.sourceforge.net/documentation/manipulating-images/>), and it works well with transparent pngs and gifs.

Currently the library is just the [WideImage](http://wideimage.sourceforge.net/) library, with the defined(‘\_JEXEC’), index.html

### Usage 

Simple usage for #Joomla 3rd party extensions developers:

```
require_once(JPATH_SITE.DS.'libraries'.DS.'wideimage'.DS.'WideImage.php'); WideImage::load($sourceImage)

      ->resize($width, $height)->saveToFile($newImage);
```

More examples and docs are on the [WideImage](http://wideimage.sourceforge.net/) site:   
<http://wideimage.sourceforge.net/documentation/>

### Installation

- Joomla 1.6/1.7 install using the extension manager
- Joomla! 1.5 install by unpacking the zip into your /library folder

### Download / Documentation / Support

[![](/assets/images/2011/11/download-zip.png)](http://www.waltercedric.com/downloads/wideimage.html "Download WideImage Library Plugin for #Joomla 1.5/1.7")[![](/assets/images/2011/11/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=WideImage_for_Joomla "Download WideImage_for_Joomla")[![](/assets/images/2011/11/support.png)](http://forums.waltercedric.com "Support for WideImage_for_Joomla")