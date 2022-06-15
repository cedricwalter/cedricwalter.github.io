---
id: 6708
title: 'How To decompile all classes from a jar'
date: '2011-05-19T20:36:29+02:00'
author: 'Cédric Walter'



tags:
    - bash
    - HowTo
    - java
---

What if you have to decompile a huge jar file (like weblogic.jar) to debug a nasty issue? for a lot of closed source binary the source code is not always available, in this small post I will show you how to automate the de-compilation of java classes with a bit of bash magic.

First you’ll have to get the JAD decompiler if you don’t already have this tool in your development toolbox

```
wget  www.varaneckas.com/sites/default/files/jad/jad158e.linux.static.zip 
unzip jad158e.linux.static.zip 
```

Unpack and decompile all class found in the jar file, replace the file weblogic.jar with any other jar file

```
jar  -xf weblogic.jar && find . -iname "*.class" | xargs /path.to/jad -r 
```

Delete all files \*.class from the current directory recursively

```
find . -type f -name *.class -exec rm {} \;
```

And rename all decompile .jad files to .java

```
find -name *.jad -exec rename 's/\.jad$/\.java/' {} \;
```

You can now repack the whole directory into a zip that you may deploy in your local #maven repository or attached to weblogic.jar as source code in eclipse. I now just have to wish you good luck and happy debugging sessions!