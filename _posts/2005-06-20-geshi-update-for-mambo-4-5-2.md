---
id: 1800
title: 'Geshi update for Mambo 4.5.2'
date: '2005-06-20T23:27:12+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1800'
permalink: /joomla/geshi-update-for-mambo-4-5-2/
tags:
    - cms
    - mambo
---

***GeSHi – Generic Syntax Highlighter:** GeSHi started as an idea to create a generic syntax highlighter for the <acronym>phpBB</acronym> forum system, but has been generalised to this project. GeSHi aims to be a simple but powerful highlighting script, with the following goals:*

- *Support for a wide range of popular languages*
- *Easy to add a new language for highlighting*
- *Highly customisable output formats*

*GeSHi aims to do this all as quickly as possible. Many customisable features of GeSHi facilitate speed increases, and you can easily find a balance between the amount of highlighting done and the speed in which it is done. from <http://qbnz.com/highlighter/index.php>*

**My upgrade is for mambo 4.5.2…**

- Mambo 4.5.2 already contains Geshi (<http://qbnz.com/highlighter/index.php>) in version 1.0.4
- Geshi 1.0.7 has beeen release in 2005/06/17
- Geshi 1.0.7 is a major bugfix release over the previous versions, and upgrading is strongly recommended. In addition, four new languages have been added, including highlighting for diff output.

**\#### Upgrade ####**

1. Download geshi1.0.7 for Mambo.zip in my dowmload section
2. Upgrade Is easy just copy the mambots directory of this archive to the main root of mambo on your server with FTP.
3. In /css you have the css use on my homepage [www.waltercedric.com](http://www.waltercedric.com/)

**\#### What NEW ####** I’ve changed the mambot (*/mambots/content/geshi.php* ) a little bit:

- support for CSS: default true, it reduce bandwith!
- support for code header: default true
- support for code footer: defaukt false
- 38 languages from the standard geshi distribution are now shipped (400kb) delete unneede languages in  
     mambots/content/geshi/geshi/

to change the value of these flags: open the file */mambots/content/geshi.php* and change their default value  
 //new code by Walter Cedric [www.waltercedric.com](http://www.waltercedric.com/)

```
 $useCSS = mosGetParam( $args, 'useCSS', 'true' );

 $useHeader = mosGetParam( $args, 'useHeader', 'true' );

 $useFooter = mosGetParam( $args, 'useFooter', 'false' );

   
```

OR  
 specify for each <pre> </pre> tag ther value see "example of use"

**\### use a CSS ###**  
– Point a browser to [www.yoursite.com/mambots/content/geshi/cssgen.php](http://www.yoursite.com/mambots/content/geshi/cssgen.php)  
 and follow instructions, you can at the end copy a css template for geshi (cut and paste from your browser in a file)  
– Create a file named sourceCodeGeshi.css in [www.yoursite.com/templates/mytemplatename/css/](http://www.yoursite.com/templates/mytemplatename/css/) directory.  
– update four index.jsp from [www.yoursite.com/templates/mytemplatename/index.jsp](http://www.yoursite.com/templates/mytemplatename/index.jsp) to include the new css on all page:  
 ex:

```
<link  href="<?php echo $mosConfig_live_site;?>

      /templates/mytemplatename/css/sourceCodeGeshi.css" 

rel="stylesheet" type="text/css"/>
```

– You can delete the generator   
[www.yoursite.com/mambots/content/geshi/cssgen.php](http://www.yoursite.com/mambots/content/geshi/cssgen.php)  
afterward, even if I think it is not a big security issue…

**\### use a header or footer ###**

- footer or header are portion of html code that geshi can add during the rendering of source code.
- the header and footer are now hardcoded in /mambots/content/geshi.php ```
     if ($useHeader) {

   $header="<div class=\"sourcecodehead\">

             <div class=\"sourcecodetitle\">

	     <LANGUAGE> Source code

	    

	   "; 

   $geshi->set_header_content($header);

 }

 

 if ($useFooter) {

   $footer="<div class=\"sourcecodefooter\">

	     <div class=\"sourcecodetitle\">footer

	     

	   "; 

   $geshi->set_footer_content($footer); 
    ```
    
     }

**\#### example of use ####,**   
  lang="" is recommended since geshi can not detect thhe language automatically:

 **example with java:**  
 <pre lang="java" useCSS="false" useHeader="false">  
 private long startStatistics() {  
 long before = System.currentTimeMillis();  
 if (logger.isDebugEnabled()) {  
 logger.debug("Start conversion " );  
 }  
 return before;  
 }  
 </pre>

 publish of course the Geshi mambots in Mambo!

Have fun!

Kudo to the Geshi developer!  
Kudo to all GPL project around the world!  
Open source is the future of computing 😉

```
```