---
id: 8687
title: 'Tiny-RSS update in background using SystemD'
date: '2017-10-26T22:21:45+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8687'
permalink: /internet/tiny-rss-update-in-background-using-systemd/
tags:
    - internet
    - web
    - web2.0
---

Before you can start using tt-rss properly, you have to tell him to update your feeds! Here is the complete how to do it with SystemD

[Systemd](https://en.wikipedia.org/wiki/Systemd) is an init system used in Linux distributions to bootstrap the user space. Subsequently to booting, it is used to manage system processes. It is a replacement for the UNIX System V and Berkeley Software Distribution (BSD) init systems. The goal is unification of basic Linux configurations and service behaviors across all distributions

Create a new file /lib/systemd/system/ttrss\_backend.service

with content

```
[Unit]

Description=ttrss_backend

After=network.target mysql.service postgresql.service



[Service]

User=www-data

<a href="http://execstart%3D/home/waltercedric.com/subdomains/rss/update_daemon2.php" rel="nofollow noopener noreferrer" target="_blank">ExecStart=/home/waltercedric.com/subdomains/rss/update_daemon2.php</a>



[Install]

WantedBy=multi-user.target
```

 And then run

```
systemctl enable ttrss_backend.service

service ttrss_backend start
```

You can use journalctl -u ttrss\_backend to look through daemon console output.