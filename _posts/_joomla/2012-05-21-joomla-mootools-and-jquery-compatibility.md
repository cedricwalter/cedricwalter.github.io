---

title: 'Joomla Mootools and jQuery Compatibility'
date: '2012-05-21T11:31:31+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/05/jquery_logo.png
---

![](/assets/images/2012/05/jquery_logo.png)

In this series of post I will outline some common techniques to help [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") extensions development.

As you know #Joomla is shipped with [Mootools](http://mootools.net/ "MooTools is a compact, modular, Object-Oriented #JavaScript framework designed for the intermediate to advanced #JavaScript developer.") library which assign $ also to Ajax. Here is 2 tips that will allow you to use [jQuery](http://jquery.com/ "jQuery ajax library") scripts without any modifications (most of the time you will find tips to assign [jQuery](http://jquery.com/ "jQuery ajax library") to something else than $ and rewrite your scripts)

First it is recommended to include always mootools first to avoid [jQuery](http://jquery.com/ "jQuery ajax library") conflict issues

```
JHTML::_('behavior.mootools'); $document = JFactory::getDocument(); $document->addScript(JURI::root() . "media/com_cedtag/js/jquery.1.7.2.min.js");
```

then to run [jQuery](http://jquery.com/ "jQuery ajax library") in noConflict mode. Note that here I do not assign [jQuery](http://jquery.com/ "jQuery ajax library") to any alias.

```
$document->addScriptDeclaration("jQuery.noConflict();");
```

Till here, this is what you will find on all #Joomla [forums](http://forums.waltercedric.com/), posts over the internet. The last tips is what make the difference!

Instead of using a different alias for the [jQuery](http://jquery.com/ "jQuery ajax library") object (when using noConflict), you can write your [jQuery](http://jquery.com/ "jQuery ajax library") code by wrapping it all in a closure. This can be done in the document.ready function

```
<p>$script = "jQuery(function($) {               $();</p><p>       });"; $document->addScriptDeclaration($script);</p>
```

This way you are not force to rewrite your scripts to use another alias (replacing $ with jquery alias for example in all your scripts). This make inclusion of [jQuery](http://jquery.com/ "jQuery ajax library") really easy!

Happy Coding!