---
id: 2895
title: 'MediaWiki No input file specified. error'
date: '2007-02-27T23:18:20+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2895'

header:
  teaser: /assets/images/2006/04/waltercedricWikiLogo.jpg
tags:
    - apache
---

| ![](/assets/images/2006/04/waltercedricWikiLogo.jpg) | MediaWiki do not like server running PHP as fastcgi… But there is a always a workaround: 😉 |
|---|---|

1\. create a file .htaccess in the root folder of your Wiki

<span style="font-family: courier new,courier,monospace;"> RewriteEngine On  
RewriteCond %{REQUEST\_FILENAME} !-f  
RewriteCond %{REQUEST\_FILENAME} !-d  
RewriteRule ^(.\*)$ /wiki/index.php?title=$1 \[L,QSA\]

2\. open the file <span style="font-family: courier new,courier,monospace;">LocalSettings.php and activate ugly URLs  
<span style="font-family: courier new,courier,monospace;">\#$wgArticlePath = "$wgScript/$1";  
<span style="font-family: courier new,courier,monospace;">$wgArticlePath = "$wgScript?title=$1";

Some URLs in my [Wiki ](http://wiki.waltercedric.com)are still not working, that’s because they are hardcoded inside the code. I will move to the newest mediawiki version soon.  
  
references:  
[  ](http://meta.wikimedia.org/wiki/Help_talk:Installation#Installation_Error_Message_.22No_input_file_specified.22)

- [http://meta.wikimedia.org/wiki/Help\_talk:Installation#Installation\_Error\_Message\_.22No\_input\_file\_specified.22](http://meta.wikimedia.org/wiki/Help_talk:Installation#Installation_Error_Message_.22No_input_file_specified.22)

- [http://meta.wikimedia.org/wiki/Eliminating\_index.php\_from\_the\_url ](http://meta.wikimedia.org/wiki/Eliminating_index.php_from_the_url)