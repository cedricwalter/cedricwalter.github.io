---
id: 3422
title: 'Regression testing of SecurityImages 5.0.X'
date: '2008-04-13T18:43:04+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3422'
permalink: /joomla/regression-testing-of-securityimages-5-0-x/
image: /wp-content/uploads/2008/04/com_securityimages_thumb.png
---

[![com_securityimages](/assets/images/2008/04/com_securityimages_thumb.png) ![joomla_1.5](/assets/images/2008/04/joomla_1.5_thumb.gif)](/assets/images/2008/04/com_securityimages.png)[![open.qa.logo](/assets/images/2008/04/open.qa_.logo_thumb.gif)](/assets/images/2008/04/open.qa_.logo_.gif)

I’ve done my homework today, in order to insured the   
release quality and avoid manual testing of SecurityImages   
at every release, I release Selenium testcases so anybody/   
any developer can run them against their homepage.

# Prerequisites**

- Extract this zip file in a new directory (link soon available)
- Load the test suite (set of tests) named *securityimages.testsuite   
    [![seleniumSecurityImages5](/assets/images/2008/04/seleniumSecurityImages5_thumb.png)](/assets/images/2008/04/seleniumSecurityImages5.png)*

- Take care at the Base URL, in test suite I use <http://localhost/T1> put the right base of course, for example <http://www.yourhost.com/>   
    [![seleniumSecurityImages](/assets/images/2008/04/seleniumSecurityImages_thumb.png)](/assets/images/2008/04/seleniumSecurityImages.png)
- The user login/password has to be changed to an existing user!   
    [![seleniumSecurityImages1](/assets/images/2008/04/seleniumSecurityImages1_thumb.png)](/assets/images/2008/04/seleniumSecurityImages1.png)
- SecurityImages has to be put in TEST mode. This is a new setting in administrator panel. This force SecurityImages in this mode to accept only the word “test123” as captcha response and nothing else. This is because I can not read, or find in the test case the word hidden in the picture without a lot of effort.
- Testsuite is working only for HNcapctha at the moment.
- You can run **all** test cases in the suite by clicking on [![seleniumSecurityImages2](/assets/images/2008/04/seleniumSecurityImages2_thumb.png)](/assets/images/2008/04/seleniumSecurityImages2.png) or just one or two with [![seleniumSecurityImages3](/assets/images/2008/04/seleniumSecurityImages3_thumb.png)](/assets/images/2008/04/seleniumSecurityImages3.png) but in that case don’t forget to also always select the test InitializeTestcases.test (use ALT GR)

| [![seleniumSecurityImages4](/assets/images/2008/04/seleniumSecurityImages4_thumb.png)](/assets/images/2008/04/seleniumSecurityImages4.png) | Currently only 4 tests are not working, and this because selenium can not submit the contact and register form of Joomla! this has nothing to do with my code. |
|---|---|

The next step is to put everything in XINC…

# Read also**

- [Develop web testcases using Selenium IDE in Firefox for Joomla!](https://waltercedric.com/new/?p=3399)
- [Record testcases with Selenium IDE](https://waltercedric.com/new/?p=3408)