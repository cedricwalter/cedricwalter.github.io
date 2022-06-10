---
id: 6558
title: 'ModSecurity WAF and Ubuntu 10.04 LTS'
date: '2011-02-28T20:03:40+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6558'
permalink: /linux/modsecurity-waf-and-ubuntu-10-04-lts/
image: /wp-content/uploads/2006/08/mod_security.gif
---

![](/assets/images/2006/08/mod_security.gif)I was unable to Install properly OpenSuSE 11.3 with Plesk 10.1.1. This has forced me to install #Ubuntu 10.04 LTS and since then also to (re)learn some basic stuff to secure my #Linux server. Here are some of my How-To.

> [ModSecurity](http://www.modsecurity.org/) is an open source web application firewall (WAF) engine for Apache that is developed by Trustwave’s SpiderLabs. It has a robust event-based programming language which provides protection from a range of attacks against web applications and allows for HTTP traffic monitoring, logging and real-time analysis. With over 10,000 deployments world-wide, [ModSecurity](http://www.modsecurity.org/) is the most widely deployed WAF in existence.

## Install

Using the package manager

```
apt-get -y install libapache-mod-security
```

## Configure

These are some directories that are needed by [ModSecurity](http://www.modsecurity.org/) to work properly. Run all these commands before continuing:

```
chown www-data.www-data /var/asl/data/msa chown www-data.www-data /var/asl/data/audit chown www-data.www-data /var/asl/data/suspicious chmod o-rx -R /var/asl/data/* chmod ug+rwx -R /var/asl/data/*  mkdir /var/asl/updates mkdir /var/asl/rules/ mkdir /var/asl/rules/clamav
```

## Initial setup 

Create a new File

```
vi /etc/apache2/conf.d/00_modsecurity.conf
```

And put inside

```
<ifmodule mod_security2.c> Include /etc/apache2/modsecurity.d/modsecurity_crs_10_config.conf </ifmodule>
```

Then create new directory that will contains mod security rules

```
mkdir /etc/apache2/modsecurity.d/ vi /etc/apache2/modsecurity.d/modsecurity_crs_10_config.conf
```

Content of file modsecurity\_crs\_10\_config.conf

Some default values to hide the server name and signature

```
 ServerTokens Prod  ServerSignature Off  TraceEnable Off   SecRuleEngine On  SecRequestBodyAccess On  SecResponseBodyAccess On  SecResponseBodyMimeType (null) text/html text/plain text/xml  SecResponseBodyLimit 2621440  SecServerSignature Apache  SecComponentSignature 200911012341  SecUploadDir /var/asl/data/suspicious  SecUploadKeepFiles Off  SecAuditEngine RelevantOnly  SecAuditLogRelevantStatus "^(?:5|4(?!04))"  SecAuditLogType Concurrent  SecAuditLog logs/audit_log  SecAuditLogParts ABIFHZ  SecArgumentSeparator "&"  SecCookieFormat 0  SecRequestBodyInMemoryLimit 131072  SecDataDir /var/asl/data/msa  SecTmpDir /tmp  SecAuditLogStorageDir /var/asl/data/audit  SecResponseBodyLimitAction ProcessPartial   Include /etc/apache2/modsecurity.d/gotroot/*asl*.conf
```

## Getting Initial set of rules from Gotroot

Run these commands to install the latest free but delayed set of [ModSecurity](http://www.modsecurity.org/) Rules from [GotRoot.com](http://gotroot.com)

The last command restart apache,

```
cd /etc/apache2/modsecurity.d/gotroot wget http://updates.atomicorp.com/channels/rules/delayed/modsec-2.5-free-latest.tar.gz tar zxvf modsec-2.5-free-latest.tar.gz mv modsec/* . /etc/init.d/apache2 restart
```

Watch your logs to see if you have some warning/error like these. This is confirming that [ModSecurity](http://www.modsecurity.org/) is working as expected

```
[Mon Feb 28 20:52:45 2011] [error] [client 195.8.45.152] 

ModSecurity: Warning. CC# match "\\d{13,16}" at RESPONSE_BODY. 

[offset "15816"] [file "/etc/apache2/modsecurity.d/gotroot/11_asl_data_loss.conf"]

 [line "33"] [id "340838"] [rev "2"] 

[msg "Atomicorp.com - FREE UNSUPPORTED DELAYED FEED - WAF Rules:  

Potential credit card number detected in output (not blocked)"] 
```

You can always get new rules by visiting <http://updates.atomicorp.com/channels/rules/delayed/>