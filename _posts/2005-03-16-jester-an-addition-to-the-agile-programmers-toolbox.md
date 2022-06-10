---
id: 1620
title: 'Jester an addition to the agile programmer&#8217;s toolbox'
date: '2005-03-16T19:24:18+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1620'
permalink: /java/jester-an-addition-to-the-agile-programmers-toolbox/
tags:
    - professional
    - programmers
    - programming
---

[<font color="#dc2300">J<font color="#7da647">e<font color="#2323dc">s<font color="#7da647">t<font color="#2300dc">e<font color="#dc2300">r](http://jester.sourceforge.net/) – the [<font color="#7da647">J<font color="#dc2300">Unit](http://www.junit.org/) test tester: [Jester](http://jester.sourceforge.net/) changes your source code, recompiles it, and runs your bunch of JUNIT test suite to see if anything breaks. It help the developer to verify if enough, or better the most iimportant testcases are already written…more at [IBM developerWorks](http://www-128.ibm.com/developerworks/java/library/j-jester/), do not forget to also read or reread [JUnit Test Infected: Programmers Love Writing Tests](http://junit.sourceforge.net/doc/testinfected/testing.htm) essay.

*A comprehensive unit-test suite is a necessity for a robust program. But how can you be sure that your test suite is testing everything it should? Jester, Ivan Moore’s JUnit test tester, excels at finding test-suite problems and provides unique insights into the structure of a code base. Elliotte Rusty Harold introduces Jester and shows how to use it for best results. Test-first programming is the least controversial and most widely adopted part of Extreme Programming (XP). By now the majority of professional #Javaâ&#132;¢ programmers have probably caught the testing bug… This is where* [*Jester* ](http://jester.sourceforge.net/)*comes in. Unlike a traditional code coverage tool such as Clover, Jester doesn’t watch which lines of code have been executed. Instead Jester changes the source code, recompiles it, and runs the test suite to see if anything breaks. For instance, it will change a 1 to a 2, or change an if (x &gt; y) to if (false). If the test suite isn’t paying close enough attention to notice the change, then a test is missing.*