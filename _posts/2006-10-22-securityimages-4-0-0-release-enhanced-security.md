---
id: 2728
title: 'Securityimages 4.0.0 release enhanced Security'
date: '2006-10-22T21:41:42+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2728'
permalink: /joomla/securityimages-4-0-0-release-enhanced-security/
tags:
    - joomla
    - securityimages
---

 <span style="font-weight: bold;"> <span style="font-weight: bold;">Securityimages 4.0.0 release "enhanced Security "

 This version is now running with:

- PHP.ini safe mode ON
- Joomla RG Global Emulation O
- PHP.ini register global = Off

 <span style="font-weight: bold;">Bugs solved:  
 artf4021: [php safe mode &amp; com\_securityimages](http://www.waltercedric.com/sf/go/artf4021?nav=1)  
 artf1411: [Save setting button changes if config.securiyimages.php is not writable](http://www.waltercedric.com/sf/go/artf1411?nav=1)  
 artf4989: [register\_globals Off patch](http://www.waltercedric.com/sf/go/artf4989?nav=1)  
 artf3206: [com\_contact](http://www.waltercedric.com/sf/go/artf3206?nav=1)  
 artf2777: [No text displayed in security Image](http://www.waltercedric.com/sf/go/artf2777?nav=1)

 <span style="font-weight: bold;">API changes  
 Will work only with new release of akcomment, akobook, etc…<span style="font-weight: bold;">

| securityimages &lt; 4.0.0 |  |
|---|---|
| in PHP &lt;form&gt; | <small>&lt;?php include ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/client.php’); ?&gt;    &lt;?php echo insertSecurityImage("security\_refid"); ?&gt;    &lt;?php echo getSecurityImageText("security\_try"); ?&gt;    &lt;?php echo getSecurityImageTextHeader(); ?&gt;     &lt;?php echo getSecurityImageTextHelp(); ?&gt;    &lt;?php echo getSecurityImageField("security\_try"); ?&gt; </small>  The code above insert the image, and the text,    You page normally submit information to the server for processing.    Most of the time, the last 2 lines are inserted in a &lt;form&gt; |
| in PHP code checking the &lt;form&gt; | <small>include ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/server.php’); </small>  <small>$checkSecurity = checkSecurityImage($security\_refid, $security\_try); </small>  <small>if $checkSecurity = true //then the user has entered the right text.</small> |

 <span style="font-weight: bold;">  
 <span style="font-weight: bold;">  
 

| securityimages &gt;= 4.0.0 | Introducing a captcha hidden field visibility name |
|---|---|
| in PHP &lt;form&gt; | <small>include($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/client.php’);    <span style="background-color: rgb(255, 255, 0);">$packageName = ‘securityimage\_newpass’;    echo "&lt;tr&gt;&lt;td&gt;".getSecurityImageTextHeader()." \*&lt;/td&gt;&lt;td&gt;".insertSecurityImage(<span style="background-color: rgb(255, 255, 0);">$packageName).   "&lt;br/&gt;".getSecurityImageTextHelp().""   .getSecurityImageField<span style="background-color: rgb(255, 255, 0);">($packageName)."&lt;/td&gt;&lt;/tr&gt;";</small> |
| in PHP code checking the &lt;form&gt; | <small>$securityimage\_newpass\_refid = mosGetParam( $\_POST, </small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_refid’, ” );    $securityimage\_newpass\_try = mosGetParam( $\_POST, </small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_try’, ” );    $securityimage\_newpass\_reload = mosGetParam( $\_POST, ‘</small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_reload’, ” );     include\_once ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/server.php’);    $checkSecurity &amp;= checkSecurityImage($securityimage\_newpass\_refid, $securityimage\_newpass\_try, $securityimage\_newpass\_reload);</small> |

 <span style="font-weight: bold;">

 New!  
 HNCAPTCHA: now color background is fully configurable