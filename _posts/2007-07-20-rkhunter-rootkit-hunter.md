---
id: 3023
title: 'RKHunter &#8211; RootKit Hunter'
date: '2007-07-20T00:57:13+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3023'
permalink: /security/rkhunter-rootkit-hunter/
tags:
    - security
---

Rootkit scanner is scanning tool to ensure you for about 99.9%\* you’re clean of nasty tools. This tool scans for rootkits, backdoors and local exploits by running tests like:

- MD5 hash compare
- Look for default files used by rootkits
- Wrong file permissions for binaries
- Look for suspected strings in LKM and KLD modules
- Look for hidden files
- Optional scan within plaintext and binary files

[Rootkit Hunter](http://www.rootkit.nl/projects/rootkit_hunter.html) is released as GPL licensed project and free for everyone to use.  `# wget http://downloads.rootkit.nl/rkhunter-1.1.4.tar.gz

# tar -xzvf rkhunter-1.1.4.tar.gz

# cd rkhunter

# ./installer.sh` <span style="font-size: 12pt;">  
 <span style="font-size: 12pt;">  
 Receive e-mail everyday with the result [Rootkit Hunter](http://www.rootkit.nl/projects/rootkit_hunter.html)  
For Root user  
<span>`# crontab -e `  
 For any user  
<span>`# crontab -e -u username`

and add  
`

`

`&#149;0 3 * * * (<span style="color: rgb(51, 51, 255);">./usr/local/bin/rkhunter &#150;checkall``<span style="color: rgb(51, 51, 255);"> 2>&1 | mail -s "chkrootkit output" -c mailadresscopy1@host.com,mailadresscopy2@host.com mailadress@host.com)  `<span style="color: rgb(51, 51, 255);">\* the correct path can be found with `which ``rkhunter `` `  
 This will run [Rootkit Hunter](http://www.rootkit.nl/projects/rootkit_hunter.html) at 3:00 am every day, and e-mail the output to `mailadress@host.com` and copies to `mailadresscopy1@host.com` and `mailadresscopy2@host.com`

Nota  
<span style="color: rgb(255, 0, 0);">If you ever get a positive alarm, you can try to remove the rootkit, but all professionals would advice you to reinstall the server from scratch, and restore a previous backup (that mean saving nothing from server as soon as the rootkit is revealed….)  
  
Links  
[](http://www.chkrootkit.org/)[http://www.rootkit.nl/projects/rootkit\_hunter.html](http://www.rootkit.nl/projects/rootkit_hunter.html)