---
id: 2655
title: 'site down more than 2 days: under attack'
date: '2006-06-23T23:21:10+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2655'

tags:
    - homepage
    - 'My Homepage'
---

 The server hosting my personal webpage waltercedric.com has been attacked in the last few days. Till it get down:

Facts:

- no more mysql connection were available
- ssh connections no more possible,
- web scanner trace in logs.

We are still not trusting the operating system, because we dont know if it has been compromised (by a rootkit or backdooor), and we will have to take some actions in the next few days, like formatting, hardening installation, etc…

Right now, this site has no more email connection anymore, since logs have revealed some bad things related to mis-use of email system. That mean that You wont be able to contact me in the next few days: sorry for that.

I will also change all passwords and that may turn the site unavailable tomorrow, and publish all logs extract to help future people to take the right actions in such a case.  


Sorry for the inconvenience…