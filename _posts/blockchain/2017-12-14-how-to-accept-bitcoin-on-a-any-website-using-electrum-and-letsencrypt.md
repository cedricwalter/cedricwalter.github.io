---

title: 'How to accept Bitcoin on a website using Electrum and Letsencrypt'
date: '2017-12-14T09:12:46+01:00'
author: 'Cédric Walter'
categories:
- blockchain


---

This tutorial will show you how to accept Bitcoin on a website with SSL signed payment requests
using [Electrum](https://electrum.org), required is a shell access and enough permission to
install [electrum](https://electrum.org)

- A webserver serving static HTML
- A SSL certificate (signed by a CA)
- Electrum version >= 2.6

Install dependencies:

```bash
sudo apt-get install python3-setuptools python3-pyqt5 python3-pip
```

Install Electrum:

```bash
sudo pip3 install https://download.electrum.org/3.0.3/Electrum-3.0.3.tar.gz</tt>
```

then run on your server

```bash
electrum create electrum daemon start electrum setconfig ssl_privkey /etc/letsencrypt/live/xxxxxx.com/privkey.pem electrum setconfig ssl_chain /etc/letsencrypt/live/xxxxxx.com/cert.pem  electrum setconfig requests_dir /home/xxxxxx.com/httpdocs/r electrum setconfig url_rewrite "['file:///home/xxxxxx.com/httpdocs/','https://www.xxxxxx.com/']" electrum addrequest 0.015 -m "Payment for Acme.inc service" 
```

this will return a json with the URL to present to your customers.
eg. https://www.xxxxxx.org/r/index.html?id=7c2888541a

[More here](http://docs.electrum.org/en/latest/merchant.html)  
