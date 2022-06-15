---

title: 'PHP basic settings fo more security'
date: '2007-07-21T23:14:33+02:00'
author: 'Cédric Walter'



tags:
    - php
---

<div style="">If you consider using PHP on a new server, use nothing else than PHP 5.2.3, it may be a pain to rewrite or patch foreign code, but PHP 5.2 is more secure and 100% faster than PHP4, moreover PHP4 is soon dead! PHP 4 end of life announcement  
 "Today it is exactly three years ago since PHP 5 has been released. In those three years it has seen many improvements over PHP 4. PHP 5 is fast, stable &amp; production-ready and as PHP 6 is on the way, PHP 4 will be discontinued.  
  The PHP development team hereby announces that support for PHP 4 will continue until the end of this year only. After 2007-12-31 there will be no more releases of PHP 4.4. We will continue to make critical security fixes available on a case-by-case basis until 2008-08-08. Please use the rest of this year to make your application suitable to run on PHP 5. For documentation on migration for PHP 4 to PHP 5, we would like to point you to our [migration 

 If you are not able to use the latest version, consider applying PHP hardening patches from [http://www.hardened-](http://www.hardened-php.net/hphp/how_to_install_or_upgrade.html)[php.net/hphp/how\_to\_install\_or\_upgrade.html](http://www.hardened-php.net/hphp/how_to_install_or_upgrade.html) and compiling PHP for yourself (these patches are no more needed in PHP 5.2 since they are part of the main source tree). A lot of people already do that, even if it is not easy.

PHP applications should not execute OS code…  Disable certain PHP functions (system,exec,shell\_exec, phpinfo)  
 Malicious commands can be executed though PHP shell functions. If some programs still require these functions, consider:

- Looking for another application working without these functions.
- Patching the code.
- Asking authors to remove them, or find a workaround.

A lot of people do not configure PHP correctly…

In fact not so much people are correctly configuring their PHP runtime, as [shown in this study of 11 000 hosts based on phpinfo() ](http://www.nexen.net/articles/dossier/php_configuration_statistics.php). How can hacker find such kind of vital informations? quite easilythanks to any search engine.  
For example, in Google (the engine I know the best) by typing allinurl: phpinfo.php [I get 39200 hosts that are revealing these vital settings](http://www.google.com/search?hl=en&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&hs=FRg&q=allinurl%3Aphpinfo.php&btnG=Search)

 Conclusions from [PHP configuration statistics](http://www.nexen.net/articles/dossier/php_configuration_statistics.php)  
\[..\]  
Configuration values hold surprises, or not. After reading those values, we may even wonder if some functionalities did require a directive or not…  
As usually, default values from the distribution are the most commonly used values : it shows how much trust PHP programmers have in the PHP group. Or, it may also show that too few people read the php.ini file, and understand it.  
\[..\]   
Rules:

1. <span style="font-size: 78%;"><span style="position: absolute; left: -4.13%;">•Allways use the latest patch level version.
2. Open and setup ALL <span lang="DE-CH" style="font-family: "Courier New"; font-size: 10pt;">php.ini on disk (<span lang="DE-CH" style="font-family: "Courier New"; font-size: 10pt;">find / -name php.ini) this is especially true if you run more than one php version (php4/php5 as module of fast cgi)
3. It is recommended to run PHP as fastCGI
4. Recommended settings for a secure PHP are:  
       
    | ` 	register_globals = 0

 	safe_mode = 1

// a well written PHP appliation should not rely on these functions to operate

disable_functions = show_source, system, shell_exec, passthru, exec, phpinfo, popen, proc_open

 	allow_url_fopen = 0

 	magic_quotes_gpc = 1

 	open_basedir = /www/httprootdir` |
    |---|

 more to come here soon