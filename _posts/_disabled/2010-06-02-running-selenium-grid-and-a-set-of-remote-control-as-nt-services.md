---
id: 5248
title: 'Running Selenium Grid and a set of Remote control as NT services'
date: '2010-06-02T22:42:18+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5248'

tags:
    - browser
    - hardware
    - running
    - since
    - test
---

# [![seleniumhq](/assets/images/2010/06/seleniumhq_thumb.jpg "seleniumhq")](/assets/images/2010/06/seleniumhq_2.jpg)**

# Selenium** has various projects that can be combined with each other to create a robust testing environment.

- **Selenium IDE**: a Firefox add-on to record and playback tests in Firefox.
- **Selenium Remote Control**: a client/server system to control web browsers locally or on other computers, using almost any programming language and testing framework.
- **Selenium Grid**: transparently distribute your tests on multiple machines so that you can run your tests in parallel, cutting down the time required for running in-browser test suites. In-browser tests are inherently slow, but since commodity hardware is insanely cheap nowadays there is no excuse for not running all these tests in parallel on multiple machines and dramatically speeding up your feedback cycle. .
- **Selenium Core**: #JavaScript-based testing system.

Also there are **Selenium** projects specifically for Rails, Ruby &amp; #Eclipse!

Today I will show you how to make run some components of Selenium as Windows Services. I am using a Selenium HUB and 4 Selenium RC running all on the same server (while not recommended for performance reasons, it is the easiest setup)

# In this small how to I provide you at the end of the article a ready to use Selenium Grid 0.7 zip file**

### Running selenium HUB as an NT service

The Selenium Hub is in charge of

- Allocating a Selenium Remote Control to a specific test (transparently)
- Limiting the number of concurrent test runs on each Remote Control
- Shielding the tests from the actual grid infrastructure

