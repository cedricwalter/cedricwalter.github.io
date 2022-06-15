---
id: 2506
title: 'Open-SEF.org friendly url mapped to root url'
date: '2006-05-01T17:32:10+02:00'
author: 'Cédric Walter'



tags:
- homepage
---

I’ve found a workaround to the "*You are not authorized to view that resource*" problem.For some reasons, which are
still unknown for me, and when someone try an invalid url, or the tool get mad, the **OPEN-SEF** create a dummy friendly
URL rule: it map it to "/" which led to the invalid message.

To solve temporary this error, I use to unpublish the fault URL rule, but since I still need to sleep 🙂 i can not
guarantee thee statbility when I am not in front of my computer.

While I did not find the reason, and after tweaking the **OPEN-SEF** parameters for a while, I decide to put a
workaround in place: a *crontab*  
1\. **Create a file on your server**: *sef\_workaround.sh*  
2\. **put this inside:** *mysql -uDBUSER -pDBPWD DBNAME -e "delete FROM DBPREFIX\_sef WHERE external = ‘/’"*  
3\. **create a crontab entry** using PLESK panel or SSH (*crontab -e*)  
*\*/1 \* \* \* \* /var/www/vhosts/waltercedric.com/private/sef\_workaround.sh*

this will execute the file sef\_workaround.sh every minute. Note I will contact Mrko Schmuck (Aka predator) and browse
its forum to see if I can solve it elegantly.