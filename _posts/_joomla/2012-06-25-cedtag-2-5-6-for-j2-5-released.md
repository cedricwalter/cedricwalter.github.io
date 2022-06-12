---
id: 7717
title: 'cedTag 2.5.6 for J2.5 Released'
date: '2012-06-25T21:32:58+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7717'

header:
  teaser: /assets/images/2012/06/cedTag4_thumb.png
tags:
    - joomla
---

 ![](/assets/images/2012/06/cedTag4_thumb.png)

 CedTag has been updated to version 2.5.6 and contains a lot of nice new and exciting features. For existing users the update will display in the **Extensions Manager** under **Updates**. If you do not have this currently installed, you can click the link below and install as normal via the Extensions Manager.

#  What’s new

##  Wordle

 [Wordle](http://www.wordle.net/ "Wordle: word clouds") is a toy for generating “word clouds” from text that you provide. The clouds give greater prominence to words that appear more frequently in the source text. You can tweak your clouds with different fonts, layouts, and color schemes.

 Lots of [Wordle](http://www.wordle.net/ "Wordle: word clouds") improvements in this release!

- **NEW**: option for Preferred Placement: Vertical, Horizontal or Mixed,
- **NEW**: Support for Palette Presets and Custom Palette,
- **NEW**: Support for Background Color and Image transparency,
- **NEW**: support of min and max font size in cloud,
- **NEW**: Advance caching of pictures creation,
- **NEW**: OnHover tag is also now displayed.  To use a [Wordle](http://www.wordle.net/ "Wordle: word clouds") tag cloud [just follow the documentation](http://wiki.waltercedric.com/index.php?title=Taxonomies_and_Tags_support_for_Joomla#Wordle)
    
    ##  General
- **NEW**: New Logo [![cedTag](http://www.waltercedric.com/images/cedTag-2.5.6-for-J2.5-Released_EE32/cedTag_thumb.png "cedTag")](http://www.waltercedric.com/images/cedTag-2.5.6-for-J2.5-Released_EE32/cedTag.png)
- **NEW**: new Theme Style “Stylish”, now the default style
- **NEW**: Filter articles in the ”Article Manager” by tag,
- **NEW**: Warning page for tag that do not exist, configurable if you prefer an error 404 instead (default: warning page). Text can be changed in **\\language\\en-GB\\en-GB.com\_cedtag.ini** and view can be adapted to your preferences at **/components/com\_cedtag/views/tag/tmpl/requested\_tag\_do\_not\_exist.php**
- **NEW**: Warning page for Tag that have no articles. Text can be changed in **\\language\\en-GB\\en-GB.com\_cedtag.ini** and view can be adapted to your preferences at **/components/com\_cedtag/views/tag/tmpl/no\_articles\_with\_tag.php**
- **NEW**: Icons: Follow me on Twitter and Facebook like us in administration panel.
- **NEW**: miscellaneous performances optimization to reduce code path in plugins.
- **NEW**: : possibility to remove the bottom copyright with an option under configuration settings.
- **BUG** There is a div.pagination at the bottom, even if there is no pagination used. Depending on the template, this can cause strange effects (e.g. additional spaces or frames around nothing). Thanks to Guenter Resch
- **BUG** : The installer package was messed up: the zip file was only storing not compressing files inside. As a result on Linux only nothing was installing forcing some persons to unpacked then repacked the package.
- **BUG**: tags without articles were displayed in all modules Tag Cloud, clicking on a tag without articles was giving a 404 error
- **BUG:** Solve an error 500 when URL rewriting was not activated (when Use URL rewriting = true and Search Engine Friendly URLs=true)
- BUG: security missing JEXEC in router.php
- **Thanks to Евгений for reporting these bugs and patches:**
    
    
    - **BUG**: SQL correction of PhilTags import function
    - **BUG**: Do not not show already included tags in article. i mean, if you add some tags, and then will edit the article again, you will not see previously added tags
    - **BUG**: cedTag will not let you manage tags from backend, if you are not logged in frontend, because of function canUserDoTagOperations in /helper/helper.php
    - **BUG**: When i press Enter to add the tag, it not only adds the tag, but refreshes inner page and load there /administrator/index.php
    - **NEW**: Enable choosing part of the sef url ('cedtag' to 'tag' or whatever, in cedTagSef.php) from backend
    - **NEW**: Customized and clickable Breadcrumbs. So, it now look something like: Home->Tags->ANYTAG
    
     Евгений has also some proposal for future work as well, some that went in 2.5.6
    
    
    1. Use content plugins for blog layout for a tag
    2. <strike>Use Breadcrumbs. So, it should look something like: Home->Tags->ANYTAG</strike>
    
     Your ideas are important, [feel free to contact me](http://www.waltercedric.com/contact.html "Contact me") and ask for new features!
    
     [![](http://www.waltercedric.com/images/download-zip.png)](http://www.waltercedric.com/downloads/cedtags.html "Download CedTag for Joomla")[![](http://www.waltercedric.com/images/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Taxonomies_and_Tags_support_for_Joomla "Documentation for CedTag for Joomla")[![](http://www.waltercedric.com/images/support.png)](http://forums.waltercedric.com/index.php#c23 "Support for CedTag for Joomla")