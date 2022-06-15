---

title: 'Display the short GIT version hash as build identifier in TeamCity'
date: '2014-02-02T19:32:01+01:00'
author: 'Cédric Walter'



header:
teaser: /assets/images/2017/04/git-logo.jpg
tags:
- ci/cd
- git
- HowTo
- java
- teamcity
- tutorial
---

[TeamCity](http://www.jetbrains.com/teamcity/) is a Continuous integration and build management server
from [JetBrains](http://www.jetbrains.com/).

As the first build step, create a custom script that reads `%build.number%`, and
uses [service messages](http://confluence.jetbrains.net/display/TCD7/Build+Script+Interaction+with+TeamCity#BuildScriptInteractionwithTeamCity-ReportingBuildNumber)
to append the short [GIT](http://git-scm.com/) hash programmatically.

[![image](/assets/images/2014/02/image_thumb.png "image")](/assets/images/2013/09/image.png)

Here’s an example using a bash script pasted right into the [TeamCity](http://www.jetbrains.com/teamcity/) GUI (*Runner
type: Command Line, Run: Custom Script*):

```bash
GIT_HASH=%build.vcs.number% GIT_HASH_SHORT=${GIT_HASH:0:7} echo "##teamcity[buildNumber '#${GIT_HASH_SHORT}']"
```