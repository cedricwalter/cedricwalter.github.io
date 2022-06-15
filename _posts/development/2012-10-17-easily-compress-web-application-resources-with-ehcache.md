---

title: 'Easily Compress Web Application Resources with EhCache'
date: '2012-10-17T20:58:07+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/Nginx-logo.png
tags:
    - apache
    - java
    - maven
    - nginx
---

Resources such as #JavaScript and CSS files can be compressed before being sent to the browser, improving network efficiencies and application load time in certain case. If you are not using Apache with mod\_deflate or [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.") in front of your web application, you may need to implement resources compression yourself….

Wait! don’t start writing your own filter to compress files like CSS, html, txt, javascript it is way more difficult than you think to properly handle http response headers and do proper handling of mime type and caching. In one sentence don’t start reinventing the wheel: use [ehcache](http://ehcache.org) for example.

> [Ehcache](http://ehcache.org) is an open source, standards-based cache used to boost performance, offload the database and simplify scalability. [Ehcache](http://ehcache.org) is robust, proven and full-featured and this has made it the most widely-used #Java-based cache. It can scale from in-process with one or more nodes through to a mixed in-process/out-of-process configuration with terabyte-sized caches. For applications needing a coherent distributed cache, [Ehcache](http://ehcache.org) uses the open source Terracotta Sever Array.

in the pom.xml of your project add the following dependency to ehcache-web

```
<dependency>
    <groupId>net.sf.ehcache</groupId>
    <artifactId>ehcache-web</artifactId>
    <version>2.0.4</version>
</dependency>
```

in your web.xml, add a filter and configure it properly

```
<filter>
    <filter-name>CompressionFilter</filter-name>
    <filter-class>net.sf.ehcache.constructs.web.filter.GzipFilter</filter-class>
</filter> <filter-mapping>
<filter-name>CompressionFilter</filter-name>
<url-pattern>*.css</url-pattern>
</filter-mapping> <filter-mapping>
<filter-name>CompressionFilter</filter-name>
<url-pattern>*.html</url-pattern>
</filter-mapping> <filter-mapping>
<filter-name>CompressionFilter</filter-name>
<url-pattern>*.js</url-pattern>
</filter-mapping> <filter-mapping>
<filter-name>CompressionFilter</filter-name>
<url-pattern>/*</url-pattern>
</filter-mapping>
```

Read more at [EhCache Web Caching page](http://ehcache.org/documentation/user-

As a bonus, I provide you also below the configuration for the famous challenger HTTP server [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.")

```
 ##  # Gzip Settings  ##  gzip  on;  gzip_http_version 1.1;  gzip_vary on;  gzip_comp_level 6;  gzip_proxied any;  gzip_types text/plain text/css application/json application/x-javascript \

            text/xml application/xml application/xml+rss text/javascript \

            application/javascript text/x-js;  gzip_buffers 16 8k;  gzip_disable "MSIE [1-6]\.(?!.*SV1)";
```

or for the number one [HTTP server Apache](http://httpd.apache.org/) using mod deflate /etc/apache2/conf.d/deflate.conf

```
<Location>
    # Insert filter 
    #SetOutputFilter 
    DEFLATE AddOutputFilterByType 
    DEFLATE text/plain AddOutputFilterByType
    DEFLATE text/xml AddOutputFilterByType 
    DEFLATE application/xhtml+xml AddOutputFilterByType 
    DEFLATE text/css
    AddOutputFilterByType 
    DEFLATE application/xml 
    AddOutputFilterByType 
    DEFLATE image/svg+xml AddOutputFilterByType
    DEFLATE application/rss+xml 
    AddOutputFilterByType DEFLATE application/atom_xml AddOutputFilterByType DEFLATE
    application/x-javascript AddOutputFilterByType DEFLATE text/html # Netscape 4.x has some problems... BrowserMatch
    ^Mozilla/4 gzip-only-text/html # Netscape 4.06-4.08 have some more problems BrowserMatch ^Mozilla/4\.0[678] no-gzip
    # MSIE masquerades as Netscape, but it is fine BrowserMatch \bMSIE !no-gzip !gzip-only-text/html # Don't compress
    images SetEnvIfNoCase Request_URI \ \.(?:gif|jpe?g|png)$ no-gzip dont-vary # Make sure proxies don't deliver the
    wrong content Header append Vary User-Agent env=!dont-vary
</Location>
```