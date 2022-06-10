---
id: 2085
title: 'Stability of my Site, out of operations during 2 days'
date: '2005-11-04T11:59:18+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2085'
permalink: /internet/stability-of-my-site-out-of-operations-during-2-days/
tags:
    - homepage
    - monitoring
---

 My site is currently creating 60 request / second to the hosting mysql company ! So my site has been deactivated yesterday and today. It has been reactivated today 04.11.2005 at 10:00 GMT+1 in order to let me do some actions

**I am currently working on it…**

- I have supress the redirect (index.html) to /Mambo/index.php
- I have moved #Joomla from /Mambo to the root of [<font color="#800080">www.waltercedric.com](https://waltercedric.com/new/?p=45)
- I have empty all content cache of #Joomla
- I have modified the .htaccess accordingly (rewrite from /Mambo to /)
- I have suppres all 15500 known rewriting URL from [SEF404](http://mamboforge.net/projects/sef404/) database!

Together with the Company [www.cineteck-fr.com](http://www.cineteck-fr.com/) (monitoring).

Next status from Cineteck at 18:00 GMT+1, if it is still catastrophic, I will slowly deactivated #Joomla Components/Modules/Mambots in the hope to localize the problem.

If everything goes well, You will be able to read me tonight and tomorrow, if not the site **will be switch off** as it overcharge the hosting company.