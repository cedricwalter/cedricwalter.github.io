---
id: 6743
title: 'Mysql database backup in Linux Crontab'
date: '2011-06-04T09:24:39+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6743'
permalink: /development/mysql-database-backup-in-linux-crontab/
image: /wp-content/uploads/2005/10/200px-MySQL.png
tags:
    - database
    - files
    - MySQL
---

![](/assets/images/2005/10/200px-MySQL.png)

Here is the easiest way to run a daily backup of your database using linux crontab. Thanks to our everyday increasing mailbox size (Thanks [Gmail](http://mail.google.com)) and their nature to be quite safe for saving document, let’s use them to store the full backup of all our [Mysql](http://www.mysql.com/) database!

# Requirements**

- Having a shell access to your linux box
- Creating a user with limited mysql rights: SELECT and LOCK\_TABLES is enough, For example a user **backup\_user** with a password **ChhdeqyqUzd75687fOnmYar**
- Installing **Mpack**: Tools for encoding/decoding MIME messages. Mpack and munpack are utilities for encoding and decoding (respectively) binary files in MIME (Multipurpose Internet Mail Extensions) format mail messages. For compatibility with older forms of transferring binary files, the munpack program can also decode messages in split-uuencoded format.

Edit your crontab

```
crontab -e 
```

and put inside **on one line** the following

```
0 1 * * * /usr/bin/mysqldump -ubackup_user –pChhdeqyqUzd75687fOnmYar yourdb |

 gzip > /database_`date +'%m-%d-%Y'`.sql.gz ; 

 mpack -s "Databases backup" 

 -c application/gzip /database_`date +'%m-%d-%Y'`.sql.gz <a href="mailto:email@gmail.com">email@gmail.com</a>
```

You can replace the word **yourdb** with your tablename or **–all-databases** to dump all database. With the above line a backup will be run at 1AM every day and sent in your mailbox.