---
id: 3001
title: 'Create Your own SSL certificate for Apache'
date: '2007-07-01T22:51:39+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3001'
permalink: /development/create-your-own-ssl-certificate-for-apache/
tags:
    - apache
---

###Create a new RSA key

```
# openssl genrsa -des3 -out server.key 1024
```

 Give a very lengthy key, and save it somewhere in a PGP file or TrueCrypt volume

###Create a non encrypted version for Apache

```
# openssl rsa -in server.key -out server.key.unsecure
```

###Prepare the mark inquiry

```
# openssl req -new -key server.key -out server.csr
```

 Attention enter the host from where the certificate will be use, since browser are matching content of certificate with host url.

###Sign the certificate

```
# openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

### **Add the SSL certificate to Apache**

# <span style="color: rgb(255, 0, 0);">Attention  
<span style="color: rgb(255, 0, 0);">path to server.key and server.crt may differ!**

<small style="color: rgb(51, 51, 51);">(SuSE 9.3 keys store at /etc/apache2/ssl.key/)</small>

```
# cp server.key.unsecure /etc/httpd/ssl.key/server.key

# cp server.crt /etc/httpd/ssl.crt/server.crt

# chmod 400 /etc/httpd/ssl.key/server.key

# chmod 400 /etc/httpd/ssl.crt/server.crt


```

###Restart Apache



| Brutal | Graceful |
|---|---|
| ``` 

# /etc/init.d/apache restart ``` | ``` 

# apache2ctl gracefu ``` |

```
 
```