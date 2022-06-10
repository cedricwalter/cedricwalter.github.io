---
id: 3037
title: 'Ebay architecture scalability'
date: '2007-07-27T22:50:12+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3037'
permalink: /internet/ebay-architecture-scalability/
header:
  teaser: /assets/images/2007/07/ebay.logo_.gif
tags:
    - faster
    - optimization
    - performance
    - Tuning
---

| ![](/assets/images/2007/07/ebay.logo_.gif) | At SD Forum 2006, Randy Shoup and Dan Pritchett, both with eBay, gave a presentation on eBay’s architecture. Pritchett subsequently posted his presentation slides in his blog, [The eBay Architecture](http://www.addsimplicity.com/downloads/eBaySDForum2006-11-29.pdf).   Predictably, the presentation contained a few inspiring statistics, such as: - 15,000 application instances running in eight data centers - 212,000,000 registered users - 1 billion page views per day - 26 billion SQL queries and updates per day - Over 2 petabytes of data - $1,590 worth of goods traded per second - Over 1 billion photos - 7 languages - 99.94% uptime |
|---|---|

Other stats in the presentation related to development process and features, such as:

<div class="vegies">1. Over 300 new features released each quarter
2. Over 100,000 lines of code released every two weeks
"According to the presentation, the goal of eBay’s current architecture is to handle an additional ten-fold increase in traffic, something eBay expects to reach within a few short years. Another architecture objective is to be able to handle peak loads, and for components to gracefully degrade under unusual load or in the case of system failures." [read more HERE](http://www.artima.com/weblogs/viewpost.jsp?thread=188683)