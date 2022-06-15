---
id: 3399
title: 'Develop web testcases using Selenium IDE in Firefox for Joomla!'
date: '2008-04-12T12:53:55+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/04/open.qa_.logo_thumb.gif
---

| [![open.qa.logo](/assets/images/2008/04/open.qa_.logo_thumb.gif)](/assets/images/2008/04/open.qa_.logo_.gif)    **Selenium** is a test tool for web applications. Selenium tests run **directly in a browser**, just like real users do. It runs in Internet Explorer, Mozilla and Firefox on Windows, #Linux, and Macintosh, Safari on the Mac. They have plans to target Safari on the iPhone in some months. The tool is free and available under Apache 2.0. | **Since I have clearly quality issues during the development/releasing of my components for #Joomla!, I am trying now to use the same tooling I daily use in java EE solutions for PHP…In this series I will present you some ideas (Unit testing, Continuous integration, code quality) that you may want to put in use as well.** |
|---|---|

The quickest way to learn Selenium is via a Firefox plugin called [Selenium IDE](http://selenium.openqa.org/index.html#Selenium_IDE). It is quite compelling   
for developing tests in and quickly trying out Selenium before choosing Selenium for your project.

There are two modes of operation for Selenium – [Core](http://selenium.openqa.org/index.html#Selenium_Core)[ ](http://selenium.openqa.org/index.html#core)and [Remote Control (RC)](http://selenium.openqa.org/index.html#Selenium_Remote_Control). Remote Control   
mode also has a related capability called [Selenium Grid](http://selenium.openqa.org/index.html#Selenium_Grid) that allows you to throw hardware at tests   
to make it all faster.

# This tools is able to:**

- Simulate any action a human user may do either with the help of the keyboard or the mouse,   
    this go from entering a text to select values in select list.
- These workflow can be save and replay at any time and any speed.
- You may group a set of tests and form a test suite very easily.
- Export tests to Ruby, Python, Perl, #Java .Net to run them in a non graphical environment ().

Selenium is made of 3 components:

- [Selenium Core](http://www.openqa.org/selenium-core/) : the core must be installed on your server where the web applications are running.
- [Selenium IDE](http://www.openqa.org/selenium-ide/) : is a Firefox/IE/Mozilla extension Firefox able to record, execute tests and test suites
- [Selenium Remote Control](http://www.openqa.org/selenium-rc) is a server which let you execute tests targeting many different browser,   
    Firefox, Internet Explorer, opera and different operating system GNU/Linux,Mac OS and MS Windows   
    in also many different languages Ruby, Python, Perl, Java .Net.

Also don’t use Selenium for load testing web applications!, use Apache JMETER instead. Attention Selenium   
 has some issues when he has to work on 2 windows at the same time (pop -up).

Today let just try Selenium IDE

To make it work with Joomla!, or with any other web applications, just install the Firefox plugins, and start   
it by going to the tools menu of Firefox.

Lets say that we want to test the contact page of my site for proper operations…In Firefox, go to the menu **Tools**

[![selenium1](/assets/images/2008/04/selenium1_thumb.png)](/assets/images/2008/04/selenium1.png)

This will open a floating windows, which let you define a script step by step in the windows **Script**

You may come with a test case similar to the one presented here:

[![selenium-joomla-test](/assets/images/2008/04/seleniumjoomlatest_thumb.png)](/assets/images/2008/04/seleniumjoomlatest.png)

The number of commands is huge, but well documented in the tab **reference (B)**

The base URL is my site ([http://www.waltercedric.com](https://waltercedric.com/new/?p=45)), the test case, open the contact page, check the   
title of the page, enter some values in form, check for button and texts and submit the form.

The menu [![selenium2](/assets/images/2008/04/selenium2_thumb.png)](/assets/images/2008/04/selenium2.png) let you run the test by clicking on [![selenium3](/assets/images/2008/04/selenium3_thumb.png)](/assets/images/2008/04/selenium3.png) you can see the   
result, if everything is green then the test has succeed.

[![selenium4](/assets/images/2008/04/selenium4_thumb.png)](/assets/images/2008/04/selenium4.png)

and you see every step of the test case in the browser windows:

[![selenium6](/assets/images/2008/04/selenium6_thumb.png)](/assets/images/2008/04/selenium6.png)

As you see it is quite easy to develop a script to test a page, test can be saved on disk in different format,   
 so you can execute them in Selenium Core

[![selenium5](/assets/images/2008/04/selenium5_thumb.png)](/assets/images/2008/04/selenium5.png)

So the test developed for testing the contact page of Joomla! now look like:

```
 1:  package com.example.tests;
```

```
<span class="lnum">   2:   
```

```
 3:  import com.thoughtworks.selenium.*;
```

```
<span class="lnum">   4:  import java.util.regex.Pattern;
```

```
 5:   
```

```
<span class="lnum">   6:  <span class="kwrd">public <span class="kwrd">class NewTest extends SeleneseTestCase {
```

```
 7:      <span class="kwrd">public <span class="kwrd">void setUp() throws Exception {
```

```
<span class="lnum">   8:          setUp(<span class="str">"http://www.waltercedric.com/", <span class="str">"*chrome");
```

```
 9:      }
```

```
<span class="lnum">  10:      <span class="kwrd">public <span class="kwrd">void testNew() throws Exception {
```

```
11:          <span class="rem">// selenium.("http://www.waltercedric.com/-contact-me.html");
```

```
<span class="lnum">  12:          assertEquals(<span class="str">"Contact - Cedric Walter", selenium.getTitle());
```

```
13:          selenium.type(<span class="str">"contact_name", <span class="str">"cedric");
```

```
<span class="lnum">  14:          selenium.type(<span class="str">"contact_email", <span class="str">"a@a.com");
```

```
15:          selenium.type(<span class="str">"contact_subject", <span class="str">"Selenium is great, try it");
```

```
<span class="lnum">  16:          verifyTrue(selenium.isTextPresent(<span class="str">"Enter your Message:"));
```

```
17:          selenium.type(<span class="str">"contact_text", <span class="str">"Hi Cedric. selenium would be cool for testing securityimages!");
```

```
<span class="lnum">  18:          verifyTrue(selenium.isTextPresent(<span class="str">"Send"));
```

```
19:          selenium.submit(<span class="str">"emailForm");
```

```
<span class="lnum">  20:          selenium.waitForPageToLoad(<span class="str">"30000");
```

```
21:      }
```

```
<span class="lnum">  22:  }
```

 .csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, “Courier New”, courier, monospace; background-color: #ffffff; /\*white-space: pre;\*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; }

Or better in PHP so you can reuse it in [XINC continuous integration server](http://code.google.com/p/xinc/) (more to come on XINC in a future article)

```
 1:  <?php
```

```
<span class="lnum">   2:   
```

```
 3:  require_once <span class="str">'PHPUnit/Extensions/SeleniumTestCase.php';
```

```
<span class="lnum">   4:   
```

```
 5:  <span class="kwrd">class Example extends PHPUnit_Extensions_SeleniumTestCase
```

```
<span class="lnum">   6:  {
```

```
 7:    <span class="kwrd">function setUp()
```

```
<span class="lnum">   8:    {
```

```
 9:      $<span class="kwrd">this->setBrowser(<span class="str">"*chrome");
```

```
<span class="lnum">  10:      $<span class="kwrd">this->setBrowserUrl(<span class="str">"http://www.waltercedric.com/");
```

```
11:    }
```

```
<span class="lnum">  12:   
```

```
13:    <span class="kwrd">function testMyTestCase()
```

```
<span class="lnum">  14:    {
```

```
15:      <span class="rem">// $this->("http://www.waltercedric.com/-contact-me.html");
```

```
<span class="lnum">  16:      $<span class="kwrd">this->assertEquals(<span class="str">"Contact - Cedric Walter", $<span class="kwrd">this->getTitle());
```

```
17:      $<span class="kwrd">this->type(<span class="str">"contact_name", <span class="str">"cedric");
```

```
<span class="lnum">  18:      $<span class="kwrd">this->type(<span class="str">"contact_email", <span class="str">"a@a.com");
```

```
19:      $<span class="kwrd">this->type(<span class="str">"contact_subject", <span class="str">"Selenium is great, try it");
```

```
<span class="lnum">  20:      <span class="kwrd">try {
```

```
21:          $<span class="kwrd">this->assertTrue($<span class="kwrd">this->isTextPresent(<span class="str">"Enter your Message:"));
```

```
<span class="lnum">  22:      } <span class="kwrd">catch (PHPUnit_Framework_AssertionFailedError $e) {
```

```
23:          array_push($<span class="kwrd">this->verificationErrors, $e->toString());
```

```
<span class="lnum">  24:      }
```

```
25:      $<span class="kwrd">this->type(<span class="str">"contact_text", <span class="str">"Hi Cedric. selenium would be cool for testing securityimages!");
```

```
<span class="lnum">  26:      <span class="kwrd">try {
```

```
27:          $<span class="kwrd">this->assertTrue($<span class="kwrd">this->isTextPresent(<span class="str">"Send"));
```

```
<span class="lnum">  28:      } <span class="kwrd">catch (PHPUnit_Framework_AssertionFailedError $e) {
```

```
29:          array_push($<span class="kwrd">this->verificationErrors, $e->toString());
```

```
<span class="lnum">  30:      }
```

```
31:      $<span class="kwrd">this->submit(<span class="str">"emailForm");
```

```
<span class="lnum">  32:      $<span class="kwrd">this->waitForPageToLoad(<span class="str">"30000");
```

```
33:    }
```

```
<span class="lnum">  34:  }
```

```
35:  ?>
```

 .csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, “Courier New”, courier, monospace; background-color: #ffffff; /\*white-space: pre;\*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; }

As soon as You have a set of tests, this can form a Test Suite.

SecurityImages for Joomla create Captcha, so it is quite difficult for a tool to pass the Turin test   
(aka recognize the scrambled images), this point apart, I am now developing testcases to test the   
 admin backend, frontend Joomla! patches. These test will be available in the component itself, so   
 anybody can run them with little efforts.

# Read more at:**

- Selenium homepage <http://selenium-ide.openqa.org/>
- Selenium [Documentation](http://selenium-ide.openqa.org/documentation.jsp)
- Selenium [Wiki](http://wiki.openqa.org/display/SIDE/Home)
- Selenium [User Forums](http://selenium-ide.openqa.org/userForums.jsp)

# Here is the list of all commands, use search in page to quickly find the right command.**

<dl><dt>**addLocationStrategy ( strategyName,functionDefinition )** </dt><dd>Defines a new function for Selenium to locate elements on the page. For example, if you </dd><dd>define the strategy “foo”, and someone runs click(“foo=blah”), we’ll run your function, passing</dd><dd> you the string “blah”, and click on the element that your function returns, or throw an “Element</dd><dd> not found” error if your function returns null. We’ll pass three arguments to your function: - locator: the string the user passed in
- inWindow: the currently selected window
- inDocument: the currently selected document

 The function must return null if the element can’t be found.

Arguments:

- strategyName – the name of the strategy to define; this should use only letters \[a-zA-Z\] with
- no spaces or other punctuation.
- functionDefinition – a string defining the body of a function in JavaScript. For example: return inDocument.getElementById(locator);

</dd><dt>**# addSelection" title="addSelection"></a>addSelection ( locator,optionLocator )** </dt><dd>Add a selection to the set of selected options in a multi-select element using an option locator. </dd><dd>@see #doSelect for details of option locators Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference.html) identifying a multi-select box
- optionLocator – an option locator (a label by default)

</dd><dt>**# allowNativeXpath" title="allowNativeXpath"></a>allowNativeXpath ( allow )** </dt><dd>Specifies whether Selenium should use the native in-browser implementation of XPath (if any native</dd><dd> version is available); if you pass “false” to this function, we will always use our pure-JavaScript xpath</dd><dd> library. Using the pure-JS xpath library can improve the consistency of xpath element locators </dd><dd>between different browser vendors, but the pure-JS version is much slower than the native implementations. Arguments:

- allow – boolean, true means we’ll prefer to use native XPath; false means we’ll only use JS XPath

</dd><dt>**# altKeyDown" title="altKeyDown"></a>altKeyDown ( )** </dt><dd>Press the alt key and hold it down until doAltUp() is called or a new page is loaded. </dd><dt>**# altKeyUp" title="altKeyUp"></a>altKeyUp ( )** </dt><dd>Release the alt key. </dd><dt>**# answerOnNextPrompt" title="answerOnNextPrompt"></a>answerOnNextPrompt ( answer )** </dt><dd>Instructs Selenium to return the specified answer string in response to the next JavaScript </dd><dd>prompt \[window.prompt()\]. Arguments:

- answer – the answer to give in response to the prompt pop-up

</dd><dt>**# assignId" title="assignId"></a>assignId ( locator,identifier )** </dt><dd>Temporarily sets the “id” attribute of the specified element, so you can locate it in the </dd><dd>future using its ID rather than a slow/complicated XPath. This ID will disappear once the page is reloaded. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_3.html) pointing to an element
- identifier – a string to be used as the ID of the specified element

</dd><dt>**# break" title="break"></a>break ( )** </dt><dd>Halt the currently running test, and wait for the user to press the Continue button. This command </dd><dd>is useful for debugging, but be careful when using it, because it will force automated tests to hang </dd><dd>until a user intervenes manually. </dd><dt>**# captureEntirePageScreenshot" title="captureEntirePageScreenshot"></a>captureEntirePageScreenshot ( filename )** </dt><dd>Saves the entire contents of the current window canvas to a PNG file. Currently this only works in </dd><dd>Mozilla and when running in chrome mode. Contrast this with the captureScreenshot command, </dd><dd>which captures the contents of the OS viewport (i.e. whatever is currently being displayed on </dd><dd>the monitor), and is implemented in the RC only. Implementation mostly borrowed from the </dd><dd>Screengrab! Firefox extension. Please see http://www.screengrab.org for details. Arguments:

- filename – the path to the file to persist the screenshot as. No filename extension will be appended by default. Directories will not be created if they do not exist, and an exception will be thrown, possibly by native code.

</dd><dt>**# check" title="check"></a>check ( locator )** </dt><dd>Check a toggle-button (checkbox/radio) Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_4.html)

</dd><dt>**# chooseCancelOnNextConfirmation" title="chooseCancelOnNextConfirmation"></a>chooseCancelOnNextConfirmation ( )** </dt><dd>By default, Selenium’s overridden window.confirm() function will return true, as if the user had manually clicked OK; after running this command, the next call to confirm() will return false, as if the user had clicked Cancel. Selenium will then resume using the default behavior for future confirmations, automatically returning true (OK) unless/until you explicitly call this command for each confirmation. </dd><dt>**# chooseOkOnNextConfirmation" title="chooseOkOnNextConfirmation"></a>chooseOkOnNextConfirmation ( )** </dt><dd>Undo the effect of calling chooseCancelOnNextConfirmation. Note that Selenium’s overridden window.confirm() function will normally automatically return true, as if the user had manually clicked OK, so you shouldn’t need to use this command unless for some reason you need to change your mind prior to the next confirmation. After any confirmation, Selenium will resume using the default behavior for future confirmations, automatically returning true (OK) unless/until you explicitly call chooseCancelOnNextConfirmation for each confirmation. </dd><dt>**# click" title="click"></a>click ( locator )** </dt><dd>Clicks on a link, button, checkbox or radio button. If the click action causes a new page to load (like a link usually does), call waitForPageToLoad. Arguments:

- locator – an element locator

</dd><dt>**# clickAt" title="clickAt"></a>clickAt ( locator,coordString )** </dt><dd>Clicks on a link, button, checkbox or radio button. If the click action causes a new page to load (like a link usually does), call waitForPageToLoad. Arguments:

- locator – an element locator
- coordString – specifies the x,y position (i.e. – 10,20) of the mouse event relative to the element returned by the locator.

</dd><dt>**# close" title="close"></a>close ( )** </dt><dd>Simulates the user clicking the “close” button in the titlebar of a popup window or tab. </dd><dt>**# contextMenu" title="contextMenu"></a>contextMenu ( locator )** </dt><dd>Simulates opening the context menu for the specified element (as might happen if the user “right-clicked” on the element). Arguments:

- locator – an element locator

</dd><dt>**# contextMenuAt" title="contextMenuAt"></a>contextMenuAt ( locator,coordString )** </dt><dd>Simulates opening the context menu for the specified element (as might happen if the user “right-clicked” on the element). Arguments:

- locator – an element locator
- coordString – specifies the x,y position (i.e. – 10,20) of the mouse event relative to the element returned by the locator.

</dd><dt>**# controlKeyDown" title="controlKeyDown"></a>controlKeyDown ( )** </dt><dd>Press the control key and hold it down until doControlUp() is called or a new page is loaded. </dd><dt>**# controlKeyUp" title="controlKeyUp"></a>controlKeyUp ( )** </dt><dd>Release the control key. </dd><dt>**# createCookie" title="createCookie"></a>createCookie ( nameValuePair,optionsString )** </dt><dd>Create a new cookie whose path and domain are same with those of current page under test, unless you specified a path for this cookie explicitly. Arguments:

- nameValuePair – name and value of the cookie in a format “name=value”
- optionsString – options for the cookie. Currently supported options include ‘path’, ‘max\_age’ and ‘domain’. the optionsString’s format is “path=/path/, max\_age=60, domain=.foo.com”. The order of options are irrelevant, the unit of the value of ‘max\_age’ is second. Note that specifying a domain that isn’t a subset of the current domain will usually fail.

</dd><dt>**# deleteAllVisibleCookies" title="deleteAllVisibleCookies"></a>deleteAllVisibleCookies ( )** </dt><dd>Calls deleteCookie with recurse=true on all cookies visible to the current page. As noted on the documentation for deleteCookie, recurse=true can be much slower than simply deleting the cookies using a known domain/path. </dd><dt>**# deleteCookie" title="deleteCookie"></a>deleteCookie ( name,optionsString )** </dt><dd>Delete a named cookie with specified path and domain. Be careful; to delete a cookie, you need to delete it using the exact same path and domain that were used to create the cookie. If the path is wrong, or the domain is wrong, the cookie simply won’t be deleted. Also note that specifying a domain that isn’t a subset of the current domain will usually fail. Since there’s no way to discover at runtime the original path and domain of a given cookie, we’ve added an option called ‘recurse’ to try all sub-domains of the current domain with all paths that are a subset of the current path. Beware; this option can be slow. In big-O notation, it operates in O(n\*m) time, where n is the number of dots in the domain name and m is the number of slashes in the path. Arguments:

- name – the name of the cookie to be deleted
- optionsString – options for the cookie. Currently supported options include ‘path’, ‘domain’ and ‘recurse.’ The optionsString’s format is “path=/path/, domain=.foo.com, recurse=true”. The order of options are irrelevant. Note that specifying a domain that isn’t a subset of the current domain will usually fail.

</dd><dt>**# doubleClick" title="doubleClick"></a>doubleClick ( locator )** </dt><dd>Double clicks on a link, button, checkbox or radio button. If the double click action causes a new page to load (like a link usually does), call waitForPageToLoad. Arguments:

- locator – an element locator

</dd><dt>**# doubleClickAt" title="doubleClickAt"></a>doubleClickAt ( locator,coordString )** </dt><dd>Doubleclicks on a link, button, checkbox or radio button. If the action causes a new page to load (like a link usually does), call waitForPageToLoad. Arguments:

- locator – an element locator
- coordString – specifies the x,y position (i.e. – 10,20) of the mouse event relative to the element returned by the locator.

</dd><dt>**# dragAndDrop" title="dragAndDrop"></a>dragAndDrop ( locator,movementsString )** </dt><dd>Drags an element a certain distance and then drops it Arguments:

- locator – an element locator
- movementsString – offset in pixels from the current location to which the element should be moved, e.g., “+70,-300”

</dd><dt>**# dragAndDropToObject" title="dragAndDropToObject"></a>dragAndDropToObject ( locatorOfObjectToBeDragged,locatorOfDragDestinationObject )** </dt><dd>Drags an element and drops it on another element Arguments:

- locatorOfObjectToBeDragged – an element to be dragged
- locatorOfDragDestinationObject – an element whose location (i.e., whose center-most pixel) will be the point where locatorOfObjectToBeDragged is dropped

</dd><dt>**# dragdrop" title="dragdrop"></a>dragdrop ( locator,movementsString )** </dt><dd>deprecated – use dragAndDrop instead Arguments:

- locator – an element locator
- movementsString – offset in pixels from the current location to which the element should be moved, e.g., “+70,-300”

</dd><dt>**# echo" title="echo"></a>echo ( message )** </dt><dd>Prints the specified message into the third table cell in your Selenese tables. Useful for debugging. Arguments:

- message – the message to print

</dd><dt>**# fireEvent" title="fireEvent"></a>fireEvent ( locator,eventName )** </dt><dd>Explicitly simulate an event, to trigger the corresponding “on*event*” handler. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_5.html)
- eventName – the event name, e.g. “focus” or “blur”

</dd><dt>**# focus" title="focus"></a>focus ( locator )** </dt><dd>Move the focus to the specified element; for example, if the element is an input field, move the cursor to that field. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_6.html)

</dd><dt>**# goBack" title="goBack"></a>goBack ( )** </dt><dd>Simulates the user clicking the “back” button on their browser. </dd><dt>**# highlight" title="highlight"></a>highlight ( locator )** </dt><dd>Briefly changes the backgroundColor of the specified element yellow. Useful for debugging. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_7.html)

</dd><dt>**# ignoreAttributesWithoutValue" title="ignoreAttributesWithoutValue"></a>ignoreAttributesWithoutValue ( ignore )** </dt><dd>Specifies whether Selenium will ignore xpath attributes that have no value, i.e. are the empty string, when using the non-native xpath evaluation engine. You’d want to do this for performance reasons in IE. However, this could break certain xpaths, for example an xpath that looks for an attribute whose value is NOT the empty string. The hope is that such xpaths are relatively rare, but the user should have the option of using them. Note that this only influences xpath evaluation when using the ajaxslt engine (i.e. not “javascript-xpath”). Arguments:

- ignore – boolean, true means we’ll ignore attributes without value at the expense of xpath “correctness”; false means we’ll sacrifice speed for correctness.

</dd><dt>**# keyDown" title="keyDown"></a>keyDown ( locator,keySequence )** </dt><dd>Simulates a user pressing a key (without releasing it yet). Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_8.html)
- keySequence – Either be a string(“” followed by the numeric keycode of the key to be pressed, normally the ASCII value of that key), or a single character. For example: “w”, “119”.

</dd><dt>**# keyPress" title="keyPress"></a>keyPress ( locator,keySequence )** </dt><dd>Simulates a user pressing and releasing a key. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_9.html)
- keySequence – Either be a string(“” followed by the numeric keycode of the key to be pressed, normally the ASCII value of that key), or a single character. For example: “w”, “119”.

</dd><dt>**# keyUp" title="keyUp"></a>keyUp ( locator,keySequence )** </dt><dd>Simulates a user releasing a key. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_10.html)
- keySequence – Either be a string(“” followed by the numeric keycode of the key to be pressed, normally the ASCII value of that key), or a single character. For example: “w”, “119”.

</dd><dt>**# metaKeyDown" title="metaKeyDown"></a>metaKeyDown ( )** </dt><dd>Press the meta key and hold it down until doMetaUp() is called or a new page is loaded. </dd><dt>**# metaKeyUp" title="metaKeyUp"></a>metaKeyUp ( )** </dt><dd>Release the meta key. </dd><dt>**# mouseDown" title="mouseDown"></a>mouseDown ( locator )** </dt><dd>Simulates a user pressing the mouse button (without releasing it yet) on the specified element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_11.html)

</dd><dt>**# mouseDownAt" title="mouseDownAt"></a>mouseDownAt ( locator,coordString )** </dt><dd>Simulates a user pressing the mouse button (without releasing it yet) at the specified location. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_12.html)
- coordString – specifies the x,y position (i.e. – 10,20) of the mouse event relative to the element returned by the locator.

</dd><dt>**# mouseMove" title="mouseMove"></a>mouseMove ( locator )** </dt><dd>Simulates a user pressing the mouse button (without releasing it yet) on the specified element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_13.html)

</dd><dt>**# mouseMoveAt" title="mouseMoveAt"></a>mouseMoveAt ( locator,coordString )** </dt><dd>Simulates a user pressing the mouse button (without releasing it yet) on the specified element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_14.html)
- coordString – specifies the x,y position (i.e. – 10,20) of the mouse event relative to the element returned by the locator.

</dd><dt>**# mouseOut" title="mouseOut"></a>mouseOut ( locator )** </dt><dd>Simulates a user moving the mouse pointer away from the specified element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_15.html)

</dd><dt>**# mouseOver" title="mouseOver"></a>mouseOver ( locator )** </dt><dd>Simulates a user hovering a mouse over the specified element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_16.html)

</dd><dt>**# mouseUp" title="mouseUp"></a>mouseUp ( locator )** </dt><dd>Simulates the event that occurs when the user releases the mouse button (i.e., stops holding the button down) on the specified element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_17.html)

</dd><dt>**# mouseUpAt" title="mouseUpAt"></a>mouseUpAt ( locator,coordString )** </dt><dd>Simulates the event that occurs when the user releases the mouse button (i.e., stops holding the button down) at the specified location. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_18.html)
- coordString – specifies the x,y position (i.e. – 10,20) of the mouse event relative to the element returned by the locator.

</dd><dt>**# open" title="open"></a>open ( url )** </dt><dd>Opens an URL in the test frame. This accepts both relative and absolute URLs. The “open” command waits for the page to load before proceeding, ie. the “AndWait” suffix is implicit. *Note*: The URL must be on the same domain as the runner HTML due to security restrictions in the browser (Same Origin Policy). If you need to open an URL on another domain, use the Selenium Server to start a new browser session on that domain. Arguments:

- url – the URL to open; may be relative or absolute

</dd><dt>**# openWindow" title="openWindow"></a>openWindow ( url,windowID )** </dt><dd>Opens a popup window (if a window with that ID isn’t already open). After opening the window, you’ll need to select it using the selectWindow command. This command can also be a useful workaround for bug SEL-339. In some cases, Selenium will be unable to intercept a call to window.open (if the call occurs during or before the “onLoad” event, for example). In those cases, you can force Selenium to notice the open window’s name by using the Selenium openWindow command, using an empty (blank) url, like this: openWindow(“”, “myFunnyWindow”).

Arguments:

- url – the URL to open, which can be blank
- windowID – the JavaScript window ID of the window to select

</dd><dt>**# pause" title="pause"></a>pause ( waitTime )** </dt><dd>Wait for the specified amount of time (in milliseconds) Arguments:

- waitTime – the amount of time to sleep (in milliseconds)

</dd><dt>**# refresh" title="refresh"></a>refresh ( )** </dt><dd>Simulates the user clicking the “Refresh” button on their browser. </dd><dt>**# removeAllSelections" title="removeAllSelections"></a>removeAllSelections ( locator )** </dt><dd>Unselects all of the selected options in a multi-select element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_19.html) identifying a multi-select box

</dd><dt>**# removeSelection" title="removeSelection"></a>removeSelection ( locator,optionLocator )** </dt><dd>Remove a selection from the set of selected options in a multi-select element using an option locator. @see #doSelect for details of option locators Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_20.html) identifying a multi-select box
- optionLocator – an option locator (a label by default)

</dd><dt>**# runScript" title="runScript"></a>runScript ( script )** </dt><dd>Creates a new “script” tag in the body of the current test window, and adds the specified text into the body of the command. Scripts run in this way can often be debugged more easily than scripts executed using Selenium’s “getEval” command. Beware that JS exceptions thrown in these script tags aren’t managed by Selenium, so you should probably wrap your script in try/catch blocks if there is any chance that the script will throw an exception. Arguments:

- script – the JavaScript snippet to run

</dd><dt>**# select" title="select"></a>select ( selectLocator,optionLocator )** </dt><dd>Select an option from a drop-down using an option locator. Option locators provide different ways of specifying options of an HTML Select element (e.g. for selecting a specific option, or for asserting that the selected option satisfies a specification). There are several forms of Select Option Locator.

- **label**=*labelPattern*: matches options based on their labels, i.e. the visible text. (This is the default.) 
    - label=regexp:^\[Oo\]ther
- **value**=*valuePattern*: matches options based on their values. 
    - value=other
- **id**=*id*: matches options based on their ids. 
    - id=option1
- **index**=*index*: matches an option based on its index (offset from zero). 
    - index=2

If no option locator prefix is provided, the default behaviour is to match on **label**.

Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_21.html) identifying a drop-down menu
- optionLocator – an option locator (a label by default)

</dd><dt>**# selectFrame" title="selectFrame"></a>selectFrame ( locator )** </dt><dd>Selects a frame within the current window. (You may invoke this command multiple times to select nested frames.) To select the parent frame, use “relative=parent” as a locator; to select the top frame, use “relative=top”. You can also select a frame by its 0-based index number; select the first frame with “index=0”, or the third frame with “index=2”. You may also use a DOM expression to identify the frame you want directly, like this: dom=frames\[“main”\].frames\[“subframe”\]

Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_22.html) identifying a frame or iframe

</dd><dt>**# selectWindow" title="selectWindow"></a>selectWindow ( windowID )** </dt><dd>Selects a popup window using a window locator; once a popup window has been selected, all commands go to that window. To select the main window again, use null as the target. Window locators provide different ways of specifying the window object: by title, by internal JavaScript “name,” or by JavaScript variable.

- **title**=*My Special Window*: Finds the window using the text that appears in the title bar. Be careful; two windows can share the same title. If that happens, this locator will just pick one.
- **name**=*myWindow*: Finds the window using its internal JavaScript “name” property. This is the second parameter “windowName” passed to the JavaScript method window.open(url, windowName, windowFeatures, replaceFlag) (which Selenium intercepts).
- **var**=*variableName*: Some pop-up windows are unnamed (anonymous), but are associated with a JavaScript variable name in the current application window, e.g. “window.foo = window.open(url);”. In those cases, you can open the window using “var=foo”.

If no window locator prefix is provided, we’ll try to guess what you mean like this:

1.) if windowID is null, (or the string “null”) then it is assumed the user is referring to the original window instantiated by the browser).

2.) if the value of the “windowID” parameter is a JavaScript variable name in the current application window, then it is assumed that this variable contains the return value from a call to the JavaScript window.open() method.

3.) Otherwise, selenium looks in a hash it maintains that maps string names to window “names”.

4.) If *that* fails, we’ll try looping over all of the known windows to try to find the appropriate “title”. Since “title” is not necessarily unique, this may have unexpected behavior.

If you’re having trouble figuring out the name of a window that you want to manipulate, look at the Selenium log messages which identify the names of windows created via window.open (and therefore intercepted by Selenium). You will see messages like the following for each window as it is opened:

debug: window.open call intercepted; window ID (which you can use with selectWindow()) is “myNewWindow”

In some cases, Selenium will be unable to intercept a call to window.open (if the call occurs during or before the “onLoad” event, for example). (This is bug SEL-339.) In those cases, you can force Selenium to notice the open window’s name by using the Selenium openWindow command, using an empty (blank) url, like this: openWindow(“”, “myFunnyWindow”).

Arguments:

- windowID – the JavaScript window ID of the window to select

</dd><dt>**# setBrowserLogLevel" title="setBrowserLogLevel"></a>setBrowserLogLevel ( logLevel )** </dt><dd>Sets the threshold for browser-side logging messages; log messages beneath this threshold will be discarded. Valid logLevel strings are: “debug”, “info”, “warn”, “error” or “off”. To see the browser logs, you need to either show the log window in GUI mode, or enable browser-side logging in Selenium RC. Arguments:

- logLevel – one of the following: “debug”, “info”, “warn”, “error” or “off”

</dd><dt>**# setCursorPosition" title="setCursorPosition"></a>setCursorPosition ( locator,position )** </dt><dd>Moves the text cursor to the specified position in the given input element or textarea. This method will fail if the specified element isn’t an input element or textarea. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_23.html) pointing to an input element or textarea
- position – the numerical position of the cursor in the field; position should be 0 to move the position to the beginning of the field. You can also set the cursor to -1 to move it to the end of the field.

</dd><dt>**# setMouseSpeed" title="setMouseSpeed"></a>setMouseSpeed ( pixels )** </dt><dd>Configure the number of pixels between “mousemove” events during dragAndDrop commands (default=10). Setting this value to 0 means that we’ll send a “mousemove” event to every single pixel in between the start location and the end location; that can be very slow, and may cause some browsers to force the JavaScript to timeout.

If the mouse speed is greater than the distance between the two dragged objects, we’ll just send one “mousemove” at the start location and then one final one at the end location.

Arguments:

- pixels – the number of pixels between “mousemove” events

</dd><dt>**# setSpeed" title="setSpeed"></a>setSpeed ( value )** </dt><dd>Set execution speed (i.e., set the millisecond length of a delay which will follow each selenium operation). By default, there is no such delay, i.e., the delay is 0 milliseconds. Arguments:

- value – the number of milliseconds to pause after operation

</dd><dt>**# setTimeout" title="setTimeout"></a>setTimeout ( timeout )** </dt><dd>Specifies the amount of time that Selenium will wait for actions to complete. Actions that require waiting include “open” and the “waitFor\*” actions.

The default timeout is 30 seconds.

Arguments:

- timeout – a timeout in milliseconds, after which the action will return with an error

</dd><dt>**# shiftKeyDown" title="shiftKeyDown"></a>shiftKeyDown ( )** </dt><dd>Press the shift key and hold it down until doShiftUp() is called or a new page is loaded. </dd><dt>**# shiftKeyUp" title="shiftKeyUp"></a>shiftKeyUp ( )** </dt><dd>Release the shift key. </dd><dt>**# store" title="store"></a>store ( expression,variableName )** </dt><dd>This command is a synonym for storeExpression. Arguments:

- expression – the value to store
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_24.html) in which the result is to be stored.

</dd><dt>**# submit" title="submit"></a>submit ( formLocator )** </dt><dd>Submit the specified form. This is particularly useful for forms without submit buttons, e.g. single-input “Search” forms. Arguments:

- formLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_25.html) for the form you want to submit

</dd><dt>**# type" title="type"></a>type ( locator,value )** </dt><dd>Sets the value of an input field, as though you typed it in. Can also be used to set the value of combo boxes, check boxes, etc. In these cases, value should be the value of the option selected, not the visible text.

Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_26.html)
- value – the value to type

</dd><dt>**# typeKeys" title="typeKeys"></a>typeKeys ( locator,value )** </dt><dd>Simulates keystroke events on the specified element, as though you typed the value key-by-key. This is a convenience method for calling keyDown, keyUp, keyPress for every character in the specified string; this is useful for dynamic UI widgets (like auto-completing combo boxes) that require explicit key events.

Unlike the simple “type” command, which forces the specified value into the page directly, this command may or may not have any visible effect, even in cases where typing keys would normally have a visible effect. For example, if you use “typeKeys” on a form element, you may or may not see the results of what you typed in the field.

In some cases, you may need to use the simple “type” command to set the value of the field and then the “typeKeys” command to send the keystroke events corresponding to what you just typed.

Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_27.html)
- value – the value to type

</dd><dt>**# uncheck" title="uncheck"></a>uncheck ( locator )** </dt><dd>Uncheck a toggle-button (checkbox/radio) Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_28.html)

</dd><dt>**# waitForCondition" title="waitForCondition"></a>waitForCondition ( script,timeout )** </dt><dd>Runs the specified JavaScript snippet repeatedly until it evaluates to “true”. The snippet may have multiple lines, but only the result of the last line will be considered. Note that, by default, the snippet will be run in the runner’s test window, not in the window of your application. To get the window of your application, you can use the JavaScript snippet selenium.browserbot.getCurrentWindow(), and then run your JavaScript in there

Arguments:

- script – the JavaScript snippet to run
- timeout – a timeout in milliseconds, after which this command will return with an error

</dd><dt>**# waitForFrameToLoad" title="waitForFrameToLoad"></a>waitForFrameToLoad ( frameAddress,timeout )** </dt><dd>Waits for a new frame to load. Selenium constantly keeps track of new pages and frames loading, and sets a “newPageLoaded” flag when it first notices a page load.

See waitForPageToLoad for more information.

Arguments:

- frameAddress – FrameAddress from the server side
- timeout – a timeout in milliseconds, after which this command will return with an error

</dd><dt>**# waitForPageToLoad" title="waitForPageToLoad"></a>waitForPageToLoad ( timeout )** </dt><dd>Waits for a new page to load. You can use this command instead of the “AndWait” suffixes, “clickAndWait”, “selectAndWait”, “typeAndWait” etc. (which are only available in the JS API).

Selenium constantly keeps track of new pages loading, and sets a “newPageLoaded” flag when it first notices a page load. Running any other Selenium command after turns the flag to false. Hence, if you want to wait for a page to load, you must wait immediately after a Selenium command that caused a page-load.

Arguments:

- timeout – a timeout in milliseconds, after which this command will return with an error

</dd><dt>**# waitForPopUp" title="waitForPopUp"></a>waitForPopUp ( windowID,timeout )** </dt><dd>Waits for a popup window to appear and load up. Arguments:

- windowID – the JavaScript window “name” of the window that will appear (not the text of the title bar)
- timeout – a timeout in milliseconds, after which the action will return with an error

</dd><dt>**# windowFocus" title="windowFocus"></a>windowFocus ( )** </dt><dd>Gives focus to the currently selected window </dd><dt>**# windowMaximize" title="windowMaximize"></a>windowMaximize ( )** </dt><dd>Resize currently selected window to take up the entire screen </dd></dl># accessors" title="accessors"></a>

#### Selenium Accessors

<dl><dt>**# assertErrorOnNext" title="assertErrorOnNext"></a>assertErrorOnNext ( message )** </dt><dd>Tell Selenium to expect an error on the next command execution. Arguments:

- message – The error message we should expect. This command will fail if the wrong error message appears.

Related Assertions, automatically generated:

- assertNotErrorOnNext ( message )
- verifyErrorOnNext ( message )
- verifyNotErrorOnNext ( message )
- waitForErrorOnNext ( message )
- waitForNotErrorOnNext ( message )

</dd><dt>**# assertFailureOnNext" title="assertFailureOnNext"></a>assertFailureOnNext ( message )** </dt><dd>Tell Selenium to expect a failure on the next command execution. Arguments:

- message – The failure message we should expect. This command will fail if the wrong failure message appears.

Related Assertions, automatically generated:

- assertNotFailureOnNext ( message )
- verifyFailureOnNext ( message )
- verifyNotFailureOnNext ( message )
- waitForFailureOnNext ( message )
- waitForNotFailureOnNext ( message )

</dd><dt>**# assertSelected" title="assertSelected"></a>assertSelected ( selectLocator,optionLocator )** </dt><dd>Verifies that the selected option of a drop-down satisfies the optionSpecifier. *Note that this command is deprecated; you should use assertSelectedLabel, assertSelectedValue, assertSelectedIndex, or assertSelectedId instead.*See the select command for more information about option locators.

Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_29.html) identifying a drop-down menu
- optionLocator – an option locator, typically just an option label (e.g. “John Smith”)

