---
id: 6523
title: 'Automatic refresh of Joomla! demo site the easy way'
date: '2011-02-01T11:35:18+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6523'

tags:
    - demo
    - joomla
---

[![joomla_logo](/assets/images/2011/02/joomla_logo_thumb.png "joomla_logo")](/assets/images/2011/02/joomla_logo.png)

These are the script I use to maintains all my 3 demo [Joomla!](http://www.joomla.org/) sites:

- <http://demo-joomla-1.0.waltercedric.com/>
- <http://demo-joomla-1.5.waltercedric.com/>
- <http://demo-joomla-1.6.waltercedric.com/>

These scripts increased security and are trying to standardized how to create, update and maintain #Joomla! demo site. Feel free to submit, send me ideas how to improve them or ask for help.

This project is hosted at <http://forge.joomla.org/gf/project/demosite/> under a GPL v3.0 license and the [latest documentation can be found in my WIKI](http://wiki.waltercedric.com/index.php?title=Demo_site_for_Joomla)

## Architecture

- 1 script (snapshotit.bat ) per Joomla! instance to create snapshots (files+ database) and save the result in a zip file.
- 1 generic scripts (renew.sh) that renew an instance of Joomla! (files+ database) and secure it at the same time

## Prerequisites

1. An access to a Linux bash on your server, ideally as root
2. The possibility to define new crontab entries

## Locally 

On your desktop or reference server, install preferably in xampp/htdocs as much version of Joomla! as needed. These directories are containing Joomla versions . In these versions you will be able to install, remove configure your extensions. I personally have them in XAMPP

```
demo-joomla-1.0/

demo-joomla-1.5/

demo-joomla-1.6/
```

In each of these Joomla! installation, copy this file snapshotit.bat inside and configure the variables accordingly. The file is well documented to not describe these variables here.

This small batch file is making a snapshot of all files and database and create a new file **demo-joomla-1.5.zip** for example.

### Consider while installing Joomla!

1. To not choose as a default for table name the prefix jos\_ but something longer and more random, something like gZ45dF\_ to mitigate SQL injection
2. Do not name your admin user admin, but choose something longer and more random, Fdhtz56df\_Gdte34 to reduce risk of brute forcing the administrator login/sql injection

On the server

Copy now this file **demo-joomla-1.5.zip** to your server, using FTP, SSH

Copy also renew.sh to your server, using FTP, SSH

## Setup crontab

Add to your crontab for each of your demo site the following big line, I renew demo site every 30 minutes

```
$ crontab -e
```

add this line

30 \* \* \* \* **locationOf\_renew.sh** **locationOf\_zip**  **locationof\_httpdocs dbuser dbpassword dbtablename unixuser unixgrp**

where

- **locationOf\_renew.sh** fully qualified path to renew.sh
- **locationOf\_zip** fully qualified path of zip file (containing Joomla! and .sql file)
- **locationof\_httpdocs** fully qualified path of the httpdocs directory where this zip file content will be extracted
- **dbuser** : database user that is used by Joomla!
- **dbpassword** : database user password that is used by Joomla!
- **dbtablename**: database schema name that is used by Joomla!
- **unixuser**: unix user that is supposed to own all files in httpdocs, for example cedric
- **unixgrp**: unix user that is supposed to own all files in httpdocs, for example psaserv

## Renew.sh

This script renew.sh is doing the following with the zip file

1. Delete all files in **locationof\_httpdocs** removing all potential security threat and settings changes by visitors of your demo site
2. Lock the demo site by adding an htaccess and htpasswd files temporary
3. Unzip all file in **demo-joomla-1.5.zip** to **locationof\_httpdocs**
4. Restore the database with the file **demo-joomla-1.5.sql **found in **demo-joomla-1.5.zip**
5. Change user and usergrp to the right one (**unixuser, **unixgrp****)
6. Change all files and directory to the minimum required set of permissions (555 for directory and 444 for files)
7. Make the cache directory of Joomla! read write for the owner **unixuser**
8. Delete the file **demo-joomla-1.5.sql** 
9. It remove potentially dangerous components from demo site, among others
    1. com\_media Removing the users the right to upload, alter or delete files
    2. com\_config Removing the users the right to change configuration
    3. com\_installer Removing the users the right to install extensions
    4. it remove installation or installation.old if present
10. Unlock the demo site by removing the htaccess and htpasswd files, and restoring the one from the zip files

All in all and thanks to this development, my 3 demo site are now online, update will be a lot easier and I will keep them more often up to date ![Smile](/assets/images/2011/02/wlEmoticon-smile.png)

## Joomla! 1.0 tricks

In Joomla! 1.0 configuration.php I use the following trick to not have any stage dependent values.

```
$mosConfig_absolute_path = dirname(__FILE__); $mosConfig_cachepath = dirname(__FILE__).'/cache';
```