---
id: 2674
title: 'corrupted mos_session table'
date: '2006-08-03T23:33:56+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2674'

tags:
    - HowTo
    - joomla
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2006/08/joomla_cms.png)

 10 minutes ago, I got a strange error message:

 DB function failed with error number 1016  
 Can’t open file: ‘mos\_session.MYI’. (errno: 145) SQL=SELECT session\_id FROM mos\_session WHERE session\_id=MD5(‘e20eafcf277b7bc0dd125357b4a1b223’)   
 SQL =   
 SELECT session\_id FROM mos\_session WHERE session\_id=MD5(‘e20eafcf277b7bc0dd125357b4a1b223’

I was not able to access the frontend or admin panel of my homepage. I tried to look in PHPMyAdmin the table mos\_session but was getting the same error message. The only solution was to recreate the table with the following code:

```
DROP TABLE IF EXISTS `mos_session`;

CREATE TABLE `mos_session` (

  `username` varchar(50) default '',

  `time` varchar(14) default '',

  `session_id` varchar(200) NOT NULL default '0',

  `guest` tinyint(4) default '1',

  `userid` int(11) default '0',

  `usertype` varchar(50) default '',

  `gid` tinyint(3) unsigned NOT NULL default '0',

  PRIMARY KEY  (`session_id`),

  KEY `whosonline` (`guest`,`usertype`)

) TYPE=MyISAM;
```

Why my table has crashed is still unknow but I am looking further in logs files…