---
id: 2024
title: 'XBOX, XBMC troubleshootings&#8230;'
date: '2005-09-06T19:38:10+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2024'
permalink: /games/xbox-xbmc-troubleshootings/
tags:
    - HowTo
    - 'XBOX mediacenter'
---

*I was hoping you could help me connect my xbox to my Apple computer. I have tried every FTP program I could get my hands on, including the built in FTP in the operating system. My Xbox has an Xecuter MOD running Evolution X. I cannot get the Xbox to network with my iMac no matter what I do. Any suggestions?*

# XBOX, XBMC troubleshootings…**

{mosgoogle center}

  **XBOX, XBMC troubleshootings**

| **Try:** | **Type in a Command DOS windows** | **What if proove** | **if not working** |
|---|---|---|---|
| If you have a router…   **and all computer including XBOX are connected to it** | Use a web browser:   Connect to the admin console of Your router [http://192.168.1.1](http://192.168.1.1/) for US robotics and [http://192.168.0.1](http://192.168.0.1/) for Netgear, If none of them work look in the router’s manual.   Go to the panel where You can see all devices attached (attached devices):    You must see one device more (ex: AAA.BBB.CCC.DDD as IPadress) | If router has given an IPAdres, then it is OK | 1. Check network cable and/or    2. Modchip install and/or    3. Setting in evolutionX (checkbox FTP active) |
| If you have no router… |  | Verify that PC and XBOX are connected using a cross network cable |  |
| Verify carefully settings in EvolutionX |  | 1. Verify that FTP active is checked   2. Verify that if **Use static IP** is set to false and reboot the XBOX, the router will give it a new IP, if the XBOX dd not receive an IP: check router manual because DHCP must be active |  |
| See if the XBOX is alive | *ping AAA.BBB.CCC.DDD* | The XBOX is responding and there is no IPadress conflict | 1. Look at cable   2. Look if modchip correctly installed   3. Look if FTP active in setting   4. Assign a different IP (a Fix IP in Settings) |
| See if FTP port is reachable | *telnet AAA.BBB.CCC.DDD 21* | The XBOX port is open,    You network let FTP through,    No firewall blocck the outgoing port FTP (21) | Look at firewall settings if any is installed |
|  |  |  |  |

# Glossary of barbarians terms:**

| **DHCP** | Short for Dynamic Host Configuration Protocol, a protocol for assigning dynamic IP addresses to devices on a network. With dynamic addressing, a device can have a different IP address every time it connects to the network. In some systems, the device’s IP address can even change while it is still connected. DHCP also supports a mix of static and dynamic IP addresses. Dynamic addressing simplifies network administration because the software keeps track of IP addresses rather than requiring an administrator to manage the task. This means that a new computer can be added to a network without the hassle of changing configuration. |
|---|---|
| **IPadress** | Internet Protocol, the most basic protocol to communicate on the Internet. An IP number is a numerical address consisting of four numbers seperated by periods. Each IP address uniquely identifies a certain computer on the Internet. The domain name is used to make using them easier. |
| **FTP** | File Transfer Protocol. A standard method for sending files from one computer to another on TCP/IP networks such as the Internet. FTP is also the name of the command used to initiate transfer of files. Anonymous FTP is a common practice which permits users to access some parts of an FTP site without needing an account and password for the site. The login must be XBOX, the password is defined in evox.ini or XBMC.xml |
| **Telnet** | Telnet is a user command using TCP/IP protocols to access a computer remotely. To have access to that computer, you must have permission, meaning you must authenticate to the system with a valid username and password. When you are connected to the network using telnet, you can enter commands and they will be executed as if the were being entered directly onto the server console. |
| **Ping** | Ping is a basic Internet program that lets you verify that a particular Internet address exists and can accept requests. The verb ping means the act of using the ping utility or command. Ping is used diagnostically to ensure that a host computer you are trying to reach is actually operating. |
| **Firewall** | A system designed to prevent unauthorized access to or from a private network. Firewalls can be implemented in both hardware and software, or a combination of both. Firewalls are frequently used to prevent unauthorized Internet users from accessing private networks connected to the Internet, especially intranets. All messages entering or leaving the Intranet pass through the firewall, which examines each message and blocks those (Ex: htttp, ftp, tcp and udp port) that do not meet the specified security criteria. |
|  |  |