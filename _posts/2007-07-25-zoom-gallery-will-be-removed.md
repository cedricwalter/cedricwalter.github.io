---
id: 3032
title: 'Zoom gallery will be removed'
date: '2007-07-25T17:18:33+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3032'
permalink: /internet/zoom-gallery-will-be-removed/
image: /wp-content/uploads/2007/07/galleryLogo_sm.gif
tags:
    - homepage
    - 'My Homepage'
---

In the few coming days…main reason is the lack of project visibility and number of attacks on it. Zoom gallery is maybe still one of the best gallery for #Joomla! but the current instability and number of developer has forced me to install <span style="font-weight: bold;">a new gallery at:

 [![](/assets/images/2007/07/galleryLogo_sm.gif)](http://gallery.waltercedric.com)

<span style="font-weight: bold;"> So long live to the new gallery!

 I choose [Gallery2](http://gallery.menalto.com/) , for the number of developer, install base and healthy patch release management. There is a bridge if you want to integrate it into #Joomla!

[Gallery2](http://gallery.menalto.com/)<span style="font-style: italic;"> the open source web based **photo album organizer**<span style="font-style: italic;">. Gallery gives you an intuitive way to blend photo management seamlessly into your own website whether you’re running a small personal site or a large community site. 

 I choose the theme [Ajaxian](http://codex.gallery2.org/Gallery2:Themes:ajaxian):

 [2005 Google Summer of Code](http://gallery.menalto.com/wiki/Summer_of_Code "http://gallery.menalto.com/wiki/Summer_of_Code")<span style="font-style: italic;"> project, Ajaxian is full of the [AJAX goodness](http://en.wikipedia.org/wiki/Ajax_%28programming%29 "http://en.wikipedia.org/wiki/Ajax_(programming)")<span style="font-style: italic;"> that its name suggests. The album view combines a user-paced or automatic slide show with a Flickr-like thumbnail selector. Slide show controls literally slide down from the top of the current image. Clicking on an image starts an animated transition which reduces the image’s size to make room to display details about the image. Images fade in as the slide show plays. The album and item action select menus are located near the bottom of pages. The site administration and user login links are also located at the bottom of the page. [more…](http://codex.gallery2.org/Gallery2:Themes:ajaxian)

  I came across many bugs during the install. The install is easy, it was more the settings of my server which have make me a lot of troubles…

[ mod\_security](../../../../content/view/1007/54/) first as I was having a set of old rule set form [www.gotroot.com](http://www.gotroot.com/). Recommended is to use always the latest set of rules

` wget http://www.gotroot.com/downloads/ftp/mod_security/apache2/apache2-gotrootrules-latest.tar.gz

 tar xvf apache2-gotrootrules-latest.tar.gz

 mv apache2-gotrootrules-latest/*.* /etc/apache2/gotroot`

 Then the order of rules includes was not correct, the file `exclude.conf` was loaded at the end, so no firewall rules were excluded correctly for gallery and Joomla!  
 I did not receive `http error 500` (was [ mod\_security](../../../../content/view/1007/54/) return when he feel someone is attacking the application by submitting bad things in the http URL), but receive a lot of `http errors 403`.

 It took me 40 minutes to realize that `http errors 403` are coming from [ mod\_evasive](../../../../content/view/1008/54/) (default behavior). The browser was simply making too much request on some page of gallery for my [ mod\_evasive](../../../../content/view/1008/54/)` `settings. I change them

| from | to |
|---|---|
| `<ifmodule mod_evasive20.c="">

   DOSHashTableSize 3097

   DOSPageCount 5

   DOSSiteCount 100

   DOSPageInterval 2

   DOSSiteInterval 2

   DOSBlockingPeriod 600  

   DOSEmailNotify xxx@xxx.com

 </ifmodule><p> </p>` | `<ifmodule mod_evasive20.c="">

   DOSHashTableSize 3097

   DOSPageCount 5

   DOSSiteCount 100

   DOSPageInterval 1

   DOSSiteInterval 1 

   DOSBlockingPeriod 2  

   DOSEmailNotify </ifmodule>``xxx@xxx.com`    `` |

The new gallery is up and running, I need some more hours to migrate everything into it.