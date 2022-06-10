---
id: 4580
title: 'Debian Lenny how to'
date: '2009-08-27T18:07:39+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4580'
permalink: /linux/debian-lenny-how-to/
image: /wp-content/uploads/2009/08/offVertColorphil2.eps_.jpg
tags:
    - free
    - ftp
    - main
    - non
    - src
---

![offVertColor-phil2.eps](/assets/images/2009/08/offVertColorphil2.eps_.jpg "offVertColor-phil2.eps") Short description of how to accomplish some specific task in [Debian Lenny](http://www.debian.org/).

- How to install Sun java 1.6 on Debian Lenny
- How to install Tomcat 6.x on Debian Lenny
- How to install MySQL on Debian Lenny

### How to install Sun java 1.6 on Debian Lenny

And not the [OpenJDK](http://openjdk.java.net/), as sometimes some applications do not work without the SUN JDK

Edit APT sources list

> ``\# `vi /etc/apt/sources.list`

The original Sun Java 2 is available in the ‘non-free’ section of the [Debian](http://www.debian.org/) repositories. To enable this section first add the non-free repository to the apt sources file – the /etc/apt/sources.list should look like, – important parts are in bold:

> deb <http://ftp.ch.debian.org/debian/> lenny main **non-free** deb-src <http://ftp.ch.debian.org/debian/> lenny main **non-free** deb <http://security.debian.org> lenny/updates main

Update the list of sources

> # `apt-get update`

Install java

> # apt-get install sun-java6-bin

Just follow and select <yes></yes> all the time

### How to install Tomcat 6 on Debian Lenny

Create new file

> # vi /etc/apt/sources.list.d/squeeze.list

and put inside

> # Repository for Squeeze, to get Tomcat6   
> deb <http://ftp.ch.debian.org/debian/> squeeze main contrib non-free   
> deb-src <http://ftp.ch.debian.org/debian/>  squeeze main contrib non-free

Create new file

> # vi /etc/apt/preferences

And put inside

> Package: \*   
> Pin: release o=Debian,a=stable   
> Pin-Priority: 990   
> Package: \*   
> Pin: release o=Debian,a=testing   
> Pin-Priority: 500   
> Package: tomcat6,tomcat6-admin,tomcat6-common,libtomcat6-java,libservlet2.5-java   
> Pin: release o=Debian,a=testing   
> Pin-Priority: 990

Update sources

> # apt-get update

Upgrade

> # apt-get upgrade

To locate the correct package name, search for it

> # apt-cache search tomcat

Found

> tomcat6

Install

> # apt-get install -t testing tomcat6

You may want also to install the tomcat manager

> # apt-get install -t testing tomcat6-admin

Create new users/roles for tomcat manager

> # vi /etc/tomcat6/tomcat-users.xml

NOTA: Webapp are located in

> /var/lib/tomcat6/webapp

### How to install MYSQL on Debian Lenny

Luckily MYSQL 5.0 is available in the default source list of APT.

> # apt-cache search mysql   
> \# apt-get install mysql-server-5.0

Open a mysql prompt

Grant access to root from any host, this is insecure for production machine but in case of continuous build machine, development this is sometimes very useful.

Let root connect not only from localhost by running

> # mysql –u root –p   
> mysql&gt; use mysql;   
> mysql&gt; update user set host = ‘%’ where user = ‘root’ and host=’127.0.0.1′   
> mysql&gt; flush privileges;

Bad written code (DAO) will sometimes forces you to start MYSQL using insensitive casing table. In windows it will always work as the operating system do not make any difference between lower and upper case. In Linux, either you change your DAO’s or if you can’t, use this kind of trick:

Case insensitive table in MYSQL

> # vi /etc/mysql/conf.d/lower\_case\_table\_names.cnf

Put inside file

> [mysqld\]   
> lower\_case\_table\_names = 1

Restart mysql

> # /etc/init.d/mysql restart