---
id: 5189
title: 'TeamCity updated to 5.1.1 and a Joomla! module soon available :-)'
date: '2010-05-03T20:16:52+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2010/05/teamcity512_thumb.png
tags:
    - early
    - teamcity
---

![](/assets/images/2010/05/teamcity512_thumb.png)

I did upgrade from [TeamCity](http://www.jetbrains.com/teamcity/) 5.0.1 to [TeamCity](http://www.jetbrains.com/teamcity/) 5.1.1 In no time, just drop the war in my Tomcat container 🙂

At this address you will always find the latest snaphosts of some (I would need 44 builds to display them all!) of my PHP projects for #Joomla!

### <http://teamcity.waltercedric.com>

I will also upgrade tomorrow early morning our TeamCity Licensed server at [www.Innoveo.com](http://www.Innoveo.com) .

### Continuous build for #Joomla!

By the way I have still to deliver ([HERE](http://groups.google.com/group/joomla-dev-general/browse_thread/thread/f5ad5683e5e179c9/12bb836ae035eff3?hl=en-GB&lnk=gst&q=teamcity#12bb836ae035eff3) and [HERE](http://groups.google.com/group/joomla-dev-cms/browse_thread/thread/3ba00d6cd9a56b39/e410c6b6aa62a15f?lnk=gst&q=teamcity#e410c6b6aa62a15f)) what i promised on the [Joomla! development group](http://groups.google.com/group/joomla-dev-general?hl=en-GB), aka a full solution for developing #Joomla! using #Maven for PHP and [Teamcity](http://www.jetbrains.com/teamcity/)/[Bamboo](http://www.atlassian.com/software/bamboo/)/Husdon. You can see the [documentation I made in my WIKI](http://wiki.waltercedric.com/index.php?title=ContinuousBuildforJoomla) (work in progress)

### TeamCity integration in #Joomla!

At the same time, #Joomla! users that are using TeamCity, search no more, I will be providing you the first GPL module for #Joomla! that let you display in your site the status of all your builds/projects! The code is heavily using the [REST API](http://confluence.jetbrains.net/display/TW/REST+API+Plugin) with [PHP CURL](http://php.net/manual/en/book.curl.php) and a bit of XML parsing. If you have any requirements, it is still time to drop me an email 😉