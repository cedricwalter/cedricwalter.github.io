---

title: 'Nasty Bug in SecurityImages 5.1.2'
date: '2011-05-25T20:23:03+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/05/software_bugs_dilbert_thumb.jpg
tags:
    - security
    - securityimages
    - thanks
---

[![software_bugs_dilbert](/assets/images/2011/05/software_bugs_dilbert_thumb.jpg "software_bugs_dilbert")](/assets/images/2011/05/software_bugs_dilbert.jpg)

Thanks to Margus Pala, a security Flaw has been reported and corrected in SecurityImages version 5.1.2 and previous

# The flaw is of moderate level, in register forms, spammers are able to register without solving the Captcha**!

- It affect only SecurityImages 5.x for #Joomla! 1.5
- SecurityImages 6.x for #Joomla! 1.6 is not affected

In order to resolve this issue, you don’t have to install any new version of SecurityImages, you must either

- Update your blog with the right version of the [joomla!](http://www.joomla.org/) patches, the all end with #Joomla\_1.5.x-Stable-Full\_PackageForSecurityImages5.y.z\_**v01.03.00**

# OR**

- Edit the file components\\com\_user\\controller.php and remove the line 274 ($this->register())

```
if ($useSecurityImagesInRegister && !$this->checkSecurityImagesCaptcha()) {   JError::raiseWarning('', JText::_('SECURITYIMAGES REJECT USER ENTRY'));     <strike>$this->register();</strike>   return false; }
```

These patches versions have the flaw

04/12/2008 #Joomla\_1.5.1-Stable-Full\_PackageForSecurityImages5.0.0.zip   
05/01/2008 #Joomla\_1.5.2-Stable-Full\_PackageForSecurityImages5.0.0\_**v01.00.00**.zip   
05/01/2008 #Joomla\_1.5.3-Stable-Full\_PackageForSecurityImages5.0.0\_**v01.00.00**.zip   
07/10/2008 #Joomla\_1.5.4-Stable-Full\_PackageForSecurityImages5.0.0\_**v01.00.00**.zip   
08/03/2008 #Joomla\_1.5.5-Stable-Full\_PackageForSecurityImages5.0.0\_**v01.00.00**.zip   
08/03/2008 #Joomla\_1.5.6-Stable-Full\_PackageForSecurityImages5.0.0\_**v01.00.00**.zip   
08/19/2008 #Joomla\_1.5.6-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.00.00**.zip   
09/13/2008 #Joomla\_1.5.7-Stable-Full\_PackageForSecurityImages5.0.0\_**v01.00.00**.zip   
09/20/2008 #Joomla\_1.5.7-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.00.00**.zip   
11/11/2008 #Joomla\_1.5.8-Stable-Full\_PackageForSecurityImages5.0.0\_**v01.00.00**.zip   
01/19/2009 #Joomla\_1.5.8-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.01.00**.zip   
01/19/2009 #Joomla\_1.5.9-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.01.00**.zip   
03/28/2009 #Joomla\_1.5.10-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.01.00**.zip   
06/03/2009 #Joomla\_1.5.11-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.01.00**.zip   
07/04/2009 #Joomla\_1.5.12-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.01.00**.zip   
07/26/2009 #Joomla\_1.5.13-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.01.00**.zip   
07/26/2009 #Joomla\_1.5.14-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.01.00**.zip   
09/11/2009 #Joomla\_1.5.14-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
11/09/2009 #Joomla\_1.5.15-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
04/24/2010 #Joomla\_1.5.16-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
04/24/2010 #Joomla\_1.5.17-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
09/12/2010 #Joomla\_1.5.18-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
04/24/2010 #Joomla\_1.5.20-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
01/09/2011 #Joomla\_1.5.21-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
01/09/2011 #Joomla\_1.5.22-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip   
01/09/2011 #Joomla\_1.5.23-Stable-Full\_PackageForSecurityImages5.1.x\_**v01.02.00**.zip

You can download the updated versions [in HERE](http://www.waltercedric.com/downloads/cat_view/333-joomla15/334-securityimages.html) or [search the download section](http://www.waltercedric.com/component/docman/search_form.html), type 1.5.23 for the patches for 1.5.23 for example