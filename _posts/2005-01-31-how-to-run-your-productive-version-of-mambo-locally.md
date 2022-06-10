---
id: 1549
title: 'How to run Your productive version of Mambo locally'
date: '2005-01-31T16:53:32+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1549'
permalink: /internet/how-to-run-your-productive-version-of-mambo-locally/
image: /wp-content/uploads/2005/01/easyPHP.jpg
tags:
    - configuration
    - development
    - downloaded
    - flexibility
    - homepage
    - installation
---

<span style="font-weight: bold;">Do You want to install Mambo?, have a copy of Your productive mambo homepage running locally? or simply develop easily PHP/MySQL code? Do You want to make Mambo a try without the hassle of installations and configurations?  
 <span style="font-weight: bold; color: rgb(255, 0, 0);">EasyPHP might be the answer!  
<span style="font-weight: bold; font-style: italic;">EasyPHP <span style="font-style: italic;"> is a complete software package allowing to use all the power and the flexibility that offers the dynamic language PHP and the effecient use of databases under Windows. Package includes an Apache server, a MySQL database, a fully PHP execution, as well as easy development tools for your web site or your applications. 

Click <span class="readon"> Read more…<span style="font-style: italic;"> to see my experience with it:

**Install easyPHP** EasyPHP is a complete software package allowing to use all the power and the flexibility that offers the dynamic language PHP and the effecient use of databases under Windows. Package includes an Apache server, a MySQL database, a fully PHP execution, as well as easy development tools for your web site or your applications.

| ![](/assets/images/2005/01/easyPHP.jpg) | The latest stable version (v1.7) is made of: - Apache 1.3.27 - PHP 4.3.3 - MySQL 4.0.15 - PhpMyAdmin 2.5.3  and can be downloaded at: <http://www.easyphp.org/> |
|:-:|---|
| ![](/assets/images/2005/01/easyPHPicon.jpg) | It is a windows executale, all You have to do is install it. |
| ![](/assets/images/2005/01/easyPHP-0.gif) | Start EasyPHP in the programs menu |
| ![](/assets/images/2005/01/easyPHPiconTray.jpg) | Verify that EasyPHP is running in the system tray |
| ![](/assets/images/2005/01/easyPHP-1.jpg)    ![](/assets/images/2005/01/easyPHP-2.jpg) | Check configuration, Apache and MySQl must be started. If not be sure not to have another apache process running on port 80 |
| ![](/assets/images/2005/01/easyPHP-3.jpg) | Check proper installation of EasyPHP. Should open a web browser and drive You to this page |

## **Copy data from Your productive system (www)**

| **Copy** | **How** |  |
|---|---|---|
| all remote file | Using Your favorite FTP tool |  |
| all data in remote Database | With your provider HTML tool (PhpMyAdmin)    Export all tables and content in a SQL file on your Disk |  |

## **Install file data locally**

Copy Your webserver root to: EasyPHP1-7www   
 **example**: if EasyPHP is installed in E:/www.waltercedric.com/<font face="Courier">, then copy into E:/www.waltercedric.com/EasyPHP1-7/www/

## **Restore database data locally**

| ![](/assets/images/2005/01/phpMyAdmin.jpg) | Start a browser and go to <http://127.0.0.1/mysql/> |
|---|---|
| ![](/assets/images/2005/01/phpMyAdmin-1.jpg)    ![](/assets/images/2005/01/phpMyAdmin-2.jpg) | Restore the Data in your new database by importing the SQL file. - Bloc by bloc (see picture) or - By importing the SQL zip file         (not working for me as the browser is doing timeout         since my Databse is quite big) |
| ![](/assets/images/2005/01/easyPHP-4.jpg) | If the restore is successful, create a user, as found in the configuration file of Mambo. Create a User - Of the same name and password, or - Create a new user (better because of security concerns) ut then do not forget to adapt the configuration.php accordingly.  \| in Mambo/configuration.php    ocate the mySQL login and password mambo is using \| \| &lt;?php     $mosConfig\_offline = ‘0’;    $mosConfig\_host = ‘localhost’;    $mosConfig\_user = ‘**XXXX**‘;    $mosConfig\_password = ‘**XXXXX**‘;    . \| |
|---|
| ![](/assets/images/2005/01/easyPHP-5.jpg) | Grant this user all rights by clicking edit. |

## **Change Mambo settings**

there is a lot of chance that Your local Mambo is not at the same location of Your productive Mambo, so Small changes in Mambo/configuration.php are needed:

| **Example in production** | **Example localy** |
|---|---|
| $mosConfig\_absolute\_path = ‘www.waltercedric.com/Mambo’; | $mosConfig\_absolute\_path = ‘E:/www.waltercedric.com/EasyPHP1-7/www/Mambo’; |
| $mosConfig\_cachepath = ‘www.waltercedric.com/Mambo/cache’; | $mosConfig\_cachepath = ‘E:/www.waltercedric.com/EasyPHP1-7/www/Mambo/cache’; |

Create a cache directory locally (I never do a backup of this directory, as it can be quite big in production)

Normally You’re done!