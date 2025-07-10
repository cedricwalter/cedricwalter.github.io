---
title: "The worst router and brand Zyxel AX7501-B0 I've seen in 35 years"
date: 2024-01-08T09:44:17+01:00
cover: "https://www.waltercedric.com/homelab/Zyxel-AX7501-B0-is-shit.webp"
summary: "Avoid Purchasing and Using This Device Zyxel AX7501-B0! Zyxel is a company known for producing networking equipment, including routers, switches, and other network infrastructure devices. "
categories:
  - Homelab
tags:
  - zyxel
  - router
  - dont-buy
  - security-nightmare
  - cve-issues
  - firmware-issues
  - zyxel-avoid
  - zyxel-outdated
  - zyxel-not-serious-with-security
  - zyxel-router-not-good
---
Zyxel is a company known for producing networking equipment, including routers, switches, and other network infrastructure devices.

{{< notice warning>}}UPDATE 2024.07 I stopped using the Zyxel AX7501-B0 WIFI (5 GHz:4800 Mbit/s, 2.4 GHz: 1147 Mbit/s) all together getting frequent cut off in Airplay (1.75m away from Zyxel-AX7501!!), slow Sonos update to the stream. In fact I'm now using an old Synology RT2600ac (5 GHz:1733 Mbit/s, 2.4 GHz: 800 Mbit/s), slower on the paper and the differences are so huge that it is ridiculous.
The Zyxel AX7501-B0 is definitely good at ... nothing and pure garbage! Shame on you Zyxel!

I can not dump the Zyxel because of internet provider and lack of alternatives, but I would immediately.

## 10GB XGS PON
* FRITZ!Box 5690 Pro https://avm.de/produkte/fritzbox/fritzbox-5690-pro/


The future is OpenWRT-One or its successor, all these router must be oopen source to avoid having another Xyzel!*
https://docs.banana-pi.org/en/OpenWRT-One/BananaPi_OpenWRT-One{{< /notice >}}

## Security Warning: Avoid Purchasing and Using This Device

List of known vulnerabilities https://www.opencve.io/cve?vendor=zyxel&product=ax7501-b0_firmware

## Obtaining updated firmware proves challenging, if not impossible
Zyxel portal is a nightmare, AX7501-B0 return ZERO results
try https://www.zyxel.com/support/download_landing.shtml

Official forums indicate firmware availability depends on the supplier, urging users to consult their ISP for AX7501-B0 updates.

A security advisory discovered via Google highlights firmware version V5.15(ABPC.0)C0 as outdated, with no straightforward means to access the latest firmware.

This situation would have been acceptable in 2000, but in 2022, it's unacceptable. The 10GB speed isn't worth compromising security.

## Firmware updates? good luck getting one
- ISPs customize images, leading to varied support experiences.
- Purchased from a retailer? Contact Zyxel for potential assistance.
- Provided by Swisscom, Salt, etc.? Customized firmware from your provider poses security risks.
- Acquired from Init7? Applying C0 (default Zyxel firmware) is a fortunate option.

Obtaining new firmware remains challenging, with outdated versions for Swisscom and Init7, each with its unique hurdles.

The latest firmware, V517ABPC3D0 (2023.4), addresses some issues but contains outdated software elements, including the Samba daemon, Linux kernel, and OpenSSL.

## Broadcom chipset FOSS support is shit
Despite claims of Broadcom compatibility, the device doesn't run really OpenWrt smoothly and relies on a modified OpenWrt 14.03 version (**OpenWrt older than October 2014!**) with butchered and magical Broadcom binaries. see https://forum.openwrt.org/t/zyxel-ax7501-with-xgspon-sfp-10gb-fiber-router-support/157738
Source code can be obtained but code is so old, has broadcom binary, that there is no easy migration path to 23.x

## Zyxel Official forums answers:
"For the new firmware, it may depends on your supplier.
If your AX7501-B0 comes from ISP, you may need to check with your ISP for new firmware version."

