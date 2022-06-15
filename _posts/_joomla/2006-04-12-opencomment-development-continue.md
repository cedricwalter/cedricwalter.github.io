---

title: 'opencomment development continue'
date: '2006-04-12T20:27:14+02:00'
author: 'Cédric Walter'



tags:
    - joomla
---

# OpenComment will be hopefully the commenting system for #Joomla all of You are waiting for….**

# CVS**

The freezed version in CVS **v03\_00\_00** is the latest or best code tailored for #Joomla 1.0.X, this version has been frozen because I want to concentrate on #Joomla 1.5.X, and this after Marko Schmuck, a core developer of #Joomla has get in touch with me.  
The CVS Head now contains a #Joomla 1.5.X code! it wont run in #Joomla 1.0.8  
While I understand a lot of people around there do not want to move to 1.5 so fast (including me, too much content on my site). I can no defend that position. As soon as 1.5 is stable We will see a lot of attack for 1.0.X and it is better to always run the latest code… the new version is also a more Object Oriented and clean.  
So You are free to create a CVS branch on v03\_00\_00…but try also to keep in mind that code must be also backported to CVS HEAD…  
In clear text: the CVS head you may checkout IS FOR #Joomla 1.1alpha2 (soon joomla 1.5)

# SQL**

I have committed 2 minutes ago….

- Sql script to create and feed additionnal opencomment tables.
- It allow You, as a developer, to install com\_opencomment even without having a final XML installer
- It also fill the database with some sample data.
- At the end, these file can be use to create the installer in PHP

I am working, with a database mosdev, and table are prefixed with mosdev\_   
This is not an issue using an installer because #Joomla/Mambo can use tablename from configuration.php   
Simply change content of all files to meet your database naming convention

1. use right DB name
2. right prefix tablename   
    and execute all scripts…