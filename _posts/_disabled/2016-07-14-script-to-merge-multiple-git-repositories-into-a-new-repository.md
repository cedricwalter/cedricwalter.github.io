---
id: 8408
title: 'Script to merge multiple git repositories into a new repository'
date: '2016-07-14T12:36:21+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8408'

header:
  teaser: /assets/images/2016/07/1color-orange-lightbg2x_3.png
tags:
    - git
    - HowTo
    - tutorial
---

There are numerous ways (Submodule, Subtree) to merge multiple #GIT repositories into one new #GIT repository while keeping history.

# submodule** is a better fit for component-based development, where your main project depends on a fixed version of another component (repo). You keep only references in your parent repo (gitlinks, special entries in the index)

# subtree** is more like a system-based development, where your all repo contains everything at once, and you can modify any part.

I’ve tried a lot of them without success till I found this script [https://github.com/eitch/bash\_scripts/blob/master/mergeGitRepositories2.sh](https://github.com/eitch/bash_scripts/blob/master/mergeGitRepositories2.sh "https://github.com/eitch/bash_scripts/blob/master/mergeGitRepositories2.sh")

While still buggy (0.2.0), I did modify it (0.2.1) and tested it to merge more than 10 #GIT repositories into one. The modified script can be downloaded at [https://gist.github.com/cedricwalter/21b34178d552c077f5d2276a242872bb](https://gist.github.com/cedricwalter/21b34178d552c077f5d2276a242872bb "https://gist.github.com/cedricwalter/21b34178d552c077f5d2276a242872bb")

 <script src="https://gist.github.com/cedricwalter/21b34178d552c077f5d2276a242872bb.js"></script>

The new repository will contain a folder for every merged repository

The script adds remotes for every project and then merges in every branch and tag. These are renamed to have the origin project name as a prefix

Usage: mergeGitRepositories.sh <new\_project> <my\_repo\_urls.lst>  
Where

- <new\_project> is the name of the new project to create
- <my\_repo\_urls.lst> is a file contaning the URLs to the respositories which are to be merged on separate lines.