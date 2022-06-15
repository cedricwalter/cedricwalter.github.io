---

title: 'Akismet4Joomla 1.5.1 for Joomla 1.5'
date: '2008-03-01T13:41:07+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/03/Akismet.jpg
---

![](/assets/images/2008/03/Akismet.jpg)

How Akismet work?  
 When a new comment, trackback, or pingback comes to your blog it is submitted to the [Akismet](http://akismet.com/) web service which runs hundreds of tests on the comment and returns a thumbs up or thumbs down.  
 Read [Akismet](http://akismet.com/) site for more details

What does this plugin do?  
 This #Joomla! component is UNUSABLE alone: other components HAVE TO USE IT. Consider this component as a Framework. It help other developers integrate [Akismet](http://akismet.com/) in their code. This component is simply a bridge, hiding [Akismet](http://akismet.com/) details and providing an unified way to use [Akismet](http://akismet.com/) in #Joomla 3rd party component code.

<span style="color: #3333ff; font-weight: bold">NEW: Slider administrator panel.  
<span style="color: #3333ff; font-weight: bold">NEW: Native #Joomla! 1.5 plugin, no need to install in legacy mode.

<span style="color: #3333ff; font-weight: bold">NEW: Checking now the validity of your [Akismet](http://akismet.com/) key, see screenshot below

![Akismet4Joomla now checking Akismet keys](/assets/images/2008/03/akismet4joomla.1.5.1.gif "Akismet4Joomla now checking Akismet keys")  
<span style="color: #3333ff; font-weight: bold">NEW: check for proper operations, test individually comments, see screenshot below  
![akismet4joomla.1.5.1.testing.comments.gif](/assets/images/2008/03/akismet4joomla.1.5.1.testing.comments.gif "With Askimet4Joomla, test comments and check installation")

<span style="color: #3333ff; font-weight: bold">NEW: Fully translated, including manuals, help and troubleshootings  
<span style="color: #3333ff; font-weight: bold">  
NEW: New API more like in #Joomla! 1.5, but the old one is still working

<span style="font-family: Courier New,Courier,monospace">require\_once (\_JOOMLA\_AKISMET\_ADMIN\_BASE . ‘/akismetJoomlaAPI.php’);  
<span style="font-family: Courier New,Courier,monospace">$JoomlaAkismetAPI = #JoomlaAkismetAPI::getJoomlaAkismetAPI();  
<span style="font-family: Courier New,Courier,monospace">$JoomlaAkismetAPI->isKeyValid(“123456789”);

<span style="color: #3333ff; font-weight: bold">NEW: Using [Akismet](http://akismet.com/) PHP 5 engine version 0.4 (author Alex Potsides [http://www.achingbrain.net/)](http://www.achingbrain.net/)

- Performance – changed HTTP version from 1.1 to 1.0 (with thanks to Jan De Poorter).
- Performance – No longer issues a separate HTTP request to check validity of the API key with every instantiation.
- Added a new public method ‘isKeyValid’ to manually check validity of the API key passed to the constructor.
- The method ‘isCommentSpam’ (rather than the constructor) will now throw an exception if the API key is invalid.
- Tidied up internal structure a bit.

Go to my download section to grab it