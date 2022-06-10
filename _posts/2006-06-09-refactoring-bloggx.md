---
id: 2645
title: 'Refactoring BloggX'
date: '2006-06-09T18:34:20+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2645'
permalink: /joomla/refactoring-bloggx/
image: /wp-content/uploads/2006/04/bloggx_65.png
tags:
    - joomla
---

 And Tadaaa I finish the refactoring of [BloggX](http://www.iobinary.com), a java GPL component:

![](/assets/images/2006/04/bloggx_65.png) <span style="font-style: italic;">Blogg-X is a cross platform (OS X, Windows XP, #Linux) content management tool for websites based on the #Joomla! CMS. Blogg-X runs locally on your computer as a desktop application. Utilizing built in WYSIWYG and HTML source editors you can post rich content on your #Joomla! site without the use of the web browser.   
   
 [Refactoring](http://www.refactoring.com/) is a technique for restructuring an existing code, altering its internal structure without changing its external behavior. Its heart is a series of small behavior preserving transformations. Each transformation (called a ‘refactoring’) does little, but a sequence of transformations can produce a significant restructuring. Since each refactoring is small, it’s less likely to go wrong. The system is also kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring  
   
 And I want to show here <span style="font-weight: bold;">some results achieved, The author has done a great job, and I have tried to bring my #Java expertise to help him bring new functionnalities faster. Moreover a JAVA break just for fun (but hehe I already do Java at work 🙂 ) was needed after being so frustrated with PHP…<big>  
 </big>  
 But let me be a little more technical, below are some numbers create with a tool of IBM: [Structural Analysis for #Java:](http://www.alphaworks.ibm.com/tech/sa4j)  Structural Analysis for JavaTM (SA4J) is a technology that analyzes structural dependencies of Java applications in order to measure their stability. It detects structural "anti-patterns" (suspicious design elements) and provides dependency web browsing for detailed exploration of anti-patterns in the dependency web. SA4J also enables "what if" analysis in order to assess the impact of change on the functionality of the application; and it offers guidelines for package re-factoring.  
   
 

|  | Before: BloggX 2.11 | After BloggX refactoring | Remarks |
|---|---|---|---|
| Summary | **The overall stability of the system is 69%**  .   There are 24 objects, forming a total of 139 relationships. The typical object in this system immediately depends on 5.79 objects. On average, the modification of one object potentially affects 7.2 other objects. | **The overall stability of the system is 87%**  .   There are 82 objects, forming a total of 292 relationships. The typical object in this system immediately depends on 3.56 objects. On average, the modification of one object potentially affects 10.3 other objects. | Highly stable systems are typically above 90%.  Yes the system before was 69% but it was containing methods of 700 lines… |
| Statistics | \| Property \| Value \| \| Number of Objects \| 24 \| \| Number of Packages \| 4 \| \| Number of Relationships \| 139 \| \| Maximum Dependencies \| 39 \| \| Minimum Dependencies \| 0 \| \| Average Dependencies \| 5.79 \| \| Maximum Dependents \| 25 \| \| Minimum Dependents \| 1 \| \| Average Dependents \| 5.79 \| \| Relationship To Object Ratio \| 5.79 \| \| Affects on Average \| 7.2 \| | \| Property \| Value \| \|---\|---\|---\| \| Number of Objects \| 82 \| \| Number of Packages \| 19 \| \| Number of Relationships \| 292 \| \| Maximum Dependencies \| 44 \| \| Minimum Dependencies \| 0 \| \| Average Dependencies \| 3.56 \| \| Maximum Dependents \| 20 \| \| Minimum Dependents \| 0 \| \| Average Dependents \| 3.56 \| \| Relationship To Object Ratio \| 3.56 \| \| Affects on Average \| 10.3 \| | Explosion of number of Objects and relationship: [BloggX](http://www.iobinary.com/) is an ambitious project and functionnalities has to be distributed… |
|---|---|
| Structural patterns | \|  Pattern  \|  Count  \|  % of total objects  \| \| Tangle     group of interdependent objects \| 5 \| n/a \| \| Global Hub     often affected when any object in the system changes and then affects a lot of other objects \| 11 \| 45% \| \| Global Breakable     often affected when any object in the system changes \| 11 \| 45% \| \| Global Butterfly     when changed may cause a lot of other objects to change \| 17 \| 70% \| \| Local Hub     immediately depends on a lot of objects and a lot of objects immediately depend on it \| 0 \| 0% \| \| Local Breakable     immediately depends on a lot of objects \| 2 \| 8% \| \| Local Butterfly     a lot of objects immediately depend on it \| 2 \| 8% \| | \|  Pattern  \|  Count  \|  % of total objects  \| \|---\|---\|---\|---\| \| Tangle     group of interdependent objects \| 4 \| n/a \| \| Global Hub     often affected when any object in the system changes and then affects a lot of other objects \| 9 \| 10% \| \| Global Breakable     often affected when any object in the system changes \| 27 \| 32% \| \| Global Butterfly     when changed may cause a lot of other objects to change \| 15 \| 18% \| \| Local Hub     immediately depends on a lot of objects and a lot of objects immediately depend on it \| 0 \| 0% \| \| Local Breakable     immediately depends on a lot of objects \| 2 \| 2% \| \| Local Butterfly     a lot of objects immediately depend on it \| 4 \| 4% \| | Al lot better after all changes i’ve made 🙂 but not perfect 😉  A lot of cleaned interface are still missing. |
|---|---|
| Exploring relationship | [![tn_before-BloggX-Refactoring-www.waltercedric.com.jpg](/assets/images/2006/06/tn_before-BloggX-Refactoring-www.waltercedric.com_.jpg "tn_before-BloggX-Refactoring-www.waltercedric.com.jpg")](http://www.waltercedric.com/images/stories/joomla/bloggx/refactoring/before-BloggX-Refactoring-www.waltercedric.com.jpg) | [![tn_after-BloggX-Refactoring-www.waltercedric.com.jpg](/assets/images/2006/06/tn_after-BloggX-Refactoring-www.waltercedric.com_.jpg "tn_after-BloggX-Refactoring-www.waltercedric.com.jpg")](http://www.waltercedric.com/images/stories/joomla/bloggx/refactoring/after-BloggX-Refactoring-www.waltercedric.com.jpg) |  |
| Distance graph | ![distanceGraphbefore.gif](/assets/images/2006/06/distanceGraphbefore.gif "distanceGraphbefore.gif") | ![distanceGraphAfter.gif](/assets/images/2006/06/distanceGraphAfter.gif "distanceGraphAfter.gif") | The distance is a calculated value, that describes the encapsulation of a certain package    While a distance of "0" means a "perfect" encapsulation, 1 stands for a complete lack of encapsulation.  A lot of the code is below the medium line now, but still too high |
|  |  |  |  |

   
 As side effect, I correct some bugs by removing duplicated code and non obvious by better localizing responsabilities. Now the author will need time to understand all changes I’ve done, but overall It will be easier to maintain [BloggX](http://www.iobinary.com/)

 One of the best book about Refactoring, which has change my life of developer in 2002 is<big></big>

| ![Refactoring-Fowler-Small.jpg](/assets/images/2006/06/Refactoring-Fowler-Small.jpg "Refactoring-Fowler-Small.jpg") | **Refactoring: Improving the Design of Existing Code**    by Martin Fowler, Kent Beck, John Brant, William Opdyke, Don Roberts    464 pages **Publisher:** Addison-Wesley Professional; 1st edition (June 28, 1999)    **ISBN:** 0201485672 |
|---|---|

 Martin Fowler also explain why and how you can convince your manager you have to invest daily refactoring time.