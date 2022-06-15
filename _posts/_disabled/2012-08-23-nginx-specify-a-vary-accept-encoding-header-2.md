---

title: 'Nginx Specify a Vary: Accept-Encoding header'
date: '2012-08-23T19:33:32+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/Nginx-logo.png
tags:
    - caching
    - conf
    - configuration
    - css
    - files
    - git
    - github
    - google
    - HowTo
    - html
    - javascript
    - level
    - linux
    - mac
    - microsoft
    - nginx
    - proxy
    - tutorial
    - webserver
---

![](/assets/images/2012/01/Nginx-logo.png)[nginx](http://nginx.org/) (pronounced “engine-x”) is an open source Web server and a reverse proxy server for HTTP, SMTP, POP3 and IMAP protocols, with a strong focus on high concurrency, performance and low memory usage. It is licensed under a BSD-like license and it runs on Unix, #Linux, BSD variants, Mac OS X, Solaris, AIX and Microsoft Windows \[[WikiPedia](http://en.wikipedia.org/wiki/Nginx)\]

Instructs proxy servers to cache two versions of the resource: one compressed, and one uncompressed. This helps avoid issues with public proxies that do not detect the presence of a `Content-Encoding` header properly.

Configuration files are provided using *Gist* <https://gist.github.com/1620307> and are CONSTANTLY updated for added security and speed. Gist is a simple way to share snippets and pastes with others. All gists are git repositories, so they are automatically versioned, forkable and usable as a git repository. **I recommend you to starred them to stay up to date.**

Just Add in /etc/[nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.")/nginx.conf in the http { … } section the following

```
 ##  # Gzip Settings  ##  gzip  on;  gzip_http_version 1.1;  gzip_vary on;  gzip_comp_level 6;  gzip_proxied any;  gzip_types text/plain text/html text/css application/json \
            application/x-javascript text/xml application/xml \
            application/xml+rss text/javascript application/javascript \
            text/x-js;  gzip_buffers 16 8k;  gzip_disable "MSIE [1-6]\.(?!.*SV1)";
```

from <https://developers.google.com/speed/docs/best-practices/caching#LeverageProxyCaching>