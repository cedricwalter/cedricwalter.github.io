---
id: 6845
title: 'Backup Your Ubuntu/Debian Server Automatically'
date: '2011-06-08T20:21:08+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6845'

header:
  teaser: /assets/images/2011/06/backup_debian_ubuntu_server.jpg
tags:
    - backup
    - designed
    - linux
    - system
---

![backup_debian_ubuntu_server](/assets/images/2011/06/backup_debian_ubuntu_server.jpg "backup_debian_ubuntu_server")

I am using [ReoBack](http://reoback.sourceforge.ne) for this duty

> [REOBack](http://reoback.sourceforge.ne) (pronounced “ray-o-back”) is a backup solution designed for #Linux users and system administrators. It is designed to be simple to set up, and easy to use. It is great as a quick solution for those who procrastinate about backups. It supports automatic full/incremental backups of files you define, remote backups via NFS or FTP, as well as auto deletion of old backups.

And here is my how to install for [Debian](http://www.debian.org/) /[Ubuntu](http://www.ubuntu.com/) distribution taken from my notes

[Download Reoback 1.0.3](http://reoback.sourceforge.net/#Downloads), convert it into a [Debian](http://www.debian.org/) package with alien and install it

```
wget http://puzzle.dl.sourceforge.net/sourceforge/reoback/reoback-1.0-3.noarch.rpm apt-get install alien alien reoback-1.0-3.noarch.rpm dpkg -i reoback_1.0-4_all.deb
```

Configure [ReoBack](http://reoback.sourceforge.ne) by editing the file **settings.conf**

```
vi /etc/reoback/settings.conf
```

 Here is a sample configuration file to save your backup to a remote FTP server (but it could be also a NFS share)

```
host            = myhostname.com backupdays      = 7 files           = /etc/reoback/files.conf tmpdir          = /var/lib/reoback/tmp/ datadir          = /var/lib/reoback/data/ localbackup     = /var/lib/reoback/backups/ keeplocalcopy   = 1 remotebackup    = 1 rbackuptype     = FTP localmount      = /mnt/server/ remotehost      = xxxxxxxxx remotepath      = /reobackup/ ftpuser         = xxxxxxxxx ftppasswd       = xxxxxxxxx
```

Specify which files on your server need to be saved by editing the file **files.conf**

```
vi /etc/reoback/files.conf
```

Here is a sample, I exclude some files that are changing all the time since they are maintained by the Linux kernel or some processes

```
File: homes /home/  File: var /var Skip: /var/run/* Skip: /var/lib/mysql/* Skip: /var/lib/reoback/*  File: mysql /var/lib/mysql /tmp/mysql.sock Skip: /var/lib/mysql/mysql.sock Skip: /var/lib/mysql/mysqld.pid  File: plesk /opt/psa /etc/psa /usr/local/psa
```

Adapt the location path of these 2 files (**files.conf / **settings.conf****) in run\_reoback.sh

```
vi /etc/reoback/run_reoback.sh
```

content of file

```
# Location of the configuration file. config="/etc/reoback/settings.conf"  # Change to reflect where REOBack is installed reoback="/usr/bin/reoback.pl"  # Do not modify this line. $reoback $config
```

Finally you can now test your backup

```
/etc/reoback/run_reoback.sh
```

or place this command in crontab

```
* 19 * * * /etc/reoback/run_reoback.sh > backup.txt ;

                mail -s "automatisches Backup" <a href="mailto:xxxx@gmail.com">xxxx@gmail.com</a> < backup.txt
```

## Tips

Depending where you visitor come from (America or Asia or Europe) it may be recommended to not start your backup during peak of visits, You can also nice the process to a lower priority

```
* 19 * * * <strong>nice –19</strong> /etc/reoback/run_reoback.sh > backup.txt ; 

               mail -s "automatisches Backup" xxxx@gmail.com < backup.txt
```