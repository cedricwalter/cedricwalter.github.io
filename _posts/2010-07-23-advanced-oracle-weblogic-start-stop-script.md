---
id: 5577
title: 'Advanced Oracle Weblogic start/stop script'
date: '2010-07-23T22:35:39+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5577'
permalink: /linux/advanced-oracle-weblogic-start-stop-script/
tags:
    - home
    - install
---

![oracle_logo3](/assets/images/2010/07/oracle_logo3.jpg "oracle_logo3")

> [The Oracle WebLogic 11g application server](http://www.oracle.com/us/products/middleware/application-server/index.htm) product line is the industry’s most comprehensive #Java platform for developing, deploying, and integrating enterprise applications. It provides the foundation for [application grid](http://www.oracle.com/us/products/middleware/application-grid/index.html), which is an architecture that enables enterprises to outperform their competitors while minimizing operational costs.


## Some notes

#### **This script may look unsecure (and it is)** 

Since password are store inside (admin server login: admin and password is admin), by doing so I can restart [Oracle Weblogic](http://www.oracle.com/us/products/middleware/application-server/index.htm) in a cron job since stopping wont query the console for the login and password: feel free to remove these lines in blue

I always recommend to install web process in its own user group and use a dedicated user to mitigate any securities issues:

> \# groupadd weblogic   
> \# useradd -g weblogic-c weblogicuser for weblogic’ -m weblogic   
> \# su – weblogic

Install then weblogic in /home/weblogic

#### **Respect the order of component for starting**

1. Start Weblogic Node Manager,
2. Start WebLogic Admin server,
3. Start all Managed Server in any order.

and stopping components

1. Stop the Node Manager
2. Stop all Managed WebLogic server
3. Stop WebLogic

#### **Names of the managed server**

 **<font color="#ff8000">managed server names are in the script** so add remove start and stop command for them

#### **Logs files of start and stop operations** 

are written in 2 files, that use timestamp, see WLS\_LOG\_START and WLS\_LOG\_STOP

## /etc/init.d/weblogic file

Create a new file as root in /etc/init.d/weblogic

> \# vi /etc/init.d/weblogic

and paste inside the following

> \#!/bin/sh   
> \# description: webLogic adminServer and managedServer start script   
> \# 
> 
> **\# customized below to your likings**   
> WLS\_DOMAIN=mytestdomain   
> WLS\_BASE=/home/weblogic/   
> WLS\_HOME=${WLS\_BASE}/bea/user\_projects/domains/$WLS\_DOMAIN   
> WLS\_NODE\_HOME=${WLS\_BASE}/bea/wlserver\_10.3/server/bin   
> WLS\_OWNER=<font color="#ff0000" size="2">weblogic   
> WLS\_ADMIN\_PORT=7001   
> WLS\_ADMIN\_LOGIN=admin   
> <font color="#000000" size="2">WLS\_ADMIN\_PWD=admin   
> WLS\_LOG\_START=${WLS\_BASE}/logs/start.`date ‘+%d%m%y’`<font color="#000000" size="2">.log   
> WLS\_LOG\_STOP=${WLS\_BASE}/logs/stop.`date ‘+%d%m%y’`<font color="#000000" size="2">.log   
> <font color="#ff8000" size="2">WLS\_MANAGED\_SERVER1=dev   
> WLS\_MANAGED\_SERVER2=test   
> JAVA\_OPTIONS=”${JAVA\_OPTIONS} -Dweblogic.management.username=${WLS\_ADMIN\_LOGIN}”   
> JAVA\_OPTIONS=”${JAVA\_OPTIONS} -Dweblogic.management.password=${WLS\_ADMIN\_PWD}”   
> export JAVA\_OPTIONS   
> 
> 
> if \[ ! -f $WLS\_HOME/startWebLogic.sh \]   
> then   
>  echo “WebLogic startup: cannot $WLS\_HOME/startWebLogic.sh ”   
>  exit   
> fi 
> 
> **startWeblogic**()   
> {   
> su – $WLS\_OWNER -c “nohup $WLS\_NODE\_HOME/startNodeManager.sh &gt; ${WLS\_LOG\_START} 2&gt;&amp;1 &amp;”   
> sleep 10   
> su – $WLS\_OWNER -c “nohup $WLS\_HOME/startWebLogic.sh &gt;&gt; ${WLS\_LOG\_START} 2&gt;&amp;1 &amp;”   
> sleep 10   
> su – $WLS\_OWNER -c “nohup $WLS\_HOME/bin/startManagedServer.sh &gt;&gt; ${WLS\_LOG\_START} 2&gt;&amp;1 &amp;”   
> sleep 10   
> su – $WLS\_OWNER -c “nohup $WLS\_HOME/bin/startManagedServer.sh &gt;&gt; ${WLS\_LOG\_START} 2&gt;&amp;1 &amp;”   
> return 0   
> } 
> 
> **stopWeblogic**()   
> {   
> su – $WLS\_OWNER -c “nohup $WLS\_NODE\_HOME/stopNodeManager.sh &gt; ${WLS\_LOG\_STOP} 2&gt;&amp;1 &amp;”   
> sleep 10   
> su – $WLS\_OWNER -c “nohup $WLS\_HOME/bin/stopManagedWebLogic.sh <font color="#ff8000">$<font color="#ff8000">WLS\_MANAGED\_SERVER1 t3://localhost:$WLS\_ADMIN\_PORT ${WLS\_ADMIN\_LOGIN} ${WLS\_ADMIN\_PWD} &gt;&gt; ${WLS\_LOG\_STOP} 2&gt;&amp;1 &amp;”   
> sleep 10   
> su – $WLS\_OWNER -c “nohup $WLS\_HOME/bin/stopManagedWebLogic.sh <font color="#ff8000">$<font color="#ff8000">WLS\_MANAGED\_SERVER2  t3://localhost:$WLS\_ADMIN\_PORT ${WLS\_ADMIN\_LOGIN} ${WLS\_ADMIN\_PWD} &gt;&gt; ${WLS\_LOG\_STOP} 2&gt;&amp;1 &amp;”   
> sleep 10   
> su – $WLS\_OWNER -c “nohup $WLS\_HOME/bin/stopWebLogic.sh &gt;&gt; ${WLS\_LOG\_STOP} 2&gt;&amp;1 &amp;”   
> return 0   
> } 
> 
> case “$1” in   
>  ‘start’)   
>  startWeblogic   
>  ;;   
>  ‘stop’)   
>  stopWeblogic   
>  ;;   
>  ‘restart’)   
>  stopWeblogic   
>  startWeblogic   
>  ;;   
>  \*)   
>  echo “Usage: $0 start|stop|restart”   
>  exit 1   
>  ;;   
> esac