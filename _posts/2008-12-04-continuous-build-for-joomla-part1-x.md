---
id: 3960
title: 'Continuous build for Joomla! part1/x'
date: '2008-12-04T19:16:02+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3960'
permalink: /joomla/continuous-build-for-joomla-part1-x/
---

### Automatic installation of #Joomla! runtime environments

#### Main ideas

**Build is scalable**

Distributed build management optimize hardware resources utilization by parallelizing product builds within the build agents grid. With build chains support, it is even possible to break down a single build procedure into several parts to run them on different build agents — both in sequence and in parallel — using the same set of sources in all of them.

**I want to be able to test my components against many versions of #Joomla!**

All versions of #Joomla! are in subversion as zip files in an own SVN repository

For example:

- ${JOOMLA15\_VCS\_ROOT} is svn:\\\\localhost\\joomla1.5\\trunk
- ${JOOMLA10\_VCS\_ROOT} is svn:\\\\localhost\\joomla1.0\\trunk

These repository ${JOOMLAxx\_VCS\_ROOT} are connected to all build as supplementary VCS root in TeamCity and thus content get checked out as part of the build in the build temporary directory of one agent. ($AGENT\_BUILD\_DIR)

> joomla1.5\\trunk   
>  #Joomla\_1.5.4-Stable-Full\_Package.zip   
>  #Joomla\_1.5.5-Stable-Full\_Package.zip   
>  #Joomla\_1.5.6-Stable-Full\_Package.zip   
>  #Joomla\_1.5.7-Stable-Full\_Package.zip   
>  #Joomla\_1.5.8-Stable-Full\_Package.zip
> 
> So after the checkout, the file system will look like
> 
> ($AGENT\_BUILD\_DIR)\\
> 
>  #Joomla\_1.5.4-Stable-Full\_Package.zip   
>  #Joomla\_1.5.5-Stable-Full\_Package.zip   
>  #Joomla\_1.5.6-Stable-Full\_Package.zip   
>  #Joomla\_1.5.7-Stable-Full\_Package.zip   
>  #Joomla\_1.5.8-Stable-Full\_Package.zip

If you don’t want to provide support a a specific version of #Joomla! just remove it from the trunk! or add new ones on purpose. That’s easy.

**Ant tasks/Maven MOJO**

- Are responsible for unpacking all these zip files to the build temporary agent directory. ($AGENT\_BUILD\_DIR).
- Filenames are found with a configurable regular expression,
- All settings will be committed in \\joomla1.5\\trunk\\build.deploy.properties

**Another ant script/task will for each zip,**

- Start a Selenium test cases that will create a virtual user that use the regular #Joomla! installer and drive installation till the end.
- All settings which have to be #Joomla! and build independent will be randomly generated, preferably UUID for password and database name for example.
- Login and Admin password may be the same (admin:admin) at the beginning but can also be generated and written to a file on disk in ($BUILD\_DIR)/{joomlarootversion}/build.install.properties.
- Directory installation ($BUILD\_DIR)/{joomlarootversion}/installation will be renamed to ($BUILD\_DIR)/{joomlarootversion}/installation.old or simply deleted
- Selenium/PHP Unit test that are committed in \\joomla1.5\\trunk\\Installation.Checks will perform **basic checks** (login, logout, navigate) to ensure that installation of #Joomla! has been successful.   
    If everything succeed, we will have a set of #Joomla! versions ready for our components regression testing.

**Remarks:**

- No build temporary directory. ($AGENT\_BUILD\_DIR) will be deleted by Ant or #Maven but by the build server itself. This will let developer look at the issues on file system and in database.
- New scripts may be developed to extract from the build server or #Joomla! farm easily the non running #Joomla! instance files + database) so developers can install the broken setup locally.

### Automatic deployment of #Joomla! components

Your component is typically shared and many developer committed regularly in a different VCS root… For SecurityImages 5.x.y, subversion root may be svn:\\\\localhost\\securityimages5\\trunk

This VCS root is also attached to the build and get check out at build time by TeamCity.

#### Packaging

if a build.xml is present in {VCS\_ROOT}\\build.xml then it is executed prior to any further operations, purpose of build.xml is to produce a component binary distribution (zip or tar.gz) that can be then installed to **ALL #Joomla install** in the agent root directory.

#### Deployment

if a deploy.xml is present in {VCS\_ROOT}\\deploy.xml then it is executed, purpose of deploy.xml is to deploy **one or many component** binary distribution (zip or tar.gz) to **ALL #Joomla install** in the agent root directory.

**Why one or many component?**

I want to be able to track also component dependencies issues.

Lets say that SecurityImages does not play well with VirtueMart, I may want to test also that combination across #Joomla! instances, that’s why VirtueMart may have to be deployed with SecurityImages or not.

#### prerequisites:

- Running SVN server, see HERE for [installing it on windows](http://www.waltercedric.com/joomla-mainmenu-247/303-how-to/1352-install-subversion-on-windows.html)
- Installed JVM, latest JDK 1.6u10
- Running TeamCity server
- Running XAMPP with HTTP root directory at TeamCity agent root directory.
- Apache ANT with additional library for more control (if, case, for loop)

This articles will be available in my WIKI soon <http://wiki.waltercedric.com/index.php?title=ContinuousBuildforJoomla> so any reader or developer can participate to the discussion, next step is to implement the above and that will e documented as well 🙂