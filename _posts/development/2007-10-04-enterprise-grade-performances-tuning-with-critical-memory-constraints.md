---
id: 3074
title: 'Enterprise grade performances tuning with critical memory constraints'
date: '2007-10-04T21:47:38+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3074'

tags:
    - java
    - Tuning
---

 We are working since 3 days on tuning a big application:

- Client server enterprise grade application,
- Run on 2 JVM with 4Gb (Tomcat/Application server) of RAM each!
- Run on 2 Double core AMD 64 bits server,
- Linux 64bits,
- Has a lot of parallel users and > 10000 are registered
- Use a product meta model which separate definition from implementation data.
- Java server faces, java, ajax

 This application is just consuming too much memory for the offline version. Our objective is to make that big application run

- The same code as above,
- In windows XP,
- IBM T40, Intel Pentium M 1.6 GHz, DDR266/PC2100
- 1 JVM with 500Mb in Tomcat,
- 1 GB of physical Ram,
- 1 Desktop user who may run also Lotus Notes, Microsoft Office at the same time…

  There is already a lot of good resources and valuable advices on internet (Google is your friend :-)). Before digging in the code, and since the code is already productive, we have done some tuning on component first.   
 By tuning each components involved one after the other, this follow the principle: Lets do some quick win first before changing algorithm and increasing risk of breaking something….  
 In order to back up each changes made with some statistics, the first step was to develop a testcase with [Web Stress Tool ](http://www.paessler.com/webstress)(Commercial) but [Apache JMETER](http://jakarta.apache.org/jmeter/) (… replace with your favorite web testing tool) would have do the job

 <span style="font-weight: bold; font-family: Arial Black">At the OS Level

 by trying to convince the company to turn the anti virus off on some files and directory. They were scanning XHTML, javascript, XML, class files, images, so nearly everything… during EACH file access. Note the user has no windows right to alter files.

 <span style="font-weight: bold; font-family: Arial Black">MySQL 5<span style="font-family: Arial Black"> (we are already using the latest 5.X branch by luck)

 By removing TCP database access and [using name pipe only (+30 to +50% performances), ](content/view/1217/1/)

 By Installing [MySQL Enterprise Advisor and Monitor](http://www.mysql.com/products/enterprise/advisors.html). ([You can request a free trial key here](http://www.mysql.com/ent-trial-reg-2007/)) and looking at what the advisor recommend. Attention this tool has been developed for monitoring servers, some recommendations are simply not always usable. In our case we are constrained by the memory, remember less than 500Mb, so we did not blindly follow advices. Basic stuff were done, like adding indexes (were it make sense to avoid full tables scan and reduce slow queries), increasing buffers,

 By switching to [myISAM](http://dev.mysql.com/doc/refman/5.0/en/myisam-storage-engine.html) (multi threaded with table locking) instead of [innoDB](http://dev.mysql.com/doc/refman/5.0/en/innodb.html) (multi threaded with row locking), and also avoiding other storage engine to run with different algorithm to run in parallel..

 MyISAM is the default storage engine for the MySQL relational database management system. It is based on the older ISAM code but has many useful extensions. In recent MySQL versions, the InnoDB engine has widely started to replace MyISAM due to its support for transactions, referential integrity constraints, and higher concurrency.Each MyISAM table is stored on disk in three files. The files have names that begin with the table name and have an extension to indicate the file type. MySQL uses a .frm file to store the definition of the table, but this file is not a part of the MyISAM engine, but instead is a part of the server. The data file has a .MYD (MYData) extension. The index file has a .MYI (MYIndex) extension. \[[WikiPedia](http://en.wikipedia.org/wiki/MyISAM)\]

 InnoDB is a storage engine for MySQL, included as standard in all current binaries distributed by MySQL AB. Its main enhancement over other storage engines available for use with MySQL is ACID-compliant transaction support, similar to PostgreSQL, along with declarative referential integrity (foreign key support). InnoDB became a product of Oracle Corporation after their acquisition of <span class="new" style="font-style: italic">Innobase Oy, in October 2005<span class="external autonumber" style="font-style: italic">. The software is dual licensed. It is distributed under the GNU General Public License, but can also be licensed to parties wishing to combine InnoDB in proprietary software. \[[WikiPedia](http://en.wikipedia.org/wiki/InnoDB)\]<span class="external autonumber">

 What are the differences, and you may want also to use myISAM for mono user applications…

1. InnoDB recovers from a crash or other unexpected shutdown by replaying its logs. MyISAM must fully scan and repair or rebuild any indexes or possibly tables which had been updated but not fully flushed to disk. Since the InnoDB approach is approximately fixed time while the MyISAM time grows with the size of the data files, InnoDB offers greater perceived availability and reliability as database sizes grow.
2. MyISAM relies on the operating system for caching reads and writes to the data rows while InnoDB does this within the engine itself, combining the row caches with the index caches. Dirty (changed) database pages are not immediately sent to the operating system to be written by InnoDB, which can make it substantially faster than MyISAM in some situations.
3. InnoDB stores data rows physically in primary key order while MyISAM typically stores them mostly in the order in which they are added. This corresponds to the [MS SQL Server](http://en.wikipedia.org/wiki/MS_SQL_Server "MS SQL Server") feature of “Clustered Indexes” and the [Oracle](http://en.wikipedia.org/wiki/Oracle_database "Oracle database") feature known as "index organized tables." When the primary key is selected to match the needs of common queries this can give a substantial performance benefit. For example, customer bank records might be grouped by customer in InnoDB but by transaction date with MyISAM, so InnoDB would likely require fewer disk seeks and less RAM to retrieve and cache a customer account history. On the other hand, inserting data in orders that differ substantially from primary key (PK) order will presumably require that InnoDB do a lot of reordering of data in order to get it into PK order. This places InnoDB at a slight disadvantage in that it does not permit insertion order based table structuring.
4. InnoDB currently does not provide the compression and terse row formats provided by MyISAM, so both the disk and cache RAM required may be larger. A lower overhead format is available for MySQL 5.0, reducing overhead by about 20% and use of page compression is planned for a future version.
5. When operating in fully ACID-compliant modes, InnoDB must do a flush to disk at least once per transaction, though it will combine flushes for inserts from multiple connections. For typical hard drives or arrays, this will impose a limit of about 200 update transactions per second. If you require higher transaction rates, disk controllers with write caching and battery backup will be required in order to maintain transactional integrity. InnoDB also offers several modes which reduce this effect, naturally leading to a loss of transactional integrity. MyISAM has none of this overhead, but only because it does not support transactions. \[[WikiPedia](http://en.wikipedia.org/wiki/InnoDB)\]

 For us the speed of [myISAM](http://dev.mysql.com/doc/refman/5.0/en/myisam-storage-engine.html) is clearly balancing the drawback for a desktop applications.  
   
 <span style="font-weight: bold; font-family: Arial Black">JSF tuning 

 Obvious settings here:, JSF is lacking more fine tuning settings. Serialization is occurring during the model life cycle and consume memory and CPU. We may dig deeply later.

- <span style="font-family: Courier New,Courier,monospace">javax.faces.STATE\_SAVING\_METHOD to <span style="font-family: Courier New,Courier,monospace">server
- <span style="font-family: Courier New,Courier,monospace">org.apache.myfaces.COMPRESS\_STATE\_IN\_SESSION to<span style="font-family: Courier New,Courier,monospace"> true since memory is the biggest constraint for us
- <span style="font-family: Courier New,Courier,monospace"> org.apache.myfaces.<span style="font-family: Courier New,Courier,monospace">NUMBER\_OF\_VIEWS\_IN\_SESSION to<span style="font-family: Courier New,Courier,monospace"> 0
- facelets.BUFFER\_SIZE to 8192

   
 <span style="font-weight: bold; font-family: Arial Black">Tomcat tuning

 Nothing big can be done here…For me Tomcat is really missing a dynamic web application loader: Tomcat is simply installing all applications found in <span style="font-family: Courier New,Courier,monospace">/webapps at startup even if they are not used. They are never remove from memory or serialized to disk. Tomcat 4.1 seems to have a memory footprint of 22 Mb, going to the latest Tomcat 6.0 is a too big changes for us now, but we might reconsider it in the future. Removing java library which are not use from <span style="font-family: Courier New,Courier,monospace">WEB-INF/lib by trial and error can save some precious Bytes through as it is pretty common when you use frameworks to have jar not desired. For example: junit.jar, jdbc drivers, jms.jar, …Moving common lib to <span style="font-family: Courier New,Courier,monospace">shared/lib may also help remove duplicate jars from webapps class loader and memory.

 <span style="font-weight: bold; font-family: Arial Black">JVM tuning

 Java 1.5 and java 1.6 have made a lot of progress, and the [JIT compiler](http://en.wikipedia.org/wiki/Just-in-time_compilation) found in JAVA 1.5/1.6 is getting more and more aggressive…The basic rule is to turn the GC JVM log on (by adding –<span style="font-family: Courier New,Courier,monospace">Xloggc:<file> \[-XX:+PrintGCDetails\]` `) and analyze it offline with a tool like [GCViewer](http://www.tagtraum.com/gcviewer.html) (free). The JIT is doing a pretty good job as the application run more and more faster with the time, but it is just a feeling 😉  
 By analyzing the GC logs we were able to optimize and avoid big mis configurations mistakes, one more time a lot of articles and books are available on how to tune a JVM. Sadly java has no advisor at the moment or is not using genetic algorithms to tune itself…It remains a dream for now.

 By using an empiric approach, which means:   
 1 changing JVM parameters -> running test cases ->deciding if we give CPU away or minimize RAM usage -> go back to 1

 We come down to the following exotic parameters (Xms and Xmx are not of any help since it is really depending on your application and how memory is managed internally)

 <span style="font-family: Courier New,Courier,monospace"> -XX:+AggressiveOpts -XX:-UseConcMarkSweepGC

 By the way I use them in Eclipse + JDK 1.6 since months. This page [<span style="font-size: 1.2em">**A Collection of JVM Options** **compiled by: Joseph D. Mocker (Sun Microsystems, Inc.)**](http://blogs.sun.com/watt/resource/jvm-options-list.html) has been of a great help during this stage.

 Still not enough, we were forced to profile the java code and make some big changes….