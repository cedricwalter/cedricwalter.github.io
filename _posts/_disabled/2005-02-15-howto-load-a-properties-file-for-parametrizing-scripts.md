---
id: 1575
title: 'HowTo load a properties file for parametrizing scripts'
date: '2005-02-15T20:10:03+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1575'

tags:
    - conf
    - login
---

```
A properties file in c:/conf#A commentstmp.path=c:\tempftp.login.default=cedricwalterftp.pwd.default=xxxxftp.host=ftp.adress.comftp.port=21 <property file="c:\conf\settings.properties"></property>   <echo message="Path is ${tmp.path}"></echo>  
```