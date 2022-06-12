---
id: 3035
title: 'Speed up your web pages with YSlow'
date: '2007-07-27T21:38:02+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3035'

tags:
    - faster
    - optimization
    - performance
    - Tuning
---

YSlow analyzes web pages and tells you why they’re slow based on the [rules for high performance web sites](http://com3.devnet.re3.yahoo.com/performance/index.html#rules). YSlow is a [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/5369) integrated with the popular [Firebug](http://www.getfirebug.com/) web development tool.YSlow gives you:

- Performance report card
- HTTP/HTML summary
- List of components in the page
- Tools including [JSLint](http://jslint.com/)

 [Download HERE](http://com3.devnet.re3.yahoo.com/yslow/)  
 Visit also the homepage of the team behind this tool: [Yahoo!’s Exceptional Performance Team](http://com3.devnet.re3.yahoo.com/performance/)

 You should not take too much time to guess that I am currently optimizing my homepage 🙂  
 Be careful, running this tool more than 5 times make my Firefox crash 😉

Some statistics:

- [forums.waltercedric.com](http://forums.waltercedric.com/) Performance Grade: B (87), still working on it
- [www.waltercedric.com](http://www.waltercedric.com) Performance Grade: B (83) was F before, still working on it
- [gallery.waltercedric.com](http://gallery.waltercedric.com) Performance Grade: D (66), still working on it

Some useful links

- [ShrinkSafe](http://alex.dojotoolkit.org/shrinksafe/) is a JavaScript “compression” system. It can typically reduce the size of your scripts by a third or more, depending on your programming style.
- [mod\_expires apache 2.0 modules documentation](http://httpd.apache.org/docs/2.0/mod/mod_expires.html) in order to reduce bandwidth
- [mod\_deflate and mod\_expires small howto](http://howto.gumph.org/content/reduce-webserver-bandwidth/)
- compressing javascript or [how to compress javascript with htaccess](http://joseph.randomnetworks.com/archives/2006/07/13/compressed-javascript/), useful if you can’t touch the apache configuration.

 Be careful! a lot of host get pretty low metering (just test your favorite internet site), but are stillvery fast -> this tools do not tell You their infrastructure: memcache server, multiple db server, multiple file server for static content and so on.