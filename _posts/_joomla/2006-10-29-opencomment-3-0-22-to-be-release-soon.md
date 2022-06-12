---
id: 2746
title: 'OpenComment 3.0.22 to be release soon'
date: '2006-10-29T21:52:04+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2746'

header:
  teaser: /assets/images/2006/10/tn_whats.Next_.In_.OpenComment-3.0.22.png
tags:
    - joomla
---

It will be a huge patch release this time. Let me first start with the new features list…

- <span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: Search contains the word "search" now as default.
- <span style="font-weight: bold; color: rgb(51, 51, 255);">NEW:Following rules apply now to the form field "Name":  
    If a user is logged in, he can not change his name  
    If a guest is around, he can change his name only if the admin settings "name field: No Yes Is the field name read only?" is set to NO
- <span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: Avoid logged in user to rate up and down his own comments (he will never be able to rate them). But logged in user can rate his comments as guest!
- <span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: Auto moderation function: this do not auto publish automatically comments based on external conditions.  
    done: check if one url is in comment or title  
    future: check if comment contains at least one or more bad words.
- <span style="font-weight: bold; color: rgb(51, 51, 255);">NEW:  Use a lot of new CSS tags.
- <span style="font-weight: bold; color: rgb(51, 51, 255);">NEW: Replying to an existing comment also now Quote automatically the text, not only the title.

And the never ending list of bugs corrected…

- <span style="font-weight: bold; color: rgb(255, 102, 102);">BUG: Edit comment CSS file was no more available…
- <span style="font-weight: bold; color: rgb(255, 102, 102);">BUG: Administrator notification was always disabled during save of configuration settings.
- <span style="font-weight: bold; color: rgb(255, 102, 102);">BUG: if "allow anonymous entry" then comment form is visible. If "allow anonymous entry" = false then only logged in user see the comment form
- <span style="font-weight: bold; color: rgb(255, 102, 102);">BUG: Comment header missing space
- <span style="font-weight: bold; color: rgb(255, 102, 102);">BUG: "Additionally the title seems mandatory, but if you don’t put title you are not able to  
    submit again the message since it says "you already posted a comment"…"  
    1. The anti posting measure can now be switch off  
    2. anti posting check is now done after form input validations.
- <span style="font-weight: bold; color: rgb(255, 102, 102);">BUG: Replying to a comment with special characters in the title was not working, tested in Firefox and IE
- <span style="font-weight: bold; color: rgb(255, 102, 102);">BUG: Back end: Settings/InputForm/name field = Yes. BUT… name field in comment input form is still editable.

Translations, new keys are in each language file.  


- Dear translations team, Ive duplicated new English keys in other files. (Hungarian, german)

Anti Spamming measures  
OpenComment do not need Captcha (com\_securityimages component) or Hashcash (com\_Hashcash). And this because OpenComment use internally a sort of HASHCASH. This should be more than enough against spammers, If it ever failed, I will switch Captcha on in less than a day. I simply do not want to force users resolving a Captcha when I can propose something different.

Here also a freemind mindmap with what should be in that release.

[![](/assets/images/2006/10/tn_whats.Next_.In_.OpenComment-3.0.22.png)](/assets/images/2006/10/whats.Next_.In_.OpenComment-3.0.22.gif)

Concerning the development, I must also says, that it is not a long term objective for me to try to make OpenComment a commercial grade application, at least not alone ;-). If You want a more complex/easy to use commenting system, maybe You’ll have to look at [OpenWordpress](http://projects.j-prosolution.com/en/projects/os-projects/project-openwp.html) or any equivalent.