---

title: 'Speed up your apache server running PHP'
date: '2007-02-25T22:56:43+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2007/02/speed.Your_.apache.server.jpg
tags:
    - apache
    - faster
---

  
| ![](/assets/images/2007/02/speed.Your_.apache.server.jpg) | Since I am facing performance problem due to the load of visitors and a badly configured server, I decide today to document my findings in this new series of articles.As soon as PHP run as FastCGI and no more inside an Apache module (mod\_php4.so is not multi threaded), You should be able to switch the default MPM setting of Apache from MPM prefork to MPM worker.So, what’s the difference between prefork and worker?   Quoting from the Apache MPM Prefork page: [http://httpd.apache.org/docs/2.0/mod/prefork.html ](http://httpd.apache.org/docs/2.0/mod/prefork.html)   MPM Prefork implements a non-threaded, pre-forking web server that handles requests in a manner similar to Apache 1.3.  And for the Apache MPM Worker says:[ http://httpd.apache.org/docs/2.0/mod/worker.html ](http://httpd.apache.org/docs/2.0/mod/worker.html)   MPM Worker implements a hybrid multi-process multi-threaded server. By using threads to serve requests, it is able to serve a large number of requests with less system resources than a process-based server.    Server: Strato ([www.strato.de](http://www.strato.de))   Operating system: SuSE / openSuSE   Requirements: root access and basic Unix knowledge |
|---|---|

| 1 | Edit the file <small><span style="font-family: Courier New,Courier,monospace;">    <span style="font-family: Courier New,Courier,monospace;">\# vi /etc/sysconfig/apache2</small>    and change the key:    <small>    APACHE\_MPM=" "</small> to   <small>APACHE\_MPM="worker"</small>   <small><span style="font-family: Courier New,Courier,monospace;"></small> |
|---|---|
| 2 | You can now tune also default parameters in file <small>/etc/apache2/server-tuning.conf</small>    Here are my settings, these are still the default setting of Apache  <small style="font-family: Courier New;">vi /etc/apache2/server-tuning.conf</small>    <small>    <span style="color: rgb(51, 51, 255); font-family: Courier New;">\# worker MPM</small>    <small><IfModule worker.c>     ServerLimit 16     # initial number of server processes to start     StartServers 2     # minimum number of worker threads which are kept spare     MinSpareThreads 25     # maximum number of worker threads which are kept spare     MaxSpareThreads 75     # maximum number of simultaneous client connections     MaxClients 150     # constant number of worker threads in each server process     ThreadsPerChild 25     # maximum number of requests a server process serves     MaxRequestsPerChild 6000    </IfModule></small> |
| 3 | start    <small><span style="font-family: Courier New,Courier,monospace;">\# apache2-reconfigure-mpm</small>    this recreate the file <small><span style="font-family: Courier New,Courier,monospace;"> /etc/apache2/sysconfig.d/loadmodule.conf</small>    and restart apache automatically. Test Your site to ensure everything still work as expected. |