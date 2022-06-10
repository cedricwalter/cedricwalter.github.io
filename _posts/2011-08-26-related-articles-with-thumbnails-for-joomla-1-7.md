---
id: 7111
title: 'Related articles with Thumbnails for Joomla! 1.7'
date: '2011-08-26T17:16:18+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7111'
permalink: /joomla/related-articles-with-thumbnails-for-joomla-1-7/
tags:
    - established
    - related
    - viewed
---

![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")

This is a drop in replacement for the #Joomla! core module “Related Articles”, it offer the same level of features but also add thumbnails.

*This Module displays other Articles that are related to the one currently being viewed. These relations are established by the Meta Keywords.   
All the keywords of the current Article are searched against all the keywords of all other published Articles. For example, you may have an Article on “Breeding Parrots” and another on “Hand Raising Black Cockatoos”. If you include the keyword “parrot” in both Articles, then the Related Items Module will list the “Breeding Parrots” Article when viewing “Hand Raising Black Cockatoos” and vice-versa.*

You can see this module [live running here](http://localhost/demo-joomla-1.7/index.php/using-joomla/extensions/modules/content-modules/archive) (module in top right corner)

Attention, it is required to install the library “[TimThumb for #Joomla! 1.6 / 1.7](https://waltercedric.com/new/?p=2399)” for proper operations.

# Features

- For #Joomla! 1.5/1.6/1.7
- CSS driven output (file located at media/mod\_articles\_popular\_thumb/css.css), feel free to submit changes, alternate CSS layout.
- Use #Joomla caching for best performances,
- Thumbnails width and height can be specified,
- Thumbnails are automatically extracted from the text introduction. If no image is found, a default picture can be defined
- You can switch off separately the title, text teaser and thumbnails,
- The length of the text teaser and ending (»/…/ read more) can be modified in the administrator panel,
- It is based on the code of the internal #Joomla! core module **mod\_related\_items.**

## Notes

**This module use TimThumb 2.8.0 that must be installed as a #Joomla! library**

- Install lib\_[TimThumb\_j16\_j17.zip](https://waltercedric.com/new/?p=2391) for #Joomla! 1.7 using the installer

> [TimThumb](http://www.binarymoon.co.uk/projects/timthumb/) is a simple, flexible, PHP script that resizes images. You give it a bunch of parameters, and it spits out a thumbnail image that you can display on your site.

[Visit the download section](downloads.html)