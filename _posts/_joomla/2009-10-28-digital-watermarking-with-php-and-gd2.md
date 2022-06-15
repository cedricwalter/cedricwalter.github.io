---

title: 'Digital watermarking with PHP and GD2'
date: '2009-10-28T19:23:03+01:00'
author: 'Cédric Walter'



tags:
    - bash
    - brand
    - copy
    - corner
    - cost
    - cpu
    - create
    - definitive
    - depending
    - described
    - digital
    - directory
    - document
    - example
    - Features
    - fly
    - HowTo
    - linux
    - shell
    - spammer
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2009/10/joomla_cms.png)

# ****![](/assets/images/2009/10/taticelinuxtux10409_thumb.png)![php.logo](/assets/images/2009/10/php.logo_.png "php.logo")******

# *Digital watermarking*** *is the process of possibly irreversibly embedding information into a digital signal. The signal may be audio, pictures or video, for example. If the signal is copied, then the information is also carried in the copy. In visible watermarking, the information is visible in the picture or video. Typically, the information is text or a logo which identifies the owner of the media.* \[[Wikipedia](http://en.wikipedia.org/wiki/Image_watermarking)\]

If you decide to go with **an online watermarking**, you can let watermark picture on the fly using php and .htaccess (at the cost of additional CPU server resources).

### Why Watermarking pictures?

There is a lot of reasons, among others:

- To limit images stealing, advanced users will still be able to crop/blur your watermark through!
- To drive more new users/returning visitors to your site, anybody using your images in a forums may want to visit your site if the watermark can be read (don’t use complex logo, except if you have a well known brand)
- To advertise your online work,

This article is a follow up of a [previous article presenting how to watermark picture offline](https://waltercedric.com/new/?p=4773) (definitive watermarking) using [ImageMagick](http://www.imagemagick.org) bash script. A lot of steps described there still apply

## Features

- Watermark pictures on the fly as soon as they are bigger than 500 pixels in width (PHP)
- Watermark all or only pictures that are hot linked from outside your blog, for example in forums, other blogs (.htaccess setting)
- Don’t watermark pictures hot linked from search images engine: Google images search or other (.htaccess setting)
- Easily extensible to your needs: support multiple watermark pictures based on original image size.

## Installation

create a file .htaccess with the following content, I recommend you to save it at the root of Joomla!® directory structure, you can merge this file with the one provided by Joomla!
```
# Uncomment next line to avoid that watermark apply on your  
# site, replace yoursite.com with you Joomla! base  
#rewritecond %{http\_referer} !^http://(\[^.\]\*\[.\]\*)?yoursite.com/ \[nc\] 

# Uncomment next line to avoid applying watermark in Google images  
# search, copy as many lines as needed if you would like to also add Bing, Yahoo, etc…  
#rewritecond %{http\_referer} !^http://(www.)?google.com/ \[nc\]
RewriteCond %{REQUEST\_FILENAME} –f 

# Path to the watermark.php script, and list of supported images  
RewriteRule .(gif|jpeg|jpg|png)$ /images/watermark.php \[QSA,NC\]
```

## watermark.php script

Save this script into Joomla!® /images directory, under /images/watermark.php

Decide at which size you want to protect your images, here starting at 500pixels width, I will apply a watermark overlay in the left corner of the image.

```php
<?php
  $path = $_SERVER['<span style="color: #8b0000;">DOCUMENT_ROOT'].$_SERVER['<span style="color: #8b0000;">REQUEST_URI'];
  $image = <a href="http://www.php.net/imagecreatefromstring" style="color: #ffa500;">imagecreatefromstring</a>(file_get_contents($path));
  $w = <a href="http://www.php.net/imagesx" style="color: #ffa500;">imagesx</a>($image);
  <a href="http://www.php.net/if" style="color: #0000ff;">if</a> ($w > 500) {
    $h = <a href="http://www.php.net/imagesy" style="color: #ffa500;">imagesy</a>($image);
    $watermark = <a href="http://www.php.net/imagecreatefrompng" style="color: #ffa500;">imagecreatefrompng</a>('<span style="color: #8b0000;">watermark.png');
    $ww = <a href="http://www.php.net/imagesx" style="color: #ffa500;">imagesx</a>($watermark);
    $wh = <a href="http://www.php.net/imagesy" style="color: #ffa500;">imagesy</a>($watermark);
    <a href="http://www.php.net/imagecopy" style="color: #ffa500;">imagecopy</a>($image, $watermark, $w-$ww, $h-$wh, 0, 0, $ww, $wh);
  }
  <a href="http://www.php.net/header" style="color: #ffa500;">header</a>('<span style="color: #8b0000;">Content-type: image/jpeg');
  <a href="http://www.php.net/imagejpeg" style="color: #ffa500;">imagejpeg</a>($image);
  <a href="http://www.php.net/exit" style="color: #0000ff;">exit</a>();
```

## Caveats
It cost CPU and depending how you set your .htaccess may still allow users to steal images without watermark
