---
id: 8618
title: 'Dropbox CLI on linux'
date: '2017-05-13T19:38:59+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8618'
permalink: /development/dropbox-cli-on-linux/
image: /wp-content/uploads/2011/05/linux.png
tags:
    - cli
    - HowTo
    - linux
    - tutorial
---

Dropbox is a free service that lets you bring all your photos, docs, and videos anywhere. This means that any file you save to your #Dropbox will automatically save to all your computers, phones and even the #Dropbox website. #Dropbox creates a special folder on the user’s computer, the contents of which are then synchronized to #Dropbox’s servers and to other computers and devices that the user has installed Dropbox on, keeping the same files up-to-date on all devices. I use #Dropbox to backup in near real-time all my server to cloud, beside another daemon creating encrypted backup with [Duplicity](http://duplicity.nongnu.org/)

### Installation

1. \#SSH into your server.
2. Make sure that you are in the root of your home directory with `cd`
3. Download the x86-64 (if it apply else the 32bits) Dropbox client. `wget -O dropbox.tar.gz "http://www.dropbox.com/download/?plat=lnx.x86_64"`
4. Extract the newly download archive. `tar -xvzf dropbox.tar.gz`
5. Run the #Dropbox daemon. `~/.dropbox-dist/dropboxd`
6. You should now see output similar to this `This client is not linked to any account... Please visit https://www.dropbox.com/cli_link?host_id= to link this machine.`
7. Go to the URL given in your SSH client you should see a success message at the top of your screen after logging in.
8. It is recommended to exit Dropbox now with Ctrl+C and install the official #Dropbox CLI (continue on to post-installation for instructions)

### Post-installation

#### Official Dropbox CLI (Command-line Interface)

Note: This script is required for most #Dropbox functionality. It is recommended to download the official Dropbox CLI to start the dropbox daemon (as an unprivileged user) and get its status.

1. \#Download the #Python script. `wget -O ~/dropbox.py "http://www.dropbox.com/download?dl=packages/dropbox.py"`
2. Give your account access to execute the script. `chmod 755 ~/dropbox.py`
3. To see the available options, run `~/dropbox.py help`

#### Changing the dropbox folder location

To move an existing dropbox folder to /foo/bar:

1. Stop dropbox. `~/dropbox.py stop`
2. Backup your current Dropbox database. `cp ~/.dropbox/dropbox.db dropbox.db.backup`
3. Download the official script for helping with the directory transition. `wget http://dl.dropbox.com/u/119154/permalink/dropboxdir.py`
4. Give your account access to execute the new script. `chmod +x dropboxdir.py`
5. Move the current Dropbox directory to a new directory named “bar”, located in the directory “foo”. `mv ~/Dropbox /foo/bar`
6. Set Dropbox to use the new folder `./dropboxdir.py --setfolder=/foo/bar`
7. Start Dropbox. `~/dropbox start`

#### Using symbolic links to move the folder location

1. Stop Dropbox. `~/dropbox.py stop`
2. Move your current Dropbox folder to a directory named “folder” located inside the directory “target” `mv ~/Dropbox /target/folder`
3. Create the symbolic link. `ln -s /target/folder/Dropbox ~/`
4. Start Dropbox. `~/dropbox.py start`

#### Unlink / Relink dropbox account

To unlink:

```
~/dropbox.py stop</code> <code>mv ~/.dropbox ~/.dropbox.old
```

To relink:

```
~/.dropbox-dist/dropboxd
```

#### Exclude certain folders from syncing

Display currently excluded directories `~/dropbox.py exclude list`

Add one or more directories to the exclusion list, then resynchronize Dropbox.

```
 ~/dropbox.py exclude add [directory] [directory] [directory]
```

*NOTE:* be sure to specify the full path to \[directory\] above, or else the script will ignore your command. e.g.

```
<code>~/dropbox.py exclude add ~/Dropbox/Public</code>
```

Remove one or more directories from the exclusion list, then resynchronize Dropbox.

```
~/dropbox.py exclude remove [directory] [directory] [directory]
```

#### Check Dropbox’s status

`~/dropbox.py status`

#### Stop and start the Dropbox daemon

Stop Dropbox. `~/dropbox.py stop`

Start Dropbox. `~/dropbox.py start```

Check for more command <https://www.dropbox.com/help/desktop-web/linux-commands>