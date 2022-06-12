---
id: 6560
title: 'Mod-Evasive and Ubuntu 10.04 LTS'
date: '2011-02-28T20:13:06+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6560'

---

> <big>What is mod\_evasive?</big>
> 
> [mod\_evasive](http://www.zdziarski.com/blog/?page_id=442) is an evasive maneuvers module for Apache to provide evasive action in the event of an HTTP DoS or DDoS attack or brute force attack. It is also designed to be a detection and network management tool, and can be easily configured to talk to ipchains, firewalls, routers, and etcetera. mod\_evasive presently reports abuses via email and syslog facilities.
> 
> Detection is performed by creating an internal dynamic hash table of IP Addresses and URIs, and denying any single IP address from any of the following:
> 
> - Requesting the same page more than a few times per second
> - Making more than 50 concurrent requests on the same child per second
> - Making any requests while temporarily blacklisted (on a blocking list)

## Installation

```
apt-get install libapache2-mod-evasive mkdir /var/log/apache2/mod_evasive chown www-data:www-data /var/log/apache2/mod_evasive
```

## Configuration

Create a new file

```
vi /etc/apache2/conf.d/01_modevasive.conf
```

with this content

```
<ifmodule mod_evasive20.c>  DOSHashTableSize 3097  DOSPageCount 2  DOSSiteCount 50  DOSPageInterval 1  DOSSiteInterval 1  DOSBlockingPeriod 10  DOSLogDir /var/log/apache2/mod_evasive  DOSEmailNotify root@localhost  DOSWhitelist 127.0.0.1 </ifmodule>
```

Restart Apache to activate the new module

```
/etc/init.d/apache2 restart
```

### Documentation

- DOSHashTableSize: Size of the hash table used to store the IPs.
- DOSPageCount: Number of pages allowed per DOSPageInterval.
- DOSPageInterval: Time in seconds used by DOSPageCount.
- DOSSiteCount: Number of objects allowed per DOSSiteInterval.
- DOSSiteInterval: Time in seconds used by DOSSiteCount.
- DOSBlockingPeriod: Time in seconds that IPs will be banned. If an IP tries to access the server within this period, the count will be restarted.
- DOSLogDir: Optional. Directory to store the logs. If not specified, /tmp will be used.
- DOSEmailNotify: Optional. Mail where notifications will be sent.

DOSSystemCommand: is Optional. Command to execute if an IP is blocked. For example using iptables:

```
DOSSystemCommand "/sbin/iptables -I INPUT -p tcp --dport 80 -s %s -j DROP"
```