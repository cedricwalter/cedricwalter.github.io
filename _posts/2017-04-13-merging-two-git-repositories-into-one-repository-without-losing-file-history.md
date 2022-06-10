---
id: 8617
title: 'Merging Two Git Repositories Into One Repository Without Losing File History'
date: '2017-04-13T10:36:22+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8617'
permalink: /development/merging-two-git-repositories-into-one-repository-without-losing-file-history/
header:
  teaser: /assets/images/2017/04/git-logo.jpg
tags:
    - git
    - HowTo
---

There seems to be a lot of way to merge two #git repositories into one repository without losing file history. Here is another straightforward method.

This method do not use #submodules or #subtree merges. it uses regular merge operations.

1. Create a new empty repository New.
2. Make an initial commit because we need one before we do a merge.
3. Add a remote to old repository A.
4. Merge A/master to New/master.
5. Make a subdirectory folderA.
6. Move all files into subdirectory folderA.
7. Commit all of the file moves.
8. Repeat 3-6 for another repository.

```
 mkdir result cd result git init touch README.MD git add . git commit -m "added readme.md"
```

Step 3 to 6

```
 git remote add -f A https://github.com/A.git git fetch --all git merge --allow-unrelated-histories  A/master mkdir folderA git mv -k * folderA git commit -m “moved A files into subdir folderA”
```