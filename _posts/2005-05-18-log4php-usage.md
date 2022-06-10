---
id: 1746
title: 'Log4PHP usage'
date: '2005-05-18T18:45:55+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1746'
permalink: /joomla/log4php-usage/
tags:
    - framework
    - java
    - log
    - php
---

 <span style="font-size: medium;">Log4php is a php port of the most popular java logging framework log4j (see <http://jakarta.apache.org/log4j/ > for details).  


If You’re familiar with log4j, You will have no problem to use Log4PHP, if it is the first time, You can still read [my introduction](https://waltercedric.com/new/?p=994) or jump to the official Home of Log4j where You’ll find invaluable tutorials and extensions.

 **Using log4PHP in Your daily code….**

Log4j only suppose that the config file should be in classpath…either a log4j.properties or a log4j.xml

As in PHP there us not such concept of clasloader (beside of PATH), You need to tell log4PHP where it’s base reside

 The example below is for use log4PHP in a Mambo environment

```
//location of configuration file
define('LOG4PHP_CONFIGURATION', $mosConfig_absolute_path.'/components/com_log4php/log4php.properties');
//base of log4PHP linbrary
define('LOG4PHP_DIR', $mosConfig_absolute_path.'/components/com_log4php/api');
```

Somewhere in You code where You need logging facilities.   
The LoggerManager has a static method…  
It is recommended to use as logger name the Classname (Here CryptoStrategy)   
 then You need to create a object *LogManager*

```
require_once(LOG4PHP_DIR . '/LoggerManager.php'); 
$logger = & LoggerManager :: getLogger('CryptoStrategy');
$logger->info("this is a info statement");
$logger->debug("this is a debug statement");
$logger->warn("this is a warn statement");
$logger->error("this is a error statement");
$logger->fatal("this is a fatal statement");
```

<span style="font-size: large;">**Log4J, Log4PHP need to be configured…**

A log4PHP file may contains many appenders, layout, logger…

**Different Appenders**

- Appenders are kind of object outputing their data to device : mail, file, console, database, socket, ….there is no limits
- Each appender should have a name, which must be unique
- Appenders can be configured.
- Appenders use a Layout object to filter/alter data before outputing data
- You can define an unlimited amount of appender in the configuration file.

**Console**

 Useful when developing, when log amount bigger than console buffer may be lost

```
#---------------------------------
# @console
# @pattern %d [%t] %-5p %c - %m%n
#---------------------------------
log4php.appender.R=LoggerAppenderConsole
log4php.appender.R.target=STDERR, STDOUT
log4php.appender.R.layout=LoggerPatternLayout
log4php.appender.R.layout.ConversionPattern=%d [%t] %-5p %c - %m%n
```

**Mail**

 Send all logs in level bigger or equal as ERROR to a mail adress

```
#---------------------------------
# @rotate mail
# @from system@example.com
# @to admins@example.com
# @subject 'SYSTEM REPORT'
# @threshold ERROR
#---------------------------------
log4php.appender.R03=LoggerAppenderMail
log4php.appender.R03.layout=LoggerPatternLayout
log4php.appender.R03.layout.ConversionPattern=%d [%t] %-5p %c - %m%n
log4php.appender.R03.from=system@example.com
log4php.appender.R03.to=admins@example.com
log4php.appender.R03.subject="SYSTEM REPORT"
log4php.appender.R03.threshold=ERROR
```

**File**

 Each day a new file in [c:error\_log.txt](file:///C:/error_log.txt) is created which contains the date in its filename

```properties
#---------------------------------
# @rotate daily
# @logfile ./log/error_log_%s.txt
# @pattern %d [%t] %-5p %c - %m%n
#---------------------------------
log4php.appender.R00=LoggerAppenderDailyFile
log4php.appender.R00.file=c:/error_log_%s.txt
log4php.appender.R00.layout=LoggerPatternLayout
log4php.appender.R00.layout.ConversionPattern=%d [%t] %-5p %c - %m%n
```

 **Rotate daily but output in XML**

```properties
#---------------------------------
# @logger log4php_01.php
# @rotate daily
# @logfile ./log/R01_log_%s.txt
#---------------------------------
log4php.appender.R01=LoggerAppenderDailyFile
log4php.appender.R01.file=./log/R01_log_%s.txt
log4php.appender.R01.layout=LoggerXmlLayout
log4php.appender.R01.layout.LocationInfo=true
```
Create max 3 file of 1024kb per days, if there is more logs than that, contnt of first file   
will be overwritten

```properties
#---------------------------------
# @logger log4php_02.php
# @rotate rolling
# @logfile ./log/R02_log_%s.txt
# @filesize 1024
# @backup 3
#---------------------------------
log4php.appender.R02=LoggerAppenderRollingFile
log4php.appender.R02.file=./log/R02_log.txt
log4php.appender.R02.layout=LoggerPatternLayout
log4php.appender.R02.layout.ConversionPattern=%d [%t] %-5p %c - %m%n
log4php.appender.R02.MaxFileSize=1024
log4php.appender.R02.MaxBackupIndex=3
```

Layout

- Layout are objects which tell **Appenders** how to format the log statements.
- For example while developing, You may not be interested by the date and time for each log event in logs while in production this is a mandatory information
- Syntax is inherited from the old C school

**Some common examples**

```properties
%d [%t] %-5p %c - %m%n
```

will output

```
2005-02-09 22:22:00,378 [5124] DEBUG MD5CodeInliner - generating random hidden field name
```

Logger

- Unlimited amount of logger can be defined
- Logger are in a hierarchy of logger, rootlogger being the top logger which cannot be overwritten (Do You feel the power of Log4j/Log4PHP?)
- Loggers are subclass of rootLogger and inheriting from him/each other (Do You feel the power of Log4j/Log4PHP?)
- Logger must have at least ONE appender, but can output to many at the same! (Do You feel the power of Log4j/Log4PHP?)
- It is better to name logger with the same name as Classname -> the granularity of Log amount is then at the class level…For example: You may need in a class a lot of logs during a debugging session (set it to DEBUG, while You aren’t interested by all the other class around: set the rootLogger to ERROR)

 Here the root logger is in DEBUG mode and output to R00

If You do not have the second line, the whole code will be in DEBUG mode

```properties
log4php.rootLogger=DEBUG, R00
log4php.logger.CryptoFactory=ERROR, R00
```

**Links**

- Log4php Home [http://www.vxr.it/log4php/](http://www.vxr.it/log4php/)
- Log4j Home [http://jakarta.apache.org/log4j](http://jakarta.apache.org/log4j)
- Log4j Team [http://jakarta.apache.org/log4j/docs/contributors.html](http://jakarta.apache.org/log4j/docs/contributors.html)