---

title: 'HowTo Call conditionnaly another task'
date: '2005-02-15T20:11:05+01:00'
author: 'Cédric Walter'



tags:
    - task
---

Call task1, if the variable contains ‘true’, ‘on’, or ‘1’ the task ‘send a sms alert’ is executed

```xml
<target if="${fatal.error}" name="task1"></target> <antcall target="send a sms alert"></antcall>     
```