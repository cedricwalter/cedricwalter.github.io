---

title: 'Apache Junit'
date: '2004-08-31T22:52:36+02:00'
author: 'Cédric Walter'



---

In computer programming, **a unit test** is a method of testing the correctness of a particular module of source code.
The idea is to write test cases for every non-trivial function or method in the module so that each test case is
separate from the others if possible.

# JUNIT: A testcase framework for Java**  
![](images/stories/clip_image001.gif)  
![](images/stories/clip_image002.gif)

In computer programming, **a unit test** is a method of testing the correctness of a particular module of source code.
The idea is to write test cases for every non-trivial function or method in the module so that each test case is
separate from the others if possible.  

# Advantages  
The goal of unit testing is to isolate each part of the program
and show that the individual parts are correct. It provides a written contract that the piece must satisfy. This
isolated testing provides two main benefits:  
- 
- **Encourages change**        Unit testing allows the programmer to
refactor code at a later date, and make sure the module still works correctly (regression testing). This provides the
benefit of encouraging programmers to make changes to the code since it is easy for the programmer to check if the piece
is still working properly. - **Simplifies Integration**        Unit testing helps eliminate uncertainty in the pieces
themselves and can be used in a bottom-up testing style approach. By testing the parts of a program first and then
testing the sum of its parts will make integration testing easier. - **Documentation**       As an added value, all your
Testcases can act as a documentation for your set of classes  **Kent Beck,** (CSLife) and **Erich Gamma,** (OTI ZÃ¼rich)
have made a very good article:   *“Testing is not closely integrated with development. This prevents you from measuring
the progress of development- you can’t tell when something starts working or when something stops working. Using JUnit
you can cheaply and incrementally build a test suite that will help you measure your progress, spot unintended side
effects, and focus your development efforts.”* [more here](http://members.pingnet.ch/gamma/junit.htm)    **Limitations**
It is important to realize that unit-testing will not catch every error in the program. By definition, it only tests the
functionality of the units themselves. Therefore, it will not catch integration errors, performance problems and any
other system-wide issues. Unit testing is only effective if it is used in conjunction with other software testing
activities.  **Usage**   There is a lot of ways to use JUNIT:  - Write your set of classes, then some Testcase that
should run and validate the work done, - Write Testcases first that won’t run because no classes are existing yet, then
write the code that will make it run! - Correct a bug in a piece of code, and write a Testcase for being sure that it
won’t reappear one day. Junit is based on fact that you want to test a code. Normally you know the result expected, all
you have to do is to ask your code (class, method, set of cooperating class) and to test if the response is correct.
Let’s take an example…. I have a Class that can replace patterns in a string (like in JDK 1.4.2: “aText”.replace(
“seachPattern”,”withThisPattern”))). Since I wrote the class, and know the purpose of it, I can write some pertinent
testcases. I want to protect this *Object* and all other *Object* that may use it from loss of functionnality, bugs
which may lead to malfunction in a complex system.  **Writing good Testcases**  **There is no rule how to write a test,
but remember**  - That a testcase should be pertinent, otherwise it will have **no quality impact** and will lead to a
loss of developer time. - Be honest: push your Objects to the limit of their usage! try to describe and test all
functionnality of your set of objects. - You need to do some **dummy/obvious assertion**s (but sometimes these dummy
tests are not obvious with complex object and or runtime environment).          \| Constructor should not give
back the same instance   (Except if you are using a singleton pattern) \| \|---\|
\| ``` ClassA classA <span class="syntax18">= <span class="syntax8">new <span class="syntax6">ClassA(); ClassA classA1 <span class="syntax18">= <span class="syntax8">new <span class="syntax6">ClassA(); <span class="syntax6">assertNotEquals(classA, classA1);  ```
\|            **The JUNIT language**  JUnit use some primitives methods to achieve regression testing. As today in JUNIT
1.3.8, The assertion methods are all located in junit.framework.Assert A lot of third party tools has been developed
to [extends possibilities of tests](http://www.junit.org/news/extension/index.htm) with database, EJB, JSP for
example.    \| ![](images/stories/assert.gif) \| - <font face="Courier New" size="2">Assert methods are testing
equality of nearly all Java standard type - If these methods are not enough, you can always decide to validate your
objects by Your own and call fail() if you decide that conditions are not met. \| \|---\|---\|  **Write your first
Testcase**  A Junit test is a classe which extends junit.framework.Tescase and has some methods beginning with the word
“test“  *A trivial example:*    \| Your first JUNIT testcase classe \| \|---\|
\| ``` <span class="syntax8">public <span class="syntax10">class SquareTest <span class="syntax8">extends junit.framework.TestCase <span class="syntax18">{         <span class="syntax8">public <span class="syntax10">void testClassA <span class="syntax18">{ Square squareA <span class="syntax18">= <span class="syntax8">new <span class="syntax6">Square(); Square squareB <span class="syntax18">= <span class="syntax8">new <span class="syntax6">Square();                   <span class="syntax6">assertNotEquals(squareB,squareA);          <span class="syntax6">assertEquals(squareA.<span class="syntax6">getName(),<span class="syntax13">“<span class="syntax13">ClassA<span class="syntax13"> <span class="syntax13">a<span class="syntax13"> <span class="syntax13">dummy<span class="syntax13"> <span class="syntax13">example<span class="syntax13">“);                   <span class="syntax2">//<span class="syntax2">verify<span class="syntax2"> <span class="syntax2">setter,<span class="syntax2"> <span class="syntax2">getter          squareA.<span class="syntax6">setX(<span class="syntax5">2);<span class="syntax6">assertEquals(<span class="syntax5">2,squareA.<span class="syntax6">getX()); squareA.<span class="syntax6">setY(<span class="syntax5">4);<span class="syntax6">assertEquals(<span class="syntax5">4,squareA.<span class="syntax6">getY());                   <span class="syntax2">//<span class="syntax2">perimeter<span class="syntax2"> <span class="syntax2">of<span class="syntax2"> <span class="syntax2">a<span class="syntax2"> <span class="syntax2">square<span class="syntax2"> <span class="syntax2">is<span class="syntax2"> <span class="syntax2">2X+2y          <span class="syntax6">assertEquals(<span class="syntax5">12,squareA.<span class="syntax6">getPerimeter());          <span class="syntax2">//<span class="syntax2">surface          <span class="syntax6">assertEquals(<span class="syntax5">8,squareA.<span class="syntax6">getSurface());         <span class="syntax18">}          <span class="syntax8">public <span class="syntax10">void <span class="syntax6">testCloneability() <span class="syntax18">{ Square squareA <span class="syntax18">= <span class="syntax8">new <span class="syntax6">Square(); squareA.<span class="syntax6">setX(<span class="syntax5">10); Square squareB <span class="syntax18">= (Square) squareA.<span class="syntax6">clone();                   <span class="syntax2">//<span class="syntax2">if<span class="syntax2"> <span class="syntax2">Square<span class="syntax2"> <span class="syntax2">do<span class="syntax2"> <span class="syntax2">not<span class="syntax2"> <span class="syntax2">implemeent<span class="syntax2"> <span class="syntax2">Comparable,<span class="syntax2"> <span class="syntax2">the<span class="syntax2"> <span class="syntax2">following<span class="syntax2"> <span class="syntax2">is<span class="syntax2"> <span class="syntax2">true          <span class="syntax6">assertNotEquals(squareA,squareB);                    <span class="syntax2">//<span class="syntax2">test<span class="syntax2"> <span class="syntax2">deep<span class="syntax2"> <span class="syntax2">Clone          <span class="syntax6">assertEquals(<span class="syntax5">10,squareB.<span class="syntax6">getX());         <span class="syntax18">} <span class="syntax18">}  ```
\|  **Writing a Testcase is always more or less the same:**  1. Create one or more classes
extending <font face="Courier New" size="2">junit.framework.Tescase# and implement some test methods 2. Create in these
methods instances of the object you want to test or validate. 3. Use your object, use setter and getter, constructor to
change their internal state (here is the concept of pushing your object to the limits: use the full range of input data
accepted by your objects) 4. Test values returned by methods, assuming that you know what would be the correct result,
5. Write a lot of them to test the maximum of functionnalities provided by your objects.  **Run your testcases**
Different TestRunner or how to run your suite of testcases A TestRunner is able to run JUNIT testcases, there is more or
less 2 categories:  - Textual TestRunner (console output)      - The fastest to launch and can be used when you don’t
need a red green success indication. This is recommended with ANT. - Graphical TestRunners (client server web GUI,
swing, AWT in eclipse ….)      - They show a simple graphical dialog to start/stop and display results of tests and
provide some graphical progress indication. A TestRunner can be configured to be either loading or non-loading. In the
loading configuration the TestRunner reloads your class from the class path for each run. As a consequence you don’t
have to restart the TestRunner after you have changed your code. In the non-loading configuration you have to restart
the TestRunner after each run. The TestRunner configuration can be either set on the command line with the -noloading
switch or in the junit.properties file located in the “user.home” by adding an entry loading=false. JUNIT find all
testcase using java.lang.reflexion package, in fact it will call all methods starting with the
word <font face="Courier New" size="2">test will be found.    \| In a JAVA main class: \| \|---\|
\| <font face="Courier New" size="2">String\[\] listUnitTest = {ClassA.class.getName(), ClassB.class.getName()}; //list
of classname containing your units tests   <font face="Courier New" size="2">junit.textui.TestRunner.main(listUnitTest);
//Text based   <font face="Courier New" size="2">junit.awtui.TestRunner.main(listUnitTest); //green mean all test
successful red is bad in case of error, you see the stack and which test failed.    <font face="Courier New" size="2">
junit.swingui.TestRunner.main(listUnitTest); //green mean all testcases successful red is badin case of error, you see
the stack and which test failed. \|    \| JUnit Testrunner in Eclipse is a standar View \| \|---\|
\| ![](images/stories/junitineclipse.jpg) \|  **Testsuite**   Testsuite is a suite of testcase or method,
you can give this testsuite to a testrunner. # **Some particular TestSuite**    \| **Multi threading test** If
you need to have multiple threads hitting your class. ActiveTestSuite starts each test in its own thread However,
ActiveTestSuite does not have a constructor which automatically adds all testXXX methods in a class to the test suite. I
tried addTestSuite method with class name as the argument, but it added all tests in the class to run sequentially in
the same thread. So, I had to manually add each test name to the ActiveTestSuite. \| \|---\|
\| <font face="Courier New" size="2">public static Test suite() { TestSuite suite = new ActiveTestSuite();
suite.addTest(new com.waltercedric.junit.ClassA (“testClonability”)); suite.addTest(new com.waltercedric.junit.ClassA (
“testSerialization”)); suite.addTest(new com.waltercedric.junit.ClassA (“testRandom”)); return suite; } public static
void runTest (String\[\] args) { junit.textui.TestRunner.run( suite() ); } \|  **Extensions**   JUNIT can be extended
with 3rd party extensions, if you need some specials capabilities, refer to this
page:[ JUNIT extensions](http://www.junit.org/news/extension/index.htm)  - <http://www.junit.org/index.htm> Site is
dedicated to software developers using JUNIT. - <http://junit.sourceforge.net/doc/testinfected/testing.htm>
- <http://junit.sourceforge.net/doc/cookbook/cookbook.htm> - Kent Beck’s original testing framework
paper <http://www.xprogramming.com/testfram.htm> - List of various unit testing
frameworks <http://www.xprogramming.com/software.htm>  ![](images/construction.gif) |
