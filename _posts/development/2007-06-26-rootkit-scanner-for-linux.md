---
id: 2992
title: 'Rootkit scanner for linux'
date: '2007-06-26T21:20:33+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2992'

header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - hacker
    - linux
    - security
---

A **rootkit** is a set of software tools intended to conceal running processes, files or system data from the operating system. Rootkits have their origin in benign applications, but in recent years have been used increasingly by malware to help intruders maintain access to systems while avoiding detection. Rootkits exist for a variety of operating systems, such as Microsoft Windows, #Linux and Solaris. Rootkits often modify parts of the operating system or install themselves as drivers or kernel modules. \[[WikiPedia](http://en.wikipedia.org/wiki/Rootkit)\]

Rootkit scanner is scanning tool which scans for rootkits, backdoors and local exploits by running tests like:

- MD5 hash compare
- Look for default files used by rootkits
- Wrong file permissions for binaries
- Look for suspected strings in LKM and KLD modules
- Look for hidden files
- Optional scan within plaintext and binary files

Rootkit Hunter is released as GPL licensed project and free for everyone to use. You can download it at   
[http://www.rootkit.nl/projects/rootkit\_hunter.html ](http://www.rootkit.nl/projects/rootkit_hunter.html)

This tools is just a tar with a set of files inside. It is highly recommended to run it from a read only media to avoid hacker tampering attempts.run

```
./installer.sh
# then
rkhunter
```

Rootkit Hunter 1.2.9, Copyright 2003-2006, Michael Boelen

Under active development by the Rootkit Hunter project team. For reporting  
bugs, updates, patches, comments and questions see: rkhunter.sourceforge.net

Rootkit Hunter comes with ABSOLUTELY NO WARRANTY. This is free software,  
and you are welcome to redistribute it under the terms of the GNU General  
Public License. See LICENSE for details.

```
Valid parameters:
--checkall (-c)           : Check system
--createlogfile <file>*   : Create logfile (file is optional, defaults to
                          : /var/log/rkhunter.log)
--cronjob                 : Run as cronjob (removes colored layout)
--display-logfile         : Show logfile at end of the output
--help (-h)               : Show this help
--nocolors*               : Don't use colors for output
--report-mode*            : Don't show uninteresting information for reports
--report-warnings-only*   : Show only warnings (lesser output than --report-mode,
                          : more than --quiet)
--skip-application-check* : Don't run application version checks
--skip-keypress (-sk)*    : Don't wait after every test (non-interactive)
--quick*                  : Perform quick scan (instead of full scan)
--quiet*                  : Be quiet (only show warnings)
--update                  : Run update tool and check for database updates
--version                 : Show version and quit
--versioncheck            : Check for latest version
--bindir <bindir>*        : Use <bindir> instead of using default binaries
--configfile <file>*      : Use different configuration file
--dbdir <dir>*            : Use <dbdir> as database directory
--rootdir <rootdir>*      : Use <rootdir> instead of / (slash at end)
--tmpdir <tempdir>*       : Use <tempdir> as temporary directory
Explicit scan options:
--allow-ssh-root-user*    : Allow usage of SSH root user login
--disable-md5-check*      : Disable MD5 checks
--disable-passwd-check*   : Disable passwd/group checks
--scan-knownbad-files*    : Perform besides 'known good' check a 'known bad' check
--check-deleted           : Perform 'deleted files' check
--check-listen            : Perform 'listening applications' check
Multiple parameters are allowed
*) Parameter can only be used with other parameters
```

False alarms:

```
* Filesystem checks
   Checking /dev for suspicious files...                      [ OK ]
   Scanning for hidden files...                               [ Warning! ]
---------------
/etc/.pwd.lock /dev/.udevdb 
---------------
Please inspect:  /dev/.udevdb (directory) 
```

/dev normally contains only device names and hence udev stores its private configuration information in a hidden directory. Rkhunter  
complains because rootkits are known to create such directories.