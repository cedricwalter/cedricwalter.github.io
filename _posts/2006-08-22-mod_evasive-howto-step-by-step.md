---
id: 2688
title: 'mod_evasive howto step by step'
date: '2006-08-22T22:39:00+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2688'
permalink: /security/mod_evasive-howto-step-by-step/
tags:
    - security
---

 <span style="font-style: italic;"><span style="font-weight: bold;"> mod\_evasive is an evasive maneuvers module for Apache to provide evasive action in the event of an HTTP DoS or DDoS attack or brute force attack. It is also designed to be a detection and network management tool, and can be easily configured to talk to ipchains, firewalls, routers, and etcetera. mod\_evasive presently reports abuses via email and syslog facilities.   
  
<span style="font-style: italic;"> Detection is performed by creating an internal dynamic hash table of IP Addresses and URIs, and denying any single IP address from any of the following: 

- Requesting the same page more than a few times per second
- Making more than 50 concurrent requests on the same child per second
- Making any requests while temporarily blacklisted (on a blocking list)

   
<span style="font-style: italic;"> This method has worked well in both single-server script attacks as well as distributed attacks, but just like other evasive tools, is only as useful to the point of bandwidth and processor consumption (e.g. the amount of bandwidth and processor required to receive/process/respond to invalid requests), which is why it’s a good idea to integrate this with your firewalls and routers for maximum protection.   
  
<span style="font-style: italic;"> This module instantiates for each listener individually, and therefore has a built-in cleanup mechanism and scaling capabilities. Because of this per-child design, legitimate requests are never compromised (even from proxies and NAT addresses) but only scripted attacks. Even a user repeatedly clicking on ‘reload’ should not be affected unless they do it maliciously. mod\_evasive is fully tweakable through the Apache configuration file, easy to incorporate into your web server, and easy to use. from [http://www.zdziarski.com/projects/mod\_evasive/](http://www.zdziarski.com/projects/mod_evasive/)

<span style="font-weight: bold;">click read more for my HowTo

   
  Download the actual version of <small style="font-family: Courier New,Courier,monospace;">mod\_evasive</small>

| <small style="font-family: Courier New,Courier,monospace;">\# wget http://www.zdziarski.com/projects/mod\_evasive/mod\_evasive\_1.10.1.tar.gz</small> |
|---|

Unpack it

| <small style="font-family: Courier New,Courier,monospace;">\# tar xvzf </small><small style="font-family: Courier New,Courier,monospace;">mod\_evasive\_1.10.1.tar.gz </small>/usr/local/src/mod\_evasive |
|---|

Move to that directory

| <small style="font-family: Courier New,Courier,monospace;">\# cd </small><span style="font-family: Courier New,Courier,monospace;"> /usr/local/src/mod\_evasive |
|---|

And edit the file mod\_evasive20.c, we will have to change the line 45 to

| \#define MAILER "/bin/mail -t %s" |
|---|

We compile the module:

| **Apache2** | **Apache2-Prefork** |
|---|---|
| <small><span style="font-family: Courier New,Courier,monospace;">\# /usr/sbin/apxs2 -cia mod\_evasive20.c</small> | <small><span style="font-family: Courier New,Courier,monospace;">\# /usr/sbin/apxs2-prefork -cia mod\_evasive20.c</small> |

Now we have to create a config file for mod\_evasive:

| <small style="font-family: Courier New,Courier,monospace;">\# touch /etc/apache2/conf.d/mod\_evasive.conf</small> |
|---|

and edit it

| <small>\# vi /etc/apache2/conf.d/mod\_evasive.conf</small> |
|---|

content of file

| **Apache2** | **Apache2-Prefork** |
|---|---|
| <small><span style="font-family: Courier New,Courier,monospace;">LoadModule evasive20\_module /usr/lib/apache2/mod\_evasive20.so   <span style="font-family: Courier New,Courier,monospace;"><IfModule mod\_evasive20.c>   <span style="font-family: Courier New,Courier,monospace;"> DOSHashTableSize 3097   <span style="font-family: Courier New,Courier,monospace;"> DOSPageCount 5   <span style="font-family: Courier New,Courier,monospace;"> DOSSiteCount 100   <span style="font-family: Courier New,Courier,monospace;"> DOSPageInterval 2   <span style="font-family: Courier New,Courier,monospace;"> DOSSiteInterval 2   <span style="font-family: Courier New,Courier,monospace;"> DOSBlockingPeriod 600   <span style="font-family: Courier New,Courier,monospace;"> DOSEmailNotify youremail@mail.com   <span style="font-family: Courier New,Courier,monospace;"></IfModule></small> | <small style="font-family: Courier New,Courier,monospace;">LoadModule evasive20\_module /usr/lib/apache2-prefork/mod\_evasive20.so   <IfModule mod\_evasive20.c>    DOSHashTableSize 3097    DOSPageCount 5    DOSSiteCount 100    DOSPageInterval 2    DOSSiteInterval 2    DOSBlockingPeriod 600    DOSEmailNotify youremail@mail.com   </IfModule></small> |

Restart <small><span style="font-family: Courier New,Courier,monospace;">Apache2</small> either with:

| <small><span style="font-family: Courier New,Courier,monospace;">\# rcapache2 stop   <span style="font-family: Courier New,Courier,monospace;">\# rcapache2 start</small> |
|---|

or

| <small>\# /etc/init.d/apache2 restart</small> |
|---|

Mod\_evasive also deliver a sall perl script to try a DOS attack on your own webserver

| <small style="font-family: Courier New,Courier,monospace;">\# cd /usr/src/mod\_evasive   \# perl test.pl</small> |
|---|

You should read http ok but after some seconds you will only get HTTP error 403 showing that mod\_evasive is correctly running!