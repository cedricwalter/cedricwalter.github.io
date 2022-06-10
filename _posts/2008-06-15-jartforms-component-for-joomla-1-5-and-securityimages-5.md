---
id: 3473
title: 'JArtForms component for Joomla 1.5 and SecurityImages 5'
date: '2008-06-15T19:21:33+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3473'
permalink: /joomla/jartforms-component-for-joomla-1-5-and-securityimages-5/
header:
  teaser: /assets/images/2008/06/3028_logojext_thumb.png
---

[![3028_logo-jext](/assets/images/2008/06/3028_logojext_thumb.png)](/assets/images/2008/06/3028_logojext.png)   
[JArtForms](http://joomlacode.org/gf/project/jartforms/) seems to have issue with SecurityImages, [as seen in my forum here](http://forums.waltercedric.com/index.php?topic=491.0), so here are the patched   
versions working with SecurityImages 5.0.

[ArtForms2.1b7.1-for-J1.5-RC1-Update-Only.zip](http://joomlacode.org/gf/project/jartforms/frs/) is clearly developed for SecurityImages 4.X.X (Joomla 1.0.X)   
and not for SecurityImages 5.X.X (Joomla 1.5.X)

The [JArtForms](http://joomlacode.org/gf/project/jartforms/) component is a package for an easy From Generator for #Joomla 1.0.xx.   
It allows you to generate as much Forms as you like, you can define all fields   
that you need and also make file upload and attachment possible.   
The idea of the [JArtForms](http://joomlacode.org/gf/project/jartforms/) is to give a tool that is enabling you to create a   
dynamic forms in minutes within your #Joomla! CMS.   
The key features are:

> - Possibility for create an unlimited amount of forms with unlimited fields and contents.
> - Possibility to edit component’s CSS, language, settings and update easy from old versions.
> - Optional you can save all received forms in database.
> - Custom Lay-out for every field.
> - View received forms in Front End.
> - Joomla’s SEF support and added sh404sef support.
> - Joomfish support.
> - Newsletter Bridge (only Letterman for now).
> - Database Backups and easy updates from previous versions.
> - Captcha support with optional systems for every form (Alikon Mod, CaptchaForm,   
>     CaptchaTalk, reCaptcha, Alikon Mambot, SecurityImages and EasyCaptcha).
> - Language and Captcha audio support for spanish, english, german, hungarian,   
>     dutch, turkish, brazilian portuguese, french, italian and polish (polish without audio files).
> - And much more!

I wont maintain nor make any new versions of [JArtForms](http://joomlacode.org/gf/project/jartforms/). Please contact the authors and ask them to   
patch their code, or with the next version my code will suddenly break…

# For #Joomla 1.5**, either download

- [JArtForms 2.1b7.1 update for SecurityImages 5](https://waltercedric.com/new/?p=234) OR
- [JArtForms 2.1b7.1 for SecurityImages 5](https://waltercedric.com/new/?p=305)

For hacker, all you have to do is use the version [ArtForms2.1b7.1-for-J1.5-RC1-Update-Only.zip](http://joomlacode.org/gf/project/jartforms/frs/) and follow   
the tutorial below

in file administrator/components/com\_artforms/lib/af.lib.afforms.php line 672 replace code producing captcha with

```
<span class="kwrd">case <span class="str">'6':  <span class="rem">//securityimages captcha component

<span class="kwrd">if (file_exists(JPATH_SITE.DS.<span class="str">"administrator".DS.<span class="str">"components".DS.<span class="str">"com_securityimages".DS.<span class="str">"config.securityimages.php")) {

$html = <span class="str">'';

$html .= <span class="str">"<script type="text/javascript" src="".JURI :: root().<span class="str">"components/com_securityimages/js/securityImages.js"></script>";

$html .= <span class="str">"<img id='_artFormCaptcha' name='_artFormCaptcha' align='middle' src='".JURI :: root().<span class="str">"/index.php?option=com_securityimages&task=displayCaptcha'>"; 

$html .= <span class="str">"<a href="javascript:askNewSecurityImages('_artFormCaptcha');">";

$html .= <span class="str">"<img src="".JURI :: root().<span class="str">"/components/com_securityimages/buttons/reload.gif" id='_artFormCaptchaReload' name='_artFormCaptchaReload' border='0'>";

$html .= <span class="str">"</a>";

$html .= <span class="str">'';

$html .= <span class="str">''.JText::_(<span class="str">'ARTF_CAPTCHA_TITLE').<span class="str">'<input type="text" name="_artFormCaptchaUserTry" id="_artFormCaptchaUserTry" />';

$html .= <span class="str">'';

 <span class="kwrd">return $html;

} <span class="kwrd">else {

<span class="kwrd">return;

}

 <span class="kwrd">break;
```

 .csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, “Courier New”, courier, monospace; background-color: #ffffff; /\*white-space: pre;\*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; }

Line 164 for the code checking the captcha

```
<span class="kwrd">if (file_exists(JPATH_SITE.DS.<span class="str">"administrator".DS.<span class="str">"components".DS.<span class="str">"com_securityimages".DS.<span class="str">"config.securityimages.php")) {

$checkSecurity = <span class="kwrd">false; 

$_artFormCaptchaUserTry  = JArrayHelper::getValue( $_POST, <span class="str">'_artFormCaptchaUserTry', <span class="str">'' );

$mainframe->triggerEvent(<span class="str">'onSecurityImagesCheck', array($_artFormCaptchaUserTry, &$checkSecurity));

 <span class="kwrd">if ( !$checkSecurity ) {

$msg = JText::_( <span class="str">'ARTF_CAPTCHA_FAIL' ).<span class="str">'&afimg=0';

$mainframe->redirect( JRoute::_( $alink.<span class="str">'&formid='.$formid.<span class="str">'&Itemid='.$Itemid.<span class="str">'&afmsg='.$msg ) );

}
```

 .csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, “Courier New”, courier, monospace; background-color: #ffffff; /\*white-space: pre;\*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; }

 .csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, “Courier New”, courier, monospace; background-color: #ffffff; /\*white-space: pre;\*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; }