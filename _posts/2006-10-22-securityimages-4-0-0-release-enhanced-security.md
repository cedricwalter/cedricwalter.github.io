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

Securityimages 4.0.0 release "enhanced Security "

 This version is now running with:

- PHP.ini safe mode ON
- Joomla RG Global Emulation O
- PHP.ini register global = Off

Bugs solved:  
 artf4021: [php safe mode &amp; com\_securityimages](http://www.waltercedric.com/sf/go/artf4021?nav=1)  
 artf1411: [Save setting button changes if config.securiyimages.php is not writable](http://www.waltercedric.com/sf/go/artf1411?nav=1)  
 artf4989: [register\_globals Off patch](http://www.waltercedric.com/sf/go/artf4989?nav=1)  
 artf3206: [com\_contact](http://www.waltercedric.com/sf/go/artf3206?nav=1)  
 artf2777: [No text displayed in security Image](http://www.waltercedric.com/sf/go/artf2777?nav=1)

API changes  
 Will work only with new release of akcomment, akobook, etc…

| securityimages < 4.0.0 |  |
|---|---|
| in PHP <form> | <small><?php include ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/client.php’); ?>    <?php echo insertSecurityImage("security\_refid"); ?>    <?php echo getSecurityImageText("security\_try"); ?>    <?php echo getSecurityImageTextHeader(); ?>     <?php echo getSecurityImageTextHelp(); ?>    <?php echo getSecurityImageField("security\_try"); ?> </small>  The code above insert the image, and the text,    You page normally submit information to the server for processing.    Most of the time, the last 2 lines are inserted in a <form> |
| in PHP code checking the <form> | <small>include ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/server.php’); </small>  <small>$checkSecurity = checkSecurityImage($security\_refid, $security\_try); </small>  <small>if $checkSecurity = true //then the user has entered the right text.</small> |

  
  
 

| securityimages >= 4.0.0 | Introducing a captcha hidden field visibility name |
|---|---|
| in PHP <form> | <small>include($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/client.php’);    <span style="background-color: rgb(255, 255, 0);">$packageName = ‘securityimage\_newpass’;    echo "<tr><td>".getSecurityImageTextHeader()." \*</td><td>".insertSecurityImage(<span style="background-color: rgb(255, 255, 0);">$packageName).   "<br/>".getSecurityImageTextHelp().""   .getSecurityImageField<span style="background-color: rgb(255, 255, 0);">($packageName)."</td></tr>";</small> |
| in PHP code checking the <form> | <small>$securityimage\_newpass\_refid = mosGetParam( $\_POST, </small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_refid’, ” );    $securityimage\_newpass\_try = mosGetParam( $\_POST, </small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_try’, ” );    $securityimage\_newpass\_reload = mosGetParam( $\_POST, ‘</small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_reload’, ” );     include\_once ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/server.php’);    $checkSecurity &amp;= checkSecurityImage($securityimage\_newpass\_refid, $securityimage\_newpass\_try, $securityimage\_newpass\_reload);</small> |



 New!  
 HNCAPTCHA: now color background is fully configurable