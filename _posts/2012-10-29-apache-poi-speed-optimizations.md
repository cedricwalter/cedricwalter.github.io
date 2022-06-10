---
id: 7825
title: 'Apache POI Speed Optimizations'
date: '2012-10-29T23:39:21+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7825'
permalink: /java/apache-poi-speed-optimizations/
image: /wp-content/uploads/2012/10/apache-poi-logo_thumb.jpg
tags:
    - java
---

[![apache-poi-logo](/assets/images/2012/10/apache-poi-logo_thumb.jpg "apache-poi-logo")](/assets/images/2012/10/apache-poi-logo.jpg) The [Apache POI](http://poi.apache.org/ "Apache POI") Project’s mission is to create and maintain #Java APIs for manipulating various file formats based upon the Office Open XML standards (OOXML) and Microsoft’s OLE 2 Compound Document format (OLE2). In short, you can read and write MS Excel files using #Java. In addition, you can read and write MS Word and MS PowerPoint files using #Java. [Apache POI](http://poi.apache.org/ "Apache POI") is your #Java Excel solution (for Excel 97-2008). We have a complete API for porting other OOXML and OLE2 formats and welcome others to participate.

## Switch Off logging 

From the documentation at <http://poi.apache.org/utils/logging.html>

Logging in POI is used only as a debugging mechanism, not a normal runtime logging system. Logging is ONLY for autopsie type debugging, and should NEVER be enabled on a production system. Enabling logging will reduce performance by at least a factor of 100. If you are not developing POI or trying to debug why POI isn’t reading a file correctly, then DO NOT enable logging. You’ve been warned.

In order to effectively disable the logging functionality in [Apache POI](http://poi.apache.org/) you must use an alternative logger. This is accomplished by providing a property to the `POILogFactory` to override the default logger. You can add one of these –D to your JVM settings

```
-Dorg.apache.poi.util.POILogger=org.apache.poi.util.NullLogger
```

```
-Dorg.apache.poi.util.POILogger=org.apache.commons.logging.impl.NoOpLog
```

I found Apache POI to slightly better perform with the NoOpLog of apache common!

## Recompile poi with more adapted settings

You can create a custom build of Apache POI 3.8 and alter the following properties to better match the size of the excel files you are generating or reading:

11. org.apache.poi.hssf.usermodel.HSSFRow#INITIAL\_CAPACITY=5;
12. org.apache.poi.hssf.usermodel.HSSFSheet#INITIAL\_CAPACITY= 20; // used for compile-time optimization. This is the initial size for the collection of rows. It is currently set to 20. If you generate larger sheets you may benefit by setting this to a higher number and recompiling a custom edition of HSSFSheet.
13. org.apache.poi.hssf.usermodel.HSSFWorkbook#INITIAL\_CAPACITY=3; // used for compile-time performance/memory optimization. This determines the initial capacity for the sheet collection. Its currently set to 3.Changing it in this release will decrease performance since you’re never allowed to have more or less than three sheets!
[http://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFWorkbook.html#INITIAL\_CAPACITY](http://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFWorkbook.html#INITIAL_CAPACITY)

## Don’t use xlsx, prefer xls!

This will only work if you do not reach xls limitations which may avoid you to go to that extreme solution. XLS is not compressed (XLSX is xml based and compressed) and your workbook may double size in memory as a result!

For example, data beyond 256 (IV) columns by 65,536 rows will not be saved in xls! In Excel 2010 and Excel 2007, the worksheet size is 16,384 columns by 1,048,576 rows, but the worksheet size of Excel 97-2003 is only 256 columns by 65,536 rows. Data in cells outside of this column and row limit is lost in Excel 97-2003. But there is [a lot more limitations listed at office.com](http://office.microsoft.com/en-us/excel-help/worksheet-compatibility-issues-HA010172659.aspx "Worksheet compatibility issues")…

The biggest side effect was that my excel file went from 354kb to 967kb, but the speed increase was quite interesting: more than 44% less evaluation time.

## Small localized optimization

I don’t think these bring a lot of speed, JIT should optimize this bad piece of code for us but it is always worth trying [Speeding up org.apache.poi.hssf.usermodel.HSSFRow.compareTo](http://affy.blogspot.ch/2004/04/poi-optimization-speeding-_108265938673224937.html)() and [http://affy.blogspot.ch/2004/04/poi-optimization-speeding-\_108265938673224937.html](http://affy.blogspot.ch/2004/04/poi-optimization-speeding-_108265938673224937.html)