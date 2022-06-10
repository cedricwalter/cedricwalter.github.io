---
id: 2706
title: 'securityimages 4.0.0 and opencomment'
date: '2006-09-22T10:31:56+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2706'
permalink: /joomla/securityimages-4-0-0-and-opencomment/
image: /wp-content/uploads/2006/03/box_securityimages.jpg
tags:
    - joomla
    - securityimages
---

  
| ![](/assets/images/2006/03/box_securityimages.jpg) | I am back online…my notebook crashed last week and was promptly replaced by Hewlett Packard and the new hard disk died one day after being renewed…and as usual, a lot of backup (powerquest v2i protector), but I was not able to restore them, as it seems that my disk was silently dying since weeks , and "check backup afterward for consistency" is not checked as default. I work yesterday 3 hours on securityimages, and test it with a n<span style="font-weight: bold;">ew secure PHP4 installation. <span style="font-weight: bold;">OpenComment is also currently tested, I am removing uneeded functionnality (not fully developed or tested), as soon as it work, I will deploy it to <http://demo.waltercedric.com>. I hope to be able to use it here on my homepage before end of next week…So all Beta tester are welcome (Colin :-))  <span style="font-weight: bold;">Click read more to see what has changed in securityimages 4.0.0 |
|---|---|

    
 <span style="font-weight: bold;">Securityimages 4.0.0 release "enhanced Security "

 This version is now running with:

- PHP.ini safe mode OFF
- Joomla RG Global Emulation O
- PHP.ini register global = Off

 I’ will also in the future only develop with that PHP settings, so that will mean more securities for all users and host running my code.

 <span style="font-weight: bold;">Bugs solved:  
 artf4021: [php safe mode &amp; com\_securityimages](/sf/go/artf4021?nav=1)  
 artf1411: [Save setting button changes if config.securiyimages.php is not writable](/sf/go/artf1411?nav=1)  
 artf4989: [register\_globals Off patch](/sf/go/artf4989?nav=1)  
 artf3206: [com\_contact](/sf/go/artf3206?nav=1)  
 artf2777: [No text displayed in security Image](/sf/go/artf2777?nav=1)

 <span style="font-weight: bold;">API changes  
 Will work only with new release of akcomment, akobook, etc…<span style="font-weight: bold;">

| securityimages < 4.0.0 |  |
|---|---|
| in PHP <form> | <small><?php include ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/client.php’); ?>    <?php echo insertSecurityImage("security\_refid"); ?>    <?php echo getSecurityImageText("security\_try"); ?>    <?php echo getSecurityImageTextHeader(); ?>     <?php echo getSecurityImageTextHelp(); ?>    <?php echo getSecurityImageField("security\_try"); ?> </small>  The code above insert the image, and the text, You page normally submit information to the server for processing. Most of the time, the last 2 lines are inserted in a <form> |
| in PHP code checking the <form> | <small>include ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/server.php’); </small>  <small>$checkSecurity = checkSecurityImage($security\_refid, $security\_try); </small>  <small>if $checkSecurity = true //then the user has entered the right text.</small> |

 <span style="font-weight: bold;">  
 <span style="font-weight: bold;">  
 

| securityimages >= 4.0.0 | Introducing a captcha hidden field visibility name |
|---|---|
| in PHP <form> | <small>include($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/client.php’);    <span style="background-color: rgb(255, 255, 0);">$packageName = ‘securityimage\_newpass’;    echo "<tr><td>".getSecurityImageTextHeader()." \*</td><td>".insertSecurityImage(<span style="background-color: rgb(255, 255, 0);">$packageName)."<br/>".getSecurityImageTextHelp()."".getSecurityImageField<span style="background-color: rgb(255, 255, 0);">($packageName)."</td></tr>";</small> |
| in PHP code checking the <form> | <small>$securityimage\_newpass\_refid = mosGetParam( $\_POST, </small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_refid’, ” );    $securityimage\_newpass\_try = mosGetParam( $\_POST, </small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_try’, ” );    $securityimage\_newpass\_reload = mosGetParam( $\_POST, ‘</small><small><span style="background-color: rgb(255, 255, 0);">securityimage\_newpass</small><small>\_reload’, ” );     include\_once ($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/server.php’);    $checkSecurity &amp;= checkSecurityImage($securityimage\_newpass\_refid, $securityimage\_newpass\_try, $securityimage\_newpass\_reload);</small> |

 <span style="font-weight: bold;">

 New!  
 HNCAPTCHA: now color background is fully configurable

   
 <span style="font-weight: bold;"><span style="font-weight: bold;">