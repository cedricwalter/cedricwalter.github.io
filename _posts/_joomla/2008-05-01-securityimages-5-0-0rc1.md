---
id: 3435
title: 'SecurityImages 5.0.0RC1'
date: '2008-05-01T20:46:35+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3435'

header:
  teaser: /assets/images/2008/04/com_securityimages_thumb.png
---

| [![com_securityimages](/assets/images/2008/04/com_securityimages_thumb.png)](/assets/images/2008/05/com_securityimages.png) | Thanks to the feedback from my [forum](http://forums.waltercedric.com), I am happy to offer you SecurityImages 5.0.0RC1, which I hope is now bug free. A big documenting effort is now starting in my WIKI (wiki.waltercedric.com) in the new section    <http://wiki.waltercedric.com/index.php?title=SecurityImages5.0.X>  Writing articles there has never been easier thank to a WYSIWYG editor. Feel free to extend the documentation there. |
|---|---|

# BUG**: white page report after check. was occurring because of not initialized parameter in system plugin.   
# BUG**: In administrator back-end, clicking in menu Components – SecurityImages instead of a submenu directly   
was showing a white page, this was because of a non default task in the controller class   
# BUG**: Some people report an error while using a language different than English. Since SecurityImages is not   
fully localized, fallback to English (en-GB.com\_securityimages.ini) if there is no file available.   
# BUG**: fixed non existing static (about, manual) files and fallback to English instead of crashing   
# NEW**: add missing translations for file operations.   
# NEW**: sort languages files and remove duplicated entries   
# BUG**: Found thanks to regression testing   
# *Fatal error**: Call to undefined function sendMailLogsToAdmin() in   
\\**administrator\\components\\com\_securityimages\\class\\logUtils.php** on line **82***

# <font color="#ff8000">Note 1:** A recaptcha (<http://recaptcha.net/>) integration is currently developed as a plugin for SecurityImages.

# <font color="#ff8000">Note 2:** Use of SecurityImages for #Joomla!1.0 have not seen any update since a while. I will now back port some   
changes and solve issues in the new version **4.3.3** to be available soon.

# <font color="#ff8000">Note 3:** install the latest component (com\_securityimages5.0.0RC1.zip) and   
system plugin (plugin\_system\_securityimages5.0.0RC1.zip)

## Some Words on regression testing

# NEW**: regression testing with Selenium (<http://selenium-ide.openqa.org/>).This is now possible thanks to a   
new switch in administrator panel.   
This put SecurityImages in such a state that it will accept all user submissions if they enter ‘test123’.   
This mode is only useful for regression testing using automated tools. This mode is required because   
there is otherwise no way to recognize the captcha without huge CPU cost.   
[![securityimages5.0.0RC1](/assets/images/2008/05/securityimages5.0.0RC1_thumb.png)](/assets/images/2008/05/securityimages5.0.0RC1.png)   
# DONT USE FOR PRODUCTION SITE.** This is only useful for developer or person wanting to judge the   
quality of the version. Selenium tests are located in a zip file name securityimages\_selenium.zip located in   
administrator\\components\\com\_securityimages\\selenium\\securityimages\_selenium.zip   
   
To start Selenium Test cases, there is currently many ways (PHP, Java, HTML). The most easiest for End-user   
or amateur is to use Selenium IDE (a Firefox plugins),

# Prerequisites**:

- All tests are trying to log to admin panel if needed using the login/password **admin**, will avoid that in a future version
- All tests are made for testing hncaptcha, but still try to create images using all other plugins
- Currently 26 tests are available.

# How to start TestCases**

1. Install the plugin for Firefox [download now](http://selenium-ide.openqa.org/download.jsp)
2. Un compress all testcases from zip securityimages\_selenium.zip   
    
3. Start the plugin by going to Firefox menu **Tools** – **Selenium IDE**
4. A floating windows open, go to Menu **File** – **Open Testsuite**
5. Open the file securityimages.testsuite
6. Adapt the Base URL to point to the root of your Joomla installation
7. Run all tests or only a bunch