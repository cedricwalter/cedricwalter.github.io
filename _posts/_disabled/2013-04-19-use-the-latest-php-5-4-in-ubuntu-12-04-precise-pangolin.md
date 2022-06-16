---

title: 'Use the latest PHP 5.4 in Ubuntu 12.04 Precise Pangolin'
date: '2013-04-19T17:56:10+02:00'
author: 'Cédric Walter'



---

![](/assets/images/2008/08/ubuntu.png)

> <abbr>11-Apr-2013 </abbr>The PHP development team announces the immediate availability of PHP 5.4.14 and PHP 5.3.24. These releases fix about 10 bugs aswell as upgrading the bundled PCRE library. All users of PHP are encouraged to upgrade to PHP 5.4.14.
> 
> For source downloads of PHP 5.4.14 and PHP 5.3.24 please visit our [downloads page](http://php.net/downloads.php), Windows binaries can be found on [windows.php.net/download/](http://windows.php.net/download/).
> 
> The list of changes are recorded in the [ChangeLog](http://php.net/ChangeLog-5.php).

<a>Thanks to Ondřej Surý,[maintainer for some Debian packages](http://qa.debian.org/developer.php?login=ondrej%40debian.org&comaint=yes]), you can have the latest PHP5 maintained by Debian PKG PHP Team in #Ubuntu Precise, Quantal , and Lucid.

Just run as root the following to use PHP 5.4.14

```
add-apt-repository ppa:ondrej/php5
```

If the above command is not available, install it using:

```
apt-get install python-software-properties
```

now

```
apt-get update apt-get upgrade apt-get dist-upgrade
```

Check that the dist-upgrade do not try to update more than needed. After some seconds you can check with

```
php –v
```

or

```
php –version
```

That you have the latest version

```
# php -v PHP 5.4.14-1~precise+1 (cli) (built: Apr 11 2013 17:09:50) Copyright (c) 1997-2013 The PHP Group Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies
```