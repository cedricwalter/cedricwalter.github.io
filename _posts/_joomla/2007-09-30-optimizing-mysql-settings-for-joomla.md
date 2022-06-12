---
id: 3062
title: 'Optimizing MySQL settings for Joomla'
date: '2007-09-30T20:10:40+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3062'

tags:
    - database
    - MySQL
---

 I publish here some of my server settings in the hope that it will also help others…

 **Server Setup**

 AMD64 1 Gb RAM, #Linux OSS 10.0, 7 #Joomla instances (one being waltercedric.com with 250’000 unique visitors per months), 1 simple machine forums, 3 gallery2 install

 **All MySQL tables are myISAM** (table locking instead of row loacking in innodb, myIsam make sense as ther is more read then insert)

 \# vi in /etc/my.cnf

 Below the diff command between a standard MySQL install

 \# diff my.cnf my-beforeOptimizations.cnf  
```
 < key\_buffer = 50M  
 —  
 > key\_buffer = 16M  
 32,33c32,33  
 < table\_cache = 1500  
 < sort\_buffer\_size = 4M   
 —  
 > table\_cache = 64  
 > sort\_buffer\_size = 512K  
 35,46c35,37  
 < read\_buffer\_size = 4M  
 < read\_rnd\_buffer\_size = 1024K  
 < myisam\_sort\_buffer\_size = 64M  
 < join\_buffer\_size = 4M  
 < thread\_cache\_size = 128  
 < wait\_timeout = 14400  
 < connect\_timeout = 10  
 < max\_connect\_errors = 10  
 < query\_cache\_limit = 2M  
 < query\_cache\_size = 128M  
 < query\_cache\_type = 1  
 < thread\_concurrency=4  
 —  
 > read\_buffer\_size = 256K  
 > read\_rnd\_buffer\_size = 512K  
 > myisam\_sort\_buffer\_size = 8M  
 163,166c154,157  
 < key\_buffer = 64M  
 < sort\_buffer = 64M  
 < read\_buffer = 16M  
 < write\_buffer = 16M  
 —  
 > key\_buffer = 20M  
 > sort\_buffer\_size = 20M  
 > read\_buffer = 2M  
 > write\_buffer = 2M
```