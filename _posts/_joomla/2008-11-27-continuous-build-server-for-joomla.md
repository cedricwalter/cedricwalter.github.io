---
id: 3945
title: 'Continuous build server for Joomla!'
date: '2008-11-27T20:39:28+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3945'

header:
  teaser: /assets/images/2008/11/continuous.server.toolbox.for_.php_thumb.jpg
tags:
    - ant
    - built
    - code
    - commit
    - continuous
    - day
    - deploy
    - deployed
    - describes
    - Download
    - engineering
    - environment
    - increase
    - integration
    - joomla
    - make
    - maven
    - monitor
    - non
    - task
---

[![continuous.server.toolbox.for.php](/assets/images/2008/11/continuous.server.toolbox.for_.php_thumb.jpg)](/assets/images/2008/11/continuous.server.toolbox.for_.php_.jpg) Starting from now on, in order to

- Increase quality of my components and other (JoomlaComment :-))
- Reduce time between releases,
- Avoid subtle or recurrent issues

I **will** set up a **[continuous integration](http://en.wikipedia.org/wiki/Continuous_Integration)** build server at

[http://continuousbuildserver.waltercedric.com](http://continuousbuildserver.waltercedric.com)

# Continuous integration** describes a set of [software engineering](http://en.wikipedia.org/wiki/Software_engineering) practices that speed up the delivery of software by decreasing integration times.

- Maintain a code repository, the code will stay at [JoomlaCode.org](http://joomlacode.org/) subversion
- Automate the build, with [Maven for PHP](http://www.php-maven.org/index.html)/Ant and either teamcity or [phpundercontrol.org](http://www.phpundercontrol.org/about.html)
- Make my build self-testing with PHP Unit and [Selenium IDE](http://selenium.seleniumhq.org/index.html)
- Everyone commits every day,
- Every commit (to mainline) will be built with the help of triggers,
- The build will be fast,
- Test are done in production environment, by deploying code to old and new version of #Joomla! 1.0 and 1.5 “not web accessible” (for obvious security reasons),
- It will be easy to get the latest deliverables by visiting <http://continuousbuildserver.waltercedric.com>
- Everyone will see the results of the latest build by visiting <http://continuousbuildserver.waltercedric.com>
- Deliverables will be automatically deployed.

In short (for all non developer), this program will

- Monitor any changes of code
- Trigger a build,
- Deploy the build to different versions of #Joomla! 1.5 (5 versions should be enough)
- Run a set of tests against these #Joomla! versions and
- Make the result available to all of you.

Soon as there is enough test cases, it will be safe to download any new release from there.