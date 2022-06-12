---
id: 4718
title: 'Hosts file protection'
date: '2009-09-28T20:50:41+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4718'

header:
  teaser: /assets/images/2009/09/hosts.file_thumb.png
tags:
    - ads
    - browser
    - bugs
    - compatible
    - computer
    - copy
    - ensure
    - example
    - experience
    - extension
    - host
    - linux
    - macos
    - security
    - Spam
    - spammer
    - windows
---

[![hosts.file](/assets/images/2009/09/hosts.file_thumb.png "hosts.file")](/assets/images/2009/09/hosts.file_.png) The **hosts file** is a computer file used by an operating system to map hostnames to IP addresses. This method is one of several methods used by an operating system to locate network nodes on a computer network. [Spybot Search and Destroy](http://www.safer-networking.org) is using this technique when you click on immunize button behind the scene.

Found at <http://someonewhocares.org/hosts/>

Use this file to prevent your computer from connecting to selected internet hosts. This is an easy and effective way to

- protect you from many types of spyware,
- reduces bandwidth use,
- blocks certain pop-up traps,
- prevents user tracking by way of “web bugs” embedded in spam,
- provides partial protection to IE from certain web-based exploits
- blocks most advertising you would otherwise be subjected to on the internet.

There is a version of this file that uses 0.0.0.0 instead of 127.0.0.1 available at <http://someonewhocares.org/hosts/zero/>. On some machines this may run minutely faster, however the zero version may not be compatible with all systems.

This file must be saved as a text file with no extension. (This means it that the file name should be exactly as below, without a “.txt” appended.). Let me repeat, the file should be named “hosts” NOT “hosts.txt”.

### For Windows 9x and ME

place this file at “C:\\Windows\\hosts”

### For NT, Win2K and XP

use “C:\\windows\\system32\\drivers\\etc\\hosts” or “C:\\winnt\\system32\\drivers\\etc\\hosts”

For Linux, Unix, or OS X place this file at “/etc/hosts”. You will require root access to do this. Saving this file to “~/hosts” will allow you to run something like “sudo cp ~/hosts /etc/hosts”.

### Ubuntu

Users who experience trouble with apt-get should consult [http://ubuntuforums.org/archive/index.php/t-613521.html ](http://ubuntuforums.org/archive/index.php/t-613521.html)

### OS/2

Copy the file to “%ETC%\\HOSTS” and in the CONFIG.SYS file, ensure that the line “SET USE\_HOSTS\_FIRST=1” is included.

### BeOS / Zeta / Haiku

Place it at “/boot/beos/etc/hosts”

### Netware system

The location is System\\etc\\hosts”

### For Macintosh (pre OS X)

Place it in the Mac System Folder or Preferences folder and reboot. (something like HD:System Folder:Preferences:Hosts)

Alternatively you can save it elsewhere on your machine, then go to the TCP/IP control panel and click on “Select hosts file” to read it in.As well, note that the format is different on old macs, soplease visit <http://someonewhocares.org/hosts/mac/> for mac format

If there is a domain name you would rather never see, simply add a line that reads “127.0.0.1 machine.domain.tld”. This will have the effect of redirecting any requests to that host to your own computer. For example this will prevent your browser from downloading banner ads, or sendingyour information back to a company.