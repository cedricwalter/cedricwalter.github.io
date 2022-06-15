---
id: 4389
title: 'Tags.waltercedric.com now open source'
date: '2009-06-12T21:09:46+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/06/tags.waltercedric.com_.png
---

I release now the code that power my sub domain <http://tags.waltercedric.com>

[![tags.waltercedric.com](/assets/images/2009/06/tags.waltercedric.com_.png "tags.waltercedric.com")](http://tags.waltercedric.com/)

The tag cloud is displayed in its own sub domain and use frame. It let your visitor browse your site really fast, as the top menu (menu.php) is always displayed. The nice effect is done in Adobe Flash. The flash code is coming from Roy Tanck’s wp-cumulus [http://www.roytanck.com,](http://www.roytanck.com,/) a wonderful Word Press 3D flash tag cloud plug-in.

I did implement this in less than an hour, it is rough, but it simply work in my setup. You can use this code as a start. (License is GPL v3)

### Requirement 1

Currently the code parse database tables of [Joomla Tags from Phil Taylor](http://www.joomla-tags.com/)

*Joomla Tags is a Joomla Extension for adding tags to Joomla Content. Use Joomla Tags to allow content classification by keywords (Tags), can also be used to create virtual categories to add content into, over coming Joomla’s single section/category structure*

So you need a license (it may be free one day), soon Joomla 1.6 will be out, It will support tagging out of the box, and I will support this as well

### Requirement 2

I did not implement caching, nor have any Joomla access to framework, that is why I decide to update all clouds in a CRON. So you must be able to define a CRON to update your clouds

### Configuration and first run

Edit the file generator/config.php and change values for your host.

run the the following 3 files in directory generator at least once, or put them in a CRON

\# php tagsall.php

\# php tagsletters.php

\# php tagstop100.php

### Customizing

You can change colors and size of the cloud by editing display.php

### Final note

Drop me an email if you ever use this code, I am always interested to know who use my code 🙂

[Download NOW](https://waltercedric.com/new/?p=492)