---

title: 'More performances for Joomla! with com_minify'
date: '2009-01-08T17:54:20+01:00'
author: 'Cédric Walter'



---

### Announcement of com\_minify

I am developing a new component com\_minify that will greatly reduce the number of http requests

it *Combines, minifies, and caches #JavaScript and CSS files on demand to speed up page loads.*

> from [yahoo performance developer](http://developer.yahoo.com/performance/rules.html#num_http)   
> *80% of the end-user response time is spent on the front-end. Most of this time is tied up in downloading all the components in the page: images, style sheets, scripts, Flash, etc. Reducing the number of components in turn reduces the number of HTTP requests required to render the page. This is the key to faster pages.*
> 
> *One way to reduce the number of components in the page is to simplify the page’s design. But is there a way to build pages with richer content while also achieving fast response times? Here are some techniques for reducing the number of HTTP requests, while still supporting rich page designs.*
> 
> ***Combined files** are a way to reduce the number of HTTP requests by combining all scripts into a single script, and similarly combining all CSS into a single style sheet. Combining files is more challenging when the scripts and style sheets vary from page to page, but making this part of your release process improves response times.*

I was developing this week end this component (name com\_combine) but decide it would be better to use a proven engine, and I found one:   
<http://code.google.com/p/minify/>

# Minify!">Minify is a PHP5 app that can combine multiple CSS or #JavaScript files, compress their contents (i.e. removal of unnecessary whitespace/comments), and serve the results with HTTP encoding (gzip/deflate) and headers that allow optimal client-side caching. This helps you follow several of Yahoo!’s[Rules for High Performance Web Sites](http://developer.yahoo.com/performance/index.html#rules).

### The list of features is huge

- # Features">Combines and minifies multiple CSS or #JavaScript files into a single download
- # Features">Uses an[enhanced port](http://code.google.com/p/minify/source/browse/trunk/min/lib/JSMin.php) of Douglas Crockford’s [JSMin library](http://www.crockford.com/javascript/jsmin.html) and custom classes to minify [CSS](http://code.google.com/p/minify/source/browse/trunk/min/lib/Minify/CSS.php) and [HTML](http://code.google.com/p/minify/source/browse/trunk/min/lib/Minify/HTML.php)
- Caches server-side to avoid doing unnecessary work
- Responds with an HTTP 304 (Not Modified) response when the browser has an up-to-date cache copy
- Most modules are lazy-loaded as needed (304 responses use minimal code)
- Automatically rewrites relative URIs in combined CSS files to point to valid locations
- With caching enabled, Minify is capable of handling hundreds of requests per second on a moderately powerful server.
- Content-Encoding: deflate/gzip, based on request headers. Caching allows it so serve deflated files faster than Apache’s mod\_deflate option!
- Test cases for most components
- Easy integration of 3rd-party minifiers
- Separate utility classes for HTTP encoding and cache control

### On top of that you’ll get the ease of

- Installation and removal like any #Joomla! component
- A real back end administration panel, multilingual,
- Version check to always keep up to date,
- Some security measure inherited from #Joomla! framework and best practices.
- GPL v3 license for com\_minify,
- BSD license for the engine minify

Download it [later this week HERE](http://www.waltercedric.com/index.php?option=com_versions&catid=16)