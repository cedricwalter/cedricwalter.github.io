---

title: 'Joomla 3.8.7 and WTLib WinNMP 18.03'
date: '2018-04-30T18:55:00+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2018/04/step1.png
tags:
    - java
    - joomla
---

As always updating to the latest version of all your developement components is never without any issues, here is what you need to take into consideration when upgrading Joomla 3.8.7 and WinNMP 18.03

Install WinNMp 18.03 from <https://winnmp.wtriple.com/> in any directory, default is C:\\WinNMP\\

Unpack Joomla 3.8.7 to C:\\WinNMP\\WWW\\dev for example

When starting WinNMP, you can click reload, to see the site appearing

 ![](/assets/images/2018/04/step1.png)

 Now edit Nginx virtual server

 ![](/assets/images/2018/04/step2.png)

 And cut and paste the following config (you can get it from <http://winnmp.wtriple.com/nginx.php#Joomla-Nginx-configuration>)

 ![](/assets/images/2018/04/step3.png)

You can now install Joomla like you are used to, by opening a browser and pointing to <http://dev.test>

After the installation you’ll notice that the administrator area is broken, some CSS/Javascript can not be located (Http 404). To solve this, open with your favorite text editor joomla! configuration.php and set the live site property (was in Joomla 1.5, then removed then it appear again)

 ![](/assets/images/2018/04/step4.png)

 Now the administrator area should work again… but you can not install any Joomla! extensions, because open\_basedir = “c:/winnmp” and do not contains the temporary directory, you can safely deactivate it for development, but NOT on ANY production server.

;open\_basedir = “c:/winnmp”

 Last but not least, php\_uname is used by Joomla, activate it in php.ini to remove some warnings