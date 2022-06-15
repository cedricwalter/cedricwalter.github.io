---
id: 4149
title: 'SecurityImages 5.2.0 in active development'
date: '2009-02-10T23:56:08+01:00'
author: 'Cédric Walter'



---

Following the [Preview of SecurityImages 5.2.0](https://waltercedric.com/new/?p=3952), I am currently developing a proof of concept using the [Ajax library JQUERY](http://jquery.com/)

> *jQuery is a fast and concise #JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. **jQuery is designed to change the way that you write #JavaScript.***

![smallbox_securityimages](/assets/images/2020/02/smallbox_securityimages.jpg)

I want to allow generated captcha to be checked asynchronously without needing submit of whole page. This is a major complain since the beginning of SecurityImages, as currently users lost their entries in the form in case the captcha challenge get refused.

A lot more check are also done NOW in the Diagnostics page:

- Checking existence of system plugin,
- Ability to display the error message if any of each plugin in one click
- Reload count configured will be displayed,
- A way to create automated error reporting (cut and paste) for better support in my forums

# AND**

A new API inspired from recaptcha.net that will allow me to integrate new system in future without being limited to an image (why not having a flash or video in future?). This API fully use **the #Joomla! event system** so **less code** to write for all 3rd party developers and **less dependencies**.

Stay tuned!