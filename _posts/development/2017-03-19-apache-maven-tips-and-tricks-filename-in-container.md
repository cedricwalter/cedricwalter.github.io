---

title: 'Apache Maven tips and tricks: war plugin vs assembly plugin'
date: '2017-03-19T08:51:50+01:00'
author: 'Cédric Walter'

header:
overlay_image: /assets/images/2011/11/maven-logo-black-on-white-1.png
teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
caption: "git-branch-renamer-maven-plugin"
tags:
- apache
- code
- dependencies
- dependency
- extension
- group
- jar
- java
- last
- least
- look
- maven
- multiple
- one
- only
- plugin
---

When in #apache #maven you have multiple dependencies with the same artifact id but different group id

```xml

<dependencies>
    <dependency>
        <artifactId>any</artifactId>
        <groupId>groupId1</groupId>
        <version>1.1</version>
    </dependency>
    <dependency>
        <artifactId>any</artifactId>
        <groupId>groupId2</groupId>
        <version>1.2</version>
    </dependency>
    <dependency>
        <artifactId>any</artifactId>
        <groupId>groupId3</groupId>
        <version>1.3</version>
    </dependency>
</dependencies>
```

So it’ll look like this in WEB-INF/lib

```bash
-rw------- 1 user grp  135851 Aug 24 12:21 grp1-any-1.1.jar  
-rw------- 1 user grp 1406696 Sep 18 11:51 grp2-any-1.2.jar  
-rw------- 1 user grp   88873 Aug 19 13:58 grp3-any-1.3.jar 
```

Apache #maven war plugin is able to detect this case and will automatically add the groupId to resolve filename
conflicts. If it would not do that the last one name any.jar would win

In #Maven Assembly this will not occur, and the last file name will be the only one available. There is at least two way
to solve this issue:

1. Use unique groupid and artifactid name: something you can do across your module code, it can be done if these
   dependencies are real 3rd party librairies
2. Use the outputFileNameMapping in assembly

```bash
<outputFileNameMapping>${artifact.groupId}-${artifact.artifactId}-${artifact.baseVersion}${dashClassifier?}.${artifact.extension}</outputFileNameMapping> 
```

```bash
${artifact.artifactId}-${artifact.baseVersion}.${artifact.extension}
```

Another use case for outputFileNameMapping is when you want to remove the timestamp from filename but keep the version
in assembly dependencySet