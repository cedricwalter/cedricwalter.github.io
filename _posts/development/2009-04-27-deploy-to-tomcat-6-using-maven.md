---
id: 4300
title: 'Deploy to Tomcat 6 using Maven'
date: '2009-04-27T19:30:11+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4300'

tags:
    - apache
    - ci/cd
    - deploy
    - java
    - maven
---

A ready to use example on how you can deploy your web application to a Tomcat 6 container using #Maven [Cargo](http://cargo.codehaus.org). [Cargo](http://cargo.codehaus.org) is a thin wrapper that allows you to manipulate #Java EE containers in a standard way.

[Cargo](http://cargo.codehaus.org) provides the following Tools and APIs:

- A #Java API to start/stop/configure #Java Containers and deploy modules into them.
- A #Java API to parse/create/merge #Java EE Modules
- Ant tasks, #Maven 1, #Maven 2 plugins.
- *Intellij IDEA and Netbeans plugins are in the sandbox.*

First you have to decide if your tomcat server run locally or remotely as this influence the way you’ll configure your pom.xml

Below is an example of a standard architecture

```
|---MyApplication
|           |- ear       (ear)
|           |- service (jar)
|           |- client    (jar)
|           |- web      (war)
|           |- integration (jar)
```

The most interesting Maven module, which will be the subject of this article, and the next one is describing how **to automate the deployment of a war to Tomcat** and later on running **integration tests** using Selenium.

> ‘Integration testing’ is the activity of software testing in which individual software modules are combined and tested as a group. It occurs after unit testing and before system testing. Integration testing takes as its input modules that have been unit tested, groups them in larger aggregates, applies tests defined in an integration test plan to those aggregates, and delivers as its output the integrated system ready for system testing. \[[WikiPedia](http://en.wikipedia.org/wiki/Integration_testing)\]

## Deploying to Tomcat running locally

Locally mean running on your development machine, at localhost 8080 or on any other port. Maven has the concept of a ‘phase’ which can be thought of a collection of goals. Hence here we are specifying that during the   
’pre-integration-test’ phase first deploy the web app to the container specific folder and then start the container. Both ‘deployer-deploy’ and ‘start’ are cargo specific goals. The code below is already ready for integration testing!

<!—[Example of Configuration](http://cargo.codehaus.org/Maven2+Plugin+Reference+Guide) –>

```
<build>
    <plugins>
        <plugin>
            <groupId>org.codehaus.cargo</groupId>
            <artifactId>cargo-maven2-plugin</artifactId>
            <configuration>
                <wait>true</wait>
                <container>
                    <containerId>tomcat6x</containerId>
                    <type>installed</type>
                    <home>${catalina.home}</home>
                </container>
                <configuration>
                    <type>existing</type>
                    <home>${catalina.home}</home>
                    <properties>
                        <cargo.tomcat.manager.url>https://yourhost/manager</cargo.tomcat.manager.url>
                        <cargo.remote.username>ManagerAdminLogin</cargo.remote.username>
                        <cargo.remote.password>ManagerAdminPassword</cargo.remote.password>
                    </properties>
                </configuration>
                <deployer>
                    <type>installed</type>
                    <deployables>
                        <deployable>
                            <groupId>com.waltercedric</groupId>
                            <artifactId>myapplication-web</artifactId>
                            <type>war</type>
                        </deployable>
                    </deployables>
                </deployer>
            </configuration>
            <executions>
                <execution>
                    <id>start-container</id>
                    <phase>pre-integration-test</phase>
                    <goals>
                        <goal>deployer-deploy</goal>
                        <!--  Only local containers can be started -->
                        <!--<goal>start</goal>-->
                    </goals>
                </execution>
                <execution>
                    <id>stop-container</id>
                    <phase>post-integration-test</phase>
                    <goals>
                        <goal>deployer-undeploy
                        </goal>
                        <!--  Only local containers can be stopped -->
                        <!--<goal>stop</goal>-->
                    </goals>
                </execution>
                <execution>
                    <id>verify-deploy</id>
                    <phase>install</phase>
                    <goals>
                        <goal>deployer-deploy</goal>
                    </goals>
                </execution>
                <execution>
                    <id>clean-undeploy</id>
                    <phase>pre-clean</phase>
                    <goals>
                        <goal>deployer-undeploy</goal>
                        <!--  Only local containers can be stopped -->
                        <!--<goal>stop</goal>-->
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

## Deploying to Tomcat running remotely

The code slightly change:

- You can NOT start and stop Tomcat running remotely, only deploy and un deploy your web application
- ‘installed’ is replaced by ‘remote’

```
<build>
    <plugins>
        <plugin>
            <groupId>org.codehaus.cargo</groupId>
            <artifactId>cargo-maven2-plugin</artifactId>
            <configuration>
                <wait>true</wait>
                <container>
                    <containerId>tomcat6x</containerId>
                    <type>remote</type>
                </container>
                <configuration>
                    <type>remote</type>
                    <properties>
                        <cargo.tomcat.manager.url>https://yourhost/manager</cargo.tomcat.manager.url>
                        <cargo.remote.username>ManagerAdminLogin</cargo.remote.username>
                        <cargo.remote.password>ManagerAdminPassword</cargo.remote.password>
                    </properties>
                </configuration>
                <deployer>
                    <type>installed</type>
                    <deployables>
                        <deployable>
                            <groupId>com.waltercedric</groupId>
                            <artifactId>myapplication-web</artifactId>
                            <type>war</type>
                        </deployable>
                    </deployables>
                </deployer>
            </configuration>
            <executions>
                <execution>
                    <id>start-container</id>
                    <phase>pre-integration-test</phase>
                    <goals>
                        <goal>deployer-deploy</goal>
                    </goals>
                </execution>
                <execution>
                    <id>stop-container</id>
                    <phase>post-integration-test</phase>
                    <goals>
                        <goal>deployer-undeploy</goal>
                    </goals>
                </execution>
                <execution>
                    <id>verify-deploy</id>
                    <phase>install</phase>
                    <goals>
                        <goal>deployer-deploy</goal>
                    </goals>
                </execution>
                <execution>
                    <id>clean-undeploy</id>
                    <phase>pre-clean</phase>
                    <goals>
                        <goal>deployer-undeploy</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

If you don’t want to let cargo deploy your web application artefact under the default name myapplication-web-0.0.1.SNAPSHOT.war, you can add the following to the deployable section of cargo

```
<plugin>
    <groupId>org.codehaus.cargo</groupId>
    <artifactId>cargo-maven2-plugin</artifactId>
    <configuration>
        <deployer>
            <deployables>
                <deployable>
                    <properties>
                        <context>mywebapp</context>
                    </properties>
                </deployable>
            </deployables>
        </deployer>
    </configuration>
</plugin>
```

So you’ll be able to access your web application with http://localhost/mywebapp instead of <http://localhost/myapplication-web-0.0.1.SNAPSHOT>

From now on, any phase higher than ’pre-integration-test’ will trigger the deployment to your web application to any tomcat, jboss or weblogic container. As a reminder, here are the major phase of Maven, You can put many of them just separate by a space in run as – goals

- validate – validate the project is correct and all necessary information is available
- generate-sources – generate any source code for inclusion in compilation
- process-sources – process the source code, for example to filter any values
- generate-resources – generate resources for inclusion in the package
- process-resources – copy and process the resources into the destination directory, ready for packaging
- compile – compile the source code of the project
- process-classes – post-process the generated files from compilation, for example to do byte code enhancement on Java classes
- generate-test-sources – generate any test source code for inclusion in compilation
- process-test-sources – process the test source code, for example to filter any values
- generate-test-resources – create resources for testing
- process-test-resources – copy and process the resources into the test destination directory
- test-compile – compile the test source code into the test destination directory
- test – run tests using a suitable unit testing framework. These tests should not require the code be packaged or deployed
- prepare-package – perform any operations necessary to prepare a package before the actual packaging.
- package – take the compiled code and package it in its distributable format, such as a JAR
- pre-integration-test – perform actions required before integration tests are executed. This may involve things such as setting up the required environment
- integration-test – process and deploy the package if necessary into an environment where integration tests can be run
- post-integration-test – perform actions required after integration tests have been executed. This may including cleaning up the environment
- verify – run any checks to verify the package is valid and meets quality criteria
- install – install the package into the local repository, for use as a dependency in other projects locally
- deploy – done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects

I recommend you also to use:

- Maven profiles (triggered by environment, Linux, Windows, DEV, TEST, PROD)
- Key value pair for sensitive data (login, password)
- Key value pair for contextual data (URL’s of management console)

All of these data can be saved in your Maven settings.xml or given by system variables at build time.