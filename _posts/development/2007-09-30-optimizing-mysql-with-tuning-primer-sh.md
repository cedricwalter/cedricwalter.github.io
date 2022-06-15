---
id: 3066
title: 'Optimizing mysql with tuning-primer.sh'
date: '2007-09-30T20:48:40+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2007/09/mysql.logo_.png
tags:
    - database
    - MySQL
---

![](/assets/images/2007/09/mysql.logo_.png)

 Digging into mySQL settings can be time consuming, like with any other component. Most of the time, and just by changing a few settings, you can expect a performance increase. The problem is to change what, and to which value. This is where tuning-primer.sh help you:

 Get this script, <http://forge.mysql.com/projects/view.php?id=44> upload it, unzip it, and install it in your /etc folder. Then run it from the command line by entering ./path-to-file/tuning-primer.sh

 MySQL Server must run a few days or weeks, or it wont be be safe to follow these recommendations.

 To find out more information on how each of these runtime variables effects performance visit:  
 <http://dev.mysql.com/doc/refman/5.0/en/server-system-variables.html>

 Here is an example of  tuning-primer.sh output

 **SLOW QUERIES**  
 Current long\_query\_time = 5 sec.  
 You have 2856 out of 4725688 that take longer than 5 sec. to complete  
 <span style="color: #008000">The slow query log is enabled.  
 <span style="color: #008000">Your long\_query\_time seems to be fine  
  **WORKER THREADS**  
 Current thread\_cache\_size = 128  
 Current threads\_cached = 55  
 Current threads\_per\_sec = 0  
 Historic threads\_per\_sec = 0  
 <span style="color: #008000">Your thread\_cache\_size is fine  
  **MAX CONNECTIONS**  
 Current max\_connections = 100  
 Current threads\_connected = 15  
 Historic max\_used\_connections = 55  
 The number of used connections is 55% of the configured maximum.  
 <span style="color: #008000">Your max\_connections variable seems to be fine.

 **MEMORY USAGE**  
 Max Memory Ever Allocated : 305 M  
 Configured Max Per-thread Buffers : 1017 M  
 Configured Max Global Buffers : 143 M  
 Configured Max Memory Limit : 1 G  
 Total System Memory : 2.99 G  
 <span style="color: #008000">Max memory limit seem to be within acceptable norms

 **KEY BUFFER**  
 Current MyISAM index space = 4 M  
 Current key\_buffer\_size = 5 M  
 Key cache miss rate is 1 : 3740  
 Key buffer fill ratio = 35.00 %  
 Your key\_buffer\_size seems to be too high.  
 Perhaps you can use these resources elsewhere

 **QUERY CACHE**  
 Query cache is enabled  
 Current query\_cache\_size = 128 M  
 Current query\_cache\_used = 27 M  
 Current query\_cach\_limit = 2 M  
 Current Query cache fill ratio = 21.13 %  
 Your query\_cache\_size seems to be too high.  
 Perhaps you can use these resources elsewhere  
 MySQL won’t cache query results that are larger than query\_cache\_limit in size

 **SORT OPERATIONS**  
 Current sort\_buffer\_size = 4 M  
 Current record/read\_rnd\_buffer\_size = 1020 K  
 <span style="color: #008000">Sort buffer seems to be fine

 **JOINS**  
 Current join\_buffer\_size = 1.00 M  
 You have had 7065 queries where a join could not use an index properly  
 You should enable "log-queries-not-using-indexes"  
 Then look for non indexed joins in the slow query log.  
 If you are unable to optimize your queries you may want to increase your  
 join\_buffer\_size to accommodate larger joins in one pass.

 Note! This script will still suggest raising the join\_buffer\_size when  
 ANY joins not using indexes are found.