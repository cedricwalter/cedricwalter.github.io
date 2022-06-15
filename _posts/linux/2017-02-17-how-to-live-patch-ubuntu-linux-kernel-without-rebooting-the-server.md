---
id: 8604
title: 'How to live patch Ubuntu Linux Kernel without rebooting the server'
date: '2017-02-17T09:30:09+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2017/02/ubuntu-livepatch-kernel.png
tags:
    - cli
    - HowTo
    - linux
    - tutorial
---

Kernel live patching enables run time correction of critical security issues in running kernel without rebooting. How do I enable or patch my Ubuntu [Linux](https://waltercedric.com/?s=linux)16.04 LTS server without rebooting the box?  
[Ubuntu](/?s=ubuntu) [Linux](https://waltercedric.com/?s=linux) version 16.04 LTS supports live patching for both enterprise and the #Ubuntu community members. The Canonical Live-patch Service is an authenticated, encrypted, signed stream of live-patch kernel modules for #Ubuntu servers, virtual machines and desktops.

[On 20th October, 2016 Canonical officially announced the support for no reboot kernel patching](http://insights.ubuntu.com/2016/10/20/live-kernel-patching-from-canonical-now-available-for-ubuntu/), freely available on maximum three machines for a single user running 64-bit Intel/AMD #Ubuntu 16.04 LTS. Installing is really easy

```bash
sudo apt update 
sudo apt upgrade
sudo apt install snapd
```

### Generate a livepatch key

In order to get started login and generate a key from the following url (a free account is needed):

https://ubuntu.com/livepatch [A](https://ubuntu.com/livepatch)fter login you should see something like this  
![](/assets/images/2017/02/ubuntu-livepatch-kernel.png)

### Enable live patching

```bash
sudo snap install canonical-livepatch
sudo canonical-livepatch enable
5e37xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

If everything went well you should read something like

```bash
Successfully enabled device. Using machine-token: 5e37xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### To view the status of the daemon

canonical-livepatch status –verbose

```
client-version: "6" machine-id: 6e2xxxxxxxxxxxxxxxxxxxxx machine-token: 0c38xxxxxxxxxxxxxxxxxxxxxxxxxxxx architecture: x86_64 cpu-model: Intel(R) Xeon(R) CPU           W3520  @ 2.67GHz last-check: 2017-02-17T10:18:14.094602474+01:00 boot-time: 2017-02-08T14:40:20+01:00 uptime: 211h38m28s status: - kernel: 4.4.0-62.83-generic   running: true   livepatch:     checkState: checked     patchState: nothing-to-apply     version: ""     fixes: ""
```