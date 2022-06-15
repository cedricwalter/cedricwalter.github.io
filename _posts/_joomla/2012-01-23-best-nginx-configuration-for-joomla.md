---
id: 7446
title: 'Best nginx configuration for Joomla'
date: '2012-01-23T20:31:59+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/Nginx-logo.png
tags:
    - conf
    - configuration
    - copy
    - create
    - directory
    - disk
    - example
    - files
    - git
    - github
    - group
    - HowTo
    - joomla
    - linux
    - nginx
    - proxy
    - webserver
---

[nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.") (pronounced “engine-x”) is an open source Web server and a reverse proxy server for HTTP, SMTP, POP3 and IMAP protocols, with a strong focus on high concurrency, performance and low memory usage. It is licensed under a BSD-like license and it runs on Unix, #Linux, BSD variants, Mac OS X, Solaris, AIX and Microsoft Windows \[[WikiPedia](http://en.wikipedia.org/wiki/Nginx)\]

These are my reusable settings for any #Joomla hosting, these are the most secure, and fastest settings to the best of my knowledge.

Configuration files are provided using Gist and are CONSTANTLY updated for added security and speed. Gist is a simple way to share snippets and pastes with others. All gists are git repositories, so they are automatically versioned, forkable and usable as a git repository. **I recommend you to starred them to stay up to date.**

### Joomla.conf for nginx

Create a new directory nginx/conf to be able to place reusable [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.") settings:

```
mkdir -p /etc/nginx/conf
vi /etc/nginx/conf/joomla.conf
```

Edit or create joomla.conf, you can find the latest **joomla.conf** documented version in one of my Gist at [https://gist.github.com/1620307](https://gist.github.com/1620307 "https://gist.github.com/1620307")<span class="wlWriterPreserve" id="preservead4ba8e30e9645faa36f6cca226ec110"> <script src="https://gist.github.com/1620307.js?file=joomla.conf"></script>

### Adding a new Joomla Site to nginx

Create required directory **anywhere** on your disk, here is an example with a domain [www.example.com](http://www.example.com)

```
mkdir -p /var/www/vhosts/example.com/httpdocs mkdir -p /var/www/vhosts/example.com/logs
```

Set the right permission to the user and group you have defined in nginx.conf

```
chown -fR www-data:www-data /var/www/vhosts/example.com/httpdocs
```

Copy the nginx template and adapt to your liking

```
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/example vi /etc/nginx/sites-available/example
```

Edit or create example, you can find the latest file **example** documented version in one of my Gist at [https://gist.github.com/1620307](https://gist.github.com/1620307 "https://gist.github.com/1620307")<span class="wlWriterPreserve" id="preserve74e5880472c94bc3907ad097449cdc27"> <script src="https://gist.github.com/1620307.js?file=www.example.com"></script>

this file include Joomla.conf to avoid duplicating nginx settings

## Activate the new domain

```
ln -s /etc/nginx/sites-available/example /etc/nginx/sites-enabled/example
service nginx restart
```