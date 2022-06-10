---
id: 4007
title: 'Installing PHPUnit / Selenium in XAMPP'
date: '2008-12-31T14:08:56+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4007'
permalink: /joomla/installing-phpunit-selenium-in-xampp/
image: /wp-content/uploads/2008/12/phpunitlogo_thumb.gif
---

|  | [![phpunit-logo](/assets/images/2008/12/phpunitlogo_thumb.gif)](/assets/images/2008/12/phpunitlogo.gif) | ![selenium-logo](/assets/images/2008/12/seleniumlogo.png) [](/assets/images/2008/12/phpunitlogo.gif) | [![xampp.logo](/assets/images/2008/12/xampp.logo_thumb.gif)](/assets/images/2008/12/xampp.logo_.gif) |
|:-:|:-:|:-:|:-:|

A small how to install [PHPUnit](http://www.phpunit.de/) via [PEAR](http://pear.php.net) in an [XAMPP](http://www.apachefriends.org/en/xampp.html) running on a windows box. A prerequisite for a continuous build strategy.

**PHPUnit** is a member of the xUnit family of testing frameworks and provides both a framework that makes the writing of tests easy as well as the functionality to easily run the tests and analyze their results.

- [PHPUnit homepage](http://www.phpunit.de/)
- [ONLamp.com – Testing PHP Code with PHPUnit](http://www.onlamp.com/pub/a/php/2005/12/08/phpunit.html)
- [Planet PHPUnit](http://planet.phpunit.de/)
- [Sebastian Bergmann](http://sebastian-bergmann.de/) (creator of PHPUnit)

#### Installing XAMPP

- Download XAMPP from <http://www.apachefriends.org/en/xampp.html>
- Unpack the zip, don’t run any installer, just use the \\xampp\\xampp-control.exe to control the component (so the whole XAMPP directory can be moved to another drive without having absolute paths in all configurations files)

#### Installing PEAR

- Execute \\xampp\\php\\go-pear.bat and follow the onscreen instructions. The installation will modify the include\_path in your php.ini file.
- Execute \\xampp\\php\\PEAR\_ENV.reg to add PEAR to the windows registry

#### Installing PHPUnit

- Open a command prompt
- Execute *pear channel-discover pear.phpunit.de*
- Execute *pear install phpunit/PHPUnit*
- Now you should find PHPUnit installed in *\\xampp\\php\\PEAR\\PHPUnit\\*

#### Installing Selenium

- Execute `pear install Testing_Selenium`

**Some useful pear commands to keep your PHP up to date**

- \\xampp\\php\\pear list-upgrades
- \\xampp\\php\\pear upgrade-all

#### All pear Commands



 build Build an Extension From C Source   
bundle Unpacks a Pecl Package   
channel-add Add a Channel   
channel-alias Specify an alias to a channel name   
channel-delete Remove a Channel From the List   
channel-discover Initialize a Channel from its server   
channel-info Retrieve Information on a Channel   
channel-update Update an Existing Channel   
clear-cache Clear Web Services Cache   
config-create Create a Default configuration file   
config-get Show One Setting   
config-help Show Information About Setting   
config-set Change Setting   
config-show Show All Settings   
convert Convert a package.xml 1.0 to package.xml 2.0 format   
cvsdiff Run a "cvs diff" for all files in a package   
cvstag Set CVS Release Tag   
download Download Package   
download-all Downloads each available package from the default channel   
info Display information about a package   
install Install Package   
list List Installed Packages In The Default Channel   
list-all List All Packages   
list-categories List All Categories   
list-category List All Packages of a Category   
list-channels List Available Channels   
list-files List Files In Installed Package   
list-packages List All Packages of a Channel   
list-upgrades List Available Upgrades   
login Connects and authenticates to remote server   
logout Logs out from the remote server   
makerpm Builds an RPM spec file from a PEAR package   
package Build Package   
package-dependencies Show package dependencies   
package-validate Validate Package Consistency   
pickle Build PECL Package   
remote-info Information About Remote Packages   
remote-list List Remote Packages   
run-scripts Run Post-Install Scripts bundled with a package   
run-tests Run Regression Tests   
search Search remote package database   
shell-test Shell Script Test   
sign Sign a package distribution file   
uninstall Un-install Package   
update-channels Update the Channel List   
upgrade Upgrade Package   
upgrade-all Upgrade All Packages   
Usage: pear \[options\] command \[command-options\] <parameters>   
Type "pear help options" to list all options.   
Type "pear help shortcuts" to list all command shortcuts.   
Type "pear help <command>" to get the help for the specified command. 

#### Pear References

[PEAR: Getting the manager](http://pear.php.net/manual/en/installation.getting.php)   
[PEAR: Checking if PEAR works](http://pear.php.net/manual/en/installation.checking.php)