---

title: '4 ways to automate MAMBO database backup&#8230;'
date: '2005-08-26T22:46:39+02:00'
author: 'Cédric Walter'



---

For "Joe six pack" user to advance users…

1. You only want to use Mambo admin panel- <font color="#ff0000" face="Arial Black">EASIEST
2. Your provider has given You a plesk panel – <font color="#ff0000" face="Arial Black">EASY
3. Your provider only give You a Telnet or ssh access to the server – <font color="#ff0000" face="Arial Black">ADVANCE USER
4. You want more! – <font color="#ff0000" face="Arial Black">VERY ADVANCE USER

<font color="#000000" face="arial,helvetica,sans-serif" size="2">I am using the method 4, which isn’t more difficult and a lot better, open the script and set the variable according to the internal documentation. Upload the file to the server (not in httpdocs under plesk), chmod the file to 700 (rwx- – – – – -) and define a daily crontab. This script is making daily, weekly, monthy backup and send me a mail with the result and a report…

  #  **1. You only want to use Mambo admin panel–** <font color="#ff0000" face="Arial Black">**EASIEST**

Install a Mambo component: [Site backup from bigAPE](http://www.bigape.co.uk/index.php?option=com_content&task=view&id=33&Itemid=26)

The Component provides a basic site backup feature set. The following features are currently offered:

- Ability to backup the entire Mambo file and database system to a compressed file.
- Ability to select which folders to include and exclude from the backup
- Ability to download &amp; manage archives of the Mambo file system
- Ability to generate, download &amp; manage archives of the Mambo mySQL database
- Archives files are unique to the Mambo installation based on creation time and secret key
- Ability to email the generated archive file to a specified account (BETA)
- Backup excludes existing backup sets to conserve space
- Backwardly compatible with 4.5.1

Note: this plugin is only backing up your DB and files when You want it. It is a lot BETTER to use a periodical backup strategy

# **2. Your provider has given You a plesk panel –** <font color="#ff0000" face="Arial Black">**EASY**

We will use crontab:

| The crontab command, found in Unix and Unix-like operating systems, is used to schedule commands to be executed periodically. It reads a series of commands from standard input and collects them into a file known also known as a "crontab" which is later read and whose instructions are carried out. |
|---|

Go in the crontab section of plesk. (I have use here **Plesk 7.5.2)**

Values that are allowed to be use:

- Minute – 0-59 or \*
- Hour – 0-23 or \*
- Day of the Month – 1-31 or \*
- Month – 1-12 or \*
- Day of the Week – 0-6 (0 is Sunday) or \*

We need at least 3 tasks

# 1. A task which extract all data from the database (here starting at 12:00)**

| Minute | Hour | Day of the Month | Month | Day of the Week | Command |
|---|---|---|---|---|---|
| 0 | 0 | \* | \* | \* | */usr/local/mysql/bin/mysqldump -uXXXX -pYYYY -q -hHOST TABLE > /home/httpd/vhosts/waltercedric.com/private/dbbackups/mambobackup.txt* |

*-uXXXX* replace XXXX with your Mambo username for mysql  
*-pYYYY* replace YYYY with your Mambo password for mysql  
*-hHOST* is yourdomain.com or .net or whatever tld your domain has  
TABLE is the Mambo table You want to backup  
*/home/httpd/vhosts/waltercedric.com/private/dbbackups/mambobackup.txt* is a file in a directory outside /httpdocs chmod to 700 (or rwx——\_)

# 2. A task which create a zip of the resulting file (here starting at 12:05)**

| Minute | Hour | Day of the Month | Month | Day of the Week | Command |
|---|---|---|---|---|---|
| 5 | 0 | \* | \* | \* | *gzip -9 -f /home/httpd/vhosts/waltercedric.com/private/dbbackups/mambobackup.txt* |

# Notes**

1. You can also **combine task 2 and 3** in one line and without temporary file (*mambobackup.txt*) by defining task:  */usr/local/mysql/bin/mysqldump* -uXXXX -pYYYY -q -hHOST TABLE *| gzip -9 > /home/httpd/vhosts/waltercedric.com/private/dbbackups/mambobackup.txt.gz*
2. *File mambobackup.txt* is overwritten at each execution of the task -> may be not a goo idea 🙁

# 3. A task which send an email of the result (here starting at 12:10)**

| Minute | Hour | Day of the Month | Month | Day of the Week | Command |
|---|---|---|---|---|---|
| 10 | 0 | \* | \* | \* | MAILTO=AAA\_BBB@CCCC.com /home/httpd/vhosts/waltercedric.com/private/dbbackups/mambobackup.txt.gz |

*AAA\_BBB@CCCC.com* is the mail recipient

# **3. Your provider only give You a Telnet or ssh access to the server –** <font color="#ff0000" face="Arial Black">**ADVANCE USER**

Follow [the 

| A copy of this text…All credits to author |
|---|
| Cronjobbing your mambo (or any mysql db for that matter)–a short tutorial   This is a script that was put together by another Futurequest site owner that I have changed very slightly for my own purposes If you comfortable backing up via command line, then hopefully this will help you. I suspect if you are backing up this way, you already know this stuff.  If you don’t know how to backup via command line or a cron job, it’s real easy to follow the instructions (I hope they are—I tried to make them easy).  Please note this is for a \*nix setup and your setup or file structure on your server may be different. I am unable to offer support for it as I only know it works for me, and hopefully it will for you as well. Use at your own risk and enjoyment.  I’m posting it because I am always seeing a lot of questions on backing up.  \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*   Step 1. Using your file manager or your ftp client, create a directory called dbbackups above the www level (for example: /big/dom/xyourdomain/dbbackups) Chmod it to 700.  .   Step 2. using notepad or your favorite text editor create a text file with the following contents:  Code:  *\#!/bin/bash /usr/local/mysql/bin/mysqldump -uxyourdomain -pyourpassword -q -hmysql.yourdomain.tld xyourdomain >/big/dom/xyourdomain/dbbackups/mambobackup.txt*  after the -u is your username for mysql   after the -p is your password for mysql   after the -hmysql is yourdomain.com or .net or whatever tld your domain has  Following that is the name of the database you are using to run mambo. If you need help remembering which database you used to run mambo, check your config.php file in your mambo or check with phpMyadmin.   After the /big/dom/x insert your actual domain name (no tld this time)  Name this text file mambobackup.sh and install it at the root ( /big/dom/xyourdomain/mambobackup.sh ) &amp; Chomod it 700.  Step 3. Telnet into your account with your favorite SSH client (I like Putty) using your ftp username and password. On the command line enter /big/dom/xyourdomain/mambobackup.sh and hit enter. Put your actual domain in place of yourdomain in the example.  Step 4. From your file manager or your ftp client, check the contents of the folder at /big/dom/xyourdomain/dbbackups/ and inside it you should find a file named mambobackup.txt which is a copy of your mysql database used to run your mambo.  I also use vbulletin and have the same exact script installed substituting "forum" for "mambo" wherever it occurs. Both backup to the dbbackups directory  Automating your backup:  Important-if you have a crontab job already running, these instructions will overwrite it. Chances are, if you have one running, and want to make backups automated, you will want to add this to your existing crontab job and then reinstall it.  Step 1. Using your favorite text editor create a text file with the following contents.  MAILTO=you@yourdomain.tld   5 10 \* \* \* /big/dom/xyourdomain/backupscript.sh  make sure that after .sh you hit enter at least once to create a line feed. Put your actual domain name and tld in place of yourdomain.tld and put your actual domain in place of xyourdomain. Name this file cronjob.txt and install it above the www, ( /big/dom/xyourdomain/cronjob.txt )Chomod it 700  Using your favorite telnet client, telnet into your account using your ftp username and password. On the command line enter  crontab /big/dom/xyourdomain/cronjob.txt  and hit enter. At 10:05 am server time, each day, a new file will overwrite your old one and you will have a daily, fresh backup made automatically for you at /big/dom/xyourdomain/forumbackup/backup.txt You can of course adjust the timing of the backup, by changing the first two entries of cronjob.txt In the example, the 5 is minutes and the 10 is hours. If you wanted the backup to be done at 11:00 PM each day, you would put 0 23 as the first two numbers. However, as it is shown will work fine.  One consideration in making backups is server storage space or disk usage.  Automating your backup and saving disk space by gzipping your backup file  With 1 more file, and a change in the cronjob.txt file, it’s easy to create an automated backup file in in a zipped format (which cuts the space used by about 25%. This is what you will need to add:  1\. Create a text file called zip.sh  Inside this file, put in the following code, replacing xyourdomain with your actual information.  Code:  gzip -9 -f /big/dom/xyourdomain/dbbackups/mambobackup.txt  (I have a second line of code here doing the same for our vbulletin forums, substitituting forumbackup.txt for mambobackup.txt)  Install this file above the www ( /big/dom/xyourdomain/zip.sh ) and chomod it 700. This script will make mambobackup.txt into mambobackup.txt.gz  2\. You will now need to modify the cronjob.txt file as follows replacing yourdomain.tld and xyourdomain with your actual information.  MAILTO=you@yourdomain.tld   5 10 \* \* \* /big/dom/xyourdomain/backupscript.sh   10 10 \* \* \* /big/dom/xyourdomain/zip.sh  after the last .sh be sure to hit enter at least once to insert a line feed. Install the new file in place of the old one above the www ( /big/dom/xyourdomain/cronjob.txt)  Telnet into your account from CNC using your ftp username and password and on the command line put  crontab /big/dom/xyourdomain/cronjob.txt  and hit enter. Replace yourdomain with your actual domain information.   What will happen is that at 10:05 AM each day, a file called backup.txt will be created in the forumbackup folder. At 10:10 AM each day, that file will be zipped up and made into backup.txt.gz and then gzip automatically deletes backup.txt. This series of events will happen automatically each day until you cancel the crontab job.  You may change the timing of this by changing the first two numbers on the 2nd and 3rd lines in the cronjob.txt file to suit yourself. IE to run this at 1:05 PM and finish it at 1:10 PM the crontab.txt file would be  MAILTO=you@yourdomain.tld   5 13 \* \* \* /big/dom/xyourdomain/backupscript.sh   10 13 \* \* \* /big/dom/xyourdomain/zip.sh  Depending upon your site’s busy times, it is best to schedule a backup during slower times of useage. When the backup is being made by the mambobackup.sh script, the site or forum is locked and on a larger site, this could last for 20-30 seconds while myslq dumps the data. You won’t lose any data or posts, but your site may appear to be sluggish during this time.  Betsy |

# **4. You want more! –** <font color="#ff0000" face="Arial Black">**VERY ADVANCE USER**

You can use the open source project: [AutoMySQLBackup](http://sourceforge.net/projects/automysqlbackup/)

A script to take daily, weekly and monthly backups of your MySQL databases using mysqldump. Features – Backup mutiple databases – Single backup file or to a seperate file for each DB – Compress backup files – Backup remote servers – E-mail logs – 

- Backup mutiple MySQL databases with one script. (Now able to backup ALL databases on a server easily. no longer need to specify each database seperately)
- Backup all databases to a single backup file or to a seperate directory and file for each database.
- Automatically compress the backup files to save disk space using either gzip or bzip2 compression.
- Can backup remote MySQL servers to a central server.
- Runs automatically using cron or can be run manually.
- Can e-mail the backup log to any specified e-mail address instead of "root". (Great for hosted websites and databases).
- Can email the compressed database backup files to the specified email address.
- Can specify maximun size backup to email.
- Can be set to run PRE and POST backup commands.
- Choose which day of the week to run weekly backups.  
    