---

title: 'Beta version of OpenComment'
date: '2006-09-24T15:46:59+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/opencomment.jpg
tags:
    - joomla
---

| ![](/assets/images/2006/03/opencomment.jpg) | Please Note:- Opencomment Beta do not migrate previous akocomment entries, it use its own mysql tables. But he final version will. - Do not use in production, it shall not break anything but we never know 😉 - Opencomment Beta do not require captcha (com\_SecurityImages) \[[www.captcha.net](http://www.captcha.net/)\], since it use a derivative ofcom\_Hashcash \[[www.hashcash.org](http://www.hashcash.org/)\]. Robots or Bots can’t submit entries wihtout parsing the form and sending at each request a valid serverTicket and articleTicket. Both have timeout and are encrypted to avoid replaying attacks. If somehow it wont be enough, I am currently polishing the integration ofcom\_SecurityImages and may also release com\_askimet \[[Askimet](http://akismet.com/)\]      |
|---|---|

Install:  
 You need to install the component com\_opencomment3.0.0beta.zipAND mos\_opencomment3.0.0beta.zip. You can download them **[OpenComment Installation](http://forums.waltercedric.com/index.php/board,16.0.html)**, all beta version will be available there. based on your finding, I will increase the patch number: 3.0.1, 3.0.2 and so on…

Bugs &amp; change requests:  
 Please report them in the forums: **[OpenComment Bugtracker](http://forums.waltercedric.com/index.php/board,14.0.html)** and **[Feature Requests](http://forums.waltercedric.com/index.php/board,18.0.html)**

Know Bugs:

- Not all translations are done, a lot of fix texts are still in code.