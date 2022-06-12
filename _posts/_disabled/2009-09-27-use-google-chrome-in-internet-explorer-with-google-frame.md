---
id: 4712
title: 'Use Google Chrome in Internet explorer with Google Frame'
date: '2009-09-27T23:18:44+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4712'

header:
  teaser: /assets/images/2009/09/logogooglechrome_thumb.jpg
tags:
    - browser
    - navigator
---

[![logo-google-chrome](/assets/images/2009/09/logogooglechrome_thumb.jpg "logo-google-chrome")](/assets/images/2009/09/logogooglechrome.jpg)

> Google Chrome Frame is an early-stage open source plug-in that seamlessly brings Google Chrome’s open web technologies and speedy #JavaScript engine to Internet Explorer. With Google Chrome Frame, you can:
> 
> - Start using open web technologies – like the HTML5 `canvas` tag – right away, even technologies that aren’t yet supported in Internet Explorer 6, 7, or 8.
> - Take advantage of #JavaScript performance improvements to make your apps faster and more responsive.

What is even more clever is that thanks to a special embedded tags in your html body, you can propose to your visitor to install this plugin, and thus increase market share of Google chrome. That’s a direct hit at Microsoft domination plans 🙂 (we own the file format, and runtime environment)

```
<span class="kwrd"><<span class="html">body<span class="kwrd">> <span class="kwrd"><<span class="html">script <span class="attr">type<span class="kwrd">="text/javascript" 
 <span class="attr">src<span class="kwrd">="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"<span class="kwrd">> <span class="kwrd"></<span class="html">script<span class="kwrd">>  
  <div id=<span class="str">"placeholder">  <script>  CFInstall.check({     node: <span class="str">"placeholder",     destination: <span class="str">"http://www.waikiki.com"   });
   <span class="kwrd"></<span class="html">script<span class="kwrd">> <span class="kwrd"></<span class="html">body<span class="kwrd">>
```

Adding this tag in <head> section of your blog is for users running Internet Explorer with Google Chrome Frame installed. This will automatically render yours pages with Google Chrome Frame instead of IE.

```
 <span class="kwrd"><<span class="html">meta <span class="attr">http-equiv<span class="kwrd">="X-UA-Compatible" <span class="attr">content<span class="kwrd">="chrome=1"<span class="kwrd">>
```

After that, you can visit any site and render it with Google frame by appending cf: to any http:// url’s,

[cf:http://www.waltercedric.com/](http://www.waltercedric.com/)

Personally I will stick to Firefox/Chrome/Opera and use them when it make sense.

[![google.chrome.frame](/assets/images/2009/09/google.chrome.frame_thumb.jpg "google.chrome.frame")](http://www.waltercedric.com/images/stories/UseGoogleChromeinInternetexplorerwithGoo_147C6/google.chrome.frame.jpg)

Developer guide at [http://code.google.com/chrome/chromeframe/developers\_guide.html](http://code.google.com/chrome/chromeframe/developers_guide.html)

Download at <http://code.google.com/chrome/chromeframe/>

<style type="text/css">     .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>