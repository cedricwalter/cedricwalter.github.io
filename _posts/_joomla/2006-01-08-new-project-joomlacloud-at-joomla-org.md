---

title: 'New Project: joomlacloud at joomla.org'
date: '2006-01-08T20:22:51+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/01/tn_joomlacloud1.gif
tags:
    - configurable
    - joomla
    - refactoring
---

 I am proud to announce You that I’ve create a new project at #Joomla forge: joomlacloud (link soon here)

A tag cloud (more traditionally known as a weighted list in the field of visual design) is a visual depiction of content tags used on a website. Often, more frequently used tags are depicted in a larger font or otherwise emphasized, while the displayed order is generally alphabetical. Thus both finding a tag by alphabet and by popularity is possible. Selecting a single tag within a tag cloud will generally lead to a collection of items that are associated with that tag. [from WikiPedia](http://en.wikipedia.org/wiki/Tag_cloud)

Features:

- Css driven
- Ablity to count words either in title, metadesc, subtitle, articles text,
- Sorting results

This component is able to display in a graphical way a list of terms and present to the users…

What have to be done:

1. Implement a cache, counting and sorting words in a big site may be inaceptable in realtime…for my site it take <strike>2s</strike> to create the tag clouds based on articles title…
2. Configurable script using a config file,
3. Finishing code to support relationnship like [on this site](http://www.pacificepoch.com/keywordmap.php) (great idea by the way)
4. Create an admin panel,
5. Create a module,
6. Refactoring, refactoring, refactoring!

and what does it look like? [see here for existing example](http://www.flickr.com/photos/tags/) and below for my running version 🙂

| [![](/assets/images/2006/01/tn_joomlacloud1.gif)](/assets/images/2006/01/joomlacloud1.gif) | [![](/assets/images/2006/01/tn_joomlacloud2.gif)](/assets/images/2006/01/joomlacloud2.gif) |
|---|---|
| using default #Joomla articles database:    8 words found | <a>www.waltercedric.com</a>    production database: 1780 words found |