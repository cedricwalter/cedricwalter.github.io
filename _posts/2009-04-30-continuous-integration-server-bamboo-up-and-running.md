---
id: 4305
title: 'Continuous integration server Bamboo up and running'
date: '2009-04-30T20:04:27+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4305'
permalink: /development/continuous-integration-server-bamboo-up-and-running/
header:
  teaser: /assets/images/2009/04/atlassian.bamboo.logo_.jpg
---

![atlassian.bamboo.logo](/assets/images/2009/04/atlassian.bamboo.logo_.jpg "atlassian.bamboo.logo") My [Bamboo](http://www.atlassian.com/software/bamboo/) continuous integration server is now fully functional and available at <http://bamboo.waltercedric.com/>

Remember Atlassian is [providing free license for Open Source Projects](http://www.atlassian.com/software/bamboo/licensing.jsp#nonprofit):

*Atlassian supports and believes in the Open Source movement –* [*Bamboo*](http://www.atlassian.com/software/bamboo/) *utilizes a number of good Open Source components, and Atlassian developers are committers on a large number of Open Source projects.*

*To give back to the open source community (and hopefully improve the quality of those projects!),* [*Bamboo*](http://www.atlassian.com/software/bamboo/) *is free for any Open Source project to use.*

*There are a few requirements for an Open Source license, the main ones being:*

- *Established code base*
- *Publicly available project website*
- *Using an approved open source license*
- *Your* [*Bamboo*](http://www.atlassian.com/software/bamboo/) *instance will be publicly accessible*

My objective is to make Joomla! and all my projects also running in Bamboo (not only in TeamCity as the limit of 20 builds will be rapidly reached)

Visit it by clicking on the picture

## Very quick Bamboo install how to

Install a fresh Tomcat 6 runtime,

Move the war into the ROOT web context of tomcat

Choose free port for HTTP, AJP, and Tomcat server port in conf/server.xml

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>Copy mysqldriver.jar into /lib

Configure the data source into server.xml

Edit /etc/apache/worker.properties

```
worker.list=ajp13, teamcity, jira, bamboo worker.bamboo.port=8030 worker.bamboo.host=localhost worker.bamboo.type=ajp13 
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>Create a vhost.conf in the subdomains

\# vi /srv/www/vhosts/waltercedric.com/subdomains/bamboo/conf/vhost.conf

```
ServerName bamboo.waltercedric.com  
ProxyPass /  ajp://bamboo.waltercedric.com:8030/ 
Order Allow,Deny    Allow from all 
Proxy
Directory 
 Options FollowSymLinks   
 AllowOverride Non
 Directory
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>To tell plesk to include an overridden vhost.conf, run

\# /usr/local/psa/admin/sbin/websrvmng

Restart Apache2

rcapache2 restart