---
id: 2854
title: 'Speeding Up Joomla! a little bit'
date: '2007-01-28T18:09:57+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2854'
permalink: /joomla/speeding-up-joomla-a-little-bit/
tags:
    - HowTo
    - joomla
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2007/01/joomla_cms.png)

![](/assets/images/2007/01/speeding.up_.joomla.jpg) Since my server is still suffering, Ive decide today to take some actions.

 <span style="color: #3333ff; font-weight: bold;">user: changes can be done on shared hosting with limited user rights.  
 <span style="color: #ff0000; font-weight: bold;">root. changes require a full access to the server (root access with secure shell ssh)

 I have currently per months, 160.000 visitors and 2 Millions Hits.or per day 8000 visitors and 24000 pages view.  
 Server has only 1GB RAM.  
  
<span style="color: #ff0000; font-weight: bold;">UPDATE: I found one/THE reason why my host is slowing down…SPAMMERS!

click read more

| <span style="color: #3333ff; font-weight: bold;">user: |Joomla! settings    - I switch enable gzip compression OFF. Since this is meant to reduce the usage of bandwidth, not the load on my server. The server has to encode all the files in order to send them, which only puts additional load on your page. - I switch Joomla!! statistics off, as [AWSTATS](http://www.awstats.net/) is providing a much better job. |
|---|---|
| <span style="color: #3333ff; font-weight: bold;">user: |MySQL maintenance I Optimize (repair, refresh statistics) MySQL tables through MySQL admin, but It can be done through PLESK |
| <span style="color: #3333ff; font-weight: bold;">user: |Tune Joomla!! cache I Increase Joomla! cache lifetime from 900seconds to 24 hours as it better reflect the way I update my site (daily) |
| <span style="color: #3333ff; font-weight: bold;">user: |keep pages small- Reduce size of banner, using GIMP so they are using a web palette, most of them were shrink from 40kb to 7kb - I remove all un-needed space from the main templates file (index.php), an action which will help first users visitors only. - Attention, it is a never ending task… |
| <span style="color: #3333ff; font-weight: bold;">user: |Hunting software bugs    By switching the site to debug mode, I notice some nasty queries (select count(\*) from), all created by my statistics module ( Content Statistics on right side), In fact Joomla!! module do not inherit from Joomla!! cache automatically. I fix value in this module since I do not want to program cache support in it right now. |
| <span style="color: #ff0000; font-weight: bold;">root |One more <span style="color: #ff0000; font-weight: bold;">cache I decide to install a PHP accelerator: <span style="font-family: helvetica, sans-serif; color: #c04040;">*PHPA* from <http://www.php-accelerator.co.uk/>    ” The ionCube PHP Accelerator is an easily installed [PHP](http://www.php.net/) Zend engine extension that provides a PHP cache, and is capable of delivering a substantial acceleration of PHP scripts without requiring any script changes, loss of dynamic content, or other application compromises.”   Install is straightforward: just copy library into <span style="font-family: monospace;">/usr/local/lib/php\_accelerator\_1.3.3r2.so    and add these lines to <span style="font-family: monospace;">/etc/php.ini  \| <span style="font-family: monospace;">; PHP Accelerator extension    <span style="font-family: monospace;">zend\_extension=”/usr/local/lib/php\_accelerator\_1.3.3r2.so”    ``` 


```
phpa = on

phpa.c0_size = 64

phpa.cache_dir = /tmp
phpa.c0_logging = on

;The shm_stats_check_period is the minimum interval between checks of the 
;cache for expired scripts. The first server request after the interval has
;elapsed will trigger a scan of the cache for expired scripts, and remove

;any entries that it finds.
phpa.c0_stats_check_period = 5m

;The shm_ttl value is the value used to set the 
;time-to-expiry value when a script is accessed. Put another way, the shm_ttl
;value is the period after which an unaccessed script expires.
phpa.c0_ttl = 12h

;phpa.ignore_files = ""
;phpa.ignore_dirs = ""  

```
I use that tool: [HTTP Viewer](http://www.rexswain.com/httpview.html) to check if my page now contains a header `X-Accelerated-By:·PHPA/1.3.3r2`

|---|

Reduce surface of attack: I found my components that were not used by Joomla! (very old code and uused components . So go through all directories with FTp/SCP and remove any un-needed code….

 Review table data directly in the database…   
This is how I found 27 000 spams in my gallery (Zoom gallery)   
solution:

- I remove all entries
- Disallow comments operations (in Zoom gallery admin panel),

 but spammers were still able to insert comments, so I edit the file components/com\_zoom/lib/image.class.php   
//add because of spammers   
header(“HTTP/1.0 403 Forbidden”);   
//$database-&gt;setQuery(“INSERT INTO #\_\_zoom\_comments (imgid,cmtname,cmtcontent,cmtdate) VALUES (‘”.mysql\_escape\_str

Note: I recommend You to use also mod\_evasive and mod\_security (root access needed), see aprevious article on my site
  
Some links, where I borrow some ideas:

[ http://www.primakoala.com/tutorials/guides/speeding\_up\_joomla.html](http://www.primakoala.com/tutorials/guides/speeding_up_joomla.html)   
[ http://forum.joomla.org/index.php/topic,50278.0.html](http://forum.joomla.org/index.php/topic,50278.0.html)  
[ http://forum.joomla.org/index.php/topic,54175.0.html](http://forum.joomla.org/index.php/topic,54175.0.html)