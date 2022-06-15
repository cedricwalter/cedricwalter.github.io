---

title: 'Still playing with ZFS pool under Nexenta'
date: '2006-08-11T22:50:05+02:00'
author: 'Cédric Walter'



tags:
    - 'PC and Hardware'
    - Storage
---

Before putting my monster NAS online (pictures will follow soon), I am playing a lot with [NEXENTA](http://www.gnusolaris.org/gswiki) under [VMWARE player.](http://www.vmware.com/products/player/)

I’ve found that excellent PDF ([THE LAST WORD IN FILE SYSTEMS](http://www.opensolaris.org/os/community/zfs/docs/zfs_last.pdf)) which explain why ZFS may be the Saint Graal of file system, while if you want to learn how to administrate pool, I recommend You[The ZFS admin 

Here is my first try, with 7 simulated disks (this example use files and not real devices even if I have 7 real disks sitting next to me ;-)), next steps will be to export the pool as NFS share, plug some disks out, activate encryption, crontab snapshots and remote ssh backup of some vital data.

| \# mkdir /vault | create a directory for storing all virtual disks |
|---|---|
|  # mkfile 64m /vault/disk1    # mkfile 64m /vault/disk2    # mkfile 64m /vault/disk3    # mkfile 64m /vault/disk4    # mkfile 64m /vault/disk5    # mkfile 64m /vault/disk6    # mkfile 64m /vault/disk7 | I create 7 virtual disk name disk1 to disk7 |
|  # zpool status    no pools available | check if there is any pool already defined…. |
| # zpool create nasvault raidz /vault/disk1 /vault/disk2 /vault/disk3 /vault/disk4 /vault/disk5 /vault/disk6 | 6 disks will be in a raidz pool |
|  # zpool status    pool: nasvault    state: ONLINE    scrub: none requested    config:  NAME STATE READ WRITE CKSUM    nasvault ONLINE 0 0 0    raidz ONLINE 0 0 0    /vault/disk1 ONLINE 0 0 0    /vault/disk2 ONLINE 0 0 0    /vault/disk3 ONLINE 0 0 0    /vault/disk4 ONLINE 0 0 0    /vault/disk5 ONLINE 0 0 0    /vault/disk6 ONLINE 0 0 0 | RAIDZ: A replicated RAID-Z configuration can now have   either single- or double-parity, which means that one or two device failures can be sustained   respectively, without any data loss. Disks can be of different size, and there is no write hole as found in other RAID arrays. |
| \#df -h /nasvault    Filesystem size used avail capacity Mounted on    nasvault 384M 16K 384M 1% /nasvault | checking size of the pool |
| \#zpool add nasvault raidz /vault/disk5 /vault/disk6 | Extending pool on the fly with 2 new disks |

  
Some noise about the development of a mini opensolaris boot file (miniroot.gz) under 60 Mb and able to boot on a USB disk have pop up on OpenSolaris forums. Exactly at the right scheedule for my NAS project, if it can come out in less than 2 weeks, it would be perfect!