Related Assertions, automatically generated:

- assertNotSelected ( selectLocator, optionLocator )
- verifySelected ( selectLocator, optionLocator )
- verifyNotSelected ( selectLocator, optionLocator )
- waitForSelected ( selectLocator, optionLocator )
- waitForNotSelected ( selectLocator, optionLocator )

</dd><dt>**# storeAlert" title="storeAlert"></a>storeAlert ( variableName )** </dt><dd>Retrieves the message of a JavaScript alert generated during the previous action, or fail if there were no alerts. Getting an alert has the same effect as manually clicking OK. If an alert is generated but you do not get/verify it, the next Selenium action will fail.

NOTE: under Selenium, JavaScript alerts will NOT pop up a visible alert dialog.

NOTE: Selenium does NOT support JavaScript alerts that are generated in a page’s onload() event handler. In this case a visible dialog WILL be generated and Selenium will hang until someone manually clicks OK.

<dl><dt>Returns: </dt><dd>The message of the most recent JavaScript alert </dd></dl>Related Assertions, automatically generated:

- assertAlert ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_30.html) )
- assertNotAlert ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_31.html) )
- verifyAlert ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_32.html) )
- verifyNotAlert ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_33.html) )
- waitForAlert ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_34.html) )
- waitForNotAlert ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_35.html) )

