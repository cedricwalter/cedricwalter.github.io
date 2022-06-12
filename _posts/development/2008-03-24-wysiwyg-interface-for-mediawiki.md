---
id: 3304
title: 'WYSIWYG interface for MediaWiki'
date: '2008-03-24T17:11:40+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3304'

header:
  teaser: /assets/images/2008/03/wysiwyg.editor.mediawiki.gif
---

I’ve just updated my [WIKI](http://wiki.waltercedric.com) to the latest version 1.12 AND it now work with FCK editor! This remove all the pain to learn and imaging how the result will look like while editing [WIKI](http://wiki.waltercedric.com) pages!

installation was very straightforward..

- [Download FCKeditor extension](http://mediawiki.fckeditor.net/index.php/Main_Page#Download_it.21), unpack it and place in the extensions directory.
- Add this line at the end of **LocalSettings.php**:   
    require\_once ($IP."/extensions/FCKeditor/FCKeditor.php");

[![wysiwyg.editor.mediawiki](/assets/images/2008/03/wysiwyg.editor.mediawiki.gif)](http://wiki.waltercedric.com)

A Demo is available [at the official Sandbox](http://mediawiki.fckeditor.net/index.php/Sandbox)

The [main page of MediaWiki + FCK editor being here](http://mediawiki.fckeditor.net/).

There is also an **offline** [solution available HERE for preparing articles when you are not online](http://forums.anotherwebcom.com/vb/wiki.php?page=Category:Offline_MediaWiki_Text_Editor):

This program will let you create MediaWiki articles offline on your home computer. The offline editor has all the Wiki mark-up/syntax like a MediaWiki edit-box does.   
After you have a article how you want it you can then save it to a text or XML file for later posting to the web.

You can get more interesting extension for MediaWiki at the [official MediaWiki extensions page](http://www.mediawiki.org/wiki/Extension:Contents)

Moreover, [reCaptcha fro MediaWiki](http://recaptcha.net/plugins/mediawiki/) has been installed to protect the content

[![recapctha.mediawiki](/assets/images/2008/03/recapctha.mediawiki_thumb.gif)](/assets/images/2008/03/recapctha.mediawiki.gif)