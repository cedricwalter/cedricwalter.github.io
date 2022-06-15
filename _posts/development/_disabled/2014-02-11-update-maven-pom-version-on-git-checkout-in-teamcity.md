---

title: 'Update Maven pom version on GIT checkout in TeamCity'
date: '2014-02-11T21:45:43+01:00'
author: 'Cédric Walter'



header:
teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
- about
- apache
- atlassian
- bash
- bugs
- changing
- client
- code
- commit
- create
- current
- custom
- default
- development
- enjoy
- git
- HowTo
- java
- linux
- maven
- teamcity
- tutorial
---

Here is a solution to the following problems

- Deriving #Maven artifact version from #GIT branch,
- Update pom version on #GIT checkout automatically,
- Add the ability to use Pull request with [Apache #Maven](<http://Apache #Maven>).

You have a workflow requirement that require you to have the artifact version of a module externally defined from the
current branch in #GIT.

For example

You want to start working on a new feature branch “feature-memory-improvement”, so you branch from master a new branch
named feature/feature-memory-improvement

Having unique snapshot is a something you need to share your code using a #Maven repository, so you may want to have
into the branch all pom.xml version changed to

```bash
<version>FEATURE-MEMORY-IMPROVEMENT-SNAPHOTS</version>
```

changing all your pom.xml and doing a technical commit will create merge conflicts when using pull request!

One solution, while not perfect is to do the following: You can add a separate execution to run a goal which will change
the version of the POM automatically in the #Maven reactor. This small script will do it¨

Create a [TeamCity](http://www.jetbrains.com/teamcity/) **Command line Build Step** with a custom script (Linux Bash)

```bash
echo 'Change the version in pom.xml files...' branch=$(git rev-parse --abbrev-ref HEAD)  
version="$branch-SNAPSHOT"

# OPTIONAL: filter out any eventual Branch prefixes
# e.g. /bugfix /feature /release  version="$(echo $version | sed 's/bugfix\///g')" version="$(echo $version | sed 's/feature \///g')" 
version="$(echo $version | sed 's/release \///g')"

# OPTIONAL: make pom version all uppercase
version="${version^^}"  mvn versions:set -DgenerateBackupPoms=false -DnewVersion="$version" echo 'Changed version in pom.xml files to ${version}' exit 0
```

## What is changing?

You do not have anymore to make pom version unique in your feature branch and commit pom version as they will change on
the fly according to the branch name. You can now enjoy pull request
in [Atlassian Stash](https://www.atlassian.com/software/stash)
or [GitHub Enterprise](https://enterprise.github.com/ "GitHub social coding Git repositories").

pom.xml all stay to MASTER-SNAPSHOT in all branches

Soon I will show you hot to do this using a server side [GIT](http://git-scm.com/) hook
in [Atlassian Stash](https://www.atlassian.com/software/stash) and with a client side [GIT](http://git-scm.com/) hook.

## Note about Branch prefixes

Use the prefixes below as part of your branch names to categorize them and take advantage of automatic branching
workflows

These are the conventions I am using, Atlassian Bitbucket propose them as default

- bugfix/ Typically used for fixing bugs against a release branch
- feature/ Used for specific feature work. Typically, this branches from and merges back into the development branch
- hotfix/ Typically used to quickly fix the production branch
- release/ Used for release tasks and long-term maintenance. Typically, this branches from the development branch and
  changes are merged back into the development branch

Thanks to these articles for the idea.

- [Deriving maven artifact version from git branch](http://stackoverflow.com/questions/13583953/deriving-maven-artifact-version-from-git-branch)
- [How can I update Pom.xml files automatically with Git?](http://stackoverflow.com/questions/17172037/how-can-i-update-pom-xml-files-automatically-with-git)