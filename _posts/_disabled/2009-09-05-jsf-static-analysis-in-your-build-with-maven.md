---
id: 4603
title: 'JSF static analysis in your build with Maven'
date: '2009-09-05T14:38:55+02:00'
author: 'Cédric Walter'



tags:
    - apache
    - ci/cd
    - HowTo
    - maven
    - tutorial
---

Static analysis is in the verification of properties of software used in safety-critical computer systems and locating potentially vulnerable/buggy code. it is desirable to make your build fails at compile/test phases to detect faults earlier. Thanks to [JSFUnit](http://jboss.org/jsfunit/) and [Maven](http://maven.apache.org/), you’ll be able to plug a JSF checker in your build with no effort.

[JSFUnit](http://jboss.org/jsfunit/) is a test framework for JSF applications. It is designed to allow complete integration testing and unit testing of JSF applications using a simplified API. [JSFUnit](http://jboss.org/jsfunit/) tests run inside the container, which provides the developer full access to managed beans, the FacesContext, EL Expressions, and the internal JSF component tree. At the same time, you also have access to parsed HTML output of each client request.

[JSFUnit](http://jboss.org/jsfunit/) provides a set of unit tests for static analysis of JSF applications. Compare to [JSFUnit](http://jboss.org/jsfunit/), you can run these tests without any container, in [Maven](http://maven.apache.org/) phase “test” like any regular Unit Test

Views tests (JSFUnitStaticAnalysisViewTest.java)

- Do any of your facelets templates or well formed JSPs reference nonexistent managed beans?
- Do any of your templates or JSPs have EL expressions for nonexistent managed bean actions or action listeners?

Faces-configurations tests (JSFUnitStaticAnalysisFacesConfigTest.java)

- Are all of your session and application scoped beans Serializable?
- Invalid Managed Bean Scope?
- Missing Managed Bean Class?
- Faces Configurations Class Inheritance?
- Missing Setter Methods?
- Duplicate Managed Bean Names?

TLD tests (JSFUnitStaticAnalysisFacesConfigTest.java)

- Correct Tag Attribute Types?
- Unique Tag Names?
- Correct Tag Inheritance?
- Unique Tag Attributes?

## Install

Put the following in your web project pom.xml (the pom.xml with <packaging>war</packaging>) between <dependencies> .. </dependencies>, Note that this dependency is only available in scope “test”

```
<dependencies>
    <dependency>
        <groupId>org.jboss.jsfunit</groupId>
        <artifactId>jboss-jsfunit-analysis</artifactId>
        <version>1.0.0.GA</version>
        <scope>test</scope>
    </dependency>     
    <!-- TLD test  dependencies  below, for
               View and facesConfig not needed-->
    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>jsp-api</artifactId>
        <version>2.1</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
        <version>1.1.1</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>maven-taglib</groupId>
        <artifactId>maven-taglib-plugin</artifactId>
        <version>1.4.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

Add the following repository in your pom, settings.xml or your [Maven](http://maven.apache.org/) proxy repository ([Artifactory](http://www.jfrog.org/products.php) for example).

```
<Repositories>
    <Repository>
        <id>jboss</id>
        <url>http://repository.jboss.com/maven2/</url>
    </Repository>
</Repositories>
```

```
and
```

```
<PluginRepositories>
    <PluginRepository>
        <id>taglib</id>
        <url>http://maven-taglib.sourceforge.net/maven</url>
    </PluginRepository>
</PluginRepositories>
```

## Create now 3 test classes in /src/test/java

### JSFUnitStaticAnalysisViewTest.java

```
package com.waltercedric.jsfunit;

import org.jboss.jsfunit.analysis.AbstractViewTestCase;

import java.util.HashSet;
import java.util.Set;

public class JSFUnitStaticAnalysisViewTest extends AbstractViewTestCase {
    private static Set absoluteViewPaths = new HashSet<String>() {
        {       // add("C:/work/project/src/home.xhtml");     }   };   private static Set recursiveViewPaths = new HashSet<String>() {     {       add("src/main/resources/pages");       add("src/main/resources/bottom");       add("src/main/resources/top");       add("src/main/resources/menu");     }   };   public JSFUnitStaticAnalysisViewTest() {     super(absoluteViewPaths, recursiveViewPaths,     "src/main/resources/META-INF/faces-config.xml");   } }
```

### JSFUnitStaticAnalysisFacesConfigTest.java

```
package com.waltercedric.jsfunit;

import org.jboss.jsfunit.analysis.AbstractFacesConfigTestCase;

import java.util.HashSet;
import java.util.Set;

public class JSFUnitStaticAnalysisFacesConfigTest extends AbstractFacesConfigTestCase {
    private static Set<String> paths = new HashSet<String>() {
        {
            add("src/main/resources/META-INF/faces-config.xml");
        }
    };

    public JSFUnitStaticAnalysisFacesConfigTest() {
        super(paths);
    }
}
```

### JSFUnitStaticAnalysisTldTest.java

```
package com.waltercedric.jsfunit;

import org.jboss.jsfunit.analysis.AbstractTldTestCase;

import java.util.HashSet;
import java.util.Set;

public class JSFUnitStaticAnalysisTldTest extends AbstractTldTestCase {
    private static Set<String> paths = new HashSet<String>() {
        {
            add("src/main/resources/META-INF/facelets.core.taglib.xml");
        }
    };

    public TldTestCase() {
        super(paths);
    }
}
```

# References

- Jboss Maven repository <http://repository.jboss.com/maven2/>
- Static analysis WIKI page <http://www.jboss.org/community/wiki/StaticAnalysis>
- JSFUnit with Maven <http://www.jboss.org/community/wiki/JSFUnitWithMaven> (it is not the same target, it need a running container)