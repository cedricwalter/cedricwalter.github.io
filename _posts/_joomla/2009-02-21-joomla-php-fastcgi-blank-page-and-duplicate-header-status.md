---
id: 4174
title: 'Joomla! php, FastCGI, blank page and duplicate header &#8216;Status&#8217;'
date: '2009-02-21T12:45:23+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4174'

---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2009/02/joomla_cms.png)

Since months, now I (understand also YOU) receive some blank page when browsing my Internet homepage.

This strange behavior seems to occur only when having PHP running as FastCGI

FastCGI is a protocol for interfacing interactive programs with a web server. FastCGI is a variation on the earlier Common Gateway Interface (CGI); FastCGI’s main aim is to reduce the overhead associated with interfacing the web server and CGI programs, allowing a server to handle more web page requests at once. \[[WikiPedia](http://en.wikipedia.org/wiki/FastCGI)\]

The Apache logs are quite explicit:

\[error\] \[client x.x.x.x\] FastCGI: comm with server “/srv/www/cgi-bin/php5” aborted: error parsing headers: duplicate header ‘Status’

The error is located in the file /libraries/joomla/environment/response.php, at the function JResponse::sendHeaders()

The way header has to be send is different when using PHP FastCgi, strange that #Joomla! 1.5.9 still do not have this in main stream code…

# Old code**

```
 <span class="kwrd">function sendHeadersOld()  {   <span class="kwrd">if (!headers_sent())   {    <span class="kwrd">foreach ($GLOBALS[<span class="str">'_JRESPONSE']->headers <span class="kwrd">as $header)    {     <span class="kwrd">if (<span class="str">'status' == strtolower($header[<span class="str">'name']))     {      <span class="rem">// 'status' headers indicate an HTTP status, and need to be handled 
```

```
<span class="rem">     // slightly differently      header(ucfirst(strtolower($header[<span class="str">'name'])) . <span class="str">': ' . $header[<span class="str">'value'], <span class="kwrd">null, 

     (<span class="kwrd">int) $header[<span class="str">'value']);     } <span class="kwrd">else {      header($header[<span class="str">'name'] . <span class="str">': ' . $header[<span class="str">'value']);     }    }   }  }
```

This is how it should look like, code is backward compatible, if PHP run as an apache module.

```
 <span class="kwrd">function sendHeaders()  {   <span class="kwrd">if (!headers_sent())   {    <span class="kwrd">foreach ($GLOBALS[<span class="str">'_JRESPONSE']->headers <span class="kwrd">as $header)    {     <span class="kwrd">if (<span class="str">'status' == strtolower($header[<span class="str">'name']))     {      <span class="rem">// 'status' headers indicate an HTTP status, and need to be handled 

     // slightly differently      $attribute = ucfirst(strtolower($header[<span class="str">'name'])) . <span class="str">': ' . $header[<span class="str">'value'];            <span class="kwrd">if (substr(php_sapi_name(), 0, 8) == <span class="str">'cgi-fcgi') {        $attribute = str_replace(<span class="str">"Status:", <span class="str">"HTTP/1.1", $attribute);      }      header($attribute, <span class="kwrd">null, (<span class="kwrd">int) $header[<span class="str">'value']);     } <span class="kwrd">else {      header($header[<span class="str">'name'] . <span class="str">': ' . $header[<span class="str">'value']);     }    }   }  }
```