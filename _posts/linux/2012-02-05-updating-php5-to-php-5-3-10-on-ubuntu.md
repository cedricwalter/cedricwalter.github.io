---
id: 7486
title: 'Updating PHP5 to PHP 5.3.10 on Ubuntu'
date: '2012-02-05T10:01:58+01:00'
author: 'Cédric Walter'



tags:
    - code
    - concept
    - deliver
    - edition
    - enterprise
    - execution
    - fix
    - HowTo
    - individuals
    - linux
    - little
    - located
    - patches
    - personal
    - php
    - published
    - security
---

![](/assets/images/2008/08/ubuntu.png)

Thanks to [Nathan Rennie-Waldock](https://launchpad.net/~nathan-renniewaldock). you can have the latest PHP5 5.3.10 running in #Ubuntu Oneiric, Natty, Maverick and Lucid.

<div class="alert2">### PHP 5.3.10 fixes critical remote code execution vulnerability

#### The vulnerability was introduced by the fix for a hash collision denial-of-service flaw

Proof-of-concept code that exploits this vulnerability [has already been published](https://gist.github.com/1725489) online

<div class="module-icon">[Nathan Rennie-Waldock](https://launchpad.net/~nathan-renniewaldock) Personal Package Archives (PPA) is located at <https://launchpad.net/~nathan-renniewaldock/+archive/ppa>

Just run as root the following to use PHP 5.3.10

```
sudo add-apt-repository <strong>ppa:nathan-renniewaldock/ppa</strong>
sudo apt-get update 
sudo apt-get upgrade
```

Canonical should be a little bit ashamed to not deliver these security patches for the server edition! relying on individuals to provide the latest version of secure software is not promoting #Linux in enterprise.