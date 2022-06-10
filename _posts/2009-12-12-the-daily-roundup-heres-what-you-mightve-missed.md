---
id: 4906
title: 'The daily roundup: here&#8217;s what you might&#8217;ve missed'
date: '2009-12-12T19:02:10+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4906'
permalink: /joomla/the-daily-roundup-heres-what-you-mightve-missed/
image: /wp-content/uploads/2009/12/engadgetRecap_3.png
tags:
    - bubble
    - css
    - interesting
---

I am working on a small proof of concept for #Joomla! and components that allow visitors to leave comments. [At engadget](http://www.engadget.com/2009/12/11/the-daily-roundup-heres-what-you-mightve-missed1/), there is, since the redesign, an interesting widget written in CSS (click on picture to see it running)

[![engadgetRecap](/assets/images/2009/12/engadgetRecap_3.png "engadgetRecap")](http://www.engadget.com/2009/12/11/the-daily-roundup-heres-what-you-mightve-missed1/)

- - - - - -

And here is my version, achieved after 2 hours of work. There is still some work to do to make it move pleasant to the eyes, the PHP API is stable even if there is some changes still to be done in #JavaScript.

![fancyCommentBox.mootools](/assets/images/2009/12/fancyCommentBox.mootools_3.png "fancyCommentBox.mootools")

- Size of bubble is dynamic and depending on number of comments but can be configured to be always of the same size.
- Y axis label (0 – 128) need to be remove (JavaScript)
- X label (0 – 100) must be replaced by time (JavaScript)
- Joomla! 1.5 module
- Use [Mootools 1.2](http://mootools.net/)
- Use [MooChart from Johan Nordberg](http://moochart.coneri.se)
- OO code from the beginning, 300 LOC

Functionalities (ideas)

- Get the latest X articles of the week and display bubble against number of comments,
- Get the highest commented articles,

Release date is unknown, [still need to take care of my mother](https://waltercedric.com/new/?p=4883) and [go first through my forums](http://forums.waltercedric.com)