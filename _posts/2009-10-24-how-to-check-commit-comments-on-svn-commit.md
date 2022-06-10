---
id: 4797
title: 'How to check commit comments on SVN Commit'
date: '2009-10-24T00:13:25+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4797'
permalink: /java/how-to-check-commit-comments-on-svn-commit/
header:
  teaser: /assets/images/2009/10/subversion.logo_thumb.png
tags:
    - comments
    - commit
    - create
---

[![subversion.logo](/assets/images/2009/10/subversion.logo_thumb.png "subversion.logo")](/assets/images/2009/10/subversion.logo_.png)

If you are using [Subversion](http://subversion.tigris.org)/CVS, you might have come across the issue where multiple developers working on a set of files are committing without any comments.

Subversion’s [hook scripts](http://svnbook.red-bean.com/en/1.2/svn.reposadmin.create.html#svn.reposadmin.create.hooks) provide a powerful way to associate actions with repository events. For example, the [pre-commit](http://svnbook.red-bean.com/en/1.2/svn.reposadmin.create.html#svn.reposadmin.create.hooks) hook allows you to check — and possibly abort — a transaction before it actually gets committed. I will provide you now two easy Unix bash scripts that avoid bad developer behaviors:

- The first one “checkCommentNotEmpty.sh” is for checking that nobody submit an empty SVN commit comment
- The second one “checkCommentSyntax.sh” is able to enforce SVN commit comment pattern using regular expressions

## Creating and Installing a Hook Script

Your [Subversion](http://subversion.tigris.org) repository already has some template hook scripts. For example, the [pre-commit](http://svnbook.red-bean.com/en/1.2/svn.reposadmin.create.html#svn.reposadmin.create.hooks) template is in `PATH_TO_REPOS/hooks/pre-commit.tmpl`. These templates contain instructions on what the hook script does and what parameters it can expect.

You can hook your own script on the following events

- **start-commit** Before the commit transaction starts
- **pre-commit** After the commit transaction starts but before the transaction is committed
- **post-commit** After the commit transaction completes
- **pre-revprop-change** Before a revision property is changed Repository Path,
- **post-revprop-change:** After a revision property is changed Repository Path
- **pre-lock:** Before the lock being acquired
- **post-lock:** After the lock being acquired

You’ll find examples in the hook directory named

- post-commit.tmpl
- pre-unlock.tmpl
- post-lock.tmpl
- pre-commit.tmpl
- start-commit.tmpl
- post-revprop-change.tmpl
- pre-lock.tmpl
- post-unlock.tmpl
- pre-revprop-change.tmpl

If you cant find them, brute force your server to locate them

\# find / –name pre-commit

or

\# locate pre-commit

On Debian you will find them at

/data/svn-repos/{yourRepository}/hooks

Create a file pre-commit with that content, nothing force you to put a huge bash script in pre-commit. In my example below, I prefer to divide pre-commit checks in multiple files. The `pre-commit` hook gives you a way to catch the transaction before it becomes a revision. [Subversion](http://subversion.tigris.org) passes this hook two parameters:

1. the path to the root of the repository
2. the transaction identifier

```
#!/bin/sh set -e /data/svn-repos/{yourRepository}/hooks/checkCommentNotEmpty.sh "$1" "$2" /data/svn-repos/{yourRepository}/hooks/checkCommentSyntax.sh "$1" "$2"
```

Note that after installation, every commit will run these two scripts. Check your permissions, scripts have to be runnable for the user (www-data on debian)

## Avoid empty comment in SVN commits 

Save this file in /data/svn-repos/{yourRepository}/hooks/checkCommentNotEmpty.sh

```
#!/bin/sh REPOS="$1" TXN="$2" SVNLOOK=/usr/bin/svnlook  if [`$SVNLOOK log -t $TXN $REPOS` != ""]; then   echo "" 1>&2   echo "*** Your commit has been blocked because you did not give any log message or your log message was too short." 1>&2   echo "Please write a log message describing the purpose of your changes and then try committing again." 1>&2   exit 1 else   exit 0 fi
```

# Example in Eclipse, if you break the rule**

[![noEmptySVNCommitComment](/assets/images/2009/10/noEmptySVNCommitComment_thumb.png "noEmptySVNCommitComment")](http://www.waltercedric.com/images/stories/HowtoaddcheckforCommentsonSVNCommit_14916/noEmptySVNCommitComment.png)

## Enforce SVN commit comment pattern using regular expressions

Save this file in /data/svn-repos/{yourRepository}/hooks/checkCommentSyntax.sh

This script use Bash script REGEX capabilities, I check against what could be a typical JIRA issues entry

If any developer try to use a commit statement not starting with for example PRODUCT-xxxx, the commit will be blocked.

```
#!/bin/sh REPOS="$1" TXN="$2" SVNLOOK=/usr/bin/svnlook regex="PRODUCT-[0-9]*"  if [[ `$SVNLOOK log -t $TXN $REPOS` =~ ${regex} ]]; then   exit 0 else   echo "" 1>&2   echo "*** Your commit has been blocked because you give an invalid commit comment" 1>&2   echo "Please make your commit comment start with PRODUCT-XXX" 1>&2  exit 1 fi
```

# Example in Eclipse, if you break the rule**

[![checkSVNCommitCommentWithRegularExpressions](/assets/images/2009/10/checkSVNCommitCommentWithRegularExpressions_thumb.png "checkSVNCommitCommentWithRegularExpressions")](http://www.waltercedric.com/images/stories/HowtoaddcheckforCommentsonSVNCommit_14916/checkSVNCommitCommentWithRegularExpressions.png)

### Want more?

[You can automated code reviews with Checkstyle using pre-commit script and so Stop rule-breaking code before it enters your code base!](http://www.javaworld.com/javaworld/jw-11-2008/jw-11-checkstyle2.html?page=1)

### References

[http://subversion.tigris.org/tools\_contrib.html#hook\_scripts](http://subversion.tigris.org/tools_contrib.html#hook_scripts) List of some Hook scripts examples written in python/bash