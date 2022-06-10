---
id: 7462
title: 'Speed up your web pages by embedding images in CSS.'
date: '2012-01-29T19:56:47+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7462'
permalink: /joomla/speed-up-your-web-pages-by-embedding-images-in-css/
image: /wp-content/uploads/2010/11/speed.jpg
---

![](/assets/images/2010/11/speed.jpg)

Data URI scheme is a URI scheme that provides a way to include data in line in web pages as if they were external resources. \[[WikiPedia](http://wikipedia.org/wiki/Data_URI_scheme)\]

Why you may want to start embedding images in CSS ?

- It reduce the number of http requests: instead of 1+N HTTP requests (1 for aggregated CSS file and N for images) you’ll get 1+1 requests (1 for aggregated CSS file and one for CSS file with all images), which gives you faster page loading and lower server load.
- CSS is cached by browsers and these images can be reused with a CSS selector/class (&lt;li&gt; are obvious candidate if they use images)
- Attention Internet Explorer 5 to Internet Explorer 7 do not support inline images!

**NOTA**: [Drupal](http://drupal.org/) has a module “[CSS Embedded Images](http://drupal.org/project/css_emimage)” to automatize the inclusion of external images in CSS, while [Joomla](http://www.joomla.org) has nothing ![Sad smile](/assets/images/2012/01/wlEmoticon-sadsmile.png) something that could be done in #Joomla platform, in an extension like [JFinalizer](http://extensions.joomla.org/extensions/site-management/site-performance/11366)….or in the [Gantry framework](http://www.gantry-framework.org/)!

I did start looking at the code of “[CSS Embedded Images](http://drupal.org/project/css_emimage)” and I am trying to make it a class for #Joomla 2.5

### Compatibility

- Google Chrome
- Firefox 2+ / Gecko
- Opera 7.2+
- Safari
- Konqueror and derivatives

You can create data URL with

```
<?php echo base64_encode(file_get_contents("http://www.acme.com/images/myimage.png")) ?>
```

or by using one [of the many online generator](http://www.greywyvern.com/code/php/binary2base64)

##### (X)HTML Image Embedding example

```
<img alt="Embedded Image"    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIA..." />
```

##### CSS Image Embedding Example

```
div.image {   width:100px;   height:100px;   background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIA...); }
```

##### XML Image Embedding Example

```
<image>   <title>An Image</title>   <link>http://www.your.domain</link>   <url>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIA...</url> </image>
```