</dd><dt>**# storeAllButtons" title="storeAllButtons"></a>storeAllButtons ( variableName )** </dt><dd>Returns the IDs of all buttons on the page. If a given button has no ID, it will appear as “” in this array.

<dl><dt>Returns: </dt><dd>the IDs of all buttons on the page </dd></dl>Related Assertions, automatically generated:

- assertAllButtons ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_36.html) )
- assertNotAllButtons ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_37.html) )
- verifyAllButtons ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_38.html) )
- verifyNotAllButtons ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_39.html) )
- waitForAllButtons ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_40.html) )
- waitForNotAllButtons ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_41.html) )

</dd><dt>**# storeAllFields" title="storeAllFields"></a>storeAllFields ( variableName )** </dt><dd>Returns the IDs of all input fields on the page. If a given field has no ID, it will appear as “” in this array.

<dl><dt>Returns: </dt><dd>the IDs of all field on the page </dd></dl>Related Assertions, automatically generated:

- assertAllFields ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_42.html) )
- assertNotAllFields ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_43.html) )
- verifyAllFields ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_44.html) )
- verifyNotAllFields ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_45.html) )
- waitForAllFields ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_46.html) )
- waitForNotAllFields ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_47.html) )

</dd><dt>**# storeAllLinks" title="storeAllLinks"></a>storeAllLinks ( variableName )** </dt><dd>Returns the IDs of all links on the page. If a given link has no ID, it will appear as “” in this array.

