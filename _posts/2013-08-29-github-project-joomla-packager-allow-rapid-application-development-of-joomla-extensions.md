---
id: 8152
title: 'GitHub project joomla-packager allow rapid application development of Joomla extensions'
date: '2013-08-29T21:18:56+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8152'
permalink: /joomla/github-project-joomla-packager-allow-rapid-application-development-of-joomla-extensions/
header:
  teaser: /assets/images/2009/07/joomla.png
tags:
    - joomla
---

 ![joomla](/assets/images/2009/07/joomla.png "joomla")![love](/assets/images/2008/08/love.png "love")<font face="Times New Roman" size="7">RAD

 **[Rapid application development (RAD)](http://en.wikipedia.org/wiki/Rapid_application_development "Rapid application development (RAD) at wikipedia")** is a software development methodology that uses minimal planning in favor of rapid prototyping. Something that was really slowing me a lot and making any builds or changes in my extensions a real pain to maintain was the packaging of code spread in the joomla tree. I did create numerous custom [Phing](http://www.phing.info/ "PHing Is Not GNU make; it's a PHP project build system or build tool based on ​Apache Ant.") builds to automate and reduce these pains (Phing is heavily derived from Apache ANT) and 2 months ago [Joomla-packager](https://github.com/cedricwalter/joomla-packager "joomla-packager is a generic phing build script to build any 3rd extension, being a set of components, modules, plugins and or libraries, packages in a simple way.") was born!

 My [Joomla-packager](https://github.com/cedricwalter/joomla-packager "joomla-packager is a generic phing build script to build any 3rd extension, being a set of components, modules, plugins and or libraries, packages in a simple way.") is a generic [Phing](http://www.phing.info/ "PHing Is Not GNU make; it's a PHP project build system or build tool based on ​Apache Ant.") build script to build any #Joomla 3rd extension, being a set of components, modules, plugins and or libraries, packages in a simple way.

##  Audience

 Developers of 3rd party extensions for [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).")

##  Convention over configuration…

- A single script to rule all your need of [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") packaging: multi modules/ multi plugins/multi components/multi library is supported,
- If you respect [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") conventions, this packager will be able to create a build of any of your extensions or set of extensions,
- just configure one file (like for example in buildCedThumbnails.xml), mainly listing what your extension is made of and run with minimal efforts,
- Packaging #Joomla extensions will always look look the same = repeatability = convention over configuration

##  Usage

1. Download <https://raw.github.com/cedricwalter/joomla-packager/master/joomla-packager.xml> locally
2. Download a copy of [buildCedThumbnails.xml](https://raw.github.com/cedricwalter/joomla-packager/master/buildCedThumbnails.xml) You only need **to rename and touch this file**, it is self documented.
3. Download a copy of [pkg\_cedthumbnails.xml](https://raw.github.com/cedricwalter/joomla-packager/master/pkg_cedthumbnails.xml) You only need to update this file if you alter the structure. (later [Joomla-packager](https://github.com/cedricwalter/joomla-packager "joomla-packager is a generic phing build script to build any 3rd extension, being a set of components, modules, plugins and or libraries, packages in a simple way.") will create this file on the fly)
4. Run the main target build of [buildCedThumbnails.xml](https://raw.github.com/cedricwalter/joomla-packager/master/buildCedThumbnails.xml)

##  How it is working?

####  This script implement ALL standard [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") conventions to perform the packaging, and offer reusable [Phing](http://www.phing.info/ "PHing Is Not GNU make; it's a PHP project build system or build tool based on ​Apache Ant.") targets to package any number of extensions. Here is what is implemented:

###  Modules

- 1. Code is located in /modules/mod\_${xxxxx} and self contained
- 2. Languages files are optional but if they exist are located at /language/xx-yy/mod\_${xxxxx}.ini /language/xx-yy/mod\_${xxxxx}.sys.ini
- 3. Media files (css,js,images) are optional but if they exist are located at /media/mod\_${xxxxx}
- 4. name of zip files as follow: 
    - mod\_{yourextension1}.zip

###  Plugins

- 1. Code is located in /plugins/${type}/${xxxxx} and self contained
- 2. Languages files are optional but if they exist are located at /plugins/${type}/${xxxxx}/language/ or anywhere else in directory at step 1.
- 3. Media files (css,js,images) are optional but if they exist are located at /media/plg\_${type}\_${xxxxx}
- 4. name of zip files as follow: 
    - plg\_${type}\_{yourextension}.zip

###  Components

- 1. Code is located in /administrator/components/${xxxxx} and /components/${xxxxx} and is self contained
- 2. Languages files are optional but if they exist are located at /administrator/language/xx-yy/${xxxxx}.ini and /language/xx-yy/${xxxxx}.ini and
- 3. Media files (css,js,images) are optional but if they exist are located at /media/${xxxxx}

###  Packages

- 1. one zip file which contains 1 to n other zip file + a manifest file named pkg\_{yourextension}.xml
- 2. manifest file named pkg\_{yourextension}.xml has to be written manually for now and place beside your build{yourextension}.xml
- 4. name of zip files as follow: 
    - com\_{yourextension}.zip

 You can browse numerous examples (for [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") 2.5/3.0/3.1 at the [project page (GitHub)](https://github.com/cedricwalter/joomla-packager)