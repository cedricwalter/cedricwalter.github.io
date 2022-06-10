---
id: 2368
title: 'Today status of opencomment 3.0.0alpha'
date: '2006-03-12T22:34:56+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2368'
permalink: /joomla/today-status-of-opencomment-3-0-0alpha/
header:
  teaser: /assets/images/2006/03/tn_opencomment3.0.0-2006.03.12.gif
tags:
    - development
    - independent
    - opencomment
    - refactoring
---

- The threshold filtering is working,
- The comment sorting is working,
- opencomment mambots is fully language independent -> localized through language php files,
- The rating mechanism is in place, I am beat right now by an obvious bug,
- Refactoring, refactoring….

[![](/assets/images/2006/03/tn_opencomment3.0.0-2006.03.12.gif)](/assets/images/2006/03/opencomment3.0.0-2006.03.12.gif)

I need to make a pause, because I am pretty disgust by PHP…I really hate now the include keyword (the concept of visibility is bloated), I miss java compile check, a debugger (yes I ve tried to install PHP DBG under eclipse + PHPeclipse without success right now:-( ) and I miss the #Java refactoring browser of #Eclipse (doing refactoring by hand is a pain)…references, call hierarchy… I need to make a break and go back to my java world for a couple of hours 🙂

I receive emails from all over the world, proposing me helps…beta testing, development and that’s great: Thank You  
  
Some rules if You want to join development

- Recommended is #Eclipse + PHPeclipse, the better: it is free!
- Code is committed to #Joomla Forge, You need to get accredited by me, before having a commiter access.
- Interdiction to format code by Your own, let the tool do it for You, type SHIFT-CTRL-F in #Eclipse.
- Do not write comments! if you feel a bloc of code need it, use "extract method", "rename object, method, variable", only comment TODO or Hacks! Comments always LIE

Do not

- Ask for a release to test, I am (we are?) committing code to CVS HEAD, the code is not installable (I have no time to test the installer right now, migrations scripts do not exist, the database schema is hand made)

RoadMap  


- I plan to install a demo version of opencomment in a new instance of #Joomla, in order to show progress or help testing
- I wont add any new features, I think pretty everything is in place, I need to track bugs and finish implementing missing features (email this), admin functions…
- Planned is also to use [fvalidate](http://www.phil-taylor.com/fvalidate/) (prio2)
- Alpha stable till end of week
- Beta version?
- Stable? when it will be ready!