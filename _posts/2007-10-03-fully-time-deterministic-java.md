---
id: 3073
title: 'Fully Time Deterministic Java'
date: '2007-10-03T20:54:23+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3073'
permalink: /java/fully-time-deterministic-java/
image: /wp-content/uploads/2020/03/java.jpg
tags:
    - algorithms
    - capabilities
    - code
    - computing
    - configurable
    - configuration
    - copy
    - copyright
    - cost
    - distribute
    - don
    - expensive
    - extension
    - first
    - framework
    - java
---

<span style="font-size: 10pt"><span style="font-family: Arial">The<span style="font-size: 10pt; font-family: Arial"> AIAA (American Institute of Aeronautics and Astronautics) [paper](http://javolution.org/doc/AIAA-2007-6184.pdf) \[.pdf\] plan to use java (<span style="font-size: 10pt; font-family: Arial">For cost reasons<span style="font-size: 10pt; font-family: Arial">) <span style="font-size: 10pt; font-family: Arial">for safety-critical missions<span style="font-size: 10pt; font-family: Arial">. <span style="font-size: 10pt; font-family: Arial">The first fully time-deterministic and open-source library for #Java: [Javolution](http://javolution.org/) is ready to fight!  


# *Javolution*** real-time goals are simple: **To make your application faster and more time predictable!**  
That being accomplished through:

- High [performance](http://javolution.org/doc/benchmark.html) and time-deterministic (real-time) [util](http://javolution.org/api/javolution/util/package-summary.html#package_description) / [lang](http://javolution.org/api/javolution/lang/package-summary.html#package_description) / [text](http://javolution.org/api/javolution/text/package-summary.html#package_description) / [io](http://javolution.org/api/javolution/io/package-summary.html#package_description) / [xml](http://javolution.org/api/javolution/xml/stream/package-summary.html#package_description) base classes.
- [Context](http://javolution.org/api/javolution/context/package-summary.html#package_description) programming in order to achieve true separation of concerns (logging, performance, etc).
- A [testing](http://javolution.org/api/javolution/testing/package-summary.html#package_description) framework addressing not only unit tests but also performance and regression tests as well.
- Straightforward and low-level parallel computing capabilities with [ConcurrentContext](http://javolution.org/api/javolution/context/ConcurrentContext.html).
- [Struct](http://javolution.org/api/javolution/io/Struct.html) and [Union](http://javolution.org/api/javolution/io/Union.html) base classes for direct interfacing with native applications (e.g. C/C++).
- World’s fastest and first hard real-time [XML marshalling/unmarshalling](http://javolution.org/api/javolution/xml/package-summary.html#package_description) facility.
- Simple yet flexible [configuration](http://javolution.org/api/javolution/lang/Configurable.html) management of your application.

 **Top 10 Reason to make a try:**

1. ***Javolution*** classes are simple to use, even simpler than most JDK classes. You don’t need to guess the capacity of a [TextBuilder](http://javolution.org/api/javolution/text/TextBuilder.html), [FastTable](http://javolution.org/api/javolution/util/FastTable.html) or a [FastMap](http://javolution.org/api/javolution/util/FastMap.html), their size expand gently without ever incurring expensive resize/copy or rehash operations (unlike `StringBuilder`, `ArrayList` or `HashMap`).
2. Developers may achieve true separation of concerns (e.g. logging, configuration) through [Context Programming](http://javolution.org/api/javolution/context/package-summary.html#package_description) or by using classes such as [Configurable](http://javolution.org/api/javolution/lang/Configurable.html).
3. ***Javolution*** classes are fast, very fast (e.g. [Text](http://javolution.org/api/javolution/text/Text.html) insertion/deletion in `O[Log(n)]` instead of `O[n]` for standard `StringBuffer/StringBuilder`).
4. All ***Javolution*** classes are **hard real-time compliant** and have highly deterministic behavior (in the microsecond range). Furthermore (unlike the standard library), ***Javolution*** is [RTSJ](http://www.rtsj.org/) safe (no memory clash or memory leak when used with #Java Real-Time extension).
5. ***Javolution*** makes it easy for [concurrent algorithms](http://javolution.org/api/javolution/context/ConcurrentContext.html) to take advantage of multi-processors systems.
6. ***Javolution***‘s real-time collection classes ([map](http://javolution.org/api/javolution/util/FastMap.html), [list](http://javolution.org/api/javolution/util/FastList.html), [table](http://javolution.org/api/javolution/util/FastTable.html) and [set](http://javolution.org/api/javolution/util/FastSet.html)) can be used in place of most standard collection classes and provide numerous additional [capabilities](http://javolution.org/api/javolution/util/package-summary.html#package_description).
7. Any #Java class can be serialized/deserialized in [XML format](http://javolution.org/api/javolution/xml/XMLFormat.html) **in any form you may want**, also no need to implement Serializable or for the platform to support serialization
8. ***Javolution*** provides [Struct](http://javolution.org/api/javolution/io/Struct.html) and [Union](http://javolution.org/api/javolution/io/Union.html) classes for direct interoperability with C/C++ applications.
9. ***Javolution*** runs on **any platform** from the simplest J2ME CLDC 1.0 with no garbage collector to the latest J2EE 5.0 with parameterized types.
10. ***Javolution*** is a pure Java Solution (no native code), small (less than 300 KBytes jar file) and free; permission to use, copy, modify, and distribute this software is freely granted, provided that copyright notices are preserved ([BSD License](http://javolution.org/doc/license.txt)).