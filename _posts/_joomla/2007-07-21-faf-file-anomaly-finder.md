---

title: 'FaF File Anomaly Finder'
date: '2007-07-21T20:10:55+02:00'
author: 'Cédric Walter'



tags:
    - security
---

 FaF (File Anomaly Finder) is a wrapper for the \*nix ‘find’ utility. It generates audit reports for data matching specific characteristics; such data as setgid/setuid, unowned, and more. The objectives are simply to create a simple anomaly finder that identifies common flawed permissions or otherwise suspicious file system characteristics.   
   
 The main features of FaF are:

- simplistic and to the point audit reports
- easy setup and configuration
- audits emailed to customizable address or user
- ideal for web servers or general purpose workstations
- audits of setgid/setuid, hidden, unowned, &amp; world writable data
- very portable

 [ http://www.r-fx.org/faf.php](http://www.r-fx.org/faf.php)  `# wget http://www.r-fx.ca/downloads/faf-current.tar.gz

# tar xvf  faf-current.tar.gz`  
`# cd faf*

# ./install.sh`

Install path: /usr/local/faf/  
Config path: /usr/local/faf/conf.faf  
Executable path: /usr/local/sbin/faf

Why do you need such tool?  
Never trust anyone, including sometimes yourself 😉 this tool correctly used just insured You that You will never forget any files with too much permissions. It may also reveal a hacker, putting some new files under the user nobody…

What to do with the output?

You’ll have to react differently for each occurrence in the report….  
  
<span style="font-weight: bold; background-color: rgb(255, 255, 0);">SUID/SGID Binaries

Sticky bit was used on executables in linux (which was used more often) so that they would remain in the memory more time after the initial execution, hoping they would be needed in the near future. But since today we have more sophisticated memory accessing techniques and the bottleneck related to primary memory is diminishing, the sticky bit is not used today for this. Instead, it is used on folders, to imply that a file or folder created inside a sticky bit-enabled folder could only be deleted by the creator itself. A nice implementation of sticky bit is the /tmp folder,where every user has write permission but only users who own a file can delete them. Remember files inside a folder which has write permission can be deleted even if the file doesn’t have write permission. The sticky bit comes useful here.  
   
SUID or SetUID bit, the executable which has the SUID set runs with the ownership of the program owner. That is, if you own an executable, and another person issues the executable, then it runs with your permission and not his. The default is that a program runs with the ownership of the person executing the binary.  
   
Consider also reading:  
[<font face="Verdana, Arial, Helvetica, sans-serif" size="-1">**What are the SUID, SGID and the Sticky Bits?**](http://www.codecoffee.com/tipsforlinux/articles/028.html)

You can find them also manually by entering:  
/assets/images/2016/09/cailculato-hp-11c_5_thumb.jpg 

```
# find / -type f \( -perm -04000 -o -perm -02000 \;


```

 The SGID bit is the same as of SUID, only the case is that it runs with the permission of the group. Another use is it can be set on folders,making nay files or folders created inside the SGID set folder to have a common group ownership.

<span style="background-color: rgb(51, 204, 0); font-weight: bold;">files in `<span style="background-color: rgb(51, 204, 0);">/srv ``  `(http root folder)  
 You should accept NO files with SUID/SGID in http root folder. Remove them all   
 # find /srv -type f \\( -perm -04000 -o -perm -02000 <span style="font-family: monospace;">\\) -exec chmod \\;

<span style="font-weight: bold; background-color: rgb(255, 255, 0);">No Owner/Group  
May also be an indication an intruder has accessed your system…  
Can also be found manually by typing:  
/assets/images/2016/09/cailculato-hp-11c_5_thumb.jpg 

```
# find / \( -nouser -o -nogroup \) -print
```

 <span style="background-color: rgb(51, 204, 0); font-weight: bold;">files in `<span style="background-color: rgb(51, 204, 0);">/srv  `(http root folder)

Permissions and ownership are linked together to make your server work peacefully. The basic idea is always to give the minimum rights to the file.

A rule for thumbs would be:  
read only for all file, `r--r--r--` or` r---------`  
read, execute for all directory `r-xr-xr-x `or `r-x------`  
The problem is that apache and PHP also run under their own user…

A very informative article explaining the problem on a concrete example (Gallery2) can be found at <http://codex.gallery2.org/Gallery2:Security>

At least (worst), when apache run as `wwwrun` user in `www` group,in your HTTP directory  
`# chown -R wwwrun .

``# chgrp  -R www .`  
then all files has to be ` rw- --- ---` and directory `r-x------

`Advantages:` `you can use Joomla! administrator panel  
BUT: any bug in PHP code, attack can read or overwrite any files! -> highly insecure  
``  
Better would be for all files/dir in your HTTP directory to changes accordingly to the right web user!  
`# chown -R cedric .

``# chgrp  -R psacln  .`  
Change all files/directories that has to be written by apache (cache directories) to   
`# chown -R wwwrun cache

``# chgrp  -R www cache

`Advantages: a bug in apache/php, or attack can not touch any of your files.  
BUt: if PHP do not run under your user, the Joomla! panel wont be usable, as Apache/PHP wont be able to install any new components/images.

<span style="background-color: rgb(51, 204, 0); font-weight: bold;">Files in / must generally only be available to root  
`# chown -R root /etc

``# ``chgrp  -R root /etc

# find /etc -f -exec chmod 600 {} /;

`  
<span style="font-weight: bold; background-color: rgb(255, 255, 0);">World Writable  
<span style="font-family: monospace;">  
<span style="background-color: rgb(51, 204, 0); font-weight: bold;">files in `<span style="background-color: rgb(51, 204, 0);">/srv `  
<span style="color: rgb(255, 0, 0);">must be avoid at any costs! This line remove the world writable bit to all files in <span style="color: rgb(255, 0, 0);">`/srv`  
<span style="color: rgb(255, 0, 0);">\# find /srv -f -exec chmod o-w {} /;  
<span style="color: rgb(255, 0, 0);">This line remove the world writable bit to all directories in `/srv`  
<span style="color: rgb(255, 0, 0);">\# find /srv -d -exec chmod o-w {} /;  
<span style="background-color: rgb(51, 204, 0); font-weight: bold;">Files in / 

```
You should ignores /proc files, /dev files (hundreds of these are correctly world writable),

Symbolic (soft) links (which should have mode 777), directories with the sticky (save text) bit on, and

sockets, as that is relatively safe. 
```

 <span style="font-weight: bold; background-color: rgb(255, 255, 0);">Hidden Files/Paths

You should normally have no such files! try to understand why (look in google), open them and/or move/delete them