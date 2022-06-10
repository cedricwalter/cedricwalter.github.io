---
id: 2684
title: 'PART 1: Dedicated internet server are not secure out of the box&#8230;'
date: '2006-08-20T20:49:10+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2684'
permalink: /internet/part-1-dedicated-internet-server-are-not-secure-out-of-the-box/
tags:
    - homepage
    - 'My Homepage'
---

[www.strato.de](http://www.strato.de/) server are not delivered secure out of the box, I’ve found a lot of problem on our dedicated server MR2,,,,  
Strato is of course not responsible for that, but what I do not understand is why SuSE do not renforce their default settings. Even if #Linux is all about freedom, why letting so much settings by default, while everyone know that they will lead to securities issues????  
  
<big>First SSH is not correctly configured</big>

<small>X11Forwarding yes</small> a non sense for a server -> ive change it to no  
<small>PasswordAuthentication yes</small> a non sense for a server -> ive change it to yes to allow only strong logging with RSA public private keys.  
i’ve change some other values according to the table below:

  The <tt class="filename">/etc/ssh/sshd\_config</tt> file is the system-wide configuration file for OpenSSH which allows you to set options that modify the operation of the daemon. This file contains keyword-value pairs, one per line, with keywords being case insensitive.

| <span style="color: rgb(255, 255, 255); font-weight: bold;">keywords |  |
|---|---|
| **<tt class="envar">Port 22</tt>** | The option <tt class="envar">Port</tt> specifies on which port number ssh daemon listens for incoming connections. The default port is 22. |
| **<tt class="envar">ListenAddress 192.168.1.1</tt>** | The option <tt class="envar">ListenAddress</tt> specifies the <span class="acronym">IP address of the interface network on which the ssh daemon server socket is bind. The default is <tt class="literal">0.0.0.0</tt>; to improve security you may specify only the required ones to limit possible addresses. |
| **<tt class="envar">HostKey /etc/ssh/ssh\_host\_key</tt>** | The option <tt class="envar">HostKey</tt> specifies the location containing the private host key. |
| **<tt class="envar">ServerKeyBits 1024</tt>** | The option <tt class="envar">ServerKeyBits</tt> specifies how many bits to use in the server key. These bits are used when the daemon starts to generate its <span class="acronym">RSA key. |
| **<tt class="envar">LoginGraceTime 600</tt>** | The option <tt class="envar">LoginGraceTime</tt> specifies how long in seconds after a connection request the server will wait before disconnecting if the user has not successfully logged in. |
| **<tt class="envar">KeyRegenerationInterval 3600</tt>** | The option <tt class="envar">KeyRegenerationInterval</tt> specifies how long in seconds the server should wait before automatically regenerated its key. This is a security feature to prevent decrypting captured sessions. |
| **<tt class="envar">PermitRootLogin no</tt>** | The option <tt class="envar">PermitRootLogin</tt> specifies whether root can log in using ssh. Never say <tt class="filename">yes</tt> to this option. |
| **<tt class="envar">IgnoreRhosts yes</tt>** | The option <tt class="envar">IgnoreRhosts</tt> specifies whether rhosts or shosts files should not be used in authentication. For security reasons it is *recommended to no use rhosts or shosts files for authentication*. |
| **<tt class="envar">IgnoreUserKnownHosts yes</tt>** | The option <tt class="envar">IgnoreUserKnownHosts</tt> specifies whether the ssh daemon should ignore the user’s <tt class="prompt">$</tt><tt class="filename">HOME/.ssh/known\_hosts</tt> during RhostsRSAAuthentication. |
| **<tt class="envar">StrictModes yes</tt>** | The option <tt class="envar">StrictModes</tt> specifies whether ssh should check user’s permissions in their home directory and rhosts files before accepting login. This option must always be set to <tt class="userinput">**yes**</tt> because sometimes users may accidentally leave their directory or files world-writable. |
| **<tt class="envar">X11Forwarding no</tt>** | The option <tt class="envar">X11Forwarding</tt> specifies whether <tt class="literal">X11</tt> forwarding should be enabled or not on this server. Since we setup a server without <span class="acronym">GUI installed on it, we can safely turn this option off. |
| **<tt class="envar">PrintMotd yes</tt>** | The option <tt class="envar">PrintMotd</tt> specifies whether the ssh daemon should print the contents of the <tt class="filename">/etc/motd</tt> file when a user logs in interactively. The <tt class="filename">/etc/motd</tt> file is also known as the *message of the day*. |
| **<tt class="envar">SyslogFacility AUTH</tt>** | The option <tt class="envar">SyslogFacility</tt> specifies the facility code used when logging messages from sshd. The facility specifies the subsystem that produced the message–in our case, AUTH. |
| **<tt class="envar">LogLevel INFO</tt>** | The option <tt class="envar">LogLevel</tt> specifies the level that is used when logging messages from sshd. INFO is a good choice. See the man page for sshd for more information on other possibilities. |
| **<tt class="envar">RhostsAuthentication no</tt>** | The option <tt class="envar">RhostsAuthentication</tt> specifies whether sshd can try to use rhosts based authentication. Because rhosts authentication is insecure you shouldn’t use this option. |
| **<tt class="envar">RhostsRSAAuthentication no</tt>** | The option <tt class="envar">RhostsRSAAuthentication</tt> specifies whether to try rhosts authentication in concert with <span class="acronym">RSA host authentication. |
| **<tt class="envar">RSAAuthentication yes</tt>** | The option <tt class="envar">RSAAuthentication</tt> specifies whether to try <span class="acronym">RSA authentication. This option must be set to <tt class="userinput">**yes**</tt> for better security in your sessions. <span class="acronym">RSA use public and private key pairs created with the ssh-keygen1utility for authentication purposes. |
| **<tt class="envar">PasswordAuthentication yes</tt>** | The option <tt class="envar">PasswordAuthentication</tt> specifies whether we should use password-based authentication. For strong security, this option must always be set to <tt class="userinput">**yes**</tt>. |
| **<tt class="envar">PermitEmptyPasswords no</tt>** | The option <tt class="envar">PermitEmptyPasswords</tt> specifies whether the server allows logging in to accounts with a null password. If you intend to use the scp utility to make automatic backups over the network, you must set this option to <tt class="userinput">**yes**</tt>. |
| **<tt class="envar">AllowUsers admin</tt>** | The option <tt class="envar">AllowUsers</tt> specifies and controls which users can access ssh services. Multiple users can be specified, separated by spaces. |

<dl><dt> **<tt class="envar">to restart the ssh daemon, just execute:</tt>**</dt><dd><big>\# </big>/etc/init.d/sshd restart</dd></dl> I’ve create some new public/private keys pair (<big>\# <font size="-1"><big>ssh-keygen -t rsa</big></big>) and copied the public part id\_pub.rsa into ~/.ssh/authorized\_keys2 and found that tutorial very interesting [<span class="headline">SSH User Identities](http://www.securityfocus.com/infocus/1810)

I provide here both files (I supress all comments for clarity)

| /etc/ssh\_config | /etc/sshd\_config |
|---|---|
| Host \*   ForwardX11Trusted no   RhostsRSAAuthentication no   RSAAuthentication yes   PasswordAuthentication no   KeyRegenerationInterval 3600 | LoginGraceTime 10m   StrictModes yes   MaxAuthTries 3   RSAAuthentication yes   PubkeyAuthentication yes   AuthorizedKeysFile /root/.ssh/authorized\_keys2   HostbasedAuthentication no   IgnoreUserKnownHosts no   IgnoreRhosts yes   PasswordAuthentication no   PermitEmptyPasswords no   X11Forwarding no   UseLogin no |

   
 <big style="font-weight: bold;">2. PHP settings</big>  
 Then I’ve looked at<small> /etc/php.ini </small>and change the following values:

| <small><span style="color: rgb(51, 102, 255);">; You should do your best to write your scripts so that they do not require   <span style="color: rgb(51, 102, 255);">; register\_globals to be on; Using form variables as globals can easily lead   <span style="color: rgb(51, 102, 255);">; to possible security problems, if the code is not very well thought of.   register\_globals = Off </small><span style="color: rgb(51, 102, 255);">; Whether to allow the treatment of URLs (like http:// or ftp://) as files.   allow\_url\_fopen = Off |
|---|

 <big style="font-weight: bold;">3. YaST</big>

 Autoupdate of paches and antivirus update was not set to automatic

 to be continued…