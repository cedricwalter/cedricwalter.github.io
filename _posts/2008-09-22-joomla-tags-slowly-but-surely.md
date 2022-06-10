---
id: 3849
title: 'Joomla tags, slowly but surely'
date: '2008-09-22T23:18:47+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3849'
permalink: /joomla/joomla-tags-slowly-but-surely/
---

I am currently checking all articles without tags, so far only 622 articles (on 1359 articles) have no tags at all…

For those, that want to list all articles having no tags, fire up your favorite SQL browser, and just execute:

```
select title from jos_content where id not <span class="kwrd">in (SELECT contentid FROM jos_tag_category_map);
```

This will return all articles without any tags.

I am slowly trying to change that. By the way, It seems more and more people browse my homepage again (50’000 per months) which is 1/10th of last year, but it goes up everyday. As always, no good content, no high page rank.

I will try to concentrate a bit on #Joomla Comment development, and also publish some good articles that are waiting in my draft folder.