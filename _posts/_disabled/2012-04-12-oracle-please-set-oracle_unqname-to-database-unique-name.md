---

title: 'Oracle Please set ORACLE_UNQNAME to database unique name'
date: '2012-04-12T20:48:29+02:00'
author: 'Cédric Walter'



---

![](/assets/images/2010/07/oracle_logo3.jpg)

if you encounter this error while starting oracle

```
/etc/init.d/oraemctl start Starting Oracle EM DB Console: Environment variable ORACLE_UNQNAME not defined.  Please set ORACLE_UNQNAME to database unique name. OK
```

One possible solution is to edit the script

```
# vi /etc/init.d/oraemctl
```

and add the following code in blue

```
#!/bin/bash # # oraemctl Starting and stopping Oracle Enterprise Manager Database Control. # Script is valid for 10g and 11g versions. # # chkconfig: 35 80 30 # description: Enterprise Manager DB Control startup script  # Source function library.  . /etc/rc.d/init.d/functions  ORACLE_OWNER="oracle" #ORACLE_HOME="/opt/oracle/otk/home" ORACLE_HOME="/opt/oracle/otk/home/app/oracle/product/11.2.0/dbhome_1" <strong>ORACLE_SID=orcl</strong>  case "$1" in  start)   echo -n $"Starting Oracle EM DB Console:"   su - $ORACLE_OWNER -c "<strong>ORACLE_SID=$ORACLE_SID</strong> $ORACLE_HOME/bin/emctl start dbconsole"   echo "OK"   ;;  stop)   echo -n $"Stopping Oracle EM DB Console:"   su - $ORACLE_OWNER -c "<strong>ORACLE_SID=$ORACLE_SID</strong> $ORACLE_HOME/bin/emctl stop dbconsole"   echo "OK"   ;;  *)  echo $"Usage: $0 {start|stop}" ;; esac ~
```

Use of course the right SID, after
that [Oracle Enterprise manager](http://www.oracle.com/us/products/enterprise-manager/index.html "Oracle Enterprise manager")
will start correctly

\# /etc/init.d/oraemctl start   
Starting Oracle EM DB Console:Oracle Enterprise Manager 11g Database Control Release 11.2.0.1.0   
Copyright (c) 1996, 2009 Oracle Corporation. All rights reserved.   
– An instance of Oracle Enterprise Manager 11g Database Control is already running.   
OK