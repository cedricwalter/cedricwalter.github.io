---
id: 3776
title: 'Secure, Safe, Fast Linux Hosting v1.3.0'
date: '2008-09-15T22:01:44+02:00'
author: 'Cédric Walter'



---

This list is an ongoing work and [since the version 1.0](http://www.waltercedric.com/internet-www-mainmenu-54/313-security/1272-secure-safe-fast-linux-hosting.html) (01 March 2008), a lot of nodes/ideas have been added.

*Secure, Safe, Fast #Linux Hosting sound silly as nothing can be fast and secure at the same time, but I’ve compiled a list of things that are worth doing if you are maintaining your own server. This list is clearly targeted for people running an open source stack made of Apache, MySQL, PHP and #Linux.*

By clicking read more, You’ll be able to go through the checklist, or maybe [you’ll prefer the mindmap version HERE](images/stories/joomla/SecuritySafeFastSpeedHosting.html)

The next mind map will be a how to forensic a hacked #Linux server…

# Secure, Safe, Fast Linux Hosting v 1.3.0

- PHP settings 
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
        - example 
            - disable\_functions = system, exec, shell\_exec, passthru, set\_time\_limit, error\_log, ini\_alter, dl, pfsockopen, openlog, syslog, readlink, symlink, link, leak, fsockopen, popen, escapeshellcmd, apache\_child\_terminate apache\_get\_modules, apache\_get\_version, apache\_getenv, apache\_note,apache\_setenv,virtual, proc\_open, phpinfo, passthru, show\_source
        
        disable SAFE\_MODE
        
        compile your own php
        
        
        - use hardened PHP patch 
            - [~ http://www.hardened-php.net/ ](http://www.hardened-php.net/)
        - remove unused library
        
        expose\_php = Off
        
        
        - ; Decides whether PHP may expose the fact that it is installed on the server ; (e.g. by adding its signature to the Web server header). It is no security ; threat in any way, but it makes it possible to determine whether you use PHP ; on your server or not.
        
        display\_errors = off
        
        file\_uploads = off
        
        allow\_url\_fopen = off
        
        register\_globales = off
        
        post\_max\_size is not enabled, or is set to a high value. Allowing a large value may open up your server to denial-of-service attacks
        
        [~ check your settings with PhpSecInfo ](http://phpsec.org/projects/phpsecinfo/tests/expose_php.html)
- Check often crontab 
    - FAF file anomaly finder 
        - report change of file
        - generates audit reports
        - [~ http://rfxnetworks.com/faf.php ](http://rfxnetworks.com/faf.php)
    - chkrootkit 
        - check for rootkit periodically
        - too late if alarm
    - rkhunter 
        - check for rootkit periodically
        - too late if alarm
    - Possible Exploit Script Report 
        - scan files with regex after pattern
    - [~ secheck ](http://sourceforge.net/projects/secheck/)
        - secheck is a script which imitates currently existing log checkers but with a focus on security. secheck does some basic system security checking, then emails to output to a given user.
            
            openBSD scripts
            
            run opensuse/debian also
            
            use YaST to install
    - daily/weekly/monthly database backup 
        - create google account
        - automysqlbackup.sh
    - antivirus 
        - clamav is free
        - virus database update auto
- More security 
    - Apache 
        - mod\_security 
            - kind of software firewall
            - based on regular expressions
            - predifined rulesets 
                - www.gotroot.com
                - www.modsecurity.org
            - fake apache signature: NOYB
        - mod\_evasive 
            - escape denial of service attack
        - mod\_php 
            - to avoid 
                - php script run with apache user
                - php script can change files across clients on server
                - only one php.ini for all domains and users
                - only one php version
            - use mod\_fcgi instead 
                - php scripts run with user rights
                - per client/user/directory a php.ini
                - run php4 and php5 in same apache
                - run != php version per directory
        - remove uneeded modules 
            - less code less vulnerability
        - server-tuning.conf 
            - tuning 
                - worker is better but only if php fastcgi as mod\_php not multithreaded
                - forked with mod\_php, use more memory
            - use threading model not forked 
                - only with php fastcgi
        - http.conf 
            - switch DNS lookup off
    - file system 
        - less rights rules 
            - the less right the better 
                - Set permission to all .php files to 655
                - fix permissions automatically 
                    - files 
                        - alias fixpermF=’find . -type f -exec chmod 644 {} \\;’
                    - directories 
                        - alias fixpermD=’find . -type d -exec chmod ago=+rx {} \\;’
        - check files right often 
            - use FAF file anomaly finder
    - htaccess 
        - in some directory
        - not really secure
    - passwords 
        - not human readable
- Keep system secured 
    - ssh 
        - only public private key login
        - monitor brute force attempt with sshdfilter 
            - [~ http://www.csc.liv.ac.uk/~greg/sshdfilter/ ](http://www.csc.liv.ac.uk/%7Egreg/sshdfilter/)
    - block ftp server 
        - use secure copy instead 
            - winscp
    - firewall 
        - A Stateful Packet Inspection (SPI) firewall, Login/Intrusion Detection and Security application
        - CSF 
            - [~ http://www.configserver.com/cp/csf.html ](http://www.configserver.com/cp/csf.html)
    - keep linux rpm package up to date
    - check server health 
        - [~ http://www.rfxnetworks.com/sim.php ](http://www.rfxnetworks.com/sim.php)
        - get emails, cpu memory status
    - tripwire 
        - extreme but secure
        - hash every file on filesystem 
            - detect file tampering
        - keep hash database secure for further equality check on safe medium
- Getting more Speed 
    - Install PHP Opcode cache 
        - file based
        - memory based
        - APC 
            - advanced PHP cache
            - use by wikipedia
            - 100% more output speed
    - reduce DNS lookup 
        - less js, css, images include
        - mod\_deflate 
            - PHP can also zip response 
                - cpu cost vs bandwidth
        - mod\_expires 
            - set expire header on files, pics, js
            - tell the browser to not request file before xx days/months
    - infrastructure 
        - mutiple apache 
            - one tuned for static content, gif, zip, html, pdf
            - one for dynamic php, perl
        - multiple database server 
            - tuning, allocate more buffer
            - complex, costly
        - memcache
        - ideas 
            - [~ Wikipedia Architecture ](http://www.waltercedric.com/internet-www-mainmenu-54/345-performances/1196-wikipedia-architecture-and-scalability.html)[~](http://www.waltercedric.com/internet-www-mainmenu-54/345-performances/1195-ebay-architecture-scalability.html)
                
                ebay infrastructure
    - put more memory in server
- Load Tests 
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
        - [~ I like webperformance suite ](http://www.webperformanceinc.com/)
    - apache
- MySQL 
    - tuning 
        - Use tuning-primer.sh 
            - [~ read more HERE ](http://www.waltercedric.com/internet-www-mainmenu-54/348-mysql/1214-optimizing-mysql-with-tuning-primersh.html)
        - buffer, settings in my.ini
        - allocate more buffer to select, join, sort operations
        - use innodb engine (transactionnal row locking) where it make sense per table
        - prefer myIsam (transactional table locking)
        - use memory base table for sessions tables
    - monitoring 
        - look at slow queries
        - quality of schema, index missing 
            - use explain query
        - look at full table scan 
            - use explain query 
                - add index
    - backup 
        - daily, weekly
        - use automysqlbackup.sh to receive daily mail with mysql data
- Joomla 
    - remove uneeded components
    - use Joomla 1.5 and APC for caching 
        - alternatively use com\_pagecache
    - less rights, do not use apache user as owner, and group 
        - maintenance is difficult

- 