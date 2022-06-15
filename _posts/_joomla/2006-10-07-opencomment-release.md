---
id: 2716
title: 'OpenComment release'
date: '2006-10-07T15:47:33+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/opencomment.jpg
tags:
    - joomla
---

Today is a GREAT day for all of You…. 

| ![](/assets/images/2006/03/opencomment.jpg) | Dear worldwide users of [Joomla!](http://www.joomla.org). I am releasing OpenComment 3.0.10 NOW! I am working on this component since middle of march    I am convince that this release is more than usable, so usable that You can use it on this site NOW. |
|---|---|

  
What is OpenComment?  
 OpenComment lets your users comment on content items.

| <small>AJAX enable to have lightning fast update of the comment list, each 100 seconds as default the lst is automatically updated    </small> | <small>Threaded or linear displaying list of comments.</small> |
|---|---|
| <small>Smilies, just put a new directory in /packs/ to have new graphics.</small> | <small>Paging algorithm to jump to the latest comment: 5, 15, 25 or 50 comments per page only.</small> |
| <small>BBCode support!</small> | <small>Sorting comments, show newest or oldest first</small> |
| <small>Tracking comments: user can enter an email, each time someone post something new in the same thread, it will be alerted by a HTML or TEXT template (editable and multilingual support)</small> | <small>Comment Rating helps the community highlight useful comments and obscure inappropriate ones. It can powerfully improve the forum experience by encouraging quality and deterring spam. Please do not downgrade (or upgrade) comments based on whether you disagree (or agree) with the author. In fact, a well-argued comment that disagrees with you deserves a Useful rating. We hope the community will correct these errors by marking as ?Useful? a comment that looks to have been demoted for the wrong reasons. Enough votes will promote the comment to where it should be.</small> |
| <small>Full multilingual component.</small> | <small>Comment rating filtering: user can decide which comments he do not want to see…</small> |
| <small>60 settings in admin panels!</small> | <small>support com\_securityimages, com\_hashcash but they are no more mandatory</small> |
| <small>Build with security in mind: it use some well known authentification mechanism to avoid spam floading (hashcash) and replaying attacks (tickets)</small> | <small>GNU-GPL license, 99 percents of code is object oriented. PHP4</small> |

What I’ve solved

- I’ve correct the installer bug by reformatting the installer XML with [myEclipse](http://www.myeclipseide.com/).
- The navigation bar for paging has been debugged and improve.
- The code is #Joomla 1.5 compliant: no register globals, RG Emulation off ….
- You can migrate old akocomment previous entries by selecting in admin menu "Migrate AkoComment entries" (do not use more than once!, or it may import comments twice!)

But under following limitations:

- I am using some computational PHP functions (bcadd, bcmul, bcdiv), so libbcmath must be installed on your server.
- OpenComment use XAJAX, a very good AJAX framework, so good that it will be part of the next [Joomla!](http://www.joomla.org/) 1.5 version (beta to be release for 10 October 2006). The major problem is that XAJAX do not allow more than one component, module, mambot enabled AJAX. [See Here.](http://www.xajax-joomla.com/)In clear text for all non technicians, if 2 #Joomla! plugins use XAJAX on the same page, it wont work! -> I am forced to use a trick and change some code for the next OpenComment version (3.0.11).

 Please use the forum [forums.waltercedric.com](http://forums.waltercedric.com) to report problems, ideas …

 Help, donations, support is always welcome. I am also accepting code bounty (implementing functionnalities You need for money)

Downloadon my site or at [Joomla Forge](http://forge.joomla.org/sf/sfmain/do/home)

And for the future?  
i will add functionnalities on a request basis, the next version 3.0.11 has already a better css integration and a "search input field" in the comments panel.