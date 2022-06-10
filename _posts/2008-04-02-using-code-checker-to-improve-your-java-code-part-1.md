---
id: 3336
title: 'Using Code Checker to improve your Java code (Part 1)'
date: '2008-04-02T23:44:28+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3336'
permalink: /java/using-code-checker-to-improve-your-java-code-part-1/
image: /wp-content/uploads/2008/04/coding.guidelines_thumb.png
tags:
    - about
    - ant
    - apache
    - bug
    - bugs
    - checked
    - click
    - clone
    - code
    - Coding
    - concentrate
    - configurable
    - correctly
    - coupling
    - coverage
    - create
    - customizable
    - dangerous
    - java
---

Code checker scans #Java source code in your favorite IDE (I assume Intellij or Eclipse :-))

There are basically of 2 types:

- **On the fly code checker,** as soon as you type a word or save a new document, it run and give a real time feedback
- **Offline checker** or so called static code analyzer that can be run during the build of your java components

### Why using a code guidelines checker?

These tools **are highly recommended** across a team of different developers for the following reasons:

- These tools are highly configurable and can be made to support almost any coding standard.
- Ideal for projects that want to enforce a coding standard (ideally where not all developer code the same way)
- Ease your debugging and maintenance costs by making the code more readable: developers do not have to worry about   
    deciphering individual coding styles when working on a piece of code they did not write.
- They can detect possible bugs or dangerous coding behavior – empty try/catch/finally/switch statements
- Detect dead code – unused local variables, parameters and private methods
- Sub optimal code – wasteful String/String Buffer usage
- Overcomplicated expressions – unnecessary if statements, for loops that could be while loops
- Duplicate code – copied/pasted code means copied/pasted bugs
- Find class design problems, bug patterns like double checked locking.

They give an immediate “objective” feedback and **help developers** recognize where they have been excellent or lazy;

It gives **team leader**, an opportunity to study the code, design and team from a different perspective; and by slicing off   
whole classes of faults, You can concentrate more on design shortcomings.

### Features

All code checker share more or less the same features

- Violations severity can be defined at rules level (error, warning, ignore, other).
- Rules can be triggered by threshold/values.
- Rules are stored in XML files.
- Java editor highlight offending lines/rules in violation
- Rules can be extended (require some strong tree parsing and language knowledge)
- Integration in major IDE (eclipse, IDEA, …)
- Integration in ANT, Maven, …

### Attention

The major issues wont be to install these tools…

Most developers are convinced that their code is the best, and bad habits are difficult to get rid of. The   
biggest pain will be to force all developers to agree on a set of common rules that you want to enforce.   
A good starting point is to use some well known rules or good practices from the industry. Sun is for example   
publishing some code writing rules.

I will look at the major open source and free code checker on the market in this series of articles:

- PMD
- Findbugs
- Checkstyle
- Code coverage

### PMD

*PMD is a static ruleset based Java source code analyzer that identifies potential problems like:*

- *Possible bugs – Empty try/catch/finally/switch blocks.*
- *Dead code – Unused local variables, parameters and private methods*
- *Empty if/while statements*
- *Overcomplicated expressions – Unnecessary if statements, for loops that could be while loops*
- *Sub optimal code – wasteful String/String Buffer usage*
- *Classes with high Cyclomatic Complexity measurements.*
- *Duplicate code – Copied/pasted code can mean copied/pasted bugs, and decreases maintainability.*

