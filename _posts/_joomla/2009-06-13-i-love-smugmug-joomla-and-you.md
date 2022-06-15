---
id: 4402
title: 'I love Smugmug, Joomla! and You?'
date: '2009-06-13T00:00:00+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/06/photoFeed.code_.png
---

This is a small content plugin for #Joomla! 1.5 that allow you to inline a set of images from your favorite online gallery: [Smugmug](http://www.Smugmug.com), [Flickr](http://www.flickr.com), [Picasa](http://www.picasa.com) or any RSS feed in any article.

If you put the following in your article

![photoFeed.code](/assets/images/2009/06/photoFeed.code_.png "photoFeed.code")

the gallery content will be displayed as a result

![photoFeed.result](/assets/images/2009/06/photoFeed.result.png "photoFeed.result")

# FEATURES:**

- It can fetch photos from [Smugmug](http://www.Smugmug.com)
- It can fetch photos from [Flickr](http://www.flickr.com)
- It can fetch photos from [Picasa](http://www.picasa.com) &amp; any other RSS feed
- It supports RSS caching (lifetime can be choosen in admin panel)
- It supports following library top open up images
- lightbox
- lightbox2 slideshow with navigation button Prev &amp; Next
- shadowbox [http://extensions.joomla.org/extensions/style-&amp;-design/popups-&amp;-iframes/4577/details](http://extensions.joomla.org/extensions/style-&-design/popups-&-iframes/4577/details)

- Image Caption is fetched and shown in lightbox2 show

![photofeed.settings](/assets/images/2009/06/photofeed.settings.png "photofeed.settings")

The photoFEED plugin uses the lastRSS class to grab images from a [Smugmug](http://www.Smugmug.com), [Flickr](http://www.flickr.com), [Picasa](http://www.picasa.com) or any RSS feed to display in any #Joomla! hosted website.

It provides access to the Images title, description and content

# USAGE:** you can do it from any of your post or page. you can set any RSS feed like Smugmug, Picasa, Flickr etc with a limit of how many photos you want in your post/page. You need to keep in mind that you need to assign to things there:

```
   1. rss uri = feed location

   2. limit = number of photos to be shown


```

the plugin will replace only the text within the post/page which is encoded with a curly brace {} with resulted photos. The remaindered text will be same. Add your RSS Feed in the body of your post or page in the following format

{rss uri=FeedURL limit=5}

Alternatively you can leave the limit blank like this to get all the photos {rss uri=flickr/picasa/smugmug*rss*feed\_location limit=}

### Note:

This #Joomla! plugin is based on [fdsPhotoFEED v1.0.0](http://wordpress.org/extend/plugins/fdsphotofeed-v100/) and all credits should be given to the original author: Nurul Ferdous, I did just wrap his hard work in a #Joomla! content plugin to solve my needs.

# Code is GPL v2.0**

#### [Download ](http://www.waltercedric.com/downloads/doc_download/99-photofeed.html)and [Details ](http://www.waltercedric.com/downloads/doc_details/99-photofeed.html)