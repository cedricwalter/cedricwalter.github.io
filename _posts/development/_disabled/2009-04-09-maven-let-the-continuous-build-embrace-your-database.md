---

title: 'Maven: Let the Continuous Build Embrace Your Database'
date: '2009-04-09T12:06:43+02:00'
author: 'Cédric Walter'



tags:
    - apache
    - java
    - maven
    - read
---

The last year, I was at [Jazoon 08](http://jazoon.com), and I forget to tell you how good some of their presentation about [Maven](http://maven.apache.org) were

#### [Let the Continuous Build Embrace Your Database](http://jazoon.com/jazoon08/en/conference/presentationdetails.html?type=sid&detail=3020)

*“JUnit tests should not depend on database state.” – “Set up your test data before you run your test.” – We figure this just does not always scale. Mocking test data for hundreds of tables may not be suitable and database schemes evolve as the application does.  
These are common challenges when developing large J2EE systems. This presentation shows practical approaches for project setups and (functional) tests that decided to depend on a database. Developers and build servers may or may not share the database and support for this should be as simple as possible. We give an overview of what proved to be a good setup for an #Eclipse / #Maven 2 based development and build environment that relies on an evolving relational schema.*

[Read More Here](http://jazoon.com/portals/0/Content/ArchivWebsite/jazoon.com/jazoon08/en/conference/presentationdetailsf9d3.html)

The PDF cannot be downloaded, fortunately I‘ve made a backup just in case 2 years ago. I did upload the presentation at SlideShare

<div id="__ss_5475750" style="width: 425px;">[Let the Continuous Build Embrace Your Database](http://www.slideshare.net/cedricwalter/let-the-continuous-build-embrace-your-database "Let the Continuous Build Embrace Your Database") <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,32,18" height="355" width="425"><param name="allowFullScreen" value="true"></param><param name="allowScriptAccess" value="always"></param><param name="src" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=3020-101018063533-phpapp02&stripped_title=let-the-continuous-build-embrace-your-database&userName=cedricwalter"></param><embed allowfullscreen="allowfullscreen" allowscriptaccess="always" height="355" src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=3020-101018063533-phpapp02&stripped_title=let-the-continuous-build-embrace-your-database&userName=cedricwalter" type="application/x-shockwave-flash" width="425"></embed></object><div style="padding: 5px 0 12px;">View more [presentations](http://www.slideshare.net/) from [cedricwalter](http://www.slideshare.net/cedricwalter).Here is the mind map I’ve done during the presentation

- Continuous build for DB 
    - db changes 
        - SQL script patches
        - changes in chema
        - different db state for each trunk tag branches?
        - = hell of synchronization issues
    - - they put script in SVN
        - only run modified scripts between each or last build
        - run SQL script against references db before pushing the same changes to prod
        - ex: developer commit, build server poll SVNand launch build, then propagate
        - they use continuum
    - they have made a framework that has some tables more to keep which files .SQL has run
    - and what .sql revision svn it was
    - so they can only run delta scripts
    - ex: version 1.0 in prod, but bug appear 
        - -> open a branch
        - -> automatic run of branch sql scripts also to trunk
    - Idempotent
        - but the same script apply twice on different database status do not gibe the same result 
            - so they have to make script idempotent by checking/handling all previous versions
        - views ad trigger can be Idempotent easily
    - they have DB quality checks 
        - primary keys constraints
        - foreign keys
        - etc..
- fightning bugs 
    - not breaking sql scripts
    - no regressions
- rerunnable junit functional tests 
    - auto rollback junit class 
        - their own impl of datasource 
            - and connection
    - don’t expect developer to properly rollback called in teardown
    - extends autorollbackjunittestcase.class
    - autorollbacktestcase also existing in spring see spring-test.jar
- eclipse #maven setup 
    - for junit tests
    - read junit.properties
    - if any junit-fritz.properties exist it will use the user config file 
        - good idea
        - the file will e committed but wont break continuum build server
    - multi modules 
        - different classpath (test and main) between eclipse and #maven
        - they use propertes in pom.xml and variable in properties 
            - -> filter
- done by teslekurs 
    - they have 70 modules
    - netcetera.ch
- make a try 
    - go to workspace in dos 
        - run in pk common “mvn clean test” it should build common like in teamcity
    - Use spring test framework of spring 2.5
- outlook 
    - only oracle
    - they search good test data among their 1TB data
    - want to use #maven in also in eclipse, they use the command line right now
- ideas 
    - they store the script they have run to create the database and their SVN revision in db someone in room has propose to keep the data in build and add a column to know if data was created by Junit or by the main code

[![Database with junit](/assets/images/2009/04/Databasewithjunit_thumb.png "Database with junit")](/assets/images/2009/04/Databasewithjunit.png)