Found a security advisory by PURE luck in google, yes I have the wrong one V5.15(ABPC.0)C0 (default)
support.zyxel.eu/hc/en-us/articles/360019108619-Zyxel-securi...
And again NO EASY way to get access to the firmware.

Would have been acceptable in year 2000, not any more in 2022. Having 10GB is not worth the security risk.

## Huge Firmware mess
Your ISP customize the image: why?, how much?, where is the protocol of changes? where is the SBOM? at best you get the formware in an emaail, or from a google drive folder!

### Bought in a shop like digitec.ch
You can contact xyzel and hope they will help you, but depending on the provider you still have to contact the provider's support.

### You received the router from Swisscom, Salt, ...
You have to use another customized firmware from your provider
Security wise a nightmare, all of these provider are behind the curve regarding security and patches.

Swisscom: ftp://zyxel@ftp.zyxel.ch/AX7501-B0/OBM/V517ABPC1C0.bin  login: zyel pwd: zyxel

### You received the router from Init7
You can apply C0 (aka default Zyxel firmware), Init7 still customize the firmware.

https://nextcloud.init7.net/s/xaq42XkH8wjt9zc (Passwort: ANbrM7BLG5)

### In all cases you have to install an unsigned firmware from your provider :skull_and_crossbones:
If you can... some units are locked, you may need to root it first https://th0mas.nl/2020/03/26/getting-root-on-a-zyxel-vmg8825-t50-router/

{{< notice warning>}}Again they ask you to DISABLE the firmware ID check with SSH (zycli fwidcheck off) before the update is installed! No word if disabling is persisting after the reboot. What a joke Zyxel do not whitelist and let provider sign a firmware. This company is not serious about security.

```bash
ssh 192.168.1.1 -l admin

zycli
zycli modelcheck
zycli modelcheck show (Result : "ret:0")
zycli modelcheck off
zycli modelcheck show (Result : "ret:-17")

zycli fwidcheck show (Result : "ret:0")
zycli fwidcheck off
zycli fwidcheck show (Result : "ret:-17")

exit
```

{{< /notice >}}

## What is good in this router?
- Maybe 5GHz speed in Wifi 6 4800MBit
- You can request the firmware source code but not do anything with it. Outdated and with binaries whose API can not be upgraded

## What is bad in Zyxel AX7501-B0 ?
- Issues persist with 5GHz connectivity for Mac mini and Apple TV 4K, compelling some users to revert to 2.4GHz.
- Firmware updates present a challenge due to ISP modifications.
- Lack of automatic updates or alerts.
- User interface complexity even for IT professionals.
- Unstable 5GHz Wi-Fi.
- Zyxel's Software Bill of Materials (SBOM) is not public, but revealing outdated and end of life packages.
- Zyxel neglects security concerns, evident in the absence of SHASUM, untrusted FTP.
- Inability to disable status LED.
- Unexplained binary updates from Zyxel.
- Reliance on a modified OpenWrt version 14.03 instead of the latest 22.03.

I would go as far as to say that this company must be out of business and not supported.
Zyxel's network devices can not be recommended.

Their only solution is to adopt the latest OpenWrt and promote automatic warning or update of their firmware.

if only Apple or Synology would again produce fiber router...


# Alternative Init7 Fiber 7 1GB / 7-X 10GB

## FritzBox 5590
https://ch.avm.de/produkte/fritzbox/fritzbox-5590-fiber-xgs-pon/

The Fiber 7 / 1GB works without problems with the 5590 fiber and also with the 5530 fiber. (The SFP module that is also supplied by AVM AON)

The Fiber 7-X 10GB requires a special module, one with an AON connection from FS.COM.
(Fiber7-X 10 Gbit/s: 10G SFP+ BIDI LR, TX1270/RX1330 nm)
Order number #74681 www.fs.com/de/products/74681.html and important compatibility “GENERIC”

https://www.fs.com/de/products/123906.html 
The linked 10 Gbit/s optics from FS should be connected with an LC UPC fiber optic patch cable (blue plug). Such a cable is also available on FS with the order number #123906 (LC UPC to LC APC Simplex OS2 Singlemode) for less than 3 CHF.