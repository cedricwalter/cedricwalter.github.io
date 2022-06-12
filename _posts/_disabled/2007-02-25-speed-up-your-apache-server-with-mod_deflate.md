---
id: 2890
title: 'Speed up your apache server with mod_deflate'
date: '2007-02-25T22:15:13+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2890'

header:
  teaser: /assets/images/2007/02/speed.Your_.apache.server.jpg
tags:
    - apache
    - faster
---

  
| ![](/assets/images/2007/02/speed.Your_.apache.server.jpg) | Since I am facing performance problem due to the load of visitors and a badly configured server, I decide today to document my findings in this new series of articles.The mod\_deflate module provides the DEFLATE output filter that allows output from your server to be compressed before being sent to the client over the network.Server: Strato ([www.strato.de](http://www.strato.de))   Operating system: SuSE / openSuSE   Requirements: root access and basic Unix knowledge   |
|---|---|

 Why installing mod\_deflate? is PHP gzip not enough?  
 PHP Gzip only compress PHP output, not unical file, like CSS, Javascipt, fixed HTML, other ressources.

| 1 | Use yast2 to install <small><span style="font-family: Courier New,Courier,monospace;">mod\_deflate</small> on the system, this will create files (\*.so) in <small><span style="font-family: Courier New,Courier,monospace;">/usr/lib/apache2-worker/</small> and <small><span style="font-family: Courier New,Courier,monospace;">/usr/lib/apache2-prefork/</small> |
|---|---|
| 2 | Edit the file <small><span style="font-family: Courier New,Courier,monospace;">    <span style="font-family: Courier New,Courier,monospace;">\# vi /etc/sysconfig/apache2</small>    and add <small><span style="font-family: Courier New,Courier,monospace;">deflate</small> and <small><span style="font-family: Courier New,Courier,monospace;">headers </small>(optional<small><span style="font-family: Courier New,Courier,monospace;"> </small><small><span style="font-family: Courier New,Courier,monospace;"><span style="font-weight: bold; color: rgb(51, 51, 255); font-family: Arial Black;">A</small>)    <small><span style="font-family: Courier New,Courier,monospace;">APACHE\_MODULES="<span style="font-weight: bold; font-family: Courier New,Courier,monospace;">deflate<span style="font-family: Courier New,Courier,monospace;"> <span style="font-weight: bold; font-family: Courier New,Courier,monospace;">headers<span style="font-family: Courier New,Courier,monospace;"> access actions alias auth auth\_dbm autoindex cgi dir env expires include log\_config mime negotiation setenvif ssl userdir php4 php5 perl rewrite suexec"</small> |
| 3 | create a new file in <small>/etc/apache2/conf.d/mod\_deflate.conf</small>    <small>    <span style="font-family: Courier New,Courier,monospace;">\#vi /etc/apache2/conf.d/mod\_deflate.conf </small><small><span style="font-family: Courier New,Courier,monospace;"></small>and add these lines, at the end of file, adapt all path according to your system.  <small><span style="font-family: Courier New,Courier,monospace;"><IfModule mod\_deflate.c>    # place filter ‘DEFLATE’ on all outgoing content    #SetOutputFilter DEFLATE    AddOutputFilterByType DEFLATE text/html text/plain text/xml</small>   # exclude uncompressible content via file type    SetEnvIfNoCase Request\_URI \\.(?:gif\|jpeg\|jpg\|png\|rar\|zip)$ no-gzip dont-vary    SetEnvIfNoCase Request\_URI \\.(?:mpg\|avi\|mpeg\|wmv\|mp3\|wma\|ogg)$ no-gzip dont-vary    <IfModule mod\_headers.c>    # <small><span style="font-family: Courier New,Courier,monospace;"><span style="font-weight: bold; color: rgb(51, 51, 255); font-family: Arial Black;">A </small><small><span style="font-family: Courier New,Courier,monospace;">properly handle requests coming from behind proxies    Header append Vary User-Agent    </IfModule></small>   # deflate.log, log compression ratio on each request    DeflateFilterNote Input instream    DeflateFilterNote Output outstream    DeflateFilterNote Ratio ratio    LogFormat ‘"%r" %{outstream}n/%{instream}n (%{ratio}n%%)’ deflate    CustomLog /var/log/apache2/deflate.log deflate   # Properly handle old browsers that do not support compression    BrowserMatch ^Mozilla/4 gzip-only-text/html    BrowserMatch ^Mozilla/4\\.0\[678\] no-gzip    BrowserMatch \\bMSI\[E\] !no-gzip !gzip-only-text/html   </IfModule>   <span style="font-family: Courier New,Courier,monospace;">  |
| 4 | start    <small><span style="font-family: Courier New,Courier,monospace;">\# apache2-reconfigure-mpm</small>    this recreate the file <small><span style="font-family: Courier New,Courier,monospace;"> /etc/apache2/sysconfig.d/loadmodule.conf</small>    and restart apache automatically. |
| 5 | verification: View HTTP Request and Response Header with <http://web-sniffer.net/> search for Content-Encoding: gzip |

References:

- [Apache Module mod\_deflate](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html)