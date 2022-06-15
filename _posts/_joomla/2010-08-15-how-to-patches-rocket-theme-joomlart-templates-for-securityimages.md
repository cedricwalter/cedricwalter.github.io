---

title: 'How to patches Rocket Theme/JoomlArt templates for SecurityImages'
date: '2010-08-15T16:11:24+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2010/08/rockettheme.png
tags:
    - internal
    - joomla
    - patches
---

[![rockettheme](/assets/images/2010/08/rockettheme.png "rockettheme")](http://www.rockettheme.com/joomla?xyz=2643)

Note: I’ll do this for you, but you’ll have to send me the template per mail first. Since most of the [RocketTheme](http://www.rockettheme.com/joomla?xyz=2643) templates are commercial. I will send it back to you patched.

# Example_patching.C2.A0ja_purity_template.zip"></a>

# Example patching ja\_purity\_template.zip**

1. Download [beyond compare](http://www.scootersoftware.com/) and install (trial 30 days)
2. Download an existing patches for joomla! for example [Joomla\_1.5.20-Stable-Full\_PackageForSecurityImages5.1.x\_v01.02.00](joomla-releases-mainmenu-269.html?QUERY_STRING=#Joomla!%201.5%20patches)

# Select both files**

- Joomla\_1.5.18-Stable-Full\_PackageForSecurityImages5.1.x\_v01.02.00
- ja\_purity\_template.zip

Right click and select compare

Move to ja\_purity\_template.zip\\template\\ja\_purity\\html in the left windows and right click, select “Set a base folder”, do the same in the right windows and select “components” and right click, select “Set a base folder”

[![rocketThemeForSecurityImages001](/assets/images/2010/08/rocketThemeForSecurityImages001_thumb.png "rocketThemeForSecurityImages001")](/assets/images/2010/08/rocketThemeForSecurityImages001.png)

Now move to each file, you’ll see that Rocketthemes is overriding internal file of #Joomla! (this is allowed), select on rigth side a file default\_form.php and right click “compare to” (or click F7), select on the other side the same file name at an equivalent position in file system

[![rocketThemeForSecurityImages002](/assets/images/2010/08/rocketThemeForSecurityImages002_thumb.png "rocketThemeForSecurityImages002")](/assets/images/2010/08/rocketThemeForSecurityImages002.png)

You see now the differences, the objective is to copy some part of the left side into the right side, select code on the right side and click the arrow to copy a block of code,

[![rocketThemeForSecurityImages003](/assets/images/2010/08/rocketThemeForSecurityImages003_thumb.png "rocketThemeForSecurityImages003")](/assets/images/2010/08/rocketThemeForSecurityImages003.png)

If you succeed, carefully copying the code, you ll have a Rocket Theme (or any other [Joomla](http://www.joomla.org)! templates) patched for SecurityImages.

If you can’t do this, remember ill do it for you! Templates that I already patched are

- jA\_purity
- JA Opal

[This post is cross-posted from my WIKI](http://wiki.waltercedric.com/index.php?title=SecurityImages5.0.X#How_to_create_patches_yourself_for_RocketTheme.C2.A0templates)