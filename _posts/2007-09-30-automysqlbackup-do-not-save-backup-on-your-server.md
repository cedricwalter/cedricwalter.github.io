---
id: 3064
title: 'AutoMySQLBackup, do not save backup on your server&#8230;'
date: '2007-09-30T20:34:15+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3064'
permalink: /development/automysqlbackup-do-not-save-backup-on-your-server/
tags:
    - database
    - MySQL
---

 **One of the most important rule is to always backup your data with multiple tools on different medium, just in case of.**

 Just imagine 5 minutes that you lose everything, what you have done in the last 3 months on your homepage..ok still not crying? you loose hundred of hours of work, nightly debugging, customizations, hours of Gimp/Photoshop, lengthy and good written articles…

 With #Joomla! and now with nearly all CMS, the most important thing to backup is the database. I recommend a daily backup at least!

 And now my solution: <span style="font-size: 12pt; color: #000000"> [AutoMySQLBackup](http://sourceforge.net/projects/automysqlbackup/)

 A script to take daily, weekly and monthly backups of your MySQL databases using mysqldump.

 **Features**

- Backup mutiple databases
- Single backup file or to a seperate file for each DB
- Compress backup files
- Backup remote servers
- E-mail logs

- Backup mutiple MySQL databases with one script. (Now able to backup ALL databases on a server easily. no longer need to specify each database seperately)
- Backup all databases to a single backup file or to a seperate directory and file for each database.
- Automatically compress the backup files to save disk space using either gzip or bzip2 compression.
- Can backup remote MySQL servers to a central server.
- Runs automatically using cron or can be run manually.
- Can e-mail the backup log to any specified e-mail address instead of "root". (Great for hosted websites and databases).
- Can email the compressed database backup files to the specified email address.
- Can specify maximun size backup to email.
- Can be set to run PRE and POST backup commands.
- Choose which day of the week to run weekly backups.

 Just download the file, save it somewhere, and configure <span style="font-family: courier new,courier">automysqlbackup with your editor of choice (25 first line of file). To test if everything work, just run the file.

 **Note**:

 <span style="font-family: courier new,courier">automysqlbackup require Mutt

 <span style="font-family: courier new,courier">\# yast2 -i mutt  
 Mutt (<http://www.mutt.org>) is a small but very powerful text-based mail client for Unix operating systems. It is used by the script automysqlbackup (sourceforge.net/projects/automysqlbackup/) to cut mail in part (automysqlbackup do ot use mail in that case)

 <span style="font-family: courier new,courier">automysqlbackup send daily email with database content, so data are not on host in case of crash or on ftp. You may create 2 emails account and forward the result of the backup to 2 different free email hoster (Gmail and Hotmail for example)