---
id: 8326
title: 'CreateSymbolicLink A required privilege is not held by the client'
date: '2016-01-22T15:15:54+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8326'

---

Error 0x80070522: CreateSymbolicLink A required privilege is not held by the client

## How to solve that error

open Local Group Policy (press Win+R to open “Run…” – type gpedit.msc) expand “Computer Configuration” – “Windows Settings” – “Security Settings” – “Local Policies” – “User Rights Assignment” find “Create symbolic links” on the right, and see whether your user is included. If not, add your user into it. this will come in effect after logging in next time, so log out and log in.

If this still doesn’t work, perhaps it’s because you are using a Administrator account. In this case you’ll have to disable User Account Control: Run all administrators in Admin Approval Mode in the same directory (i.e. User Rights Assignment in Group Policy) Then restart the computer to make it take effect.