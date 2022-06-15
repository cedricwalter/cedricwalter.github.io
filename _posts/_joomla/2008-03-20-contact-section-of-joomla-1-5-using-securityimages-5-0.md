---
id: 3275
title: 'Contact section of Joomla! 1.5 using SecurityImages 5.0'
date: '2008-03-20T19:38:47+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/03/contact.settings.securityimages.5.0_thumb.gif
---

SecurityImages BETA will be available in no more than 2 days…

Note that SecurityImages is still WAY to intrusive toward #Joomla! as core file has to be changed in order to use Captcha.

Lets take the **contact section** of #Joomla! as an example.

- **Download the patch** **HERE** (soon available as a ready to use patch) and overwrite file on your server OR
- **Do it on your own, this is more for** 3rd party developer, or people wanting to understand the internal of #Joomla! or SecurityImages

Click Read MORE!


 
<span style="font-family: monospace">It is always recommended to use a switch in all your component to activate deactivate SecurityImages per components through the administrator control panel.

This is done by adding to administrator/components/com\_contact/contact\_items.xml the following code:

```
<param name="useSecurityImages" type="radio" default="1" label="Use SecurityImage Captcha" description="Enable Captcha verification">

            <option value="0">No</option>

            <option value="1">Yes</option>

</param>
```

Joomla will read this xml file on the fly and build the graphical user interface for the contact settings.

[![contact.settings.securityimages.5.0](/assets/images/2008/03/contact.settings.securityimages.5.0_thumb.gif)](/assets/images/2008/03/contact.settings.securityimages.5.0.gif)

Since Joomla! 1.5 now use a Model View Controller paradigm, we have to alter the controller, and add a new Task <font color="#0000bb">displaySecurityImagesCaptcha<font color="#007700">()in <span style="font-family: courier new,courier,monospace">components/com\_contact/controller.php:

<div style="margin: 5px 20px 20px"><div class="alt2" dir="ltr" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 322px; text-align: left"><font color="#0000bb"> <font color="#007700">function <font color="#0000bb">displaySecurityImagesCaptcha<font color="#007700">() {   
 global <font color="#0000bb">$mainframe<font color="#007700">;   
   
 //Per contact you can define if the user has to resolve the capctha   
 <font color="#0000bb">$contactId <font color="#007700">= <font color="#0000bb">JRequest<font color="#007700">::<font color="#0000bb">getVar<font color="#007700">(<font color="#dd0000">‘contact\_id’<font color="#007700">, <font color="#0000bb">0<font color="#007700">, <font color="#dd0000">”<font color="#007700">, <font color="#dd0000">‘int’<font color="#007700">);   
 <font color="#ff8000">// load the contact details   
 <font color="#0000bb">$model <font color="#007700">= &amp;<font color="#0000bb">$this<font color="#007700">-><font color="#0000bb">getModel<font color="#007700">(<font color="#dd0000">‘contact’<font color="#007700">);   
 <font color="#0000bb">$qOptions<font color="#007700">\[<font color="#dd0000">‘id’<font color="#007700">\] = <font color="#0000bb">$contactId<font color="#007700">;   
 <font color="#0000bb">$contact <font color="#007700">= <font color="#0000bb">$model<font color="#007700">-><font color="#0000bb">getContact<font color="#007700">( <font color="#0000bb">$qOptions <font color="#007700">);   
 <font color="#0000bb">$params <font color="#007700">= new <font color="#0000bb">JParameter<font color="#007700">( <font color="#0000bb">$contact<font color="#007700">-><font color="#0000bb">params <font color="#007700">);   
   
 if (<font color="#0000bb">$params<font color="#007700">-><font color="#0000bb">get<font color="#007700">(<font color="#dd0000">‘useSecurityImages’<font color="#007700">)) {   
 <font color="#0000bb">$check <font color="#007700">= <font color="#0000bb">null<font color="#007700">;   
 <font color="#0000bb">$mainframe<font color="#007700">-><font color="#0000bb">triggerEvent<font color="#007700">(<font color="#dd0000">‘<font color="#dd0000">onSecurityImagesDisplay<font color="#dd0000">‘<font color="#007700">, array(<font color="#0000bb">$<font color="#0000bb">check<font color="#007700">));   
 if (!<font color="#0000bb">$<font color="#0000bb">check<font color="#007700">) {   
 echo <font color="#dd0000">“<br/>Erreur affichage du Captcha<br/>”<font color="#007700">;   
 }   
 }   
   
 }   
 As you can see, the event “onSecurityImagesDisplay” is triggered on a per contact name basis. That mean that some contact can have a Captcha while other have not.

The next step is to add the task checkSecurityImagesCaptcha() checking the captcha in the <span style="font-family: courier new,courier,monospace">components/com\_contact/controller.php

