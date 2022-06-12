---
id: 2480
title: 'Monitoring a java 1.5 VM'
date: '2006-04-27T20:23:50+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2480'

tags:
    - java
    - technique
---

Using #Java platform management beans

> The latest release of the #Java&#153; platform includes a number of new system monitoring and management features. In this article, three developers from the IBM #Java Technology Centre team up to get you started using this API. After a quick overview of the `java.lang.management` package, they guide you through a number of short practical scenarios to probe the performance of a running JVM.  
> Among the many new features introduced in version 5.0 of the #Java 2 platform is an API that enables #Java applications and compliant tools to both monitor and manage a #Java virtual machine (JVM) and the native operating system on which it runs. [In this article, you will learn about capabilities of this new platform management API](http://www-128.ibm.com/developerworks/java/library/j-mxbeans/?ca=dgr-lnxw07mgtbeans), which is housed in the `java.lang.management` package. This article gets you quickly up to speed with a new set of powerful features that will become more important in future #Java platform releases.

<script language="JavaScript" type="text/javascript"> &amp;lt;!-- if (document.referrer&amp;amp;&amp;amp;document.referrer!=&amp;quot;&amp;quot;) {     // document.write(document.referrer);    var q = document.referrer;    var engine = q;    var isG = engine.search(/google\.com/i);    var searchTerms;    //var searchTermsForDisplay;    if (isG != -1) {  	   var i = q.search(/q=/); 	   var q2 = q.substring(i+2); 	   var j = q2.search(/&amp;amp;/); 	   j = (j == -1)?q2.length:j; 	   searchTerms = q.substring(i+2,i+2+j); 	   if (searchTerms.length != 0) { 	       searchQuery(searchTerms); 	       document.write(&amp;quot;&amp;lt;div id=\&amp;quot;contents\&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;&amp;quot;); 	   }    }  } //--&amp;gt; </script>