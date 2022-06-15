---
id: 1574
title: 'howTo send some files with FTP to a remote host'
date: '2005-02-15T20:07:21+01:00'
author: 'Cédric Walter'



tags:
    - login
    - security
---

This script ask for security reason the login and password. (but accept default values)

```xml
<target name="ftp"></target> <input addproperty="ftp.login" defaultvalue="${ftp.login.default}" message="# Enter login: (${ftp.login.default})"></input> <input addproperty="ftp.pwd" defaultvalue="${ftp.pwd.default}" message="# Enter password:"></input> <property name="remotepath" value="/public/cedric.walter/temp"></property>  <echo message="Sending files from ${src.dir} with FTP to ${ftp.host} in ${remotepath}"></echo> <ftp action="mkdir" password="${ftp.pwd}" port="${ftp.port}" remotedir="${remotepath}" server="${ftp.host}" userid="${ftp.login}"></ftp>  <ftp binary="yes" password="${ftp.pwd}" port="${ftp.port}" remotedir="${remotepath}" separator="/" server="${ftp.host}" userid="${ftp.login}" verbose="yes"></ftp>  <fileset></fileset> <patternset refid="ftp.pattern"></patternset>    <echo message="FTP Success... All files has been transfered to ${ftp.host} in ${remotepath}"></echo>   
```