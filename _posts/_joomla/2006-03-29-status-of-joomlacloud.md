---
id: 2399
title: 'Status of JoomlaCloud'
date: '2006-03-29T23:46:21+02:00'
author: 'Cédric Walter'



tags:
    - functionalities
    - joomla
---

 The code is now working with an advance caching mechanism (a recommended feature since TagCloud can be overkill on big site).

I also wrote:

- A mambot: joomlacloudbot.php which is activated onContent and scan scanonDemandyour articles, site.
- A module mod\_joomlacloud.php displayingonDemand a site wide tag cloud or only a section, category, item

Dont ask for a release, 

- It will be out when it is ready!
- I am doing this on my spare <strike>night</strike> time 😉
- The principle of tagCloud is quite easy, can be done in 20 lines of php BUT I wrote my component by keeping in mind the word extensibility!

Some words on architecture:

-Analyser classes are responsible for tokenizing text using different strategies, removing certain words based on dictionary, words length too small…etc
-Scanner classes are responsible for giving back a subset of data of your site
-Limiter classes are cutting the collection of tokenized words, for example you only want the tag cloud of the most 100 words, or only the least used words or …
-Cache classes are storing TagCloud result in Database for efficiency, but using file datastore is also possible, or no cache
-Engine classes are of 3 Types:
- SuperCloudEngine is giving some basic functionalities for creating a TagCloud
- PluginsCloudEngine can customized the way links are created in the cloud
- LazyCloudEngine is using a PluginsCloudEngine and a … cache for efficiency, creating cloudonDemand and saving them to database

and for a total of 80 files ….

Right now, what is still open:  


- Testing administrator panel, I assume it is 70% correct
- Testing installer -> only boring, modifying XML by hand
- Testing module and mambots, maybe some more code to write

Everything is checked daily in CVS

For a planning point of view, I will deliver first #JoomlaCloud since it has never been released in the wild, then finishing migration of OpenComment to #Joomla 1.1 API

 