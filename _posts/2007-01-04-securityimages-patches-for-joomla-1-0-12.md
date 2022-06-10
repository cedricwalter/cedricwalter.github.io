---
id: 2820
title: 'Securityimages patches for Joomla! 1.0.12'
date: '2007-01-04T19:43:01+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2820'
permalink: /joomla/securityimages-patches-for-joomla-1-0-12/
tags:
    - joomla
    - securityimages
---

<span style="font-weight: bold;">Securityimages patches for #Joomla! 1.0.12 can e found in my download section!

| Scenario of installation |  |
|---|---|
| New #Joomla! install | Install <small style="font-family: Courier New,Courier,monospace;">Joomla\_1.0.12-Stable-Full\_Package.zip</small> from [www.joomla.org](http://www.joomla.org/) |
| You are using #Joomla! 1.0.11 | 1. First upgrade to #Joomla! 1.0.12 using <small style="font-family: Courier New,Courier,monospace;">Joomla\_1.0.11\_to\_1.0.12-Stable-Patch\_Package.zip </small>from [www.joomla.org](http://www.joomla.org/) 2. Then apply my #Joomla! core patches:       <small><span style="font-family: Courier New,Courier,monospace;">JoomlaPatches1.0.12-v1.0.x for securityimages 3.0.8 only.zip</small> <span style="font-weight: bold; color: rgb(255, 0, 0);">or        <small><span style="font-family: Courier New,Courier,monospace;">JoomlaPatches1.0.12-v1.0.0 for securityimages 4.x only.zip       </small>depending on Your SecuriyImages version |
| You are already using #Joomla! 1.0.12 | 1. Just apply my #Joomla! core patches:       <small><span style="font-family: Courier New,Courier,monospace;">JoomlaPatches1.0.12-v1.0.x for securityimages 3.0.8 only.zip</small> <span style="font-weight: bold; color: rgb(255, 0, 0);">or        <small><span style="font-family: Courier New,Courier,monospace;">JoomlaPatches1.0.12-v1.0.0 for securityimages 4.x only.zip       </small>depending on Your SecuriyImages version |
| You use an older version of SecuriyImages | You’ll have to upgrade to either SecuriyImages 3.0.x or 4.1.x first! 4.1.x is able to protect the administrator section as well and is required by OpenComment 3.0.24 |
| You use an older version of Joomla! | You are urge to upgrade! |

The install is complex, but You have to understand that

- My code is not in the #Joomla! kernel core,
- Joomla kernel core does not have elegant hook just in the area SecurityImages need (like event registering callback functions before/after form validation)
- I have to deliver new patches for each new core version of #Joomla! team.