---
id: 4565
title: 'Update JetBrains TeamCity in one click'
date: '2009-07-30T23:32:43+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4565'
permalink: /development/update-jetbrains-teamcity-in-one-click/
image: /wp-content/uploads/2010/05/teamcity512_thumb.png
tags:
    - backup
    - bash
    - box
    - capabilities
    - code
    - continuous
    - copy
    - created
    - current
    - database
    - developed
    - Download
    - early
    - enjoy
    - HowTo
    - linux
    - teamcity
    - tutorial
---

[![penguin](images/stories/UpdateJetbrainsTeamCityinoneclick_12F51/penguin_thumb.jpg)](images/stories/UpdateJetbrainsTeamCityinoneclick_12F51/penguin.jpg) A small script developed to upgrade [TeamCity](http://www.jetbrains.com/teamcity/) with no or less effort! a very simple script, easily extensible.

“[TeamCity](http://www.jetbrains.com/teamcity/) is a continuous integration and build management system. With [TeamCity](http://www.jetbrains.com/teamcity/), you can set up a build server within minutes and enjoy out of the box continuous unit testing, code quality analysis, and early reporting on build problems — even without leaving your favorite IDE. TeamCity offers a gentle learning curve, so you can quickly improve your release management practices by gradually adopting its advanced features and capabilities.”

### Limitations

# This script only work if**

- You run TeamCity using the standalone package provided at <http://www.jetbrains.com/teamcity/download/index.html#linux> under #Linux
- You use MYSQL as an external DB
- You must run it as root (because getting the latest software with wget may not otherwise be possible)
- This script is not endorsed by JetBrains nor official.
- GNU/GPL version 3, use at your own risk, provided as IS

### It must be safe to use, as

- It backup first your database
- it archive your existing TeamCity installation with a timestamp
- it also copy any customizations (server.xml, agent build.properties) you have made to the new installation
- It download automatically and extract teamcity

### Usage

```
# ./updateTeamCity.sh newVersionNumber installPathHome
```

example:

```
/home/teamcity > ./updateTeamCity.sh 4.5.4 /home/teamcity
```

Output of the script

```
stopping current TeamCity at /home/teamcity/TeamCity 
done! 
Read database settings from database.properties 
Moving current TeamCity /home/teamcity/TeamCity to /home/teamcity/TeamCity.20093830 
done! 
Saving database to file system at /home/teamcity/TeamCity.20093830/teamcity.sql 
done! 
getting the latest version at http://download.jetbrains.com/teamcity/TeamCity-4.5.4.tar.gz 
done! 
Unpacking new version 
done!  
Copying previous customizations 
done! 
Copying required 3rd party librairies 
done! 
Copying local agent build.properties to new TeamCity 
done! 
Starting new TeamCity 
done!
```

Don’t expect more at the moment, it has been created to make the update of TeamCity faster for ME now. Feedback is appreciated, and improvement/ideas are always welcomed.

[GET THE SCRIPT updateTeamCity HERE](http://www.waltercedric.com/downloads/cat_view/379-linux.html)