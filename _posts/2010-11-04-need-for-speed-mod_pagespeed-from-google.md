---
id: 6369
title: 'Need for Speed? mod_pagespeed from Google'
date: '2010-11-04T22:05:31+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6369'
permalink: /development/need-for-speed-mod_pagespeed-from-google/
header:
  teaser: /assets/images/2009/10/google_logo.jpg
tags:
    - faster
    - google
    - optimization
---

> [mod\_pagespeed](http://code.google.com/speed/page-speed/docs/module.html) is the latest addition to our family of products, performing on-the-fly optimization in the Apache™ 2 HTTP Server. It provides webmasters and web developers that manage their Apache 2 configuration with technology that applies Page Speed performance best practices automatically. Webmasters can get the benefits of the optimizations without having to manually going back and fixing the performance issues that Page Speed detects.

This solution is valid if you do not want to carefully optimize your site, and it come for now at huge initial CPU costs till the cache is filled up. The load on my server has proven to be unacceptable (for me) and I was forced to switch it off. But it may work on your server depending on the page size, number of visitors. Authors are working hard and communicating a lot on the [official mailing list](http://groups.google.com/group/mod-pagespeed-discuss) to reduce that load and improve the code in the coming weeks

If you trust me, you can download the library module **libmod\_pagespeed.so** for Apache 2.2

from <http://drivers.waltercedric.com/>

Check before installing the MD5 keys of this file

```
# md5sum -b mod_pagespeed.so 187995e3623a222ec5b54c331ee7ffaa *mod_pagespeed.so
```

If it matches, drop it into your Apache library folder /usr/lib64/apache2/

### Build Apache module mod\_pagespeed yourself

On my OpenSuSE system, I was forced to install first

```
zypper in gcc-c++
```

Then read <http://code.google.com/p/modpagespeed/wiki/HowToBuild>

you should get after a successful build

- ./out/Release/libmod\_pagespeed.so
- ./out/Release/install/common/pagespeed.conf

Install the module library

```
cp ./out/Release/libmod_pagespeed.so  /usr/lib64/apache2/mod_pagespeed.so
```

### Configuration

After installing mod\_pagespeed, it can be customized and configured by editing the Apache configuration file

```
/etc/apache2/conf.d/pagespeed.conf
```

so you can run

```
# cp ./out/Release/install/common/pagespeed.conf /etc/apache2/conf.d/pagespeed.conf
```

Create some directories

```
# mkdir /var/mod_pagespeed/ # mkdir /var/mod_pagespeed/cache/ # mkdir /var/mod_pagespeed/files
```

Has to be writtable by apache

```
chown -R wwwrun:www /var/mod_pagespeed/ 
```

and finally restart apache

```
 apache2ctl restart
```

There is a lot of available settings that are all well explained in this page [http://code.google.com/speed/page-speed/docs/using\_mod.html](http://code.google.com/speed/page-speed/docs/using_mod.html)

Here is my /etc/apache2/conf.d/pagespeed.conf stripped of all comments as an example:

```
LoadModule pagespeed_module /usr/lib64/apache2/mod_pagespeed.so    
SetOutputFilter MOD_PAGESPEED_OUTPUT_FILTER     
ModPagespeed on      
ModPagespeedDomain www.waltercedric.com     
ModPagespeedUrlPrefix  "http://www.waltercedric.com/mod_pagespeed/"     
ModPagespeedFileCachePath "/var/mod_pagespeed/cache/"     
ModPagespeedGeneratedFilePrefix "/var/mod_pagespeed/files/"     
ModPagespeedRewriteLevel CoreFilters     
ModPagespeedEnableFilters collapse_whitespace     
ModPagespeedEnableFilters extend_cache     
ModPagespeedEnableFilters combine_css     
ModPagespeedEnableFilters rewrite_css     
ModPagespeedEnableFilters rewrite_javascript     
ModPagespeedEnableFilters rewrite_images     
ModPagespeedEnableFilters remove_comments

# This page lets you view statistics about the mod_pagespeed module.
Order allow,deny         
# You may insert other "Allow from" lines to add hosts you want to      
# allow to look at generated statistics.  Another possibility is       
# to comment out the "Order" and "Allow" options from the config        
# file, to allow any client that can reach your server to examine        
# statistics.  This might be appropriate in an experimental setup or       
# if the Apache server is protected by a reverse proxy that will         
# filter URLs in some fashion.         
Allow from localhost         
SetHandler mod_pagespeed_statistics      
```

## Troubleshooting

You may be forced to remove mod\_deflate

You can disable mod\_pagespeed by adding in the url ?mod\_page\_speed=0

### Some mod\_pagespeed filters

- [add\_instrumentation](http://code.google.com/speed/page-speed/docs/filter-instrumentation-add.html) Adds client-side latency instrumentation.
- [extend\_cache](http://code.google.com/speed/page-speed/docs/filter-cache-extend.html) Improves cacheability.
- [collapse\_whitespace](http://code.google.com/speed/page-speed/docs/filter-whitespace-collapse.html) Removes unnecessary whitespace in HTML.
- [combine\_css](http://code.google.com/speed/page-speed/docs/filter-css-combine.html) Combines multiple CSS files into one.
- [combine\_heads](http://code.google.com/speed/page-speed/docs/filter-head-combine.html) Combines multiple elements into one.
- [move\_css\_to\_head](http://code.google.com/speed/page-speed/docs/filter-css-to-head.html) Moves CSS into the element.
- [elide\_attributes](http://code.google.com/speed/page-speed/docs/filter-attribute-elide.html) Removes unnecessary attributes in HTML tags.
- [inline\_css](http://code.google.com/speed/page-speed/docs/filter-css-inline.html) Inlines small external CSS files.
- [inline\_javascript](http://code.google.com/speed/page-speed/docs/filter-js-inline.html) Inlines small external #Javascript files.
- [outline\_css](http://code.google.com/speed/page-speed/docs/filter-css-outline.html) Moves large inline tags into external files for cacheability.
- [outline\_javascript](http://code.google.com/speed/page-speed/docs/filter-js-outline.html) Moves large inline tags into external files for cacheability.
- [remove\_quotes](http://code.google.com/speed/page-speed/docs/filter-quote-remove.html) Removes unnecessary quotes in HTML tags.
- [remove\_comments](http://code.google.com/speed/page-speed/docs/filter-comment-remove.html) Removes HTML comments.
- [rewrite\_css](http://code.google.com/speed/page-speed/docs/filter-css-minify.html) Minifies CSS.
- [rewrite\_images](http://code.google.com/speed/page-speed/docs/filter-image-optimize.html) Rescales, and compresses images; inlines small ones.
- [rewrite\_javascript](http://code.google.com/speed/page-speed/docs/filter-js-minify.html) Minifies #Javascript.

### Links

- <http://code.google.com/speed/page-speed/>
- <http://code.google.com/p/modpagespeed/>