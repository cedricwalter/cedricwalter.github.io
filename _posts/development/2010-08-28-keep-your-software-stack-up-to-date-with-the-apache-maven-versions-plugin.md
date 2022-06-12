---
id: 5797
title: 'Keep your software stack up to date with the Apache Maven Versions Plugin'
date: '2010-08-28T13:57:28+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5797'

header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - bug
    - building
    - built
    - carefully
    - ci/cd
    - commit
    - core
    - corresponding
    - current
    - customer
    - dependencies
    - dependency
    - ensure
    - example
    - files
    - fix
    - HowTo
    - maven
---

It is not unusual in a project to have a huge number of third party artifacts and Plug-in. [Apache #Maven](http://maven.apache.org/) help you keep track of them, along with their transitive dependencies.

But how do you know when a new version of an artifact is available? This is where the #Maven Versions plug-in come hand in.

> The Versions Plug-in is used when you want to manage the versions of artifacts in a project’s POM.

By running

> mvn versions:display-dependency-updates

in any [Apache #Maven](http://maven.apache.org/) project or modules, you’ll get for example (we have a lot of 25 #Maven modules, here is only one presented as an example, the list being too long)

```
[INFO] -------------------------------------------------------------------------------------------------- 
[INFO] Building Unnamed - com.innoveo:skye-services-api:jar:2.2.0-M-06 
[INFO] -------------------------------------------------------------------------------------------------- 
[INFO] 
[INFO] The following dependencies in Dependency Management have newer versions: 
[INFO]   junit:junit ............................................. 4.4 -> 4.8.1 
[INFO]   log4j:log4j ......................................... 1.2.15 -> 1.2.16 
[INFO]   org.springframework:spring ...................... 2.5.6 -> 2.5.6.SEC02 
[INFO]   org.springframework:spring-test ............... 2.5.6 -> 3.0.4.RELEASE
```

## Attention:

It is not always an easy task to update some core components or 3rd party libraries in a complex software, as it may introduce some regressions, incompatibilities..

At least thanks to this Versions plug in, you are aware that they may be something newer to try. What this plug in do not report is **why** you may want to update some artifacts libraries:

- Do I have to use the latest version x.y.z because of security issues?
- Will i get more performances by updating to x.y.z?
- New Version x.y.z resolve bug xxxx, will I have other annoying issues?

In all the above case, you are on your own, but this is not the scope of this plug in. You’ll have anyway to

1. Carefully decide which library can be updated,
2. Match it to your software roadmap,
3. Have enough confidence in your test suite (unit test, BDD, integration tests) and testing team,
4. Communicate with your customer (for security issues in 3rd party library)
5. .. and the list goes on

The Versions Plug-in has a lot of interesting goals.

- [versions:display-dependency-updates](http://mojo.codehaus.org/versions-maven-plugin/display-dependency-updates-mojo.html) scans a project’s dependencies and produces a report of those dependencies which have newer versions available.
- [versions:display-plugin-updates](http://mojo.codehaus.org/versions-maven-plugin/display-plugin-updates-mojo.html) scans a project’s plugins and produces a report of those plugins which have newer versions available.
- [versions:display-property-updates](http://mojo.codehaus.org/versions-maven-plugin/display-property-updates-mojo.html) scans a project and produces a report of those properties which are used to control artifact versions and which properties have newer versions available.

Some are also updating values across all pom.xml for you.

- [versions:update-parent](http://mojo.codehaus.org/versions-maven-plugin/update-parent-mojo.html) updates the parent section of a project so that it references the newest available version. For example, if you use a corporate root POM, this goal can be helpful if you need to ensure you are using the latest version of the corporate root POM.
- [versions:update-properties](http://mojo.codehaus.org/versions-maven-plugin/update-properties-mojo.html) updates properties defined in a project so that they correspond to the latest available version of specific dependencies. This can be useful if a suite of dependencies must all be locked to one version.
- [versions:update-child-modules](http://mojo.codehaus.org/versions-maven-plugin/update-child-modules-mojo.html) updates the parent section of the child modules of a project so the version matches the version of the current project. For example, if you have an aggregator pom that is also the parent for the projects that it aggregates and the children and parent versions get out of sync, this mojo can help fix the versions of the child modules. (Note you may need to invoke Maven with the -N option in order to run this goal if your project is broken so badly that it cannot build because of the version mis-match).
- [versions:lock-snapshots](http://mojo.codehaus.org/versions-maven-plugin/lock-snapshots-mojo.html) searches the pom for all -SNAPSHOT versions and replaces them with the current timestamp version of that -SNAPSHOT, e.g. -20090327.172306-4
- [versions:unlock-snapshots](http://mojo.codehaus.org/versions-maven-plugin/unlock-snapshots-mojo.html) searches the pom for all timestamp locked snapshot versions and replaces them with -SNAPSHOT.
- [versions:resolve-ranges](http://mojo.codehaus.org/versions-maven-plugin/resolve-ranges-mojo.html) finds dependencies using version ranges and resolves the range to the specific version being used.
- [versions:set](http://mojo.codehaus.org/versions-maven-plugin/set-mojo.html) can be used to set the project version from the command line.
- [versions:use-releases](http://mojo.codehaus.org/versions-maven-plugin/use-releases-mojo.html) searches the pom for all -SNAPSHOT versions which have been released and replaces them with the corresponding release version.
- [versions:use-next-releases](http://mojo.codehaus.org/versions-maven-plugin/use-next-releases-mojo.html) searches the pom for all non-SNAPSHOT versions which have been a newer release and replaces them with the next release version.
- [versions:use-latest-releases](http://mojo.codehaus.org/versions-maven-plugin/use-latest-releases-mojo.html) searches the pom for all non-SNAPSHOT versions which have been a newer release and replaces them with the latest release version.
- [versions:use-next-snapshots](http://mojo.codehaus.org/versions-maven-plugin/use-next-snapshots-mojo.html) searches the pom for all non-SNAPSHOT versions which have been a newer -SNAPSHOT version and replaces them with the next -SNAPSHOT version.
- [versions:use-latest-snapshots](http://mojo.codehaus.org/versions-maven-plugin/use-latest-snapshots-mojo.html) searches the pom for all non-SNAPSHOT versions which have been a newer -SNAPSHOT version and replaces them with the latest -SNAPSHOT version.
- [versions:use-next-versions](http://mojo.codehaus.org/versions-maven-plugin/use-next-versions-mojo.html) searches the pom for all versions which have been a newer version and replaces them with the next version.
- [versions:use-latest-versions](http://mojo.codehaus.org/versions-maven-plugin/use-latest-versions-mojo.html) searches the pom for all versions which have been a newer version and replaces them with the latest version.
- [versions:commit](http://mojo.codehaus.org/versions-maven-plugin/commit-mojo.html) removes the <tt>pom.xml.versionsBackup</tt> files. Forms one half of the built-in “Poor Man’s SCM”.
- [versions:revert](http://mojo.codehaus.org/versions-maven-plugin/revert-mojo.html) restores the <tt>pom.xml</tt> files from the <tt>pom.xml.versionsBackup</tt> files. Forms one half of the built-in “Poor Man’s SCM”.

The easiest way to live dangerously is to try to update all 3rd parties in one shot by issuing

```bash
mvn versions:use-latest-versions
```

but that’s another story 🙂