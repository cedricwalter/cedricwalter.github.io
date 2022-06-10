---
id: 2438
title: 'Renew a Joomla Demo Site'
date: '2006-04-08T12:54:07+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2438'
permalink: /joomla/renew-a-joomla-demo-site/
tags:
    - HowTo
    - joomla
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2006/04/joomla_cms.png)

The demo site [<span style="font-style: italic;">demo.waltercedric.com](http://demo.waltercedric.com/) is automatically deleted (database and file system) and restored every 60 minutes to wipe the system clean for other new users.

login to [Administrator panel](http://demo.waltercedric.com/administrator/) is

| login | <span style="font-style: italic;">admin |
|---|---|
| password | <span style="font-style: italic;">admin |

 <span style="font-style: italic;">  
<span style="font-weight: bold;">How I’ve done it…  
   <span style="color: #009900;">green value have to been replace<span style="font-weight: bold;">

1\. Create all needed directories

<div style="margin-left: 40px;"><small style="font-weight: bold;">Ex for plesk</small>  
<small>\# mkdir /var/www/vhosts/waltercedric.com/private/db-demo-initial</small>  
<small>\# mkdir /var/www/vhosts/waltercedric.com/private/file-demo-initial</small><span style="font-weight: bold;">  
<span style="font-weight: bold;"><span style="font-weight: bold;">2. First make a INITIAL <span style="font-weight: bold;">backup from the database 

<div style="margin-left: 40px;">In the state you want it to be for your demosite with [mysqldump](http://dev.mysql.com/doc/refman/5.0/en/mysqldump.html):<span style="font-style: italic;">  
<span style="font-style: italic;"><div style="margin-left: 40px;"><small style="font-family: Courier New;">\# mysqldump -u \[</small><small style="font-family: Courier New;">DatabaseUsername\] -p \[DatabasePassword\] \[DatabaseName\] > /path/to/filename</small><small style="font-weight: bold;">Ex for plesk</small>

Files are store in private directory so only me can access them.<span style="font-style: italic;">  
<span style="font-style: italic;"><small>\# mysqldump -u<span style="color: #009900;">DatabaseUser -p<span style="color: #009900;">DatabasePassword DatabaseName > /var/www/vhosts/waltercedric.com/private/db-demo-initial/<span style="color: #009900;">DatabaseName.sql</small>  
<span style="font-weight: bold;">3. Then make an INITIAL backup of the file structure

<div style="margin-left: 40px;"><small>\# cp -pir <span style="color: #009900;">srcDirectoy <span style="color: #009900;">destinationDirectory</small><small style="font-weight: bold;">Ex for plesk</small>  
<small style="font-family: Courier New;">\# cp -prf /var/www/vhosts/waltercedric.com/subdomains/demo/httpdocs/\* /var/www/vhosts/waltercedric.com/private/file-demo-initial</small><span style="font-style: italic;">  
<span style="font-style: italic;"> <span style="font-style: italic;">  
<span style="font-weight: bold;">4. Then put everything in a CRONTAB

<div style="margin-left: 40px;">The purpose of this task is to restore file periodically, You can use<span style="font-weight: bold;"> [mysqqlimport](http://dev.mysql.com/doc/refman/5.0/en/mysqlimport.html) (but it didnt worked for Me), so I use the mysql command line  
If you want lets say: restore database every <span style="font-weight: bold; color: #ff0000;">1 hours, <span style="font-weight: bold; color: #006600;">ten past the hour, your crontab entry would look like this: <span style="font-style: italic;"><span style="font-weight: bold; color: #006600;">10 \*/<span style="font-weight: bold; color: #ff0000;">1<span style="font-style: italic;"> \* \* \* mysql -u\[username\] -p\[password\] \[databasename\] < \[/path/to/filename\]

If you want lets say: restore file every <span style="font-weight: bold; color: #ff0000;">1 hours, <span style="font-weight: bold; color: #000099;">twenty past the hour, your crontab entry would look like this:  
<span style="font-style: italic;"><span style="font-weight: bold; color: #000099;">20 \*/<span style="font-weight: bold; color: #ff0000;">1<span style="font-style: italic;"> \* \* \* cp -pir srcDirectoy destinationDirectory  
<span style="font-style: italic;">  
<span style="font-style: italic;"><small style="font-weight: bold;">Ex</small>  
<span style="font-style: italic;">5 \*/1 \* \* \* cp -prf /var/www/vhosts/waltercedric.com/private/file-demo-initial/\* /var/www/vhosts/waltercedric.com/subdomains/demo/httpdocs  
<span style="font-style: italic;">6 \*/1 \* \* \* mysql -uXXXX -pYYYYY demo < /var/www/vhosts/waltercedric.com/private/db-demo-initial/demo.sql  
<span style="font-style: italic;">

 <span style="font-style: italic;">