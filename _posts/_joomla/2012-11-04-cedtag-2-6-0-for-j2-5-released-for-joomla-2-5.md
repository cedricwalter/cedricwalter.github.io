---
id: 7831
title: 'cedTag 2.6.0 for J2.5 released for Joomla 2.5'
date: '2012-11-04T11:35:30+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/download-zip.png
tags:
    - joomla
---

# Warning

# IT IS MANDATORAY TO COMPLETELY REMOVE ALL VERSION < 2.6.0 BEFORE INSTALLING THIS NEW ONE!** **Go to the Extension Manager under the tab Manage, enter in filter "tag", select all and click Actions – Uninstall**   
Reason: I did change a lot of folder name and file casing casing to be more #Joomla compliant   
Don’t be scared you will not loose any Tags or data from your database! uninstalling do not remove currently any tables!

Your ideas are important, [feel free to contact me](http://www.waltercedric.com/contact.html) and ask for new features!

[![](/assets/images/2011/11/download-zip.png)](http://www.waltercedric.com/downloads/cedtags.html)[![](/assets/images/2012/11/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Taxonomies_and_Tags_support_for_Joomla)[![](/assets/images/2011/12/support.png)](http://forums.waltercedric.com/index.php#c23)

# New &amp; Noteworthy

## Security

# SECURITY**: all Ajax operations+Admin operation are now protected with a Joomla token to avoid CSRF

# SECURITY**: All SQL statement have been migrated to use Joomla Query Object so the code should be portable now under SQL Server, Postgress

Code review and refactoring is a recurring task for me!

## Performances

# PERF**: Faster escaping in modules if there is no tags matching any criteria,

## Features

# NEW:** More themes are available.

[![joomla_cedtag_moreThemes](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_moreThemes_thumb.png "joomla_cedtag_moreThemes")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_moreThemes.png)

# NEW**: In “article Manager”, multi-tag filtering it is now possible to simply select multiple tags and/or searching for one tag and then another within the previous results.

[![joomla_cedtag_multitagFiltering](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_multitagFiltering_thumb.png "joomla_cedtag_multitagFiltering")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_multitagFiltering.png)

# NEW**: In “article Manager”, tab index is supported, enter tags hit tab to go to next articles,

# NEW: **Full rewriting of Tag List layout, now table less.

# NEW: **Full rewriting of blog layout: having as much if not all features of the internal [Joomla](http://www.joomla.org/ "Joomla is one of the world’ s most popular open source CMS (content management system).") category blog feature.

- Table less layout,
- Category display,
- Articles Metadata: publish, created, hits,
- Articles operations like print, email,
- As it reuse the setting of Joomla, you’ll have to go to Joomla configuration to make changes or better it will inherit the same setting as Joomla content blog layout.

[![joomla_cedtag_newBlogLayout](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_newBlogLayout_thumb.png "joomla_cedtag_newBlogLayout")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_newBlogLayout.png)

# NEW**: full internationalization of all 5 modules:

- Custom Tags Cloud (en-GB.mod\_cedtagcustom.ini),
- Latest Tags Cloud (en-GB.mod\_cedtaglatest.ini),
- Most Popular Tags Cloud (en-GB.mod\_cedtagmostpopular.ini),
- Most Read Tags Cloud (en-GB.mod\_cedtagmostread.ini),
- Random Tags Cloud (en-GB.mod\_cedtagrandom.ini).

# NEW**: Add “Save” button for “Template manager” and “Stop words”

# NEW**: It is now possible to change the title of tags by changing the value of the key COM\_CEDTAG\_ITEMS\_TITLE in /plugins/content/cedtag/language/en-GB/en-GB.plg\_content\_cedtags.ini

; %1$s = frequency,   
; %2$s = name,   
; %3$s = created,   
; %4$s = hits   
COM\_CEDTAG\_ITEMS\_TITLE="%1$s items tagged with %2$s | created %3$s | Hits: %4$s"

[![joomla_cedtag_ titleofTags](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_-titleofTags_thumb.png "joomla_cedtag_ titleofTags")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_-titleofTags.png)

# NEW**: More Options for Menu Entry “All Tags” Count, Page Title, Meta Description, Meta Keywords, Reverse display and tags ordering. Some default are provided.

[![joomla_cedtag_ alltagsMenuEntry](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_-alltagsMenuEntry_thumb.png "joomla_cedtag_ alltagsMenuEntry")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_-alltagsMenuEntry.png)

# NEW/** ****BUG [Wordle](http://www.wordle.net/ "Wordle: word clouds") ****now working on Linux, was always working on windows due to a path issue to the true type font I did introduced, I took the time to add a lot more settings so you can fully customized the images created!

[![joomla_cedtag_wordle](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_wordle_thumb.png "joomla_cedtag_wordle")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_wordle.png)[![joomla_cedtag_ wordleOptions](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_-wordleOptions_thumb.png "joomla_cedtag_ wordleOptions")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_-wordleOptions.png)

# NEW**: [Rockettheme](http://www.rockettheme.com/ "Rockettheme") Installer removed to use standard Joomla installation packages. To remove now all CedTag components, just remove the main component. No risk of incomplete removal.

[![joomla_cedtag_newInstaller](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_newInstaller_thumb.png "joomla_cedtag_newInstaller")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_newInstaller.png)[![joomla_cedtag_newUninstall](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_newUninstall_thumb.png "joomla_cedtag_newUninstall")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_newUninstall.png)   
# NEW**: menu entries for administration backend

[![joomla_cedtag_MenuEntriesForAdministrationBackend](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_MenuEntriesForAdministrationBackend_thumb.png "joomla_cedtag_MenuEntriesForAdministrationBackend")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_MenuEntriesForAdministrationBackend.png)

# NEW**: 5 Modules are now created as default but not published nor assigned to any page.

[![joomla_cedtag_5ModulesAreNowCreatedAsDefault](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_5ModulesAreNowCreatedAsDefault_thumb.png "joomla_cedtag_5ModulesAreNowCreatedAsDefault")](http://www.waltercedric.com/images/cedThumbnails-2.6.0-for.5-What-to-expect_A08A/joomla_cedtag_5ModulesAreNowCreatedAsDefault.png)

# NEW**: option so front page tagging to be just available in front page edit before , it was too long, and breaks the browsing experience for any logged author browsing the site, sometimes appearing even twice. ([Request](http://forums.waltercedric.com/index.php?topic=1397.0))

 ****

# NEW: **scripts to switch off all subsystem of cedTag if you get no access to your site (happen only when you remove some part and not all of cedTag)

## Known Issues

- CSV export of all tags is currently broken

## Bugs

<font color="#9b00d3">****BUG**:** Error 500 Some people encounter while using URL rewriting.   
Found also that [RokComment](http://www.rockettheme.com/extensions-joomla/rokcomments) is crashing when used with cedTag. I did solve the issue by patching [RokComment](http://www.rockettheme.com/extensions-joomla/rokcomments) (I think the error is there and not in my component). YOu can ask me for the custom build of [RokComment](http://www.rockettheme.com/extensions-joomla/rokcomments).

<font color="#9b00d3">****BUG****: correct handling of trash item in frontend   
<font color="#9b00d3">****BUG****: correct handling of Joomla ACL using authorized access levels for the user   
# BUG**: Can add tag but cannot delete tag, request [http://forums.waltercedric.com/index.php?topic=1401.0**   
BUG**](http://forums.waltercedric.com/index.php?topic=1401.0BUG): Content plugin don’t get executed in blog layout,   
[**BUG**](http://forums.waltercedric.com/index.php?topic=1401.0BUG): wordle links were not supporting SEF   
# BUG**: advertisement code was not allowing html,   
# BUG**: Custom tag cloud module: the SQL query was broken,   
# BUG**: Custom tag cloud font size and title overlay was not defined ,   
# BUG**: All tags layout was not taking “count” into account for limiting the size of the cloud.   
# BUG**: default file css restore was not depending on user selection of theme, as a result restore was always using simple.default.css   
# BUG**: installer now create default modules instances without publishing them.   
# BUG**: metadata of menu entry “All tags” was not reading parameters, now you can set count, sorting, metadata descriptions and keywords   
# BUG**: paging at the limits (where ?limitstart= is in the url) lead to a tag not found.   
# BUG**: “:” was always filtered from tag name even when removed from “Strip Characters”   
# BUG**: Solved “Warning: Missing argument 4 for plgContentCedTags::onContentBeforeDisplay() in plugins/content/cedTags/cedTags.php on line 41"