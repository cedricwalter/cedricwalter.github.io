---

title: 'Technology management using artifact life cycles'
date: '2010-08-28T16:23:51+02:00'
author: 'Cédric Walter'



header:
teaser: /assets/images/2010/08/mavenlogo2_thumb.gif
tags:
- corresponding
- directory
- group
- maven
- technology
---

![](/assets/images/2010/08/mavenlogo2_thumb.gif)

I forgot to blog about this presentation at JAZOON 2008, but I did never forget the added value of this plugin. It is
not currently in Apache #Maven core but will for sure find its way as an official plugin one day, since it solve
elegantly a common problem: **technology management**

> Maven does not know the concept of an artifact life cycle. Such life cycle status information would allow to extend
> the dependency management in a new dimension. One could declare whether certain dependencies are actually
> allowed/forbidden/restricted to be used in a project, enabling effective technology management.

Currently a plugin is available to achieve this goal:The [AssertDepend plugin](http://madp.sourceforge.net/index.html).
It work by adding metadata, additional xml files in artifact group directory.

The [AssertDepend plugin](http://madp.sourceforge.net/index.html) is a #Maven extension to perform effective technology
management. The plugin checks at build time against lifecycle states defined in metadata on remote repositories in order
to inform the developer about inappropriate technology usage (dependency enforcement). Based on a flag the build would
either fail or print a warning.

- - - - - -

### Technology management benefits and means

> The capability to manage dependencies and technologies on a mature level is essential for software organizations of a
> certain size. Technology management becomes a key discipline and must be introduced in a careful way to allow for mutual
> benefits among its stakeholder including developer, management, and customers.

### Artifact lifecycle management

To perform effective technology management, you should keep the number of approved artifacts as small as possible. You
cannot remove artifacts from the repository if you want to sustain reproducible builds. Therefore, each artifact in the
repository should be marked with a corresponding lifecycle state.

The proposed main states are (but the plugin is not limited, you can create your own)

- approved
- prohibited
- investigating

With these states, it solve elegantly the following use cases.

# Scenario 1: Flawed versions**

It turns out that <tt>my-app-1.4.2.jar</tt> contains a serious security issue and is therefore flawed. Clients of this
JAR should actually switch to a newer version <tt>my-app-1.4.3.jar</tt> which fixes the bug and which is safe to use.

# Scenario 2: Decommissioning**

Let’s assume that <tt>my-app-1.4.2.jar</tt> is not supported anymore and projects should actually switch to a new
release stream   
<tt>(my-app-2.x.y.jar)</tt>.

# Scenario 3: Restricted usage**

Consider a library which has a restricted set of client projects, e.g. only certain projects are allowed to depend on a
specific artifact.

## Usage

Artifact lifecycle metadata must be placed in a file named <tt>maven-artifact-lifecycle.xml</tt> in the corresponding
group directory. For instance, if you want to define lifecycle information for struts, the corresponding metadata file
is located here: <tt>struts/struts/maven-artifact-lifecycle.xml</tt>

This plugin can be downloaded at <http://madp.sourceforge.net/index.html>