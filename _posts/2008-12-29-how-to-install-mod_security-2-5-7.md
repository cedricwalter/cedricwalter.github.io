---
id: 3998
title: 'How to install mod_security 2.5.7'
date: '2008-12-29T13:30:35+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3998'
permalink: /development/how-to-install-mod_security-2-5-7/
image: /wp-content/uploads/2006/08/mod_security.gif
---

| ![](/assets/images/2006/08/mod_security.gif) | ModSecurity<sup>TM</sup> is an open source intrusion detection and prevention engine for web applications (or a web application firewall). Operating as an Apache Web server module or standalone, the purpose of ModSecurity is to increase web application security, protecting web applications from known and unknown attacks. from <http://www.modsecurity.org/> |
|---|---|

You’ll have to create a free account at <https://bsn.breach.com> to get the real link

\# cd   
\# wget [https://bsn.breach.com/downloads/t=5156aa8803d6f186cf38688be522a402/modsecurity-apache/modsecurity-apache\_2.5.7.tar.gz](https://bsn.breach.com/downloads/t=5156aa8803d6f186cf38688be522a402/modsecurity-apache/modsecurity-apache_2.5.7.tar.gz)   
\# tar -zxfv modsecurity-apache\_2.5.7.tar.gz   
\# cd modsecurity-apache\_2.5.7/apache2   
\# ./configure   
\# make

**Copy the library mod\_security2.so to /usr/lib/apache2**

*\# cp /root/modsecurity-apache\_2.5.7/apache2/.libs/mod\_security2.so /usr/lib/apache2/mod\_security2.so*

**Then copy all latest rules into apache2/conf.d folder**

*\# cp -r /root/modsecurity-apache\_2.5.7/rules/etc/apache2/conf.d/*

**Copy the minimal configuration file into apache2/conf.d folder**

*\# cp /root/modsecurity-apache\_2.5.7/modsecurity.conf-minimal /etc/apache2/conf.d/modsecurity2.conf*

**Add this line at the top of modsecurity2.conf**

*LoadModule security2\_module /usr/lib/apache2/mod\_security2.so*

**Restart apache2 by executing**

*\# rcapache2 restart*

**Verify proper operations by looking at log files**

*\# tail -f /var/log/apache2/modsec\_debug\_log*

**Attention this is my location for log files!**

Change

- audit log location line 191
- debug log location line 285

in */etc/apache2/conf.d/rules/modsecurity\_crs\_10\_config.conf*