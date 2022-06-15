---
id: 7964
title: 'Oracle ORA-00054: resource busy and acquire with NOWAIT specified'
date: '2013-03-05T21:36:20+01:00'
author: 'Cédric Walter'
header:
    teaser: /assets/images/2010/07/oracle_logo3.jpg


---

ORA-00054: resource busy and acquire with NOWAIT specified   
Cause: Resource interested is busy.   
Action: Retry if necessary.

I show you here how to get around this error and kill the sessions that are preventing the exclusive lock.

Note that you could also (preferred)

- Run your changes later when the database is idle.
- Do all DDL during a maintenance window when all users are not logged in

Run in [SQL\*Plus](http://en.wikipedia.org/wiki/SQL*Plus "SQL*Plus he most basic Oracle utility, with a basic command-line interface, commonly used by users, administrators, and programmers.") or SQL developer

```
select a.sid, a.serial#  from v$session a, v$locked_object b, dba_objects c  where b.object_id = c.object_id  and a.sid = b.session_id and OBJECT_NAME='YouTableName';
```

Then note both the sid and serial and run

```
alter system kill  session 'sid,serial#' IMMEDIATE;
```

If this still do not work, your last bullet is to kill the Unix process which is still hanging on your database server!

here is how to find the unix process to kill

Run in [SQL\*Plus](http://en.wikipedia.org/wiki/SQL*Plus "SQL*Plus he most basic Oracle utility, with a basic command-line interface, commonly used by users, administrators, and programmers.") or SQL developer

```
select p.spid,s.sid,s.serial#,s.username,s.status,s.last_call_et,

       p.program,p.terminal,logon_time,module,s.osuser  from V$process p,V$session s  where s.paddr = p.addr and s.status = 'ACTIVE' and 

      s.username not like '%SYS%'; 
```

and finally run a

```
kill –9 spid
```

if this still don’t not work, your best [friend is Google](https://www.google.com/webhp?hl=en&tab=ww#hl=en&sclient=psy-ab&q=ORA-00054:+resource+busy+and+acquire+with+NOWAIT+specified&oq=ORA-00054:+resource+busy+and+acquire+with+NOWAIT+specified)