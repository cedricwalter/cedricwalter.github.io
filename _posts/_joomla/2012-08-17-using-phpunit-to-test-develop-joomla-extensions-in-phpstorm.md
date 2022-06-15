---

title: 'Using PHPUnit to test-develop Joomla extensions in PhpStorm'
date: '2012-08-17T11:55:33+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/08/phpunitlogo_thumb.gif
---

![](/assets/images/2012/08/phpunitlogo_thumb.gif)

Since I did not find any clear how to on the internet how **to run test cases for 3rd party extensions** that use [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") CMS, here is my version of it.

# Prerequisites

Having [PHPUnit](http://www.phpunit.de "PHPUnit") properly install, if you use [XAMPP](http://www.apachefriends.org "XAMPP is an easy to install Apache distribution containing MySQL, PHP and Perl. XAMPP is really very easy to install and to use - just download, extract and start.") you may [want to read this post](https://waltercedric.com/new/?p=7752 "install PHPUnit in XAMPP").

# How to use PHPUnit in Joomla

At the root of your Joomla installation directory, make a checkout of [https://github.com/joomla/joomla-cms/tree/master/tests/unit](https://github.com/joomla/joomla-cms/tree/master/tests/unit "https://github.com/joomla/joomla-cms/tree/master/tests/unit")

You’ll need at least the following file

- ${joomla\_root}testsunitbootstrap.php
- ${joomla\_root}testsunitconfig.php
- ${joomla\_root}testsunitJoomlaDatabaseTestCase.php
- ${joomla\_root}testsunitJoomlaTestCase.php
- ${joomla\_root}testsunitphpunit.xml
- ${joomla\_root}testsunitreadme.txt

config.php is a custom or a copy of your configuration.php

For your convenience, I provide a zip file ([joomla\_phpunit\_testing.zip](/assets/images/2012/08/joomla_phpunit_testing.zip)), unpack in your Joomla root and you’re done.

Note when using [PHPUnit](http://www.phpunit.de "PHPUnit") 3.6 , Joomla should not need to include/require anything PHPUnit related since (at least) PHPUnit 3.6. This create errors otherwise.

# In [PHPStorm](http://www.jetbrains.com/phpstorm/)

## Set Up PHPUnit

Go to Settings, using CTRL+ALT+S, under [PHPUnit](http://www.phpunit.de "PHPUnit"), select the option “Use Bootstrap file” and use as value ${joomla\_root}testsunitbootstrap.php

## Set Up PHPUnit Skeleton Generator

Go to Settings, using CTRL+ALT+S, under “Skeleton Generator”

- Enter for “Path to phpunit-skelgen” the value is ${xampp\_root}php, for example C:xamppphp
- Enter for “use bootstrap file” the value ${joomla\_root}testsunitphpunit.xml

## Your first Joomla test case

Create a test case from any of your Joomla classes, by hitting CTRL+SHIFT+T, this will let you select the method you want to test and generate a runnable albeit incomplete test classes.

It is only the beginning of testing your Joomla extensions, there is a lot now to learn

- [Mocking objects](http://docs.joomla.org/Unit_Testing_Mock_Objects) in Joomla, [Stubbing](http://www.phpunit.de/manual/3.6/en/test-doubles.html#test-doubles.stubs) of Joomla classes
- Invoking protected method using TestReflection::invoke
- How to create integration tests using the database
- How to test the user interface using PHPSelenium
- and more…

These links may interest you

- <https://github.com/joomla/joomla-cms/tree/master/tests/unit>
- <http://www.phpunit.de/manual/3.2/en/writing-tests-for-phpunit.html>
- <http://www.phpunit.de/manual/3.6/en/installation.html/>
- <http://www.phpunit.de/manual/current/en/textui.html>
- [http://docs.joomla.org/Unit\_Testing#Unit\_Testing\_in\_Joomla.21](http://docs.joomla.org/Unit_Testing#Unit_Testing_in_Joomla.21)
- [http://developer.joomla.org/manual/chap-Joomla\_Platform\_Manual-Testing.html](http://developer.joomla.org/manual/chap-Joomla_Platform_Manual-Testing.html)
- [http://magazine.joomla.org/issues/Issue-Aug-2012/item/822-Towards-A-More-Testable-Module?tmpl=component&amp;print=1](http://magazine.joomla.org/issues/Issue-Aug-2012/item/822-Towards-A-More-Testable-Module?tmpl=component&print=1)
- [http://docs.joomla.org/Unit\_Testing\_Mock\_Objects](http://docs.joomla.org/Unit_Testing_Mock_Objects)
- [http://docs.joomla.org/Unit\_Testing\_–\_a\_Simple\_Example](http://docs.joomla.org/Unit_Testing_--_a_Simple_Example)
- [http://docs.joomla.org/Unit\_Testing\_–\_Data\_Driven\_Example](http://docs.joomla.org/Unit_Testing_--_Data_Driven_Example)
- [http://docs.joomla.org/Unit\_Testing\_–\_UI\_Example](http://docs.joomla.org/Unit_Testing_--_UI_Example)
- [http://docs.joomla.org/How\_to\_create\_a\_continuous\_integration](http://docs.joomla.org/How_to_create_a_continuous_integration)