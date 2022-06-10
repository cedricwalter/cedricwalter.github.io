---
id: 3039
title: 'WikiPedia architecture and scalability'
date: '2007-07-27T23:19:23+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3039'
permalink: /internet/wikipedia-architecture-and-scalability/
image: /wp-content/uploads/2007/07/wikipedia-logo.jpg
tags:
    - faster
    - optimization
    - performance
    - Tuning
---

| ![](/assets/images/2007/07/wikipedia-logo.jpg) | [This PDF](http://dammit.lt/uc/workbook2007.pdf) is a lot more technical, but reveal some challenges [WikiPedia](http://wikipedia.org/) is facing in order to maintain its infrastructure/response time.    [WikiPedia](http://wikipedia.org/) is simply the biggest multilingual free-content encyclopedia on the Internet. Over 7 million articles in over 200 languages, and still growing. - More than [75,000 active contributors](http://en.wikipedia.org/wikistats/EN/TablesWikipediansEditsGt5.htm "http://en.wikipedia.org/wikistats/EN/TablesWikipediansEditsGt5.htm") - Some [5,300,000 articles](http://en.wikipedia.org/wikistats/EN/TablesArticlesTotal.htm "http://en.wikipedia.org/wikistats/EN/TablesArticlesTotal.htm") (2M in English) - More than [100 languages](http://en.wikipedia.org/wikistats/EN/Sitemap.htm "http://en.wikipedia.org/wikistats/EN/Sitemap.htm"). - 100 servers in various hosting centers. - See [Wikipedia Statistics, visits per day](http://stats.wikimedia.org/EN/TablesUsageVisits.htm) - Over 1,000 administrators to ensure guidelines and policies |
|---|---|

 <span style="font-style: italic;">\[…\] <span style="font-style: italic;">Started as Perl CGI script running on single server in 2001, site has grown into distributed platform, containing multiple technologies, all of them open. The principle of openness  
 <span style="font-style: italic;">forced all operation to use free &amp; open-source software only. Having commercial alternatives out of question, [WikiPedia](http://wikipedia.org/)<span style="font-style: italic;"> had the challenging task to build efficient platform of freely  
 <span style="font-style: italic;">available components. \[…\]

 One more time, worth reading if you are into web development, performance and scalability. It seems that [lighttpd](http://www.lighttpd.net/) is more and more used for serving static files (html, images, js, css, pdf …) instead of the venerable [Apache](http://www.apache.org/)

 If you have still some new fresh neuron to burn, you can read the [<span class="toctext">Overall system architecture](http://meta.wikimedia.org/wiki/Wikimedia_servers#Overall_system_architecture) and [more HERE](http://meta.wikimedia.org/wiki/Wikimedia_servers)  
 The most important news here is that Wikipedia currently uses APC, so I choose the right PHP cache 😉