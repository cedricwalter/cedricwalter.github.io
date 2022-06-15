---
id: 3020
title: 'The Alternative PHP Cache install'
date: '2007-07-19T12:29:52+02:00'
author: 'Cédric Walter'



tags:
    - php
---

 The Alternative PHP Cache (APC) is a free and open opcode cache for PHP. It was conceived of to provide a free, open, and robust framework for caching and optimizing PHP intermediate code. from [http://nl2.php.net/apc ](http://nl2.php.net/apc)

Links:

- [http://nl2.php.net/apc ](http://nl2.php.net/apc)
- <http://pecl.php.net/package/APC>
- [Joomla! performance testing](http://www.joomla.org/component/option,com_jd-wp/Itemid,105/p,374/ "Permanent Link to #Joomla! performance testing") "For shared hosts you can best make use of APC or eAccelerator"

  Unpack your distribution file. You will have downloaded a file named something like apc\_x.y.tar.gz. Unzip this file with a command like  
`# wget http://pecl.php.net/get/APC-3.0.14.tgz

# gunzip apc_x.y.tar.gz

`  
Next you have to untar it with  
`#  tar xvf apc_x.y.tar`

This will create an apc\_x.y directory. cd into this new directory:  
`# cd apc_x.y`

`phpize` is a script that should have been installed with PHP, and is normally located in` /usr/local/php/bin `assuming you installed PHP in `/usr/local/php`. (If you do not have the `phpize` script, you must reinstall PHP and be sure not to disable PEAR.).

Locate phpize:  
`# find / -name phpize`

mine is in   
` /etc/alternatives/phpize`  
yours may be in `/usr/local/php/bin/phpize`

Run the `phpize` command:  
`#  /usr/local/php/bin/phpize`

Its output should resemble this:  
```php
        Configuring for:

          PHP Api Version:   20020918

          Zend Module Api No:   20020429

          Zend Extension Api No:   20021010
```

`phpize` should create a configure script in the current directory. If you get errors instead, you might be missing some required development tools, such as autoconf or libtool. You can try downloading the latest versions of those tools and running `phpize` again.

Run the configure script.

phpize creates a configure script. The only option you need to specify is the location of your php-config script.

find location of php-config  
`# find / -name php-config`  
then  
`# ./configure --enable-apc --enable-apc-mmap --with-apxs --with-php-config=/etc/alternatives/php-config`

php-config should be located in the same directory as phpize.  
If you prefer to use mmap instead of the default IPC shared memory support, add `--enable-apc-mmap` to your configure line.

 If you prefer to use sysv IPC semaphores over the safer fcntl() locks, add –enable-sem to your configure line. If you don’t have a problem  
 with your server segaulting, or any other unnatural accumulation of semaphores on your system, the semaphore based locking is slightly faster.

Compile and install the files.   
Simply type:  
`# make install

Installing shared extensions:     /usr/lib/php5/extensions/`

Suggested Configuration (in your php.ini file)

`  extension=apc.so

  apc.enabled=1

  apc.shm_segments=1

  apc.shm_size=128 

  apc.ttl=7200

  apc.user_ttl=7200

  apc.num_files_hint=1024

  apc.mmap_file_mask=/tmp/apc.XXXXXX

  apc.enable_cli=1`

Although the default APC settings are fine for many installations, serious  
users should consider tuning the following parameters:

 OPTION DESCRIPTION  
 —————— ————————————————–  
 apc.enabled This can be set to 0 to disable APC. This is  
 primarily useful when APC is statically compiled  
 into PHP, since there is no other way to disable  
 it (when compiled as a DSO, the zend\_extension  
 line can just be commented-out).  
 (Default: 1)

 apc.shm\_segments The number of shared memory segments to allocate  
 for the compiler cache. If APC is running out of  
 shared memory but you have already set  
 apc.shm\_size as high as your system allows, you  
 can try raising this value. Setting this to a  
 value other than 1 has no effect in mmap mode  
 since mmap’ed shm segments don’t have size limits.  
 (Default: 1)

 apc.shm\_size The size of each shared memory segment in MB.  
 By default, some systems (including most BSD  
 variants) have very low limits on the size of a  
 shared memory segment.  
 (Default: 30)

 apc.optimization This option has been deprecated.  
 (Default: 0)

 apc.num\_files\_hint A "hint" about the number of distinct source files  
 that will be included or requested on your web  
 server. Set to zero or omit if you’re not sure;  
 this setting is mainly useful for sites that have  
 many thousands of source files.  
 (Default: 1000)

 apc.user\_entries\_hint Just like num\_files\_hint, a "hint" about the number  
 of distinct user cache variables to store.  
 Set to zero or omit if you’re not sure;  
 (Default: 4096)

 apc.ttl The number of seconds a cache entry is allowed to  
 idle in a slot in case this cache entry slot is  
 needed by another entry. Leaving this at zero  
 means that your cache could potentially fill up  
 with stale entries while newer entries won’t be  
 cached.  
 (Default: 0)

 apc.user\_ttl The number of seconds a user cache entry is allowed  
 to idle in a slot in case this cache entry slot is  
 needed by another entry. Leaving this at zero  
 means that your cache could potentially fill up  
 with stale entries while newer entries won’t be  
 cached.  
 (Default: 0)

 apc.gc\_ttl The number of seconds that a cache entry may  
 remain on the garbage-collection list. This value  
 provides a failsafe in the event that a server  
 process dies while executing a cached source file;  
 if that source file is modified, the memory  
 allocated for the old version will not be  
 reclaimed until this TTL reached. Set to zero to  
 disable this feature.  
 (Default: 3600)

 apc.cache\_by\_default On by default, but can be set to off and used in  
 conjunction with positive apc.filters so that files  
 are only cached if matched by a positive filter.  
 (Default: On)

 apc.filters A comma-separated list of POSIX extended regular  
 expressions. If any pattern matches the source  
 filename, the file will not be cached. Note that  
 the filename used for matching is the one passed  
 to include/require, not the absolute path. If the  
 first character of the expression is a + then the  
 expression will be additive in the sense that any  
 files matched by the expression will be cached, and  
 if the first character is a – then anything matched  
 will not be cached. The – case is the default, so  
 it can be left off.  
 (Default: "")

 apc.mmap\_file\_mask If compiled with MMAP support by using –enable-mmap  
 this is the mktemp-style file\_mask to pass to the  
 mmap module for determing whether your mmap’ed memory  
 region is going to be file-backed or shared memory  
 backed. For straight file-backed mmap, set it to  
 something like /tmp/apc.XXXXXX (exactly 6 X’s).  
 To use POSIX-style shm\_open/mmap put a ".shm"  
 somewhere in your mask. eg. "/apc.shm.XXXXXX"  
 You can also set it to "/dev/zero" to use your  
 kernel’s /dev/zero interface to anonymous mmap’ed  
 memory. Leaving it undefined will force an  
 anonymous mmap.  
 (Default: "")

 apc.slam\_defense \*\* DEPRECATED – Use apc.write\_lock instead \*\*  
 On very busy servers whenever you start the server or  
 modify files you can create a race of many processes  
 all trying to cache the same file at the same time.  
 This option sets the percentage of processes that will  
 skip trying to cache an uncached file. Or think of it  
 as the probability of a single process to skip caching.  
 For example, setting this to 75 would mean that there is  
 a 75% chance that the process will not cache an uncached  
 file. So the higher the setting the greater the defense  
 against cache slams. Setting this to 0 disables this  
 feature.  
 (Default: 0)

 apc.file\_update\_protection  
 When you modify a file on a live web server you really  
 should do so in an atomic manner. That is, write to a  
 temporary file and rename (mv) the file into its permanent  
 position when it is ready. Many text editors, cp, tar and  
 other such programs don’t do this. This means that there  
 is a chance that a file is accessed (and cached) while it  
 is still being written to. This file\_update\_protection  
 setting puts a delay on caching brand new files. The  
 default is 2 seconds which means that if the modification  
 timestamp (mtime) on a file shows that it is less than 2  
 seconds old when it is accessed, it will not be cached.  
 The unfortunate person who accessed this half-written file  
 will still see weirdness, but at least it won’t persist.  
 If you are certain you always atomically update your files  
 by using something like rsync which does this correctly, you  
 can turn this protection off by setting it to 0. If you  
 have a system that is flooded with io causing some update  
 procedure to take longer than 2 seconds, you may want to  
 increase this a bit.  
 (Default: 2)

 apc.enable\_cli Mostly for testing and debugging. Setting this enables APC  
 for the CLI version of PHP. Normally you wouldn’t want to  
 create, populate and tear down the APC cache on every CLI  
 request, but for various test scenarios it is handy to be  
 able to enable APC for the CLI version of APC easily.  
 (Default: 0)

 apc.max\_file\_size Prevents large files from being cached.  
 (Default: 1M)

 apc.stat Whether to stat the main script file and the fullpath  
 includes. If you turn this off you will need to restart

 apc.write\_lock On busy servers when you first start up the server, or when  
 many files are modified, you can end up with all your processes  
 trying to compile and cache the same files. With write\_lock  
 enabled, only one process at a time will try to compile an  
 uncached script while the other processes will run uncached  
 instead of sitting around waiting on a lock.  
 (Default: 1)

 apc.report\_autofilter Logs any scripts that were automatically excluded from being  
 cached due to early/late binding issues.  
 (Default: 0)

 apc.rfc1867 RFC1867 File Upload Progress hook handler is only available  
 if you compiled APC against PHP 5.2.0 or later. When enabled  
 any file uploads which includes a field called  
 APC\_UPLOAD\_PROGRESS before the file field in an upload form  
 will cause APC to automatically create an upload\_<key>  
 user cache entry where <key> is the value of the  
 APC\_UPLOAD\_PROGRESS form entry.

 Note that the file upload tracking is not threadsafe at this  
 point, so new uploads that happen while a previous one is  
 still going will disable the tracking for the previous.  
 (Default: 0)

 apc.localcache This enables a lock-free local process shadow-cache which  
 reduces lock contention when the cache is being written to.  
 (Default: 0)

 apc.localcache.size The size of the local process shadow-cache, should be set to  
 a sufficently large value, approximately half of num\_files\_hint.  
 (Default: 512)

 apc.include\_once\_override  
 Optimize include\_once and require\_once calls and avoid the  
 expensive system calls used.  
 (Default: 0)