---
id: 4170
title: 'Percona XtraDB Storage Engine, scalling betten than innodb'
date: '2009-02-19T19:29:52+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4170'

---

> **From [http://www.mysqlperformanceblog.com](http://www.mysqlperformanceblog.com/2008/12/16/announcing-percona-xtradb-storage-engine-a-drop-in-replacement-for-standard-innodb/)**
> 
> **Percona XtraDB** includes all of InnoDB’s ACID-compliant design and advanced MVCC architecture, and adds features, more tunability, more metrics, more scalability on many cores, and better memory usage. We choose features and fixes based on customer requests and on our best judgment of real-world needs. We have not included all the InnoDB patches available. For example Google’s well-known InnoDB patch set is omitted (at least for now).
> 
> The first version of our new storage engine is 1.0.2-1, which is forked from InnoDB-plugin-1.0.2. **Percona XtraDB** is released under GPL v2, as is InnoDB-plugin base source code. **Percona XtraDB** is released only under the GPL v2 with no dual-licensing, and commercial support is available from Percona.
> 
> So what’s new in the engine? Here is a list of new features and enhancements:
> 
> - **INFORMATION\_SCHEMA.XTRADB\_ENHANCEMENTS**. This table contains information about the differences between the **Percona XtraDB** and the same version number of standard InnoDB, so you can always learn what your engine can do. [documentation](http://www.percona.com/docs/wiki/percona-xtradb:innodb_show_enhancements)
> - **Improvements to SHOW INNODB STATUS**. We’ve added more memory information and lock information, and fixed problems with lock information. [documentation](http://www.percona.com/docs/wiki/percona-xtradb:innodb_show_status)
> - **Improvements to InnoDB IO.** Improvements of InnoDB IO subsystem, such as multiple read and write threads, read-ahead control, control io capacity and adaptive checkpointing. [documentation](http://www.percona.com/docs/wiki/percona-xtradb:innodb_io)
> - **InnoDB RW-lock fixes** Improvements to scalability for systems with 8+ cores. [documentation](http://www.percona.com/docs/wiki/percona-xtradb:innodb_rw_lock)
> - **Buffer pool fixes** Improvements of buffer\_pool scalability. [documentation](http://www.percona.com/docs/wiki/percona-xtradb:optimistic_margine_count)
> - **innodb\_buffer\_pool\_pages** Information about content of buffer\_pool pages. [documentation ](http://www.percona.com/docs/wiki/percona-xtradb:innodb_buffer_pool_pages)

That’s a thing I will try for my new Internet server 😉 let’s see if #Joomla! appreciate and MySQL span better on a quad core server.