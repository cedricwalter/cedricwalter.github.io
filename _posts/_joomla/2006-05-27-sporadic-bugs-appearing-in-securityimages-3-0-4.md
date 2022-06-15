---
id: 2625
title: 'Sporadic bugs appearing in SecurityImages 3.0.4?'
date: '2006-05-27T12:05:06+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/box_securityimages.jpg
tags:
    - joomla
    - securityimages
---

  
| ![](/assets/images/2006/03/box_securityimages.jpg) | I’ve getting now many emails and bugs reports about security images 3.0.4. After looking closely at the source code and trying to reproduce those problems, I finally found the bug.   In fact this component is now a victim of its success, using it everywhere has also revealed a serious design flaw, but let me explain….   Security Images is using 2 hidden fields in the background: - <span style="text-decoration: underline; font-style: italic;">Security\_try which contains the text entered by the user - Security\_refid, which contains a UUID which will be use or not (depending on the Plugin) to locate the private key in the database or session.  And these hidden fields names are spread in the code… this let thehorror scenario happen:   <span style="color: rgb(255, 0, 0);">If you have many securityimages (captcha images) generated in the same page: login module may have one, Guestbook may have one for example, the code wont work!  The browser will submit all Hidden fields which are in the form, and thus the first input text box (Security\_try) may overwrite what the user has entered in another one…rejecting always the user as a result. |
|---|---|

Solutions

1. Prio 1: framework has to be configurable from the outside,
2. Prio 1: Free porn attack counter measures will be add to HNCapctha Plugin

Release

3.0.5 (Patch)

- Free porn attack counter measures will be add to HNCapctha Plugin.

<span style="font-weight: bold; color: rgb(51, 51, 255);">4.0.0 will have non compatible API changes  
You will have to change some 3rd party components, but I will support following 3rd party components:

- com\_contact (Joomla core)
- com\_login (Joomla core)
- com\_registration (Joomla core)
- akobookPlus
- akoCommenPlus

Other likeCommunity Builder,Galleries,JoomlaBoard will have to be supported by their own authors. Please contact them about that issue, I will document how to use the 4.0 in my wiki.

Other new functionnalities will be add to the 4.0 releases soon. (You can submit your ideas here)

Since it is raining over there 🙁 , it is realistic to see the version 4.0.0 before monday 29.05.2006

AkobookPlus new languages files:

- Spanish translation, thanks toMariela Gonzalez <http://www.poolp.com/mariela>
- Slovenian translation, thanks to Bo&#154;tjan Rudolf <http://www.whippetkevin.net>