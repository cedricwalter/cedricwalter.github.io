---

title: 'Get more speed with your MAVEN2 build'
date: '2008-08-13T19:17:51+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - console
    - core
    - crash
    - day
    - default
    - don
    - Download
    - eclipse
    - environment
    - errors
    - exe
    - java
    - maven
    - performance
    - Tuning
---

We had serious performance problems with MAVEN in our environment. It seems to be a recurrent problem  
for MAVEN… anyway I did came through the following changes…the 2.0.9.db1 #Maven2 patch make really  
Maven fly!

### General settings to speed up #Maven:

- More memory for #Maven process, change the launcher of eclipse to set MAVEN\_OPTS like this:  
    -DMAVEN\_OPTS=”-Xms64m –Xmx128m”
- Use the latest version of #Maven, but **be careful of regressions**! the latest as for today is 2.0.9
- There is a patch available for #Maven 2.0.9, which speed up build by 40%. It is just simply day and  
    night! try it, you’ll love it! Basically Don Brown alter MAVEN2 2.0.9 to 
    - use HTTP connection pooling !
    - use HTTP timeouts !
    - Download artifacts in parallel !  
        download and read how this was done at  
        [http://www.jroller.com/mrdon/entry/making\_maven\_2\_not\_suck](http://www.jroller.com/mrdon/entry/making_maven_2_not_suck)  
        and his jar here <http://people.apache.org/~mrdon/maven-2.0.9-SNAPSHOT-uber.jar>

### General settings to speed up #Eclipse:

1. Use javaw.exe to start eclipse and not java.exe (more for console base program with a lot of feedback),  
    while javaw.exe is more for graphical environment.
2. Aggressive JIT and double core processors should use:  
    -XX:-UseParallelGC -XX:+AggressiveOpts -XX:-UseConcMarkSweepGC -XX:+UseFastAccessorMethods 
3. Give more memory, MORE MEMORY for eclipse, on a 4GB machine, these are my settings:  
    -Xms768m -Xmx1024m -XX:MaxPermSize=256m 
4. Reduce the number of warning reported by eclipse per compilation unit (class), default is 100, reduce it to 10.  
    It help nobody to see a workspace slowing down because of too many warning logging.  
    Remove the warnings instead 😉
5. SVN console with subversive is too verbose as default, go to eclipse preferences – Team – SVN – Console.  
    Logging SVN errors should be enough.
6. Use a Defragmenter! NTFS fragment fast with so many small files in workspace, every 2 week is a good practice.
7. I am using [Java 1.6u10 (BETA!)](http://java.sun.com/developer/technicalArticles/javase/java6u10/index.html) and have experience no crash till now,  
    being on the edge can be costly in time through. #Maven forking should benefit from the reduce java kernel  
    size and bootstrap time