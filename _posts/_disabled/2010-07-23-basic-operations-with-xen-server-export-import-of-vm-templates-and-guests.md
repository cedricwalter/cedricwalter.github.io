---

title: 'Basic operations with XEN server: export, import of VM templates and guests'
date: '2010-07-23T21:55:45+02:00'
author: 'Cédric Walter'



tags:
    - mount
    - share
---

![xenserver_logo_lg](/assets/images/2010/07/xenserver_logo_lg.gif "xenserver_logo_lg")

More and more I am using XEN at work, and here is a small how to of some very common operations.

> [Citrix® XenServer](http://www.citrix.com/)® is a complete, managed [server virtualization](http://www.citrix.com/xenserver/server-virtualization) platform built on the powerful Xen® hypervisor. Xen technology is widely acknowledged as the fastest and most secure virtualization software in the industry. XenServer is designed for efficient management of Windows® and #Linux® [virtual servers ](http://www.citrix.com/xenserver/server-virtualization)and delivers cost-effective server consolidation and business continuity.

By the way if you succeed installing XEN server on a [Strato.com](http://www.strato.com/) dedicated #Linux server **with a minimal downtime**, [contact me I am interested](http://www.waltercedric.com/-contact-me.html)!

# Basic operations

## Determine the XEN guest uuid

This uuid is required to identify XEN guest.

> \# xe vm-list   
> uuid ( RO) : **99bb0e42-0616-6f02-ed41-be48bb338280**   
>  name-label ( RW): server01   
>  power-state ( RO): running

## Determine the XEN sr-uuid of a disk storage

A sr-uuid identify a storage resources attached to a XEN server, this unique id is required for some operations as it allow you for eample to import XEN guest into it.

Run as root, in the XEN server console

> **\# xe sr-list**   
> uuid ( RO) : **99f191c4-4563-8672-7d8e-4602850fbeb0**   
>  name-label ( RW): Local storage   
>  name-description ( RW):   
>  host ( RO): xen01   
>  type ( RO): lvm   
>  content-type ( RO): user 

Identify the locale storage by looking at the name-label and copy the uuid

## Export XEN Guest

1. You need to stop the XEN guest prior to any operations
2. You need to determine the XEN guest uuid (see basic operations)
3. Mount a NFS / CIFS / Samba share if you want to move from one XEN server to another as the filename can be located anywhere.

Run as root, in the XEN server console

> \# xe vm-export vm=**99bb0e42-0616-6f02-ed41-be48bb338280** filename=server01.xva

## Import XEN Guest

1. You need to determine the XEN guest sr-uuid (see basic operations) : the storage unique id
2. Mount a NFS / CIFS / Samba share if you want to move from one XEN server to another as the filename can be located anywhere.

Run as root, in the XEN server console

> \# xe vm-import filename=server01.xva sr-uuid=**99bb0e42-0616-6f02-ed41-be48bb338280**

## Export a XEN template to disk

1. Log to the XEN server where this template is located, and list all templates
2. Mount a NFS / CIFS / Samba share if you want to move from one XEN server to another as the filename can be located anywhere.

> \# xe template-list

If there is too much templates, you can filter with grep or by using name-label

> \# xe template-list name-label=”myTemplate label”   
> uuid ( RO) : **c4962b6b-5678-a72b-85cd-e33f01b1320a   
> **name-label ( RW): mytemplate label   
> name-description ( RW):

To export, run

> \# xe template-export uuid=**c4962b6b-5678-a72b-85cd-e33f01b1320a **filename=myTemplate.xva

You can see the export progression in tab “logs“ of that template in XEN-Center

## Import a XEN template to a new XEN Server

1. Log to the XEN server where you want to import the new template
2. You need to determine the XEN guest sr-uuid (see basic operations) : the storage unique id

To import, run

> \# xe vm-import filename=myTemplate.xva sr-uuid=**99bb0e42-0616-6f02-ed41-be48bb338280**

### TO be continued…