---
id: 4526
title: 'Announcing Joomla! photowidget for Smugmug, Picasa, Flickr RSS'
date: '2009-07-08T23:45:21+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/07/photowidget.smugmug.flickr.picasa.png
---

![photowidget.smugmug.flickr.picasa](/assets/images/2009/07/photowidget.smugmug.flickr.picasa.png "photowidget.smugmug.flickr.picasa")

I did integrate the [Flickr widget from RoyTanck.com](http://www.roytanck.com/get-my-flickr-widget/) as a #Joomla module. This version do not depend on Roy’s site, and run offline if needed as i rewrite the RSS parsing code myself. For now you can see it [live running on the right side of Roy’s site](http://www.roytanck.com)

- **Your Smugmug/ Picasa or Flickr RSS feed.** To get feed URL one for your Flickr photo stream, simply go to your photo stream’s page and right-click the little orange RSS icon at the bottom. Select ‘Copy link location’ or ‘Copy shortcut’ and paste it into the form below. For Picasa, there’s a link called ‘RSS’ at the bottom right of the ‘My Photos’ page, and a small icon on the sidebar on other pages. For Smugmug the icon is located at the bottom of the page.
- **The dimensions for the widget.** This depends almost entirely from the layout of your website. Square aspect rations work best (equal width and height). At very large sizes (400px and up) the thumbnails might have bigger pixels than usual.
- **The background color for the widget.** You can use [Colorpicker.com](http://www.colorpicker.com/) to get the right value for your website. The selected color serves only as a backup if ‘Use background transparency’ is selected.
- **RSS feed is also optional photowidget** also support up to 10 images on your server.

Before releasing I need to clean the code a bit, test the installer, write a small documentation, submit module to #Joomla! extension.. maybe tomorrow, but before the week end for sure!