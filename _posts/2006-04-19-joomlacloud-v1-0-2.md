---
id: 2470
title: 'JoomlaCloud v1.0.2'
date: '2006-04-19T19:26:15+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2470'
permalink: /joomla/joomlacloud-v1-0-2/
tags:
    - building
    - database
    - discovered
    - Download
    - projects
    - released
---

- **BUG** (discovered by CS): scanner classes were not using generic database and tablename prefix. An empty dataset of words has trigger a division by 0…the right way is to use the #\_\_ prefix when building a SQL statement….

Version has been released in [my download section](/downloads/task,cat_view/gid,296/ "http://www.waltercedric.com/component/option,com_docman/task,cat_view/gid,296/Itemid,64/"), at [joomla forge](http://forge.joomla.org), and at [demo.waltercedric.com](http://demo.waltercedric.com/) (see it live running and change settings in admin panel)

By the way, #Joomla forge host now more than 943 open source projects, and has more than 22537 registered users 🙂