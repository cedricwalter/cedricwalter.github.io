---
id: 8765
title: 'Using free Cloudflare for CDN and DDoS protection'
date: '2019-09-02T13:47:59+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8765'
permalink: /development/using-cloudflare/
image: /wp-content/uploads/2005/11/hacker-textshirt.jpg
tags:
    - attack
    - cost
    - deliver
    - distributed
    - free
    - google
    - hacker
    - HowTo
    - infrastructure
    - monitors
    - multiple
    - once
---

[Cloudflare](https://www.cloudflare.com/), Inc. is an American web infrastructure and website security company, providing content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services.

It will cost you 0$ (DDOS, CDN) to 20$ or more and offer you the following advantages

**DDoS** is short for Distributed Denial of Service. **DDoS**is a type of DOS attack where multiple compromised systems, which are often infected with a Trojan, are used to target a single system causing a Denial of Service (DoS) attack.

A content delivery network (**CDN**) is a system of distributed servers (network) that deliver pages and other web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.

A **web application firewall** (or WAF) filters, monitors, and blocks HTTP traffic to and from a web application. A WAF is differentiated from a regular firewall in that a WAF is able to filter the content of specific web applications while regular firewalls serve as a safety gate between servers. By inspecting HTTP traffic, it can prevent attacks stemming from web application security flaws, such as SQL injection, [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting "https://en.wikipedia.org/wiki/Cross-site_scripting") (XSS), [file inclusion](https://en.wikipedia.org/wiki/File_inclusion_vulnerability "https://en.wikipedia.org/wiki/File_inclusion_vulnerability"), and security misconfigurations.

## How to

1. Register at [https://www.cloudflare.com/](https://www.cloudflare.com/ "https://www.cloudflare.com/")
2. Activate 2FA with google authenficator is recommended!
3. Change your nameservers: Pointing to Cloudflare’s nameservers is critical for activating your site successfully. Otherwise, [Cloudflare](https://www.cloudflare.com/) is unable to manage your DNS and optimize your site.

 Registrars typically process nameserver updates within 24 hours. Once this process completes, [Cloudflare](https://www.cloudflare.com/) confirms your site activation via email.

