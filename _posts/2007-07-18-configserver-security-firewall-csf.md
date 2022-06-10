---
id: 3019
title: 'ConfigServer Security &#038; Firewall (csf)'
date: '2007-07-18T23:41:01+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3019'
permalink: /security/configserver-security-firewall-csf/
tags:
    - security
---

[CSF ](http://www.configserver.com/cp/csf.html): A Stateful Packet Inspection (SPI) firewall, Login/Intrusion Detection and Security application for #Linux servers. It easily replace APF and (Advanced policy firewall) and BFD (Brute Force Detection). It is also runing 28 [basics but non obvious checks](http://www.thealders.net/blogs/2007/01/17/server-hardening/)…

  CSF has a loot of functionnalities and has 2 nice features. It can block trafic from well known spammers network  
 using the [DShield Block List](http://www.dshield.org/block_list_info.php) and the [Spamhaus DROP List.](http://www.spamhaus.org/drop/index.lasso)  
 It easily replace APF and (Advanced policy firewall) and BFD (Brute Force Detection).

- Straight-forward SPI iptables firewall script
- Daemon process that checks for login authentication failures for: 
    - courier imap and pop3
    - ssh
    - non-ssl cpanel / whm / webmail (cPanel servers only)
    - pure-pftd
    - password protected web pages (htpasswd)
    - mod\_security failures
- POP3/IMAP login tracking to enforce logins per hour
- SSH login notification
- SU login notification
- Excessive connection blocking
- WHM configuration interface (cPanel servers only) or through Webmin
- WHM iptables report log (cPanel servers only)
- Easy upgrade between versions from within WHM (cPanel servers only) or through Webmin
- Easy upgrade between versions from shell
- A standard Webmin Module to configure csf is included in the distribution ready to install into Webmin – csfwebmin.tgz
- Pre-configured to work on a cPanel server with all the standard cPanel ports open (cPanel servers only)
- Auto-configures the SSH port if it’s non-standard on installation
- Block traffic on unused server IP addresses – helps reduce the risk to your server
- Alert when end-user scripts sending excessive emails per hour – for identifying spamming scripts
- Suspicious process reporting – reports potential exploits running on the server
- Excessive user processes reporting
- Excessive user process usage reporting and optional termination
- Suspicious file reporting – reports potential exploit files in /tmp and similar directories
- Directory and file watching – reports if a watched directory or a file changes
- Block traffic on the [DShield Block List](http://www.dshield.org/block_list_info.php) and the [Spamhaus DROP List](http://www.spamhaus.org/drop/index.lasso)
- Pre-configured settings for Low, Medium or High firewall security (cPanel servers only)
- Works with multiple ethernet devices
- Server Security Check – Performs a basic security and settings check on the server (cPanel servers only)
- Allow Dynamic DNS IP addresses – always allow your IP address even if it changes whenever you connect to the internet
- Alert sent if server load average remains high for a specified length of time
- mod\_security log reporting (if installed)
- Email relay tracking – tracks all email sent through the server and issues alerts for excessive usage (cPanel servers only)
- IDS (Intrusion Detection System) – the last line of detection alerts you to changes to system and application binaries

 Installation is straightforward:  
 `

 # wget http://www.configserver.com/free/csf.tgz

 # tar xvf csf.tgz 

 # cd csf

 # ./install.sh

`   
 Note all ports that are displayed after the installation, these are port running already on your system (UDP, TCP in and out)  
 review the config file by editing:

` # vi /etc/csf/csf.conf

`  
 and add at least the port written before (if you trsut your system before install ;-))  
 Do not allow incoming connection or outgoing connections to mysql port (use ssh localforwarding), ftp (use scp)  
 As default the rules are only working 5 minutes then get erased. This is the learnig mode, you cant break anything. Just continue reading the file `csf.conf` It contains a lot of interesting informations…