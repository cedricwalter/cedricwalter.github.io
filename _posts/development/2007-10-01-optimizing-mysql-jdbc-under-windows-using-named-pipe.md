---

title: 'Optimizing MySQL jdbc under windows using named pipe'
date: '2007-10-01T21:48:33+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2007/09/mysql.logo_.png
tags:
    - database
    - MySQL
---

![](/assets/images/2007/09/mysql.logo_.png)

 According to [this MySQL page here](http://dev.mysql.com/doc/refman/5.0/en/connector-j-reference-configuration-properties.html), you can win 30 to 50% more performances using MySQL jdbc named pipe!

  Named pipes only work when connecting to a MySQL server on the same physical machine as the one the JDBC driver is being used on.   
 In simple performance tests, it appears that named pipe access is between 30%-50% faster than the standard TCP/IP access.

 As default, when you install mySQL on windows using the installer, TCP IP is the default option. The question remains why nobody seems  
 to use named pipe, or has write any articles on internet about it. Lorenz and me were trying nearly 2 hours to make this damn things work.   
 We googled on internet, finding nothing, e try and try until we finally succeed. That is the reason why I write this article now.  
   
 We were testing successfuly MySQL 5.0 using named pipe, and what an increase in speed!<big style="color: #ff0000"> 50%</big> [in the case of this big project](content/view/1216/1/)   
 First it may be a good idea to use the latest [JConnector](http://www.mysql.com/products/connector/j/) driver from MySQL

 **MySQL Connector/J**<span style="font-style: italic; font-family: Times New Roman,Times,serif"> is a native #Java driver that converts JDBC (Java Database Connectivity) calls into the network protocol used by  
 the MySQL database. It lets developers working with the #Java programming language easily build programs and applets that interact  
 with MySQL and connect all corporate data, even in a heterogeneous environment. MySQL Connector/J is a Type IV JDBC driver and   
 has a complete JDBC feature set that supports the capabilities of MySQL.  
 [Download Binaries &amp; Source](http://dev.mysql.com/downloads/connector/j/)

 Just put the file <span style="font-family: Courier New,Courier,monospace">mysql-connector-java-5.0.7-bin.jar in your classpath. You’ll have to sligthly alter the<span style="font-family: Courier New,Courier,monospace"> <small>my.ini</small> file as following:

 <small><span style="font-family: Courier New,Courier,monospace">\[mysqld\]  
 <span style="font-family: Courier New,Courier,monospace">skip-networking  
 <span style="font-family: Courier New,Courier,monospace">enable-named-pipe  
 <span style="font-family: Courier New,Courier,monospace">socket=mysql.sock</small>

 Add these 3 keys in <span style="font-family: Courier New,Courier,monospace">\[mysqld\] section of <span style="font-family: Courier New,Courier,monospace">my.ini and restart MySQL. The first key switch the TCP-IP port off, so you wont be able   
 now to connect to port 3306. The 2 others remaining just activate MySQL named pipe.

 Verify that everything has work correctly by firing MySQL Query Browser and connect to your database.   
 (see details of connection below)  
 ![mysql query browser with named pipe](/assets/images/2007/10/mysql.named_.pipe_.howto_.jpg)

 For the most intrepid of You of if wou want to add named pipe capabilities to previous saved connections, just can also use the menu "**tools**" – "**manage connections**" and under the tab "**advanced parameters**", just add these 2 new keys

 NAMED\_PIPE <span style="font-family: arial,helvetica,sans-serif">value Yes  
 SOCKET\_PATH <span style="font-family: arial,helvetica,sans-serif">value mysql.sock 

 We are nearly finished, all we have to do is to alter now the JDBC url, and this is where we fight against Windows<sup>tm</sup> till we find the path to the mysql.sock file handle.  
 For the unpatient of you, I deliver here the solution:

 <span style="font-family: Courier New,Courier,monospace">jdbc:mysql:///<span style="font-weight: bold; font-family: Courier New,Courier,monospace">database<span style="font-family: Courier New,Courier,monospace">  
 ?<span style="color: #3333ff">socketFactory=com.mysql.jdbc.NamedPipeSocketFactory  
 &amp;namedPipePath=\\\\\\\\.\\\\Pipe\\\\mysql.sock

 <span style="font-weight: bold; font-family: Courier New,Courier,monospace">database<span style="font-family: Courier New,Courier,monospace"> being the database/schema name  
 

 <span style="font-family: Courier New,Courier,monospace"><span style="color: #3333ff">socketFactory=com.mysql.jdbc.NamedPipeSocketFactory<span style="font-family: Courier New,Courier,monospace">  [JConnector](http://www.mysql.com/products/connector/j/) also supports access to MySQL via named pipes on Windows NT/2000/XP using  
 the <span class="property" style="font-style: italic">NamedPipeSocketFactory as a plugin-socket factory via the <span class="property" style="font-style: italic">socketFactory property. If you don’t use a <span class="property" style="font-style: italic">namedPipePath property, the default   
 of ‘\\\\.\\pipe\\MySQL’ will be used. If you use the `NamedPipeSocketFactory`, the hostname and port number values in the JDBC url will be ignored.   
 You can enable this feature using: socketFactory=com.mysql.jdbc.NamedPipeSocketFactory

 <span style="font-family: Courier New,Courier,monospace">namedPipePath=\\\\\\\\.\\\\Pipe\\\\mysql.sock The path to the file socket. Notice how strange the path is looking like under Windows<sup>tm</sup> (escaping \\ in java is normal).   
 Under linux we would have write <span style="font-family: Courier New,Courier,monospace">/var/log/mysql.sock and forget everything. In Windows<sup>tm </sup> You really have no chance to find it until you use   
 [*FileMon* ](http://www.microsoft.com/technet/sysinternals/FileAndDisk/Filemon.mspx)(a SysInternals tool)

 [FileMon ](http://www.microsoft.com/technet/sysinternals/FileAndDisk/Filemon.mspx)monitors and displays file system activity on a system in real-time. Its advanced capabilities make it a powerful tool for exploring the way   
 Windows works, seeing how applications use the files and DLLs, or tracking down problems in system or application file configurations. Filemon’s   
 timestamping feature will show you precisely when every open, read, write or delete, happens, and its status column tells you the outcome. *FileMon*   
 is so easy to use that you’ll be an expert within minutes. It begins monitoring when you start it, and its output window can be saved to a file for off-line   
 viewing. It has full search capability, and if you find that you’re getting information overload, simply set up one or more filters. [Download it HERE](http://www.microsoft.com/technet/sysinternals/FileAndDisk/Filemon.mspx)

 You can use [*FileMon* ](http://www.microsoft.com/technet/sysinternals/FileAndDisk/Filemon.mspx) to filter file by name, search for<span style="font-family: Courier New,Courier,monospace"> mysql\* and you’ll see that strange url. Note the documentation give some advice about this url   
 (more or less) <span style="font-family: Courier New,Courier,monospace">the default of ‘\\\\.\\pipe\\MySQL’, would have work if we have name the file MySQL and not <span style="font-family: Courier New,Courier,monospace">mysql.sock

 But wait there is more to learn, MySQL is supporting a wide range of parameters when you open the connection. [Just read this page](http://mirror.services.wisc.edu/mysql/doc/refman/5.0/en/connector-j-reference-configuration-properties.html), a lot of settings may also speed your application even more.