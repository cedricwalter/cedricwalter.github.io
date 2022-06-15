---
id: 4471
title: 'Some useful Unix/Linux Bash alias'
date: '2009-06-22T21:03:36+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - cli
    - linux
    - shell
---

Some useful Bash #Linux alias taken from my user profile. If you have a long command that you type frequently consider putting it in as an *alias*.

In computing, **alias** is a command in various command line interpreters (shells) such as Unix shells, 4DOS/4NT and Windows PowerShell, which enables a replacement of a word with another string. It is mainly used for abbreviating a system command, or for adding default arguments to a regularly used command. \[[WikiPedia](http://en.wikipedia.org/wiki/Alias_(command))\]

| **Description** |  |
|---|---|
| Find all directories and and chmod them to rwxr.xr.x | alias fixpermD=’find . -type d -exec chmod 755 {} \\;’ |
| Find all files and and chmod them to rw.r..r.. | alias fixpermF=’find . -type f -exec chmod 644 {} \\;’ |
| Both above and set recursively user and user group in one shot | alias fixUserAPerms=’fixpermF; fixpermD; chown -R userA .;chgrp -R usergrp .’ |
| Make a directory and all files recursively read only, secure but a pain to maintain. see next | alias ro=’find . -type f -exec chmod 444 {} \\;find . -type d -exec chmod 555 {} \\;’ |
| Make a directory and all files recursively read write, just the time to update your site. | alias rw=’find . -type f -exec chmod 644 {} \\;find . -type d -exec chmod 755 {} \\;’ |
| Lower case all files in current directory | alias lowercaseallfiles=’for f in \*; do mv $f `echo $f \| tr \[:upper:\] \[:lower:\]`; done’ |
| List all open connections to your server | alias listOpenConnections=’lsof –i’ |
| List all internet connections | alias listinternetconnection=’netstat –lptu’ |
| find the 10 biggest in size directories | alias dirsizes=’du -cks \* \| sort -n \| tail –10′ |
| Show open port | `alias openports='netstat -nape --inet'` |

