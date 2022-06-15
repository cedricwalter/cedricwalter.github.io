---

title: 'Joomlacomment 4.0 jQuery optimization'
date: '2009-10-03T12:44:07+02:00'
author: 'Cédric Walter'



---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2009/10/joomla_cms.png)

![jocomment](/assets/images/2009/10/jocomment.jpg "jocomment") I did install yesterday evening the latest version of [!JoomlaComment](http://compojoom.com/)

# [!JoomlaComment](http://compojoom.com/)** is one of the first extensions for #Joomla,that let you comment under articles.

The **[!JoomlaComment](http://compojoom.com/)** system can be installed on any joomla website within seconds! Make   
your website more interactive!

Main Features:

- **ajax-based**
- **captcha protection**
- **akismet support**
- **ubb code support**
- **threathed/nested comments**
- **multilanguage support**
- **mail, website input**
- [See more features here](http://compojoom.com/component/content/article/60/61-the-best-comment-system-for-joomla)

Joomla support templates, depending on which templates you use

- MTdefault-emotop, these templates MTxxxx use mootols 1.11
- JQdefaut-emotop, these templates JQxxxx use Jquery
- ..

You may behind the scene include another additional AJAX library in #Joomla!® frontend, this lead to performance issues:

If [!JoomlaComment](http://compojoom.com/) use [JQuery](http://jquery.com/) 1.1.4 and not the AJAX library of #Joomla!, aka [Mootools](http://mootools.net/) 1.11. Another huge #JavaScript files that make my server busier!

[Since any static files can be offloaded to another server to gain more speed](https://waltercedric.com/new/?p=4701). For example, any static images, J*avaScript* or CSS files can be moved to a different server for more speed.

In order to be able to offload this #JavaScript library to Google code, you’ll have to do the following:

In the template you are using, for example in components/com\_comment/joscomment/templates/JQdefault-emotop/index.html

Search for

```
{library} <span class="kwrd"><<span class="html">script <span class="attr">type<span class="kwrd">="text/javascript" <span class="attr">src<span class="kwrd">="components/com_comment/joscomment/jscripts/jquery-1.1.4.pack.js"<span class="kwrd">></<span class="html">script<span class="kwrd">> <script>jQuery.noConflict();<span class="kwrd"></<span class="html">script<span class="kwrd">> {/library}
```

and replace with

```
{library} <span class="kwrd"><<span class="html">script <span class="attr">type<span class="kwrd">="text/javascript" <span class="attr">src<span class="kwrd">="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"<span class="kwrd">></<span class="html">script<span class="kwrd">>  <script>jQuery.noConflict();<span class="kwrd"></<span class="html">script<span class="kwrd">> {/library}
```

Note that I use here the latest [JQuery](http://jquery.com/) version (1.3.2) and not the default version of !joomlaComment (1.1.4), here is why

- This version 1.1.4 is not available at <http://code.google.com/apis/ajaxlibs/documentation/#jquery> 🙂
- I did test the frontend of !JoomlaComment 4.0 with [JQuery](http://jquery.com/) 1.3.2 and it work great