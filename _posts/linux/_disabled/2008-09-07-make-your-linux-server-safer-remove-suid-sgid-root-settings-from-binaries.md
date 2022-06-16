---

title: 'Make your Linux server safer: remove SUID/SGID root settings from binaries'
date: '2008-09-07T13:26:22+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - hacker
    - linux
    - security
    - server
---

First let’s refresh some definitions…set user ID (SUID)

The SUID permission causes a script to run as the user who is the owner of the script, rather than the user who started it. It is normally considered extremely bad practice to run a program in this way as it can pose many security problems.

## set group ID (SGID) 

The SGID permission causes a script to run with its group set to the group of the script, rather than the group of the user who started it. It is normally considered extremely bad practice to run a program in this way as it can pose many security problems.

Latest versions of the #Linux kernel will even prohibit the running of shell scripts that have SGID/SUID attribute set.

Use of the SUID bit on binaries (to run with root privileges, aka ”setuid bit”) MUST be limited to those shown in   
the following list:

```
/bin/ping
/bin/su
/usr/bin/at
/usr/bin/chage
/usr/bin/chfn
/usr/bin/chsh
/usr/bin/crontab
/usr/bin/gpasswd
/usr/bin/newgrp
/usr/bin/passwd
```

The other binaries that were installed with the SUID bit set MUST have this bit removed. Administrators can still run   
these binaries normally, but they are not available for ordinary users. There are also a number of SGID ﬁles on the system that are needed, it may depending on the number of tools, or your distribution. Use Google and query the web for the right list 😉

Similarly, the SGID bit MUST NOT be used to give group ”root” privileges to any binary.   
To generate a list of all SUID/SGID programs on the system simply run the following command:

```
# find / -not -fstype ext3 -prune -o \ -type f \( -perm -4000 -o -perm -2000 \) \ -print
```

Then, for each ﬁle in this list that is not one of the permitted SUID or SGID programs, run the command

```
chmod -s FILE
```

to remove the SUID and SGID bits. When done, re-run the ﬁnd command to verify that the list matches the   
permitted programs.

I recommend [you installing also FAF (File Anomaly Finder) on your server](http://www.waltercedric.com/internet-www-mainmenu-54/313-security/1186-search-for-suspicious-files.html) to check periodically for file with too much rights or privileges