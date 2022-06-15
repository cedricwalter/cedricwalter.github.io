---

title: 'Oracle ORA-00054: resource busy and acquire with NOWAIT specified or timeout expired'
date: '2013-09-04T17:51:43+02:00'
author: 'Cédric Walter'



---

 <a>![](/assets/images/2010/07/oracle_logo3.jpg)</a>

 The [Oracle](http://www.oracle.com/us/products/database/overview/index.html) error ORA-00054 can be solved by executing as DBA the following query

```
 select p.spid,s.sid,s.serial#,s.username,s.status,s.last_call_et,        p.program,p.terminal,logon_time,module,s.osuser  from         V$process p,V$session s  where         s.paddr = p.addr and s.status = 'ACTIVE' and         s.username not like '%SYS%';
```

 This will return the PID of the hanging process

 You can then SSH to the server ruining oracle and kill the process

```
 kill -9 PID
```