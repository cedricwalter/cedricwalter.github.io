---
id: 4322
title: 'Installing Subversion on OpenSuse and Plesk 9'
date: '2008-03-14T16:02:55+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4322'
permalink: /joomla/installing-subversion-on-opensuse-and-plesk-9/
image: /wp-content/uploads/2009/05/subversion_logo384x332.png
tags:
    - apache
    - browser
    - code
    - conf
    - configuration
    - continuous
    - create
    - Design
    - development
    - directly
    - directory
    - distributed
    - documentation
    - HowTo
    - linux
    - subversion
    - tutorial
---

![subversion_logo-384x332](/assets/images/2009/05/subversion_logo384x332.png "subversion_logo-384x332") ![geeko](/assets/images/2009/05/geeko.jpg "geeko") ![plesk.logo](/assets/images/2009/05/plesk.logo_.jpg "plesk.logo") **Subversion** (**SVN**) is an open source version control system. It allows users to keep track of changes made over time to any type of electronic data. Typical uses are versioning source code, web pages or design documents.

I now host my own private subversion at <http://svn.waltercedric.com>

A required step to be able to build some small project and finish the prototype of Continuous build for [Joomla](http://www.joomla.org)!

## How to install Subversion SVN on Plesk 9

Requirement: having a root access to your server.

### Install Subversion

\# zypper se subversion   
Read installed Package…

S | Name | Zusammenfassung | Type   
–+——————-+—————————————————————-+——  
 | subversion | A Concurrent Versioning system similar to but better than CVS | Package  
 | subversion-devel | Development package for Subversion developers | Package  
 | subversion-doc | Documentation files for Subversion | Package  
 | subversion-perl | Allows Perl scripts to directly use Subversion repositories. | Package  
 | subversion-python | Allows Python scripts to directly use Subversion repositories. | Package  
 | subversion-server | Apache server module for Subversion server | Package  
 | subversion-tools | Tools for Subversion | Package

And install the required package, at least subversion and subversion-server

\# zypper in subversion  
\# zypper in subversion-server

Add a new group and user for more security (one user for every daemon with limited or no rights to do something else is a good Linux guideline!)

\# groupadd svn  
\# useradd -d /srv/svn -s /bin/false svn

Create the root of Subversion

\# mkdir /srv/svn/  
\# mkdir /srv/svn/repos

### Prepare Plesk 9

Now the most easiest part, I create a new sub domain using [Plesk](http://www.parallels.com/eu/products/plesk/) adminitrator panel

<http://svn.waltercedric.com>

I move the default configuration file from /etc/apache2/conf.d/ to the sub domain conf directory

\# mv /etc/apache2/conf.d/subversion.conf /srv/www/vhosts/waltercedric.com/subdomains/svn/conf/

\# mv subversion.conf vhost.conf

And change some settings

\# vi vhost.conf

> ServerName svn.waltercedric.com  
> ErrorLog /var/log/apache2/svn.example.com-error\_log  
> TransferLog /var/log/apache2/svn.example.com-access\_log  
> \#  
> \# Do not set DocumentRoot. It is not needed here and just causes trouble.  
> \#  
> \# Map the error documents back to their defaults.  
> \# Otherwise mod\_dav\_svn tries to find a “error” repository.  
> \#  
> ErrorDocument 400 default  
> ErrorDocument 401 default  
> ErrorDocument 403 default  
> ErrorDocument 404 default  
> ErrorDocument 405 default  
> ErrorDocument 408 default  
> ErrorDocument 410 default  
> ErrorDocument 411 default  
> ErrorDocument 412 default  
> ErrorDocument 413 default  
> ErrorDocument 414 default  
> ErrorDocument 415 default  
> ErrorDocument 500 default  
> ErrorDocument 501 default  
> ErrorDocument 502 default  
> ErrorDocument 503 default   
>  &lt;Location /&gt;  
>  DAV svn  
>  SVNParentPath /srv/svn/repos  
>  SVNListParentPath on  
>  AuthType Basic  
>  AuthName “subversion repository”  
>  AuthBasicProvider file  
>  AuthUserFile /srv/svn/auth/svn.htpasswd  
>  SetOutputFilter DEFLATE  
>  &lt;LimitExcept GET PROPFIND OPTIONS REPORT&gt;  
>  Require valid-user  
>  &lt;/LimitExcept&gt;  
>  &lt;/Location&gt; 
> 
> &lt;/IfModule&gt;

To reread and include overridden vhost.conf, and tell [Plesk](http://www.parallels.com/eu/products/plesk/) that you have create new vhost.conf, run at least once   
\# /usr/local/psa/admin/sbin/websrvmng

### Prepare Apache

I install the DAV ([Web-based Distributed Authoring and Versioning](http://httpd.apache.org/docs/2.0/mod/mod_dav.html)) modules by running

\# a2enmod dav  
\# a2enmod dav\_svn

Which is the same as editing vi /etc/sysconfig/apache2 and adding dav and dav\_svn to the list of loaded module.

### Preparing the file system

Set up the password file:

```
# mkdir /srv/svn/auth # vi /srv/svn/auth/svn.htpasswd
```

Change the group so that ONLY Apache can access it

```
# chown wwwrun:www /srv/svn/auth/svn.htpasswd
```

Tighten all permissions

```
# chmod 640 /srv/svn/auth/svn.htpasswd
```

Tighten the repository

\# chown -R wwwrun:www /srv/svn/repos/

\# find /srv/svn/repos/ -type d -exec chmod 755 {} \\;

\# find /srv/svn/repos/ -type f -exec chmod 644 {} \\;

### Add SVN Users

\# htpasswd2 /srv/svn/auth/svn.htpasswd xxxx.yyyy

and enter the password twice.

### Create some root repositories

\# svnadmin create /srv/svn/repos/joomla

I am root, so I give way to less permissions to the new repository for Apache, so I give rights back to Apache.

\# chown –R wwwrun:www /srv/svn/repos/joomla

### Restart Apache / Subversion

\# rcapache2 restart

Start the daemon

\# /etc/init.d/svnserve start

Point your browser to <http://svn.waltercedric.com>

![svn.waltercedric.com.result](/assets/images/2009/05/svn.waltercedric.com_.result.png "svn.waltercedric.com.result")

#### Additionnal Help

- <http://en.opensuse.org/Subversion>
- [http://en.opensuse.org/Setting\_up\_a\_Subversion\_server\_using\_Apache2](http://en.opensuse.org/Setting_up_a_Subversion_server_using_Apache2)