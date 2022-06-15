---

title: 'Web page as Graphs with source code'
date: '2009-06-04T21:23:20+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/06/www.waltercedric.as_.graph_thumb.png
---

[![www.waltercedric.as.graph](/assets/images/2009/06/www.waltercedric.as_.graph_thumb.png "www.waltercedric.as.graph")](http://websitesasgraphs.waltercedric.com/display.php?url=http://www.waltercedric.com)

Webpages as Graphs

With this funny applet, you can judge of the complexity of a web page by just generating it’s graph! [my homepage is way too complex](http://websitesasgraphs.waltercedric.com/display.php?url=http://www.waltercedric.com) compare to [google](http://websitesasgraphs.waltercedric.com/display.php?url=http://www.google.de) for example 🙂

### <http://websitesasgraphs.waltercedric.com> 

# What do the colors mean?**   
blue: for links (the A tag)   
red: for tables (TABLE, TR and TD tags)   
green: for the DIV tag   
violet: for images (the IMG tag)   
yellow: for forms (FORM, INPUT, TEXTAREA, SELECT and OPTION tags)   
orange: for linebreaks and blockquotes (BR, P, and BLOCKQUOTE tags)   
black: the HTML tag, the root node   
gray: all other tags

Nothing new some of you will cry, as this java applet is available since 2007.. Yes but..

The main difference, is that I provide you the last bit of code to make it work on your own server, or locally in any php environment. The magic part that is difficult to get is the function that retrieve the html content of any page and pass it to the applet.

For this task and since on some web host, the php function *furlopen*() may be forbidden (I recommend you to disable it to reduce backdoor inclusion), i will present you a solution with CURL

*PHP supports libcurl, a library created by Daniel Stenberg, that allows you to connect and communicate to many different types of servers with many different types of protocols. libcurl currently supports the http, https, ftp, gopher, telnet, dict, file, and ldap protocols. libcurl also supports HTTPS certificates, HTTP POST, HTTP PUT, FTP uploading (this can also be done with PHP’s ftp extension), HTTP form based upload, proxies, cookies, and user+password authentication. \[*[*PHP Manual*](http://us2.php.net/manual/en/book.curl.php)*\]*

So I’ve create a small script call display.php that return the content of a webpage

### Get Data From URL With Curl

```
<?php  $input = $_GET; $name = <span class="str">'url'; $url = (isset($input[$name]) && 

      $input[$name] !== <span class="kwrd">null) ? $input[$name] : 

                        <span class="str">"http://www.waltercedric.com";  $timeout = 10; $show_errors = <span class="kwrd">true;  <span class="kwrd">if (function_exists(<span class="str">'curl_init')) {    <span class="kwrd">return getDataFromUrlWithCurl($url, $timeout, $show_errors); }   <span class="kwrd">else {    <span class="kwrd">return getDataFromUrlWithFopen($url, $timeout); } <span class="rem">/** <span class="rem"> * CURL function to retrieve data from a URL. <span class="rem"> */  <span class="kwrd">function getDataFromUrlWithCurl($url, $timeout = 10, $show_errors = <span class="kwrd">false) {    $ch = curl_init();    $agent = <span class="str">"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)";    curl_setopt($ch, CURLOPT_USERAGENT, $agent);    curl_setopt ($ch, CURLOPT_HEADER, 0);    curl_setopt($ch,CURLOPT_URL,$url);    curl_setopt($ch,CURLOPT_HTTPGET,1);    curl_setopt($ch,CURLOPT_CRLF,1);    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1); <span class="rem">// so it will return data into a 
```

> ```
> <span class="rem">                                              //variable instead of printing out    curl_setopt($ch,CURLOPT_TIMEOUT,$timeout); <span class="rem">// give it a time in seconds to reply    <span class="rem">//curl_setopt($ch,CURLOPT_SSL_VERIFYPEER, false); //dont validate SSL cert    $result = curl_exec($ch);     <span class="kwrd">if ($show_errors && curl_error($ch)) {       printf(<span class="str">"Curl error %s: %s", curl_errno($ch), curl_error($ch));       print(<span class="str">' <a href="' . $url . <span class="str">'" target="_blank">This is the url</a>
');    }    curl_close($ch);    print($result);
> ```

```
       }
```

<style type="text/css">    .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>You can look at all CURL options there: [http://us2.php.net/curl\_setopt](http://us2.php.net/curl_setopt)

### Get the source code to make your own site

[Download now](http://www.waltercedric.com/downloads/doc_details/96-website-as-graph.html)

### All credits to original author

[About the author (Sala) of this applet](http://www.aharef.info/static/sala.html)

<http://www.aharef.info/static/htmlgraph/?url=http://www.google.com>

### Flickrmania

Make a screenshot of your sitegraph below, put it on flickr and tag it [websitesasgraphs](http://flickr.com/photos/tags/websitesasgraphs/).