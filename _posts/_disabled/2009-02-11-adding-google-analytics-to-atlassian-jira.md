---
id: 4151
title: 'Adding Google Analytics to Atlassian JIRA'
date: '2009-02-11T23:43:11+01:00'
author: 'Cédric Walter'



---

As I found no better tutorial on Internet, here is a very very short how to add [Google analytics](http://www.google.com/analytics/) to *Atlassian* JIRA

Edit the file <font face="Fixedsys">atlassian-jira/includes/decorators/stylesheettag.jsp

This file is responsible for adding CSS links in html and is included in all pages. Now put the usual code you get after creating a new analytics profile

> <script type=”text/javascript”>   
> var gaJsHost = ((“https:” == document.location.protocol) ? “[https://ssl.”](https://ssl.) : “[http://www.”);](http://www.)   
> document.write(unescape(“%3Cscript src='” + gaJsHost + “google-analytics.com/ga.js’ type=’text/javascript’%3E%3C/script%3E”));   
> </script>   
> <script type=”text/javascript”>   
> try {   
> var pageTracker = \_gat.\_getTracker(“UA-88600-8”);   
> pageTracker.\_trackPageview();   
> } catch(err) {}</script>

While not ideal, this method add the #JavaScript in the HTML <head> instead of the HTML <body>, it simply work as expected and let you get insight about JIRA usage using Google Analytics.