---

title: 'Behavior Driven Development with JBehave and Apache Maven'
date: '2010-07-24T09:22:16+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - about
    - ant
    - apache
    - check
    - ci/cd
    - configuration
    - container
    - core
    - css
    - custom
    - dependency
    - Design
    - development
    - directory
    - documentation
    - HowTo
    - maven
    - test
    - tutorial
---

I won’t explain you how to write any [JBehave](http://jbehave.org/)<span style="font-size: inherit;"> tests as the [online documentation is more than complete](http://jbehave.org/documentation/)<span style="font-size: inherit;">.

I prefer to show you how to make them run in eclipse, and in Apache #Maven as the example were not easy to run (scenario are wrongly in src/main/java).

> [JBehave](http://jbehave.org/) is a framework for Behaviour-Driven Development   
> Behaviour-driven development (BDD) is an evolution of test-driven development (TDD) and acceptance-test driven design, and is intended to make these practices more accessible and intuitive to newcomers and experts alike.   
> It shifts the vocabulary from being test-based to behaviour-based, and positions itself as a design philosophy.   
> You can find out more about behaviour-driven development on the [BDD wiki](http://behaviour-driven.org), or in the article [Introducing BDD](http://behaviour-driven.org/Introduction)
> 
> Features of JBehave include:
> 
> - Pure #Java implementation, which plays well with #Java-based enterprises.
> - Users can specify and run text-based user stories, which allows “out-in” development.
> - Annotation-based binding of textual steps to #Java methods, with auto-conversion of string arguments to any parameter type (including generic types) via custom parameter converters.
> - Annotation-based configuration and Steps class specifications
> - Dependency Injection support allowing both configuration and Steps instances composed via your favourite container (Guice, PicoContainer, Spring).
> - Extensible story reporting: outputs stories executed in different human-readable file-based formats (HTML, TXT, XML). Fully style-able view.
> - Auto-generation of pending steps so the build is not broken by a missing step, but has option to configure breaking build for pending steps.
> - Localisation of user stories, allowing them to be written in any language.
> - IDE integration: stories can be run as JUnit tests or other annotation-based unit test frameworks, providing easy integration with your favourite IDE.
> - Ant integration: allows stories to be run via Ant task
> - Maven integration: allows stories to be run via #Maven plugin at given build phase

To make the online sample run easily without having to check out the whole tree of JBehave, I will show you that by slightly altering the pom.xml of a sample (Trader), you can run them against a fix version of JBehave.

The whole pom.xml

```xml
<profiles>
    <profile>jbehave
        <activation>
            <activebydefault>false</activebydefault>
        </activation>
        <build>
            <plugins>
                <plugin>
                    <groupid>org.apache.maven.plugins</groupid>
                    <artifactid>maven-dependency-plugin</artifactid>
                    <executions>
                        <execution>unpack-jbehave-site-resources                     
                            <phase>generate-resources</phase>
                            <goals>
                                <goal>unpack</goal>
                            </goals>
                            <configuration>
                                <overwritereleases>false</overwritereleases>
                                <overwritesnapshots>true</overwritesnapshots>
                                <artifactitems>
                                    <artifactitem>
                                        <groupid>org.jbehave.site</groupid>
                                        <artifactid>jbehave-site-resources</artifactid>
                                        <version>2.0.2</version>
                                        <outputdirectory>${project.build.directory}/jbehave-reports/rendered
                                        </outputdirectory>
                                    </artifactitem>
                                </artifactitems>
                            </configuration>
                        </execution>
                        <execution>unpack-jbehave-reports-resources                     
                            <phase>generate-resources
                        </phase>
                            <goals>
                                <goal>unpack</goal>
                            </goals>
                            <configuration>
                                <overwritereleases>false</overwritereleases>
                                <overwritesnapshots>true</overwritesnapshots>
                                <artifactitems>
                                    <artifactitem>
                                        <groupid>org.jbehave</groupid>
                                        <artifactid>jbehave-core</artifactid>
                                        <version>${jbehave.version}</version>
                                        <outputdirectory>${project.build.directory}/jbehave-reports/rendered
                                        </outputdirectory>
                                        <includes>\/*.css,\/*.ftl,\/*.js</includes>
                                    </artifactitem>
                                </artifactitems>
                            </configuration>
                        </execution>
                    </executions>
                </plugin>
                <plugin>
                    <groupid>org.jbehave</groupid>
                    <artifactid>jbehave-maven-plugin</artifactid>
                    <version>${jbehave.version}</version>
                    <executions>
                        <execution>run-scenarios-found                     
                            <phase>integration-test</phase>
                            <configuration>
                                <scenarioincludes>
                                    <scenarioinclude>/scenarios/*.java</scenarioinclude>
                                </scenarioincludes>
                                <scenarioexcludes>
                                    <scenarioexclude>/i18n/scenarios/*.java</scenarioexclude>
                                </scenarioexcludes>
                                <batch>false</batch>
                                <ignorefailure>true</ignorefailure>
                                <classloaderinjected>false</classloaderinjected>
                                <scope>test</scope>
                            </configuration>
                            <goals>
                                <goal>run-scenarios</goal>
                            </goals>
                        </execution>
                        <execution>run-i18n-scenarios-found                     
                            <phase>integration-test</phase>
                            <configuration>
                                <scenarioincludes>
                                    <scenarioinclude>/i18n/scenarios/*.java</scenarioinclude>
                                </scenarioincludes>
                                <skip>false</skip>
                                <classloaderinjected>true</classloaderinjected>
                                <scope>test</scope>
                            </configuration>
                            <goals>
                                <goal>run-scenarios</goal>
                            </goals>
                        </execution>
                        <execution>stepdoc                     
                            <phase>integration-test</phase>
                            <configuration>
                                <scenarioincludes>
                                    <scenarioinclude>/scenarios/*.java</scenarioinclude>
                                </scenarioincludes>
                                <scenarioexcludes>
                                    <scenarioexclude>/scenarios/None.java</scenarioexclude>
                                </scenarioexcludes>
                                <skip>false</skip>
                                <scope>test</scope>
                                <classloaderinjected>false</classloaderinjected>
                            </configuration>
                            <goals>
                                <goal>stepdoc</goal>
                            </goals>
                        </execution>
                        <execution>render-reports-generated                     
                            <phase>post-integration-test</phase>
                            <configuration>
                                <formats>
                                    <format>txt</format>
                                    <format>html</format>
                                    <format>xml</format>
                                </formats>
                                <scope>test</scope>
                                <ignorefailure>true</ignorefailure>
                            </configuration>
                            <goals>
                                <goal>render-reports</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
        <reporting>
            <excludedefaults>true</excludedefaults>
            <plugins>
                <plugin>
                    <groupid>org.jbehave</groupid>
                    <artifactid>jbehave-maven-plugin</artifactid>
                    <version>${jbehave.version}</version>
                    <configuration></configuration>
                    <reportsets>
                        <reportset>
                            <reports>
                                <report>render-reports</report>
                            </reports>
                        </reportset>
                    </reportsets>
                </plugin>
            </plugins>
        </reporting>
    </profile>
</profiles> 
```