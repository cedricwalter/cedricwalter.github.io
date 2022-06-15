---
id: 4593
title: 'Maven dependencies graph plugin in TeamCity and Eclipse'
date: '2009-08-27T19:27:39+02:00'
author: 'Cédric Walter'



tags:
    - apache
    - ci/cd
    - HowTo
    - maven
    - tutorial
---

How to add dependencies graph to multi module projects. With this #Maven plugin, you’ll be able to visualize #Maven modules interdependencies and dependencies in [any scope (compile, text, provided, system, runtime)](http://maven.apache.org/

[depgraph:depgraph](http://el4j.sourceforge.net/plugins/maven-depgraph-plugin/index.html) Can be used to draw a dependency graph from the project, the mojo is executed in. It traverses all dependencies and creates a graph using Graphviz. It draws a dependency graph just for your project. For a simple POM with no sub modules, it draws a graph of all dependencies (including transitive ones) below it. For a POM with sub modules, goes into each leaf POM and generates a separate graph for it.

Here is an example of output on the plugin itself

[![depgraph](/assets/images/2009/08/depgraph_thumb.png)](/assets/images/2009/08/depgraph.png)## Install in all TeamCity Agent Graphwiz

> [Graphviz](http://www.graphviz.org/) is an open source graph visualization software. It has several main graph layout programs. See the [gallery](http://www.graphviz.org/Gallery.php) for some sample layouts. It also has web and interactive graphical interfaces, and auxiliary tools, libraries, and language bindings.

Chance is that you are using Linux, so install is very easy and just a few click away for OpenSuse

```
# zypper in graphwiz   
```

or for Debian

```
# apt-get install graphwiz
```

In windows use the binary installer and put the graphwiz/bin in your PATH environment variable!

## Configure your POM

Ideally put this in your parent pom inside the <build> </build> tag

```
<plugin>
    <groupId>ch.elca.el4j.maven.plugins</groupId>
    <artifactId>maven-depgraph-plugin</artifactId>
    <version>1.7</version>
</plugin>
```

More configuration settings [can be found HERE](http://el4j.sourceforge.net/plugins/maven-depgraph-plugin/depgraph-mojo.html), now add either a new plugin repository location in your pom.xml (see below) or better in your [artifactory proxy](http://www.jfrog.org/products.php)

```
<pluginRepository>
    <id>elca-services</id>
    <url>http://el4.elca-services.ch/el4j/maven2repository</url>
    <releases>
        <enabled>true</enabled>
    </releases>
</pluginRepository>
```

## Configure Teamcity build

Add in the Maven runner of every TeamCity Build

![addDependenciesGraphGoalsInBuild](/assets/images/2009/08/addDependenciesGraphGoalsInBuild.png)### Maven goals

- **depgraph:depgraph** Can be used to draw a dependency graph from the project, the mojo is executed in. It traverses all dependencies and creates a graph using Graphviz. It draws a dependency graph just for your project. For a simple POM with no submodules, it draws a graph of all dependencies (including transitive ones) below it. For a POM with submodules, goes into each leaf POM and generates a separate graph for it.
- **depgraph:fullgraph** Can be used to draw a dependency graph from the project, the mojo is executed in. It traverses all dependencies and creates a graph using Graphviz. It draws a graph for all the modules as they are interconnected. Same as depgraph for a simple POM, but for a POM with submodules, generates a combined dependency graph incorporating all modules.

You may also want to let developer look at modules dependencies graph in TeamCity, so you may want to add to artifact path \*\*/site/images/\*.png => dependenciesGraph

> Artifacts are files produced by a build. After finishing a build, TeamCity searches for artifacts in the build’s [checkout directory](http://www.jetbrains.net/confluence/display/TCD4/Build+Checkout+Directory) according to the specified artifact patterns. Matching files are then uploaded to the server, where they become available for download. [More ..](http://www.jetbrains.net/confluence/display/TCD4/Build+Artifact)

![artifactPath](/assets/images/2009/08/artifactPath.png)## Configure Eclipse

Install [Graphviz](http://www.graphviz.org/) and don’t forget to have it in PATH.

You can share an eclipse Maven launcher in your parent project, right click on your pom.xml and select run as Maven configuration, specify either **depgraph:fullgraph** or **depgraph:depgraph** as goals