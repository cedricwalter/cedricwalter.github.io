---

title: 'Failed opening required PHPUnit/TextUI/TestRunner.php in Maven For PHP'
date: '2010-02-08T21:07:09+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - box
    - built
    - check
    - configuration
    - custom
    - debug
    - deployed
    - directory
    - eclipse
    - first
    - good
    - google
    - group
    - having
    - linux
    - maven
    - php
---

This issue has turn me upside down a long time. In fact in the official Google Group [http://groups.google.de/group/maven-for-php/](http://groups.google.de/group/maven-for-php/ "http://groups.google.de/group/maven-for-php/") I was not the only one to have this issue.

I did try the following, and it is always good to check first

- Checking PHP version,
- Starting #Maven with -X for having more debug information
- Testing it in [Eclipse](http://www.eclipse.org/) + [M2Eclipse](http://m2eclipse.sonatype.org/) on windows, was working there,
- Comparing calculated PHP include path on Windows and #Linux: they were identical in this case

Only my #Linux box was not working. . .([http://teamcity.waltercedric.com](http://teamcity.waltercedric.com "http://teamcity.waltercedric.com"))

After that I did materialize the eclipse project of #maven-php-plugin and even built a custom version that I’ve deployed without any effort to my Artifactory (<http://maven.waltercedric.com>)

# And what is the solution?**

it my server configuration and paranoia 🙂

open your php.ini, ideally the right one, don’t put your server at risks: You may have many under #Linux, especially if you use plesk or cpanel

- cli at /etc/php5/cli/php.ini
- apache2, /etc/php5/apache2/php.ini
- fastcgi at /etc/php5/fastcgi/php.ini

location most of the time

```
/etc/php5/cli/php.ini
```

and add the directory where your build server make a checkout…

```
; open_basedir, if set, limits all file operations to the defined directory 
; and below.  This directive makes most sense if used in a per-directory 
; or per-virtualhost web server configuration file. This directive is 
; *NOT* affected by whether Safe Mode is turned On or Off. 
open_basedir = /www/vhosts:/tmp:/xxxx/yyyy/ 
```

Next step is to put #Joomla! 1.6 and all their PHPUnit tests a run along with Selenium. May also need to patch #Maven for PHP to better support Tests reporting like Surefire.