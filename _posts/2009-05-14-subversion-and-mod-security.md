---
id: 4327
title: 'Subversion and mod Security'
date: '2009-05-14T13:13:42+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4327'
permalink: /development/subversion-and-mod-security/
image: /wp-content/uploads/2009/05/plesk.logo_.jpg
---

![plesk.logo](/assets/images/2009/05/plesk.logo_.jpg "plesk.logo") ![subversion_logo384x332](/assets/images/2009/05/subversion_logo384x332.png "subversion_logo384x332")

I was receiving some strange errors (HTTP error 501) while committing to my public [subversion](http://subversion.tigris.org/) (<http://svn.waltercedric.com>), all my problems were related to [mod security](http://www.modsecurity.org/)

 This error 501 means most of the time that the client changed authentication halfway through the commit. That is, it started the commit by sending http requests with a Basic auth header of user1, and then a few requests later it sent a Basic auth header with a different user.

Yes but..

During commit in Eclipse, I was getting back the following error

[![svn.error.501](/assets/images/2009/05/svn.error_.501_thumb.png "svn.error.501")](http://www.waltercedric.com/images/stories/Subversionandmodsecurity_B3C7/svn.error.501.png)

Some of selected resources were not committed.   
svn: Commit failed (details follow):   
svn: PUT request failed on ‘/joomla/!svn/wrk/0fe0b23e-2101-0010-9594-fd4f2e3d467d/trunk/joomla16/pom.xml’   
svn: PUT of ‘/joomla/!svn/wrk/0fe0b23e-2101-0010-9594-fd4f2e3d467d/trunk/joomla16/pom.xml’: 501 Method Not Implemented ([http://svn.waltercedric.com](http://svn.waltercedric.com))

But instead of blaming the Eclipse client, i went through the logs of [Subversion](http://subversion.tigris.org/)

# vi /var/log/apache2/svn.waltercedric.com-error\_log

This is where I discover that most of my issues were related to [mod security.](http://www.modsecurity.org/)

> *ModSecurity is an open source web application firewall that runs as an Apache module*

## Solving this issue

#### Identifying offending rules and disabling them per virtual host.

from /var/log/apache2/svn.waltercedric.com-error\_log, I saw the rule

[Thu May 14 12:37:40 2009\] \[error\] \[client 81.49.237.230\] ModSecurity: Access denied with code 501 (phase 2). Match of "rx (?:^(?:application\\\\\\\\/x-www-form-urlencoded(?:;(?:\\\\\\\\s?charset\\\\\\\\s?=\\\\\\\\s?\[\\\\\\\\w\\\\\\\\d\\\\\\\\-\]{1,18})?)??$|multipart/form-data;)|text/xml)" against "REQUEST\_HEADERS:Content-Type" required. \[file "/etc/apache2/conf.d/rules/modsecurity\_crs\_30\_http\_policy.conf"\] \[line "69"\] \[id "**960010**"\] \[msg "Request content type is not allowed by policy"\] \[severity "WARNING"\] \[tag "POLICY/ENCODING\_NOT\_ALLOWED"\] \[hostname "svn.waltercedric.com"\] \[uri "/joomla/!svn/wrk/0fe0b23e-2101-0010-9594-fd4f2e3d467d/trunk/joomla16/pom.xml"\] \[unique\_id "6tr1nFXWZtMAABlaPS0AAAAF"\]

in /srv/www/vhosts/waltercedric.com/subdomains/svn/conf/vhost.conf add the following section, to switch off the rule specifically

> &lt;IfModule mod\_security2.c&gt; 
> 
> &lt;Directory /srv/www/vhosts/waltercedric.com/subdomains/svn/httpdocs&gt;   
> \# SecRuleEngine Off &lt;- dont switch off mod security totally, way too unsecure   
> SecRuleRemoveByID **960010**   
> &lt;/Directory&gt; 
> 
> &lt;/IfModule&gt;

#### Creating a new configuration rules files

But this is not enough, some keywords of [Subversion](http://subversion.tigris.org/) are also filtered (PROPFIND, PROPPATCH, REPORT, OPTIONS, MKACTIVITY, CHECKOUT, PUT, DELETE, MERGE, MKCOL), so I create a new configuration files at

> # vi /etc/apache2/conf.d/rules/modsecurity\_crs\_99\_svn\_ignores.conf
> 
> SecRule REQUEST\_METHOD "^(PROPFIND|PROPPATCH)$" allow   
> SecRule REQUEST\_METHOD "^(REPORT|OPTIONS)$" allow   
> SecRule REQUEST\_METHOD "^(MKACTIVITY|CHECKOUT)$" allow   
> SecRule REQUEST\_METHOD "^(PUT|DELETE|MERGE)$" allow   
> SecRule REQUEST\_METHOD "^(MKCOL)$" allow

Since my /etc/apache2/conf.d/modsecurity2.conf load all files from there (Include /etc/apache2/conf.d/rules/\*.conf)

This solution will allow HTTP requests to contains any of the above keyword. This may lead to a small windows of security issues in all other applications running on the server. Another solution is to add these new rules in the vhost.conf, so it look like

> &lt;IfModule mod\_security2.c&gt; 
> 
> &lt;Directory /srv/www/vhosts/waltercedric.com/subdomains/svn/httpdocs&gt;   
> \# SecRuleEngine Off &lt;- dont switch off mod security totally, way too unsecure   
> SecRuleRemoveByID **960010**
> 
>  SecRule REQUEST\_METHOD "^(PROPFIND|PROPPATCH)$" allow   
> SecRule REQUEST\_METHOD "^(REPORT|OPTIONS)$" allow   
> SecRule REQUEST\_METHOD "^(MKACTIVITY|CHECKOUT)$" allow   
> SecRule REQUEST\_METHOD "^(PUT|DELETE|MERGE)$" allow   
> SecRule REQUEST\_METHOD "^(MKCOL)$" allow   
> &lt;/Directory&gt; 
> 
> &lt;/IfModule&gt;

So only the sub domain <http://svn.waltercedric.com> wont trigger any mod security error.