<dl><dt>Returns: </dt><dd>the IDs of all links on the page </dd></dl>Related Assertions, automatically generated:

- assertAllLinks ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_48.html) )
- assertNotAllLinks ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_49.html) )
- verifyAllLinks ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_50.html) )
- verifyNotAllLinks ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_51.html) )
- waitForAllLinks ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_52.html) )
- waitForNotAllLinks ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_53.html) )

</dd><dt>**# storeAllWindowIds" title="storeAllWindowIds"></a>storeAllWindowIds ( variableName )** </dt><dd>Returns the IDs of all windows that the browser knows about. <dl><dt>Returns: </dt><dd>the IDs of all windows that the browser knows about. </dd></dl>Related Assertions, automatically generated:

- assertAllWindowIds ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_54.html) )
- assertNotAllWindowIds ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_55.html) )
- verifyAllWindowIds ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_56.html) )
- verifyNotAllWindowIds ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_57.html) )
- waitForAllWindowIds ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_58.html) )
- waitForNotAllWindowIds ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_59.html) )

</dd><dt>**# storeAllWindowNames" title="storeAllWindowNames"></a>storeAllWindowNames ( variableName )** </dt><dd>Returns the names of all windows that the browser knows about. <dl><dt>Returns: </dt><dd>the names of all windows that the browser knows about. </dd></dl>Related Assertions, automatically generated:

