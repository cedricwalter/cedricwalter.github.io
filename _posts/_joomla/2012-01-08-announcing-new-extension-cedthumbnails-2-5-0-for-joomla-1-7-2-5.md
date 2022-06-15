---
id: 7420
title: 'Announcing new extension CedThumbnails 2.5.0 for Joomla 1.7/2.5'
date: '2012-01-08T22:17:02+01:00'
author: 'Cédric Walter'



---

In order to regain control of development, avoid code duplications, easing installations, I have decided to group all these extensions Into one single component CedThumbnails.

<div class="approved"><div class="typo-icon">This new component will be delivered shortly! You are advised to update to #Joomla 1.7 and soon 2.5 if you are still using #Joomla 1.5. A version for #Joomla 1.5 may be done later this week.#### Module Latest article with thumbnails (mod\_articles\_latest\_thumb) 

This is a drop in replacement for the #Joomla! core module "Latest Articles", it offer the same level of features but also add thumbnails.

#### Module Popular articles with thumbnails (mod\_articles\_popular\_thumb) 

This is a drop in replacement for the #Joomla! core module "Popular Articles", it offer the same level of features but also add thumbnails.

#### Module Related articles with thumbnails (mod\_related\_items\_thumb) 

This is a drop in replacement for the #Joomla! core module "Related Articles", it offer the same level of features but also add thumbnails.   
This Module displays other Articles that are related to the one currently being viewed. These relations are established by the Meta Keywords.   
All the keywords of the current Article are searched against all the keywords of all other published Articles. For example, you may have an Article on "Breeding Parrots" and another on "Hand Raising Black Cockatoos". If you include the keyword "parrot" in both Articles, then the Related Items Module will list the "Breeding Parrots" Article when viewing "Hand Raising Black Cockatoos" and vice-versa.

#### Plugin Related articles with thumbnails (plg\_content\_relatedthumbarticles) 

This plugin displays other Articles that are related to the one currently being viewed. These relations are established by the Meta Keywords or using #Joomla categories.   
All the keywords of the current Article are searched against all the keywords of all other published Articles. For example, you may have an Article on "Breeding Parrots" and another on "Hand Raising Black Cockatoos". If you include the keyword "parrot" in both Articles, then the Related Items Module will list the "Breeding Parrots" Article when viewing "Hand Raising Black Cockatoos" and vice-versa.

#### Library WideImage (lib\_wideimage) 

Is a famous PHP library for manipulating images. WideImage is a lot better than TimThumb for that job,.

<div class="attention"><div class="typo-icon">Note that #Joomla 2.5 though **JImage support images manipulations**, this new extension will let you the choice to use JImage or WideImage. It support both!<div class="alert"><div class="typo-icon">Attention **JImage** do not support manipulation of remote file. If your articles, in introtext or fulltext, have images not located on your #Joomla host, it will be better to use WideImage.\* -> Security Fix   
\# -> Bug Fix   
\+ -> Addition   
^ -> Change   
– -> Removed   
! –> Note

– Remove support for TimThumb,   
\+ Support for #Joomla 2.5 JImage class.   
\+ Caching of thumbnails is done per extension, and the same image can be displayed on different size in the module or plugin   
\+ assembly one component to install to install 3 modules, 1 plugin and 1 library   
^ avoid code duplications, same code for all extensions   
\+ ability to locate picture for thumbnails is more flexible

I am currently making the changes at [Joomla Extensions Directory](http://extensions.joomla.org) , the version for #Joomla 1.6, 1.7 and 2.5 is ready!