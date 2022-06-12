---
id: 3087
title: 'Enterprise grade performances tuning with critical memory constraints (part 2)'
date: '2007-10-19T16:56:18+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3087'

tags:
- java
- Tuning
---

Still not enough, we were forced to profile the java code and make some big
changes…. ([from part 1](content/view/1220/1/))

**Profiling**

You either profile an application for speed and/or memory usage and/or memory leaks. Our application is fast enough at
the moment. Our major concern is optimizing memory usage and thus avoiding disk memory swapping.

**Some words about architecture**

It is not possible to profile any applications without having a deep understanding of the architecture behind. The
Product Catalog is an innovative product which is a meta model for storing insurances product in a database, a Product
is read only and can derivate instance that we call Policies. Policies are users data holder, containing no text, just
values, and sharing a similar structure as the Product. This let the product know everything about (cross) default
values, (cross) validations, multiple texts, attributes order/length/type etc… and thus separate definition (Products)
from implementation (Policies). Products and Policies can be fully described with Bricks, Attributes in a tree manner.

**Reduce the number of object created**

Looking at the code, we have seen that too many Products (17 Products has 15000 objects either
Attributes/Bricks/Texts/Value/ValueRange) were loaded in memory. While this is clearly giving a speed advantage on an
application server, it is simply killing the offline platform with it 1GB RAM (remember memory really free is 500Mb)  
The problem is that Attributes and Brick are using/can use a lot of fields/meta data in the database which translate
into simple java type (String for UUID, and [meta data](http://en.wikipedia.org/wiki/Metadata) keys and values) in
memory. We start looking at the profiler and the 100 MB used by the product cache.  
Reducing this amount of object was the first priority, a lot of them are meta data which are common and spread across
the Product Tree in memory. Since avoiding creation of unneeded object is always recommended, we decide to remove
duplicate element in the tree by singularizing them. This is possible because the product is Read Only and made of
identical meta data keys, meta keys value.

Entropy and cardinality of [meta data](http://en.wikipedia.org/wiki/Metadata)  
An Attribute may have an unlimited number of meta text (among other things),
common [meta data](http://en.wikipedia.org/wiki/Metadata) keys
are long",
and short"
and help" text description in 4 languages (en\_us, fr\_ch,
de\_ch, it\_ch), while this is not a problem in the database, this make the Product object tree size quite huge in the
Product cache (containing Products Value Object). ..Counting some of them in database for example return stunning
result.   
We found 60000 long" texts which translate into 60000 String
text keys and 60000 String text values (worst case scenario since texts values may not be all reusable). Reducing this
number of Objects is done quite easily by not creating new instance
of 
String, 
Decimal, Integer object and returning always the right and same
Object instance. (we keep them in a MAP and return either a new instance or a previously cache one).

Large objects cardinality but a poor entropy  
By running two or three SQL statement and trying to distinguish real distinct values, we found that a lot of
these [meta data](http://en.wikipedia.org/wiki/Metadata) are made of a relative small number of different values. By
just storing a limited number of String like 0"
, 1"
, 2" to
… 99"
, default"
, long"
, short"
, de\_ch", "<span style="font-family: monospace">fr\_ch" we
have reach a cache efficiency and reuse of object instance of 99%  
After that "small" change in the way value objects (VO) are created and connected, a
java String object containing
before de\_ch" and existing 10000 times in memory is now
replaced across all Attributes/Bricks by the same instance!

The gain is simply phenomenal. Memory gain is bigger than 50%.

<span style="font-family: Arial Black">Reducing the number of objects in memory   
Instead of storing thousands of Products Text String in memory,
we decided to allocate them on disk using java reflection API and a Dynamic Proxy.

The idea is to save all String in one or more files on disk,
the position of each text and length being saved in the corresponding Value Object. So basically we gain the space used
by a String in memory at the expense of
a 
long (String position in file relative to start of file) and
an int (length
of String) primitive type

References: [Proxy](http://java.sun.com/j2se/1.4.2/docs/api/java/lang/reflect/Proxy.html) – [InvocationHandler   
](http://java.sun.com/j2se/1.4.2/docs/api/java/lang/reflect/InvocationHandler.html)Resume: Java String disk based
allocation  
Code snippet: soon

<span style="font-family: Arial Black">Use better data structures  
Java has a lot of quality library, commons collections from apache are well known. [Javalution](http://javolution.org/)
is a real time library with real time and reduce garbage collector impact. We have
use [FastTable](http://javolution.org/api/javolution/util/FastTable.html)
and [FastMap](http://javolution.org/api/javolution/util/FastMap.html) where it make sense.

For example the
class [FastTable ](http://javolution.org/api/javolution/util/FastTable.html)
has the following advantages over the widely used `java.util.ArrayList`:

- No large array allocation (for large collections multi-dimensional arrays are employed). The garbage collector is not
  stressed with large chunk of memory to allocate (likely to trigger a full garbage collection due to memory
  fragmentation).
- Support concurrent access/iteration without synchronization if the collection values are not removed/inserted

<span style="font-family: Arial Black">Different caching strategy  
By design the ProductCatalog is able to use many caching strategy. One is named "Nocache" limit number of object in
memory to the bare minimum, and redirect all access to product to database. In a mono user environment, and since
products reside in 4 tables only (so only 4 select to read all data from DB and some VO to rebuild the tree are needed),
the through output is more than enough.  
<span style="font-weight: bold; font-family: Arial Black">  
More to come …

<span style="font-weight: bold; font-family: Arial Black">References

- [Java Performance Tuning ](http://javaperformancetuning.com/)Tips, resources, and monthly newsletter on improving the
  performance of applications.
- [Java Tuning White Paper ](http://java.sun.com/performance/reference/whitepapers/tuning.html)The Java Tuning White
  Paper is the reference for Java Performance Tuning information, techniques and pointers.
- [Tomcat WIKI](http://wiki.apache.org/tomcat/)
- [Apache MyFaces WIKI](http://wiki.apache.org/myfaces/)