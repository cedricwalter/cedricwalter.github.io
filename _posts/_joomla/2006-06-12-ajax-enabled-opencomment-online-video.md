---
id: 2650
title: 'Ajax enabled OpenComment online video'
date: '2006-06-12T23:45:07+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/opencomment-72.jpg
tags:
    - joomla
---

 ![](/assets/images/2006/03/opencomment-72.jpg)I took the time to work 3 hours onOpenComment, and I made some impressive progress…

- I am able to understand xajax development and error messages faster now
- Nearly all basic functions are AJAX enable: rating, admin function, publishing, sorting, filtering etc…
- I have start to refactore the code and clean out dead and bad code,
- I am able to use some basic #Joomla library (while not being in a #Joomla session).

And in order to thank You all for Your patience, I have create a FLASH movie with [WINK ](http://www.debugmode.com/wink/)

Wink is a Tutorial and Presentation creation software, primarily aimed at creating tutorials on how to use software (like a tutor for MS-Word/Excel etc). Using Wink you can capture screenshots, add explanations boxes, buttons, titles etc and generate a highly effective tutorial for your users.

Carbon Viewlet being too expensive: 200$ right now for my usagebut if someone has a licence to offer me 😉

The video is [here GO for OpenComment video](/dmdocuments/opencommentWink.htm) <font size="6"> (a little bit rough for 300kB, but the WOW effect should be here)

- All operation are done WITHOUT reloading the whole page,
- This thing is lightning fast
- The AJAX library has reduce the code of at least 30% (no more form, no submit, no code to compute redirect url etc…)

BUT

- Dont ask for a release date, it will be ready when it is ready!
- Adding security and reviewing code has to be done, I dont want to let hackers missuse the system.
- The PHP code is commited to #Joomla forge,
- The PHP code is right now still joomla 1.0.9 compatible, I think I need less than a day to migrate code to #Joomla 1.5 API
- No installer or complete admin panel (70%) right now, will be done at the end.
- Contact me if You want to help.

more news soon….ENJOY