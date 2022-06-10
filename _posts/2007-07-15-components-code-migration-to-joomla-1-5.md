---
id: 3013
title: 'components code migration to joomla 1.5'
date: '2007-07-15T20:37:19+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3013'
permalink: /joomla/components-code-migration-to-joomla-1-5/
tags:
    - joomla
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2007/07/joomla_cms.png)

I am  in the process of moving all my open source project (7!) to the latest #Joomla API 1.5. I’ve tried to summarize in the following table some conversion rules

Right now there IS NOT any order in that table, like my findings 🙂

Feel free to send me corrections or point me to ressource links that may help me 🙂

| <span style="font-weight: bold;">In Joomla 1.0.X | <span style="font-weight: bold;">has to be converted in Joomla 1.5 | <span style="font-weight: bold;">Where |
|---|---|---|
| <span style="color: #3333ff;">mosMenuBar::startTable(); | <span style="color: #006600;">JMenuBar::startTable(); | PHP code |
| <span style="color: #3333ff;">defined(‘\_VALID\_MOS’) or die(‘Direct Access to this location is not allowed.’); | <span style="color: #006600;">defined( ‘\_JEXEC’ ) or die( ‘Restricted access’ ); | PHP code |
| require\_once( <span style="color: #3333ff;">$mainframe->getPath( ‘toolbar\_html’ ) ); | require\_once(<span style="color: #006600;"> JApplicationHelper::getPath( ‘toolbar\_html’ ) ); | PHP code |
| <?xml version=”1.0″ encoding=”iso-8859-1″?>   <<span style="color: #3333ff;">mosinstall type=”component” version=”1.0.0″>   …. | <?xml version=”1.0″ encoding=”iso-8859-1″?>   <<span style="color: #006600;">install type=”component” version=”1.0.0″>   …. | Installer XML file |
| `global $database` | `$database = & JFactory::getDBO();` | PHP code |
| `$mosConfig_live_site` | `JURL_SITE` | PHP code |
| `$mosConfig_absolute_path` | `JPATH_SITE` | PHP code |
| `$mosConfig_*` | `$config->*` | PHP code |
| ```$refid = mosGetParam( <span class="php-var">$_REQUEST, <span class="php-quote">'<span class="php-var">refid<span class="php-quote">'); ``` | ``` <pre class="code"><span class="php-var">$<span class="php-var">refid= = JRequest::getVar(<span class="php-quote">'<span class="php-var">refid<span class="php-quote">'); ``` | PHP code |
| <span style="font-weight: bold;">Language files are PHP files, name like you want<span style="font-weight: bold;">`<?php

/*

 * Created on Jan 7, 2007

 *

 */

DEFINE("JOOMLA_ASKIMET_ASKIMET_KEY_S", "Askimet Key:"); 

DEFINE("JOOMLA_ASKIMET_ASKIMET_KEY_L", "Your askimet key, can be request here for free, if you have a high intensive site, please require a commercial key to keep the system up and running"); <p>DEFINE("JOOMLA_ASKIMET_ASKIMET_KEY_S", "Website URL:"); 

DEFINE("JOOMLA_ASKIMET_ASKIMET_KEY_L", "Website or Blog URL, if different than the JOOMLA site"); 

?></p>` | Are now plain text files: ex en-GB.com\_aksimet.ini `<span style="color: #006600;"># $Id: en-GB.com_askimet.ini 7177 2007-04-23 06:42:21Z tcp $<br style="color: #006600;">
<span style="color: #006600;"># Akismet4Joomla Project<br style="color: #006600;">
<span style="color: #006600;"># Copyright (C) 2007 Cédric Walter. All rights reserved.<br style="color: #006600;">
<span style="color: #006600;"># License http://www.gnu.org/copyleft/gpl.html GNU/GPL, see LICENSE.php<br style="color: #006600;">
<span style="color: #006600;"># Note : All ini files need to be saved as UTF-8<br style="color: #006600;">
<br style="color: #006600;">
<span style="color: #006600;">JOOMLA_ASKIMET_ASKIMET_KEY_S=Askimet Key:<br style="color: #006600;">
<span style="color: #006600;">JOOMLA_ASKIMET_ASKIMET_KEY_L=Your askimet key, can be request here for free, if you have a high intensive site, please require a commercial key to keep the system up and running<br style="color: #006600;">
<span style="color: #006600;">JOOMLA_ASKIMET_ASKIMET_KEY_S=Website URL:<br style="color: #006600;">
<span style="color: #006600;">JOOMLA_ASKIMET_ASKIMET_KEY_L=Website or Blog URL, if different than the JOOMLA site

` | Resources |
| <span style="font-weight: bold;">Language files in installerwere normal file in either the administration area or public component area.   `     <filename>en-GB.com_aksimet.ini</filename>

      <filename>de-DE.com_aksimet.ini</filename>

      <filename>fr-FR.com_aksimet.ini</filename>

` | They now have their own tag in either the administration or public area of the component  <span style="color: #006600;"> `<languages>

      <language tag="en-GB">en-GB.com_aksimet.ini</language>

      <language tag="de-DE">de-DE.com_aksimet.ini</language>

      <language tag="fr-FR">fr-FR.com_aksimet.ini</language>

    </languages>` | Installer |
