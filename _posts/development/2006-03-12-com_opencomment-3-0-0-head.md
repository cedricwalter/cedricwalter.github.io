---

title: 'com_opencomment 3.0.0 Head'
date: '2006-03-12T00:15:03+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/tn_opencomment3.0.0IsBorn.gif
tags:
    - functionalities
---

You can see here the state of com\_opencomment cvs HEAD after a coding marathon…

[![](/assets/images/2006/03/tn_opencomment3.0.0IsBorn.gif)](/assets/images/2006/03/opencomment3.0.0IsBorn.gif)

Dont be so enthousiast, there is some nasty bugs in it…and not all functionalities are in place (email, rating) but the opencommentbot is more than finished…

The feature show/hide a la Phil Taylor (many request) is working but do not forget that it use a trick: it only change wih javascript the visibility of a DIV element -> the user is still loading all comments and the page is still as heavy as before, the only win is that the user do not get disturb by the number of comments…

Concerning existing comments, no worry, I will provide during the install scripts to rename, alter the akocomment tables.

# New functionnalities are what You see in the picture +** //below are settings with still no panel entries  
$opencomment\_allowcommenttracking = "1";  
$opencomment\_allowrevisiontracking = "0";  
$opencomment\_textAreaSize = "8";  
$opencomment\_textAreaWidth = "75%";  
//0 beside textarea  
//1 below toolbar  
//2 below textarea  
$opencomment\_smiley\_position = "0";  
$opencomment\_smiley\_perLine = "3";  
//mail sent to user as html or txt?  
$opencomment\_templateAs = "html";

//show unhide link in each comment footer  
$opencomment\_commentRating = "1";  
$opencomment\_comment
$opencomment\_commentDisplayRate = "1";  
$opencomment\_commentEmailIt = "1";

# Code is in CVS, any help or support as always is appreciated 😉**