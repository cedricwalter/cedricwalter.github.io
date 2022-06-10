---
id: 2399
title: 'Status of JoomlaCloud'
date: '2006-03-29T23:46:21+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2399'
permalink: /joomla/status-of-joomlacloud/
tags:
    - functionalities
    - joomla
---

 The code is now working with an advance caching mechanism (a recommended feature since TagCloud can be overkill on big site).

<span style="font-weight: bold;">I also wrote:

- A mambot: <span style="font-style: italic;">joomlacloudbot.php which is activated onContent and scan scan <span style="font-weight: bold;">onDemandyour articles, site.
- A module<span style="font-style: italic;"> mod\_joomlacloud.php displaying <span style="font-weight: bold;">onDemand a site wide tag cloud or only a section, category, item

<span style="font-weight: bold;">Dont ask for a release, 

- It will be out when it is ready!
- I am doing this on my spare <strike>night</strike> time 😉
- The principle of tagCloud is quite easy, can be done in 20 lines of php BUT I wrote my component by keeping in mind the word extensibility!

<span style="font-weight: bold;">Some words on architecture:

- <span style="font-weight: bold;">Analyser classes are responsible for tokenizing text using different strategies, removing certain words based on dictionary, words length too small…etc
- <span style="font-weight: bold;">Scanner classes are responsible for giving back a subset of data of your site
- <span style="font-weight: bold;">Limiter classes are cutting the collection of tokenized words, for example you only want the tag cloud of the most 100 words, or only the least used words or …
- <span style="font-weight: bold;">Cache classes are storing TagCloud result in Database for efficiency, but using file datastore is also possible, or no cache
- <span style="font-weight: bold;">Engine classes are of 3 Types:
- <span style="font-weight: bold; font-style: italic;">SuperCloudEngine is giving some basic functionalities for creating a TagCloud
- <span style="font-weight: bold; font-style: italic;">PluginsCloudEngine can customized the way links are created in the cloud
- <span style="font-weight: bold; font-style: italic;">LazyCloudEngine is using a PluginsCloudEngine and a … cache for efficiency, creating cloud <span style="font-weight: bold;">onDemand and saving them to database

and for a total of 80 files ….

<span style="font-weight: bold;">Right now, what is still open:  


- Testing administrator panel, I assume it is 70% correct
- Testing installer -&gt; only boring, modifying XML by hand
- Testing module and mambots, maybe some more code to write

Everything is checked daily in CVS

For a planning point of view, I will deliver first #JoomlaCloud since it has never been released in the wild, then finishing migration of OpenComment to #Joomla 1.1 API

 {mosgoogle center}