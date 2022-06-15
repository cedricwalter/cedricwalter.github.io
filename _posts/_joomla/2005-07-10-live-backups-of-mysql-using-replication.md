---
id: 1900
title: 'Live Backups of MySQL Using Replication'
date: '2005-07-10T11:49:35+02:00'
author: 'Cédric Walter'



tags:
- difficulties
- enterprise
- interesting
---

I am using [Mambo](http://www.mamboserver.com) now since august 2003 together with
a [mysql database](http://www.mysql.com/) (the most popular open source database). Right now I am doing backup on a
weekly basis manually using the plesk panel of my provider. I found this article interesting even if it does not resolve
my problem of backup. As soon as I find something interesting, I will publish it (plesk script, CGI tool …). Back to the
article, it is in fact more an example of database replication for an enterprise:

*One of the difficulties with a large and active MySQL database is making clean backups without having to bring the
server down. Otherwise, a backup may slow down the system and there may be inconsistency with data, since related tables
may be changed while another is being backed up. Taking the server down will ensure consistency of data, but it means
interruption of service to users. Sometimes this is necessary and unavoidable, but daily server outages for backing up
data may be unacceptable. A simple alternative method to ensure reliable backups without having to shut down the server
daily is to set up replication for MySQL.* Read more [HERE](http://www.onlamp.com/pub/a/onlamp/2005/06/16/MySQLian.html)
at [onLamp.com the open source web plattform](http://www.onlamp.com/) of O’Reilly