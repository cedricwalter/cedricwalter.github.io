---
title: "Securing self hosted app with Fail2Ban, Traeffik"
date: 2024-02-11T10:15:17+01:00
cover: /2023/docker.webp
cover_alt: "Immich in docker"
cover_width: "1286px"
cover_height: "350px"
summary: "Immich is a High performance self-hosted photo and video backup solution, self-hosted photo and video backup solution directly from your mobile phone."
categories:
  - Homelab
tags:
  - immich
  - gallery
---
Traefik is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components (ie: Docker) and generally configures itself dynamically as services are added or removed.

Fail2ban is an open-source intrusion prevention software framework that protects computer servers from brute-force attacks. It works by monitoring log files for various services (such as SSH, FTP, Apache, Nginx, etc.) and dynamically blocking IP addresses that repeatedly fail authentication attempts or exhibit other suspicious behavior.

## Securing Jellyfin with Traeffik
https://jellyfin.org/docs/general/networking/traefik2

## Securing Jellyfin with fail2ban
Non docker setup, Ubuntu
```bash
vi /etc/fail2ban/jail.d/jellyfin.local
[jellyfin]
backend = auto
enabled = true
port = 80,443
protocol = tcp
filter = jellyfin
maxretry = 3
bantime = 86400
findtime = 43200
logpath = /var/log/jellyfin/jellyfin*.log
```

```bash
vi /etc/fail2ban/filter.d/jellyfin.conf
[Definition]
failregex = ^.*Authentication request for .* has been denied \(IP: "<ADDR>"\)\.
```

Reload Fail2ban
```bash
sudo systemctl restart fail2ban
```
then watch fail2ban logs
```bash
watch -n1 sudo fail2ban-client status jellyfin
```

see https://jellyfin.org/docs/general/networking/fail2ban/

## Securing Caibre-Web with fail2ban

You need to parse calibre-web.log

```
[2024-02-11 12:51:50,400]  WARN {cps.web:1409} Login failed for user "3f4f4f34f34" IP-address: 2a02:3478:e34c:5404:0:65bc:ea84:123d, 111.111.111.8
```

use journald logging driver for calibre-web:
```yaml
services:
  calibre-web:
    logging:
      driver: "journald"
      options:
        tag: "calibre-web"
```
Create a filter for fail2ban:
```bash
sudo vi /etc/fail2ban/filter.d/calibre.local
[Definition]
failregex = calibre-server.*Login failed for user.+IP-address:\s?<ADDR>
journalmatch = CONTAINER_TAG=calibre-server
```

Create a jail:
```bash
sudo vi /etc/fail2ban/jail.d/calibre.local
[calibre]
enabled  = true
filter   = calibre
logpath  = /var/log/calibre/access.log
```

Restart the fail2ban service and the immich-server container
```bash
sudo service fail2ban reload
```
then watch fail2ban logs
```bash
watch -n1 sudo fail2ban-client status calibre
```

## Securing Immich with fail2ban
Immich is a High performance self-hosted photo and video backup solution, self-hosted photo and video backup solution directly from your mobile phone.

```bash
sudo apt install fail2ban
```

use journald logging driver for immich-server:
```yaml
services:
  immich-server:
    logging:
      driver: "journald"
      options:
        tag: "immich-server"
```

Create a filter for fail2ban:
```bash
$ sudo vi /etc/fail2ban/filter.d/immich.local
[Definition]
failregex = immich-server.*Failed login attempt for user.+from ip address\s?<ADDR>
journalmatch = CONTAINER_TAG=immich-server
```

Create a jail:
```bash
$ sudo vi /etc/fail2ban/jail.d/immich.local
[immich]
enabled = true
filter = immich
backend = systemd
chain = DOCKER-USER
```
Restart the fail2ban service and the immich-server container
```bash
sudo service fail2ban
```
then watch fail2ban logs
```bash
watch -n1 sudo fail2ban-client status immich
```
Try to log in ONCE with wrong credentials. If the failed counter goes up, it worked!
### Debug tips
1. set banaction and banaction_allports to dummy while debugging. This way, fail2ban will not actually ban the ip, but only show it into fail2ban-client status.
2. use sudo fail2ban-regex systemd-journal immich to test if the regex is working. Read the man of fail2ban-regex, it has useful options.

thanks to https://github.com/immich-app/immich/discussions/3243#discussioncomment-6681948
