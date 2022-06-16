---

title: 'Linux what to monitor v1.0.0'
date: '2011-03-13T19:18:03+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/05/linux.png
tags:
    - linux
    - make
    - map
    - monitor
---

I use to make mind map to organize my ideas, or to organize huge amount of data in a tree manner. Maintaining your own root server is time consuming, to say the least, but it will also force you to put your energy in areas where there is a lot of new things to learn. Here I present you a mind map that contains most of the tools and ideas of what you should monitor on a #Linux server.

This mind map is an ongoing work, that is why it has also a version number in it (v1.0.0). As soon as I will learn new tricks, the mind map will be updated. Your feedback is always welcomed!

[![LinuxWhatToMonitor](/assets/images/2011/03/LinuxWhatToMonitor.png "LinuxWhatToMonitor")](/images/LinuxMonitoring/index.html)By clicking read more, You’ll be able to go through the checklist as text, or [download the mind map as a PDF (600kB)](/assets/images/2011/03/LinuxMonitoring.pdf)

- Why 
    - its critical to know what is going on
    - take preventive action
    - perform maintenance upfront
- What to monitor 
    - CPU utilization
    - Server RAM
    - Bandwidth usage
    - Disk space usage
    - Physical temperature
    - Logs files
- Useful Bash Commands 
    - top 
        - Top will show you memory usage, number of users logged in, load averages, CPU consumption, total uptime, virtual memory, and how long each process has been running.
            
            [htop](http://htop.sourceforge.net/) – htop is an enhanced version of top, the interactive process viewer, which can display the list of processes in a tree form.
    - ps aux 
        - list of every process running, the user running it, and even what action it is taking
    - vmstat 
        - vmstat – System Activity, Hardware and System Information
        - vmstat 3 
            - return information about processes, memory, paging, block IO, traps, and cpu activity.
        - vmstat -m 
            - Display Memory Utilization
    - w 
        - who is logged in and what they are doing
    - uptime 
        - return how long the system is running
    - ps 
        - Display all processes running
        - ps axjf
        - ps -p pid -o comm= 
            - display the process name with pid = pid
        - ps -auxf | sort -nr -k 4 | head -10 
            - return the 10 most consuming memory processes
        - ps -auxf | sort -nr -k 3 | head -10 
            - return the 10 most consuming cpu processes
    - free 
        - displays the total amount of free and used physical and swap memory
    - iostat 
        - display Central Processing Unit (CPU) statistics and input/output statistics for devices, partitions and network filesystems (NFS)
    - mpstat 
        - Displays activities for each available processor, processor 0 being the first one
        - mpstat -P ALL
    - proc 
        - cat /proc/cpuinfo
            
            cat /proc/meminfo
            
            cat /proc/zoneinfo
            
            cat /proc/mounts
    - lsof 
        - list open files, network connections and much more
- Bandwidth usage 
    - Webalizer
- Tools 
    - Nagios 
        - Nagios is a popular open source computer system and network monitoring application software. You can easily monitor all your hosts, network equipment and services.
    - delayed 
        - Munin 
            - Easy monitoring your Linux server from web browser   
                Munin creates graphs for just about everything going on in your system
                
                run every 5 minutes
        - online services
- Login 
    - check for empty user password
        
        
        - awk -F: ‘($2 == “”) {print}’ /etc/shadow
        
        Lock an account
        
        
        - passwd -l accountName
        
        Only root have uid = 0
        
        check account that may act like root
        
        
        - awk -F: ‘($3 == “0”) {print}’ /etc/passwd
- Services 
    - List all services that
        
        are autostarted at boot time
        
        
        - apt-get install chkconfig
            
            chkconfig –list | grep ‘3:on’
        
        Stop unwanted services
        
        
        - service serviceName stop
- Network 
    - list all open ports and associated programs 
        - netstat -tulpn
        - nmap -sT -O localhost
- Files system 
    - Find world writable files 
        - find / -xdev -type d \\( -perm -0002 -a ! -perm -1000 \\) -print
    - find files with no owner 
        - find / -xdev \\( -nouser -o -nogroup \\) -print
- Log Files 
    - Login attempts 
        - /var/log/auth
            
            fail or success
            
            If too much failed attempts in log file
            
            -> may be hacker brute forcing login
            
            
            - block with IPTable
                
                block with fail2ban
                
                apt-get install fail2ban
    - Interesting log files 
        - /var/log/kern.log: Kernel logs
        - /var/log/message: General message
        - /var/log/auth.log: Authentification logs
        - /var/log/mysqld.log: MySQL database server log file
        - /var/log/cron.log: Cronjob logs
        - /var/log/qmail/ : Qmail log directory
        - /var/log/maillog: Mail server logs
        - /var/log/httpd/ or /var/log/apache2/: Apache
        - /var/log/boot.log : System boot log
        - /var/log/secure: Authentication log