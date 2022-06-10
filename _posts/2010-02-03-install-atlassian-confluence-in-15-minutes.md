---
id: 5009
title: 'Install Atlassian Confluence in 15 minutes'
date: '2010-02-03T17:18:58+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5009'
permalink: /development/install-atlassian-confluence-in-15-minutes/
image: /wp-content/uploads/2010/02/confluence.logo_thumb.jpg
tags:
    - atlassian
    - confluence
    - downloads
    - install
    - software
---

[![confluence.logo](/assets/images/2010/02/confluence.logo_thumb.jpg "confluence.logo")](/assets/images/2010/02/confluence.logo_2.jpg)

In this small post, you will learn how to install [Atlassian Confluence](http://www.atlassian.com/software/confluence/) in no more than 15 minutes. It do not replace the online installations manual (The [Confluence Installation Guide](http://confluence.atlassian.com/display/DOC/Confluence+Installation+Guide) is for people who are installing Confluence for the first time. Check the [requirements](http://confluence.atlassian.com/display/DOC/System+Requirements) and [supported platforms](http://confluence.atlassian.com/display/DOC/Supported+Platforms), then [download](http://www.atlassian.com/software/confluence/ConfluenceDownloadCenter.jspa) and [install Confluence](http://confluence.atlassian.com/display/DOC/Confluence+Installation+Guide)), but mainly **complement it**, with some of the best #Linux practices (**ADDED** points).

## How to install Atlassian Confluence in 15 minutes

### # _Toc250477756">Create user and user group</a>

# ADDED**: Better run these web applications with their own user group and user for more security…This is not required, but follow #Linux best practices, thus highly recommended.

The groupadd command creates a new group account using the values specified on the command line and the default values from the system.

> # groupadd confluence

The useradd command allow a super user or root to create a new user or updates default new user information.

> # useradd -g confluence -c ‘confluence user for confluence’ -m confluence

Be that user, for all next operations

> # su – confluence

You are now in the new home of user confluence.

/home/confluence /#

### Install Confuence

Get the latest standalone version

> \# wget [http://www.atlassian.com/software/confluence/downloads/binary/confluence-3.1.1-std.tar.gz](http://www.atlassian.com/software/confluence/downloads/binary/confluence-3.1.1-std.tar.gz "http://www.atlassian.com/software/confluence/downloads/binary/confluence-3.1.1-std.tar.gz")

Unpack it

> \# tar –xvf confluence-3.1.1-std.tar.gz

# ADDED**: To avoid having version number and make software updates easier, create a symbolic link (symlink). This will avoid to have in all your scripts a reference to the version number, thus keeping them more or less generic.

> \# ln –s /home/confluence/confluence-3.1.1-std /home/confluence/confluence

### # _Toc250477758">Customization of profile</a>

# ADDED**: I do not like to type too much, that why all server where I went are full of aliases. This help also other developers to locate quickly interesting functions on the system.

> \# cd

Open the Bashrc and put at the end

> \# vi .bashrc

At least these 4 alias, you are free to define more. Think also that they may be seen as documentation.

```
alias rel='cd /home/confluence/confluence/' alias logs='tail -F /home/confluence/confluence/logs/*' alias cstart='/home/confluence/confluence/bin/startup.sh' alias cstop='/home/confluence/confluence/bin/shutdown.sh'
```

To make you life easier, you’ll be able now to start and stop Confluence by issuing a **cstart** or **cstop**, watch logs by typing **logs**

### Prepare database configuration

Go to confluence home

\# cd

If you are using MySQL (most of the time you are), you’ll have to get the driver from internet due to licensing issues

> \# wget http://mirror.switch.ch/ftp/mirror/mysql/Downloads/Connector-J/mysql-connector-java-5.1.10.zip

Install unzip if not available on your system

> \# apt-get install unzip

Unpack drivers in current directory

> \# unzip mysql-connector-java-5.1.10.zip

Search the driver file. I do this to avoid searching or typing for it

> \# find /home/confluence/ -name mysql\*.jar

This should return something like mysql-connector-java-5.1.10/mysql-connector-java-5.1.10-bin.jar.

Copy this drivers into tomcat shared lib, aka into /home/confluence/confluence/lib

> \# cp mysql-connector-java-5.1.10/mysql-connector-java-5.1.10-bin.jar /home/confluence/confluence/lib

### Create new database schema and user

```
> \# mysql –u root –p   
> mysql> `create database <strong><font color="#ff8000">confluence </strong>character set utf8; 

`mysql> `CREATE USER <a href="mailto:'confluence'@'localhost'">'<strong>confluence</strong>'@'localhost'</a> 

        IDENTIFIED BY '<strong>xxxxxxxxxx</strong>';`   
> mysql> `GRANT ALL PRIVILEGES ON confluence  TO '<strong>confluence</strong>'@'localhost' WITH GRANT OPTION; 

`mysql> `FLUSH PRIVILEGES;`
```

### Configure Confluence to connect to this new database

Open /home/confluence/confluence/conf/server.xml and add in yellow the configuration for your database.
```
<engine debug="0" defaulthost="localhost" name="Standalone">  
<host appbase="webapps" autodeploy="false" debug="0" name="localhost" unpackwars="true">  
<context debug="0" docbase="../confluence" path="path" reloadable="false">  
<manager pathname="pathname"></manager>  
<resource name="jdbc/confluence"></resource>  
username=”**confluence**”   
password=”**xxxxxxxxxx**”   
driverClassName=”com.mysql.jdbc.Driver”   
url=”jdbc:mysql://localhost:3306/**<font color="#ff8000">confluence**?autoReconnect=true&amp;useUnicode=true&amp;characterEncoding=UTF8″   
maxActive=”20″   
maxIdle=”7″   
validationQuery=”select 1″ />   
</context>  
</host>  
</engine>
```

## Start Confluence

Issue a

> \# cstart; logs

and check logs to see if there is no fatal error occurring before visiting your browser http://yourserverIP:8081/confluence to continue installation.

## S# _Toc250477760">cripts</a> (optional)

### Create a new init.d script for Confluence

# ADDED**: Are for starting and stopping easily Confluence, in a standard way. This is something missing currently in the manuals. Here I present you maybe the most basic script ever made, but its purpose is just to be called later on by a rc.d as you will see later.

> \# vi /etc/init.d/confluence

And place inside the following

```bash
#!/bin/bash   
RETVAL=0  
NORMAL_PORT=8009   
start() {  
 su -l confluence -c '/home/confluence/confluence/bin/startup.sh'  
}   
stop() {
 su -l confluence -c '/home/confluence/confluence/bin/shutdown.sh'  
}   
status() {
 echo "not implemented"  
}   

findShutdownPort() {  SHUTDOWN_PORT=`netstat -vatn|grep LISTEN|grep $NORMAL_PORT|wc –l`  }   case "$1" in  start)  start  ;;  stop)  stop  ;;  restart)  stop  start  ;;  redebug)  stop  debug  ;;  status)  status  ;;  *)  echo "Usage: $0 {start|stop|restart|redebug|status}"  exit 1  esac  exit $RETVAL
```

```bash
 chown u+x /etc/init.d/confluence
```

### # _Toc250477761">Rc.d scripts</a>

# ADDED:** This will start automatically Confluence in runlevel 5 if machine if ever restarted

```bash
 cd /etc/rc5.d
```

Create a symbolic link to the Init.d script for starting

```bash
 ln -s ../init.d/confluence S20confluence
```

And stopping

```bash 
ln -s ../init.d/confluence k20confluence
```