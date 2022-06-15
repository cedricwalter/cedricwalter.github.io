---
id: 8624
title: git-branch-renamer-maven-plugin
date: '2017-05-18T12:31:49+02:00'
author: 'Cédric Walter'



header:
teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
- cedricwalter
- changing
- continuous
- create
- default
- example
- feature
- first
- git
- github
- idea
- integration
- java
- master
- maven
- may
- plugin
- project
- projects
- read
- release
---

![](/assets/images/2017/05/apache_maven_thumb.png)

When working with many feature/release/bugix/hotfix branches, it is a bad idea to start changing the pom version as this
will create merge conflicts using pull request. this plugin allow you to keep in ALL branches the same pom version for
all your projects, for example MASTER-SNAPSHOT the version will be derived from branch name automagically 🙂

You may want to read more first these 2 short articles

- [Update Maven pom version on GIT checkout in TeamCity](https://waltercedric.com/new/?p=8193)
- [maven-release-plugin with GIT](https://waltercedric.com/new/?p=8240)

git-branch-renamer-maven-plugin allow you to keep in ALL branches the same pom version for all your projects: for
example `MASTER-SNAPSHOT` and never change it again.

the project version will be derived from branch name automatically when running in your continuous integration server.

branch name `feature/xxxx`

- `<version>xxxx-SNAPSHOT</version>` (default)
- `<version>xxxx</version>` (release = true)
- `<version>0-xxxx-SNAPSHOT</version>` (forceNumericalVersion = true)
- `<version>feature-xxxx-SNAPSHOT</version>` (filterOutBranchQualifier = false)

The project is hosted at Github <https://github.com/cedricwalter/git-branch-renamer-maven-plugin>