---

title: 'Inversion of Control pattern or dependency injection'
date: '2006-04-29T12:36:33+02:00'
author: 'Cédric Walter'



---

 You do not create your objects but describe (using cofiguration file) how they should be created and wired together in code. A container (for ex: in case of Spring framework, the IOC container) is then responsible for hooking it all up.

 In a typical IOC scenario, the container creates all the objects, wires them together by setting the necessary properties, and determines when methods will be invoked. The three implementation pattern types for IOC are:

 Type 1 Services need to implement a dedicated interface through which they are provided with an object from which they can look up dependencies (for example, additional needed services).

 Type 2 Dependencies are assigned through #JavaBeans properties (for example, setter methods).

 Type 3 Dependencies are provided as constructor parameters and are not exposed as #JavaBeans properties.