<div style="margin: 5px 20px 20px"><div class="alt2" dir="ltr" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 354px; text-align: left"><font color="#007700">function <font color="#0000bb">checkSecurityImagesCaptcha<font color="#007700">() {   
 global <font color="#0000bb">$mainframe<font color="#007700">;   
   
 <font color="#0000bb">$contactId <font color="#007700">= <font color="#0000bb">JRequest<font color="#007700">::<font color="#0000bb">getVar<font color="#007700">(<font color="#dd0000">‘id’<font color="#007700">, <font color="#0000bb">0<font color="#007700">, <font color="#dd0000">”<font color="#007700">, <font color="#dd0000">‘int’<font color="#007700">);   
 <font color="#ff8000">// load the contact details   
 <font color="#0000bb">$model <font color="#007700">= &amp;<font color="#0000bb">$this<font color="#007700">-><font color="#0000bb">getModel<font color="#007700">(<font color="#dd0000">‘contact’<font color="#007700">);   
 <font color="#0000bb">$qOptions<font color="#007700">\[<font color="#dd0000">‘id’<font color="#007700">\] = <font color="#0000bb">$contactId<font color="#007700">;   
 <font color="#0000bb">$contact <font color="#007700">= <font color="#0000bb">$model<font color="#007700">-><font color="#0000bb">getContact<font color="#007700">( <font color="#0000bb">$qOptions <font color="#007700">);   
 <font color="#0000bb">$params <font color="#007700">= new <font color="#0000bb">JParameter<font color="#007700">( <font color="#0000bb">$contact<font color="#007700">-><font color="#0000bb">params <font color="#007700">);   
   
 //check if that user has a capctha   
 <font color="#007700">if (!<font color="#0000bb">$params<font color="#007700">-><font color="#0000bb">get<font color="#007700">(<font color="#dd0000">‘<font color="#dd0000">useSecurityImages<font color="#dd0000">‘<font color="#007700">)) {   
 return <font color="#0000bb">true<font color="#007700">;   
 }   
 <font color="#0000bb">$return <font color="#007700">= <font color="#0000bb">false<font color="#007700">;   
 <font color="#0000bb">$securityImagesJoomlaContactUserTry <font color="#007700">= <font color="#0000bb">JRequest<font color="#007700">::<font color="#0000bb">getVar<font color="#007700">(<font color="#dd0000">‘securityImagesJoomlaContactUserTry’<font color="#007700">, <font color="#0000bb">false<font color="#007700">, <font color="#dd0000">”<font color="#007700">, <font color="#dd0000">‘CMD’<font color="#007700">);   
 <font color="#0000bb">$mainframe<font color="#007700">-><font color="#0000bb">triggerEvent<font color="#007700">(<font color="#dd0000">‘<font color="#dd0000">onSecurityImagesCheck<font color="#dd0000">‘<font color="#007700">, array(<font color="#0000bb">$securityImagesJoomlaContactUserTry<font color="#007700"> &amp;<font color="#0000bb">$return<font color="#007700">));   
 return <font color="#0000bb">$return;<font color="#007700">   
 }   
 One more step is to alter the original submit() method of the controller in <span style="font-family: courier new,courier,monospace">components/com\_contact/controller.php

<div style="margin: 5px 20px 20px"><div class="alt2" dir="ltr" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 146px; text-align: left"> <font color="#007700">global <font color="#0000bb">$mainframe<font color="#007700">; <font color="#ff8000"><font color="#007700">if (!<font color="#0000bb">$this<font color="#007700">-><font color="#0000bb">checkSecurityImagesCaptcha<font color="#007700">()<font color="#007700">) {   
 <font color="#0000bb">JError<font color="#007700">::<font color="#0000bb">raiseWarning<font color="#007700">(<font color="#dd0000">“999”<font color="#007700">,<font color="#007700">“Invalid Captcha Code”);   
 <font color="#0000bb">$this<font color="#007700">-><font color="#0000bb">display<font color="#007700">();   
 return <font color="#0000bb">false<font color="#007700">;   
 }   
 And finally altering the view <span style="font-family: courier new,courier,monospace">/com\_contact/views/contact/tmpl/default\_form.php   
<span style="font-family: times new roman,times,serif">to display the Captcha field   


<div style="margin: 5px 20px 20px"><div class="alt2" dir="ltr" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 130px; text-align: left"><font color="#0000bb"><?php <font color="#007700">if (<font color="#0000bb">$this<font color="#007700">-><font color="#0000bb">params<font color="#007700">-><font color="#0000bb">get<font color="#007700">(<font color="#dd0000">‘<font color="#dd0000">useSecurityImages<font color="#dd0000">‘<font color="#007700">)) { <font color="#0000bb">?>   
<img src=”index.php?option=com\_contact&amp;task=<font color="#0000bb">displaySecurityImagesCaptcha&amp;contact\_id=<font color="#0000bb"><?php <font color="#007700">echo <font color="#0000bb">$this<font color="#007700">-><font color="#0000bb">contact<font color="#007700">-><font color="#0000bb">id<font color="#007700">; <font color="#0000bb">?>“>   
<br />   
<input type=”text” name=”securityImagesJoomlaContactUserTry” />   
<br />   
 <font color="#0000bb"><?php <font color="#007700">} <font color="#0000bb">?>  As you see a lot of thing have been done, and I am still testing and improving the code.