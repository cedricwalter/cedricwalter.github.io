---
id: 4507
title: 'Implement SSH port knocking IN linux'
date: '2020-03-14T15:57:15+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4507'
permalink: /linux/implement-ssh-port-knocking-on-opensuse/
image: /wp-content/uploads/2009/07/port.knocking.ssh_.linux_thumb.gif
tags:
    - check
    - client
    - code
    - combination
    - conf
    - configuration
    - default
    - developed
    - Download
    - environment
    - example
    - exe
    - HowTo
    - linux
    - security
    - tutorial
    - ubuntu
---

Port Knocking is a technique to secure services behind a firewall until a specific knock sequence is given. Once that sequence is given, the IP address that initiated the knock may be allowed to access the service for a short period of time. A knocking server listens to all traffic on an Ethernet (or PPP) interface, looking for special “knock” sequences of port-hits. A client makes these port-hits by sending a TCP (or UDP) packet to a port on the server.

This is a bit paranoid, but it add another layer of security, an attacker will have either to try all ports combinations or know the secret combination (knock) to be able to connect to your SSH daemon for example.

First, you’ll have to be sure to have a port knocking client, or you will be kick out forever of your own server!

- [Cygwin/Win32 Knock Client](http://www.zeroflux.org/proj/knock/files/knock-cygwin.zip)
- [Native Win32 Client](http://www.zeroflux.org/proj/knock/files/knock-win32.zip)
- [MacOS Client](http://www.zeroflux.org/proj/knock/files/knock-macos.tar.gz)
- You can find of information and a nice list of other knock clients and servers over at <http://www.portknocking.org/>

### Define the secret knocking sequence

I will take the default sequence of *knockd* as an example

```
2222:udp
3333:tcp
4444:udp
.. but you can add more port and not follow any pattern like above.
```

### Install a Knocking server on OpenSuSE

As root of course

```
sudo apt install knockd
```

Change the configuration file

```
vi /etc/knockd.conf 
```

Below is the default content

\[options\]

 UseSyslog

```
[opencloseSSH] 
        sequence      = 2222:udp,3333:tcp,4444:udp 
        seq_timeout   = 15 
        tcpflags      = syn,ack 
        start_command = /usr/sbin/iptables -I INPUT 1 -s %IP% -p tcp --dport ssh -j ACCEPT 
        cmd_timeout   = 10 
        stop_command  = /usr/sbin/iptables -D INPUT -s %IP% -p tcp --dport ssh -j ACCEPT
```

Which is quite readable:

- A wrong knock expire after 15 seconds
- A successful knock, open for 10 seconds the firewall. The daemon will open a hole for the knocking %IP% source on port 22 (ssh), plenty of time for you to connect!
- start\_command add an IPTABLE rule in the firewall to allow the connection while
- stop\_command close the connection

### Starting the daemon

Check first if there is not any conflicting ssh rules

```
iptables -L | grep ssh
```

Start the server

```
rcknockd start
```

and monitor the logs file

```
tail -f /var/log/knockd.log
```

You can now install a knock client..

### Install a knocking client under windows

I’ll use the [command line client](http://www.zeroflux.org/proj/knock/files/knock-win32.zip), put the following in a .bat or .sh file

```
knock.exe -v myserverIP 2222:udp 3333:tcp 4444:udp
```

then run it once. You now have 10 second to open a ssh session with either [Putty](http://www.putty.org/)

*PuTTY is an SSH and telnet client, developed originally by Simon Tatham for the Windows platform. PuTTY is open source software that is available with source code and is developed and supported by a group of volunteers.*

*You can download PuTTY* [*here*](http://www.chiark.greenend.org.uk/%7Esgtatham/putty/download.html)*.*

or [Cygwin ssh.](http://www.cygwin.com/)

*Cygwin is a Linux-like environment for Windows. It consists of two parts:*

- *A DLL (cygwin1.dll) which acts as a Linux API emulation layer providing substantial Linux API functionality.*
- *A collection of tools which provide Linux look and feel.*

### And under the iPhone?

Luckily there is a FREE application for that! [iPhone Knock Client](http://www.dannysung.com/main/?q=node/25)

[![port.knocking.iphone](/assets/images/2009/07/port.knocking.iphone_thumb.png)](http://www.waltercedric.com/images/stories/ImplementportknockingonOpenSuSE_F73C/port.knocking.iphone.png)