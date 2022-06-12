---
id: 4308
title: 'Single Sign On?'
date: '2009-04-30T20:23:02+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4308'

header:
  teaser: /assets/images/2009/04/openidlogo2_thumb.png
---

[![openid-logo-2](/assets/images/2009/04/openidlogo2_thumb.png "openid-logo-2")](/assets/images/2009/04/openidlogo2.png) I have now way to many sub domains and websites to not try to make the registration or login process more easier

- <http://www.waltercedric.com> #Joomla (PHP) the site you are reading,
- <http://wiki.waltercedric.com> MediaWiki (PHP) as documentation hub,
- <http://forums.waltercedric.com> PhpBB3 (PHP ) as support forums,
- <http://bamboo.waltercedric.com> Bamboo (Java) as continuous build server,
- <http://teamcity.waltercedric.com> TeamCity (Java) as continuous build server,
- <http://bugs.waltercedric.com> JIRA (Java) as bug tracker,
- <http://maven.waltercedric.com> Artifactory (Java) as #Maven repository,
- <http://demo2.waltercedric.com> Demo server for #Joomla 1.5 stuff.

Each of the above domains/sub domains has its own registration and login process. I would like as soon as possible try to make people register only once and let them have an easy access to all these services.

## SSO

[Single Sign on?](http://en.wikipedia.org/wiki/Single_sign-on)

Basically One solution would be likely to use [OpenID](http://openid.net/)

> **OpenID** is an open, decentralized standard for user authentication and access control, allowing users to log onto many services with the same digital identity. As such, it replaces the common login process that uses a login-name and a password, by allowing a user to log in once and gain access to the resources of multiple software systems. \[[WikiPedia](http://en.wikipedia.org/wiki/Openid)\]<sup>[](http://en.wikipedia.org/wiki/Openid#cite_note-eeldon-0)</sup>

## Advantages

- Joomla, Bamboo, JIRA are able to use OpenID
- More than 200 million users worldwide
- Free implementation and sometimes even some ready to use plugin

## But

1200 users are registered, and how do I migrate them all??? not all are active but I can just delete their account…