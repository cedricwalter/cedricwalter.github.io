---
id: 3063
title: 'Speed up your apache server with mod_expires'
date: '2007-09-30T20:18:43+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3063'
permalink: /development/speed-up-your-apache-server-with-mod_expires/
tags:
    - apache
    - faster
---

 This module controls the setting of the `Expires` HTTP header and the `max-age` directive of the `Cache-Control` HTTP header in server responses. The expiration date can set to be relative to either the time the source file was last modified, or to the time of the client access.

 These HTTP headers are an instruction to the client about the document’s validity and persistence. If cached, the document may be fetched from the cache rather than from the source until this time has passed. After that, the cache copy is considered "expired" and invalid, and a new copy must be obtained from the source.

 **How to activate mod\_expires.so**  
 # <span style="font-family: courier new,courier">vi /etc/apache2/conf.d/mod\_expires.conf

 config is rough right now, but it is better than nothing,put the following in the file

 <span style="font-family: courier new,courier">LoadModule evasive20\_module /usr/lib/apache2/mod\_expires.so  
 &lt;IfModule mod\_expires.c&gt;  
 ExpiresActive On

 ExpiresDefault "access plus 1 month"  
 #ExpiresByType text/html "access plus 1 month 15 days 2 hours"  
 #ExpiresByType image/gif "modification plus 1 month"  
 #ExpiresByType image/png "modification plus 1 month"  
 #ExpiresByType image/jpg "modification plus 1 month"   
 #ExpiresByType text/css "access plus 1 month 15 days 2 hours"  
 #ExpiresByType text/javascript "access plus 1 month 15 days 2 hours"  
 &lt;/IfModule&gt;

 You can also set the expire header by type, but it wa snot working in my case, that is why I use the ExpiresDefault directive

- [Apache mod\_expires references ](http://httpd.apache.org/docs/2.0/mod/mod_expires.html)