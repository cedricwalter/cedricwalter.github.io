---
id: 2894
title: 'Download issues on my homepage: zip files corrupt'
date: '2007-02-27T22:03:29+01:00'
author: 'Cédric Walter'



tags:
    - joomla
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2007/02/joomla_cms.png)

Ive look in Google (Google is Your best friend), and found that this issue is quite common…

Workaround:  
 Try to download my components with either [Firefox ](http://www.getfirefox.com)(Linux, Windows) or [Opera](http://www.getfirefox.com)(Linux, Windows), or Safari (MAC) or Konqueror (Linux) it will work.

One more time, Internet Explorer do not correctly handle gzip response. IE has bugs (gee, what a surprise) that make it ignore compression on certain types. So that zip file you got is actually just a .zip in a .gz file, if you gunzip it first it becomes a valid zip.

- I am also able to reproduce it, with IE6.0 and IE7.0 (I can now make some tests)
- I am currently rebooting apache till I find a configuration workaround,

I am sorry for the inconvenience.  
In between, it may the prefect time to give Firefox a try:   
<http://www.getfirefox.com>

### <span style="font-weight: bold; color: #ff0000;">UPDATE:

I’ve correct the issue by avoiding compression on all response content, correct a misconfiguration in the browser pattern recognition [I’ve also update the article: mod\_deflate accordingly](content/view/1121/1/)

Happy downloading!  
  
