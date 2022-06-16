---

title: 'Secure, Safe, Fast Linux Hosting v1.4.0'
date: '2008-11-02T21:39:24+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/11/mindmap.png
---

This list is an ongoing work and [since the version 1.0](http://www.waltercedric.com/internet-www-mainmenu-54/313-security/1272-secure-safe-fast-linux-hosting.html) (01 March 2008), a lot of nodes/ideas and now links have been added. The tree is also now a lot more structured…

*Secure, Safe, Fast #Linux Hosting sound silly as nothing can be fast and secure at the same time, but I’ve compiled a list of things that are worth doing if you are maintaining your own server. This list is clearly targeted for people running an open source stack made of Apache, MySQL, PHP and #Linux.*

By clicking read more, You’ll be able to go through the checklist as HTML, or maybe [you’ll prefer the mindmap version HERE](images/stories/joomla/SecuritySafeFastSpeedHosting.html)

[![mindmap](/assets/images/2008/11/mindmap.png)](images/stories/joomla/SecuritySafeFastSpeedHosting.html)

powered by [Freemind, free mind mapping](http://freemind.sourceforge.net/wiki/index.php/Main_Page)

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
        - clamav is free
        - virus database update auto in crontab
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
                - [~ read more HERE](http://www.waltercedric.com/internet-www-mainmenu-54/313-security/1008-modevasive-howto-step-by-step.html)
            - mod\_security 
                - kind of software firewall
                - based on regular expressions
                - predifined rulesets 
                    - [~ www.gotroot.com](http://www.gotroot.com)
                    - [~ www.modsecurity.org](http://www.modsecurity.org)
                - fake apache signature: NOYB
                - [~ read more HERE](http://www.waltercedric.com/internet-www-mainmenu-54/313-security/1007-adding-modsecurity-to-better-protect-your-webserver.html)
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
        - server-tuning.conf 
            - tuning 
                - worker is better but only if php fastcgi as mod\_php not multithreaded
                - forked with mod\_php, use more memory
            - use threading model not forked 
                - only with php fastcgi
        - http.conf 
            - switch DNS lookup off
        - htaccess 
            - in some directory
            - not really secure
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
    - passwords 
        - not human readable
        - generate them at least 128 bits with all character 
            - see KEEPAS or equivalent for
    - PHP 
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
        - disable SAFE\_MODE
        - compile your own php 
            - use hardened PHP patch 
                - [~ http://www.hardened-php.net/](http://www.hardened-php.net/)
            - remove unused library
        - expose\_php = Off 
            - ; Decides whether PHP may expose the fact that it is installed on the server ; (e.g. by adding its signature to the Web server header). It is no security ; threat in any way, but it makes it possible to determine whether you use PHP ; on your server or not.
        - display\_errors = off
        - file\_uploads = off
        - allow\_url\_fopen = off
        - register\_globales = off
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
                - read more HERE
        - block ftp server 
            - use secure copy instead 
                - winscp
    - Maintenance policy 
        - always up to date 
            - linux rpm package
            - PHP
            - MYSQL
    - Monitoring
- Getting more Speed 
    - Iterative process 
        - fix objectives 
            - so many xxxxx users in system
            - so many open sessions
            - best response time
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
            - first software changes
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
                    - [~ read more HERE](http://www.waltercedric.com/internet-www-mainmenu-54/329-apache/1121-speed-up-your-apache-server-with-moddeflate.html)
                - mod\_expires 
                    - set expire header on files, pics, js
                    - tell the browser to not request file before xx days/months
                    - [~ read more HERE](http://www.waltercedric.com/internet-www-mainmenu-54/329-apache/1212-how-to-speed-cms-like-joomla.html)
        - PHP 
            - Install PHP Opcode cache 
                - file based
                - memory based
                - APC 
                    - advanced PHP cache
                    - use by wikipedia
                    - 100% more output speed
                    - [~ read more HERE](http://www.waltercedric.com/internet-www-mainmenu-54/341-php/1181-apc-install-howto.html)
        - Mysql 
            - tuning 
                - Use tuning-primer.sh 
                    - [~ read more HERE](http://www.waltercedric.com/internet-www-mainmenu-54/348-mysql/1214-optimizing-mysql-with-tuning-primersh.html)
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
                - rebuild statistics
        - webpages 
            - less js, css, images include
            - reduce content size 
                - space
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
            - [~ Wikipedia Architecture ](http://www.waltercedric.com/internet-www-mainmenu-54/345-performances/1196-wikipedia-architecture-and-scalability.html)[~ ](http://www.waltercedric.com/internet-www-mainmenu-54/345-performances/1195-ebay-architecture-scalability.html)
                
                ebay infrastructure
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
    - Many tools on the market 
        - [~ I like webperformance suite](http://www.webperformanceinc.com/)
        - Apache JMETER is free
    - apache
- Joomla 
    - remove uneeded components
    - use Joomla 1.5 and APC for caching 
        - alternatively use com\_pagecache
    - less rights, do not use apache user as owner, and group 
        - maintenance is difficult
- Intrusion detection 
    - crontab 
        - Possible Exploit Script Report 
            - scan files with regex after pattern
        - rkhunter 
            - check for rootkit periodically
            - too late if alarm
        - chkrootkit 
            - check for rootkit periodically
            - too late if alarm
        - every 4 hours send an email with results to admin
        - File Anomaly Detection
    - tripwire 
        - extreme but secure
        - hash every file on filesystem 
            - detect file tampering
        - keep hash database secure for further equality check on safe medium
- Backup 
    - crontab 
        - daily/weekly/monthly database backup 
            - automysqlbackup.sh 
                - create email google account
                - get an email daily of database content
        - tar and FTP the result
    - MySQL 
        - backup 
            - daily, weekly
            - use automysqlbackup.sh to receive daily mail with mysql data