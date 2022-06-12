---
id: 1507
title: Interpreter
date: '2005-01-20T21:36:55+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1507'

header:
  teaser: /assets/images/2005/01/java-pattern-interpreter.png
---

Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

![](/assets/images/2005/01/java-pattern-interpreter.png)

# Source code

```java
/**  * Declares an abstract Interpret operation that is common to all nodes in the  * abstract syntax tree.  *   * @role __InterpreterExpression  */ public abstract class AbstractExpression {         public abstract void interpret(Context context);}  /**  * Builds an abstract syntax tree representing a particular sentence in the  * language that the grammar defines. Invokes the Interpret operation.  */ public class Client {         public AbstractExpression getExpression() {                 // put your code to create expression here                 return null;        }          public void sampleOperation() {                 Context context = new Context();                

                getExpression().interpret(context);        

        }  }  /**  * Contains information that is global to interpreter.  *   * @role __InterpreterContext  */ public class Context { }  /**  * One such class is required for every rule in the grammar.  */ public class NonterminalExpression extends AbstractExpression {         public void interpret(Context context) {                 // put your code here         }  }  /**  * Implements an Interpret operation associated with terminal symbols in the  * grammar.  */ public class TerminalExpression extends AbstractExpression {         public void interpret(Context context) {                 // put your code here         }  }   
```