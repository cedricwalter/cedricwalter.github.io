---
id: 4098
title: 'Adding Google Analytics To MediaWiki'
date: '2009-02-06T23:48:43+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4098'

header:
  teaser: /assets/images/2009/02/MediaWikilogo_thumb.png
tags:
    - google
---

[![MediaWiki-logo](/assets/images/2009/02/MediaWikilogo_thumb.png)](/assets/images/2009/02/MediaWikilogo.png) I search and search on how to add a Google analytics to MediaWiki, seems pretty damn simple as long as you know which templates you are using as default.

The current skins is configured in LocalSettings.php

```
## Default skin: you can change the <span class="kwrd">default skin. Use the <span class="kwrd">internal symbolic ## names, ie <span class="str">'standard', <span class="str">'nostalgia', <span class="str">'cologneblue', <span class="str">'monobook': $wgDefaultSkin = <span class="str">'monobook';
```

<style type="text/css">  .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>Head to {mediawiki\_root}/skins and edit the right skins, for me it is MonoBook.php

Just add your analytics scripts before the </body>. Now MediaWiki will add the marker in every page

# Before**

```
<?php $<span class="kwrd">this->html(<span class="str">'bottomscripts'); <span class="rem">/* JS call to runBodyOnloadHook */ ?> <?php $<span class="kwrd">this->html(<span class="str">'reporttime') ?> <?php <span class="kwrd">if ( $<span class="kwrd">this->data[<span class="str">'debug'] ): ?> <!-- Debug output: <?php $<span class="kwrd">this->text( <span class="str">'debug' ); ?> --> <?php endif; ?> </body></html>
```

# After**

```
<?php $<span class="kwrd">this->html(<span class="str">'bottomscripts'); <span class="rem">/* JS call to runBodyOnloadHook */ ?> <?php $<span class="kwrd">this->html(<span class="str">'reporttime') ?> <?php <span class="kwrd">if ( $<span class="kwrd">this->data[<span class="str">'debug'] ): ?> <!-- Debug output: <?php $<span class="kwrd">this->text( <span class="str">'debug' ); ?> --> <?php endif; ?> <strong><script type=<span class="str">"text/javascript"> <span class="kwrd">var gaJsHost = ((<span class="str">"https:" == document.location.protocol) ? <span class="str">"https://ssl." : <span class="str">"http://www."); document.write(unescape(<span class="str">"%3Cscript src='" + gaJsHost

 + <span class="str">"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); </script> <script type=<span class="str">"text/javascript"> <span class="kwrd">try { <span class="kwrd">var pageTracker = _gat._getTracker(<span class="str">"UA-88600-7"); pageTracker._trackPageview(); } <span class="kwrd">catch(err) {}</script></strong> </body></html>
```

<style type="text/css">  .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style><style type="text/css">  .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style></body></html>