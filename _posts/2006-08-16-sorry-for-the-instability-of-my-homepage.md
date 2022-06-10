---
id: 2681
title: 'Sorry for the instability of my homepage'
date: '2006-08-16T18:16:32+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2681'
permalink: /internet/sorry-for-the-instability-of-my-homepage/
header:
  teaser: /assets/images/2004/11/homer_simpson_404.gif
tags:
    - apache
    - art
    - attack
    - break
    - character
    - characters
    - client
    - code
    - community
    - concepts
    - deactivate
    - demo
    - homepage
    - linux
---

My Homepage is highly instable, I need to reboot the server manually 2 times a day, it has run monthly without any issues, the last reboot was 2 weeks ago, but things get worse.

I have frequently mos\_sessions corrupted, mysql die sometimes, my plesk panel is no more available and so on…  
While I am still looking in logs file what it could be (ports scan? root kit? denial of service), here is what I plan to do in the next days (I will be in holidays).  
The load is huge 100.000 users per months compare to january (4000 users per months) but it should not bring an opteron 1GB down… (Server MR2 from [Strato.de](http://www.strato.de))

1. MySQL is already using an optimized my.ini for the SEO openSEF.org engine  
    | \# The following options will be passed to all MySQL clients   \[client\]   port = 3306   socket = /var/lib/mysql/mysql.sock \# The MySQL server   \[mysqld\]   port = 3306   \#socket = /var/lib/mysql/mysql.sock   \#skip-locking   \#skip-innodb   max\_connections = 500   key\_buffer = 150M   max\_allowed\_packet = 16M   table\_cache = 1500   sort\_buffer\_size = 512K   net\_buffer\_length = 8K   read\_buffer\_size = 256K   read\_rnd\_buffer\_size = 512K   myisam\_sort\_buffer\_size = 64M   join\_buffer\_size = 1M   read\_buffer\_size = 1M   sort\_buffer\_size = 1M   thread\_cache\_size = 128   wait\_timeout = 14400   connect\_timeout = 10   max\_connect\_errors = 10   query\_cache\_limit = 1M   query\_cache\_size = 32M   query\_cache\_type = 1   thread\_concurrency=4  server-id = 1  \# The safe\_mysqld script   \[mysqld\_safe\]   open\_files\_limit = 8192   err-log=/var/lib/mysql/mysqld.log  \[mysqldump\]   quick   max\_allowed\_packet = 16M  \[mysqlimport\]   local = 1  \[mysql\]   no-auto-rehash   \# Remove the next comment character if you are not familiar with SQL   \#safe-updates  \[isamchk\]   key\_buffer = 20M   sort\_buffer\_size = 20M   read\_buffer = 2M   write\_buffer = 2M  \[myisamchk\]   key\_buffer = 64M   sort\_buffer = 64M   read\_buffer = 16M   write\_buffer = 16M  \[mysqlhotcopy\]   interactive-timeout |
    |---|
2. I switch the SEO [OpenSEF.org](http://open-sef.org/) engine OFF 5 minutes ago (I was having 9500 DB based rewriting rules), the site is now lightning fast…
3. I am looking in logs files, hacker are not all so smarter and I should see something there… (or at least now anyone can run a botnet and use penetration software without knowing how it works)
4. I may deactivate some subdomains to better determine if it is a software bug or an attack on one of my subdomains: my [Wiki](http://wiki.waltercedric.com), [Forums](http://forums.waltercedric.com), [Demo](http://demo.waltercedric.com), [Demo2](http://demo2.waltercedric.com), [Shop](http://shop.waltercedric.com)
5.Server hardening #1: I will update the server with Yast (Package manager of SuSE) and set auto update
6.Server hardening #2: I will launch one more time [chkrootkit](http://www.chkrootkit.org/)  
    [chkrootkit](http://www.chkrootkit.org/) is a tool to locally check for signs of a rootkit (“Root Kits” is the art of hiding files/directories/processes after a server/desktop break-in….)  
    and  
    [rkhunter](http://www.rootkit.nl/): Open-source GPL rootkit scanner for Unix-like systems. Scans for rootkits, trojans, backdoors and local exploits.
7.Server hardening #3: either install SELinux (Security-enhanced #Linux)  
    [Security-enhanced #Linux ](http://www.nsa.gov/selinux/)is a research prototype of the #Linux® kernel and a number of utilities with enhanced security functionality designed simply to demonstrate the value of mandatory access controls to the #Linux community and how such controls could be added to #Linux. The Security-enhanced #Linux kernel contains new architectural components originally developed to improve the security of the Flask operating system. These architectural components provide general support for the enforcement of many kinds of mandatory access control policies, including those based on the concepts of Type Enforcement®, Role-based Access Control, and Multi-level Security.  
    <span style="font-style: italic; font-weight: bold;"> and/or   
    [AppArmor](http://www.novell.com/linux/security/apparmor/) gives you network application security via mandatory access control for programs, protecting against the exploitation of software flaws and compromised systems. AppArmor includes everything you need to provide effective containment for programs (including those that run as root) to thwart attempted exploits and even zero-day attacks.   
    But both will be rather difficult to install because the server is using SuSE 9.3 and this may also interfere with Plesk….
8.Server hardening #4:I will add mod\_security   
     ModSecurity<sup style="font-style: italic;">TM</sup> is an open source intrusion detection and prevention engine for web applications (or a web application firewall). Operating as an Apache Web server module or standalone, the purpose of ModSecurity is to increase web application security, protecting web applications from known and unknown attacks.  
    and eventually document it in an article.
9.Server hardening #5:I will monitor the number of login ssh attempts to avoid sshd logins using simple username-password combinationsor dictionary based attacks.  
    from [http://www.linuxquestions.org/questions/showthread.php?t=340366 ](http://www.linuxquestions.org/questions/showthread.php?t=340366)<div adejf="0" id="post_message_1731658" jx53a="17" style="font-style: italic;">Several reports indicate that the malicious code is a scanner designed to identify systems with weak username/passwords. Once a weak system is identified, its IP address is appended to a list for manually exploitation later on. However, the possibility of a unknown exploit has not been ruled-out. All Linux users are recommended to implement a sensible username and password policy in order to avoid being compromised by this tool. An example of a sensible policy would be at least the use of non-dictionary, alpha-numeric+punctuation characters. Restricting sshd access to only those systems necessary will further reduce the possiblity of compromise. Access restriction can be done using iptables or tcp\_wrappers (hosts.allow/deny)
    
    Further information about this tool and failed sshd logins can be found here:  
    [http://lists.netsys.com/pipermail/fu…ly/024612.html](http://lists.netsys.com/pipermail/full-disclosure/2004-July/024612.html)  
    [http://dev.gentoo.org/~krispykringle/sshnotes.txt](http://dev.gentoo.org/%7Ekrispykringle/sshnotes.txt)  
    <http://isc.sans.org/diary.php?date=2004-08-04>
    
    

Holidays are not starting as nice as expected ;-(