---
id: 2637
title: 'OpenComment, AJAX and security'
date: '2006-06-04T23:41:29+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2637'
permalink: /joomla/opencomment-ajax-and-security/
header:
  teaser: /assets/images/2006/03/opencomment.jpg
tags:
    - joomla
    - opencomment
---

| ![](/assets/images/2006/03/opencomment.jpg) | InOpenComment, the next commenting system for #Joomla based on akocomment, the following functions are NOW running with AJAX. - Rating comments up and down, - Deleting comments,  And soon, filtering operations and even publishing new comments.  But working in computer science do not also mean: ready for production….because AJAX without taking precautions can be disastrous….This code is facing some strong securities issues I will have to solve: |
|---|---|

- AJAX code is not running in the #Joomla sessions! so I have to re implement some low level operations like accessing the database (while already done in #Joomla)<span style="color: rgb(0, 102, 0); font-weight: bold;">
- <span style="color: rgb(0, 102, 0); font-weight: bold;">Who protect comment against replaying rating up attack? I will introduce apublic key per article which has to be submitted to the server, and aprivate key store in the session, which will be destruct after the first operation.
- <span style="font-weight: bold; color: rgb(0, 102, 0);">How to make sure that the asynchronous operation on a comment is originated from a submitted page of my server?  
    -> I will introduce aserver challenges keys: a cryptographic fields which is highly depending of the following: server name, URL, time, and random part. This ticket will also have a time stamp in it, if you wait more than, lets say 20 minutes, you won’t be able to rate or operate on comment. This is similar with com\_hashcash, so nothing really new to me.
- <span style="font-weight: bold; color: rgb(0, 102, 0);">Avoid that a rating up operation for a comment A get hacked by injecting new parameters for comment B?  
    -> Comments will be identified by their UUID (and not a simple ID like in akocomment)  
    -> Users would have to know it to make an attack on multiple joomla site at the same time.

 If You see something else or know a similar code or algorithm in the open source world, contact me or post your remarks below.