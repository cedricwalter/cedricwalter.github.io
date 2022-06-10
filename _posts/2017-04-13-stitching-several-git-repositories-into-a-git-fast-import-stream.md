---
id: 8616
title: 'Stitching several git repositories into a git fast-import stream'
date: '2017-04-13T09:56:22+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8616'
permalink: /development/stitching-several-git-repositories-into-a-git-fast-import-stream/
image: /wp-content/uploads/2017/04/git-logo.jpg
tags:
    - git
    - HowTo
    - tutorial
---

![](/assets/images/2017/04/git-logo.jpg)

### git-stitch-repo

Stitch several git repositories (merging git repository) into a git fast-import stream from [Git-FastExport](https://metacpan.org/pod/distribution/Git-FastExport/script/git-stitch-repo)

### Installation

```
$ perl -MCPAN -e shell    cpan[6]> i /fastexport/ 	Distribution    BOOK/Git-FastExport-0.107.tar.gz 	Module  < Git::FastExport        (BOOK/Git-FastExport-0.107.tar.gz) 	Module  < Git::FastExport::Block (BOOK/Git-FastExport-0.107.tar.gz) 	Module  < Git::FastExport::Stitch (BOOK/Git-FastExport-0.107.tar.gz) 	4 items found  cpan[6]> install BOOK/Git-FastExport-0.107.tar.gz  cpan[6]> CTRL-D
```

### Usage

git-stitch-repo will process the output of git fast-export –all –date-order on the git repositories given on the command-line, and create a stream suitable for git fast-import that will create a new repository containing all the commits in a new commit tree that respects the history of all the source repositories. Typical usage is like this:

```
 git clone https://github.com/xxxx/A.git git clone https://github.com/xxxxx/B.git  $ ls A B  mkdir result cd result git init git-stitch-repo ../A:folderA ../B:folderB | git fast-import  # pull both repository in a new branch for examples git checkout -b newBranch git pull . master-A git pull . master-B  # when finished delete unused branches git branch -d master-A  git branch -d master-B
```