---

title: 'Speed up your apache server with mod_cache'
date: '2007-02-25T22:06:38+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2007/02/speed.Your_.apache.server.jpg
---

  
| ![](/assets/images/2007/02/speed.Your_.apache.server.jpg) | Since I am facing performance problem due to the load of visitors and a badly configured server, I decide today to document my findings in this new series of articles.mod\_cache   implements an RFC 2616 compliant HTTP content cache that can be used to cache either local or proxied content. mod\_cache requires the services of one or more storage management modules.Server: Strato ([www.strato.de](http://www.strato.de))   Operating system: SuSE / openSuSE   Requirements: root access and basic Unix knowledge |
|---|---|

 

| 1 | Use yast2 to install <small><span style="font-family: Courier New,Courier,monospace;">mod\_cache</small> on the system, this will create files (\*.so) in <small><span style="font-family: Courier New,Courier,monospace;">/usr/lib/apache2-worker/</small> and <small><span style="font-family: Courier New,Courier,monospace;">/usr/lib/apache2-prefork/</small> |
|---|---|
| 2 | Edit the file <small><span style="font-family: Courier New,Courier,monospace;">    <span style="font-family: Courier New,Courier,monospace;">\# vi /etc/sysconfig/apache2</small>    and add <small><span style="font-family: Courier New,Courier,monospace;">cache</small> and <small><span style="font-family: Courier New,Courier,monospace;">mem\_cache<span style="font-family: Courier New,Courier,monospace;"></small>    <small><span style="font-family: Courier New,Courier,monospace;">APACHE\_MODULES="cache mem\_cache <span style="font-family: Courier New,Courier,monospace;">deflate headers<span style="font-family: Courier New,Courier,monospace;"> access actions alias auth auth\_dbm autoindex cgi dir env expires include log\_config mime negotiation setenvif ssl userdir php4 php5 perl rewrite suexec"</small> |
| 3 | create a new file in <small>/etc/apache2/conf.d/mod\_cache.conf</small>    <small>    <span style="font-family: Courier New,Courier,monospace;">\#vi /etc/apache2/conf.d/mod\_cache.conf </small>and add these lines, at the end of file, adapt all path according to your system.  <small><span style="font-family: Courier New,Courier,monospace;"><IfModule mod\_cache.c>    <span style="font-family: Courier New,Courier,monospace;">LoadModule disk\_cache\_module modules/mod\_disk\_cache.so    <span style="font-family: Courier New,Courier,monospace;"><IfModule mod\_disk\_cache.c>    <span style="font-family: Courier New,Courier,monospace;"> CacheRoot /tmp/cacheroot    <span style="font-family: Courier New,Courier,monospace;"> CacheSize 256    <span style="font-family: Courier New,Courier,monospace;"> CacheEnable disk /    <span style="font-family: Courier New,Courier,monospace;"> CacheDirLevels 5    <span style="font-family: Courier New,Courier,monospace;"> CacheDirLength 3    <span style="font-family: Courier New,Courier,monospace;"></IfModule>        <span style="font-family: Courier New,Courier,monospace;"><IfModule mod\_mem\_cache.c>    <span style="font-family: Courier New,Courier,monospace;"> CacheEnable mem /    <span style="font-family: Courier New,Courier,monospace;"> MCacheSize 4096    <span style="font-family: Courier New,Courier,monospace;"> MCacheMaxObjectCount 100    <span style="font-family: Courier New,Courier,monospace;"> MCacheMinObjectSize 1    <span style="font-family: Courier New,Courier,monospace;"> MCacheMaxObjectSize 2048    <span style="font-family: Courier New,Courier,monospace;"> </IfModule>    <span style="font-family: Courier New,Courier,monospace;"></IfModule></small><small><span style="font-family: Courier New,Courier,monospace;"><span style="font-family: Courier New,Courier,monospace;"><span style="font-family: Courier New,Courier,monospace;">    </small> |
| 4 | start    <small><span style="font-family: Courier New,Courier,monospace;">\# apache2-reconfigure-mpm</small>    this recreate the file <small><span style="font-family: Courier New,Courier,monospace;"> /etc/apache2/sysconfig.d/loadmodule.conf</small>    and restart apache automatically. |

References:

- [Apache Module mod\_cache](http://httpd.apache.org/docs/2.0/mod/mod_cache.html)