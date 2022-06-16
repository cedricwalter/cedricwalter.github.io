---

title: 'Install PHPUnit and PHPDocumentor in XAMPP'
date: '2012-08-17T11:13:00+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/12/phpunitlogo_thumb.gif
---

[![phpunit-logo](/assets/images/2008/12/phpunitlogo_thumb.gif)](/assets/images/2008/12/phpunitlogo.gif)![selenium-logo](/assets/images/2008/12/seleniumlogo.png)[![xampp.logo](/assets/images/2008/12/xampp.logo_thumb.gif)](/assets/images/2008/12/xampp.logo_.gif)

Open [XAMPP](http://www.apachefriends.org "XAMPP is an easy to install Apache distribution containing MySQL, PHP and Perl. XAMPP is really very easy to install and to use - just download, extract and start.") Shell (start c:\\xampp\\xampp-control.exe and click on the button XAMPP-Shell), and run:

```
pear channel-discover pear.phpunit.de pear channel-discover components.ez.no pear channel-discover pear.symfony-project.com

pear install --alldeps phpunit/PHPUnit

pear install phpunit/DbUnit phpunit/PHPUnit_Selenium

pear install phpunit/PHPUnit_SkeletonGenerator 

pear install phpunit/PHPUnit_Story phpunit/PHP_CodeCoverage

pear install PhpDocumentor
```

You can check that PHPUnit get preoperly installed by running

```
phpunit --version
```

should now return PHPUnit 3.6.12 by Sebastian Bergmann.

# PHP Pear help

```
Commands: build                  Build an Extension From C Source bundle                 Unpacks a Pecl Package channel-add            Add a Channel channel-alias          Specify an alias to a channel name channel-delete         Remove a Channel From the List channel-discover       Initialize a Channel from its server channel-info           Retrieve Information on a Channel channel-login          Connects and authenticates to remote channel server channel-logout         Logs out from the remote channel server channel-update         Update an Existing Channel clear-cache            Clear Web Services Cache config-create          Create a Default configuration file config-get             Show One Setting config-help            Show Information About Setting config-set             Change Setting config-show            Show All Settings convert                Convert a package.xml 1.0 to package.xml 2.0 format cvsdiff                Run a "cvs diff" for all files in a package cvstag                 Set CVS Release Tag download               Download Package download-all           Downloads each available package from the default channel info                   Display information about a package install                Install Package list                   List Installed Packages In The Default Channel list-all               List All Packages list-channels          List Available Channels list-files             List Files In Installed Package list-upgrades          List Available Upgrades login                  Connects and authenticates to remote server [Deprecated in favor of channel-login] logout                 Logs out from the remote server [Deprecated in favor of channel-logout] makerpm                Builds an RPM spec file from a PEAR package package                Build Package package-dependencies   Show package dependencies package-validate       Validate Package Consistency pickle                 Build PECL Package remote-info            Information About Remote Packages remote-list            List Remote Packages run-scripts            Run Post-Install Scripts bundled with a package run-tests              Run Regression Tests search                 Search remote package database shell-test             Shell Script Test sign                   Sign a package distribution file svntag                 Set SVN Release Tag uninstall              Un-install Package update-channels        Update the Channel List upgrade                Upgrade Package upgrade-all            Upgrade All Packages [Deprecated in favor of calling upgrade with no parameters] Usage: pear [options] command [command-options] <parameters> Type "pear help options" to list all options. Type "pear help shortcuts" to list all command shortcuts. Type "pear help <command>" to get the help for the specified command.
```