---

title: 'Use the latest nginx in Ubuntu 12.04 Precise Pangolin'
date: '2013-04-19T20:56:17+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/Nginx-logo.png
tags:
    - HowTo
    - linux
    - nginx
    - shell
    - ubuntu
    - webserver
---

Official version of [nginx](http://nginx.org/) for #Ubuntu Precise is 1.1.19 but the latest available stable version is 1.2.8 ([Changes](http://nginx.org/en/CHANGES-1.2)), In this post I will present you how to update to the latest available version.

<a>Thanks to Ondřej Surý,[maintainer for some Debian packages](http://qa.debian.org/developer.php?login=ondrej%40debian.org&comaint=yes]), you can have the latest PHP5 maintained by Debian PKG PHP Team in #Ubuntu Precise, Quantal , and Lucid.

Just run as root the following to use [nginx](http://nginx.org/)

```
add-apt-repository ppa:ondrej/nginx
apt-get update apt-get upgrade apt-get dist-upgrade
```

You can check that everything went fine

```
dpkg -l | grep nginx
```

```
ii nginx        1.2.8-1~precise+1 
ii nginx-common 1.2.8-1~precise+1
ii nginx-full   1.2.8-1~precise+1
```

```
<a href="http://nginx.org/en/CHANGES-1.2" rel="noopener noreferrer" target="_blank">Changes with nginx 1.2</a>
```

More at <http://wiki.nginx.org/Install>