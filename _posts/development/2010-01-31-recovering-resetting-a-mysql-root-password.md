---
id: 4970
title: 'Recovering/Resetting a MySQL root password'
date: '2010-01-31T21:09:50+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4970'

header:
  teaser: /assets/images/2010/01/logoMysql_3.gif
tags:
    - database
    - MySQL
    - server
---

![logoMysql](/assets/images/2010/01/logoMysql_3.gif "logoMysql") In this small post, I’ll show you how to reset the MySQL password in case you lost it.

You’ll need at least the root access of the machine where MySQL run.

## Reset the MySQL root password

Resetting the root password of a MySQL database in case you lost it, is really easy.

\# /etc/init.d/mysql stop

Now start the database in the background, via the <tt>mysqld\_safe</tt> command. Start MySQL with a flag to tell it to ignore any username/password restrictions which might be in place.

\# /usr/bin/mysqld\_safe –skip-grant-tables &amp;   
\[1\] 8705   
Starting mysqld daemon with databases from /var/lib/mysql mysqld\_safe   
\[8345\]: started

Now that the server is running, you can connect without any password

\# mysql –user=root mysql  
 Enter password:   
mysql> update user set Password=PASSWORD(‘**newpassword**‘) WHERE User=’root’;   
 Query OK, 2 rows affected (0.04 sec)   
 Rows matched: 2 Changed: 2 Warnings: 0   
mysql> flush privileges;   
 Query OK, 0 rows affected (0.02 sec)   
mysql> exit Bye

Stop the server,

\# fg

hit CTRL\_C to kill the process and start normally MySQL

\# /etc/init.d/mysql start   
 Starting MySQL database server: mysqld.   
 Checking for corrupt, not cleanly closed and upgrade needing tables..

You should now be able to connect to your server using the password

\# mysql –user=root –pass **newpassword**   
 Enter password:

## Reset the MySQL root password

If you’ve got access to the root account already, because you know the password, you can change it easily:

\# mysql –user=root –pass mysqlpassword   
 Enter password:   
mysql> update user set Password=PASSWORD(‘**newpassword**‘) WHERE User=’root’;   
 Query OK, 2 rows affected (0.04 sec)   
 Rows matched: 2 Changed: 2 Warnings: 0   
mysql> flush privileges;   
 Query OK, 0 rows affected (0.02 sec)   
mysql> exit Bye