---
id: 7686
title: 'cedTag 2.5.3 for J2.5 Released'
date: '2012-05-21T08:20:00+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/05/cedTag.png
tags:
    - joomla
---

![cedTag](/assets/images/2012/05/cedTag.png "cedTag")

CedTag has been updated to version 2.5.3 and correct a lot of bugs and contains some nice features.

CedTag is the continuation of the GPL component #Joomla Tags ([www.joomlatags.org](http://www.joomlatags.org/)), **Most of the code**has been rewritten according to the new standard of #Joomla 2.5, the component has been greatly extended and most bugs have been removed. I will continue removing, refactoring existing codebase, in order to be able to add new features faster.

### What’s new

# NEW**: Auto completion of tags in frontend and backend using jQuery. You can add new tags, search and remove tags without fearing creating duplicates!   
# NEW**: #Joomla ACL support,   
# NEW**: Add basic support for themes, still need some css correction for optimal results   
# NEW: **Use confirmation popup windows for all delete/clear operations,   
# NEW**: New option to switch off tags title in front page,   
# NEW**: No white background in simple.css for people loving their black background as default,   
# NEW**: cedTag is now having no warnings/errors in PHP error level E\_STRICT   
# BUG**: I cant disable [cedTag](http://wiki.waltercedric.com/index.php?title=Taxonomies_and_Tags_support_for_Joomla) on front page when i disable it any thing not change…i want show tags only on full article view…   
# BUG**: Working update manager: starting at version 2.5.3 you can update with one click in the update manager.   
# BUG**: Did remove a hack of me for testing -> it was not possible to switch off the add tags button in frontend since i fixcoded to true 🙁   
# BUG**: Correct issue in editor xtd plugin blocking users to edit/view articles in frontend

#### Code cleaning

- Rewrite 90% of all query string to use the $query object api of joomla
- Did clean the content plugin a lot,

CedTag is used on this site with more than 5000 tags in 2200 articles.

Your ideas are important, [feel free to contact me](http://www.waltercedric.com/contact.html "Contact me") and ask for new features!

[![](/assets/images/2011/11/download-zip.png)](http://www.waltercedric.com/downloads/cedtags.html "Download CedTag for #Joomla")[![](/assets/images/2012/05/documentation.jpg)](http://wiki.waltercedric.com/index.php?title=Taxonomies_and_Tags_support_for_Joomla "Documentation for CedTag for #Joomla")[![](/assets/images/2011/12/support.png)](http://forums.waltercedric.com/index.php#c23 "Support for CedTag for #Joomla")