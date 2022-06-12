---
id: 3037
title: 'Ebay architecture scalability'
date: '2007-07-27T22:50:12+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3037'

header:
teaser: /assets/images/2007/07/ebay.logo_.gif
tags:

- faster
- optimization
- performance
- Tuning

---

# Ebay

At SD Forum 2006, Randy Shoup and Dan Pritchett, both with eBay, gave a presentation on eBay’s architecture. Pritchett
subsequently posted his presentation slides in his
blog, [The eBay Architecture](http://www.addsimplicity.com/downloads/eBaySDForum2006-11-29.pdf). Predictably, the
presentation contained a few inspiring statistics, such as: - 15,000 application instances running in eight data centers

- 212,000,000 registered users - 1 billion page views per day - 26 billion SQL queries and updates per day - Over 2
  petabytes of data - $1,590 worth of goods traded per second - Over 1 billion photos - 7 languages - 99.94% uptime |

Other stats in the presentation related to development process and features, such as:

1. Over 300 new features released each quarter
2. Over 100,000 lines of code released every two weeks
   "According to the presentation, the goal of eBay’s current architecture is to handle an additional ten-fold increase
   in traffic, something eBay expects to reach within a few short years. Another architecture objective is to be able to
   handle peak loads, and for components to gracefully degrade under unusual load or in the case of system
   failures." [read more HERE](http://www.artima.com/weblogs/viewpost.jsp?thread=188683)

# Wikipedia

[This PDF](http://dammit.lt/uc/workbook2007.pdf) is a lot more technical, but reveal some
challenges [WikiPedia](http://wikipedia.org/) is facing in order to maintain its infrastructure/response
time.    [WikiPedia](http://wikipedia.org/) is simply the biggest multilingual free-content encyclopedia on the
Internet. Over 7 million articles in over 200 languages, and still growing. - More
than [75,000 active contributors](http://en.wikipedia.org/wikistats/EN/TablesWikipediansEditsGt5.htm "http://en.wikipedia.org/wikistats/EN/TablesWikipediansEditsGt5.htm")
-
Some [5,300,000 articles](http://en.wikipedia.org/wikistats/EN/TablesArticlesTotal.htm "http://en.wikipedia.org/wikistats/EN/TablesArticlesTotal.htm") (
2M in English) - More
than [100 languages](http://en.wikipedia.org/wikistats/EN/Sitemap.htm "http://en.wikipedia.org/wikistats/EN/Sitemap.htm")
. - 100 servers in various hosting centers. -
See [Wikipedia Statistics, visits per day](http://stats.wikimedia.org/EN/TablesUsageVisits.htm) - Over 1,000
administrators to ensure guidelines and policies |

\[…\] Started as Perl CGI script running on single server in 2001, site has grown into distributed platform, containing
multiple technologies, all of them open. The principle of openness  
forced all operation to use free &amp; open-source software only. Having commercial alternatives out of
question, [WikiPedia](http://wikipedia.org/) had the challenging task to build efficient platform of freely  
available components. \[…\]

One more time, worth reading if you are into web development, performance and scalability. It seems
that [lighttpd](http://www.lighttpd.net/) is more and more used for serving static files (html, images, js, css, pdf …)
instead of the venerable [Apache](http://www.apache.org/)

If you have still some new fresh neuron to burn, you can read
the [<span class="toctext">Overall system architecture](http://meta.wikimedia.org/wiki/Wikimedia_servers#Overall_system_architecture)
and [more HERE](http://meta.wikimedia.org/wiki/Wikimedia_servers)  
The most important news here is that Wikipedia currently uses APC, so I choose the right PHP cache 😉

# Youtube
Kyle Cordes’s blog post on the “[YouTube Scalability Talk](http://kylecordes.com/2007/07/12/youtube-scalability/)” It’s
definitely worth reading!