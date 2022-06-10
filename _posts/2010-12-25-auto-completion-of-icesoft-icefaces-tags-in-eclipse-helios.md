---
id: 6437
title: 'Auto completion of Icesoft Icefaces tags in eclipse Helios'
date: '2010-12-25T18:55:22+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6437'
permalink: /java/auto-completion-of-icesoft-icefaces-tags-in-eclipse-helios/
header:
  teaser: /assets/images/2010/12/iceSoft.jpg
tags:
    - support
    - windows
---

![iceSoft](/assets/images/2010/12/iceSoft.jpg "iceSoft")

> ICEsoft Technologies, Inc., is a leading provider of standards-compliant, Ajax-based solutions for developing and deploying #Java EE, rich Internet applications. ICEfaces is a leading open source Ajax framework for #Java EE.

I search a lot in forums for resolving this small inconvenience in eclipse Helios. The solution is easier as you think:

## Are you using some custom file extensions?

Name your facelets templates \*.jspx if you are using any other extension, #Eclipse JSP editor wont be used and you may have limited auto completion support.

if you still want to use \*.xhtml, .iface

1. Go to Windows – Preferences – General – Content Types – Text – JSP – and add your extensions
2. into ‘File Associations’ and made the ‘JSP editor’ the default for .xhtml

## Auto completion for facelets, html and core components

# Use Jboss Tools** which has enables content assist for f: ui: s: h:

# To [install](https://www.jboss.org/tools/download/installation/update_3_2.html#fromsite) JBoss Tools, start up #Eclipse 3.6 then:**

> `<strong>Help > Install New Software... ></strong>`

 **and add this URL:** `<strong><a href="http://download.jboss.org/jbosstools/updates/development/"><strong>http://download.jboss.org/jbosstools/updates/development/</strong></a></strong>`

Locate your project in eclipse, right click, select configure and choose “Add JSF capabilities” as seen in the picture below

![autocompletionEclipseIcefaces01](/assets/images/2010/12/autocompletionEclipseIcefaces01.png "autocompletionEclipseIcefaces01")

Now open any files with the HTML editor/JSP editor, in fact it will work now with any editors and for all tags

[![autocompletionEclipseIcefaces02](/assets/images/2010/12/autocompletionEclipseIcefaces02_thumb.png "autocompletionEclipseIcefaces02")](/assets/images/2010/12/autocompletionEclipseIcefaces02.png)

# Another solution

You do not need to install Jboss Tools (I recommend it through) but what about Icefaces support?

Icefaces provide a plugin 3.5.0 that support auto completion of tags in #Eclipse Galileo (3.5) for icefaces 1.8.2. While #Eclipse Helios is only supported with icefaces 2.0 (plugin > 3.6.2)