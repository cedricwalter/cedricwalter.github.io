---

title: 'Migration code tool joomla! 1.x to Joomla! 1.5'
date: '2007-07-15T23:43:45+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2007/07/joomla_1.5.gif
tags:
    - joomla
---

 ![](/assets/images/2007/07/joomla_1.5.gif)I write a small tool, it will be never complete, but it has help me a lot.

A poor man approach (a macro) in order to solve trivial (and boring) migration code of #Joomla 1.X code to #Joomla 1.5 code…

1. Dowload Jedit from [www.jedit.org](http://www.jedit.org/) (stable version 4.2 for example)
2. Save this file <span style="font-family: courier new,courier,monospace;">joomla1x\_to\_joomla15.bsh in   
    <span style="font-family: courier new,courier,monospace;">C:\\Documents and Settings\\<span style="color: rgb(255, 0, 0); font-family: courier new,courier,monospace;">{yourWindowsLogin}<span style="font-family: courier new,courier,monospace;">\\.jedit\\macros\\
3. Start jedit and open ALL FILES in the same windows,
4. Go to macros menu and run the macro joomla1x\_to\_joomla15

Note: this macro just replace text and won’t do any architecture analysis/changes, even if they are needed in order to make your component run in #Joomla! 1.5

This tool is not perfect or bullet proof, use at your own risk, feel free to make changes and report them to me

license http://www.gnu.org/copyleft/gpl.html GNU/GPL

[Download HERE](http://www.waltercedric.com/component/option,com_docman/task,cat_view/gid,340/Itemid,64/)