[![Selenium Grid Setup](/assets/images/2010/06/Selenium_Grid_Setup_thumb.png "Selenium Grid Setup")](http://www.waltercedric.com/images/stories/Selenium_Grid_Setup_2.png)

1. Download and unzip Selenium Grid.
2. If you don’t have it already, [download and install the JDK](http://java.sun.com/javase/downloads/)
3. Download **[Java Service Wrapper](http://wrapper.tanukisoftware.org/doc/english/download.jsp) (Windows x86 Community Edition) and unzip it.
4. Create these folders in the Selenium Grid folder: \*logs\*, \*conf\*, \*bin\*. so it look like

| **Before** | **After** |
|---|---|
| selenium-grid-1.0.7    ├───doc    ├───examples    ├───lib    ├───sample-scripts    └───vendor | selenium-grid-1.0.7    **├───bin    ├───conf**    ├───doc    ├───examples    ├───lib    **├───logs**    ├───sample-scripts    └───vendor |

Copy/rename files from the JSW folder to the Selenium Grid folder:

- \\src\\conf\\**wrapper**.conf.in to \\conf\\**wrapper**.conf
- \\src\\bin\\App.bat.in to \\bin\\SeleniumGrid.bat
- \\src\\bin\\InstallApp-NT.bat.in to \\bin\\InstallSeleniumGrid-NT.bat
- \\src\\bin\\UninstallApp-NT.bat.in \\bin\\UninstallSeleniumGrid-NT.bat
- \\bin\\**wrapper**.exe to \\bin\\**wrapper**.exe
- \\lib\\**wrapper**.dll to \\lib\\**wrapper**.dll
- \\lib\\**wrapper**.jar to \\lib\\**wrapper**.jar

Now edit the file \\conf\\wrapper.conf

Set the location of Java.exe by editing the line

wrapper.java.command=java

And making sure to not quote the path even if it has spaces in it

Replace the key wrapper.java.classpath.1=… with these three lines:

```
wrapper.java.classpath.1=..

wrapper.java.classpath.2=../lib/selenium-grid-hub-standalone-1.0.7.jar 

wrapper.java.classpath.3=../lib/wrapper.jar
```

Change key wrapper.app.parameter.1=<yourmainclass></yourmainclass>+” to:

```
wrapper.app.parameter.1=com.thoughtworks.selenium.grid.hub.HubServer
```

And finally set up the names/display names for the service:

```
wrapper.console.title=Selenium Grid Hub 

wrapper.ntservice.name=selenium-grid-hub 

wrapper.ntservice.displayname=Selenium Grid Hub 

wrapper.ntservice.description=Central control server for Selenium Grid
```

Test your configuration by running the \\bin\\SeleniumGrid.bat file.

If it works, you should see Selenium Grid Hub running in the console – one of the the last lines will likely say something about Jetty and you may see some of the Selenium Grid configuration fly past as it’s starting up. You can shut it down by pressing Ctrl+C.

If it’s not working, you’ll probably see error messages about how the JVM wasn’t found (meaning the path to **Java** is no good) or some other configuration problem. Or the batch file might run and close immediately.

Once it’s running with the SeleniumGrid.bat file, you can install the **service** by running the InstallSeleniumGrid-NT.bat file.

To start the **service**, you can use the command line (net start selenium-grid-hub) or the GUI (Start->Administrative Tools->Services).

### Running multiple selenium RC as NT services

> **Selenium Remote Control** (RC) is a test tool that allows you to write automated web application UI tests in any programming language against any HTTP website using any mainstream JavaScript-enabled browser.
> 
> Selenium RC comes in two parts.
> 
> 1. A server which automatically launches and kills browsers, and acts as a HTTP proxy for web requests from them.
> 2. Client libraries for your favorite computer language.

Following the same idea, with only some minor changes due to the way selenium RC are started in wrapper.conf

First install all browsers or only some that you would like to support:

 [![allBrowser](/assets/images/2010/06/allBrowser_thumb.png "allBrowser")](http://www.waltercedric.com/images/stories/allBrowser_2.png)

Google Chrome, Mozilla Firefox, Apple Safari to name a few, Dont forget that you MUST put them in windows environment variable PATH, so Selenium RC will be able to start them.

Then create for each browser you would like to support the following directory structure

| **Before** | **After** |
|---|---|
| selenium-grid-1.0.7    ├───bin    ├───conf    ├───doc    ├───examples    ├───lib    ├───logs    ├───sample-scripts    └───vendor | selenium-grid-1.0.7    ├───bin    ├───conf    ├───doc    ├───examples    ├───lib    ├───logs    **├───rc.chrome    ├───rc.firefox    ├───rc.ie    ├───rc.safari**    ├───sample-scripts    └───vendor |

Move files around from previous example, so that it look like

| **Result** |
|---|
| **rc.chrome**    ├───bin    │ InstallRemoteControl-NT.bat    │ RemoteControl.bat    │ UninstallRemoteControl-NT.bat    │ wrapper.exe    │    ├───conf    │ wrapper.conf    │    └───logs |

Here are the settings of wrapper.conf for Google chrome that you need to change across the file, Change all values according to your setup.

```
wrapper.ntservice.account=.\selenium

wrapper.ntservice.password=selenium 



# Java Classpath (include wrapper.jar)  Add class path elements as #  needed starting from 1 wrapper.java.classpath.1=.. wrapper.java.classpath.2=../../lib/selenium-grid-remote-control-standalone-1.0.7.jar wrapper.java.classpath.3=../../lib/selenium-grid-hub-standalone-1.0.7.jar wrapper.java.classpath.4=../../vendor/selenium-server-1.0.3-standalone.jar wrapper.java.classpath.5=../../lib/wrapper.jar   # Application parameters.  Add parameters as needed starting from 1 wrapper.app.parameter.1=com.thoughtworks.selenium.grid.remotecontrol.SelfRegisteringRemoteControlLauncher wrapper.app.parameter.2=-port "5558" wrapper.app.parameter.3=-host "localhost" wrapper.app.parameter.4=-hubURL "http://localhost:4444" wrapper.app.parameter.5=-env "*googlechrome" wrapper.app.parameter.6=-hubPollerIntervalInSeconds "30" wrapper.app.parameter.7=-log "..\logs\chrome.log" wrapper.app.parameter.8=-timeout "15"   # Name of the service wrapper.name=selenium-chrome   # Display name of the service wrapper.displayname=selenium-chrome   # Description of the service wrapper.description=selenium-chrome   # Java Library Path (location of Wrapper.DLL or libwrapper.so) wrapper.java.library.path.1=../../lib
```

You get the idea, for every browser, you have to repeat the same procedure. The only difficult point not documented anywhere is that you can not run the browser with the windows local account, you need to use the windows user that has installed the browser or at least has enough right to create a new browser profile. Failing to do it, will throw a null pointer exception while trying to get a new Google Chrome browser session.

So you must have a valid user under these 2 keys, you can choose what you want

```
wrapper.ntservice.account=.\selenium wrapper.ntservice.password=xxxxxxxx
```

Once it’s running with the RemoteControl.bat file, you can install the **service** by running the InstallRemoteControl-NT.bat file.

To start the **service**, you can use the command line (net start selenium-chrome) or the GUI (Start->Administrative Tools->Services).

Anyway head to the download section and use a ready to use package

### How to give the selenium user the permission to “**Start a session as a service**“.

# Thanks to Eric Bouchut for submission**

You need to give the selenium user the permission to start the session as a service, If you don’t do this, the service won’t start at least on Windows XP/SP 3.   
Here it is.   
“For the service to start as the selenium user, you need to give the *selenium* user the permission to “*start a session as a service*“, as so:

- Open the *Control Panel*
- Click *“Administration Tools”*
- *Click “Local Security Settings”* (my attempt to translate “Stratégie de Sécurité Locale” in English)
- In “Local Policies / User Rights Assignment”
- Double click “*Open a session as a service*“
- add the *selenium* user to the list<tt>   
    </tt>



## Download

Original version of [selenium-grid-1.0.7-bin.zip](http://release.seleniumhq.org/selenium-grid/selenium-grid-1.0.7-bin.zip) if you want to compare the changes i’ve made.

Ready to use Selenium-Grid 1.0.7 with all the above scripts configured, all the above in one file [selenium-grid-1.0.7-bin-modified.NT.services.zip](http://www.waltercedric.com/downloads/doc_details/124-selenium-grid-107-bin-modifiedntserviceszip.html) (22MB)

# Happy Integration Testing with Selenium!