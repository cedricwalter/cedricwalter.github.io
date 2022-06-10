---
id: 8316
title: 'Log4j 2 asserting log entries with Junit'
date: '2020-03-17T14:59:03+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8316'
permalink: /development/log4j2-asserting-log-entries-with-junit/
header:
  teaser: /assets/images/2020/03/java.jpg
tags:
    - apache
    - category
    - cedricwalter
    - configuration
    - core
    - create
    - debug
    - default
    - description
    - final
    - finished
    - give
    - HowTo
    - innoveo
    - interface
    - java
    - junit
    - level
    - list
    - tutorial
---

Lets start with the usage in JUnit

```
@Rule public LogAccessor logAccessor=new LogAccessor();

@Test @LogAccessorLogLevel(level = "DEBUG", category = "com.cedricwalter")
public void act_arrange_assert() {
    // Arrange          
    // Act           
    // Assert      
    logAccessor.assertCount(1).assertLevel(Level.DEBUG).assertMessage("Hellow World");
}
```

# Notes** LogAccessorLogLevel is optionnal

Define a new annotation LogAccessorLogLevel .java:

```
package com.cedricwalter.logging;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(value = RetentionPolicy.RUNTIME)
@Target(value = {ElementType.METHOD})
public @interface LogAccessorLogLevel {
    String level() default "ERROR";

    String category() default "";
}
```

Create a new appender TestAppender.java

```
package com.cedricwalter.logging;

import org.apache.logging.log4j.core.Filter;
import org.apache.logging.log4j.core.Layout;
import org.apache.logging.log4j.core.LogEvent;
import org.apache.logging.log4j.core.appender.AbstractAppender;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class TestAppender extends AbstractAppender {
    private final List log = new ArrayList<>();

    protected TestAppender(String name, Filter filter, Layout<? extends Serializable> layout) {
        super(name, filter, layout);
    }

    public List getLog() {
        return new ArrayList<>(log);
    }

    @Override
    public void append(LogEvent logEvent) {
        log.add(logEvent);
    }
}
```

add the Rule class

```
package com.cedricwalter.logging;

import org.apache.logging.log4j.Level;
import org.junit.rules.TestWatcher;
import org.junit.runner.Description;

import java.util.List;

import static com.innoveo.skye.common.utils.matcher.RegexMatcher.matches;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class LogAccessor extends TestWatcher {
    private TestAppender appender;
    private LogAccessorLogLevel logAccessorLogLevel;

    private List getLog() {
        return getAppender().getLog();
    }

    public LogAccessor assertCount(int expectedLogEntryCount) {
        assertThat(getLog().size(), is(expectedLogEntryCount));
        return this;
    }

    public LogAccessor assertLevel(Level expectErrorLevel) {
        assertThat(getLog().get(0).getLevel(), is(expectErrorLevel));
        return this;
    }

    public LogAccessor assertMessage(String expectedMessage) {
        assertThat(getLog().get(0).getMessage().getFormattedMessage(), matches(expectedMessage));
        return this;
    }

    @Override
    protected void starting(Description description) {
        appender = new TestAppender("testAppender", null, null);
        Level level = getLevel(description);          /
        /Add appender to root logger
        org.apache.logging.log4j.core.Logger rootLogger = (org.apache.logging.log4j.core.Logger) LogManager.getRootLogger();
        Configuration configuration = rootLogger.getContext().getConfiguration();
        configuration.addLoggerAppender(rootLogger, appender);
        String logCategory = getLogCategory(description);
        if (logCategory != null) {
            changeLoggerLevel(logCategory, level, appender);
        }
    }

    /**
     * The problem was with the getLoggerConfig() call;
     * if the module you are trying to give a new level is not yet
     * * registered, this method returns the root logger (or any intermediate sub path registered), and thus instead
     * * of altering the level for com.mycompany you will alter root or com level. That's why you have to add a new
     * * LoggerConfig in case the module to alter is not yet registered.
     * *
     * * @param module
     * * @param level      * @param appender
     */
    private static void changeLoggerLevel(final String module, final Level level, TestAppender appender) {
        LoggerContext ctx = (LoggerContext) LogManager.getContext(false);
        AbstractConfiguration configuration = (AbstractConfiguration) ctx.getConfiguration();
        LoggerConfig loggerConfig = configuration.getLogger(module);
        if (loggerConfig != null) {
            org.apache.logging.log4j.core.Logger logger = (org.apache.logging.log4j.core.Logger) LogManager.getLogger(module);
            configuration.addLoggerAppender(logger, appender);
            loggerConfig.setLevel(level);
        } else {
            loggerConfig = new LoggerConfig(module, level, true);
            configuration.addLogger(module, loggerConfig);
            ctx.updateLoggers(configuration);
            org.apache.logging.log4j.core.Logger logger = (org.apache.logging.log4j.core.Logger) LogManager.getLogger(module);
            configuration.addLoggerAppender(logger, appender);
            loggerConfig.setLevel(level);
        }
        ctx.updateLoggers(configuration);
    }

    @Override
    protected void finished(Description description) {
        removeAppender(LogManager.ROOT_LOGGER_NAME);
        String logCategory = getLogCategory(description);
        if (logCategory != null) {
            removeAppender(logCategory);
        }
    }

    private void removeAppender(String loggerName) {
        org.apache.logging.log4j.core.Logger logger = (org.apache.logging.log4j.core.Logger) LogManager.getLogger(loggerName);
        Configuration configuration = logger.getContext().getConfiguration();
        LoggerConfig loggerConfig = configuration.getLoggerConfig(loggerName);
        loggerConfig.removeAppender(appender.getName());
    }

    private TestAppender getAppender() {
        return appender;
    }

    private Level getLevel(Description description) {
        logAccessorLogLevel = description.getAnnotation(LogAccessorLogLevel.class);
        if (logAccessorLogLevel != null) {
            return Level.toLevel(logAccessorLogLevel.level());
        }
        return Level.ERROR;
    }

    private String getLogCategory(Description description) {
        logAccessorLogLevel = description.getAnnotation(LogAccessorLogLevel.class);
        if (logAccessorLogLevel != null) {
            return logAccessorLogLevel.category().getLoggerName();
        }
        return null;
    }

    @Override
    public String toString() {
        LoggerContext ctx = (LoggerContext) LogManager.getContext(false);
        StringBuilder str = new StringBuilder();
        for (LoggerConfig logger : ctx.getConfiguration().getLoggers().values()) {
            final String loggerName = LogManager.ROOT_LOGGER_NAME.equals(logger.getName()) ? "Root Logger" : logger.getName();
            str.append("Found logger '" + loggerName + "' with level " + logger.getLevel());
        }
        return str.toString();
    }
}
```