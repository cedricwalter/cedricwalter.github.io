---
id: 7433
title: 'Updating From Ubuntu 10.04 LTS to Ubuntu 11.10'
date: '2012-01-18T19:51:02+01:00'
author: 'Cédric Walter'



---

![](/assets/images/2008/08/ubuntu.png)

<div class="alert"><div class="typo-icon">Make sure that your data are safe and that your backups are working and in a safe place: obviously not on the server you are currently upgrading!While being logged in as root, you’ll have to edit the file /etc/update-manager/release-upgrades and set the value prompt to normal.

```
vi /etc/update-manager/release-upgrades

set  prompt=normal
```

The update process will update your server to every single releases of Ubuntu (200MB download for each step and a restart required)

```
apt-get update apt-get upgrade apt-get install update-manager-core do-release-upgrade -d
```

You are now on Ubuntu 10.10 Maverick Meerkat run one more time:

```
do-release-upgrade
```

You are now on Ubuntu 11.04 Natty Narwhal run one more time:

```
do-release-upgrade
```

to finally enjoy using Ubuntu 11.10 Oneiric Ocelot!

# Ubuntu version names 

- [Ubuntu 11.10](https://help.ubuntu.com/11.10/index.html) – the current stable version, released in October 2011, codenamed Oneiric Ocelot.
- [Ubuntu 11.04](https://help.ubuntu.com/11.04/index.html) – previous version, released in April 2011, codenamed Natty Narwhal.
- [Ubuntu 10.10](https://help.ubuntu.com/10.10/index.html) – previous version, released in October 2010, codenamed Maverick Meerkat.
- [Ubuntu 10.04 LTS](https://help.ubuntu.com/10.04/index.html) – the current long term support version, released in April 2010, codenamed Lucid Lynx.