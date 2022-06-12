---
id: 4490
title: 'Eclipse Galileo aka eclipse 3.5 is here'
date: '2009-06-30T23:02:03+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4490'

header:
  teaser: /assets/images/2009/06/eclipse.galileo.png
---

[![eclipse.galileo](/assets/images/2009/06/eclipse.galileo.png "eclipse.galileo")](http://www.eclipse.org/galileo/)

For the sixth year in a row, the #Eclipse community has delivered its annual release train on its scheduled date. [Galileo](http://www.eclipse.org/galileo/), the 2009 release train, is the largest ever release from the #Eclipse community, [comprising 33 projects](http://www.eclipse.org/galileo/projects.php) and over 24 million lines of code. Over 380 committers from 44 different organizations participated to make this release possible.

[Download it now](http://www.eclipse.org/downloads/)

Note: Subversive is part of Galileo, but the first time you sync your code, you may get in SVN console a red error message:

Selected SVN connector library is not available or cannot be loaded.   
If you selected native #JavaHL connector, please check if binaries are available or install and select pure #Java Subversion connector from the plug-in connectors update site.   
If connectors already installed then you can change the selected one at: Window->Preferences->Team->SVN->SVN Client.

That’s because SVN connectors are not part of Galileo…

- Subversive Update Site is a part of Galileo Update Site.   
    Look at Help > Install New Software… > select Galileo – http://download.eclipse.org/release/galileo > Collaboration Tools
- And install Subversive
- Add now the following update site:   
    <http://community.polarion.com/projects/subversive/download/eclipse/2.0/galileo-site/> – \[required\] Subversive SVN Connectors   
    and   
    <http://community.polarion.com/projects/subversive/download/integrations/galileo-site/> – \[optional\] Subversive Integrations   
    and install the additional SVN connectors

The site where you’ll be able to [download subversive connectors is HERE](http://www.polarion.com/products/svn/subversive.php?src=eclipseproject)