---

title: 'Developpers: Running Mambo into eclipse with no effort'
date: '2005-03-06T20:04:21+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/03/phpeclipse_toolbar.gif
tags:
    - configuration
    - installation
    - mambo
---

 Advantages:

- Eclipse is free, eclipse has a very good plugin for PHP development: PHPeclipse.
- Eclipse is working nicely with CVS (concurent versionning system), this is a good way to version any data on your production site.(pictures, configuration files, even mysql database etc…)
- Eclipse is working nicely with ANT, a kind of make, it can help for automating deployment of your site or automating some tasks
- Debugging, css, html validation, a way to look and version your work.

# Drawbacks:

- Make sense if You’re a developer or really want to version Your internet page.
- Heavy approach: need to start #Eclipse to "play" with Your Site locally
- Need to install CVS under windows (a pain)

1. Download eclipse from [www.eclipse.org](http://www.eclipse.org/) and install normally (it is a windows application): recommended e:\\eclipse
2. Download PHPeclipse from [http://sourceforge.net/projects/phpeclipse](http://sourceforge.net/projects/phpeclipse) and install normally (it is a windows application)
3. Install a Java Development Kit from [www.java.com](http://www.java.com/) recommended is jdk1.4.2\_06
4. Uncompress Mambo-Eclipse-v1.0.zip (download in [www.waltercedric.com](http://www.waltercedric.com/) in download section Mambo) on a windows drive E: recommended in E:/Mambo/  
      
    | Mambo-Eclipse-v1.0.zip contains: |
    |---|
    | A ready to use eclipse workspace. |
    | Apache 1.3.33, PHP 4.3.10, MySql 4.1.9 et phpMyAdmin 2.6.1. |
    |  |
5. Copy my.ini into c:\\windows\\
6. Open the batch file startEclipseMambo.bat and change the location of jdk and eclipse binary (change accordingly what is in bold)  
    E:\\eclipse\\bin\\r3.0\\eclipse.exe -vm C:\\j2sdk1.4.2\_06\\bin\\javaw.exe -data "E:\\Mambo" -showlocation 
7. Start eclipse by running the file startEclipseMambo.bat
8. Copy Your data:  
    | You already have a Mambo site | You do not have any Mambo site |
    |---|---|
    | Copy Your entire internet page (everything under the root (/)) with FTP   under E:/Mambo/httpdocs/ | Copy Mambo from [www.mamboserver.com](http://www.mamboserver.com/) and decompress zip file into   E:/Mambo/httpdocs/   Start MySQL and Apache (see point 10.)   Point Your browser to [http://localhost/installation/](http://localhost/installation/) and follow instruction |
9. If it is a fresh or a existing installation, in any case You must adapt the path in E:/Mambo/httpdocs/configuration.php  
    | E:/Mambo/httpdocs/configuration.php |
    |---|
    | $mosConfig\_absolute\_path = ‘E:/Mambo/httpdocs/’;   $mosConfig\_live\_site = ‘http://localhost/’;   …   $mosConfig\_cachepath = ‘E:/Mambo/httpdocs/cache’; |
10. Start MySQL and Apache by clicking on each icon in eclipse  
    ![](/assets/images/2005/03/phpeclipse_toolbar.gif)
11. If one of the component do no start correctly, verify the settings of PHPeclipse under the menu Windows – Preferences- PHPeclipse Web Development or look in the logs file (E:\\Mambo\\apache\\logs\\error.log)
12. Point Your browser to

- http://localhost/mysql/ for starting the phpmyadmin admin console
- http://localhost/ for your site

Contact me or post coments if You need help. Soon install CVS under Windows or Linux Suse