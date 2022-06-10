---
id: 3062
title: 'Optimizing MySQL settings for Joomla'
date: '2007-09-30T20:10:40+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3062'
permalink: /development/optimizing-mysql-settings-for-joomla/
tags:
    - database
    - MySQL
---

 I publish here some of my server settings in the hope that it will also help others…

 **Server Setup**

 AMD64 1 Gb RAM, #Linux OSS 10.0, 7 #Joomla instances (one being waltercedric.com with 250’000 unique visitors per months), 1 simple machine forums, 3 gallery2 install

 **All MySQL tables are myISAM** (table locking instead of row loacking in innodb, myIsam make sense as ther is more read then insert)

 <span style="font-family: courier new,courier">\# vi in /etc/my.cnf

 Below the diff command between a standard MySQL install

 <span style="font-family: courier new,courier">\# diff my.cnf my-beforeOptimizations.cnf  
 <span style="font-family: courier new,courier">30c30  
 &lt; key\_buffer = 50M  
 —  
 &gt; key\_buffer = 16M  
 32,33c32,33  
 &lt; table\_cache = 1500  
 &lt; sort\_buffer\_size = 4M   
 —  
 &gt; table\_cache = 64  
 &gt; sort\_buffer\_size = 512K  
 35,46c35,37  
 &lt; read\_buffer\_size = 4M  
 &lt; read\_rnd\_buffer\_size = 1024K  
 &lt; myisam\_sort\_buffer\_size = 64M  
 &lt; join\_buffer\_size = 4M  
 &lt; thread\_cache\_size = 128  
 &lt; wait\_timeout = 14400  
 &lt; connect\_timeout = 10  
 &lt; max\_connect\_errors = 10  
 &lt; query\_cache\_limit = 2M  
 &lt; query\_cache\_size = 128M  
 &lt; query\_cache\_type = 1  
 &lt; thread\_concurrency=4  
 —  
 &gt; read\_buffer\_size = 256K  
 &gt; read\_rnd\_buffer\_size = 512K  
 &gt; myisam\_sort\_buffer\_size = 8M  
 163,166c154,157  
 &lt; key\_buffer = 64M  
 &lt; sort\_buffer = 64M  
 &lt; read\_buffer = 16M  
 &lt; write\_buffer = 16M  
 —  
 &gt; key\_buffer = 20M  
 &gt; sort\_buffer\_size = 20M  
 &gt; read\_buffer = 2M  
 &gt; write\_buffer = 2M