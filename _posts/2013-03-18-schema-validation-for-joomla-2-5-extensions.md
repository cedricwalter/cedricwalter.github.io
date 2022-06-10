---
id: 7967
title: 'Schema Validation for Joomla 2.5 Extensions'
date: '2013-03-18T19:46:34+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7967'
permalink: /joomla/schema-validation-for-joomla-2-5-extensions/
header:
  teaser: /assets/images/2009/07/joomla.png
tags:
    - joomla
---

![joomla](/assets/images/2009/07/joomla.png "joomla")![love](/assets/images/2008/08/love.png "love")![xsd](/assets/images/2013/03/xsd.png "xsd")

I’ve created from scratch, all [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") extensions XSD.

Without them, [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") accept any entry in manifest xml and never complains about

- Mistyping, like a valid xml but that the [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") installer do not understand or only partially,
- Wrong constructs, xml tag child misplaced,
- Invalid data type, like a path not being a valid path, an expected integer being a text and so on…

Joomla just silently die during install or install only partially extensions. These days are over as developers with any decent IDE will be able to validate while typing and enjoy auto completion. To use them now just include them in all your manifest like this:

```
<?xml version="1.0" encoding="UTF-8"?> <extension type="component" version="1.6" method="upgrade" xsi:noNamespaceSchemaLocation="http://raw.github.com/cedricwalter/joomla-xsd/master/component.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 


```

```
<?xml version="1.0" encoding="utf-8"?> <metafile version="1.6"  client="site" xsi:noNamespaceSchemaLocation="http://raw.github.com/cedricwalter/joomla-xsd/master/language.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
```

```
<?xml version="1.0" encoding="UTF-8"?> <extension type="module" version="1.6" client="site" method="upgrade" xsi:noNamespaceSchemaLocation="http://raw.github.com/cedricwalter/joomla-xsd/master/module.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
```

```
<?xml version="1.0" encoding="utf-8"?> <extension version="1.6" type="plugin" group="system" method="upgrade" xsi:noNamespaceSchemaLocation="http://raw.github.com/cedricwalter/joomla-xsd/master/plugin.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
```

```
<?xml version="1.0" encoding="utf-8"?> <extension version="1.6" type="template" method="upgrade" xsi:noNamespaceSchemaLocation="http://raw.github.com/cedricwalter/joomla-xsd/master/templateDetails.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
```

A Bug request [https://github.com/joomla/joomla-cms/issues/838](https://github.com/joomla/joomla-cms/issues/838 "https://github.com/joomla/joomla-cms/issues/838") as been opened in [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") CMS [GIT](http://git-scm.com/) at [https://github.com/joomla/joomla-cms/](https://github.com/joomla/joomla-cms/ "https://github.com/joomla/joomla-cms/") for being included somewhere where it will make more sense, somewhere like at <http://www.joomla.org/xds/2.5/plugins.xsd>