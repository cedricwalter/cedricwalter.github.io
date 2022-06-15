---
id: 5226
title: 'Eclipse shared install on a Windows Server 2003/2008'
date: '2010-05-31T21:15:34+02:00'
author: 'Cédric Walter'



tags:
    - considered
    - eclipse
    - stable
    - thanks
---

![maven-logo-2](/assets/images/2010/05/maven-logo-2_3_2492d998151d0b40912f648c5ada39c1.gif "maven-logo-2") ![eclipse](/assets/images/2010/05/eclipse_3.gif "eclipse")

I did develop this solution at work for our internal purpose at [www.innoveo.com](http://www.innoveo.com). Going away from the paradigm “As a developer I run everything locally” isn’t easy to accept but in some rare cases, it make sense. Below I list what I consider to be the main advantages and drawbacks.

### Stability

- Not everybody is changing the developer environment as you need admin right to be able to do changes, more stability.
- The developer environment is standardized: convention over configuration always pays like in Apache #Maven.

### Sharing

- you can work from anywhere as long as you have an internet/VPN connection
- You can move your working place around, show your workspace to a colleague, reduce your coupling to Windows, use #Linux, use a Mac!

### Security

- The source code stay on the server, if someone steal notebooks you don’t loose your software assets.

### Efficiency

- Somebody maintains the developer environment and settings for you, some developers can still beta test a new eclipse version before till it is considered stable.
- Rollout is limited to a minimum loss of time, as you will see below
- Setting up a new developer account is basically settings up a new account on the shared server, running 3 lines of shell.
- The server is not full of unwanted applications running in background, only java.exe. eclipse.exe, databases can still run on another server (MYSQL, Oracle), runtime environment (Tomcat).

### Speed, speed and speed

- A server is cheap compare to one big notebook for every developer.
- Server is most of the time fully 64bits, may have up to 8 cores, RAID 5 typically output 350Mb/s read (a good notebook: 32 bits, 2 cores and 80Mb/s without SSD)

## Drawbacks

- A shared developer environment is a **Single point of failure** –> you need a very good backup, and eventually hardware fallback machine in hot standby!
- You can not work if developer have no or limited internet access, in train for example.
- It required a bit of initial engineering, hence this article.

# Access

## Windows 

Use Windows Remote desktop connection, define a DNS entry to access the server.

[![remote.desktop](/assets/images/2010/05/remote.desktop_thumb.jpg "remote.desktop")](http://www.waltercedric.com/images/stories/remote.desktop_2.jpg)

## Linux 

Linux has a free remote desktop implementation of Microsoft protocol, if it not installed, run either on Debian

*\# apt-get install rdesktop*

or in OpenSuSE

*\# zypper install rdesktop*

or in RED HAT

*\# yum install rdesktop*

Create a script .sh file to save the connection parameters:

*rdesktop -A -C -k de-ch -r PRIMARYCLIPBOARD -u **username** -p **password** -xl **ipadress***

# Eclipse

### One install for all users

1. Unpack the latest eclipse in any location, I recommend on *c:\\eclipse-3.5*, but any location where you have some space will work.
2. Start eclipse as administrator and install all required 3r party plugin: we use M2Eclipse, Subversive for example.
3. Stop Eclipse,
4. **Remove ALL write rights to ALL users** including admin if needed.
5. When Eclipse will start under a developer account, it will copy its configuration files into C:\\Users\\%USERNAME%\\.eclipse
6. Every users will be able to adjust the eclipse.ini but these settings are a good start (adapt memory to your requirements)
7. Create a shortcut for every developer on their desktop pointing to c:\\eclipse\\eclipse.exe

C:\\Users\\cedric.walter\\.eclipse\\org.eclipse.platform\_3.5.0\_1770938306\\configuration\\eclipse.ini

> ```
> -startup plugins/org.eclipse.equinox.launcher_1.0.201.R35x_v20090715.jar --launcher.library plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.0.200.v20090519 -showsplash org.eclipse.platform --launcher.XXMaxPermSize 256m -configuration ../Users/cedric.walter/.eclipse/org.eclipse.platform_3.5.0/configuration -Dfile.encoding="UTF-8" -vmargs -Xms2048m -Xmx2048m -XX:PermSize=256m -XX:MaxPermSize=256m -XX:+UseParallelGC
> ```

### Updating Eclipse

A rollout of new Eclipse version is easy thanks to symbolic link. [Download junction.exe](http://technet.microsoft.com/en-us/sysinternals/bb896768.aspx), a small tool to create symbolic links

> Windows 2000 and higher supports directory symbolic links, where a directory serves as a symbolic link to another directory on the computer.

and run as admin

junction.exe c:\\eclipse c:\\eclipse-3.5

Now thanks to symbolic links any update to a major new version of eclipse will be plain easy: just delete the symbolic link c:\\eclipse and create a new one to the new version!

### Users with Multiple Eclipse workspaces

1. Create an empty directory for hosting your new workspace, for example at   
     e:\\%USERNAME%\\workspace\\maven
2. Create a new shortcut with this content  
    C:\\eclipse\\eclipse.exe –launcher.ini   
    “C:\\Users\\\\%USERNAME%\\.eclipse\\org.eclipse.platform\_3.5.0\_1770938306\\configuration\\eclipse.ini”   
    -data e:\\\\%USERNAME%\\workspace\\maven

## Apache Maven

### Maven Local repository, every user has it’s own

It is not recommend to share the local Maven repository cache among users as Maven has no locking concept in place. The local maven repository is expected to be located at

*c:\\users\\%USERNAME%\\.m2\\repository*

If you have enough space there for all your users, you can skip that chapter, Otherwise I will show you how to locate it anywhere on the file system.

Let’s store it at e:\\%USERNAME%\\repository, here I have choose another drive with more space as Maven local repository can be quite big (700Mb per user today)

The design chosen impose me to one more time play with symbolic links, using junction.exe in c:\\users\\%USERNAME%\\.m2\\repository pointing to e:%USERNAME%\\repository

When you are logged in as a normal developer account, in a dos windows, run the following

```
junction.exe c:\users\%USERNAME%\.m2\repository e:\%USERNAME%\repository
```

### Maven settings.xml, one for all users

I like the idea to maintain only one settings.xml. Apache Maven recommend to have one settings.xml per user (located in c:\\users\\%USERNAME%\\.m2\\settings.xml). This is true if you have different responsibilities among all your developers. For example some may not be able to deploy in [Artifactory](http://www.jfrog.org/)/[Nexus](http://nexus.sonatype.org/) while other can. Luckily, this is not the case as for today in our company. That is why I will only have one Settings.xml on server, located at c:\\server.xml

I will use a hard link to c:\\settings.xml. When you are logged in as a normal developer account, in a dos windows, run the following

*fsutil hardlink create c:\\users\\%USERNAME%\\.m2\\settings.xml c:\\settings.xml*

This make Apache Maven think that the settings.xml is in the default location c:\\users\\%USERNAME%\\.m2\\

### Updating Maven

I do use the same trick for having a unique version of maven binary on the server while keeping some flexibility thanks to symbolic links.

1. Unpack Apache Maven anywhere
2. As an admin, in a dos windows, run the following:  
    *junction.exe c:\\maven-3.0-beta1 c:\\maven*

Now you can let all your developer reference in M2Eclipse this virtual directory c:\\maven. Switching all developers to a new version is done by deleting and pointing to an older/newer version of Maven.

# It is not finished

Our shared developer environment setup also virtualizes MYSQL (multiple schema per developer ) and Tomcat (per developer port range) using –D system variables in eclipse.ini

# References 

#### [Scenario #2 – shared install](http://help.eclipse.org/help33/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/multi_user_installs.html)

In this scenario, a single install area is shared by many users. The “configuration” directory under the install area is home only to the config.ini as shipped with the product (it is not initialized). Every user has their own local standalone configuration location.

The set up for this scenario requires making the install area read-only for regular users. When users start Eclipse, this causes the configuration area to automatically default to a directory under the user home dir. If this measure is not taken, all users will end up using the same location for their configuration area, which is not supported.