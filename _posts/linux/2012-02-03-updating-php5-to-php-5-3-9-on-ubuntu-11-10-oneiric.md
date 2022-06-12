---
id: 7476
title: 'Updating PHP5 to PHP 5.3.9 on Ubuntu 11.10 Oneiric'
date: '2012-02-03T22:08:39+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7476'

---

![](/assets/images/2008/08/ubuntu.png)

Thanks to Ondřej Surý, [maintainer for some Debian packages](http://qa.debian.org/developer.php?login=ondrej%40debian.org&comaint=yes]), you can have the latest PHP5 maintained by Debian PKG PHP Team in #Ubuntu Oneiric, Natty, Maverick and Lucid.

Currently it is the previous version 5.3.9, but that’s already a lot better than 5.3.6 (Official in #Ubuntu 11.10 Oneiric). I did contact Ondřej to ask him for updating the Personal Package Archive to 5.3.10.

Personal Package Archives (PPA) allow you to upload #Ubuntu source packages to be built and published as an apt repository by Launchpad.

Ondřej Surý’s Personal Package Archives (PPA) is located at <https://launchpad.net/~ondrej/+archive/php5>

Just run as root the following to use PHP 5.3.9

```bash
sudo add-apt-repository ppa:ondrej/php5
sudo apt-get update 
sudo apt-get upgrade
```

I did create an account at <https://launchpad.net/~cedric-walter> just in case I would like to build some packages for #Ubuntu.