- assertAllWindowNames ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_60.html) )
- assertNotAllWindowNames ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_61.html) )
- verifyAllWindowNames ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_62.html) )
- verifyNotAllWindowNames ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_63.html) )
- waitForAllWindowNames ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_64.html) )
- waitForNotAllWindowNames ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_65.html) )

</dd><dt>**# storeAllWindowTitles" title="storeAllWindowTitles"></a>storeAllWindowTitles ( variableName )** </dt><dd>Returns the titles of all windows that the browser knows about. <dl><dt>Returns: </dt><dd>the titles of all windows that the browser knows about. </dd></dl>Related Assertions, automatically generated:

- assertAllWindowTitles ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_66.html) )
- assertNotAllWindowTitles ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_67.html) )
- verifyAllWindowTitles ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_68.html) )
- verifyNotAllWindowTitles ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_69.html) )
- waitForAllWindowTitles ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_70.html) )
- waitForNotAllWindowTitles ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_71.html) )

</dd><dt>**# storeAttribute" title="storeAttribute"></a>storeAttribute ( attributeLocator, variableName )** </dt><dd>Gets the value of an element attribute. The value of the attribute may differ across browsers (this is the case for the “style” attribute, for example). Arguments:

- attributeLocator – an element locator followed by an @ sign and then the name of the attribute, e.g. “foo@bar”
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_72.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the value of the specified attribute </dd></dl>Related Assertions, automatically generated:

- assertAttribute ( attributeLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_73.html) )
- assertNotAttribute ( attributeLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_74.html) )
- verifyAttribute ( attributeLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_75.html) )
- verifyNotAttribute ( attributeLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_76.html) )
- waitForAttribute ( attributeLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_77.html) )
- waitForNotAttribute ( attributeLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_78.html) )

</dd><dt>**# storeAttributeFromAllWindows" title="storeAttributeFromAllWindows"></a>storeAttributeFromAllWindows ( attributeName, variableName )** </dt><dd>Returns every instance of some attribute from all known windows. Arguments:

- attributeName – name of an attribute on the windows
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_79.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the set of values of this attribute from all known windows. </dd></dl>Related Assertions, automatically generated:

- assertAttributeFromAllWindows ( attributeName, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_80.html) )
- assertNotAttributeFromAllWindows ( attributeName, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_81.html) )
- verifyAttributeFromAllWindows ( attributeName, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_82.html) )
- verifyNotAttributeFromAllWindows ( attributeName, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_83.html) )
- waitForAttributeFromAllWindows ( attributeName, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_84.html) )
- waitForNotAttributeFromAllWindows ( attributeName, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_85.html) )

</dd><dt>**# storeBodyText" title="storeBodyText"></a>storeBodyText ( variableName )** </dt><dd>Gets the entire text of the page. <dl><dt>Returns: </dt><dd>the entire text of the page </dd></dl>Related Assertions, automatically generated:

- assertBodyText ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_86.html) )
- assertNotBodyText ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_87.html) )
- verifyBodyText ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_88.html) )
- verifyNotBodyText ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_89.html) )
- waitForBodyText ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_90.html) )
- waitForNotBodyText ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_91.html) )

</dd><dt>**# storeConfirmation" title="storeConfirmation"></a>storeConfirmation ( variableName )** </dt><dd>Retrieves the message of a JavaScript confirmation dialog generated during the previous action. By default, the confirm function will return true, having the same effect as manually clicking OK. This can be changed by prior execution of the chooseCancelOnNextConfirmation command. If an confirmation is generated but you do not get/verify it, the next Selenium action will fail.

