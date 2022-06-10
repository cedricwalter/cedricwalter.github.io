---
id: 4011
title: 'Avoid Hotlinking or so called bandwidth stealing'
date: '2009-01-01T13:28:57+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4011'
permalink: /development/avoid-hotlinking-or-so-called-bandwidth-stealing/
---

> **[From WikiPedia](http://en.wikipedia.org/wiki/Inline_linking)**
> 
> **Inline linking** (also known as **hotlinking**, **leeching**, **piggy-backing**, **direct linking**, **offsite image grabs** and **bandwidth theft**) is the use of a linked object, often an image, from one site into a web page belonging to a second site. The second site is said to have an inline link to the site where the object is located.

This is not just Bandwidth Stealing, as

- **It cost CPU and bandwidth** which means less performance for your visitors,
- **It cost a lot of money** as you still pay the server cost, and loose ad revenues,
- **It drive people away** from your reputable homepage since they will find your picture or files on any mirrors,
- **It may be a security threat** at least for distributable software, anybody may alter (backdoor,ads, privacy information stealing) any of my open source component without my consent.

The mod\_rewrite module is able to intercept incoming URLs and modify them according to a set of rules that you specify. The basic idea is use the mod\_rewrite module to inspect the incoming HTTP header. The field we’re looking for is the Referer field – or basically the URL that the current request originated from.

> #### [Referer](http://www.w3.org/Protocols/HTTP/HTRQ_Headers.html#z14)
> 
> This optional header field allows the client to specify, for the server’s benefit, the address ([ URI](http://www.w3.org/Protocols/HTTP/Request.html#URI) ) of the document (or element within the document) from which the URI in the request was obtained.   
> This allows a server to generate lists of back-links to documents, for interest, logging, etc. It allows bad links to be traced for maintenance.

So create a file .htaccess at the root of your site with the following content:

RewriteCond %{HTTP\_REFERER} !^$   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?waltercedric.com(/)?.\*](http://(www\.)?waltercedric.com(/)?.*)$ \[NC\]   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?wiki.waltercedric.com(/)?.\*](http://(www\.)?wiki.waltercedric.com(/)?.*)$ \[NC\]   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?forums.waltercedric.com(/)?.\*](http://(www\.)?forums.waltercedric.com(/)?.*)$ \[NC\]   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?bugs.waltercedric.com(/)?.\*](http://(www\.)?bugs.waltercedric.com(/)?.*)$ \[NC\]   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?demo.waltercedric.com(/)?.\*](http://(www\.)?demo.waltercedric.com(/)?.*)$ \[NC\]   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?demo2.waltercedric.com(/)?.\*](http://(www\.)?demo2.waltercedric.com(/)?.*)$ \[NC\]   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?mirror.waltercedric.com(/)?.\*](http://(www\.)?mirror.waltercedric.com(/)?.*)$ \[NC\]   
RewriteCond %{HTTP\_REFERER} !^[http://(www\\.)?images.google.com(/)?.\*](http://(www\.)?images.google.com(/)?.*)$ \[NC\]   
RewriteRule .\*\\.(jpg|jpeg|gif|png|bmp|zip|css)$ <http://www.waltercedric.com/bandwidthStealing.html> \[R,NC\]

# Notes:**

- I want to allow cross linking between all my Subdomains wiki,demo, bugs, forums … so I have a bigger list of allowed Referer than usual to enter…
- I do not allow hotlinking of the following resources for obvious reasons: jpg|jpeg|gif|png|bmp|zip|css
- I redirect any bad people to a fix files on disk <http://www.waltercedric.com/bandwidthStealing.html>
- You are allowed to copy the templates <http://www.waltercedric.com/bandwidthStealing.html> as long as you keep the bottom link.
- Note the latest RewriteCond: I always allow Google to references my images

There is a useful online generator with a lot more explanation online at the bottom of this page http://www.htmlbasix.com/disablehotlinking.shtml . This is active on my server since 2 weeks, and I’ve see a performance in response time.

# More tips**

- To have an insight on resources stealing in nearly real time, simply put a statistics marker with for example [Google Analytics](https://www.google.com/analytics) to see how many people are landing on that page per week or months!
- To generate money (better than nothing), dot forget also to put advertisements publicity on your redirect hot linking page