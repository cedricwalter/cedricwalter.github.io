---
id: 7668
title: 'cedTag 2.5.1 for J2.5 Released'
date: '2012-05-02T22:11:45+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7668'
permalink: /joomla/cedtag-2-5-1-for-j2-5-released/
image: /wp-content/uploads/2012/05/cedTag.png
tags:
    - joomla
---

<a>![cedTag](/assets/images/2012/05/cedTag.png "cedTag")</a>

CedTag has been updated to version 2.5.1 and correct a lot of bugs and contains some nice features.

CedTag is the continuation of the GPL component #Joomla Tags ([www.joomlatags.org](http://www.joomlatags.org)), **Most of the code** has been rewritten according to the new standard of #Joomla 2.5, the component has been greatly extended and most bugs have been removed. I will continue removing, refactoring existing codebase, in order to be able to add new features faster.

CedTag is used on this site with more than 5000 tags in 2200 articles.

Your ideas are important, [feel free to contact me](contact.html "Contact me") and ask for new features!

You can download the latest version and just upgrade without any loss of data by reinstalling the package

[![](/assets/images/2011/11/download-zip.png)](downloads/cedtags.html "Download CedTag for #Joomla")[![](/assets/images/2012/05/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Main_Page#Taxonomies_and_Tags_support_for_Joomla "Documentation for CedTag for #Joomla")[![](/assets/images/2011/12/support.png)](http://forums.waltercedric.com/index.php#c23 "Support for CedTag for #Joomla")

## What’s new

Compare to #Joomla Tags… a lot in fact 🙂

### New administrator panel

[![cedTagNewAdminPanel](/assets/images/2012/05/cedTagNewAdminPanel_thumb.png "cedTagNewAdminPanel")](/assets/images/2012/05/cedTagNewAdminPanel.png)

### All in one install

[![cedTag_install_02](/assets/images/2012/05/cedTag_install_02_thumb.png "cedTag_install_02")](/assets/images/2012/05/cedTag_install_02.png)

### Main tag cloud can be limited in size

#### [![tagcloudLimit](/assets/images/2012/05/tagcloudLimit_thumb.png "tagcloudLimit")](/assets/images/2012/05/tagcloudLimit.png)

### Stop words

Stop Words do not appear as Terms because they are either insignificant (i.e., articles, prepositions) or common. Filtering can now be now be switched off. 600 Words in English and 950 in German are part of the extension.

[![cedTags_hasStopWords_02](/assets/images/2012/05/cedTags_hasStopWords_02_thumb.png "cedTags_hasStopWords_02")](/assets/images/2012/05/cedTags_hasStopWords_02.png)[![stopwordsOff](/assets/images/2012/05/stopwordsOff_thumb.png "stopwordsOff")](/assets/images/2012/05/stopwordsOff.png)

### Google font

More than 501 fonts can be used, 15 are proposed as default.

[![cedTagsSupportGoogleFonts](/assets/images/2012/05/cedTagsSupportGoogleFonts_thumb.png "cedTagsSupportGoogleFonts")](/assets/images/2012/05/cedTagsSupportGoogleFonts.png)[![googleFont](/assets/images/2012/05/googleFont_thumb.png "googleFont")](/assets/images/2012/05/googleFont.png)

### New import function

# Import from Joomla Tags** of Phil Taylor (extensions discontinued working only for Joomla 1.5)

### New Export functions

[![cedTagExport](/assets/images/2012/05/cedTagExport_thumb.png "cedTagExport")](/assets/images/2012/05/cedTagExport.png)

### Export to Joomla Meta Keywords

You can overwrite all Joomla meta keywords of all your articles in one click using all you tags and increasing your SEO.

### CSV export

[![exportCsv](/assets/images/2012/05/exportCsv_thumb.png "exportCsv")](/assets/images/2012/05/exportCsv.png)

### Advertisement can now be switch off

[![adsOff](/assets/images/2012/05/adsOff_thumb.png "adsOff")](/assets/images/2012/05/adsOff.png)

### Tags can be switched on/off when viewing an article, and positioned according to your needs

[![articleTagView](/assets/images/2012/05/articleTagView_thumb.png "articleTagView")](/assets/images/2012/05/articleTagView.png)

### Tags display can be switched on/off in FrontPage, and positioned according to your needs

[![showTagFrontpage](/assets/images/2012/05/showTagFrontpage_thumb.png "showTagFrontpage")](/assets/images/2012/05/showTagFrontpage.png)

### Sexy articles manager from Joomla 2.5 extended with Tag batch import/add/remove

[![cedTag_newTagManager](/assets/images/2012/05/cedTag_newTagManager_thumb.png "cedTag_newTagManager")](/assets/images/2012/05/cedTag_newTagManager.png)

### Statistics page

- How mane terms are published/unpublished in percentage
- How many terms are having descriptions
- How many articles are still not being tagged

[![cedTagsStatistics](/assets/images/2012/05/cedTagsStatistics_thumb.png "cedTagsStatistics")](/assets/images/2012/05/cedTagsStatistics.png)

### Modules

[![cedTagModule](/assets/images/2012/05/cedTagModule_thumb.png "cedTagModule")](/assets/images/2012/05/cedTagModule.png)

All 5 modules were totally rewritten!

- CSS3 modules enable
- Display hits &amp; Number of items tagged

### Frequency to Size algorithm can be selected

- Pareto distribution
- Dynamical number of buckets
- Fix number of buckets coming soon

[![cedTagMappingFrequency](/assets/images/2012/05/cedTagMappingFrequency_thumb.png "cedTagMappingFrequency")](/assets/images/2012/05/cedTagMappingFrequency.png)

### E\_STRICT

When enabled, messages will be issued to warn you about code usage which is deprecated or which may not be future-proof. The whole codebase of CedTag is now E\_STRICT

# Features in development

### Themes support

basic theme support 4 are in development

### HTML5 tagcloud

Animated Tag cloud without Adobe Flash! thanks to HTML5 TagCanvas, some issues still need to be solved when multiple tag cloud are displayed on same page due to an issue in TagCanvas.

### Wordle Tag clouds

Define a menu entry pointing to All tags or Wordle. Bug in the library generating the cloud that has to be solved.

### Joomla update manager

starting with version 2.5.1, you can use the Joomla update manager