---

title: 'Chain of responsability'
date: '2005-01-20T21:29:50+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/01/java-pattern-chainofresponsability.png
tags:
    - coupling
    - interface
    - responsible
---

Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

![](/assets/images/2005/01/java-pattern-chainofresponsability.png)

# Source code

```
/  * Handles request it is responsible to.  */ public class ConcreteHandler extends Handler {         /   * Handle request or delegate it.   */         public void handleRequest() {                 boolean canProcessThisRequest = false;                if (canProcessThisRequest) {                         // handle request if possible                 } else {                         // pass it to the next in chain                         super.handleRequest();                }         }  }  /  * Defines interface for request handling  * @role __Handler  */ public class Handler {         private Handler successor;        / Default request handling */         public void handleRequest() {                 if (successor != null) {                         successor.handleRequest();                }         }          public Handler getSuccessor() {                 return this.successor;        }          public void setSuccessor(Handler successor) {                 this.successor = successor;        }  }     
```