| `Structure of file<p></p>` | `<?xml version="1.0" encoding="utf-8"?>



<install type="component" version="1.5.0">

    <name>akismet</name>

    <productName>Akismet</productName>

    <creationDate>07.01.2007</creationDate>

    <version>1.5.0</version>

    <joomlaVersion>1.5.0</joomlaVersion>

    <author>Cédric Walter</author>

    <authorName>Cédric Walter</authorName>

    <authorEmail>webmaster@waltercedric.com</authorEmail>

    <authorUrl>www.waltercedric.com</authorUrl>

    <productPicture>akismet.png</productPicture>

    <productUrl>http://www.waltercedric.com/</productUrl>

    <setupUrl>http://www.waltercedric.com/updates/</setupUrl>

    <trackerUrl>http://bugs.waltercedric.com</trackerUrl>

    <copyright>(c) 2007 Cédric Walter www.waltercedric.com </copyright>

    <license>GNU GPL</license>

    <licenseText>

    This software is released under the terms and conditions of the

    <a href="http://www.gnu.org/copyleft/gpl.html"

      target="_blank">GNU General Public License</a>.

    For more information, please see the LICENCE file accompanying

    the installation package.

  </licenseText>

    <description>Akismet is an Oracle telling if comment entries are spams or not</description>

    <warning>

  Warranty<br />

  This program is distributed in the hope that it will be useful, but WITHOUT ANY

  WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A

  PARTICULAR PURPOSE.

  <p><a href="http://wiki.waltercedric.com" target="_blank">Online documentation</a>, and my forum at  which is updated

  regurarly as we receive bug reports.

  </warning>

    <credits> </credits>

    <installfile>install.akismet.php</installfile>

    <uninstallfile>uninstall.akismet.php</uninstallfile>

    

    <!-- Site Main Language File Copy Section -->

    <languages>

      <language tag="en-GB">en-GB.com_akismet.ini</language>

      <language tag="de-DE">de-DE.com_akismet.ini</language>

      <language tag="fr-FR">fr-FR.com_akismet.ini</language>

    </languages>

    

    <administration>

        <menu img="components/com_akismet/aksimet.png>Akismet</menu>

        <submenu>

            <menu task="settings" icon="config.png">Edit Settings</menu>

            <menu task="about" icon="credits.png">About Akismet4Joomla</menu>

            <menu task="troubles">Troubleshootings</menu>

            <menu task="developer">For developer</menu>

            <menu task="checkLatestVersion">Check for Update</menu>

        </submenu>

        

        <!-- Site Main Media File Copy Section -->

        <media destination="com_akismet">

          <filename>akismet-nigel.png</filename>

        </media>

        <files>

            <filename>language.php</filename>

            <filename>config.akismet.php</filename>

            <filename>akismetJoomlaAPI.php</filename>

            <filename>admin.akismet.html.php</filename>

            <filename>admin.akismet.php</filename>

            <filename>toolbar.akismet.html.php</filename>

            <filename>toolbar.akismet.php</filename>

            <filename>index.html</filename>

            <filename>classes/index.html</filename>

            <filename>classes/akismetconfig.php</filename>

            <filename>classes/php4/index.html</filename>

            <filename>classes/php4/Akismet.class.php</filename>

            <filename>classes/php5/index.html</filename>

            <filename>classes/php5/Akismet.class.php</filename>

            <filename>manuals/index.html</filename>    

            <filename>manuals/about.html</filename>

            <filename>manuals/developer.html</filename>

            <filename>manuals/troubles.html</filename>

        </files>

    </administration>

    <params/>

</install>` | Installer |
| Your own menu   `

  function ABOUT_MENU() {

    mosMenuBar::startTable();

    mosMenuBar::back();

    mosMenuBar::spacer();

    mosMenuBar::endTable();

  }` | `function ABOUT_MENU() {

    JToolBarHelper::back();

    JToolBarHelper::spacer();

  }<p></p>`no` `` JToolBarHelper::startTable(); `or` ``JToolBarHelper::endTable(); `anymore | Menus |
| ` default:

    $default = new MENU_Default();

    break;` | MENU\_Default() has disapeared! write your own in between | Menus |
| `require_once (JPATH_BASE . '/classes/akismetconfig.php');` | Use constants DS directory separator   `require_once (JPATH_BASE . DS.'classes'.DS.'akismetconfig.php');` | Coding |
| `<span style="color: #3333ff;">global $my;` | `<span style="color: #006600;">$user = & JFactory::getUser();` | Autorisation |
|  |  |  |

<span style="font-weight: bold;">Some links which may help also Help You:

- [Welcome to the Joomla! Development Wiki](http://dev.joomla.org/component/option,com_jd-wiki/Itemid,32/)
- [Third Party Testing,](http://forum.joomla.org/index.php/board,234.0.html) a forum where third party developer can receive help during the migration
- [Make your extentions fit for Joomla! 1.1](http://dev.joomla.org/index.php?option=com_jd-wiki&Itemid=31&id=tips:make_your_extensions_fit)