---
id: 2622
title: 'NAS @ HOME part 7 Opensolaris ZFS raidZ install and benchmark'
date: '2006-05-23T23:22:29+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2622'
permalink: /gadget/nas-home-part-7-opensolaris-zfs-raidz-install-and-benchmark/
image: /wp-content/uploads/2006/05/raid.gif
tags:
    - 'PC and Hardware'
    - Storage
---

<span style="font-weight: bold;">Putting <big><span style="color: rgb(255, 204, 0);">Open<span style="color: rgb(153, 153, 255);">Solaris</big> in a NAS server

 OpenSolaris is an open source project created by Sun Microsystems to build a developer community around the Solaris Operating System technology  
 [OpenSolaris express](http://www.sun.com/software/solaris/solaris-express/get.jsp) is the official distribution and can be [download HERE](http://www.sun.com/software/solaris/solaris-express/get.jsp) but I will use a fork of that code.  <span style="font-weight: bold;"> <span style="font-weight: bold;"><span style="font-weight: bold;"><span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold;">![Raid @ home with opensolaris and ZFS](/assets/images/2006/05/raid.gif) <span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Why Solaris for a NAS server?</big><span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);"></big>

 Solaris itself while being a rock solid operating system, is not really needed for a NAS server (oversized). What has increase my interest in it, is [ZFS, the Zetabyte File System](http://www.opensolaris.org/os/community/zfs/). This is an extract of [opensolaris.org](http://opensolaris.org/) all arguments fits nicely to my need:

<quote>

- *ZFS is a new kind of filesystem that provides simple administration, transactional semantics, end-to-end data integrity, and immense scalability. ZFS is not an incremental improvement to existing technology; it is a fundamentally new approach to data management. We’ve blown away 20 years of obsolete assumptions, eliminated complexity at the source, and created a storage system that’s actually a pleasure to use.*
- *ZFS presents a pooled storage model that completely eliminates the concept of volumes and the associated problems of partitions, provisioning, wasted bandwidth and stranded storage. Thousands of filesystems can draw from a common storage pool, each one consuming only as much space as it actually needs. The combined I/O bandwidth of all devices in the pool is available to all filesystems at all times.*
- *All operations are copy-on-write transactions, so the on-disk state is always valid. There is no need to fsck(1M) a ZFS filesystem, ever. Every block is checksummed to prevent silent data corruption, and the data is self-healing in replicated (mirrored or RAID) configurations. If one copy is damaged, ZFS will detect it and use another copy to repair it.*
- *ZFS introduces a new data replication model called RAID-Z. It is similar to RAID-5 but uses variable stripe width to eliminate the RAID-5 write hole (stripe corruption due to loss of power between data and parity updates). All RAID-Z writes are full-stripe writes. There’s no read-modify-write tax, no write hole, and &#151; the best part &#151; no need for NVRAM in hardware. ZFS loves cheap disks.*
- *But cheap disks can fail, so ZFS provides disk scrubbing. Like ECC memory scrubbing, the idea is to read all data to detect latent errors while they’re still correctable. A scrub traverses the entire storage pool to read every copy of every block, validate it against its 256-bit checksum, and repair it if necessary. All this happens while the storage pool is live and in use.*
- *ZFS has a pipelined I/O engine, similar in concept to CPU pipelines. The pipeline operates on I/O dependency graphs and provides scoreboarding, priority, deadline scheduling, out-of-order issue and I/O aggregation. I/O loads that* [*bring other filesystems to their knees*](http://blogs.sun.com/roller/page/bill?entry=zfs_vs_the_benchmark) *are handled with ease by the ZFS I/O pipeline.*
- *ZFS provides unlimited constant-time snapshots and clones. A snapshot is a read-only point-in-time copy of a filesystem, while a clone is a writable copy of a snapshot. Clones provide an extremely space-efficient way to store many copies of mostly-shared data such as workspaces, software installations, and diskless clients.*
- *ZFS backup and restore are powered by snapshots. Any snapshot can generate a full backup, and any pair of snapshots can generate an incremental backup. Incremental backups are so efficient that they can be used for remote replication &#151; e.g. to transmit an incremental update every 10 seconds.*
- *There are no arbitrary limits in ZFS. You can have as many files as you want; full 64-bit file offsets; unlimited links, directory entries, snapshots, and so on.*
- *ZFS provides built-in compression. In addition to reducing space usage by 2-3x, compression also reduces the amount of I/O by 2-3x. For this reason, enabling compression actually makes some workloads go faster.*
- *In addition to filesystems, ZFS storage pools can provide volumes for applications that need raw-device semantics. ZFS volumes can be used as swap devices, for example. And if you enable compression on a swap volume, you now have compressed virtual memory.*
- *ZFS administration is both simple and powerful.*

</quote>

 This speak by itself, Ive seen [2 Demos HERE](http://www.opensolaris.org/os/community/zfs/demos/), and while the hardware support is not that great, I’ve decide to give it a try. Note that linux may have a port of ZFS port before July 2006, as it is a sponsored Google summer of code project.

 <span style="font-weight: bold;"><span style="font-weight: bold;"><span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold;">![Raid @ home with opensolaris and ZFS](/assets/images/2006/05/raid.gif) <span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Which Solaris flavor</big><span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);"></big><span style="font-weight: bold;">

 In Fact it is possible to use one of the following OpenSolaris distribution:

- [BeleniX](http://belenix.sarovar.org/) <span style="font-style: italic;">is a \*NIX distribution that is built using the[ ](http://www.opensolaris.org/)[OpenSolaris](http://www.opensolaris.org/)<span style="font-style: italic;">[ ](http://www.opensolaris.org/)source base. It is currently a LiveCD distribution but is intended to grow into a complete distro that can be installed to hard disk. BeleniX has been developed out of Bangalore the silicon capital of India and it was born at the India Engineering Center of SUN Microsystems. And… it USE KDE: the est open source desktop.
- [SchilliX](http://en.wikipedia.org/wiki/SchilliX "SchilliX"), a live CD.s
- [marTux](http://user.cs.tu-berlin.de/%7Embeinsx/marTux/ "MarTux")[,](http://user.cs.tu-berlin.de/%7Embeinsx/marTux/ "MarTux") a live CD/DVD, for Sparc
- Nexenta, a Debian-based distribution combining GNU software and Solaris’ SunOS kernel
- [Polaris](http://www.blastware.org/ "Polaris (operating system)"), a PowerPC port

 <span style="font-weight: bold;"> Status: stable, in development  
 <span style="font-weight: bold;">\# Developers: \_\_

| homepage | ![Belenix logo](/assets/images/2006/05/belenix_logo.png)     [http://belenix.sarovar.org](http://belenix.sarovar.org/) |
|---|---|
| version | 0.4.3a |
| Based on | OpenSolaris |
| Support | - NFS, - SMB/CIFS, - HTTP/WebDAV - FTP |
| Network directories support | - ??? |
| Software Raid | 0,1,5,6 |
| Hardware Raid |  |
| Interface | None - Remote login is deactivated but can be re-enable: You need to comment out the line "<tt>CONSOLE=/dev/console</tt>" in the file <tt>/etc/default/login</tt> to allow remote root login. - maybe VNC remote access. |
| Size | ?? |
| Can be installed | - Live CD -> but mount point has to e recreated   On hard disk only because of its size |
| File system | EXT2/EXT3, ZFS |
| HardDrive | ATA/SATA, SCSI, USB and Firewire |
| Network | not well… |

   
 <span style="font-weight: bold;"><span style="font-family: Times New Roman,Times,serif;"><span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);"></big><span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);"></big><span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold; color: rgb(255, 0, 0);"><span style="font-weight: bold;">![RAID @ home raid5](/assets/images/2006/05/raid.gif) <span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Installation</big>

 Since belenix is a Live CD, and just for playing around with ZFS, it is more than enough.

 <span style="font-weight: bold;"><span style="font-weight: bold;"><span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold;">![Raid @ home with opensolaris and ZFS](/assets/images/2006/05/raid.gif) <span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Playing with ZFS</big>

 <span style="font-weight: bold;"><span style="font-weight: bold;"><span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold;">![Raid @ home with opensolaris and ZFS](/assets/images/2006/05/raid.gif) <span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Future</big><span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">  
 </big>

 <span style="font-weight: bold;"><span style="font-weight: bold;"><span style="font-weight: bold;"><span style="color: rgb(153, 153, 255);"><span style="font-weight: bold;">![Raid @ home with opensolaris and ZFS](/assets/images/2006/05/raid.gif) <span style="font-weight: bold;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Links and ressources</big>  
 <span style="font-weight: bold;"><span style="font-weight: bold;">

- [WikiPedia OpenSolaris article](http://en.wikipedia.org/wiki/OpenSolaris)
- [Thread: How to build a NAS box](http://www.opensolaris.org/jive/thread.jspa?threadID=5435&tstart=0)
- [Solaris 10 And Open Solaris Security Links](http://www.solarisforums.com/forum_viewtopic.php?22.167)
- [French portal](http://fr.solaris-x86.org/)