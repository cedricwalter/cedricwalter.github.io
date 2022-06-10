---
id: 3024
title: 'SIM  system and services monitor'
date: '2007-07-21T13:23:58+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3024'
permalink: /security/sim-system-and-services-monitor/
tags:
    - security
---

SIM is a system and services monitor for ‘SysVinit’ systems. It is designed to be intuitive and modular in nature, and to provide a clean and informative status system.  
 It does this by consistently verifying that services are online, load averages are in check, and log files are at reasonable sizes. Many other SIM modules sport different and in-depth features to bring a well rounded tool to your disposal to stop otherwise common issues daunting internet hosts. 

*Features:*  
 – Service monitoring of HTTP, FTP, DNS, SSH, MYSQL &amp; more  
 – Event tracking and alert system  
 – Auto restart ability for downed services  
 – Checks against network sockets &amp; process list to ensure services are online  
 – Advanced HTTP service monitoring, to prevent commonly encountered issues   
 – System load monitor with customizable warnings &amp; actions  
 – Ability to auto restart system with definable critical load level  
 – Priority change configurable for services, at warning or critical load level  
 – Informative command line status display  
 – Easily customizable configuration file  
 – Auto configuration script  
 – Auto cronjob setup feature  
 – Simple &amp; Informative installation script  
 – Integrated auto-update feature  
 – And more…

From <http://www.r-fx.org/sim.php>

Installation is one more time straightforward:

`# wget <a href="http://www.r-fx.ca/downloads/sim-current.tar.gz" rel="noopener noreferrer" target="_blank">http://www.r-fx.ca/downloads/sim-current.tar.gz</a>

# tar xvf <a href="http://www.r-fx.ca/downloads/sim-current.tar.gz" rel="noopener noreferrer" target="_blank">sim-current.tar.gz</a>

# cd sim-*`

The installation of sim is easily acomplished, a simple shell script named ‘setup’ is included with SIM. Running this script will tend to all the install tasks for SIM.  
  
`# ./setup -i

-i     Install

-q     Quick install

-u     Uninstall

-c     Install/Uninstall cronjob`

Press "<span style="color: rgb(51, 51, 255);">SPACE" to go to the next page when you read the licence.

Press "<span style="color: rgb(51, 51, 255);">RETURN" to quit

The readme is then displayed, press "<span style="color: rgb(51, 51, 255);">SPACE", then "<span style="color: rgb(51, 51, 255);">RETURN"

`Ideally once SIM is configured it is best to run from a cronjob. The 'setup'

SIM 2.5-4 <sim@r-fx.org>

Creating installation paths:            [##########]

Installing SIM 2.5-4 to /usr/local/sim:         [##########]`

SIM 2.5-4 installation completed, related notes:  
Executable: /usr/local/sim/sim  
Executable symlink: /usr/local/sbin/sim  
Config file: /usr/local/sim/conf.sim  
Autoconf script: /usr/local/sim/autoconf  
Autoconf symlink: /usr/local/sbin/sim-autoconf  
Cronjob setup: /usr/local/sim/sim -j

SIM 2.5-4 must now be configured for use on this system, Press  
return to run the autoconf script (/usr/local/sim/autoconf).

 `SIM 2.5-4 Auto-Config Script`

All questions default to value in brackets if no answer is given. If you  
make a typo during the autoconf process, hit CTRL+C (^C) to abort and  
rerun the autoconf script (/usr/local/sim/autoconf).

The below are general configuration options for SIM:  
press return to continue...

Where is SIM installed ?  
\[/usr/local/sim\]: <span style="color: rgb(51, 51, 255);">"RETURN"

`<span style="color: rgb(0, 0, 0);">Where should the sim.log file be created ?<br style="color: rgb(0, 0, 0);">
`<span style="color: rgb(0, 0, 0);">`[/usr/local/sim/sim.log]:` ``<span style="color: rgb(51, 51, 255);">"RETURN"<span style="color: rgb(51, 51, 255);"><span style="color: rgb(0, 0, 0);">  
`<br style="color: rgb(0, 0, 0);">
<span style="color: rgb(0, 0, 0);">Max size of sim.log before rotated ? (value in KB)<br style="color: rgb(0, 0, 0);">
<span style="color: rgb(0, 0, 0);">[128]: ```<span style="color: rgb(51, 51, 255);">"RETURN"<span style="color: rgb(51, 51, 255);"><span style="color: rgb(0, 0, 0);">  
`<br style="color: rgb(0, 0, 0);">
<span style="color: rgb(0, 0, 0);">What is the location of your kernel log ?<br style="color: rgb(0, 0, 0);">
<span style="color: rgb(0, 0, 0);">Found kernel log at /var/log/messages ```<span style="color: rgb(51, 51, 255);">"RETURN"<span style="color: rgb(51, 51, 255);"><span style="color: rgb(0, 0, 0);">

