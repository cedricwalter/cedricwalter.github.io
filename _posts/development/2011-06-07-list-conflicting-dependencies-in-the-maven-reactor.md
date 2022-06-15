---
id: 6841
title: 'List conflicting dependencies in the Maven reactor'
date: '2011-06-07T19:29:49+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - classpath
    - clear
    - click
    - configuration
    - copy
    - dependencies
    - dependency
    - deployed
    - don
    - downloads
    - feature
    - list
    - listed
---

The [Maven Dependency Plugin](http://maven.apache.org/plugins/maven-dependency-plugin/) among other things include a `dependency:analyze-duplicate`

> The dependency plugin provides the capability to manipulate artifacts. It can copy and/or unpack artifacts from local or remote repositories to a specified location.

This [Apache #Maven](http://maven.apache.org/) plugin is really feature rich and provide a lot of interesting goals:

- [dependency:analyze](http://maven.apache.org/plugins/maven-dependency-plugin/analyze-mojo.html) analyzes the dependencies of this project and determines which are: used and declared; used and undeclared; unused and declared.
- [dependency:analyze-dep-mgt](http://maven.apache.org/plugins/maven-dependency-plugin/analyze-dep-mgt-mojo.html) analyzes your projects dependencies and lists mismatches between resolved dependencies and those listed in your dependencyManagement section.
- [dependency:analyze-only](http://maven.apache.org/plugins/maven-dependency-plugin/analyze-only-mojo.html) is the same as analyze, but is meant to be bound in a pom. It does not fork the build and execute test-compile.
- [dependency:analyze-report](http://maven.apache.org/plugins/maven-dependency-plugin/analyze-report-mojo.html) analyzes the dependencies of this project and produces a report that summarises which are: used and declared; used and undeclared; unused and declared.
- [dependency:analyze-duplicate](http://maven.apache.org/plugins/maven-dependency-plugin/analyze-duplicate-mojo.html) analyzes the *dependencies/* and *dependencyManagement/* tags in the pom.xml and determines the duplicate declared dependencies.
- [dependency:build-classpath](http://maven.apache.org/plugins/maven-dependency-plugin/build-classpath-mojo.html) tells Maven to output the path of the dependencies from the local repository in a classpath format to be used in java -cp. The classpath file may also be attached and installed/deployed along with the main artifact.
- [dependency:copy](http://maven.apache.org/plugins/maven-dependency-plugin/copy-mojo.html) takes a list of artifacts defined in the plugin configuration section and copies them to a specified location, renaming them or stripping the version if desired. This goal can resolve the artifacts from remote repositories if they don’t exist in local.
- [dependency:copy-dependencies](http://maven.apache.org/plugins/maven-dependency-plugin/copy-dependencies-mojo.html) takes the list of project direct dependencies and optionally transitive dependencies and copies them to a specified location, stripping the version if desired. This goal can also be run from the command line.
- [dependency:get](http://maven.apache.org/plugins/maven-dependency-plugin/get-mojo.html) downloads a single artifact transitively from a specified remote repository.
- [dependency:go-offline](http://maven.apache.org/plugins/maven-dependency-plugin/go-offline-mojo.html) tells Maven to resolve everything this project is dependent on (dependencies, plugins, reports) in preparation for going offline.
- [dependency:list](http://maven.apache.org/plugins/maven-dependency-plugin/list-mojo.html) alias for resolve that lists the dependencies for this project.
- [dependency:properties](http://maven.apache.org/plugins/maven-dependency-plugin/properties-mojo.html) set a property for each project dependency containing the to the artifact on the file system.
- [dependency:purge-local-repository](http://maven.apache.org/plugins/maven-dependency-plugin/purge-local-repository-mojo.html) tells Maven to clear all dependency-artifact files out of the local repository, and optionally re-resolve them.
- [dependency:resolve](http://maven.apache.org/plugins/maven-dependency-plugin/resolve-mojo.html) tells Maven to resolve all dependencies and displays the version.
- [dependency:resolve-plugins](http://maven.apache.org/plugins/maven-dependency-plugin/resolve-plugins-mojo.html) Tells Maven to resolve plugins and their dependencies.
- [dependency:sources](http://maven.apache.org/plugins/maven-dependency-plugin/sources-mojo.html) tells Maven to resolve all dependencies and their source attachments, and displays the version.
- [dependency:tree](http://maven.apache.org/plugins/maven-dependency-plugin/tree-mojo.html) displays the dependency tree for this project.
- [dependency:unpack](http://maven.apache.org/plugins/maven-dependency-plugin/unpack-mojo.html) removes the project dependencies from the local repository, and optionally re-resolve them.
- [dependency:unpack-dependencies](http://maven.apache.org/plugins/maven-dependency-plugin/unpack-dependencies-mojo.html) like copy-dependencies but unpacks

It can be use to [make the build failing](http://maven.apache.org/plugins/maven-dependency-plugin/examples/failing-the-build-on-dependency-analysis-warnings.html) (There is [another way to do this using the enforcer plugin](http://www.waltercedric.com/java-j2ee-mainmenu-53/framework-mainmenu-137/apache-maven/1923-break-maven-build-when-there-is-a-dependency-conflict.html) as well)

To detect duplicate dependencies just run against your pom

```bash
mvn org.apache.maven.plugins:maven-dependency-plugin:2.2:analyze-duplicate
```

When you have found the duplicate you can query and analyze why it was included by running

```bash
mvn dependency:tree -Dverbose -Dincludes=:xerces*::
```

or use [M2Eclipse](http://m2eclipse.sonatype.org/) dependencies graph or dependency tree that support highlighting and query with wildcards as well. I like especially this solution because I can right click on any dependencies and select “add exclusions” and let [M2Eclipse](http://m2eclipse.sonatype.org/) modify the pom.xml for me.

[![eclipse_pom-editor-depend-tree](/assets/images/2011/06/eclipse_pom-editor-depend-tree.png "eclipse_pom-editor-depend-tree")](http://www.sonatype.com/books/m2eclipse-book/reference/dependencies-sect-analyze-depend.html)[![eclipse_pom-editor-graph-radial](/assets/images/2011/06/eclipse_pom-editor-graph-radial.png "eclipse_pom-editor-graph-radial")](http://www.sonatype.com/books/m2eclipse-book/reference/dependencies-sect-analyze-depend.html)