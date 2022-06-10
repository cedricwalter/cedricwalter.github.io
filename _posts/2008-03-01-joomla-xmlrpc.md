---
id: 3221
title: 'Joomla XMLRPC'
date: '2008-03-01T15:33:07+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3221'
permalink: /joomla/joomla-xmlrpc/
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2008/03/joomla_cms.png)

| ![bloggar for joomla](/assets/images/2008/03/01.bloggar.for_.joomla.gif) | XML-RPC allow other programs to interact with the backend of your publishing system.     In practical terms, You can post an entry to a Metaweblog API-compatible site from     an external program!  Using such tool has a lot of advantages:  - Post and Publish on most blogs/cms, one tool to rule them all - Edit Posts and Templates without timeout, browser crash 😉 - Save Posts locally for further publishing, - Import Text files, - Add links and images, more complex formatting - Format text font and alignment faster, - Multiple accounts and blogs supported in one tools - Post/visualize preview - Colorized HTML code - Find/Replace option - Post to many blogs at the same time! - Spell Checking - File and Image Upload |
|---|---|

 Back to joomla! There is a lot of API to interact with #Joomla: XML-RPC, Blogger and **MetaWeblog API.**

The **MetaWeblog API,** is an [application programming interface](http://en.wikipedia.org/wiki/Application_programming_interface) created by [Dave Winer](http://en.wikipedia.org/wiki/Dave_Winer) that enables [blog](http://en.wikipedia.org/wiki/Blogs) entries to be written, edited, and deleted using client software or web services.  
 The API is implemented as an [XML-RPC](http://en.wikipedia.org/wiki/XML-RPC) web service with three methods whose names describe their function: metaweblog.newPost(), metaweblog.getPost() and metaweblog.editPost(). These methods take arguments that specify the blog author’s username and password along with information related to an individual weblog entry (also called a “post.”). [\[from wikipedia\]](http://en.wikipedia.org/wiki/MetaWeblog)

For #Joomla 1.5 you can use **Metaweblog API**, which can be dwonloaded here: [download MetaWeblog API at #JoomlaCode ](http://joomlacode.org/gf/project/metaweblogapi/frs/?action=FrsReleaseBrowse&frs_package_id=3263)The latest version that has work for me is the version 0.9. Working yes but with some limitations, you can’t for example put any pictures in your post. <span style="font-weight: bold;">Movable API is another 3rd party plugin developed in japan by Jomler!.net exist for both #Joomla 1.0 and #Joomla! 1.5 ([Metaweblog plugin for #Joomla](http://www.joomler.net/component/option,com_alphacontent/section,2/cat,57/task,view/id,168/Itemid,7/)). Movable API is much more powerful than **Metaweblog<span style="font-weight: normal;">, but I did not succeed in making it running**

## <span style="font-weight: bold;">Setting Joomla 1.5 for XMLRPC

 Go to global System settings, and enable Web Services

![](/assets/images/2008/03/joomla.system.settings.xmlrpc.jpg)

Install the plugin using the Plugin manager, and do not forget to publish it

![joomla plugin manager](/assets/images/2008/03/joomla.plugin.manager.xmlrpc.gif)

Then you’ll need a client software running locally:

**Linux**

- [BlogGTK](http://blogtk.sourceforge.net/)
- [Gnome-Blog](http://www.gnome.org/%7Eseth/gnome-blog/)
- [Drivel](http://www.dropline.net/drivel/)

**Windows**

- w.Bloggar (opensource – [http://www.wbloggar.com/](http://www.wbloggar.com/ "http://www.wbloggar.com/"))
- Using Flock web browser ( <http://www.flock.com/> )
- Windows Live Writer (proprietary – free)
- ScribeFire (Firefox plugin –   
     <https://addons.mozilla.org/en-US/firefox/addon/1730>)
- [BlogJet](http://blogjet.com/)
- [BlogWizard](http://www.lionhardt.ca/bw/)
- [Chrysanth WebStory](http://www.thewebstory.com/)
- [Ecto](http://ecto.kung-foo.tv/)
- [NBlog](http://www.codeproject.com/cs/library/nblog.asp)
- [PerfectJournal](http://www.perfectjournal.com/)
- [Photolightning](http://www.photolightning.com/partner/blogger-landing.html)
- [PowerBlog](http://sourceforge.net/projects/pwrblog/)
- [RocketPost](http://www.anconia.com/rocketpost/)
- [Semagic](http://semagic.sourceforge.net/)

## Lets look at the installation of some of them…

# w.Bloggar

Download [w.Bloggar](http://www.wbloggar.com/) and install it, the first start of w.Bloggar will pop up this windows:

 ![02.bloggar.for.joomla.gif](/assets/images/2008/03/02.bloggar.for_.joomla.gif)<span style="font-weight: bold;">  
 ![03.bloggar.for.joomla.gif](/assets/images/2008/03/03.bloggar.for_.joomla.gif)   
 ![04.bloggar.for.joomla.gif](/assets/images/2008/03/04.bloggar.for_.joomla.gif)   
 ![06.bloggar.for.joomla.gif](/assets/images/2008/03/06.bloggar.for_.joomla.gif)   
 How this article look like in w.Bloggar

<span style="font-weight: bold;">![](/assets/images/2008/03/08.bloggar.running.with_.joomla.gif) 

# **Windows Live Writer 2008**

Can be download free of charge at [http://writer.live.com](http://writer.live.com/)

Small, fast, has a lot of features and plugins, but run only in windows. Be careful during installation and read carefully all step to no get floaded by Microsoft services (set homepage to live, install messenger, install x and y)

 ![live.writer.menubar.gif](/assets/images/2008/03/live.writer.menubar.gif "live.writer.menubar.gif")

![live.writer.add.weblog.account.gif](/assets/images/2008/03/live.writer.add_.weblog.account.gif)

![live.writer.select.other.gif](/assets/images/2008/03/live.writer.select.other_.gif)

![live.writer.enter.login.gif](/assets/images/2008/03/live.writer.enter_.login_.gif)

![live.writer.select.provider.gif](/assets/images/2008/03/live.writer.select.provider.gif)

And voila You can now list categories and publish your entries usig live writer.

![live.writer.forJoomla.gif](/assets/images/2008/03/live.writer.forJoomla.gif)

Resources:   
 – API <http://www.xmlrpc.com/metaWeblogApi>