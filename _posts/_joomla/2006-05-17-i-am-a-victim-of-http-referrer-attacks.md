---
id: 2532
title: 'I am a victim of  HTTP Referrer attacks&#8230;'
date: '2006-05-17T22:40:12+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/11/freecap.gif
tags:
    - Spam
    - spammer
---

I look today at my statistics, trying to discover some strange URLs (maybe an attack, I recommend You to do it) or tracking Referrer of my visitors in order to see who is back linking me, or where someone is talking about me.

I found 201 referrer coming from a famous hardcore movie site, 201? this is not a hazard. Going there for the sake of truth (;-)) I found that they are offering free porn images, video and I immediately thought about  
  
The famous "Free porn [CAPTCHA](http://en.wikipedia.org/wiki/Captcha) Attack"

![](/assets/images/2005/11/freecap.gif) My site is powered by [Joomla](http://www.joomla.org/), and I have developed a [CAPTCHA](http://en.wikipedia.org/wiki/Captcha) framework. A Capctha is a generated image containing some scrambled text, the idea is to require a human being to read it and so it prevent spammers from automatically generating million of comments, emails accounts,…

One way to crack [CAPTCHA](http://en.wikipedia.org/wiki/Captcha) is to offer a free porn site which requires that the user key in the solution to a captcha — which has been inlined from my site for example — before he can gain access. Free porn images or video attract a lot of users around the clock and in many countries.

Solutions **to block spammers: for a time**

1. Check HTTP Referrer when the user post his key, and avoid sites address containing sex, hardcore, … based on a dictionary -> the only drawback is that it is trivial to fake the HTTP Referrer,
2. Inserting a supplementary text into the generated [CAPTCHA](http://en.wikipedia.org/wiki/Captcha) image: "Do not enter text if the site is not waltercedric.com", this is done in one of my securityimages Plugin: Freecap but NOT in core 1.1 or HnCaptcha 1.0.  
    I will have to extends plugins which are not protected soon

It can also be a tentative of HTTP Referrer Spam 

![](/assets/images/2006/03/spammers.jpg)Firstly, the spammer creates a simple script that searches sites just like search engine bots do, but the only difference is that these scripts send a referrer header with their own site’s address.   
Why to do this you may ask? My sites has its statistics page indexed by a number of search engines. This means that if the spammer can get his site listed in the stats page, then it will give this referrer&#146;s site higher ranking in search engines too. This also allows that more search engines will crawl the link back to their site.

Solutions: <span style="FONT-WEIGHT: bold; COLOR: rgb(255,0,0)">Avoid publishing Your statistics page.

1. I disable the links stats in the top menu of joomla, so I am sorry but nobody will be able to see it in real time.
2. I add to the file robot.txt (root folder of your site) disallow stats in order to prevent further re-indexing of previous search engine.
3. I add a file .htaccess to disallow new processing of that file so you I will need to enter a password to see that page.