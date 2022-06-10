---
id: 4519
title: 'Photofeed version 1.1'
date: '2009-07-07T23:25:12+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4519'
permalink: /joomla/photofeed-version-1-1/
image: /wp-content/uploads/2009/07/78pxSmugmug_logo.jpg
---

![78px-Smugmug_logo](/assets/images/2009/07/78pxSmugmug_logo.jpg "78px-Smugmug_logo") ![22711-250px-picasa-logo.svg](/assets/images/2009/07/22711250pxpicasalogo.svg_.png "22711-250px-picasa-logo.svg") ![Flickr_logo](/assets/images/2009/07/Flickr_logo.jpg "Flickr_logo") Photofeed is a small content plugin for #Joomla! 1.5 that allow you to inline a set of images from your favorite online gallery: Smugmug, Flickr, Picasa or any RSS feed in any article.

Ed Henderson (<http://www.henderland.net/>) has submitted me a patch today that correct and improve Photofeed by a huge margin. It has done such a great job that I deliver this version now. I plan to add in the next version Photofeed 1.2 full support for gallery2 (aka G2), don’t forget to request new features in the [Smugmug forum support board](http://forums.waltercedric.com/viewforum.php?f=69)

July 7, 2009 – List of fixes and enhancements from Ed Henderson

### Bug fixes

1. Fixed malformed image URL (had double-quote at the end and not at the start so didn’t display properly in lightbox)
2. Fixed problem with "@" and single-quote in captions (this broke the php code)
3. Fixed $library not being passed thru to rss\_parse function (this caused the image to not be viewed via lightbox)

### Enhancements:

1. Specify the thumbnail size in pixels
2. Specify if square thumbnail or maintain aspect ratio (if not square then thumbnail size just specifies the height)
3. Now recognize multiple {rss…} tags in a single article.
4. Specify thumbnail size and square thumbnail in {rss… size=90 square=yes|no} tag to override system-wide defaults. Or if tag element left blank i.e. "ulimit=" then defaults to system default.
5. Specify thumbnail border width in pixels
6. Added special section in the code for Picasa so that viewing largest image (800px) could be possible.
7. Added more verbiage to photofeed.xml to help with plugin usage.

### Future enhancements to do

1. Recognize single and/or double quotes in {rss..} tag
2. No order to tag elements – i.e. size=75 could come first in the {rss…} tag
3. If tag element missing then just take default – at this time all tag elements must be in the tag to work
4. Ability to choose size of image to view – now defaults to largest for Picasa.

Testing: Note that I have tested these changes on Picasa only. I believe it will work with the other photo sites as I made changes to their code for any enhancements I added.

[Download](https://waltercedric.com/new/?p=514) **/** [documentation](http://wiki.waltercedric.com/index.php?title=Photofeed_fo_Joomla) **/** [keep up to date by adding the download photofeed RSS](index2.php?option=com_versions&catid=17&task=feed) [![Feed Icon](/assets/images/2008/09/feed-icon.png)](index2.php?option=com_versions&catid=17&task=feed)