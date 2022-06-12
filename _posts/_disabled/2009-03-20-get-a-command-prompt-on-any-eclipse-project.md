---
id: 4207
title: 'Get a command prompt on any Eclipse project'
date: '2009-03-20T23:18:19+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4207'

---

[![eclipse](/assets/images/2009/03/eclipse_thumb.png "eclipse")](/assets/images/2009/03/eclipse.png)

A very little trick that allow you to quickly run any operation involving a DOS command on an [Eclipse](http://www.eclipse.org/) project. Go to the external launcher, and create a new configuration.

This trick may be useful for running your [Maven](http://maven.apache.org/) set of command without any dependencies to [M2Eclipse](http://m2eclipse.codehaus.org/).

# Location**: {ENV\_VAR:COMSPEC}   
# Working Directory:** {project\_loc}

![eclipse.open.command.line](/assets/images/2009/03/eclipse.open_.command.line_.png "eclipse.open.command.line")

{ENV\_VAR}

Returns the value of an environment variable. An environment variable name must be specified as an argument.

![command.line.prompt](/assets/images/2009/03/command.line_.prompt.png "command.line.prompt")