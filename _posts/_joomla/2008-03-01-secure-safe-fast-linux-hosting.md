---
id: 3222
title: 'Secure, Safe, Fast Linux Hosting'
date: '2008-03-01T19:00:52+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3222'

---

I know that Secure, Safe, Fast #Linux Hosting sound silly as nothing can be fast and secure at the same time, but I’ve compiled a list of things that are worth doing if you are maintaining your own server. This list is clearly targeted for people running an open source stack made of Apache, MySQL, PHP and #Linux.

This list is an ongoing work, thta is why it has also a version number in it (v1.0). As soon as I will learn new tricks, the list will be updated.

By clicking read more, You’ll be able to go through the checklist, or maybe [you’ll prefer the mindmap version HERE](images/stories/joomla/SecuritySafeFastSpeedHosting.html)

Secure, Safe,  
Fast Linux Hosting

v 1.0

- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">PHP settings
    - disable functions 
        - show\_source
        - system
        - popen
        - proc\_open
        - phpinfo 
            - dont give info to outside world
        - exec
        - passthru
        - shell\_exec
        - file\_open\_base 
            - set to http root to avoid path transversal attack
    - disable SAFE\_MODE
    - compile your own php 
        - use hardened PHP patch 
            - [<span class="l">~ http://www.hardened-php.net/ ](http://www.hardened-php.net/)
        - remove unused library
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">Check often crontab
    - FAF file anomaly finder 
        - report change of file
        - generates audit reports
        - [<span class="l">~ http://rfxnetworks.com/faf.php ](http://rfxnetworks.com/faf.php)
    - chkrootkit 
        - check for rootkit periodically
        - too late if alarm
    - rkhunter 
        - check for rootkit periodically
        - too late if alarm
    - Possible Exploit Script Report 
        - scan files with regex after pattern
    - secheck 
        - openBSD scripts
        - run opensuse/debian also
    - daily/weekly/monthly database backup 
        - create google account
        - automysqlbackup.sh
    - antivirus 
        - clamav is free
        - virus database update auto
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">More security
    - <span style="color: #cc3300; font-family: SansSerif,sans-serif; font-weight: bold;">Apache
        - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">mod\_security
            - kind of software firewall
            - based on regular expressions
            - predifined rulesets 
                - www.gotroot.com
                - www.modsecurity.org
            - fake apache signature: NOYB
        - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">mod\_evasive
            - escape denial of service attack
        - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">mod\_php
            - to avoid 
                - php script run with apache user
                - php script can change files across clients on server
                - only one php.ini for all domains and users
                - only one php version
            - use mod\_fcgi instead 
                - php scripts run with user right
                - per client/user a php.ini
                - run php4 and php5 in same apache
                - run != php version per directory
        - remove uneeded modules
        - server-tuning.conf 
            - tuning 
                - worker is better but only if php fastcgi as mod\_php not multithreaded
                - forked with mod\_php, use more memory
            - use threading model not forked 
                - only with php fastcgi
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">file system
        - less rights rules 
            - the less right the better
        - check files right often
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">htaccess
        - in some directory
        - not really secure
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">passwords
        - not human readable
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">Keep system secured
    - ssh 
        - only public private key login
        - monitor brute force attempt with sshdfilter 
            - [<span class="l">~ http://www.csc.liv.ac.uk/~greg/sshdfilter/ ](http://www.csc.liv.ac.uk/%7Egreg/sshdfilter/)
    - block ftp server 
        - use secure copy instead 
            - winscp
    - firewall 
        - A Stateful Packet Inspection (SPI) firewall, Login/Intrusion Detection and Security application
        - CSF 
            - [<span class="l">~ http://www.configserver.com/cp/csf.html ](http://www.configserver.com/cp/csf.html)
    - <span style="color: #cc3300; font-family: SansSerif,sans-serif; font-weight: bold;">keep linux rpm package up to date
    - check server health 
        - [<span class="l">~ http://www.rfxnetworks.com/sim.php ](http://www.rfxnetworks.com/sim.php)
        - get emails, cpu memory status
    - tripwire 
        - extreme but secure
        - hash very file on filesystem
        - keep hash database secure for further equality check on safe medium
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">Getting more Speed
    - Install PHP Opcode cache 
        - file based
        - memory based
        - APC 
            - advanced PHP cache
            - use by wikipedia
            - 100% more output speed
    - reduce DNS lookup 
        - less js, css, images include
        - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">mod\_deflate
            - PHP can also zip response 
                - cpu cost vs bandwidth
        - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">mod\_expires
            - set expire header on files, pics, js
            - tell the browser to not request file before xx days/months
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">infrastructure
        - mutiple apache 
            - one tuned for static content, gif, zip, html, pdf
            - one for dynamic php, perl
        - multiple database server 
            - tuning, allocate more buffer
            - complex, costly
        - memcache
        - ideas 
            - [<span class="l">~ Wikipedia Architecture ](https://waltercedric.com/new/?p=3039)
                
                [<span class="l">~](https://waltercedric.com/new/?p=3037)
                
                ebay infrastructure
    - <span style="color: #cc3300; font-size: 116%; font-family: SansSerif,sans-serif; font-weight: bold;">put more memory in server
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">Load Tests
    - Load produce per page is based on 
        - user interaction: their speed and behaviour
        - size of page 
            - number of static element 
                - images
                - css
                - files
                - DNS lookup for external embeded file
            - business logic
            - shared ressource 
                - database access
            - quality of schema, index missing
    - Use a tool to create virtual users 
        - fix objectives 
            - so many xxxxx users in system
            - so many open sessions
            - best response time
        - iterative process
        - small changes
        - load system 
            - better
            - worse 
                - rollback changes
    - Many tools on the market 
        - [<span class="l">~ I like webperformance suite ](http://www.webperformanceinc.com/)