---

title: 'phpUnderControl &#8211; Continuous Integration for PHP'
date: '2008-04-25T18:47:08+02:00'
author: 'Cédric Walter'



---

| [![phpUnderControl metrics screenshot](http://www.phpundercontrol.org/images/0.3.5-metrics_thumb.png "phpUnderControl metrics screenshot")](http://www.phpundercontrol.org/images/0.3.5-metrics.png)    [More screen shots here](http://www.phpundercontrol.org/screenshots.html) | [phpUnderControl](http://www.phpundercontrol.org/) is an add-on application for the continuous integration    tool [CruiseControl](http://cruisecontrol.sourceforge.net), which integrates some of the best PHP development tools.    This project aims to make your first steps with CruiseControl and [PHP](http://www.php.net) as easy    as possible. Therefore phpUnderControl comes with a command line tool that    performs all modifications to an existing CruiseControl installation. **My objective is to be able to set up this server and provide you all an access to the build result for my component.** |
|---|---|

 [ ](http://www.phpundercontrol.org/images/0.3.5-metrics.png)

 **Integrated tools**

- Testing and software metrics
    
    [PHPUnit](http://www.phpunit.de) is the most popular xUnit implementation for PHP that provides a framework for automated   
    software tests. Except the pure test automation PHPUnit contains a rich set of features like   
    [Code Coverage](http://www.phpunit.de/pocket_
    phpUnderControl comes with a set of XSL stylesheets that prepare the output for CruiseControl.
- Documentation
    
    phpUnderControl uses the most common documentation tool for PHP projects, [PhpDocumentor](http://www.phpdoc.org), to generate   
    an up to date documentation of the software on every build cycle. Therefore the developers will always get   
    the latest API documentation of their project. Additionally phpUnderControl extracts the documentation   
    violations found by the PhpDocumentor and visualizes these as an additional quality report in the user   
    interface and the project time line of documentation violations.
- Coding Standards
    
    With the package [PHP\_CodeSniffer](http://pear.php.net/package/PHP_CodeSniffer) the [PEAR project](http://pear.php.net) gave PHP developers a very useful tool to detect coding   
    standard violations in a project. Since [version 1.0.0RC3](http://pear.php.net/bugs/roadmap.php?showold=1&package=PHP_CodeSniffer#a1.0.0RC3) it has native support for the [Checkstyle](http://checkstyle.sourceforge.net) XML format   
    that can be visualized by CruiseControl. PHP\_CodeSniffer comes with a variety of pre defined coding standards   
    like PEAR and ZEND but due to its modular structure you can easily implement a custom rule set or extend one   
    of the pre defined sets. This development tool assures that the whole project code will remain clean and   
    consistent.   
    **From** [**http://www.phpundercontrol.org/about.html**](http://www.phpundercontrol.org/about.html)