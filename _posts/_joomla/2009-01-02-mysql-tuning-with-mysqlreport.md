---

title: 'MYSQL tuning with mysqlreport'
date: '2009-01-02T23:08:11+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/01/mysql.logo_thumb.png
tags:
    - database
    - MySQL
---

[![mysql.logo](/assets/images/2009/01/mysql.logo_thumb.png)](/assets/images/2007/09/mysql.logo_.png) I found this interesting tool ([beside tuning-primer.sh](http://www.waltercedric.com/internet-www-mainmenu-54/348-mysql/1214-optimizing-mysql-with-tuning-primersh.html)) while trying to optimizing my server setting for #Joomla!

### mysqlreport

> mysqlreport makes an easy-to-read report of important [MySQL status values](http://dev.mysql.com/doc/refman/5.0/en/server-status-variables.html). Unlike SHOW STATUS which simply dumps over 100 values to screen in one long list, mysqlreport interprets, formats, and then nicely presents the values in report readable by humans. Numerous example reports are available at the [mysqlreport web page](http://hackmysql.com/mysqlreport).   
> The benefit of mysqlreport is that it allows you to very quickly see a wide array of performance indicators for your MySQL server which would otherwise need to be calculated by hand from all the various SHOW STATUS values. For example, the Index Read Ratio is an important value but it is not present in SHOW STATUS; it is an inferred value (the ratio of Key\_reads to Key\_read\_requests).

Grab it at <http://hackmysql.com/mysqlreport>

How to run it ([more options](http://hackmysql.com/mysqlreportdoc)), it require PERL to run.

\# ./mysqlreport –user xxxxx–password xxxxxx| more

Running mysqlreport against my host, gave the following results:

- very good table lock 0.02%
- very good read ratio 99.93%
- good query cache, but could be reduce to 40Mb to avoid wasting memory resource

if you need something more professional and can afford it, you can try Mysql Enterprise ([free for 30 days, enough to tune any small server bottleneck](http://www.mysql.com/trials/))

<font face="Fixedsys">MySQL 5.0.41-log uptime 4 10:56:4 Fri Jan 2 22:45:47 2009 

<font face="Fixedsys">\_\_ Key \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Buffer used 2.44M of 5.00M %Used: 48.75   
 Current 2.97M %Usage: 59.38   
Write hit 47.41%   
Read hit 99.93% 

<font face="Fixedsys">\_\_ Questions \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Total 4.07M 10.6/s   
 QC Hits 1.93M 5.0/s %Total: 47.35   
 DMS 973.13k 2.5/s 23.89   
 Com\_ 936.64k 2.4/s 23.00   
 COM\_QUIT 249.35k 0.6/s 6.12   
 -Unknown 14.78k 0.0/s 0.36   
Slow 5 s 123.77k 0.3/s 3.04 %DMS: 12.72 Log: ON   
DMS 973.13k 2.5/s 23.89   
 SELECT 589.04k 1.5/s 14.46 60.53   
 UPDATE 135.53k 0.4/s 3.33 13.93   
 INSERT 125.80k 0.3/s 3.09 12.93   
 DELETE 119.91k 0.3/s 2.94 12.32   
 REPLACE 2.85k 0.0/s 0.07 0.29   
Com\_ 936.64k 2.4/s 23.00   
 set\_option 411.63k 1.1/s 10.11   
 change\_db 230.65k 0.6/s 5.66   
 show\_tables 68.89k 0.2/s 1.69 

<font face="Fixedsys">\_\_ SELECT and Sort \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Scan 205.15k 0.5/s %SELECT: 34.83   
Range 27.27k 0.1/s 4.63   
Full join 13.73k 0.0/s 2.33   
Range check 8 0.0/s 0.00   
Full rng join 4.46k 0.0/s 0.76   
Sort scan 76.29k 0.2/s   
Sort range 110.20k 0.3/s   
Sort mrg pass 0 0/s 

<font face="Fixedsys">\_\_ Query Cache \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Memory usage 25.86M of 70.00M %Used: 36.94   
Block Fragmnt 16.52%

<font face="Fixedsys">Hits 1.93M 5.0/s   
Inserts 533.75k 1.4/s   
Insrt:Prune 13.29:1 1.3/s   
Hit:Insert 3.61:1 

<font face="Fixedsys">\_\_ Table Locks \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Waited 269 0.0/s %Total: 0.02   
Immediate 1.71M 4.5/s 

<font face="Fixedsys">\_\_ Tables \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Open 1482 of 2000 %Cache: 74.10   
Opened 44.50k 0.1/s 

<font face="Fixedsys">\_\_ Connections \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Max used 16 of 25 %Max: 64.00   
Total 250.45k 0.7/s 

<font face="Fixedsys">\_\_ Created Temp \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Disk table 65.75k 0.2/s   
Table 198.32k 0.5/s Size: 120.0M   
File 5 0.0/s 

<font face="Fixedsys">\_\_ Threads \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Running 1 of 3   
Cached 13 of 32 %Hit: 99.99   
Created 16 0.0/s   
Slow 0 0/s 

<font face="Fixedsys">\_\_ Aborted \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Clients 2.20k 0.0/s   
Connects 3.41k 0.0/s 

<font face="Fixedsys">\_\_ Bytes \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Sent 1.48G 3.8k/s   
Received 757.33M 2.0k/s 

<font face="Fixedsys">\_\_ InnoDB Buffer Pool \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Usage 7.98M of 8.00M %Used: 99.80   
Read hit 99.80%

<font face="Fixedsys">Pages   
 Free 1 %Total: 0.20   
 Data 510 99.61 %Drty: 0.00   
 Misc 1 0.20   
 Latched 0 0.00   
Reads 1.03M 2.7/s   
 From file 2.10k 0.0/s 0.20   
 Ahead Rnd 79 0.0/s   
 Ahead Sql 6 0.0/s   
Writes 45.01k 0.1/s   
Flushes 12.42k 0.0/s   
Wait Free 0 0/s 

<font face="Fixedsys">\_\_ InnoDB Lock \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Waits 0 0/s   
Current 0   
Time acquiring   
 Total 0 ms   
 Average 0 ms   
 Max 0 ms 

<font face="Fixedsys">\_\_ InnoDB Data, Pages, Rows \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
Data   
 Reads 2.30k 0.0/s   
 Writes 23.18k 0.1/s   
 fsync 14.15k 0.0/s   
 Pending   
 Reads 0   
 Writes 0   
 fsync 0 

<font face="Fixedsys">Pages   
 Created 5 0.0/s   
 Read 2.60k 0.0/s   
 Written 12.42k 0.0/s 

<font face="Fixedsys">Rows   
 Deleted 843 0.0/s   
 Inserted 2.07k 0.0/s   
 Read 107.49k 0.3/s   
 Updated 2.83k 0.0/s