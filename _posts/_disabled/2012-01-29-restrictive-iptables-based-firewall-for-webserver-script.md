---
id: 7458
title: 'Restrictive Iptables Based Firewall for Webserver script'
date: '2012-01-29T18:53:06+01:00'
author: 'Cédric Walter'



tags:
- bash
- block
- clear
- copy
- copyright
- create
- credits
- details
- distributed
- distribution
- dont
- established
- linux
- security
- shell
---

![](/assets/images/2012/01/linux.png)This script is working on all #Linux standard distribution, but use at your own
risk! The script has been made to automated the creation of [iptables](http://www.netfilter.org/) rules. There is an
easy to use menu as well

```
root:~# ./firewall.sh  Firewall script by www.waltercedric.com   Credits to all various authors - GNU/GPL 3.0 Script   Choose one of the following options:  [N]ew firewall rules [C]lear all firewall rules [T]est firewall rules [S]ave firewall rules to /etc/network/iptables [E]xit
```

### Features

- Use [iptables](http://www.netfilter.org/)
- Allow or disallow most services (dns, http, ftp, smtp, icmp, ntp, ssh …),
- Protect ssh against too many login attempt in a timeframe,
- Protect ssh and allow only one ip to use that services,
- Harden the webserver by dropping illegal http packets,
- Easy to read and extend script written in bash,
- GNU/GPL 3.0 Script,

To use it, just edit the file firewall.sh and change the variables.

The file is available as a Gist <https://gist.github.com/1690823>

```bash
#!/bin/bash

# Restrictive Iptables Based Firewall for Webserver script 
# Copyright (C) 2012 Cédric Walter  - www.waltercedric.com
# Credits to all various authors
#
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
#  
# Modify variable below and run the script to create, test, 
# clear or persist the iptables rules
# 
# Tested on Ubuntu Oneiric
# You are free to send me new rules, alter this script but keep this open for others
#
# Make rules persistent
#  Add in /etc/network/interfaces
#                   iface eth0 inet dhcp
#                   pre-up iptables-restore < /etc/network/iptables
# 

IPT="/sbin/iptables"

### Interfaces ###
PUB_IF="eth0"   # public interface
LO_IF="lo"      # loopback
SERVER_IP=$(ifconfig eth0 | grep 'inet addr:' | awk -F'inet addr:' '{ print $2}' | awk '{ print $1}')
 
########## Allow/block services #################################################
ALLOW_SSH="true"
ALLOW_HTTP="true"
ALLOW_FTP="false"
ALLOW_OUTGOING_NTP="true"
ALLOW_OUTGOING_SMTP="true"
ALLOW_INCOMING_ICMP="true" 

USE_HARDENING_RULESET="true"

########## SSH #################################################
SSH_PORT=22

# This notes every NEW connection to port ${SSH_PORT} and adds it to the recent "list"
# If your IP is on the recent list, and you have ${SSH_LOGIN_ATTEMPT} or more entries on the list in the
# last ${SSH_LOGIN_ATTEMPT_TIMEFRAME} seconds, we drop your request.
SSH_LOGIN_ATTEMPT_PROTECTION="true"
SSH_LOGIN_ATTEMPT=4
SSH_LOGIN_ATTEMPT_TIMEFRAME_SECONDS=90

SSH_ALLOW_ONLY_IP="false"
SSH_ALLOW_ONLY_IP_LIST="122.xx.yy.zz/29"

#### FILES #####
BLOCKED_IP_TDB=/root/.fw/blocked.ip.txt
SPOOFIP=""
#SPOOFIP="127.0.0.0/8 192.168.0.0/16 172.16.0.0/12 10.0.0.0/8 169.254.0.0/16 0.0.0.0/8 240.0.0.0/4 255.255.255.255/32 168.254.0.0/16 224.0.0.0/4 240.0.0.0/5 248.0.0.0/5 192.0.2.0/24"
#BADIPS=$( [[ -f ${BLOCKED_IP_TDB} ]] && egrep -v "^#|^$" ${BLOCKED_IP_TDB})
 
########################################################### 
###       Dont change below this line                   ###
########################################################### 

function clearAllIpTablesRules() {
	echo "Clear all firewall rules";
	#Default policy is DROP so first change the INPUT FORWARD and OUTPUT policy before the -F or you will be locked.
	iptables -P INPUT ACCEPT
	iptables -P FORWARD ACCEPT
	iptables -P OUTPUT ACCEPT 
	iptables -F
	iptables -X
	iptables -t nat -F
	iptables -t nat -X
	iptables -t mangle -F
	iptables -t mangle -X
}
 
function hardeningRules() {
  if [ "${USE_HARDENING_RULESET}" == "true" ]; then
	echo "Hardening: Drop sync"
	$IPT -A INPUT -i ${PUB_IF} -p tcp ! --syn -m state --state NEW -j DROP
	 
	echo "Hardening: Drop Fragments"
	$IPT -A INPUT -i ${PUB_IF} -f -j DROP
	 
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags ALL FIN,URG,PSH -j DROP
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags ALL ALL -j DROP
	 
	echo "Hardening: Drop NULL packets"
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags ALL NONE -m limit --limit 5/m --limit-burst 7 -j LOG --log-prefix " NULL Packets "
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags ALL NONE -j DROP
	 
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags SYN,RST SYN,RST -j DROP
	 
	echo "Hardening: Drop XMAS"
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags SYN,FIN SYN,FIN -m limit --limit 5/m --limit-burst 7 -j LOG --log-prefix " XMAS Packets "
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags SYN,FIN SYN,FIN -j DROP
	 
	echo "Hardening: Drop FIN packet scans"
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags FIN,ACK FIN -m limit --limit 5/m --limit-burst 7 -j LOG --log-prefix " Fin Packets Scan "
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags FIN,ACK FIN -j DROP
	 
	$IPT  -A INPUT -i ${PUB_IF} -p tcp --tcp-flags ALL SYN,RST,ACK,FIN,URG -j DROP
	 
	echo "Hardening: Log and get rid of broadcast / multicast and invalid"
	$IPT  -A INPUT -i ${PUB_IF} -m pkttype --pkt-type broadcast -j LOG --log-prefix " Broadcast "
	$IPT  -A INPUT -i ${PUB_IF} -m pkttype --pkt-type broadcast -j DROP
	 
	$IPT  -A INPUT -i ${PUB_IF} -m pkttype --pkt-type multicast -j LOG --log-prefix " Multicast "
	$IPT  -A INPUT -i ${PUB_IF} -m pkttype --pkt-type multicast -j DROP
	 
	$IPT  -A INPUT -i ${PUB_IF} -m state --state INVALID -j LOG --log-prefix " Invalid "
	$IPT  -A INPUT -i ${PUB_IF} -m state --state INVALID -j DROP
  fi
}
 
function logAndBlockSpoofedIPRules() {
	$IPT -N spooflist
	for ipblock in $SPOOFIP
	do
			 $IPT -A spooflist -i ${PUB_IF} -s $ipblock -j LOG --log-prefix " SPOOF List Block "
			 $IPT -A spooflist -i ${PUB_IF} -s $ipblock -j DROP
	done
	$IPT -I INPUT -j spooflist
	$IPT -I OUTPUT -j spooflist
	$IPT -I FORWARD -j spooflist
} 
 
function sshRules() {
	if [ "${ALLOW_SSH}" == "true" ]; then
	 echo "Allow SSH";

	 if [ "${SSH_ALLOW_ONLY_IP}" == "true" ]; then
	  # Allow ssh only from selected public ips
	  for ip in ${SSH_ALLOW_ONLY_IP_LIST}
	  do
			  $IPT -A INPUT -i ${PUB_IF} -s ${ip} -p tcp -d ${SERVER_IP} --destination-port 22 -j ACCEPT
			  $IPT -A OUTPUT -o ${PUB_IF} -d ${ip} -p tcp -s ${SERVER_IP} --sport 22 -j ACCEPT
	  done
	 else
	  # allow for all
	  $IPT -A INPUT -i ${PUB_IF}  -p tcp -d ${SERVER_IP} --destination-port ${SSH_PORT} -j ACCEPT
	  $IPT -A OUTPUT -o ${PUB_IF} -p tcp -s ${SERVER_IP} --sport ${SSH_PORT} -j ACCEPT
	 fi 
	 
	 if [ "${SSH_LOGIN_ATTEMPT_PROTECTION}" == "true" ]; then
	  $IPT -I INPUT -p tcp --dport ${SSH_PORT} -i eth0 -m state --state NEW -m recent --set
	  $IPT -I INPUT -p tcp --dport ${SSH_PORT} -i eth0 -m state --state NEW -m recent --update --seconds ${SSH_LOGIN_ATTEMPT_TIMEFRAME_SECONDS} --hitcount ${SSH_LOGIN_ATTEMPT} -j DROP
	 fi 
	fi  
}

function icmpRules() {
	if [ "${ALLOW_INCOMING_ICMP}" == "true" ]; then
	 echo "Allow incoming ICMP";
	 $IPT -A INPUT -i ${PUB_IF} -p icmp --icmp-type 8 -s 0/0 -m state --state NEW,ESTABLISHED,RELATED -m limit --limit 30/sec  -j ACCEPT
	 $IPT -A OUTPUT -o ${PUB_IF} -p icmp --icmp-type 0 -d 0/0 -m state --state ESTABLISHED,RELATED -j ACCEPT
	fi
}

function httpRules() {
	if [ "${ALLOW_HTTP}" == "true" ]; then
	 echo "Allow HTTP";
	 $IPT -A INPUT -i ${PUB_IF} -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
	 #Allow outgoing (ESTABLISHED only) HTTP connection response (for the corrresponding incoming SSH connection request).
	 $IPT -A OUTPUT -o ${PUB_IF} -p tcp --sport 80 -m state --state ESTABLISHED -j ACCEPT
	 #$IPT -A INPUT -i eth2 -p tcp --dport 80 -j ACCEPT
	 #$IPT -A INPUT -i eth2 -p tcp --dport 443 -j ACCEPT
	 #$IPT -A INPUT -i ${PUB_IF} -p tcp -s 0/0 --sport 1024:65535 --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
	 #$IPT -A OUTPUT -o ${PUB_IF} -p tcp --sport 80 -d 0/0 --dport 1024:65535 -m state --state ESTABLISHED -j ACCEPT
	fi
}

function ntpRules() {
	if [ "${ALLOW_OUTGOING_NTP}" == "true" ]; then
	 echo "Allow outgoing NTP";
	 $IPT -A OUTPUT -o ${PUB_IF} -p udp --dport 123 -m state --state NEW,ESTABLISHED -j ACCEPT
	 $IPT -A INPUT -i ${PUB_IF} -p udp --sport 123 -m state --state ESTABLISHED -j ACCEPT
	fi
}

function smtpRules() {
	if [ "${ALLOW_OUTGOING_SMTP}" == "true" ]; then
	 echo "Allow outgoing SMTP";
	 $IPT -A OUTPUT -o ${PUB_IF} -p tcp --dport 25 -m state --state NEW,ESTABLISHED -j ACCEPT
	 $IPT -A INPUT -i ${PUB_IF} -p tcp --sport 25 -m state --state ESTABLISHED -j ACCEPT
	fi
}

function ftpRules() {
	if [ "${ALLOW_FTP}" == "true" ]; then
	 echo "Allow FTP";
	 $IPT -A INPUT -p tcp --dport ftp -i eth0 -j ACCEPT
	 $IPT -A INPUT -p udp --dport ftp -i eth0 -j ACCEPT
	 $IPT -A INPUT -p tcp --dport ftp-data -i eth0 -j ACCEPT
	 $IPT -A INPUT -p udp --dport ftp-data -i eth0 -j ACCEPT
	fi
}

function dropAndCloseEverythingRules() {
	echo "Drop And Close Everything";
	$IPT -P INPUT DROP
	$IPT -P OUTPUT DROP
	$IPT -P FORWARD DROP
}

function dropAndLogEverythingElseRules() {
	$IPT -A INPUT -m limit --limit 5/m --limit-burst 7 -j LOG --log-prefix " DEFAULT DROP "
	$IPT -A INPUT -j DROP
}

function unlimiteLoopbackRules() {
	$IPT -A INPUT -i ${LO_IF} -j ACCEPT
	$IPT -A OUTPUT -o ${LO_IF} -j ACCEPT
}

function createIptablesRules() {
	echo "Setting $(hostname) Firewall...";
	dropAndCloseEverythingRules
	unlimiteLoopbackRules
	hardeningRules
	logAndBlockSpoofedIPRules
	sshRules
	httpRules
	icmpRules	
	ntpRules 
	smtpRules
	ftpRules
	dropAndLogEverythingElseRules
}

echo " Firewall script by www.waltercedric.com"
echo "  Credits to all various authors - GNU/GPL 3.0 Script"
echo "  Choose one of the following options:" 
echo
echo "[N]ew firewall rules"
echo "[C]lear all firewall rules"
echo "[T]est firewall rules"
echo "[S]ave firewall rules to /etc/network/iptables"
echo "[E]xit"
echo

read choice

case "$choice" in
  "N" | "n" )
	clearAllIpTablesRules
	createIptablesRules
  ;;
  "C" | "c" )
    clearAllIpTablesRules
  ;;
  "T" | "t" )
	clearAllIpTablesRules
	createIptablesRules
    iptables-apply
  ;;
  "S" | "s" )
	clearAllIpTablesRules
	createIptablesRules
	iptables-save > /etc/network/iptables
  ;;
  * )
   exit 0
  ;;

esac
```

<script src="https://gist.github.com/1690823.js?file=firewall.sh"></script>