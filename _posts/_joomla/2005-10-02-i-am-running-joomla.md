---
id: 2039
title: 'I am running Joomla!'
date: '2005-10-02T13:59:28+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/10/Joomla-Logo-Horz-Color-Thumbnail.png
tags:
    - configuration
    - homepage
    - installation
    - instructions
    - production
---

![](/assets/images/2005/10/Joomla-Logo-Horz-Color-Thumbnail.png)  
I have successfuly migrated my homepage from Mambo CMS to [Joomla](http://help.joomla.org) CMS.

Joomla! is a production of Open Source Matters, the same team that brought you the award winning Mambo Content Management System. OSM has taken their final stable version of Mambo (4.5.2.3), given it a spring clean and named it #Joomla! 1.0 In addition, several small features that were going to be released in #Joomla! 1.1 have been brought forward and included in this release.

I have decide to trust and follow the previous core of Mambo developer in they statement: "open source matters".  
For some of You which are prepared to do the same, here is what I have done:

- First read instructions at [ Migrating to #Joomla! from Mambo](http://help.joomla.org/content/view/818/181/)
- I Have done a backup locally of my Mambo directory just in case of…
- I have made a copy of my Mambo directory on the server into a new directory joomla, open configuration.php and change the path
- then I have copied the joomla 1.0.1 content into the joomla server directory, do not overwrite configuration and do not copy installation directory

Make some test to see if everything is working properly, if Yes do the same in your production directory of mambo.  
Note to my visitors: I have not rename my directory since google has referenced it heavily ([14700 urls known](http://www.google.ch/search?hs=rYM&hl=de&safe=off&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&q=site%3Awaltercedric.com&btnG=Suche&meta=))