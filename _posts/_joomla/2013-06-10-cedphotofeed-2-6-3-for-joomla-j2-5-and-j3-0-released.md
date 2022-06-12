---
id: 8060
title: 'cedphotofeed 2.6.3 for joomla J2.5 and J3.0 released'
date: '2013-06-10T20:20:26+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8060'

header:
  teaser: /assets/images/2012/03/flickr.photofeed_thumb_b762b40a05c32e0ad752d1260a32a6b1.png
tags:
    - joomla
---

 ![](/assets/images/2012/03/flickr.photofeed_thumb_b762b40a05c32e0ad752d1260a32a6b1.png)

 This extension for [Joomla](http://www.joomla.org/) 2.5 and [Joomla](http://www.joomla.org/) 3.0 allow you to inline a set of images from your favorite online gallery: [Smugmug](http://www.smugmug.com/), [Flickr](http://www.flickr.com/), [Picasa](http://picasa.google.com/), [Gallery2](http://galleryproject.org/)/Gallery3 and [YouTube](http://www.youtube.com/) or any RSS feed in any article.

 To update your extension, either download the latest extension packages from the [download section of cedphotofeed](http://www.waltercedric.com/downloads/photofeed.html) or update via the #Joomla Extensions Update interface.

 You can visit also the [blog of cedPhotofeed for joomla](http://www.waltercedric.com/tag/cedphotofeed)

##  What’s New

 **NEW** Support for [RokBox](http://www.rockettheme.com/extensions-joomla/rokbox "RokBox/RokBox2  The Ultimate #Javascript Powered Multimedia Box") 2.0, use under Rendering “[RokBox](http://www.rockettheme.com/extensions-joomla/rokbox "RokBox/RokBox2  The Ultimate #Javascript Powered Multimedia Box") 2”, instead of “[RokBox](http://www.rockettheme.com/extensions-joomla/rokbox "RokBox/RokBox2  The Ultimate #Javascript Powered Multimedia Box")”

 NOTE: If you are upgrading from [RokBox](http://www.rockettheme.com/extensions-joomla/rokbox "RokBox/RokBox2  The Ultimate #Javascript Powered Multimedia Box") 1 and you are using the old [RokBox](http://www.rockettheme.com/extensions-joomla/rokbox "RokBox/RokBox2  The Ultimate #Javascript Powered Multimedia Box") syntax, such as `{rokbox}` or `<a rel="rokbox" ..`, you can enable the Backward Compatibility from both the **System** and **Content** plug-in. Be aware that the Backward compatibility can dramatically slow down the loading of your site. It is highly suggested to convert the old syntax into the new one. Starting from cedphotofeed 2.6.3 you can use the Rendering “RokBox 2” and switch off the backward compatibility.

 **NEW** A new settings in the administrator panel “Force”. This setting is optional, default value is auto detect- If you use custom URL for your hosting library (like visuals.waltercedric.com instead of [www.smugmug.com](http://www.smugmug.com)), you may want to force the library instead of letting [cedPhotoFeed](http://www.waltercedric.com/tag/cedphotofeed "Inline a set of images from your favorite online gallery: Smugmug, Flickr, Picasa, Gallery2/Gallery3 and YouTube or any RSS feed in any article.") auto detect the right host based on URL. You can either set "Force" = "Yes" in administrator panel system wide or add this optional settings now in every mambot. Here is a axample of a custom URL that use [SmugMug](http://www.smugmug.com/ "SmugMug: Photo Sharing. Your Photos Look Better Here."):

 {rss uri=http://www.darbym.com/hack/feed.mg?Type=nicknameRecentPhotos&amp;Data=DarbyM&amp;format=rss200 limit=3 force=Smugmug}

###  Concerning the size of pictures displayed when using [Picasa](http://picasa.google.com/ "Picasa is an image organizer and image viewer for organizing and editing digital photos, plus an integrated photo-sharing website")

 Concerning the size of pictures displayed when using [Picasa](http://picasa.google.com/ "Picasa is an image organizer and image viewer for organizing and editing digital photos, plus an integrated photo-sharing website"), the max picture size returned by the RSS feed is height="265px" and width="512px", embedded thumbnails being of size

1. height="38px" width="72px"
2. height="75px" width="144px"
3. height="149px" width="288px”

 It is not in any way a limitation of [cedPhotoFeed](http://www.waltercedric.com/tag/cedphotofeed "Inline a set of images from your favorite online gallery: Smugmug, Flickr, Picasa, Gallery2/Gallery3 and YouTube or any RSS feed in any article.")!

 [![](/assets/images/2011/11/download-zip.png)](http://www.waltercedric.com/downloads/photofeed.html)[![](/assets/images/2013/06/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Photofeed_fo_Joomla)[![](/assets/images/2011/12/support.png)](http://forums.waltercedric.com/)