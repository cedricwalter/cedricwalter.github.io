---
id: 2661
title: 'Our server has been probably hacked'
date: '2006-07-10T22:10:06+02:00'
author: 'Cédric Walter'



tags:
    - homepage
    - incidents
---

Our server is highy instable in the past 2 weeks, I run YaST to update all packages, and also startchkrootkit

chkrootkit (Check Rootkit) is a common unix-based program intended to help system administrators check their system for known rootkits. It is a shell script using common UNIX/Linux tools like the strings and grep commands to search core system programs for signatures and for comparing a traversal of the /proc filesystem with the output of the ps (process status) command to look for discrepancies.

chkrootkit report that <span style="text-decoration: underline; font-weight: bold;">WE have a problem:  
  
Checking `bindshell’… INFECTED (PORTS: 465)

    
 xxxxxxxxx:~ # chkrootkit  
 ROOTDIR is `/’  
 Checking `amd’… not found  
 Checking `basename’… not infected  
 Checking `biff’… not found  
 Checking `chfn’… not infected  
 Checking `chsh’… not infected  
 Checking `cron’… not infected  
 Checking `date’… not infected  
 Checking `du’… not infected  
 Checking `dirname’… not infected  
 Checking `echo’… not infected  
 Checking `egrep’… not infected  
 Checking `env’… not infected  
 Checking `find’… not infected  
 Checking `fingerd’… not found  
 Checking `gpm’… not infected  
 Checking `grep’… not infected  
 Checking `hdparm’… not infected  
 Checking `su’… not infected  
 Checking `ifconfig’… not infected  
 Checking `inetd’… not tested  
 Checking `inetdconf’… not found  
 Checking `identd’… not found  
 Checking `init’… not infected  
 Checking `killall’… not infected  
 Checking `ldsopreload’… not infected  
 Checking `login’… not infected  
 Checking `ls’… not infected  
 Checking `lsof’… not infected  
 Checking `mail’… not infected  
 Checking `mingetty’… not infected  
 Checking `netstat’… not infected  
 Checking `named’… not infected  
 Checking `passwd’… not infected  
 Checking `pidof’… not infected  
 Checking `pop2’… not found  
 Checking `pop3’… not found  
 Checking `ps’… not infected  
 Checking `pstree’… not infected  
 Checking `rpcinfo’… not infected  
 Checking `rlogind’… not found  
 Checking `rshd’… not found  
 Checking `slogin’… not infected  
 Checking `rlogind’… not found  
 Checking `rshd’… not found  
 Checking `slogin’… not infected  
 Checking `sendmail’… not infected  
 Checking `sshd’… not infected  
 Checking `syslogd’… not tested  
 Checking `tar’… not infected  
 Checking `tcpd’… not infected  
 Checking `tcpdump’… not infected  
 Checking `top’… not infected  
 Checking `telnetd’… not found  
 Checking `timed’… not found  
 Checking `traceroute’… not infected  
 Checking `vdir’… not infected  
 Checking `w’… not infected  
 Checking `write’… not infected  
 Checking `aliens’… no suspect files  
 Searching for sniffer’s logs, it may take a while… nothing found  
 Searching for HiDrootkit’s default dir… nothing found  
 Searching for t0rn’s default files and dirs… nothing found  
 Searching for t0rn’s v8 defaults… nothing found  
 Searching for Lion Worm default files and dirs… nothing found  
 Searching for RSHA’s default files and dir… nothing found  
 Searching for RH-Sharpe’s default files… nothing found  
 Searching for Ambient’s rootkit (ark) default files and dirs… nothing found  
 Searching for suspicious files and dirs, it may take a while…   
 /usr/lib/perl5/5.8.6/i586-linux-thread-multi/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Bootloader/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Config/Crontab/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/DBD/mysql/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/DBI/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Data/ShowTable/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Date/Manip/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Digest/HMAC/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Digest/SHA1/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/HTML/Parser/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/HTML/Tagset/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/IO/Socket/SSL/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Locale/gettext/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/MIME/Lite/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Mail/SpamAssassin/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Net/DNS/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Net/SSLeay/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Parse/RecDescent/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Parse/Yapp/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Text/Iconv/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/Tie/IxHash/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/URI/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/X500/DN/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/XML/Parser/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/XML/RegExp/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/XML/XQL/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/XML-DOM/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/libwww-perl/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/mod\_perl/.packlist /usr/lib/perl5/vendor\_perl/5.8.6/i586-linux-thread-multi/auto/ycp/.packlist

 Searching for LPD Worm files and dirs… nothing found  
 Searching for Ramen Worm files and dirs… nothing found  
 Searching for Maniac files and dirs… nothing found  
 Searching for RK17 files and dirs… nothing found  
 Searching for Ducoci rootkit… nothing found  
 Searching for Adore Worm… nothing found  
 Searching for ShitC Worm… nothing found  
 Searching for Omega Worm… nothing found  
 Searching for Sadmind/IIS Worm… nothing found  
 Searching for MonKit… nothing found  
 Searching for Showtee… nothing found  
 Searching for OpticKit… nothing found  
 Searching for T.R.K… nothing found  
 Searching for Mithra… nothing found  
 Searching for OBSD rk v1… nothing found  
 Searching for LOC rootkit… nothing found  
 Searching for Romanian rootkit… nothing found  
 Searching for Suckit rootkit… nothing found  
 Searching for Volc rootkit… nothing found  
 Searching for Gold2 rootkit… nothing found  
 Searching for TC2 Worm default files and dirs… nothing found  
 Searching for Anonoying rootkit default files and dirs… nothing found  
 Searching for ZK rootkit default files and dirs… nothing found  
 Searching for ShKit rootkit default files and dirs… nothing found  
 Searching for AjaKit rootkit default files and dirs… nothing found  
 Searching for zaRwT rootkit default files and dirs… nothing found  
 Searching for Madalin rootkit default files… nothing found  
 Searching for anomalies in shell history files… nothing found  
 Checking `asp’… not infected  
 Checking `bindshell’… INFECTED (PORTS: 465)  
 Checking `lkm’… Checking `rexedcs’… not found  
 Checking `sniffer’… not tested: can’t exec ./ifpromisc  
 Checking `w55808’… not infected  
 Checking `wted’… not tested: can’t exec ./chkwtmp  
 Checking `scalper’… not infected  
 Checking `slapper’… not infected  
 Checking `z2’… not tested: can’t exec ./chklastlog

While googling, I’ve found that:  
<http://www.webhostingtalk.com/archive/thread/407443-1.html>

WHT isn’t here to take the place of experience, or to supply you with skilled administration experience. Unfortunately, that’s the mistake that most make, assuming they can just open up a server, without the proper experience, come here when something like this happens, thusly putting their own clients at risk.

As for the hack itself, it depends on the severity of it, whether or not I’d recommend formatting. In this case, given the common description of abindshell:

This utility allows users to open an interactive shell over a port, bypassing all system logging, thus making it possible for users to stealthy administer a machine.  
  
Because of the mere definition of this, and the function of this, you can’t trust ANY of the system binaries at this point. Bindshell does just what it’s supposed to do, it provides a shell for users to do whatever they want with your system, INCLUDING replacing system binaries and the like.

The not so good part to this is this also can be run as a perl script, which means it doesn’t ALWAYS have to listen to the port, it can simply listen to the port when the end user calls this.

One thing you can do to prevent this is have a decent ruleset for mod\_security, adding bindshell to the list, adding bash, rsh, etc to the list as well, but that may end up causing problems as well as preventing them.

To get rid of this, you’re going to have to find out WHERE it came from, and what kind of damage it has done, before making a full assessment. That’s not something that the group here @ WHT can help you with, as that can only be done by someone with a good few years of experience in the field