---
id: 4701
title: 'Optimize Joomla! site'
date: '2009-09-27T11:14:00+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4701'
permalink: /joomla/optimize-joomla-site/
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2009/09/joomla_cms.png)

I did optimize a bit my #Joomla! homepage in the last few days. This has been achieved with

- Enabling #Joomla module caching in all 3rd party module where it was missing/ not implemented at all,
- Starting to offload some assets (JavaScript) to faster hosting,

Click read more to apply the same for your internet site.

## Use Joomla Module caching

Not all 3rd party Joomla modules are using caching. This means that in worst case, some Joomla! modules may create way too much SQL queries. A way to reduce the load is to activate module caching. You’ll have to go through **all 3rd party modules** and check that they have in their administrator panel a setting to enable/disable cache.

![jooomla.enable.caching](/assets/images/2009/09/jooomla.enable.caching.png "jooomla.enable.caching")

You’ll see that 90% of all modules (except official Joomla! modules which are able to deal with caching) are NOT supporting caching. We will change that now:

For every module without cache, open the xml file at /modules/mod\_xxxxxxx/mod\_xxxxxxx.xml and add between <params> .. </params>

Note that if <params> .. </params> do not exist, just add it like below

Visit or reload the admin panel of that module and set the **Enable Cache** to **Yes.** Click Save/Apply at least once.

Now the output of this module will be saved in /cache and only refresh when global Joomla cache timeout (900 seconds as default). Consider also contacting the author of the module so he can patch his code.

## Offload assets

Offloading assets (JavaScript, static images, static files) can bring tremendous speed gains, at the cost of resolving more DNS name. Using this technique will help your Apache concentrate on php instead of streaming static data.

### Offload JavaScript

When you look at Joomla! frontend source code, you will see that the JavaScript library mootols.js is 74kb big. [Google](http://www.google.com) is offering to host all major AJAX libraries free of charge at <http://code.google.com/apis/ajaxlibs/documentation/> so why not profiting of their datacenter speed/bandwidth/response time?

Now the dirty part, You can’t tell Joomla! not to include the mootols.js from /media/system/js/mootools.js at rendering time. We will have to patch the code of Joomla!

open /libraries/joomla/html/html/behavior.php and search for

Joomla use mootools.js in version 1.11, don’t use the latest version (1.2.3) as most Joomla! plugin wont work (but your mileage may vary).

To be continued