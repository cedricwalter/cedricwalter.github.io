---
id: 3408
title: 'Record testcases with Selenium IDE'
date: '2008-04-13T18:37:07+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/04/open.qa_.logo_thumb.gif
---

| [![open.qa.logo](/assets/images/2008/04/open.qa_.logo_thumb.gif)](/assets/images/2008/04/open.qa_.logo_.gif) | **Selenium** is a test tool for web applications. Selenium tests run **directly in a browser**, just like real users do. It runs in Internet Explorer, Mozilla and Firefox on Windows, #Linux, and Macintosh, Safari on the Mac. They have plans to target Safari on the iPhone in some months. The tool is free and available under Apache 2.0. |
|---|---|

- [Install the firefox plugin](http://selenium-ide.openqa.org/download.jsp), note the latest version work only in Firefox 2.0 not in 3.0Beta!
- Install also [XPather](https://addons.mozilla.org/extensions/moreinfo.php?id=1192) another Firefox extension, very helpful to get the elements XAPTH in pages.
- Of course restart Firefox
- Open either the sidebar (go to menu View, Sidebar, Selenium IDE) or the floating windows   
    (go to menu Tools – Selenium IDE)
- Go to the page where you wan to test something
- Put the right Base URL (A) and press button (B) when ready   
    [![doYourFirstSeleniumTest](/assets/images/2008/04/doYourFirstSeleniumTest_thumb.png)](/assets/images/2008/04/doYourFirstSeleniumTest.png)

- You can now act like any user, enter data, change values, click on links
- When You wan to add a check, you can at any time right click on a HTML element   
    (a text, a cell, a button…) to see what selenium is proposing you.   
    [![doYourFirstSeleniumTest.2](/assets/images/2008/04/doYourFirstSeleniumTest.2_thumb.png)](http://www.waltercedric.com/images/stories/fb3471ee3ca9_F98F/doYourFirstSeleniumTest.2.png)
- Not all possibility are proposed…so this is where knowing the element XPATH is helping…   
    for more complex check, you can right click on any element and get the XPATH   
    [![doYourFirstSeleniumTest.3](/assets/images/2008/04/doYourFirstSeleniumTest.3_thumb.png)](http://www.waltercedric.com/images/stories/fb3471ee3ca9_F98F/doYourFirstSeleniumTest.3.png) [![doYourFirstSeleniumTest.4](/assets/images/2008/04/doYourFirstSeleniumTest.4_thumb.png)](http://www.waltercedric.com/images/stories/fb3471ee3ca9_F98F/doYourFirstSeleniumTest.4.png)   
    now just cut and paste and feed the command (I choose verifytextPresent)   
    [![doYourFirstSeleniumTest.5](/assets/images/2008/04/doYourFirstSeleniumTest.5_thumb.png)](http://www.waltercedric.com/images/stories/fb3471ee3ca9_F98F/doYourFirstSeleniumTest.5.png)
- Don’t forget to stop the engine when you are finished or the script may be huge.
- Into C, You can now cut and paste one or many lines, insert new commands (add more assert)
- And replay [![seleniumSecurityImages2](/assets/images/2008/04/seleniumSecurityImages2_thumb.png)](http://www.waltercedric.com/images/stories/fb3471ee3ca9_F98F/seleniumSecurityImages2.png) till the bar is green

# Attention:**

- Do not abuse XPATH expression as it somehow hard code the previous position of the element in the page.
- Try to make each test run on its own, do not expect that the test before is successful (so login. test functionality 1, logout)
- Keep unit test small,
- Keep all test in a repository (CVS or SVN) or many backup.

# Read also:**

- [Develop web testcases using Selenium IDE in Firefox for Joomla!](http://www.waltercedric.com/mambo-mainmenu-102/222-development/1309-develop-web-testcases-using-selenium-ide-in-firefox-for-joomla.html)