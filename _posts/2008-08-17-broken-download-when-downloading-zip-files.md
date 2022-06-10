---
id: 3698
title: 'Broken download when downloading zip files'
date: '2008-08-17T19:44:40+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3698'
permalink: /development/broken-download-when-downloading-zip-files/
---

A lot of people have tried numerous times to download files from my download section without   
success, the error message was always the same

Unrecoverable error "PCLZIP\_ERR\_BAD\_FORMAT (-10)"

Also, Some tried to unpack the zip file locally using stuffit/Winrar/7Zip and get an error suggesting   
that the archive is damaged.

Only Internet Explorer users were having issues, this is because of Internet explorer not able to handle   
compression of all file types. I solved the issue by changing my mod\_deflate.conf which now look like the following:

&lt;Location /&gt;   
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/x-javascript 

# Make sure proxies don’t deliver the wrong content   
Header append Vary User-Agent env=!dont-vary   
&lt;/Location&gt;

I found that I had to use application/x-javascript instead of application/javascript to actually get javascript files on my   
server to be served compressed.

mod deflate documentation: [http://httpd.apache.org/docs/2.0/mod/mod\_deflate.html](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html)