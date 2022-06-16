---

title: 'Maven and Selenium for integration testing'
date: '2009-09-06T09:59:03+02:00'
author: 'Cédric Walter'



tags:
    - apache
    - ci/cd
    - HowTo
    - maven
    - tutorial
---

‘Integration testing’ (sometimes called Integration and Testing, abbreviated I&amp;T) is the activity of software testing in which individual software modules are combined and tested as a group. It occurs after unit testing and before system testing. Integration testing takes as its input modules that have been unit tested, groups them in larger aggregates, applies tests defined in an integration test plan to those aggregates, and delivers as its output the integrated system ready for system testing. \[[WikiPedia](http://en.wikipedia.org/wiki/Integration_testing)\]

I will put Selenium to that JOB. [Selenium](http://seleniumhq.org/) will allow me to run a set of unit test against a running instance of my application and get a feedback on the quality before delivering the software to a testing team.

Making any Maven module [Selenium](http://seleniumhq.org/) enable is really easy, all you have to do is to add to the dependencies section the following

```
<dependency>
    <groupId>org.openqa.selenium.client-drivers</groupId>
    <artifactId>selenium-java-client-driver</artifactId>
    <version>0.9.2</version>
    <scope>test</scope>
</dependency>
```

Now you should be able to cut and paste any test cases developed with [Selenium IDE](http://seleniumhq.org/projects/ide/) into /src/test/java/

> *Selenium* IDE is a Firefox add-on that records clicks, typing, and other actions to make a test, which you can play back in the browser or export to may different languages: [Ruby](http://seleniumhq.org/documentation/remote-control/languages/ruby.html), [Python](http://seleniumhq.org/documentation/remote-control/languages/python.html), [Java](http://seleniumhq.org/documentation/remote-control/languages/java.html), [PHP](http://seleniumhq.org/documentation/remote-control/languages/php.html), [Perl](http://seleniumhq.org/documentation/remote-control/languages/perl.html), [.Net](http://seleniumhq.org/documentation/remote-control/languages/dotnet.html), [JavaScript](http://seleniumhq.org/documentation/remote-control/languages/js.html) to name a few. \[[Learn more](http://seleniumhq.org/projects/ide/)\]

The java code is in no way different than regular JUNIT test cases, except that it does not use the latest JUNIT 4.x annotations. You’ll be able to run tests like before (right click Run As Junit)

```
package com.waltercedric.maven;  
import com.thoughtworks.selenium.SeleneseTestCase;  

public class TestHello extends SeleneseTestCase {    

public void setUp() throws Exception {    
 setUp(http://localhost/helloworld, "*iexplore");  
}  

public void testNew() throws Exception {    
 selenium.open("/helloworld/index.xhtml");     selenium.waitForPageToLoad("30000");
 verifyTrue(selenium.isTextPresent("Are you an existing Customer"));   
}
}
```

Some explanations are needed:

#### Some remarks about the code above

You will have to somehow make your own Selenium framework out of the generated code, for obvious reasons,

- You’ll have soon to support many browser <span class="str">“\*iexplore”, <span class="str">“\*firefox”, <span class="str">“\*opera” and as such use environment variables or configuration files. I recommend you in that case to use [Selenium Grid](http://selenium-grid.seleniumhq.org/how_it_works.html) instead of Selenium RC.
- You can not let the URL and port of the container fix coded <span class="str"><http://localhost/helloworld>, this URL may change if you target different runtime.
- You may want to reuse some part of the generated code multiple times, in different unit test, (like login/logout stuff), java inheritance, interface, and patterns may arrive sooner or later, even if this is unit test code.

# Selenium test cases or integration tests are meant to be run in phase “integration-test” against a running instance of your application. That is why don’t forget to deploy your application with Maven cargo or run it inside Jetty in Maven phase “pre-integration-test”

## How to use Surefire to run JUnit test in phase “test” and integration tests in phase “integration-test”

The response is by carefully configuring Surefire and naming your Java packages. The pom.xml below show this trick

In phase test, test cases with a word integration or selenium are omitted, while in phase “integration-test” they are run.

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.4.2</version>
    <configuration>
        <argLine>-Xmx512m -DuseSystemClassLoader=true</argLine>
        <skip>false</skip>
        <testFailureIgnore>true</testFailureIgnore>
        <excludes>
            <exclude>/integration/*</exclude>
            <exclude>/selenium/*</exclude>
        </excludes>
    </configuration>
    <executions>
        <execution>
            <id>integration-tests</id>
            <phase>integration-test</phase>
            <goals>
                <goal>test</goal>
            </goals>
            <configuration>
                <skip>false</skip>
                <excludes>
                    <exclude>none</exclude>
                </excludes>
                <includes>
                    <include>/integration/*</include>
                    <include>/selenium/*</include>
                </includes>
            </configuration>
        </execution>
    </executions>
</plugin>
```

Now it is time to start a selenium server locally or remotely so we can start our newly defined test cases.

## Selenium Remote control

# Selenium Remote Control (RC) is a test tool that allows you to write automated web application UI tests in any programming language against any HTTP website using any mainstream JavaScript-enabled browser.

You can either start a selenium RC server

- Outside Eclipse, like any java process,
- Inside Eclipse with a java launcher,
- Inside Eclipse with Maven and a java launcher.
- Inside any Maven Phase thank to a plugin XXXXXXXXXXXXX

I recommend you to install Selenium RC in a dedicated VM (VMWare, Virtual desktop, XEN) and to make it team or enterprise wide. I would always recommend to put Linux at work for such a task, unfortunately Internet Explorer is not running at all on Mac nor Linux.. I recommend you this way to run a shared Selenium server in your infrastructure that can be later access by many continuous build agents.

Selenium RC is a Java process requiring only 2 jar to properly start, Download and unpack to c:\\selenium-server-1.0-beta-2

Create following in a batch file start.bat, normally all you have to do is to change the first 3 lines

```
set JAVA_HOME=c:\jdk1.6 set FIREFOX_HOME=C:\tools\Firefox3 
set SELENIUM_RC_HOME=c:/selenium-server-1.0-beta-2  
set PATH=%PATH%;%FIREFOX_HOME% 
set CLASSPATH=%CLASSPATH%;%SELENIUM_RC_HOME%/selenium-server.jar;%SELENIUM_RC_HOME%/selenium-server-coreless.jar  %JAVA_HOME%/bin/java -jar %SELENIUM_RC_HOME%/selenium-server.jar 
```

If everything run properly, you should see an ugly DOS windows like the one below

![starting.selenium.rc.outside.eclipse](/assets/images/2009/09/starting.selenium.rc_.outside.eclipse.png)Pointing the browser to <http://localhost:4444> will return an error 403, which is no sign of malfunction, currently Selenium RC has no web GUI.

![seleniumRCtestInBrowser](/assets/images/2009/09/seleniumRCtestInBrowser.png)## Start Selenium RC server inside Eclipse

If you decide to run selenium RC inside Eclipse, you’ll be mainly benefit from:

- Project sharing and versioning in CVS/SVN,
- Command line parameters that will start Selenium RC can also be shared,

### Selenium Server in a Maven project/module

Create a new Maven Project named “SeleniumServer” and copy into its pom.xml the following

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.waltercedric.maven</groupId>
    <artifactId>SeleniumServer</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.seleniumhq.selenium.server</groupId>
            <artifactId>selenium-server-coreless</artifactId>
            <version>1.0-beta-2</version>
        </dependency>
        <dependency>
            <groupId>org.seleniumhq.selenium.core</groupId>
            <artifactId>selenium-core</artifactId>
            <version>1.0-beta-2</version>
        </dependency>
    </dependencies>
</project>
```

Create a Java launcher and use org.openqa.selenium.server.SeleniumServer as main class. If you start the launcher, you will see the following in eclipse console

![seleniumRC.started.in.eclipse](/assets/images/2009/09/seleniumRC.started.in_.eclipse.png)Selenium RC is now waiting on port 4444 for Selenium Test case orders.

You can now run your test case in eclipse like any other test case using Eclipse build in Junit runner.