---

title: 'Project Scribble at sourceforge'
date: '2005-04-14T13:35:43+02:00'
author: 'Cédric Walter'



tags:
- development
- dictionnary
- independent
---

I have convince Ianl Ford to publish the source code of
it’s [game Scribble screenshot here](http://www.ianford.com/scribble/), to
sourceforge [Project: Scribble Game](http://sourceforge.net/projects/scribble/)

A word game featuring double-letter score, triple-word score, etc. You play against the fast and furious robot. 100%
#Java. The project could use a look-ahead algorithm and some better choices of dictionaries.  
Development Status: 5 – Production/Stable

- Intended Audience: Developers, Education
- Operating System: OS Independent (Written in an interpreted language)
- Programming Language: #Java
- Topic: Board Games
- User Interface: #Java AWT

# I have already done a lot of small things…thanks to eclipse and it’s integrated refactoring browser**

- Huge refactoring : 12 new packages, no magic values in code, interface, factories, abstractions, and so on…
- Add log4j support,
- Create a robot: Dummy because Einstein as strategist is playing too good
- A french dictionnary (ODS4: **369085 words**) and a german one are on track…
- Internationalization: US-FR-DE

You can participate to the project by contacting the administrator, I especially need help with AWT/(use SWT?)  
I will publish change to sourceforge CVS soon…