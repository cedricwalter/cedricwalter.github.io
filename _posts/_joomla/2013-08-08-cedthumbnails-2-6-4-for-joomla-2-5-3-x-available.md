---

title: 'CedThumbnails 2.6.4 for Joomla 2.5/3.x available'
date: '2013-08-08T20:08:23+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/cedThumbnails.png
tags:
    - joomla
---

###  ![](/assets/images/2012/01/cedThumbnails.png)

 [cedThumbnails](http://www.waltercedric.com/cedthumbnails "cedthumbnails is your thumbnails for related post in #Joomla") has been updated to version 2.6.4 for #Joomla 2.5/3.0/3.1. For existing users the update will display in the Extensions Manager under Updates. If you do not have this currently installed, you can click the link below and install as normal via the Extensions Manager.

 New ideas/features/bugs are always welcomed either through forums or by using [feedback](http://www.waltercedric.com/index.php/joomlacms/2017-you-can-now-prioritize-next-joomla-extensions-ideasfeatures)

###  What’s New

- Remove code support for
- [joomla](http://www.joomla.org/) 1.5 (support for Joomla 1.5 ended in April 2012)

- Filter Featured Articles, you can now decide to show, hide or only display featured articles.
- Filter by user access has been improved to match Joomla 2.5 API,
- Filter by Language of the visiting user,
- Filter Published or not articles can now be configured (default is only to display published articles). Published date of categories is also now handle correctly,
- Possibility to remove title below the thumbnails in plugins and modules,
- Improved CSS size,
- Support for 2.5.8 and onward: Ported Related articles, Latest articles and popular articles modules to the latest Joomla 2.5.9 API interface.
- Reorganize settings for more clarity (plugins and modules),
- Caching added for more performances in modules,
- New settings to remove the copyright remove "ced thumbnails" text underneath related article plug in,
- Code validated against PHP standard PSR-1/PSR-2.
- Better new Joomla installer (minimum inspired by K2)

 [JImage](http://api.joomla.org/Joomla-Platform/Image/JImage.html) now support also resize strategy

- JImage::SCALE\_FILL – Gives you a thumbnail of the exact size, stretched or squished to fit the parameters (default).
- JImage::SCALE\_INSIDE – Fits your thumbnail within your given parameters. It will not be any taller or wider than the size passed, whichever is larger.
- JImage::SCALE\_OUTSIDE – Fits your thumbnail to the given parameters. It will be as tall or as wide as the size passed, whichever is smaller.
- JImage::CROP – Gives you a thumbnail of the exact size, cropped from the center of the full sized image.

####  Safe Host

 Only allow resize of images located on host names starting with (separated by semicolon). I recommend you to use this feature when using [WideImage](http://wideimage.sourceforge.net/) and put at least the following:

 <http://www.waltercedric.com/>;<http://www.youtube.com/>

####  Which resize method should I Use?

 [JImage](http://api.joomla.org/Joomla-Platform/Image/JImage.html) (Native library in Joomla 2.5 and up) Only pictures of your root server can be resized.

 [WideImage](http://wideimage.sourceforge.net/): Support resize of pictures located on your server and remote server (like youtube.com, remote galleries)

###  Bugs solved

 BUG: Caption of the image should be the title of the post (html tag title=””)

 BUG: Caption was also cut off at 60 character, there is shall not be truncated

 BUG: If caching = false and resized file exist, thumbnails were not created under some special conditions

 BUG: Invalid SQL queries are produced under some conditions. Some people reported some issues with queries produced by cedThumbnails. This has been solved by rewriting the way the extension create SQL queries. Warning: mysqli\_real\_escape\_string() expects parameter 2 to be string, array given in libraries/joomla/database/database/mysqli.php on line 157 / line 150  
 BUG: Abnormal load and memory exhausted under some conditions