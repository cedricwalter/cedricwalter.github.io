---
id: 4042
title: 'Reduce HTTP requests with Minify4Joomla'
date: '2009-01-14T22:05:32+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4042'
permalink: /joomla/reduce-http-requests-with-minify4joomla/
header:
  teaser: /assets/images/2009/01/minify4joomla.4_thumb.png
---

## BETA release

Attention: this kind of mod is intended for developer or #Joomla site with high number of visitors and facing performances issues.

A small HOWTO, a [more comprehensive documentation can be found in my WIKI](http://wiki.waltercedric.com/index.php?title=Com_minify). [A new forum board](http://forums.waltercedric.com/index.php?action=collapse;c=13;sa=expand#13) has also been started for support, bugs and your comments.

### Install 

The component com\_minify like any #Joomla component

### Check proper installation

1. Use the menu entry "Check/System", at least the file cache at components/com\_minify/cache has to be writable by apache/PHP!
2. Activate the URL Builder under "settings"
3. Drag and Drop the Bookmarklet tool in your Firefox Bookmark Toolbar

[![minify4joomla.4](/assets/images/2009/01/minify4joomla.4_thumb.png)](/assets/images/2009/01/minify4joomla.4.png)

so it look like:

![minify4joomla.1](/assets/images/2009/01/minify4joomla.1.png)

### Go to your Joomla frontend

And click on the bookmark tool "Create Minify URL’s", a new tab or pop up will open:

![minify4joomla.2](/assets/images/2009/01/minify4joomla.2.png)

In A, the tool will present You all JavaScript and CSS it has detected in the page, Remember this may change if you are a public or a registered user, this may also change if you remove or add module and plugin!

### Removing JavaScript/CSS HTTP requests

Now in that list, decide which JavaScript files can be combine (most of the time it is all, but you may want to create bundle of them if that is making sense), simply click on the blue link you want to add to the combine list.

Here for the example I select them all (also add securityimages.js):

![minify4joomla.3](/assets/images/2009/01/minify4joomla.3.png)

Note:

- That I have a base Joomla1.5.8 and did not install Joomla in the root directory of my local web server.
- You can not mix JavaScript and CSS in one minify URL, this is limitation of HTML tags that are different for JavaScript and CSS.
- mootools.js and caption.js can be group under the group name jbasejs for example and thus reuse.

Click now the \[Update\] button, the URL query Builder present you the text below that is self explanatory

> **Place this URI in your HTML to serve the files above combined, minified, compressed and with cache headers.**
> 
> URI   
> /components/com\_minify/b=Joomla1.5.8&amp;f=media/system/js/mootools.js,media/system/js/caption.js,   
>  components/com\_securityimages/js/securityImages.js <small>(opens in new window)</small>
> 
> HTML   
> <script type="text/javascript" src="/components/com\_minify/b=Joomla1.5.8&amp;amp;f=media/system/js/mootools.js,   
>  media/system/js/caption.js,components/com\_securityimages/js/securityImages.js"></script>
> 
> **How to serve these files as a group**
> 
> For the best performance you can serve these files as a pre-defined group with a URI like: `/components/com_minify/g=keyName`
> 
> To do this, add a line like this to /components/com\_minify/groupsConfig.php:
> 
> ```
> return array(     ... your existing groups here ...


> ```
> 
>  ‘keyName’ => array(‘//Joomla1.5.8/media/system/js/mootools.js’,   
> ‘//Joomla1.5.8/media/system/js/caption.js’,   
> ‘//Joomla1.5.8/components/com\_securityimages/js/securityImages.js’),`        

);`
> 
> Make sure to replace `keyName` with a unique key for this group.

### In your Joomla! templates /templates/xxxxxxx/index.php

1. Remove all reference to static JavaScript include by first commenting them if you have no backup.
2. Add this line in the <head> of your template   
    <script type="text/javascript" src="/components/com\_minify/b=Joomla1.5.8&amp;amp;   
     f=media/system/js/mootools.js,media/system/js/caption.js,components/com\_securityimages/js/securityImages.js"></script>   
    or better this one if you did defined a group fjs (**f**rontend**js**)   
    <script src="/Joomla1.5.8/components/com\_minify/?g=fjs" type="text/javascript"></script>
3. Remove all dynamically added JavaScript by : see later in article

You did avoid 3 HTTP requests for including JavaScript, and only need one now!

Do the same for all CSS, here it is 6 CSS file for the default templates rhuk\_milkyway

27. Remove all reference to static CSS include
28. Add this line in the <head> of your template ```
    <link rel="stylesheet" href="/Joomla1.5.8/components/com_minify/index.php?g=css" />
    ```
    
    You did avoid 6 HTTP requests for including JavaScript, and only need one now!
    
    ### Remove all dynamically added JavaScript 
    
    
    - This is currently a bit dirty, as Joomla! do not have any hook where com\_minify can detect that a Joomla! plugin is trying to insert a new JavaScript or CSS in head of the document. In fact minify would have its place in /libraries ideally.
    - I am trying to find a better/more elegant solution than this one (modifying JResponse), but this one work at the moment.
    - If you start modifying the front end, I highly recommend you to minify also the Joomla back end template.
    
    Open libraries\\joomla\\html\\html\\behavior.php and alter the class JHTMLBehavior
    
    and comment lines like
    
    JHTML::script(‘caption.js’);
    
    **when you are sure** that you did minify the script caption.js **for both** front end and back end.
    
    ### Test proper operations
    
    
    1. Test both your front end and back end!
    2. Using YSLOW or by looking at HTML source code, check that not any other JavaScript or CSS is inserted anymore except by com\_minify
    3. Check the cache content   
        ![minify4joomla.check.system](/assets/images/2009/01/minify4joomla.check_.system.png)
    4. Switch the URL builder OFF for non obvious security reasons.
    
    My site use it NOW 🙂 but not for all js and css at the moment