*While PMD doesn’t officially stand for anything, it has several unofficial names, the most appropriate probably   
being Programming Mistake Detector. Typically, PMD errors are not true errors, but rather inefficient code,   
i.e. the application could still function properly even if they were not corrected*. [from WikiPedia](http://en.wikipedia.org/wiki/PMD_(software))

- PMD Can be integrated with Eclipse (see below), Maven (maven-pmd-plugins), Ant (Ant task).
- PMD is an engine, rulesets parse code and issue a message and level if rules are violated.
- [PMD](http://pmd.sourceforge.net/) is notable because you can write your own rules using XPath expressions over an XML version of the parse tree
- PMD has a duplicate code detector CPD which is quite fast and accurate to locate dangerous CUT and Paste code sections.

### List of rule sets

- [Basic JSF rules](http://pmd.sourceforge.net/rules/index.html):
- [Basic JSP rules](http://pmd.sourceforge.net/rules/index.html)
- [Basic Rules](http://pmd.sourceforge.net/rules/index.html)
- [Braces Rules](http://pmd.sourceforge.net/rules/index.html)
- [Clone Implementation Rules](http://pmd.sourceforge.net/rules/index.html)
- [Code Size Rules](http://pmd.sourceforge.net/rules/index.html)
- [Controversial Rules](http://pmd.sourceforge.net/rules/index.html)
- [Coupling Rules](http://pmd.sourceforge.net/rules/index.html)
- [Design Rules](http://pmd.sourceforge.net/rules/index.html)
- [Finalizer Rules](http://pmd.sourceforge.net/rules/index.html)
- [Import Statement Rules](http://pmd.sourceforge.net/rules/index.html)
- [J2EE Rules](http://pmd.sourceforge.net/rules/index.html)
- [JavaBean Rules](http://pmd.sourceforge.net/rules/index.html)
- [JUnit Rules](http://pmd.sourceforge.net/rules/index.html)
- [Jakarta Commons Logging Rules](http://pmd.sourceforge.net/rules/index.html)
- [Java Logging Rules](http://pmd.sourceforge.net/rules/index.html)
- [Migration Rules](http://pmd.sourceforge.net/rules/index.html)
- [Migration15](http://pmd.sourceforge.net/rules/index.html)
- [MigratingToJava4](http://pmd.sourceforge.net/rules/index.html)
- [Naming Rules](http://pmd.sourceforge.net/rules/index.html)
- [Optimization Rules](http://pmd.sourceforge.net/rules/index.html)
- [Strict Exception Rules](http://pmd.sourceforge.net/rules/index.html)
- [String and StringBuffer Rules](http://pmd.sourceforge.net/rules/index.html)
- [Security Code Guidelines](http://pmd.sourceforge.net/rules/index.html)
- [Type Resolution Rules](http://pmd.sourceforge.net/rules/index.html)
- [Unused Code Rules](http://pmd.sourceforge.net/rules/index.html)

## Example of integrations: Ant, Maven and Eclipse

### Ant

```
<target name="pmd">
    <taskdef name="pmd" classname="net.sourceforge.pmd.ant.PMDTask"/>
    <pmd shortFilenames="true">
        <ruleset>rulesets/favorites.xml</ruleset>
        <ruleset>basic</ruleset>




        <formatter type="html" toFile="pmd_report.html“  linkPrefix="http://pmd.sourceforge.net/xref/"/>
        <fileset dir="/tmp/productcatalog/">
            <include name=“com/**/*.java"/>
        </fileset>
    </pmd>
</target>
```

### Maven

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-pmd-plugin</artifactId>
    <configuration>
        <linkXref>true</linkXref>
        <sourceEncoding>utf-8</sourceEncoding>
        <!-- 100 tokens corresponds to approximately 5-10 lines of code. -->
        <minimumTokens>100</minimumTokens>
        <targetJdk>1.5</targetJdk>
        <excludes>
            <exclude>**/generated/*.java</exclude>
        </excludes>
    </configuration>
</plugin>
```

## Installing PMD in Eclipse

1. Start Eclipse.
2. Start the installation procedure : select the Help&gt;Software Updates&gt;Find and Install… menu item.
3. Select “Search for new features to install” option and click Next.
4. Click New Remote Site…
5. Give a name (ie PMD Eclipse Site), enter the URL <http://pmd.sf.net/eclipse>
6. Select this new site in the Sites to include in search list and click Next.
7. Select PMD for Eclipse 3 and Apache Xerces in the “Select the features to install” list and click Next.
8. Accept the terms of the license agreements and click Next.
9. Verify that the install location is your Eclipse installation directory, otherwise select the correct one, click Finish.
10. A warning appear telling the feature is not signed. Ignore and click Install to continue.
11. Accept to restart the workbench to load PMD into the workbench.

Eclipse is restarted and a PMD welcome page is displayed : the plugin is correctly installed.

## Using PMD in Eclipse

Trying to start PMD on a full workspace on too many modules/projects is very dangerous as the number of   
violations can be very high (many thousands) and can make eclipse run out of memory

In order to test PMD. I did choose an open source project, the connector of MySQL 5 in the version 5.1.6.   
I do not want to judge the quality of MySQL connector, this is simply a project code that was available on my desktop.

First Review all rules, you will find some of them disturbing (remember nobody like to be told that his coding habit   
are bad), You can switch off some rules or import a set of predefined rules in the preferences windows

If you are in a distributed team, or wan to share your settings using either CVS or Subversion (SVN) don’t   
forget to export the rule sets to a share project.

The code duplicator detector will report any code that seems to be identical according to a certain value of   
number of line (25 lines of duplicated code)

The project is set in eclipse, and compiling

Lets run PMD on MySQL connector,   
The project is after no more compiling….

PMD create additional Eclipse views, this help you better judge how many violations there is and their   
level. As You see there is some violations

The duplicate detector ask for the number of lines that it should consider duplicated.

PMD final words…

- Is customizable via XSL rules, java
- Will disturb You at the beginning, but will improve your code in no time.
- Has a broad scope of rule sets, basic JSF rules are now existing.
- Some reported violations are not bugs, so take everything with a bit of salt, try to reach a   
    realistic goal: (1 failure per 100 lines of code per example is my goal)