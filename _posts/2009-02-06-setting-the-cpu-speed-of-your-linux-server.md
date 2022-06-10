---
id: 4095
title: 'Setting the CPU speed of your Linux server'
date: '2009-02-06T21:14:03+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4095'
permalink: /linux/setting-the-cpu-speed-of-your-linux-server/
image: /wp-content/uploads/2011/05/linux.png
tags:
    - cli
    - linux
    - server
    - shell
    - webserver
---

[Cpufreqd](http://www.linux.it/~malattia/wiki/index.php/Cpufreqd) is a small daemon to adjust cpu speed and voltage (and not only) for kernels using any of the cpufreq drivers available. Cpufreqd is not a userspace governor.

[Cpufreqd](http://www.linux.it/~malattia/wiki/index.php/Cpufreqd) allows you to apply governor profiles from rules based on battery level, ac status, temperature (ACPI or sensors), running programs, cpu usage and (maybe) more. You can also change your nforce FSB clock and video card frequency (NVidia only) or execute arbitrary commands when a specific rule is applied.

The nice things with #Linux is that you have a total, absolute, full control!

## Defining new profiles

Look for cpufreqd.conf

My profile settings are in /etc/sysconfig/powersave

Example of a profile

```
[Profile] name=On Demand High minfreq=1998000 maxfreq=2331000 policy=ondemand [/Profile]
```

## Defining Rules

Examples of the flexibility offered:

- If temperature is too high, throttle CPU speed lower   
    acpi\_temperature=55-80
- if some application are running, lets say your anti-virus, you may want more CPU:   
    programs=drweb   
    cpu\_interval=0-100

There is a lot more settings, as usual, just read the manual

```
man cpufreqd.conf 
```

## Querying the CPU

To list all available profile, just run as root

```
cpufreqd-get -l
```

**or**

```
cpufreq-info
```

```
analyzing CPU 0: 
  driver: powernow-k8 
  CPUs which need to switch frequency at the same time: 0 
  hardware limits: 1000 MHz - 2.00 GHz 
  available frequency steps: 2.00 GHz, 1.80 GHz, 1000 MHz 
  available cpufreq governors: ondemand, userspace, powersave, performance 
  current policy: frequency should be within 2.00 GHz and 2.00 GHz. 
                  The governor "ondemand" may decide which speed to use 
                  within this range. 
  current CPU frequency is 2.00 GHz (asserted by call to hardware).  
```

## Changing the CPU speed

Now lets change the speed. As a server, I don’t see any reason to try to minimize the speed except in order to save electricity. The profile onDemand should be able to provide the best compromise, changing CPU speed based on server load and thus be more green. For the sake of this article, I will forbid the CPU to downgrade its speed…   
**Attention** you’ll have to respect the hardware limit of you processor. In my case I use currently an AMD K8 Opteron 146 rated at maximum 2GHz

So depending on your processor, you’ll have to either

- Query the Internet to find the CPU speed range or
- Use cpufreqd-info that’s for sure the fastest and safest
- Extracting the info from where they are (for every cpu):   
    <span style="font-family: Fixedsys;">cat /sys/devices/system/cpu/cpu0/cpufreq/scaling\_available\_frequencies   
    cat /sys/devices/system/cpu/cpu0/cpufreq/scaling\_available\_frequencies

I was shocked to discover that my current max speed was set at 1Ghz, leading to a server consuming 80 to 250% of CPU load.

By running, this command cpufreq, I force the system to never go below 2GHz.

```
cpufrequtils 0.4: cpufreq-set (C) Dominik Brodowski 2004 
Report errors and bugs to linux@brodo.de, please. 
Usage: cpufreq-set [options] 
Options: 
  -c CPU, --cpu CPU        number of CPU where cpufreq settings shall be modified 
  -d FREQ, --min FREQ      new minimum CPU frequency the governor may select 
  -u FREQ, --max FREQ      new maximum CPU frequency the governor may select 
  -g GOV, --governor GOV   new cpufreq governor 
  -f FREQ, --freq FREQ     specific frequency to be set. Requires userspace 
                           governor to be available and loaded 
  -h, --help           Prints out this screen 

Notes: 
1. Omitting the -c or --cpu argument is equivalent to setting it to zero 
2. The -f FREQ, --freq FREQ parameter cannot be combined with any other parameter 
   except the -c CPU, --cpu CPU parameter 
3. FREQuencies can be passed in Hz, kHz (default), MHz, GHz, or THz 
   by postfixing the value with the wanted unit name, without any space 
   (FREQuency in kHz =^ Hz * 0.001 =^ MHz * 1000 =^ GHz * 1000000).
```

```
cpufreqd-set -c 0 -d 2GHz
```

The BogoMips make a jump and also the server load is greatly reduce, this can be confirmed by executing:

```
cat /proc/cpuinfo
processor       : 0 
vendor_id       : AuthenticAMD 
cpu family      : 15 
model           : 39 
model name      : AMD Opteron(tm) Processor 146 
stepping        : 1 
cpu MHz         : 1995.468 
cache size      : 1024 KB 
fdiv_bug        : no 
hlt_bug         : no 
f00f_bug        : no 
coma_bug        : no 
fpu             : yes 
fpu_exception   : yes 
cpuid level     : 1 
wp              : yes 
flags           : fpu vme de pse tsc msr pae mce cx8 sep mtrr pge mca cmov 
                  pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext 
                  fxsr_opt lm 3dnowext 3dnow pni lahf_lm 
bogomips        : 3994.29
```

## Back to my Linux desktop

I really enjoy using OpenSuse 11.1 powered by KDE 4.2, changing CPU settings has never been easier thanks to the applet KPowersave

KPowersave is the KDE front end for power management. It provides battery monitoring, suspend/ standby triggers and many more power management features for KDE (and GNOME).