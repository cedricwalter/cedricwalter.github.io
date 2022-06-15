---
id: 2629
title: 'OpenComment will use AJAX'
date: '2006-05-28T17:28:51+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/03/opencomment.jpg
tags:
    - joomla
---

  
| ![](/assets/images/2006/03/opencomment.jpg) | I am restarting the development of OpenComment, and found that the existing code wont be practical without using AJAX. That’s why I am now integrating AJAX in openComment where it make sense: - Comments rating, - Comments filtering, - Administration function. |
|---|---|

After looking on the market which framework can help me to achieve these goals, I found [xajax 0.2.4](http://www.xajaxproject.org/)

<span class="logo" style="font-style: italic;">xajax is an open source PHP class library that allows you to easily create powerful, web-based, AJAX applications using HTML, CSS, #JavaScript, and PHP. Applications developed with xajax can asynchronously call server-side PHP functions and update content *without reloading the page*.

 # how"></a>

The xajax PHP object generates #JavaScript wrapper functions for the PHP functions you want to be able to call asynchronously from your application. When called, these wrapper functions use #JavaScript’s XMLHttpRequest object to asynchronously communicate with the xajax object on the server which calls the corresponding PHP functions. Upon completion, an xajax XML response is returned from the PHP functions, which xajax passes back to the application. The XML response contains instructions and data that are parsed by xajax’s #JavaScript message pump and used to update the content of your application.