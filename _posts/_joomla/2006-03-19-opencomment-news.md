---

title: 'OpenComment news'
date: '2006-03-19T22:21:15+01:00'
author: 'Cédric Walter'



tags:
    - installation
---

What’s new wth opencomment today? I work hard to bring some new functionnalities:

- A new Admin tab: spammers which regroup all antispammer plugins,
- Auto discovery of smilies pack is working, with a check to see if it is correctly install
- Translations are nearly done, more than 90%
- A new field in form, user can now enter his homepage
- Bad news for all of You: com\_opencomment require now com\_log4php prior to installation. Sorry But I really need a logging fw since my debugger is still not functionnal.
- New automoderation Admin tab: this idea come to my mind today when I discover 3 spams attempt on my homepage. Someone has enter manually the captcha. In order to F.. all spammer, you can now decide to moderate automatically or delete any comment that contains an URL in title or text.
- I start looking at Askimet, a webservice to tell if a comment is spam.
- Refactoring as usual, trying to bring size of code down to a manageable level. Note: I would have been 10 times faster with java, sic….
- Prefilling values back if user enter something wrong in the form (like wrong captcha text…)
- A module: mod\_opencommentLatest has been also developed
- Securities check

[Look in the gallery for the new pictures,](/gallery/catid,28/) code is in #Joomla Forge CVS