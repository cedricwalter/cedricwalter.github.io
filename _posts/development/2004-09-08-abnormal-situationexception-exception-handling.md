---
id: 1182
title: 'abnormal situation,exception, exception handling,'
date: '2004-09-08T23:50:34+02:00'
author: 'Cédric Walter'



tags:
    - dependencies
    - functionality
---

<font size="6"> <font size="6">**![](java/logo_right.gif)**

 <>Articles:>

A very good document, if you want to improve your code, Click [HERE](http://www.objectarchitects.de/arcus/cookbook/exhandling/index.htm) to download it

 | This paper informs about design and implementation of error handling facilities in business information systems. It presents a pattern language for the object oriented design of components needed for error handling and also present sample code in different programming languages (C++, #Java, Cobol, Smalltalk).    List of Patterns  Error Object, Exception Hierarchy , Error Traps, Assertion Checking Object, Backtrace , Centralized Error Logging, Error Handler, Default Error Handling, Error Dialog, Resource Preallocation, Checkpoint Restart, Exception Abstraction, Exception Wrapper, Multithread Exception Handling   found at: <http://www.objectarchitects.de/arcus/cookbook/exhandling/index.htm>  **List of Patterns**    To get a better idea of the various patterns and the problems they are related to, we list all pattern names together with page references and questions defining the problems:   **Error Object** \* What characterizes an error? How to structure and administrate error information?   Exception Hierarchy \* How to structure error types? What role does inheritance play in the structuring of errors?   Error Traps \* What indicators are useful to detect erroneous situations and where to install the traps in the application code?   Assertion Checking Object \* How to implement Error Traps in an object oriented language without using a generative approach?   Backtrace \* How to collect and trace useful information for the system developers or the maintenance team, so that it supports them by the analysis of the error situation? Especially, if we have no or limited access to the stack administered by the system itself.   Centralized Error Logging \* How do you organize exception reporting so that you can offer your maintenance personnel good enough information for analyzing the branch offices problems?   Error Handler \* Where and how do you handle errors?   Default Error Handling \* How do you ensure that you handle every possible exception correctly (no unhandled exception and limited damage)?   Error Dialog \* How to signal errors to an application user?   Resource Preallocation \* How to ensure error processing although resources are short?   Checkpoint Restart \* How do you avoid a complete rerun of a batch as a result of an error?   Exception Abstraction \* How do you generate reasonable error messages without violating abstraction levels?   Exception Wrapper \* How do you integrate a ready-to-use library into your exception handling system?   Multithread Exception Handling \* How to schedule exceptions in a multithread environment? |
|---|

Softwares:

Analysis

| **Structural Analysis for #Java** | “[SA4J](http://www.alphaworks.ibm.com/tech/sa4j?open&S_PKG=&S_TACT=104AHW61&S_CMP=GR&ca=dgr-awjw17sa4j) is a technology that analyzes structural dependencies of #Java applications in order to measure their stability. It detects structural “anti-patterns” (suspicious design elements) and provides dependency web browsing for detailed exploration of anti-patterns in the dependency web. SA4J also enables “what if” analysis in order to assess the impact of change on the functionality of the application; and it offers 
|---|---|
|  |  |

Metrics

| Metrics sourceforge    eclipse plugin |  |
|---|---|
|  |  |