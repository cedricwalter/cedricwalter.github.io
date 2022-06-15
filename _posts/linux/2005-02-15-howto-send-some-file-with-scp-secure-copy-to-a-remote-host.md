---
id: 1573
title: 'HowTo Send some file with SCP (secure copy) to a remote host'
date: '2005-02-15T20:05:59+01:00'
author: 'Cédric Walter'



tags:
    - login
    - security
---

This script ask for security reason the login and password. (but accept default values)

```xml
<property name="host" value="suse92.waltercedric.com"></property> <target name="scp"></target> <input addproperty="login" defaultvalue="${login.default}" message="# ${host}  login: (${login.default})"></input>  <input addproperty="pwd" defaultvalue="${pwd.default}" message="# ${host} pwd:"></input>  <echo message="Sending files with secure copy to host ${host} in ${path}"></echo> <scp knownhosts="${known_hosts}" todir="${login}:${pwd}@${host}:/c:/tmp//"></scp>  <fileset></fileset> <patternset refid="files.pattern"></patternset>   <echo message="Secure copy Success... All files has been transfered to ${host}"></echo>  
```