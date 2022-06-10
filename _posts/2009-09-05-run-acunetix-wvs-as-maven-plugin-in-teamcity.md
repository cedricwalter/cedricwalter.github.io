---
id: 4606
title: 'Run Acunetix WVS as Maven plugin in TeamCity'
date: '2009-09-05T16:55:55+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4606'
permalink: /development/run-acunetix-wvs-as-maven-plugin-in-teamcity/
tags:
    - apache
    - ci/cd
    - maven
    - teamcity
---

[Acunetix Web Vulnerability Scanner](http://www.acunetix.com/) (WVS) is an automated web application security testing tool that audits your web applications by checking for exploitable hacking vulnerabilities. Automated scans may be supplemented and cross-checked with the variety of manual tools to allow for comprehensive web site and web application penetration testing.

Acunetix can detect some security vulnerabilities among others, [click here for a list](http://www.acunetix.com/support/vulnerability-checks.htm)

Until now, [Acunetix](http://www.acunetix.com/) WVS does not support automated scanning via API’s. However, Acunetix WVS supports command line, which can provide similar functionality and is an easy way to integrate Acunetix WVS with other third party applications.

The example I am providing is using #Maven, and start in phase “integration-test” Acunetix against your web application. Note that running [Acunetix](http://www.acunetix.com/) is a costly operation, it cost CPU, take a lot of time, stress your network, so I recommend you to run it at night (3 or 4AM) so developer can a receive a feedback the day after. I have also define a #Maven profile “WebappSecurityTesting” so I can trigger the check in a new Build in [Jetbrains TeamCity](http://www.jetbrains.com/teamcity/)/[Atlassian Bamboo](http://www.atlassian.com/software/bamboo/)/[Java Hudson](https://hudson.dev.java.net/) with -PWebappSecurityTesting in #Maven goals list.

Trivial but worth mentioning:

- You need in Maven phase “pre-integration-test” to deploy your web application to a running container: tomcat, jboss, weblogic, iis.. before running acunetix against it
- You need to adapt values in red below to your runtime environment
- the Ant task is run only if your OS match the string “**Windows XP**” so remove this or use the right OS’s name determined by the Java Virtual machine and set in the “os.name” system property.

```
<profiles>
    <profile>
        <id>WebappSecurityTesting</id>
        <activation>
            <activeByDefault>false
            </activeByDefault>             <!-- automatic activation                 <file>                 <exists>C:\acunetix\wvs_console.exe</exists>                 </file>             -->
        </activation>
        <build>
            <plugins>
                <plugin>
                    <artifactId>maven-antrun-plugin</artifactId>
                    <executions>
                        <execution>
                            <phase>integration-test</phase>
                            <configuration>
                                <tasks name="Run acunetix webscanner">
                                    <exec dir="C:\acunetix" executable="wvs_console.exe" os="Windows XP"
                                          output="${basedir}/target/acunetix/result.txt">
                                        <arg value="/Scan"/>
                                        <arg value="http://testphp.acunetix.com"/>
                                        <arg value="/Profile"/>
                                        <arg value="default"/>
                                        <arg value="/SaveToDatabase"/>
                                        <arg value="/GenerateReport"/>
                                        <arg value="${basedir}/target/acunetix"/>
                                        <arg value="/ReportFormat"/>
                                        <arg value="PDF"/>
                                        <arg value="/ReportExtraParams"/>
                                        <arg value="/r WVSComplianceReport.rep /k PCI12.xml"/>
                                        <arg value="--ScanningMode=Heuristic"/>
                                        <arg value="--UseAcuSensor=TRUE"/>
                                        <arg value="--EnablePortScanning=TRUE"/>
                                    </exec>
                                </tasks>
                            </configuration>
                            <goals>
                                <goal>run</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

### Explanation

[Acunetix](http://www.acunetix.com/) WVS console application can be run by running ‘wvs\_console.exe’ from the Acunetix WVS installation directory. An example of a typical Acunetix WVS scan command including explanation, can be found below:

```
/Scan http://testphp.acunetix.com: Instruct the scanner to launch a single site scan against http://testphp.acunetix.com.
/Profile default: Use default profile for scanning.
/SaveToDatabase: This parameter instructs the scanner to save scan results to reporting database.  If this parameter is not enabled, reports cannot be generated.
/GenerateReport "c:\reports\": Generate scan report in the path 'c:\reports'.
/ReportFormat PDF: Generate the report in PDF format.
/ReportExtraParams "/r WVSComplianceReport.rep /k PCI12.xml": Generate a PCI version1.2 compliance report (PCI12.xml) using the Compliance reporting template (WVSComplianceReport.rep).
--ScanningMode=Heuristic: This option is to instruct the scanner to use heuristic scanning mode against specified target.
--UseAcuSensor=TRUE: Use AcuSensor Technology during scan. The AcuSensor client files must be installed and configured on the target for AcuSensor Technology to function.
--EnablePortScanning=TRUE: Instruct the scanner to port scan the target as well, and run network security tests (Network Alerts) against the target.
```

References

- Maven Antrun plugin <http://maven.apache.org/plugins/maven-antrun-plugin/usage.html>
- Ant exec task <http://ant.apache.org/manual/CoreTasks/exec.html>
- Acunetix API interface: <http://www.acunetix.com/support/api-interface.htm>