---
id: 7474
title: 'Install Munin Monitoring in Ubuntu 11.10 Oneiric with nginx'
date: '2012-02-02T20:17:28+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - linux
    - monitoring
    - nginx
---

# [Munin](http://munin-monitoring.org/) is a networked resource monitoring tool that can help analyze resource trends and “what just happened to kill our performance?” problems. It is designed to be very plug and play. A default installation provides a lot of graphs with almost no work.**

In Norse mythology Hugin and [Munin](http://munin-monitoring.org/) are the ravens of the god king Odin. They flew all over Midgard for him, seeing and remembering, and later telling him. “*[Munin](http://munin-monitoring.org/)*” means “*memory*“.

Install *[Munin](http://munin-monitoring.org/)* by issuing as root

```
apt-get install munin munin-node munin-plugins-extra
```

Activate as many plugins as required, there is more than 230 plugins!

Here are some I did add to the list of already activated one. Some were added for obvious reason like mysql, [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.") and fail2ban to monitor SSH brute force attempt…

```
cd /etc/munin/plugins/
ln -s /usr/share/munin/plugins/nginx_status nginx_status
ln -s /usr/share/munin/plugins/nginx_request nginx_request
ln -s /usr/share/munin/plugins/mysql_ mysql
ln -s /usr/share/munin/plugins/mysql_queries mysql_queries
ln -s /usr/share/munin/plugins/fail2ban fail2ban
```

Fail2Ban require root access to the socket of fail2ban, so edit munin-node

```
vi /etc/munin/plugin-conf.d/munin-node
```

And append at the end

```
[fail2ban*]
user root
```

Restart Munin-node and force the munin-cron process to run the initial html reports or wait 5 minutes…

```
/etc/init.d/munin-node restart
sudo -u munin munin-cron
```

Add to the crontab of the user Munin the command to run Munin every 5 minutes:

```
sudo -u munin crontab –e
*/5 * * * *     /usr/bin/munin-cron
```

Protect the server host where *[Munin](http://munin-monitoring.org/)* will output its reports

```
htpasswd -c /etc/nginx/.htpasswd username
```

Now add a new site to [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.")

```
vi /etc/nginx/sites-enabled/waltercedric
```

And put at least the following inside

```
server {
listen       80;
server_name  munin.acme.com;
root /var/cache/munin/www;
 location / {
    expires off;
    auth_basic "Munin";
    auth_basic_user_file /etc/nginx/.htpasswd;
 }
}
```

And reload [nginx](http://nginx.org/ "nginx A HTTP and mail proxy server licensed under a 2-clause BSD-like license.") configuration with service nginx reload

You can now point any browser to <http://munin.acme.com>