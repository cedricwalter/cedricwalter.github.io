---
id: 994
title: 'Apache Log4j'
date: '2004-09-03T16:32:29+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=994'

---

<font size="6">**Log4J: A logging framework for J2EE**

Log4j homepage: <http://jakarta.apache.org/log4j/>

# Reference book on log4j:**

| ![](images/stories/log4jBook.jpg) | **The Complete Log4j Manual**      by Ceki Gulcu   Edition: Paperback |
|---|---|

# Introduction**

Log4j is an open source tool ([OSS](http://www.opensource.org/)) developed for inserting logs statements into your
application and was developed by people at [Apache fundation](http://www.apache.org/). It’s speed and flexibility allows
log statements to remain in shipped code while giving the user the ability to enable logging at runtime without
modifying any of the application binary. All of this while not incurring a high performance cost/loss.

# Requirements**

- Log4j need at least a compatible JDK 1.1.x to run.
- The DOMConfigurator is based on the DOM Level 1 API.
  The DOMConfigurator.configure(Element) method will
  work with any XML parser that will pass it a DOM tree. The 
  DOMConfigurator.configure(String filename) method and its variants require a JAXP compatible XML parser, for example
  Xerces or Sun’s parser. Compiling the DOMConfigurator requires the presence of a JAXP parser in the classpath.
- The org.apache.log4j.net.SMTPAppender relies on the #JavaMail API. It has been
  tested with #JavaMail API version 1.2. The #JavaMail API requires the #JavaBeans Activation Framework package.
- The org.apache.log4j.net.JMSAppender requires the presence of the JMS API as well as
  JNDI.
- Log4j test code relies on the JUnit testing framework in order to maintain quality of release.

# Why inserting log statement or rely on this (old) technology?**

  | **Advantages** | **Drawbacks** |
|---|---|
| It offers several advantages. It provides precise context about a run of the application.    **Once inserted into the code:**- It Help developer to develop and correct bugs, - Generation of logging output requires no human intervention, - Log output can be saved in persistent medium to be studied at a later time, - Rich logging package can also be viewed as an auditing tool, for example to determine performance… - Debugging statements stay with the program (for years) while debugging sessions are always transient (lifetime of bug resolution). - Log can make the glue between developer within a development environment and specialist within a production environment. The know how or description in log statements can help the production specialist to undestand how your application work. | **But**   - It can/May slow down an application. - If the program verbosity is high, it can pollute reader’s mind, or lead to misanalyse of a problems.        For example:        – saying something false in a log statement can have tremendous effects…       – Writing too much info (irrelevent), can hide some major error. |

# Why choosing Log4J?** (From [apache.org](http://www.apache.org/))

- log4j is optimized for speed. The system write has been rewrite for efficiency and is now asynchrone (compare to
  System.err)
- log4j is based on a named logger hierarchy. (category)
- log4j is fail-stop but not reliable.
- log4j is thread-safe. No interblocking thread, or memory leaks.
- log4j is not restricted to a predefined set of facilities.
- Logging behavior can be set at runtime using a configuration file. Configuration files can be property files or in XML
  format.
- log4j is designed to handle #Java Exceptions from the start.
- log4j can direct its output to a file, the console, an java.io.OutputStream,
  java.io.Writer, a remote server using TCP, a remote Unix Syslog daemon, to a remote listener using JMS, to the NT
  EventLog or even send e-mail. (Appenders)
- log4j uses 5 levels, namely DEBUG, INFO, WARN, ERROR and FATAL.
- The format of the log output can be easily changed by extending the Layout class.
- The target of the log output as well as the writing strategy can be altered by implementations of the Appender
  interface.
- log4j supports multiple output appenders per logger
- log4j supports internationalization.
- It is used extensively by thousands of #Java developers. If a flaw is discovered it gets fixed in the next release.
- The log4j code is likely to be better than code you’d write yourself and is l ikely to improve over time.
- Ports to other languages are: C++, Eifel, Perl, .NET, Python, Rubyâ&#128;¦more than 57 languages are supported

# Log4j concepts**

  | **Logger** | **Logger** are responsible for handling the majority of log operations. The logger is the core component of the logging process. |
|---|---|
| **Levels** | Log4j by default can log messages with five priority levels (not including custom Levels). More can be defined by subclassing, but it is not recommended.   **debug** to write debugging messages which should not be printed when the application is in production.    log.debug(“Starting init of RequestController”);      **info** for messages similar to the “verbose” mode of many applications.    log.info(“Analyser init successfull”);      **warn** for warning messages which are logged to some log but the application is able to carry on without a problem.    log.warn(“Inconsistent value in conf for key ‘debug’, line 123 assuming default value true”);      **error** for application error messages which are also logged to some log but, still, the application can hobble along. Such as when some administrator-supplied configuration parameter is incorrect and you fall back to using some hard-coded default value. You must use this level in all catch clause, if you can not resolve the exception!   log.error(“The object Account is null”);  **fatal** for critical messages, after logging of which the application quits abnormally   log.fatal(“Can not get any new connection from database”);      **Notes:**  A logger will only output messages that are of a level greater than or equal to it. If the level of a logger is not set it will inherit the level of the closest ancestor. So if a logger is created in the package com.waltercedric.account and no level is set for it, it will inherit the level of the logger created in com.waltercedric. If no logger was created in com.waltercedric., the logger created in com.waltercedric.balance will inherit the level of the root logger, the root logger is always instantiated and available. |
| **Appender** | **Appender** 1. Are responsible for controlling the output of log operations. 2. Controls where and how logging result is store.  The Appenders available are ( [from the log4j API](http://jakarta.apache.org/log4j/docs/api/index.html))  - ConsoleAppender: appends log events to System.out or System.err using a layout specified by the user. The default target is System.out - DailyRollingFileAppender extends FileAppender so that the underlying file is rolled over at a user chosen frequency. - FileAppender appends log events to a file. - RollingFileAppender extends FileAppender to backup the log files when they reach a certain size. - WriterAppender appends log events to a Writer or an OutputStream depending on the user’s choice. - SMTPAppender sends an e-mail when a specific logging event occurs, typically on errors or fatal errors. - SocketAppender sends LoggingEvent objects to a remote a log server, usually a SocketNode. - SocketHubAppender sends LoggingEvent objects to a set of remote log servers, usually a SocketNodes - SyslogAppender sends messages to a remote syslog daemon. - TelnetAppender is a log4j appender that specializes in writing to a read-only socket.  One may also implement the Appender interface to create ones own ways of outputting log statements. |
| **Layout** | **Layout**: 1. Are responsible for formatting the output for Appender. 2. Are always used by Appender 3. Knows how to format the output.  There are three types of Layout available:  - HTMLLayout formats the output as a HTML table. - PatternLayout formats the output based on a conversion pattern specified, or if none is specified, the default conversion pattern. - SimpleLayout formats the output in a very simple manner, it prints the Level, then a dash ‘-‘ and then the log message. |

**Using Log4j in your code**

It is not recommended to use log4j api directly, since who knows if a better logging framework won’t do better in the
future or if log4j won’t modify its api’s. The main idea is that when you aquire a 3rd party component, is to build a
wrapper around it. It is even better if the wrapper contains an abstract factory: maybe in some case you wil have to use
different class of logging (because of performance, licence…)

  | **A simple log4j wrapper** |
|---|
| Import com.waltercedric.LogWrapper;      public LogWrapper {…   } |

  | **Using your newly created wrapper** |
|---|
| Import com.waltercedric.LogWrapper;      public void init() throws com.waltercedric.applicationException {LogWrapper logger = new LogWrapper(Account.class);   logger.info(“Starting init”);      logger.debug(“create an Account”);   up = new Account(new NullObject());   } |

**Log4j Guidelines**  
The FAQ of log4J is a must to read, here are the most important points:

1. **Respect Levels**!  
   Respect levels and categorize the logs according to severity and messages size. Please define a special logger (
   restricted to a package) that can be switch off and that do not write to much statement in log output.
2. **Meaningful statements**  
   Create code with System.err.println or 
   System.out.println If you are doing some internal reviews of your code, please try to write some meaningful
   information in logs. Avoid log of type: “I am here”, “here 1”, “here 2” and so on..
3. # **Classwide static logger**
   It is recommended to provide a class wide logger access point, if you need to do a lot of output in a class or
   hierarchy. Define a protected Logger in the parent hierarchie
      | public class Mamals {    protected static LoggerWrapper logger = LogFactory.getLog(Mamals.class);   …   } |
    |---|
    | **and use it in all children** |
    | public class Human extends Mamals {public Human() {   super();   logger.debug(“init”);   }  } |


4. # **Increase speed**
   Log4J is not slow, it is even faster than System.out
   or System.err (System.err or System.out are
   synchronous while NOT with log4j, the cost in times comes more from costs during formating messages!  
   If you know that you must heavily formatted the output message, do not use the following:
      | l.debug(“Cash balance is ” + cashvalue); |
    |---|
    | **use instead** |
    | if(myLogger.isDebugEnabled()) {   myLogger.debug(“Cash balance is ” + cashBalance.toXML());   } |


5. **How to name Loggers?**  
   You can name loggers by locality. It turns out that instantiating a logger in each class, with the logger name equal
   to the fully-qualified name of the class, is a useful and straightforward approach of defining loggers. This approach
   has many benefits:

> - It is very simple to implement.
> - It is very simple to explain to new developers.
> - It automatically mirrors your application’s own modular design.
> - It can be further refined at will.
> - Printing the logger automatically gives information on the locality of the log statement.
>
> However, this is not the only way for naming loggers. A common alternative is to name loggers by functional areas. For
> example, the “database” logger, “RMI” logger, “security” logger, or the “XML” logger. You are totally free in choosing
> the names of your loggers. The log4j package merely allows you to manage your names in a hierarchy. However, it is your
> responsibility to define this hierarchy. Note by naming loggers by locality one tends to name things by functionality,
> since in most cases the locality relates closely to functionality.

# Remote logging over TCP**

Read carefully: <http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/net/SocketAppender.html> and   
<http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/net/SocketHubAppender.html>

# Starting the server** .**Chainsaw**

Chainsaw is a graphical logging client, where you can see, sort and filter logs data.  
Documentation can be read
here: <http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/chainsaw/package-summary.html> and it is a part
of log4j.jar

  | **Starting chainsaw** |
|---|
| c:jdk1.4.2binjava org.apache.log4j.chainsaw.Main “chainsaw.port”, “5000” |

1. Log4 gives you the ability to send messages to a remote location over a socket for logging purposes. The
   org.apache.log4j.net.SocketAppender and org.apache.log4j.net.SocketServer classes are the key classes used in remote
   logging.
2. Modify all logger in your log4j.xml to use a SocketApender as appender, Once you have loaded this configuration, all
   messages will be written to the machine and port that you specify.
3. Start the client application (Chainsaw), this program will receive logs and show them in a swing GUI

  | **Example of TCP appender in log4j.xml** |
|---|
| log4j.appender.remote =org.apache.log4j.net.SocketAppender   log4j.appender. remote.RemoteHost=localhost   log4j.appender. remote.Port=5000   log4j.appender. remote.LocationInfo=true |

On the server side (where your application create logs), you will need to run log4j’s SocketServer class. You can create
a configuration file with configuration information similar to the following: The whole applcation is in DEBUG mode

  | **Example of socketserver.properties** |
|---|
| log4j.rootCategory=DEBUG,log1      <font color="#0000ff" face="Courier New" size="2">\############################   \# log1 is set to be a file   log4j.appender.log1=org.apache.log4j.RollingFileAppender   log4j.appender.log1.MaxFileSize=100KB   log4j.appender.log1.MaxBackupIndex=1   log4j.appender.log1.File=c://logs.log   log4j.appender.log1.append = true   log4j.appender.log1.layout=org.apache.log4j.PatternLayout   log4j.appender.log1.layout.ConversionPattern=%p %t %c – %m%n |

1. Set up your CLASSPATH on both the client and server to contain log4j.jar
2. Run the SocketServer at the command line. The command line syntax for the SocketServer is as follows:  
   java org.apache.log4j.net.SocketServer portNumber configurationFile configurationDirectory  
   start the server:

  | **Start the server** |
|---|
| java org.apache.log4j.net.SocketServer 5000 C:socketserver.properties C:temp   org.apache.log4j.net.SocketServer “5000”, “C:socketserver.properties”, “C:temp” |

Start your application, without doing any change in your code or recompiling it, you can now log data remotely!

**Configuring log4j**

# Location of configuration file**

The configuration files of log4j must be in classpath, if more than one are in classpath, the first found will be used.
Log4j require to have a compatible parser in classpath in order to read the configuration file. As default, Logj
use Crimson.jar

# Location of DTD**

The DTD is needed in order to initialize log4j, 2 solutions are available:

  | **Public DTD, the file must be on internet or on network** | **System path, but with a fix path (URI)** |
|---|---|
| “http://www.waltercedric.com/log4j.dtd”> |  |

**Extending log4j**

# Defining your application specific loggers, appenders and layouts**

You can look at the Log4j API to see how to implement a logger, appender and layout.

**Conclusions**

One of the strength of log4j is that is do not require to recompile the java code to binary classes to change
considerably the ouput amount in logs. You can add logging statements in your code, and without changing the code
shipped, change at runtime the amount of log output. Thus the major behaviour logging strategies are done in this file (
it can be a properties file or a XML file). You should store this file in the classpath of your application.

**Annexes**

Example of configuration files:

  | **Example of log4j.xml** |
|---|
|       <font color="#0000ff" face="Courier New" size="2">   <log4j>   </log4j><font color="#0000ff" face="Courier New" size="2">      <font color="#0000ff" face="Courier New" size="2">   <root>   <priority value="error">   <appender-ref ref="stdout">   </appender-ref>      </priority></root><font color="#0000ff" face="Courier New" size="2">   <category name="com.waltercedric">   <priority value="INHERIT">   <appender-ref ref="log1">   </appender-ref>      <category name="com.waltercedric.balance">   <priority value="debug">   <appender-ref ref="stdout">   </appender-ref>   </priority></category></priority></category><font color="#0000ff" face="Courier New" size="2">      <font color="#0000ff" face="Courier New" size="2">   <appender class="org.apache.log4j.ConsoleAppender" name="stdout">   <layout class="com.ibm.log4j.PatternLayout">   <param name="ConversionPattern" value="%d %r [%t] %-5p %c - %m%n"></param>   </layout>   </appender>      <font color="#0000ff" face="Courier New" size="2">   <appender class="org.apache.log4j.DailyRollingFileAppender" name="logDaily">   <param name="File" value="logs.out.log"></param>   <param name="Append" value="true"></param>   <param name="DatePattern" value="'.'yyyy-MM- dd"></param>   <param name="File" value="c://logs.log"></param>   <layout class="com.ibm.log4j.PatternLayout">   </layout></appender><font color="#0000ff" face="Courier New" size="2">   <param name="ConversionPattern" value="%d %r [%t] %-5p %c - %m%n"></param>            <font color="#0000ff" face="Courier New" size="2">   <appender class="org.apache.log4j.RollingFileAppender" name="logbySize">   <param name="MaxFileSize" value="100KB"></param>   <param name="MaxBackupIndex" value="1"></param>   <param name="File" value="logs.out.log"></param>   <param name="Append" value="true"></param>   <param name="File" value="c://logs.log"></param>   <layout class="com.ibm.log4j.PatternLayout">   <param name="ConversionPattern" value="%d %r [%t] %-5p %c - %m%n"></param>   </layout>   </appender>      <font color="#0000ff" face="Courier New" size="2">   <appender class="org.apache.log4j.net.SMTPAppender" name="email">   <param name="Threshold" value="FATAL"></param>   <param name="SMTPHost" value="XXX.XXX.XXX.XXX"></param>   <param name="To" value="name@company.com"></param>   <param name="From" value="name@company.com"></param>   <param name="Subject" value="A Fatal error has occured in your application"></param>   <param name="BufferSize" value="1"></param>   <layout class="com.ibm.log4j.PatternLayout">   <param name="ConversionPattern" value="%d{ABSOLUTE} (%F:%L) - %m%n"></param>   </layout>   </appender>      <font color="#0000ff" face="Courier New" size="2">   <appender class="org.apache.log4j.net.SocketAppender" name="email">   <param name="RemoteHost" value="localhost"></param>   <param name="Port" value="5000"></param>   <param name="LocationInfo" value="true"></param>   </appender>      <font color="#0000ff" face="Courier New" size="2">       |

  | **Example of log4j.properties** |
|---|
| <font color="#0000ff" face="Courier New" size="2">\###########################################################################   \#    \# log4Java properties   \#   \# Documentation can be found at [<font color="#0000ff" face="Courier New" size="2">http://jakarta.apache.org/log4j/docs/api/index.html](http://jakarta.apache.org/log4j/docs/api/index.html)<font color="#0000ff" face="Courier New" size="2">    \# There is no other documentation except forum, a commercial book is due (oreilly)   \#   \# To permit reloading during runtime, the LogDecorator will test each 60s if the file has changed   \# and update configuration of log4j if needed   \#   \# Ascending prioriy INFO < WARNING < DEBUG < ERROR < FATAL   \# log visible only if current log level >= defined level   \#   \# current layout can be: DateLayout, HTMLLayout, PatternLayout, SimpleLayout, XMLLayout   \#    \###########################################################################      \# Set root logger level to \[FATAL\|ERROR\|WARN\|INFO\|DEBUG\], and provide default appender   log4j.rootLogger=DEBUG, stdout      <font color="#0000ff" face="Courier New" size="2">\############################   \# define category (and their level \[INHERITED\|FATAL\|ERROR\|WARN\|INFO\|DEBUG\] and appender)    \# category should be fully qualified class name or incomplete package name   \# Note that you inherit from the root logger otherwise specified (set addtivity flag)   \#   \# additivity= true (default) all request will also be forwarded to the hierarchy    \# -> log twice if the same appender is already in the hierarchy   \# additivity= false do not forward to ancestor appenders   \#   \# INHERITED can be optionally specified which means that named category should inherit   \# its priority from the category hierarchy. If you add the flag additivity to false,   \# you do not inherit of appender    \##   log4j.category.com.waltercedric.account=INHERIT, log1   log4j.additivity.com.waltercedric.account=false      log4j.category.com.waltercedric=DEBUG, log1      <font color="#0000ff" face="Courier New" size="2">\########################################################   \# You Can defined as many appender as you want   \########################################################      \############################   \# stdout is set to be a ConsoleAppender.   \##   log4j.appender.stdout=org.apache.log4j.ConsoleAppender   log4j.appender.stdout.layout=org.apache.log4j.PatternLayout   <font color="#0000ff" face="Courier New" size="2">\#see http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/PatternLayout.html   log4j.appender.stdout.layout.ConversionPattern=%d %r \[%t\] %-5p %c – %m%n      <font color="#0000ff" face="Courier New" size="2">\##################################   \# log1 is set to be a file by date   log4j.appender.log1=org.apache.log4j.DailyRollingFileAppender   <font color="#0000ff" face="Courier New" size="2">\#rollover each day at midnight, see DailyRollingFileAppender object   log4j.appender.log1.DatePattern=’.’yyyy-MM- dd   <font color="#0000ff" face="Courier New" size="2">\#by size   \##log4j.appender.log1=org.apache.log4j.RollingFileAppender   \##log4j.appender.log1.MaxFileSize=100KB   \##log4j.appender.log1.MaxBackupIndex=1      <font color="#0000ff" face="Courier New" size="2">\#/WEB-INF/conf/Log4j.properties   log4j.appender.log1.File=c://VirtualTransport.log   log4j.appender.log1.append = true   log4j.appender.log1.layout=org.apache.log4j.PatternLayout   <font color="#0000ff" face="Courier New" size="2">\#see http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/PatternLayout.html   \#-4r \[%t\] %-5p %c %x – %m%n lead to 331 \[main\] ERROR com.waltercedric.account – classCastexception–>   log4j.appender.log1.layout.ConversionPattern=%p %t %c – %m%n      <font color="#0000ff" face="Courier New" size="2">\############################   \# eMail logging   \#   \# SMTPAppender will store all the logging events on an   \# internal cache and it will send all the messages when   \# the TriggeringEventEvaluator you set with the   \# setEvaluatorMethod or the constructor parameter return true.   \# By default the evaluator is set with an instance of   \# DefaultEvaluator wich is a package-private class   \# defined in the same compilation unit of SMTPAppender.   \# This evaluator will return true only when the logging   \# event has a priority greater or equal than ERROR.   \##   log4j.appender.email=org.apache.log4j.net.SMTPAppender   log4j.appender.email.Threshold=FATAL   log4j.appender.email.SMTPHost=XXX.XXX.XXX.XXX   log4j.appender.email.To=name@company.com   log4j.appender.email.From=name@company.com   log4j.appender.email.Subject=A Fatal error has occured in your application   log4j.appender.email.BufferSize=1   log4j.appender.email.layout=org.apache.log4j.PatternLayout   <font color="#0000ff" face="Courier New" size="2">\#see http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/PatternLayout.html   log4j.appender.email.ConversionPattern=%d{ABSOLUTE} (%F:%L) – %m%n      <font color="#0000ff" face="Courier New" size="2">\############################   \# remote socket server logging   \#   \# The SocketAppender has the following properties:    \# please read: http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/net/SocketAppender.html   \#   \# If you want to have a server that listen, you can start the following utilities Chainsaw   \# (swing gui) read how at http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/chainsaw/package-summary.html   \# Chainsaw is a particular server!   \##   log4j.appender.CHAINSAW\_CLIENT=org.apache.log4j.net.SocketAppender   log4j.appender.CHAINSAW\_CLIENT.RemoteHost=localhost   log4j.appender.CHAINSAW\_CLIENT.Port=5000   log4j.appender.CHAINSAW\_CLIENT.LocationInfo=true |

# Resources**

- # Join the #Eclipse Platform community and download the Platform at eclipse.org. The #Eclipse Platform source code is licensed under the Common Public License. At eclipse.org, you’ll also find a glossary of terms and descriptions of #Eclipse projects, along with technical articles and newsgroups. The #Eclipse Platform white paper details the major components and functions of #Eclipse.
- <http://jakarta.apache.org/log4j/> Homepage:
- <http://jakarta.apache.org/log4j/docs/api/index.html> JAVADOC:
- <http://jakarta.apache.org/log4j/docs/FAQ.html> FAQ:
- <http://www.onjava.com/pub/a/onjava/2002/08/07/log4j.html?page=1> Tutorials
- <http://jakarta.apache.org/log4j/docs/api/org/apache/log4j/performance/Logging.html> Read the following, it show
  difference of speed among appenders and layout, Performance of logging when logging is turned on is determined by the
  cost of walking the logger hierarchy. Typical cost of a hierarchy walk is in the range 5 to 15 microseconds. Actual
  logging is in order of 100 to 300 micro-seconds.