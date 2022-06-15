---
id: 7786
title: 'Ubuntu 12.04 update nginx to the latest version'
date: '2012-08-17T09:13:48+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/Nginx-logo.png
tags:
    - linux
    - nginx
---

Official version of [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.") for #Ubuntu Precise is 1.1.19 but the latest available stable version is 1.2.2 ([Changes](http://nginx.org/en/CHANGES-1.2)), In this post I will present you how to update to the latest available version.

```
vi /etc/apt/sources.list
```

and add depending on your #Ubuntu version either

For [Ubuntu 10.04 Lucid](http://en.wikipedia.org/wiki/List_of_Ubuntu_releases):

```
deb  http://nginx.org/packages/ubuntu/ lucid nginx deb-src 
deb http://nginx.org/packages/ubuntu/  lucid nginx
```

For [Ubuntu 12.04 Precise](http://en.wikipedia.org/wiki/List_of_Ubuntu_releases):

```
deb http://nginx.org/packages/ubuntu/ precise nginx deb-src http://nginx.org/packages/ubuntu/ precise nginx
```

Now you can run

```
apt-get update
```

When using the public [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.") repository for #Ubuntu, you’ll get this error

```
W: GPG error: http://nginx.org lucid Release: The following signatures 
couldn't be verified because the public key is not available: NO_PUBKEY ABF5BD827BD9BF62
```

First of all this is only warning and you can ignore it, if you know what are you doing and in case you prefer to add public key, used for signing packages and repository, just run:

```
gpg -a --export 7BD9BF62 |  sudo apt-key add -
```

or

```
wget http://nginx.org/packages/keys/nginx_signing.key cat nginx_signing.key | sudo apt-key add -<
apt update
apt install nginx
```

you may still get this kind of error:

```
dpkg: error processing /var/cache/apt/archives/nginx_1.2.2-1~precise_amd64.deb (--unpack):  trying to overwrite '/etc/logrotate.d/nginx', which is also in package nginx-common 1.1.19-1 dpkg-deb: error: subprocess paste was killed by signal (Broken pipe) Errors were encountered while processing:  /var/cache/apt/archives/nginx_1.2.2-1~precise_amd64.deb
```

just remove nginx-common and retry

```
apt-get remove nginx-common 
```

More at <http://wiki.nginx.org/Install>