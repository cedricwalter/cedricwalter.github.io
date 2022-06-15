---
id: 3174
title: 'SecurityImages and Joomla! 1.5'
date: '2008-02-03T12:42:08+01:00'
author: 'Cédric Walter'



tags:
    - joomla
    - securityimages
---

 **Some words about #Joomla! 1.5 and my components**

 **Securityimages 5.0**

 I have translated blindly Securityimages 4.2.3 from #Joomla! 1.X to Joomla! 1.5 just by making it work, so the install work and minimal change are done.

 This has the following advantages:

- Migration of code is done by doing minimal changes to the code, header for security, going through Mysql factories, using new function for menu
- No changes done in the API, **previous 3rd party components** which **are working in legacy mode**, will still work: Virtuemart, #Joomla board, <span id="msg_1210">RSGallery2, <span id="msg_1258">FacileForms, <span id="msg_1270">DFContact, <span id="msg_1292">fireboard, <span id="msg_1343">Phil-A-Form v1.6.2, <span id="msg_1355">SMF integration, <span id="msg_1318">JA Submit, <span id="msg_1461">JUser, <span id="msg_1645">DT Register, Akobook, Opencomment jst to name a few….
- Not using the MVC model right now

 This version is nearly existing NOW (but with admin panel problem), I call it **Securityimages 5.0**, I am working on it this afternoon, and maybe tommorow evening as well

  **Securityimages 6.0**

- will use the MVC model of Joomla! 1.5
- will break compatibility with existing applications

 This version DO NOT EXIST right now, but let’s call it Securityimages 6.0