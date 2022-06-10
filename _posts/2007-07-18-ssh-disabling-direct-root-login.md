---
id: 3018
title: 'SSH Disabling Direct Root Login'
date: '2007-07-18T21:34:27+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3018'
permalink: /security/ssh-disabling-direct-root-login/
tags:
    - security
---

Disabling root login will force any attempted hackers to use 2 passwords instead of only one. Making it more difficult for a hacker to break into your server.

You must have another user which is NOT root already on the box

 `vi /etc/ssh/sshd_config`

Search for line  
 `

PermitRootLogin yes `

 and change it to   
`

PermitRootLogin no`

restart sshd by typing   
`/etc/init.d/sshd restart`