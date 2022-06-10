---
id: 4311
title: 'Adding Google analytics to Atlassian Bamboo'
date: '2009-05-03T18:32:34+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4311'
permalink: /development/adding-google-analytics-to-atlassian-bamboo/
---

![2742514705_fe8fd07b14](/assets/images/2009/05/2742514705_fe8fd07b14.jpg "2742514705_fe8fd07b14")

As I found no better tutorial on Internet, here is a very very short how to add [Google analytics](http://www.google.com/analytics/) to *Atlassian* Bamboo, it require a bit of hacking, and these kind of changes will be lost after each upgrade of Bamboo..

Edit the file webapps/ROOT/start.ftl Now put the usual code you get after creating a new analytics profile just before the &lt;/body&gt;

> &lt;script type="text/javascript"&gt;   
> var gaJsHost = (("https:" == document.location.protocol) ? "[https://ssl."](https://ssl.) : "[http://www.");](http://www.)   
> document.write(unescape("%3Cscript src=’" + gaJsHost +   
>  "google-analytics.com/ga.js’ type=’text/javascript’%3E%3C/script%3E"));   
> &lt;/script&gt;   
> &lt;script type="text/javascript"&gt;   
> try {   
> var pageTracker = \_gat.\_getTracker("UA-88600-10");   
> pageTracker.\_trackPageview();   
> } catch(err) {}&lt;/script&gt;

While not ideal, it simply work as expected and let you get insight about [Atlassian Bamboo](http://www.atlassian.com/software/bamboo/) usage using [Google analytics](http://www.google.com/analytics/).

My [Bamboo](http://www.atlassian.com/software/bamboo/) continuous integration server is available at <http://bamboo.waltercedric.com/>

You can also insert [Google Adsense](https://www.google.com/adsense) using the same trick, but don’t forget that all your changes may be lost if you upgrade to a new version. I will investigating further if there is not a plugin or an other way to do this. Stay Tuned!