---
id: 6690
title: 'How to install the latest PHP version for Ubuntu'
date: '2011-05-19T19:44:33+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6690'
permalink: /development/how-to-install-the-latest-php-version-for-ubuntu/
image: /wp-content/uploads/2011/05/linux.png
tags:
    - create
    - install
    - linux
    - php
---

Ubuntu 10.10 (Maverick) is offering as for today a relative old version PHP 5.3.3, if you want to have a better version, you’ll have to trust an unofficial APT repository. Here is How

Thanks to the NGINX team, you can find nearly the latest version of PHP online at <https://launchpad.net/~nginx/+archive/php5>

Create a new file php5-ppa.list

```
vi /etc/apt/sources.list.d/php5-ppa.list
```

and depending on the version of your ubuntu, you can replace the word maverick with the oldest oneiric, natty, or the latest lucid

```
deb http://ppa.launchpad.net/nginx/php5/ubuntu maverick main deb-src http://ppa.launchpad.net/nginx/php5/ubuntu maverick main
```

run an update, to get the latest PHP version

```
apt-get update 
apt-get dist-upgrade
```

Alternatively you can still compile PHP on your own..