NOTE: under Selenium, JavaScript confirmations will NOT pop up a visible dialog.

NOTE: Selenium does NOT support JavaScript confirmations that are generated in a page’s onload() event handler. In this case a visible dialog WILL be generated and Selenium will hang until you manually click OK.

<dl><dt>Returns: </dt><dd>the message of the most recent JavaScript confirmation dialog </dd></dl>Related Assertions, automatically generated:

- assertConfirmation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_92.html) )
- assertNotConfirmation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_93.html) )
- verifyConfirmation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_94.html) )
- verifyNotConfirmation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_95.html) )
- waitForConfirmation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_96.html) )
- waitForNotConfirmation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_97.html) )

</dd><dt>**# storeCookie" title="storeCookie"></a>storeCookie ( variableName )** </dt><dd>Return all cookies of the current page under test. <dl><dt>Returns: </dt><dd>all cookies of the current page under test </dd></dl>Related Assertions, automatically generated:

- assertCookie ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_98.html) )
- assertNotCookie ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_99.html) )
- verifyCookie ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_100.html) )
- verifyNotCookie ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_101.html) )
- waitForCookie ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_102.html) )
- waitForNotCookie ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_103.html) )

</dd><dt>**# storeCookieByName" title="storeCookieByName"></a>storeCookieByName ( name, variableName )** </dt><dd>Returns the value of the cookie with the specified name, or throws an error if the cookie is not present. Arguments:

- name – the name of the cookie
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_104.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the value of the cookie </dd></dl>Related Assertions, automatically generated:

- assertCookieByName ( name, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_105.html) )
- assertNotCookieByName ( name, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_106.html) )
- verifyCookieByName ( name, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_107.html) )
- verifyNotCookieByName ( name, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_108.html) )
- waitForCookieByName ( name, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_109.html) )
- waitForNotCookieByName ( name, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_110.html) )

</dd><dt>**# storeCursorPosition" title="storeCursorPosition"></a>storeCursorPosition ( locator, variableName )** </dt><dd>Retrieves the text cursor position in the given input element or textarea; beware, this may not work perfectly on all browsers. Specifically, if the cursor/selection has been cleared by JavaScript, this command will tend to return the position of the last location of the cursor, even though the cursor is now gone from the page. This is filed as [SEL-243](http://jira.openqa.org/browse/SEL-243).

This method will fail if the specified element isn’t an input element or textarea, or there is no cursor in the element.

Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_111.html) pointing to an input element or textarea
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_112.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the numerical position of the cursor in the field </dd></dl>Related Assertions, automatically generated:

- assertCursorPosition ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_113.html) )
- assertNotCursorPosition ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_114.html) )
- verifyCursorPosition ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_115.html) )
- verifyNotCursorPosition ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_116.html) )
- waitForCursorPosition ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_117.html) )
- waitForNotCursorPosition ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_118.html) )

</dd><dt>**# storeElementHeight" title="storeElementHeight"></a>storeElementHeight ( locator, variableName )** </dt><dd>Retrieves the height of an element Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_119.html) pointing to an element
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_120.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>height of an element in pixels </dd></dl>Related Assertions, automatically generated:

- assertElementHeight ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_121.html) )
- assertNotElementHeight ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_122.html) )
- verifyElementHeight ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_123.html) )
- verifyNotElementHeight ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_124.html) )
- waitForElementHeight ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_125.html) )
- waitForNotElementHeight ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_126.html) )

</dd><dt>**# storeElementIndex" title="storeElementIndex"></a>storeElementIndex ( locator, variableName )** </dt><dd>Get the relative index of an element to its parent (starting from 0). The comment node and empty text node will be ignored. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_127.html) pointing to an element
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_128.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>of relative index of the element to its parent (starting from 0) </dd></dl>Related Assertions, automatically generated:

- assertElementIndex ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_129.html) )
- assertNotElementIndex ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_130.html) )
- verifyElementIndex ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_131.html) )
- verifyNotElementIndex ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_132.html) )
- waitForElementIndex ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_133.html) )
- waitForNotElementIndex ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_134.html) )

</dd><dt>**# storeElementPositionLeft" title="storeElementPositionLeft"></a>storeElementPositionLeft ( locator, variableName )** </dt><dd>Retrieves the horizontal position of an element Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_135.html) pointing to an element OR an element itself
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_136.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>of pixels from the edge of the frame. </dd></dl>Related Assertions, automatically generated:

- assertElementPositionLeft ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_137.html) )
- assertNotElementPositionLeft ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_138.html) )
- verifyElementPositionLeft ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_139.html) )
- verifyNotElementPositionLeft ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_140.html) )
- waitForElementPositionLeft ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_141.html) )
- waitForNotElementPositionLeft ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_142.html) )

</dd><dt>**# storeElementPositionTop" title="storeElementPositionTop"></a>storeElementPositionTop ( locator, variableName )** </dt><dd>Retrieves the vertical position of an element Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_143.html) pointing to an element OR an element itself
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_144.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>of pixels from the edge of the frame. </dd></dl>Related Assertions, automatically generated:

- assertElementPositionTop ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_145.html) )
- assertNotElementPositionTop ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_146.html) )
- verifyElementPositionTop ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_147.html) )
- verifyNotElementPositionTop ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_148.html) )
- waitForElementPositionTop ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_149.html) )
- waitForNotElementPositionTop ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_150.html) )

</dd><dt>**# storeElementWidth" title="storeElementWidth"></a>storeElementWidth ( locator, variableName )** </dt><dd>Retrieves the width of an element Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_151.html) pointing to an element
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_152.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>width of an element in pixels </dd></dl>Related Assertions, automatically generated:

- assertElementWidth ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_153.html) )
- assertNotElementWidth ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_154.html) )
- verifyElementWidth ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_155.html) )
- verifyNotElementWidth ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_156.html) )
- waitForElementWidth ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_157.html) )
- waitForNotElementWidth ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_158.html) )

</dd><dt>**# storeEval" title="storeEval"></a>storeEval ( script, variableName )** </dt><dd>Gets the result of evaluating the specified JavaScript snippet. The snippet may have multiple lines, but only the result of the last line will be returned. Note that, by default, the snippet will run in the context of the “selenium” object itself, so this will refer to the Selenium object. Use window to refer to the window of your application, e.g. window.document.getElementById(‘foo’)

If you need to use a locator to refer to a single element in your application page, you can use this.browserbot.findElement(“id=foo”) where “id=foo” is your locator.

Arguments:

- script – the JavaScript snippet to run
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_159.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the results of evaluating the snippet </dd></dl>Related Assertions, automatically generated:

- assertEval ( script, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_160.html) )
- assertNotEval ( script, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_161.html) )
- verifyEval ( script, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_162.html) )
- verifyNotEval ( script, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_163.html) )
- waitForEval ( script, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_164.html) )
- waitForNotEval ( script, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_165.html) )

</dd><dt>**# storeExpression" title="storeExpression"></a>storeExpression ( expression, variableName )** </dt><dd>Returns the specified expression. This is useful because of JavaScript preprocessing. It is used to generate commands like assertExpression and waitForExpression.

Arguments:

- expression – the value to return
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_166.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the value passed in </dd></dl>Related Assertions, automatically generated:

- assertExpression ( expression, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_167.html) )
- assertNotExpression ( expression, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_168.html) )
- verifyExpression ( expression, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_169.html) )
- verifyNotExpression ( expression, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_170.html) )
- waitForExpression ( expression, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_171.html) )
- waitForNotExpression ( expression, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_172.html) )

</dd><dt>**# storeHtmlSource" title="storeHtmlSource"></a>storeHtmlSource ( variableName )** </dt><dd>Returns the entire HTML source between the opening and closing “html” tags. <dl><dt>Returns: </dt><dd>the entire HTML source </dd></dl>Related Assertions, automatically generated:

- assertHtmlSource ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_173.html) )
- assertNotHtmlSource ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_174.html) )
- verifyHtmlSource ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_175.html) )
- verifyNotHtmlSource ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_176.html) )
- waitForHtmlSource ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_177.html) )
- waitForNotHtmlSource ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_178.html) )

</dd><dt>**# storeLocation" title="storeLocation"></a>storeLocation ( variableName )** </dt><dd>Gets the absolute URL of the current page. <dl><dt>Returns: </dt><dd>the absolute URL of the current page </dd></dl>Related Assertions, automatically generated:

- assertLocation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_179.html) )
- assertNotLocation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_180.html) )
- verifyLocation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_181.html) )
- verifyNotLocation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_182.html) )
- waitForLocation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_183.html) )
- waitForNotLocation ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_184.html) )

</dd><dt>**# storeMouseSpeed" title="storeMouseSpeed"></a>storeMouseSpeed ( variableName )** </dt><dd>Returns the number of pixels between “mousemove” events during dragAndDrop commands (default=10). <dl><dt>Returns: </dt><dd>the number of pixels between “mousemove” events during dragAndDrop commands (default=10) </dd></dl>Related Assertions, automatically generated:

- assertMouseSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_185.html) )
- assertNotMouseSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_186.html) )
- verifyMouseSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_187.html) )
- verifyNotMouseSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_188.html) )
- waitForMouseSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_189.html) )
- waitForNotMouseSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_190.html) )

</dd><dt>**# storePrompt" title="storePrompt"></a>storePrompt ( variableName )** </dt><dd>Retrieves the message of a JavaScript question prompt dialog generated during the previous action. Successful handling of the prompt requires prior execution of the answerOnNextPrompt command. If a prompt is generated but you do not get/verify it, the next Selenium action will fail.