`Where should alerts be emailed to ? (e.g: root, user@domain)

[root]:  xxxx@xx-xxxxxxx.com  `<span style="color: rgb(51, 51, 255);"><span style="color: rgb(0, 0, 0);"> ``<span style="color: rgb(51, 51, 255);">"RETURN" enter a external email, not one from the mail server domain!  
`

Disable alert emails after how many events, to avoid email flood ?

(Note: events stats are cleared daily)

[8]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

The below are configuration options for Service modules:

press return to continue...`

Auto-restart services found to be offline ? (true=enable, false=disable)  
\[true\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Enforce laxed service checking ? (true=enable, false=disable)

[true]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Disable auto-restart after how many downed service events ?

(Note: events stats are cleared daily)

[10]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Enable FTP service monitoring ? (true=enable, false=disable)

[false]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Name of the FTP service as appears in 'ps' ?

Warning: bad ps syntax, perhaps a bogus '-'? See http://procps.sf.net/faq.html

Found service name as proftpd `

TCP/IP port that FTP operates on ?  
\[21\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Path to FTP service init script ?

[/etc/init.d/proftpd]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Enable HTTP service monitoring ? (true=enable, false=disable)

[false]:true `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Name of the HTTP service as appears in 'ps' ?

Warning: bad ps syntax, perhaps a bogus '-'? See http://procps.sf.net/faq.html

Found service name as httpd`

TCP/IP port that HTTP operates on ?  
\[80\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Path to HTTP service init script ?

[/etc/init.d/httpd]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Enable DNS service monitoring ? (true=enable, false=disable)

[false]:true `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Name of the DNS service as appears in 'ps' ?

Warning: bad ps syntax, perhaps a bogus '-'? See http://procps.sf.net/faq.html

Found service name as named `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">  
`

TCP/IP port that DNS operates on ?

Found service port as 53`

Path to DNS service init script ?  
Found service init script at /etc/init.d/named

Enable SSH service monitoring ? (true=enable, false=disable)  
\[false\]:true <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Name of the SSH service as appears in 'ps' ?

Warning: bad ps syntax, perhaps a bogus '-'? See http://procps.sf.net/faq.html

Found service name as sshd`

TCP/IP port that SSH operates on ?  
Found service port as 22 <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Path to SSH service init script ?

Found service init script at /etc/init.d/sshd`

Enable MYSQL service monitoring ? (true=enable, false=disable)  
\[false\]:true <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Name of the MYSQL service as appears in 'ps' ?

Warning: bad ps syntax, perhaps a bogus '-'? See http://procps.sf.net/faq.html

Found service name as mysqld`

TCP/IP port that MYSQL operates on ?  
Found service port as 3306

Path to MYSQL service init script ?  
Found service init script at /etc/init.d/mysql

Enable SMTP service monitoring ? (true=enable, false=disable)  
\[false\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Enable XINET service monitoring ? (true=enable, false=disable)

[false]:true`

Name of the XINET service as appears in 'ps' ?  
Warning: bad ps syntax, perhaps a bogus '-'? See http://procps.sf.net/faq.html  
Found service name as xinetd

TCP/IP port that any XINET service operates on (e.g: pop3, 110) ?  
\[110\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"

In computer networking, xinetd, the eXtended InterNET Daemon, is an open-source daemon which runs on many Unix systems and manages Internet-based connectivity. It offers a more secure extension to or version of inetd, the Internet daemon.

xinetd features access control mechanisms such as TCP Wrapper ACLs, extensive logging capabilities, and the ability to make services available based on time. It can place limits on the number of servers that the system can start, and has deployable defence mechanisms to protect against port scanners, among other things. [from <font size="-1" style="color: rgb(51, 51, 255); font-weight: bold;"><span class="a">WikiPedia](http://en.wikipedia.org/wiki/Xinetd)

 `Path to XINET service init script ?   <span style="color: rgb(51, 51, 255);">see `<font size="-1" style="color: rgb(51, 51, 255);"><span class="a">www.**xinetd**.org/faq.html and   
`Found service init script at /etc/init.d/xinetd`

Enable ENSIM service monitoring ? (true=enable, false=disable)  
\[false\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Enable PGSQL service monitoring ? (true=enable, false=disable)

[false]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

The below are configuration options for Service Specific features:

press return to continue...

After an unclean HTTP shutdown, semaphore array's may remain allocated

and cause the service to fall into a looping restart cycle. Using this

feature clears semaphore arrays on HTTP restart.

Enable semaphore cleanup ?

[false]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

This is an implamented feature in the http module, its purpose is to

determine if/when the apache server locks up or otherwise stops

responding.

Enable URL aware monitoring ?

[false]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

HTTP log files can grow large and cause the service to crash

(segfault), this feature will keep the main HTTP logs incheck.

Enable HTTP log monitor ?

[false]:true `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

What is the location of your HTTP servers, log files ?

(should point to a directory, not file)

[/var/log/httpd]:/var/log/apache2`

Max size of HTTP log files, before cleared ? (value in MB)  
\[300\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

MySQL uses a /tmp symlink of its mysql.sock socket file. This

feature verifies that the symlink exists from the main mysql.sock

file, and if not it is recreated.

Enable MySQL Socket correction ?

[false]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

The below are configuration options for System modules:

press return to continue...`

Enable NETWORK monitoring ? (true=enable, false=disable)  
\[false\]:true <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

interface to monitor ?

[eth0]: `<span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Path to NETWORK init script ?

Found service init script at /etc/init.d/network`

Enable LOAD monitor ? (true=enable, false=disable)  
\[false\]: <span style="color: rgb(51, 51, 255);">`<span style="color: rgb(0, 0, 0);">```<span style="color: rgb(51, 51, 255);">"RETURN"  
`

Configuration completed, saving conf.sim... 

Done, conf.sim saved to /usr/local/sim.

<br style="font-weight: bold;">
`<font face="Verdana, Arial, Helvetica, sans-serif" size="2" style="font-weight: bold;"> Now the SIM (System Integrity Monitor) has been configured! add it as cron  
`

# ./setup -c

SIM 2.5-4 <sim@r-fx.org>

Removed SIM cronjob.

# ./setup -c

SIM 2.5-4 <sim@r-fx.org>

Installed SIM cronjob.`

if everything goes well, you can check the installation by typing:``

\# /etc/init.d/mysqld stop  
  
This will stop mysql daemon!, You will receive an email at the same time, showing that mysql has been stopped and restarted``

System integrity monitor on xxxxx has taken action in responce to an event. Recent event logs are enclosed below for your inspection. There has been 1 events today, if an average of 8 events is reached, e-mail alerts will be terminated for the duration of the day.

\- Events Summary:  
Total event count: 1  
Average event count: 0

\- Service Summary:  
FTP `[online - 0 events]`  
`HTTP      [online - 0 events]

DNS       [online - 0 events]

SSH       [online - 0 events]

MYSQL     [``restart success``- ``1 events``]

XINET     [online - 0 events]`

\- System Summary:  
NETWORK \[eth0 - online - 0 events\]

\- SIM Log:  
\[07/21/07 12:10:01\]: touched log file.  
\[07/21/07 12:10:01\]: sim.dat not found, created.  
\[07/21/07 12:10:01\]: no .chk modules enabled.  
\[07/21/07 12:15:03\]: no .chk modules enabled.  
\[07/21/07 12:20:01\]: no .chk modules enabled.  
\[07/21/07 12:25:01\]: NETWORK is online.  
\[07/21/07 12:25:01\]: FTP service is offline.  
\[07/21/07 12:25:01\]: FTP service is offline.  
\[07/21/07 12:25:01\]: FTP restart failed, could not find /etc/init.d/proftpd.  
\[07/21/07 12:25:01\]: FTP restart failed, could not find /etc/init.d/proftpd.  
\[07/21/07 12:25:01\]: HTTP service is online.  
\[07/21/07 12:25:01\]: DNS service is online.  
\[07/21/07 12:25:01\]: SSH service is online.  
\[07/21/07 12:25:01\]: MYSQL service is online.  
\[07/21/07 12:25:01\]: XINET service is online.