---
id: 4938
title: 'How to Solve a Problem with Joomla! jos_session'
date: '2010-01-10T10:08:54+01:00'
author: 'Cédric Walter'



tags:
    - joomla
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2010/01/joomla_cms.png)

![mysql](/assets/images/2010/01/mysql_3_dee1089570392ab5dcd4147b7c9c5ad7.jpg "mysql")

I was not seeing this error since at least 3 years:

> DB function failed with error number 1016
> 
> Can’t open file: ‘jos\_session.MYI’ (errno: 145) SQL=INSERT INTO `jos\_session`   
> ( `session\_id`,`time`,`username`,`gid`,`guest`,`client\_id` )   
> VALUES ( ‘4bc998b10d92bf4107976d0edacdbb26′,’1246725653′,”,’0′,’1′,’0’ )

It happen sometimes and cause are unknown. While it is quite disturbing to have no more access to #Joomla! frontend or backend, the fix is quite easy. You must repair this table jos\_session, If you have access to

### PhpMyAdmin

Require an access to the Plesk/CPA panel.

Go to your #Joomla database, select the table jos\_session (tick the checkbox) and choose “Repair table” from the drop-down you find at the bottom of the list of tables.

### Using PHP

Maybe the most easiest for non techies people

I found this useful script [http://www.cafewebmaster.com/repair-all-mysql-databases-tables-php](http://www.cafewebmaster.com/repair-all-mysql-databases-tables-php "http://www.cafewebmaster.com/repair-all-mysql-databases-tables-php"), upload it at root of your host (in /httpdocs) under repair.php for example and run it, you’ll see the following:

![repair.table.in.php](/assets/images/2010/01/repair.table_.in_.php_3.png "repair.table.in.php")

Tick repair, provide your login and password for database,

![repair.table.in.php2](/assets/images/2010/01/repair.table_.in_.php2_3.png "repair.table.in.php2")

# Remove the scripts after use, or add a die(‘not for use, edit script first’); at the top of it just in case it may be use to inject something in your database!**

### Shell access

For the most advanced of us, which understand Unix and have shell access

\# mysql –udblogin -p

mysql> use **joom**;

```
mysql> REPAIR TABLE jos_session;
```

```
+-------------------------+--------+----------+------------------------------------+

| Table                   | Op     | Msg_type | Msg_text                           |

+-------------------------+--------+----------+------------------------------------+

| joom.jos_session        | repair | warning  | Number of rows changed from 0 to 2 |

| joom.jos_session        | repair | status   | OK                                 |

+-------------------------+--------+----------+------------------------------------+
```

### Finding #Joomla! login and password

These informations can be found in httpdocs/configuration.php under $user and $password as seen below

> ..
> 
> **var $user = ‘hkuin47Gdfver’;**   
> **var $db = ‘joom’;   
> **var $dbprefix = ‘dfrtCsdef\_’;   
> var $mailer = ‘mail’;   
> var $fromname = ‘Happpp’;   
> var $sendmail = ‘/usr/sbin/sendmail’;   
> var $smtpauth = ‘0’;   
> var $smtpsecure = ‘none’;   
> var $smtpport = ’25’;   
> var $smtpuser = ”;   
> var $smtppass = ”;   
> var $smtphost = ‘localhost’;   
> var $MetaAuthor = ‘1’;   
> var $MetaTitle = ‘1’;   
> var $lifetime = ’15’;   
> var $session\_handler = ‘database’;   
> **var $password = afedfhrr546fdhcfcv;**
> 
>  ..

## And if the repair failed?

Run the following sql to drop the table and make it new. Copy it into the PhpMyAdmin SQL field.

DROP table if exist `jos\_session`

CREATE TABLE `jos\_session` (   
 `username` varchar(150) default ”,   
 `time` varchar(14) default ”,   
 `session\_id` varchar(200) NOT NULL default ‘0’,   
 `guest` tinyint(4) default ‘1’,   
 `userid` int(11) default ‘0’,   
 `usertype` varchar(50) default ”,   
 `gid` tinyint(3) unsigned NOT NULL default ‘0’,   
 `client\_id` tinyint(3) unsigned NOT NULL default ‘0’,   
 `data` longtext,   
 PRIMARY KEY (`session\_id`(64)),   
 KEY `whosonline` (`guest`,`usertype`),   
 KEY `userid` (`userid`),   
 KEY `time` (`time`)   
) TYPE=MyISAM CHARACTER SET `utf8`;