---

title: 'Downtime this week'
date: '2007-07-16T14:06:16+02:00'
author: 'Cédric Walter'



tags:
    - homepage
    - 'My Homepage'
---

  
# <span style="text-decoration: line-through;">Downtime of server later this week – nearly done 🙂  


i have written a powerpoint which has now nearly 70 pages…  
I need one day or more to reinstall the server.

- Backup all databases
- Backup the filesystem
- Scan the backup for exploits ad spyware, crapware, rootkit
- Reinstall the server with Suse 10.0 and Plesk 8.2
- Increase security -> ssh only with PKI and protocol 2, permissions.d, appArmor, se linux
- Review Plesk packages -> no PHP4, mySQL4 for example
- Install required modules in Apache: mod\_evasive, mod\_security, mod\_limitip, php5 runing with fastcgi and suexec
- Maybe install http://www.hardened-php.net/hardening\_patch.14.html#what\_is\_the\_hardening-patch
- Domains and Subdomains will be newly created
- Restore evrything -> all password will be changed
- Alle administrator panel (Joomla, + plesk) will be with htaccess protected
- Crontab -> chkrootkit, exploit.sh, rkhunter,

So it will be a very intensive day…sorry for the downtime

  FromWikiPedia <http://en.wikipedia.org/wiki/Downtime>

Downtime refers to a period of time or a percentage of a timespan that a machine or system (usually a computer server) is offline or not functioning, usually as a result of either system failure (such as a crash) or routine maintenance. The opposite is uptime.

- Maintenance downtimes have to be carefully scheduled in industries that rely on nearly 24-hour service, such as e-commerce, medical informatics, news reporting, and persistent online games. In many cases, system-wide downtimes can be averted using rolling upgrades.
- Downtimes caused by system failures can have serious economic impact. To minimize these effects network monitoring can be used.

  
In Service Level Agreements, it is common to mention a percentage value (per month or per year) that is calculated by dividing the sum of all downtimes timespans by the total time of a reference time span (e.g. a month). 0% downtime means that the server was available all the time.  
  
For Internet servers downtimes above 1% per year or worse can be regarded as unacceptable as this means a downtime of more than 3 days per year. For e-commerce and other industrial use any value above 0.1% is usually considered unacceptable.