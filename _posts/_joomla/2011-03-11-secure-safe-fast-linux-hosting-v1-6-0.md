---
id: 6583
title: 'Secure, Safe, Fast Linux Hosting v1.6.0'
date: '2011-03-11T20:56:48+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - database
    - linux
    - multiple
    - php
    - secure
    - server
---

Here is the latest version of [my growing mind map that will help you to secure your #Linux box](images/stories/joomla/SecuritySafeFastSpeedHosting.html). While some node are clearly targeted toward [Joomla!](http://www.joomla.org/), you can still safely apply a lot of my recommendations to any LAMP (Linux, Apache, MySQL, PHP) server.

This mind map is an ongoing work, that is why it has also a version number in it (v1.6). As soon as I will learn new tricks, the mind map will be updated.

Added Crash – Kernel Panic / Password / Intrusion Detection / #Joomla! links / PHP settings / mod security

New mind map are currently in development:

- Linux Compromised Server Checklist
- Linux Server What to monitor

By clicking read more, You’ll be able to go through the checklist as text, or [download the mind map as a PDF (2MB)](/assets/images/2011/03/Secure.Safe_.Fast_.Linux_.Hosting.pdf)

- - - - - -

- Anomaly detection 
    - FAF file anomaly finder 
        - report unusual change of files
        - generates audit reports
        - [~ http://rfxnetworks.com/faf.php](http://rfxnetworks.com/faf.php)
    - [~ secheck](http://sourceforge.net/projects/secheck/)
        - secheck is a script which imitates currently existing log checkers but with a focus on security. secheck does some basic system security checking, then emails to output to a given user.
            
            openBSD scripts
            
            run opensuse/debian also
            
            use YaST to install
    - antivirus 
        - virus database update auto in crontab
        - FREE for personal use 
            - avg 8.5 
                - can NOT remove virus just report
                - command 
                    - avgscan /
                - [~ download](http://free.avg.com/gb-en/download)
            - Clamav
            - [~ F-PROT](http://www.f-prot.com/)
                - [~ download](http://www.f-prot.com/download/trial_forms/linux-ws-tgz.html)
                - command 
                    - fpscan -a -b -y -s 4 /
    - server health 
        - [~ http://www.rfxnetworks.com/sim.php](http://www.rfxnetworks.com/sim.php)
            - get emails, cpu memory status
            - restart if need some components
            - read more HERE
- More security 
    - Apache 
        - modules 
            - mod\_evasive 
                - escape denial of service attack
                - limit number of requests per seconds for an IP
                - [~ read more HERE](https://waltercedric.com/new/?p=2688)
            - mod\_security 
                - WAF kind of software firewall
                - based on regular expressions analyse requests and responses and block if needed
                - predifined rulesets 
                    - [~ www.gotroot.com](http://www.gotroot.com)
                    - [~ www.modsecurity.org](http://www.modsecurity.org)
                - you must fake apache signature: NOYB 
                    - none of your business
                - [~ read more HERE](https://waltercedric.com/new/?p=2687)
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
            - golden rule: less code less vulnerability 
                - vi /etc/sysconfig/apache2
        - server-tuning.conf 
            - tuning 
                - worker is better but only if php fastcgi as mod\_php not multithreaded
                - forked with mod\_php, use more memory
            - use threading model not forked 
                - only with php fastcgi
        - http.conf tuning 
            - set 
                - Timeout 20
                - KeepAliveTimeout 2
                - HostnameLookups off
                - KeepAlive Off
            - [~ more? google](http://www.google.com/search?hl=en&q=httpd.conf+tuning&btnG=Search&aq=f&aqi=&aql=&oq=&gs_rfai=)
        - htaccess 
            - in some directory
            - not really secure
    - file system 
        - correct owner and group 
            - example: user cedric in group www-data
        - Use ONLY Correct permissions 
            - the less right the better 
                - 0600 PHP Scripts   
                    0755 Non-PHP Scripts (\*.cgi, \*.pl, \*.pm, \*.py, \*.e)   
                    0644 Non-Script Files (Images, CSS, HTML, Templates, Etc)   
                    0755 All Folders (Any folder you would find below public\_html)
            - NEVER chmod 777
            - fix permissions automatically 
                - files 
                    - alias fixpermF=’find . -type f -exec chmod 644 {} ;’
                - directories 
                    - alias fixpermD=’find . -type d -exec chmod ago=+rx {} ;’
                - if stable (just db changes, images), make it read only in httpdocs 
                    - find . -type f -exec chmod 444 {} ; find . -type d -exec chmod 555 {} ;
        - Apache must refuse acccess to files with too much permissions
        - Searching for modified files on the server 
            - check files permissions often
            - use FAF file anomaly finder
    - passwords 
        - NEVER EVER REUSE ANY PASSWORD 
            - passwords
                
                MUST BE UNIQUE
                
                per services, functions
                
                
                - ex: mysql password = ftp password = joomla! password
        - not human readable + not based on dictionnary
        - generate them at least 128 bits with all character 
            - [~ see KEEPAS or equivalent for maintaining](http://keepass.info/)
            - Ex: -S=,b5BOr%:JDWTp6Gs%na
            - Use Upper-Case+Lower-Case+Digits+Minus+Underline+Special
            - At least 22 characters!
    - PHP 
        - compile your own php 
            - use hardened PHP patch 
                - [~ http://www.hardened-php.net/](http://www.hardened-php.net/)
            - remove unused library
        - Do not use PHP4, end of life since 2008!
        - php.ini 
            - register\_globales = off
            - allow\_url\_fopen = off
            - file\_uploads = off
            - display\_errors = off
            - expose\_php = Off 
                - ; Decides whether PHP may expose the fact that it is installed on the server ; (e.g. by adding its signature to the Web server header). It is no security ; threat in any way, but it makes it possible to determine whether you use PHP ; on your server or not.
            - disable SAFE\_MODE
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
                        - ubuntu /var/www/vhosts:/tmp
                        - opensuse /srv/www/vhosts:/tmp
                - example 
                    - disable\_functions = system, exec, shell\_exec, passthru, set\_time\_limit, error\_log, ini\_alter, dl, pfsockopen, openlog, syslog, readlink, symlink, link, leak, fsockopen, popen, escapeshellcmd, apache\_child\_terminate apache\_get\_modules, apache\_get\_version, apache\_getenv, apache\_note,apache\_setenv,virtual, proc\_open, phpinfo, passthru, show\_source
- Keep system secured 
    - Limit access 
        - ssh 
            - only public private key login
            - monitor brute force attempt with sshdfilter 
                - [~ http://www.csc.liv.ac.uk/~greg/sshdfilter/](http://www.csc.liv.ac.uk/~greg/sshdfilter/)
    - Block access 
        - firewall 
            - A Stateful Packet Inspection (SPI) firewall, Login/Intrusion Detection and Security application
            - CSF 
                - [~ http://www.configserver.com/cp/csf.html](http://www.configserver.com/cp/csf.html)
                - [~ read more HERE](https://waltercedric.com/new/?p=3019)
        - block ftp server 
            - use secure copy instead 
                - [~ winscp](http://winscp.net)
    - Maintenance policy 
        - Keep all softwares always up to date 
            - linux rpm package
            - PHP
            - MYSQL
            - as root 
                - debian 
                    - apt-get update
                - opensuse 
                    - zypper up
                - redhat 
                    - yum update
    - Monitoring
- Getting more Speed 
    - Iterative process 
        - fix objectives 
            - so many readonly users in system
            - so many registered users open sessions
            - best response time X in seconds
        - load system 
            - record testcases
            - Apache JMETER 
                - create virtual users to simulate load
        - measures 
            - quality!
            - better
            - worse 
                - rollback changes
        - small changes 
            - first software changes, you can win a lot there and its cheap
            - last infrastructure changes
            - you may want to increase server memory 
                - cheap today
                - may work
    - software changes 
        - Apache 
            - reduce DNS lookup
            - modules 
                - mod\_deflate 
                    - PHP can also zip response but not very efficient
                    - cpu cost vs bandwidth
                    - [~ read more HERE](https://waltercedric.com/new/?p=2890)
                - mod\_expires 
                    - set expire header on files, pics, js
                    - tell the browser to not request file before xx days/months
                    - [~ read more HERE](https://waltercedric.com/new/?p=3063)
                    - apache mod\_expires.conf
                - mod\_header 
                    - apache mod\_header.conf
                - mod\_pagespeed 
                    - optimize HTML on the fly and save in a cache
                    - apply most of Yahoo YSLOW rules automatically
                    - avoid optimizing manually Joomla! Drupal, WordPress sites
                    - [~ read more HERE](http://code.google.com/speed/page-speed/)
            - hotlinking 
                - disable cpu, bandwidth stealing
                - [~ read more HERE](https://waltercedric.com/new/?p=4011)
        - PHP 
            - Install PHP Opcode cache 
                - file based
                - memory based 
                    - APC 
                        - advanced PHP cache
                        - use by wikipedia
                        - 100% more output speed
                        - [~ read more HERE](https://waltercedric.com/new/?p=3020)
        - Mysql 
            - configuration tuning 
                - Use tuning-primer.sh 
                    - [~ read more HERE](https://waltercedric.com/new/?p=3066)
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
            - crontab 
                - optimize tables and index on purpose 
                    - per day, week
                    - mysqlcheck -op -u user\_name –all-databases
                - rebuild statistics
        - webpages 
            - less js, css, images include
            - reduce content size in xhtml 
                - space
            - use CSS-Sprite 
                - [~ use this nice tool sprite me](http://spriteme.org/)
        - [~ Best Practices for Speeding Up Your Web Site](http://developer.yahoo.com/performance/rules.html)
    - infrastructure 
        - expensive $$$$ €€€€
        - mutiple apache 
            - one tuned for static content, gif, zip, html, pdf
            - one for dynamic php, perl
        - multiple database server 
            - tuning, allocate more buffer
            - complex, costly
        - memcache
        - ideas 
            - [~ Wikipedia Architecture ](https://waltercedric.com/new/?p=3039)[~ ](https://waltercedric.com/new/?p=3037)
                
                [ebay infrastructure ](https://waltercedric.com/new/?p=3037)
                
                [~ drupal high performance forum](http://groups.drupal.org/high-performance)
        - Use CDN 
            - a network of servers containing copies of data placed at various points in a network all over the world that maximize bandwidth / speed access to the data for users
                
                are expensive but
                
                Google let you use their CDN for all AJAX library (jquery more than 80KB, mottols the same size)
                
                
                - ex: http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
                - [~ read more HERE](https://waltercedric.com/new/?p=4701)
                
                search for other “offload asset” in google
        - server settings 
            - No energy saving! 
                - some hosting provider compile their own kernel and are agressive on energy saving
                - check cpu speed 
                    - cat /proc/cpuinfo
                    - cpufreq-info
                    - check max accepted
                - full speed all the time 
                    - cpufreq-set -c 0 -d 2GHz
    - Joomla 
        - remove (deinstall) 
            - uneeded components
            - uneeded modules
            - less code less security threat more speed
        - Remove unnecessary content 
            - remove unecessary modules, plugins, components
        - use Joomla 1.5 and APC for caching 
            - alternatively use com\_pagecache
        - less rights, do not use apache user as owner, and group 
            - maintenance is difficult
        - [~ visit Joomla! performance forums](http://forum.joomla.org/viewforum.php?f=433)
    - Worth Reading 
        - [~ Best Practices for Speeding Up Your Web Site](http://developer.yahoo.com/performance/rules.html)
- Load Tests 
    - Load produce per page is based on 
        - user interaction: their speed (think time) and behaviour
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
    - Many tools on the market 
        - [~ I like webperformance suite](http://www.webperformanceinc.com/)
        - Apache JMETER is free
    - apache
- Intrusion detection 
    - crontab 
        - Possible Exploit Script Report 
            - scan files with regex after pattern
        - File Anomaly Detection 
            - generates audit reports for data matching specific characteristics
            - [~ read more HERE](https://waltercedric.com/new/?p=3025)
        - every 4 hours send an email with results to admin
    - Useful bash commands 
        - listOpenConections 
            - lsof -i
        - listinternetconnection 
            - netstat -lptu
    - Rootkit detection 
        - rkhunter 
            - check for rootkit periodically 
                - everyday at 1AM
                    
                    0 1 \* \* \* nice -n 19 /usr/local/bin/rkhunter –checkall 2>&amp;1 | mail -s “rkhunter output” youremail@gmail.com
            - too late if alarm
            - [~ read more HERE](https://waltercedric.com/new/?p=3023)
        - chkrootkit 
            - check for rootkit periodically 
                - everyday at 1AM
                - 0 1 \* \* \* nice -n 19 /sbin/chkrootkit 2>&amp;1 | mail -s “rkhunter output” youremail@gmail.com
            - too late if alarm
            - [~ read more HERE](https://waltercedric.com/new/?p=3022)
        - tripwire 
            - extreme but secure
            - hash every file on filesystem 
                - detect file tampering
            - keep hash database secure for further equality check on safe medium: NOT ON SERVER
- Backup 
    - crontab 
        - daily/weekly/monthly database backup 
            - automysqlbackup.sh 
                - create email google account
                - get an email daily of database content
                - [~ read more HERE](https://waltercedric.com/new/?p=3064)
        - tar and FTP the result
    - MySQL 
        - backup 
            - daily, weekly
            - use automysqlbackup.sh to receive daily mail with mysql data
- Crash – Kernel Panic 
    - Check Content of 
        - vi /var/log/warn
            
            
            - Look for entries that fall within the period of crashes. If entries show an incorrect software configuration, or the crash is systemically related to a service, or exhibit other unexpected behavior? If you find relevant entries that has been caused due to an incorrect software configuration, then make sure that the affected software (service / application) is configured correctly. The log files of the service or application may also contain additional information about the cause of an incorrectly configured software. If you find an entry that is provided with the classification EMERG, a system-critical event occurred. A system-critical event may be responsible for the crash of the server.
            
            Browse the messages that were
            
            logged during the last boot, for
            
            entries that point to an error.
            
            
            - dmesg | grep \[Ee\]rro
            - dmesg | grep \[Dd\]efect
            - dmesg | grep \[Ff\]aul
            - dmesg | grep \[Nn\]o
            - dmesg | grep \[Ff\]ail
            - dmesg | grep \[Ii\]ncorrect
            - dmesg | grep \[Bb\]ad