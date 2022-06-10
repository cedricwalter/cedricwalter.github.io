---
id: 2709
title: 'OpenComment 3.0.0Beta release 5'
date: '2006-10-02T21:21:08+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2709'
permalink: /joomla/opencomment-3-0-0beta-release-5/
tags:
    - joomla
---

This new version is now able to 

- Output Linear or threaded comments (a faster algorithm),
- 5 More settings in administrator panel.
- XAJAX 0.2.4

 Experience it live at <big><big>[demo.waltercedric.com](http://demo.waltercedric.com/) </big></big>

What is still avoiding a final release?

- Bug in XML installer, somehow not all files are copied during install, note this do not affect my developer environment (Windows + eclipse + PHP 4.1.3). I can reproduce the issue on my #Linux box but still can not explain it as XML Spy 2006 report a valid setup file.
- Your review and suggestions

What is really needed in a future release:

- Priority 2: Templating output, to accommodate the sake of diversity #Joomla! users expect.
- Priority 1: Avoid hard coding layout using HTML table and switch to a CSS and more flexible technology: Is there someone that can help me? The objective is to define to set of CSS classes to precisely place element in the form, list of comments.
- More people involved, I need Your help: the code is GNU-GPL but please try to build new functionalities on the existing codebase, remember You are free to fork, as long as the original copyright remains.