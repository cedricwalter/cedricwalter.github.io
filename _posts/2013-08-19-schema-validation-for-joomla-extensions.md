---
id: 8146
title: 'Schema Validation for Joomla 3.1 Extensions'
date: '2013-08-19T21:43:20+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8146'
permalink: /joomla/schema-validation-for-joomla-extensions/
header:
  teaser: /assets/images/2009/07/joomla.png
tags:
    - joomla
---

 ![joomla](/assets/images/2009/07/joomla.png "joomla")![love](/assets/images/2008/08/love.png "love")![xsd](/assets/images/2013/03/xsd.png "xsd")

 Full support for [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") 3.1 has been added to the project “[Schema Validation for #Joomla Extensions](https://github.com/cedricwalter/joomla-xsd)” ([GitHub](https://github.com/ "GitHub social coding Git repositories")), tested with all 113 manifests of [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") 3.1.5! (components, modules, plugins and templates)

 Without them, #Joomla accept any entry in manifest xml and never complains about

- Mistyping, like a valid xml but that the #Joomla installer do not understand or only partially,
- Wrong constructs, xml tag child misplaced,
- Invalid data type, like a path not being a valid path, an expected integer being a text and so on…

 Joomla just silently die during install or install only partially extensions. These days are over and all developers with any decent IDE will be able to

- Validate while typing,
- Enjoy auto completion.
- Have an up to date documentation of all possibilities in #Joomla’s manifest.

###  What’s new

 see <https://github.com/cedricwalter/joomla-xsd/commit/8b315332e8c0fa515da19f15a4c547f446850024>

 component / module / plugins

- add in `<menu>` support for attribute value img="class:banners">
- add in `<menu>` support for attribute value view="anyString"
- add in `<menu>` support for attribute value alt="anyString"
- add to `type="cmsVersionType"` version 3.1
- add support for `<menu link="option=com_finder">COM_FINDER</menu>` (finder.xml)
- In `<extension>` attribute value`method=""` is now optional
- add new `<help key="ANY_STRING" />`
- add in `<field>` support for attribute value first="anyNumber"
- add in `<field>` support for attribute value last="anyNumber"
- add in `<field>` support for attribute value step="anyNumber"
- add in `<field>` support for attribute value published="" (mod\_articles\_category.xml)
- add in `<field>` support for attribute value format="%Y-%m-%d %H:%M:%S"
- add in `<field>` support for attribute value disable="separator" (mod\_login.xml)
- add in `<fields>` support for attribute value addfieldpath="validPath" (mod\_finder.xml)
- in `<field>` validate css class names `class="btn-group"` or `class="btn-group btn1 blue"` or`class=""`
- Allow empty without fieldset (vote.xml) `<fields name="params"> </fields>`
- In `<authorEmail>` consider N/A as a valid email
- Attribute 'label' now optional on element 'field'. `<field name="spacer3" type="spacer" hr="true" />`
- Support for validate `<field>` `type="url"` (sef.xml)
- in `<fieldset>` allow Attribute value label="" to appear in element (debug.xml)
- allow `<field>` to have type attribute value category (contactcreator.xml)
- allow `<field>` to have new attribute `extension=com_*` (contactcreator.xml)
- In `<media>` attribute destination value is now optional
- In `<fieldset>` add optional`addfieldpath=""` and validate that it is a valid path
- In “`<option value="" empty values are now allowed
- `<updateservers>` is now available in plugins manifests
- In `<field>` type now support `type="modal_article"` or from enum (using xsd union)

 Plugins only

- in `<file plugin="weblinks">weblinks.php</file>`

 Template only

- In `<extension>` attribute value `method=""` is now optionnal
- In `<extension>` addattribute value `client=""`
- add `<languages></languages>`

 These files will be hopefully soon merged into [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") CMS ([GitHub](https://github.com/joomla/joomla-cms "GitHub social coding Git repositories") project) and officialy supported by #Joomla

- Joomla tracker [http://joomlacode.org/gf/project/joomla/tracker/?action=TrackerItemEdit&amp;tracker\_id=8549&amp;tracker\_item\_id=30358](http://joomlacode.org/gf/project/joomla/tracker/?action=TrackerItemEdit&tracker_id=8549&tracker_item_id=30358)
- GitHub issue <https://github.com/joomla/joomla-cms/issues/838>