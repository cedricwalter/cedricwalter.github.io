---
id: 2562
title: 'NAS @ HOME part 2 freenas.org install and benchmark'
date: '2006-05-23T23:19:36+02:00'
author: 'Cédric Walter'



tags:
    - 'PC and Hardware'
    - Storage
---

# Status: in development  
Developers: 5**

| homepage | [www.freenas.org](http://www.freenas.org/) |
|---|---|
| version | 0.66 |
| Based on | [FreeBSD](http://www.freebsd.org/) 6 |
| Support | CIFS (samba), FTP, NFS, RSYNC |
| Software Raid | 0,1,5 |
| Hardware Raid | yes if supported by [FreeBSD](http://www.freebsd.org/) 6 |
| Interface | Web interface, PHP scripts |
| Size | 16MB |
| Can be installed | Compact Flash, hard drive or USB key |
| Filesystem | UFS, FAT32, EXT2/EXT3, NTFS (limited read-only) |
| HardDrive | ATA/SATA, SCSI, USB and Firewire |
| Network | All supported cards by [FreeBSD](http://www.freebsd.org/) 6 (including wireless card!) |

Added value  
Test it without breaking your NAS server with the VMWARE image:

- [FreeNAS 0.65 VMWare](http://www.freenas.org/downloads/vmware/FreeNAS_VM_0.65.zip)
- [VMWare Player](http://www.vmware.com/products/player/) (use it for running the VMware image)

[FreeNAS](http://www.freenas.org/) is installed on the first hard drive (2 partitions), with a RAID 5 volume for the 3 others hard drive. The IP address configured is 192.168.1.1, with default login/password.

| Why choosing it | Why avoiding it |
|---|---|
| Small, do not need an additional disk for the OS | Future releases? |
| 16MB |  |
| [FreeBSD](http://www.freebsd.org/) secure out the box: the least number of buffer vulnerabilities since years! |  |
| Very nice GUI |  |

Performances Tests

in progress