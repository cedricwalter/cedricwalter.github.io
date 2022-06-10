---
id: 7703
title: 'cedTag 2.5.5 for J2.5 Released'
date: '2012-05-30T21:34:04+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7703'
permalink: /joomla/cedtag-2-5-5-for-j2-5-released/
header:
  teaser: /assets/images/2012/05/cedTag4_thumb.png
tags:
    - joomla
---

[![cedTag4](/assets/images/2012/05/cedTag4_thumb.png "cedTag4")](/assets/images/2012/05/cedTag4.png)

CedTag has been updated to version 2.5.5 and correct a lot of bugs and contains some nice new features.

CedTag is the continuation of the GPL component #Joomla Tags ([www.joomlatags.org](http://www.joomlatags.org/)), **Most of the code if not all** has been now rewritten according to the new standard of #Joomla 2.5, the component has been greatly extended and most bugs have been removed. I will continue removing, refactoring existing codebase, in order to be able to add new features faster.

### What’s new

# NEW**: [Wikipedia](http://www.wikipedia.org/ "wikipedia") auto-completion of tag descriptions with [Wikipedia](http://www.wikipedia.org/ "wikipedia") OpenSearch API!

Support more than 40 localized Wikipedia servers (all Wikipedia with more than 100’000 articles)

[العربية](http://ar.wikipedia.org/) • [Български](http://bg.wikipedia.org/) • [Català](http://ca.wikipedia.org/) • [Česky](http://cs.wikipedia.org/) • [Dansk](http://da.wikipedia.org/) • [Deutsch](http://de.wikipedia.org/) • [English](http://en.wikipedia.org/) • [Español](http://es.wikipedia.org/) • [Esperanto](http://eo.wikipedia.org/) • [Euskara](http://eu.wikipedia.org/) • [فارسی](http://fa.wikipedia.org/) • [Français](http://fr.wikipedia.org/) • [한국어](http://ko.wikipedia.org/) • [हिन्दी](http://hi.wikipedia.org/) • [Hrvatski](http://hr.wikipedia.org/) • [Bahasa Indonesia](http://id.wikipedia.org/) • [Italiano](http://it.wikipedia.org/) • [עברית](http://he.wikipedia.org/) • [Lietuvių](http://lt.wikipedia.org/) • [Magyar](http://hu.wikipedia.org/) • [Bahasa Melayu](http://ms.wikipedia.org/) • [Nederlands](http://nl.wikipedia.org/) • [日本語](http://ja.wikipedia.org/) • [Norsk (bokmål)](http://no.wikipedia.org/) • [Polski](http://pl.wikipedia.org/) • [Português](http://pt.wikipedia.org/) •[Қазақша / Qazaqşa / قازاقشا](http://kk.wikipedia.org/) • [Română](http://ro.wikipedia.org/) • [Русский](http://ru.wikipedia.org/) • [Slovenčina](http://sk.wikipedia.org/) • [Slovenščina](http://sl.wikipedia.org/) • [Српски / Srpski](http://sr.wikipedia.org/) • [Suomi](http://fi.wikipedia.org/) • [Svenska](http://sv.wikipedia.org/) • [Türkçe](http://tr.wikipedia.org/) • [Українська](http://uk.wikipedia.org/) • [Tiếng Việt](http://vi.wikipedia.org/) • [Volapük](http://vo.wikipedia.org/) • [Winaray](http://war.wikipedia.org/) • [中文](http://zh.wikipedia.org/)

For all terms[![cedtag_wikipediaautofill1](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedtag_wikipediaautofill1_thumb.png "cedtag_wikipediaautofill1")](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedtag_wikipediaautofill1.png)

[![cedtag_wikipediaautofill2](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedtag_wikipediaautofill2_thumb.png "cedtag_wikipediaautofill2")](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedtag_wikipediaautofill2.png)

or while editing a term

[![cedtag_wikipediaautofill3](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedtag_wikipediaautofill3_thumb.png "cedtag_wikipediaautofill3")](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedtag_wikipediaautofill3.png)   
# NEW: **diagnostic page

[![cedTag_newDiagnostic](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedTag_newDiagnostic_thumb.png "cedTag_newDiagnostic")](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedTag_newDiagnostic.png)   
# NEW**: tags can also now be automatically inserted when new article is entered from the backend,   
# NEW**: new configuration settings “Force Existing articles get their tags updated always from article meta keywords at save time” under Tab Tags (default is No)

# NEW**: Supporting tags containing many words separated by space: There are normally 5 ways to insert a tag after inputting some text: space, comma, enter, selecting an autocomplete option, or defocusing the widget. Now space now longer save the tag: You can enter tags with space as a result!   
# NEW**: inline documentation when adding tag in frontend

[![cedTag_supportTagsWithSpace](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedTag_supportTagsWithSpace_thumb.png "cedTag_supportTagsWithSpace")](http://www.waltercedric.com/images/cedTag-2.5.4-for-J2.5-Released_AECA/cedTag_supportTagsWithSpace.png)



# BUG**: Code cleaning, according to Joomla standard: my dream is to have this extension accepted in [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") core! Still a lot of PHP Unit test to be written before submitting this to the mailing list of Joomla developers. Now I use [Joomla CodeSniffer](http://docs.joomla.org/Joomla_CodeSniffer) and [PSR-1 CodeSniffer](https://github.com/klaussilveira/phpcs-psr1) rules in my day to day development.   
# BUG**: after click on Template Manager it show this err Fatal error: Class ‘UsersHelper’ not found in /home/assafir/public\_html/administrator/components/com\_cedtag/views/css/view.html.php on line 41   
# BUG**: tags were not inserted automatically from new content article in frontend,   
# BUG**: it was not possible to use html descriptions   
# BUG**: missing some [http://jqueryui.com](http://jqueryui.com/) images resources

Your ideas are important, [feel free to contact me](http://www.waltercedric.com/contact.html "Contact me") and ask for new features!

[![](http://www.waltercedric.com/images/download-zip.png)](http://www.waltercedric.com/downloads/cedtags.html "Download CedTag for Joomla")[![](http://www.waltercedric.com/images/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Taxonomies_and_Tags_support_for_Joomla "Documentation for CedTag for Joomla")[![](http://www.waltercedric.com/images/support.png)](http://forums.waltercedric.com/index.php#c23 "Support for CedTag for Joomla")