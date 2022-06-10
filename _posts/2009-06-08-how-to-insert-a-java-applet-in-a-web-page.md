---
id: 4385
title: 'How to insert a java applet in a web page'
date: '2009-06-08T10:29:36+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4385'
permalink: /java/how-to-insert-a-java-applet-in-a-web-page/
tags:
    - java
---

[![Valid HTML 4.01 Frameset](http://www.w3.org/Icons/valid-html401)](http://validator.w3.org/check?uri=referer) [![opera](/assets/images/2009/06/opera_thumb.gif "opera")](/assets/images/2009/06/opera.gif) [![safari](/assets/images/2009/06/safari_thumb.gif "safari")](/assets/images/2009/06/safari.gif) [![chrome](/assets/images/2009/06/chrome_thumb.gif "chrome")](/assets/images/2009/06/chrome.gif) [![firefox](/assets/images/2009/06/firefox_thumb.gif "firefox")](/assets/images/2009/06/firefox.gif) [![ie](/assets/images/2009/06/ie_thumb.gif "ie")](/assets/images/2009/06/ie.gif)

I did learn a lot today while trying to validating my new sub domain: [http://websitesasgraphs.waltercedric.com/](http://websitesasgraphs.waltercedric.com/ "Display web page as 2D graphs") I found a huge number of examples using the tag <applet> which has been deprecated and create errors and warning in W3C validation engine. But no example using the the new HTML <object> tag. Hence I decide to publish this small post.

The following page are now XHTM 1.0

- [display.php](http://websitesasgraphs.waltercedric.com/display.php?url=http://www.waltercedric.com) ([validation Link](http://validator.w3.org/check?verbose=1&uri=http%3A%2F%2Fwebsitesasgraphs.waltercedric.com%2Fdisplay.php%3Furl%3Dhttp%3A%2F%2Fwww.google.de)) XHTML 1.0 Strict
- [menu.html](http://websitesasgraphs.waltercedric.com/menu.html) ([validation link](http://validator.w3.org/check?uri=http%3A%2F%2Fwebsitesasgraphs.waltercedric.com%2Fmenu.html&charset=(detect+automatically)&doctype=Inline&group=0&verbose=1&user-agent=W3C_Validator%2F1.654 "validation link")) XHTML 1.0 Transitional

While this one is

- [index.html](http://websitesasgraphs.waltercedric.com/index.html) ([validation link](http://validator.w3.org/check?uri=http%3A%2F%2Fwebsitesasgraphs.waltercedric.com%2F&charset=(detect+automatically)&doctype=Inline&group=0&verbose=1&user-agent=W3C_Validator%2F1.654)) HTML 4.01 Frameset

Here is the code to insert a java applet into an XHTML 1.0 Strict web page

<style type="text/css">       .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>```
<a href="http://websitesasgraphs.waltercedric.com/display.php?url=http://www.waltercedric.com" rel="noopener noreferrer" target="_blank"><img alt="www.waltercedric.as.graph_thumb" border="0" class=" size-full wp-image-4384" height="240" loading="lazy" src="/assets/images/2009/06/www.waltercedric.as_.graph_thumb.png" style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="www.waltercedric.as.graph_thumb" width="213"></img></a> 
```

The source code websiteasgraph.v01.00.00.zip has been changed and is available here: <a href="http://www.waltercedric.com/downloads/doc_details/96-website-as-graph.html">Download now</a>

### References

- HTML tag <object> <http://www.w3.org/TR/REC-html40/struct/objects.html#edef-OBJECT>
- [http://www.w3schools.com/tags/tag\_doctype.asp](http://www.w3schools.com/tags/tag_doctype.asp)
- Character encoding [Character sets &amp; encodings in XHTML, HTML and CSS](<Character sets & encodings in XHTML, HTML and CSS>)
- Insert Flash <http://www.alistapart.com/articles/flashsatay>

By the way, I discover huge issues in IE8, less in IE7 with my homepage, none in Opera or Firefox. And since my homepage is currently not valid, I will correct everything to make it XHTML 1.0 compliant today.