NOTE: under Selenium, JavaScript prompts will NOT pop up a visible dialog.

NOTE: Selenium does NOT support JavaScript prompts that are generated in a page’s onload() event handler. In this case a visible dialog WILL be generated and Selenium will hang until someone manually clicks OK.

<dl><dt>Returns: </dt><dd>the message of the most recent JavaScript question prompt </dd></dl>Related Assertions, automatically generated:

- assertPrompt ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_191.html) )
- assertNotPrompt ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_192.html) )
- verifyPrompt ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_193.html) )
- verifyNotPrompt ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_194.html) )
- waitForPrompt ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_195.html) )
- waitForNotPrompt ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_196.html) )

</dd><dt>**# storeSelectedId" title="storeSelectedId"></a>storeSelectedId ( selectLocator, variableName )** </dt><dd>Gets option element ID for selected option in the specified select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_197.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_198.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the selected option ID in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedId ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_199.html) )
- assertNotSelectedId ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_200.html) )
- verifySelectedId ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_201.html) )
- verifyNotSelectedId ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_202.html) )
- waitForSelectedId ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_203.html) )
- waitForNotSelectedId ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_204.html) )

</dd><dt>**# storeSelectedIds" title="storeSelectedIds"></a>storeSelectedIds ( selectLocator, variableName )** </dt><dd>Gets all option element IDs for selected options in the specified select or multi-select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_205.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_206.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>an array of all selected option IDs in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedIds ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_207.html) )
- assertNotSelectedIds ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_208.html) )
- verifySelectedIds ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_209.html) )
- verifyNotSelectedIds ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_210.html) )
- waitForSelectedIds ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_211.html) )
- waitForNotSelectedIds ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_212.html) )

</dd><dt>**# storeSelectedIndex" title="storeSelectedIndex"></a>storeSelectedIndex ( selectLocator, variableName )** </dt><dd>Gets option index (option number, starting at 0) for selected option in the specified select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_213.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_214.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the selected option index in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedIndex ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_215.html) )
- assertNotSelectedIndex ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_216.html) )
- verifySelectedIndex ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_217.html) )
- verifyNotSelectedIndex ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_218.html) )
- waitForSelectedIndex ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_219.html) )
- waitForNotSelectedIndex ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_220.html) )

</dd><dt>**# storeSelectedIndexes" title="storeSelectedIndexes"></a>storeSelectedIndexes ( selectLocator, variableName )** </dt><dd>Gets all option indexes (option number, starting at 0) for selected options in the specified select or multi-select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_221.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_222.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>an array of all selected option indexes in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedIndexes ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_223.html) )
- assertNotSelectedIndexes ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_224.html) )
- verifySelectedIndexes ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_225.html) )
- verifyNotSelectedIndexes ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_226.html) )
- waitForSelectedIndexes ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_227.html) )
- waitForNotSelectedIndexes ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_228.html) )

</dd><dt>**# storeSelectedLabel" title="storeSelectedLabel"></a>storeSelectedLabel ( selectLocator, variableName )** </dt><dd>Gets option label (visible text) for selected option in the specified select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_229.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_230.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the selected option label in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedLabel ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_231.html) )
- assertNotSelectedLabel ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_232.html) )
- verifySelectedLabel ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_233.html) )
- verifyNotSelectedLabel ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_234.html) )
- waitForSelectedLabel ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_235.html) )
- waitForNotSelectedLabel ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_236.html) )

</dd><dt>**# storeSelectedLabels" title="storeSelectedLabels"></a>storeSelectedLabels ( selectLocator, variableName )** </dt><dd>Gets all option labels (visible text) for selected options in the specified select or multi-select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_237.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_238.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>an array of all selected option labels in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedLabels ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_239.html) )
- assertNotSelectedLabels ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_240.html) )
- verifySelectedLabels ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_241.html) )
- verifyNotSelectedLabels ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_242.html) )
- waitForSelectedLabels ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_243.html) )
- waitForNotSelectedLabels ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_244.html) )

</dd><dt>**# storeSelectedValue" title="storeSelectedValue"></a>storeSelectedValue ( selectLocator, variableName )** </dt><dd>Gets option value (value attribute) for selected option in the specified select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_245.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_246.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the selected option value in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedValue ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_247.html) )
- assertNotSelectedValue ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_248.html) )
- verifySelectedValue ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_249.html) )
- verifyNotSelectedValue ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_250.html) )
- waitForSelectedValue ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_251.html) )
- waitForNotSelectedValue ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_252.html) )

</dd><dt>**# storeSelectedValues" title="storeSelectedValues"></a>storeSelectedValues ( selectLocator, variableName )** </dt><dd>Gets all option values (value attributes) for selected options in the specified select or multi-select element. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_253.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_254.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>an array of all selected option values in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectedValues ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_255.html) )
- assertNotSelectedValues ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_256.html) )
- verifySelectedValues ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_257.html) )
- verifyNotSelectedValues ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_258.html) )
- waitForSelectedValues ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_259.html) )
- waitForNotSelectedValues ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_260.html) )

</dd><dt>**# storeSelectOptions" title="storeSelectOptions"></a>storeSelectOptions ( selectLocator, variableName )** </dt><dd>Gets all option labels in the specified select drop-down. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_261.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_262.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>an array of all option labels in the specified select drop-down </dd></dl>Related Assertions, automatically generated:

- assertSelectOptions ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_263.html) )
- assertNotSelectOptions ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_264.html) )
- verifySelectOptions ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_265.html) )
- verifyNotSelectOptions ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_266.html) )
- waitForSelectOptions ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_267.html) )
- waitForNotSelectOptions ( selectLocator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_268.html) )

</dd><dt>**# storeSpeed" title="storeSpeed"></a>storeSpeed ( variableName )** </dt><dd>Get execution speed (i.e., get the millisecond length of the delay following each selenium operation). By default, there is no such delay, i.e., the delay is 0 milliseconds. See also setSpeed. <dl><dt>Returns: </dt><dd>the execution speed in milliseconds. </dd></dl>Related Assertions, automatically generated:

- assertSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_269.html) )
- assertNotSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_270.html) )
- verifySpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_271.html) )
- verifyNotSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_272.html) )
- waitForSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_273.html) )
- waitForNotSpeed ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_274.html) )

</dd><dt>**# storeTable" title="storeTable"></a>storeTable ( tableCellAddress, variableName )** </dt><dd>Gets the text from a cell of a table. The cellAddress syntax tableLocator.row.column, where row and column start at 0. Arguments:

- tableCellAddress – a cell address, e.g. “foo.1.4”
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_275.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the text from the specified cell </dd></dl>Related Assertions, automatically generated:

- assertTable ( tableCellAddress, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_276.html) )
- assertNotTable ( tableCellAddress, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_277.html) )
- verifyTable ( tableCellAddress, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_278.html) )
- verifyNotTable ( tableCellAddress, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_279.html) )
- waitForTable ( tableCellAddress, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_280.html) )
- waitForNotTable ( tableCellAddress, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_281.html) )

</dd><dt>**# storeText" title="storeText"></a>storeText ( locator, variableName )** </dt><dd>Gets the text of an element. This works for any element that contains text. This command uses either the textContent (Mozilla-like browsers) or the innerText (IE-like browsers) of the element, which is the rendered text shown to the user. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_282.html)
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_283.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the text of the element </dd></dl>Related Assertions, automatically generated:

- assertText ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_284.html) )
- assertNotText ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_285.html) )
- verifyText ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_286.html) )
- verifyNotText ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_287.html) )
- waitForText ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_288.html) )
- waitForNotText ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_289.html) )

</dd><dt>**# storeTitle" title="storeTitle"></a>storeTitle ( variableName )** </dt><dd>Gets the title of the current page. <dl><dt>Returns: </dt><dd>the title of the current page </dd></dl>Related Assertions, automatically generated:

- assertTitle ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_290.html) )
- assertNotTitle ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_291.html) )
- verifyTitle ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_292.html) )
- verifyNotTitle ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_293.html) )
- waitForTitle ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_294.html) )
- waitForNotTitle ( [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_295.html) )

</dd><dt>**# storeValue" title="storeValue"></a>storeValue ( locator, variableName )** </dt><dd>Gets the (whitespace-trimmed) value of an input field (or anything else with a value parameter). For checkbox/radio elements, the value will be “on” or “off” depending on whether the element is checked or not. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_296.html)
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_297.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the element value, or “on/off” for checkbox/radio elements </dd></dl>Related Assertions, automatically generated:

- assertValue ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_298.html) )
- assertNotValue ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_299.html) )
- verifyValue ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_300.html) )
- verifyNotValue ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_301.html) )
- waitForValue ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_302.html) )
- waitForNotValue ( locator, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_303.html) )

</dd><dt>**# storeWhetherThisFrameMatchFrameExpression" title="storeWhetherThisFrameMatchFrameExpression"></a>storeWhetherThisFrameMatchFrameExpression ( currentFrameString, target, variableName )** </dt><dd>Determine whether current/locator identify the frame containing this running code. This is useful in proxy injection mode, where this code runs in every browser frame and window, and sometimes the selenium server needs to identify the “current” frame. In this case, when the test calls selectFrame, this routine is called for each frame to figure out which one has been selected. The selected frame will return true, while all others will return false.

Arguments:

- currentFrameString – starting frame
- target – new frame (which might be relative to the current one)
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_304.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if the new frame is this code’s window </dd></dl>Related Assertions, automatically generated:

- assertWhetherThisFrameMatchFrameExpression ( currentFrameString, target )
- assertNotWhetherThisFrameMatchFrameExpression ( currentFrameString, target )
- verifyWhetherThisFrameMatchFrameExpression ( currentFrameString, target )
- verifyNotWhetherThisFrameMatchFrameExpression ( currentFrameString, target )
- waitForWhetherThisFrameMatchFrameExpression ( currentFrameString, target )
- waitForNotWhetherThisFrameMatchFrameExpression ( currentFrameString, target )

</dd><dt>**# storeWhetherThisWindowMatchWindowExpression" title="storeWhetherThisWindowMatchWindowExpression"></a>storeWhetherThisWindowMatchWindowExpression ( currentWindowString, target, variableName )** </dt><dd>Determine whether currentWindowString plus target identify the window containing this running code. This is useful in proxy injection mode, where this code runs in every browser frame and window, and sometimes the selenium server needs to identify the “current” window. In this case, when the test calls selectWindow, this routine is called for each window to figure out which one has been selected. The selected window will return true, while all others will return false.

Arguments:

- currentWindowString – starting window
- target – new window (which might be relative to the current one, e.g., “\_parent”)
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_305.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if the new window is this code’s window </dd></dl>Related Assertions, automatically generated:

- assertWhetherThisWindowMatchWindowExpression ( currentWindowString, target )
- assertNotWhetherThisWindowMatchWindowExpression ( currentWindowString, target )
- verifyWhetherThisWindowMatchWindowExpression ( currentWindowString, target )
- verifyNotWhetherThisWindowMatchWindowExpression ( currentWindowString, target )
- waitForWhetherThisWindowMatchWindowExpression ( currentWindowString, target )
- waitForNotWhetherThisWindowMatchWindowExpression ( currentWindowString, target )

</dd><dt>**# storeXpathCount" title="storeXpathCount"></a>storeXpathCount ( xpath, variableName )** </dt><dd>Returns the number of nodes that match the specified xpath, eg. “//table” would give the number of tables. Arguments:

- xpath – the xpath expression to evaluate. do NOT wrap this expression in a ‘count()’ function; we will do that for you.
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_306.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>the number of nodes that match the specified xpath </dd></dl>Related Assertions, automatically generated:

- assertXpathCount ( xpath, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_307.html) )
- assertNotXpathCount ( xpath, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_308.html) )
- verifyXpathCount ( xpath, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_309.html) )
- verifyNotXpathCount ( xpath, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_310.html) )
- waitForXpathCount ( xpath, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_311.html) )
- waitForNotXpathCount ( xpath, [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_312.html) )

</dd><dt>**# storeAlertPresent" title="storeAlertPresent"></a>storeAlertPresent ( variableName )** </dt><dd>Has an alert occurred? This function never throws an exception

<dl><dt>Returns: </dt><dd>true if there is an alert </dd></dl>Related Assertions, automatically generated:

- assertAlertPresent ( )
- assertAlertNotPresent ( )
- verifyAlertPresent ( )
- verifyAlertNotPresent ( )
- waitForAlertPresent ( )
- waitForAlertNotPresent ( )

</dd><dt>**# storeChecked" title="storeChecked"></a>storeChecked ( locator, variableName )** </dt><dd>Gets whether a toggle-button (checkbox/radio) is checked. Fails if the specified element doesn’t exist or isn’t a toggle-button. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_313.html) pointing to a checkbox or radio button
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_314.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if the checkbox is checked, false otherwise </dd></dl>Related Assertions, automatically generated:

- assertChecked ( locator )
- assertNotChecked ( locator )
- verifyChecked ( locator )
- verifyNotChecked ( locator )
- waitForChecked ( locator )
- waitForNotChecked ( locator )

</dd><dt>**# storeConfirmationPresent" title="storeConfirmationPresent"></a>storeConfirmationPresent ( variableName )** </dt><dd>Has confirm() been called? This function never throws an exception

<dl><dt>Returns: </dt><dd>true if there is a pending confirmation </dd></dl>Related Assertions, automatically generated:

- assertConfirmationPresent ( )
- assertConfirmationNotPresent ( )
- verifyConfirmationPresent ( )
- verifyConfirmationNotPresent ( )
- waitForConfirmationPresent ( )
- waitForConfirmationNotPresent ( )

</dd><dt>**# storeCookiePresent" title="storeCookiePresent"></a>storeCookiePresent ( name, variableName )** </dt><dd>Returns true if a cookie with the specified name is present, or false otherwise. Arguments:

- name – the name of the cookie
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_315.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if a cookie with the specified name is present, or false otherwise. </dd></dl>Related Assertions, automatically generated:

- assertCookiePresent ( name )
- assertCookieNotPresent ( name )
- verifyCookiePresent ( name )
- verifyCookieNotPresent ( name )
- waitForCookiePresent ( name )
- waitForCookieNotPresent ( name )

</dd><dt>**# storeEditable" title="storeEditable"></a>storeEditable ( locator, variableName )** </dt><dd>Determines whether the specified input element is editable, ie hasn’t been disabled. This method will fail if the specified element isn’t an input element. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_316.html)
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_317.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if the input element is editable, false otherwise </dd></dl>Related Assertions, automatically generated:

- assertEditable ( locator )
- assertNotEditable ( locator )
- verifyEditable ( locator )
- verifyNotEditable ( locator )
- waitForEditable ( locator )
- waitForNotEditable ( locator )

</dd><dt>**# storeElementPresent" title="storeElementPresent"></a>storeElementPresent ( locator, variableName )** </dt><dd>Verifies that the specified element is somewhere on the page. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_318.html)
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_319.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if the element is present, false otherwise </dd></dl>Related Assertions, automatically generated:

- assertElementPresent ( locator )
- assertElementNotPresent ( locator )
- verifyElementPresent ( locator )
- verifyElementNotPresent ( locator )
- waitForElementPresent ( locator )
- waitForElementNotPresent ( locator )

</dd><dt>**# storeOrdered" title="storeOrdered"></a>storeOrdered ( locator1, locator2, variableName )** </dt><dd>Check if these two elements have same parent and are ordered siblings in the DOM. Two same elements will not be considered ordered. Arguments:

- locator1 – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_320.html) pointing to the first element
- locator2 – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_321.html) pointing to the second element
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_322.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if element1 is the previous sibling of element2, false otherwise </dd></dl>Related Assertions, automatically generated:

- assertOrdered ( locator1, locator2 )
- assertNotOrdered ( locator1, locator2 )
- verifyOrdered ( locator1, locator2 )
- verifyNotOrdered ( locator1, locator2 )
- waitForOrdered ( locator1, locator2 )
- waitForNotOrdered ( locator1, locator2 )

</dd><dt>**# storePromptPresent" title="storePromptPresent"></a>storePromptPresent ( variableName )** </dt><dd>Has a prompt occurred? This function never throws an exception

<dl><dt>Returns: </dt><dd>true if there is a pending prompt </dd></dl>Related Assertions, automatically generated:

- assertPromptPresent ( )
- assertPromptNotPresent ( )
- verifyPromptPresent ( )
- verifyPromptNotPresent ( )
- waitForPromptPresent ( )
- waitForPromptNotPresent ( )

</dd><dt>**# storeSomethingSelected" title="storeSomethingSelected"></a>storeSomethingSelected ( selectLocator, variableName )** </dt><dd>Determines whether some option in a drop-down menu is selected. Arguments:

- selectLocator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_323.html) identifying a drop-down menu
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_324.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if some option has been selected, false otherwise </dd></dl>Related Assertions, automatically generated:

- assertSomethingSelected ( selectLocator )
- assertNotSomethingSelected ( selectLocator )
- verifySomethingSelected ( selectLocator )
- verifyNotSomethingSelected ( selectLocator )
- waitForSomethingSelected ( selectLocator )
- waitForNotSomethingSelected ( selectLocator )

</dd><dt>**# storeTextPresent" title="storeTextPresent"></a>storeTextPresent ( pattern, variableName )** </dt><dd>Verifies that the specified text pattern appears somewhere on the rendered page shown to the user. Arguments:

- pattern – a [pattern](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_325.html) to match with the text of the page
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_326.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if the pattern matches the text, false otherwise </dd></dl>Related Assertions, automatically generated:

- assertTextPresent ( pattern )
- assertTextNotPresent ( pattern )
- verifyTextPresent ( pattern )
- verifyTextNotPresent ( pattern )
- waitForTextPresent ( pattern )
- waitForTextNotPresent ( pattern )

</dd><dt>**# storeVisible" title="storeVisible"></a>storeVisible ( locator, variableName )** </dt><dd>Determines if the specified element is visible. An element can be rendered invisible by setting the CSS “visibility” property to “hidden”, or the “display” property to “none”, either for the element itself or one if its ancestors. This method will fail if the element is not present. Arguments:

- locator – an [element locator](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_327.html)
- variableName – the name of a [variable](images/stories/DevelopwebtestcasesusingSeleniumIDEinFir_12DA7/reference_328.html) in which the result is to be stored.

<dl><dt>Returns: </dt><dd>true if the specified element is visible, false otherwise </dd></dl>Related Assertions, automatically generated:

- assertVisible ( locator )
- assertNotVisible ( locator )
- verifyVisible ( locator )
- verifyNotVisible ( locator )
- waitForVisible ( locator )
- waitForNotVisible ( locator )

</dd></dl>