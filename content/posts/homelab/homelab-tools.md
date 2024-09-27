---
title: Homelab - dont rely on services where YOU are the product
date: 2023-12-22T12:55:31+01:00
cover: /2023/docker.webp
type: posts
summary: "A homelab, short for home laboratory, refers to a setup where individuals or hobbyists create a small-scale computing or networking environment in their homes for various purposes. The goal is typically to gain hands-on experience, test and learn about different technologies, and build skills related to IT, networking, server administration, and more. Homelabs can vary widely in complexity and purpose, depending on the interests and goals of the individual setting them up!"
categories:
  - Homelab
tags:
  - homelab
  - docker
  - howto
  - privacy
---
A homelab, short for home laboratory, refers to a setup where individuals or hobbyists create a small-scale computing or networking environment in their homes for various purposes. The goal is typically to gain hands-on experience, test and learn about different technologies, and build skills related to IT, networking, server administration, and more. Homelabs can vary widely in complexity and purpose, depending on the interests and goals of the individual setting them up!

While running a homelab can be a rewarding and educational experience, there are potential risks and challenges associated with it. Here are some considerations:

## Security Risks
* Exposed Services: If not properly configured, exposed services in your homelab can become potential entry points for attackers. It's crucial to secure and properly configure your services, especially if your homelab is connected to the internet.
* Data Loss: In the event of hardware failure, accidental deletion, or other issues, there is a risk of data loss. Regular backups are essential to mitigate this risk. Attention RAID is NOT a backup (use unlimited backblaze instead)

## Resource Utilization
* Power Consumption: Running multiple servers and networking equipment can increase your power consumption, leading to higher electricity bills. Consider the energy efficiency of your homelab components.
* Resource Constraints: Depending on your hardware, you might encounter resource constraints. It's essential to balance the number of virtual machines and services with the capabilities of your hardware.

## Learning Curve
* Complexity: Managing a homelab can be complex, especially if you are experimenting with advanced configurations or technologies. Be prepared to invest time in learning and troubleshooting.
* Maintenance: Regular maintenance is required to keep your homelab up and running. Updates, security patches, and software upgrades need to be managed.

## Internet Service Provider (ISP) Limitations
* Bandwidth: Some ISPs may have limitations on upload and download speeds, which can affect the performance of services hosted in your homelab, especially if you plan to make them accessible from the internet.
* Legal and Ethical Considerations:
Compliance: Be aware of legal and regulatory requirements. Running certain services may be subject to laws and regulations. Ensure compliance with terms of service and licenses for software you use.
* Responsible Use: Understand and respect the terms of use for the services you run. Unauthorized use or abuse of resources could lead to legal consequences.

## Financial Investment
* Costs: While setting up a basic homelab can be done relatively inexpensively, more advanced configurations or equipment can incur costs. Consider your budget and financial commitments.

## Noise and Physical Space
* Noise: Homelab equipment can generate noise, especially if you have servers or networking gear. Consider the physical location of your homelab to minimize disruption.
* Space: Dedicated space may be needed for your homelab equipment. Ensure proper ventilation to prevent overheating.
* I personally only use SSD for their speed, and they are noiseless!

## Isolation from Production Systems
* Isolation: Keep your homelab isolated from critical production systems to prevent any accidental impact on live services.

## Notes
You need to be confortable with terminal and docker, if notm, I recommend you to use a all in one server like:
 * [CasaOS](https://casaos.io) generic with a lot of apps
 * [umbrelOS](https://umbrel.com): a lot of apps, but more focus on crypto
Apps can be installed using an app store and you wont have anything to tinker with! (but you lose on flexibility)

I use Bash, but you could also put everything in a docker compose, or use portainer.

Jellyfin is good enough for my needs, I do not install Kavita, AudiobookShelf, Calibre-web anymore.

## openspeedtest

```yaml
version: '3.3'
services:
    speedtest:
        restart: unless-stopped
        container_name: openspeedtest
        ports:
            - '21000:3000'
            - '21001:3001'
        image: openspeedtest/latest
```

## Run first in a terminal
We set some variables first, then you can proceed and install any software
```bash

# uncomment for MacOS
# export DOCKER_CONF=/Users/yourusername/Docker

# uncomment for raspberry pi
# export DOCKER_CONF=/home/pi/docker

# uncomment for ubuntu
export DOCKER_CONF=/root/docker

TIMEZONE="Europe/Zurich"
RESTART_POLICY=unless-stopped

# https://docs.linuxserver.io/general/understanding-puid-and-pgid/
MY_PUID=1000
MY_PGID=1000
```

## Jellyfin
The king of media center

```bash
INSTALL_JELLYFIN=true
JELLYFIN_MEDIA=/media/pi

if $INSTALL_JELLYFIN; then
    mkdir -p $DOCKER_CONF/jellyfin/config
    mkdir -p $DOCKER_CONF/jellyfin/cache

    docker run -d  \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -v $DOCKER_CONF/jellyfin/config:/config  \
    -v $DOCKER_CONF/jellyfin/cache:/cache  \
    -v $JELLYFIN_MEDIA:/media  \
    --net=host \
    --restart $RESTART_POLICY \
    jellyfin/jellyfin:latest
else
   echo "INSTALL_JELLYFIN is false."
fi
```



# AdguardHome
read also https://github.com/AdguardTeam/AdguardHome/wiki/Encryption

```bash
INSTALL_ADGUARDHOME=true
ADGUARDHOME_PORT=3000

if $INSTALL_ADGUARDHOME; then
    mkdir -p $DOCKER_CONF/adguardhome/config
    mkdir -p $DOCKER_CONF/adguardhome/workdir
    docker pull adguard/adguardhome
    docker kill adguardhome
    docker rm adguardhome

    docker run -d --name adguardhome\
    -e TZ=$TIMEZONE \
    --restart $RESTART_POLICY \
    --network host  \
    -v $DOCKER_CONF/adguardhome/workdir:/opt/adguardhome/work\
    -v $DOCKER_CONF/adguardhome/config:/opt/adguardhome/conf\
    -p 53:53/tcp -p 53:53/udp\
    -p 67:67/udp -p 68:68/udp\
    -p 9080:80/tcp -p 9443:443/tcp -p 9443:443/udp -p $ADGUARDHOME_PORT:3000/tcp\
    -p 853:853/tcp\§
    -p 784:784/udp -p 853:853/udp -p 8853:8853/udp\
    -p 5443:5443/tcp -p 5443:5443/udp\
    -d adguard/adguardhome

    echo "Access Adguardhome $HOSTNAME:$ADGUARDHOME_PORT"
else
   echo "INSTALL_ADGUARDHOME is false."
fi
```

```bash
INSTALL_SABNZBD=true
SABNZBD_PORT=8080
SABNZBD_DOWNLOADS=/sabnzbd
READARR_INCOMPLETE_DOWNLOADS=/sabnzbd

if $INSTALL_SABNZBD; then
    mkdir -p $DOCKER_CONF/sabnzbd/config
    mkdir -p $SABNZBD_DOWNLOADS
    mkdir -p $READARR_INCOMPLETE_DOWNLOADS
    docker kill sabnzbd
    docker rm sabnzbd
    docker run -d \
    --name=sabnzbd \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -p $SABNZBD_PORT:8080 \
    -v $DOCKER_CONF/sabnzbd/config:/config \
    -v $SABNZBD_DOWNLOADS:/downloads `#optional` \
    -v $READARR_INCOMPLETE_DOWNLOADS:/incomplete-downloads `#optional` \
    --restart $RESTART_POLICY \
    lscr.io/linuxserver/sabnzbd:latest

    echo "Access Readarr $HOSTNAME:$SABNZBD_PORT/sabnzbd/"
else
   echo "INSTALL_SABNZBD is false."
fi
```

## Readarr
https://readarr.com
Readarr is a ebook collection manager for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new books
from your favorite authors and will interface with clients and indexers to grab, sort, and rename them.

```bash
INSTALL_READARR=true
READARR_PORT=8787
READARR_BOOKS=/readarr
READARR_DOWNLOADS=/readarr

if $INSTALL_READARR; then
    mkdir -p $READARR_DOWNLOADS
    mkdir -p $READARR_BOOKS
    mkdir -p $DOCKER_CONF/readarr/data
    docker kill readarr
    docker rm readarr
    docker run -d \
    --name=readarr \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -p $READARR_PORT:8787 \
    -v $DOCKER_CONF/readarr/data:/config \
    -v $READARR_BOOKS:/books `#optional` \
    -v $READARR_DOWNLOADS:/downloads `#optional` \
    --restart $RESTART_POLICY \
    lscr.io/linuxserver/readarr:nightly

    echo "Access Readarr $HOSTNAME:$READARR_PORT"
else
   echo "INSTALL_READARR is false."
fi
```

## MovieMatch
https://github.com/LukeChannings/moviematch
MovieMatch connects to your Plex server and gets a list of movies (from any libraries marked as a movie library).
As many people as you want connect to your MovieMatch server and get a list of shuffled movies. Swipe right to 👍, swipe left to 👎.
If two (or more) people swipe right on the same movie, it'll show up in everyone's matches. The movies that the most people swiped right on will show up first.

```bash
INSTALL_MOVIEMATCH=true
MOVIEMATCH_PORT=8000

if $INSTALL_MOVIEMATCH; then
    docker kill moviematch
    docker rm moviematch
    docker run -d -it --name=moviematch \
    -e PLEX_URL=$PLEX_URL \
    -e PLEX_TOKEN=$PLEX_TOKEN \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -p $MOVIEMATCH_PORT:8000 --pull always \
    --restart $RESTART_POLICY \
    lukechannings/moviematch:latest

    echo "Access MovieMatch $HOSTNAME:$MOVIEMATCH_PORT"
else
   echo "INSTALL_MOVIEMATCH is false."
fi
```

# Kavita
Kavita is a full-fledged, fast, cross-platform, & open-source manga, comic, and book server.
Built from the ground up with a focus on manga

```bash
INSTALL_KAVITA=true
KAVITA_PORT=5471
KAVITA_COMICS=/comics

if $INSTALL_KAVITA; then
    mkdir -p $DOCKER_CONF/kavita
    docker kill kavita
    docker rm kavita

    docker run -d --name=kavita \
    -p $KAVITA_PORT:5000 \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -v $DOCKER_CONF/kavita:/kavita/config \
    -v $KAVITA_COMICS:/manga \
    --restart $RESTART_POLICY \
    kizaing/kavita

    echo "TODO Add library by adding folder mapped /manga"
    echo "Access Kavita $HOSTNAME:$KAVITA_PORT"
else
   echo "INSTALL_KAVITA is false."
fi
```

## Overseerr
Overseerr is a request management and media discovery tool built to work with your existing
 Plex ecosystem. The best way to discover media. Overseerr helps you find media you want to watch.
With inline recommendations and suggestions, you will find yourself deeper and deeper in a rabbit
hole of content you never knew you just had to have. https://overseerr.dev/

```bash
INSTALL_OVERSEER=true
OVERSEER_PORT=5055

if $INSTALL_OVERSEER; then
    mkdir -p $DOCKER_CONF/overseerr/config
    docker kill overseers
    docker rm  overseerr
    docker run -d \
    --name overseerr \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -e LOG_LEVEL=debug \
    -p $OVERSEER_PORT:5055 \
    -v $DOCKER_CONF/config:/app/config \
    --restart $RESTART_POLICY \
    sctx/overseerr

    echo "Access Overseerr $HOSTNAME:$OVERSEER_PORT"
else
   echo "INSTALL_OVERSEER is false."
fi
```

## Apple timemachine
https://hub.docker.com/r/mbentley/timemachine


```bash
INSTALL_TIMEMACHINE=true
TIMEMACHINE_VOLUME=/timemachine
TIMEMACHINE_PASSWORD=xxxxxxxx

if $INSTALL_TIMEMACHINE; then
    docker run -d --restart=always \
    --name timemachine \
    --net=host \
    -e ADVERTISED_HOSTNAME="" \
    -e CUSTOM_SMB_CONF="false" \
    -e CUSTOM_USER="false" \
    -e DEBUG_LEVEL="1" \
    -e MIMIC_MODEL="TimeCapsule8,119" \
    -e EXTERNAL_CONF="" \
    -e HIDE_SHARES="no" \
    -e TM_USERNAME="timemachine" \
    -e TM_GROUPNAME="timemachine" \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e PASSWORD="$TIMEMACHINE_PASSWORD" \
    -e SET_PERMISSIONS="false" \
    -e SHARE_NAME="TimeMachine" \
    -e SMB_INHERIT_PERMISSIONS="no" \
    -e SMB_NFS_ACES="no" \
    -e SMB_METADATA="stream" \
    -e SMB_PORT="445" \
    -e SMB_VFS_OBJECTS="acl_xattr fruit streams_xattr" \
    -e VOLUME_SIZE_LIMIT="0" \
    -e WORKGROUP="WORKGROUP" \
    -e TZ=$TIMEZONE \
    -v $TIMEMACHINE_VOLUME:/opt/timemachine \
    -v timemachine-var-lib-samba:/var/lib/samba \
    -v timemachine-var-cache-samba:/var/cache/samba \
    -v timemachine-run-samba:/run/samba \
    mbentley/timemachine:smb
else
   echo "INSTALL_TIMEMACHINE is false."
fi
```

## Prowlarr
The Ultimate Indexer Manager https://prowlarr.com


```bash
INSTALL_PROWLARR=true
PROWLARR_PORT=9696

if $INSTALL_PROWLARR; then
    mkdir -p $DOCKER_CONF/prowlarr
    docker run -d \
    --name=prowlarr \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -p $PROWLARR_PORT:9696 \
    -v $DOCKER_CONF/prowlarr:/config \
    --restart $RESTART_POLICY \
    lscr.io/linuxserver/prowlarr:latest

    echo "Access prowlarr $HOSTNAME:$PROWLARR_PORT"
else
   echo "INSTALL_PROWLARR is false."
fi
```


## RdtClient
RdtClient emulates the qBittorrent web protocol and allow applications to use those APIs.
This way you can use Sonarr and Radarr to download directly from torrent without being tracked.
https://github.com/rogerfar/rdt-client

```bash
INSTALL_RTDCLIENT=true
RTDCLIENT_PORT=6500
RTDCLIENT_DOWNLOAD_FOLDER=/Downloads

if $INSTALL_RTDCLIENT; then
    mkdir -p $DOCKER_CONF/rdtclient/db
    mkdir -p $RTDCLIENT_DOWNLOAD_FOLDER
    docker kill rdtclient
    docker rm rdtclient
    docker run --pull=always -d \
            --volume $RTDCLIENT_DOWNLOAD_FOLDER:/data/downloads \
            --volume $DOCKER_CONF/rdtclient/db/:/data/db \
            --log-driver json-file \
            --log-opt max-size=10m \
            -e PUID=$MY_PUID -e PGID=$MY_PGID \
            -e TZ=$TIMEZONE \
            -p $RTDCLIENT_PORT:6500 \
            --name rdtclient \
            --restart $RESTART_POLICY \
            rogerfar/rdtclient:latest

    echo "http://$HOSTNAME:$RTDCLIENT_PORT/setup"
    echo "Configure rdtclient to use your premium real debrid account"
    echo "Create login and password"
    echo "Connect to real debrid, api key at https://real-debrid.com/apitoken"
    echo "Access RdtClient $HOSTNAME:$RTDCLIENT_PORT"
else
   echo "INSTALL_RTDCLIENT is false."
fi
```

##  Portainer
Containers are the way the world builds modern software applications, and Portainer is the
way the world manages containers. With an intuitive UI, backed by ...

```bash
INSTALL_PORTAINER=true
PORTAINER_PORT=9100
PORTAINER_AGENT=9001

if $INSTALL_PORTAINER; then
    mkdir -p $DOCKER_CONF/portainer
    docker kill portainer
    docker rm portainer
    docker run -d --name=portainer \
    -p 8100:8000 \
    -p $PORTAINER_PORT:9000 \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v $DOCKER_CONF/portainer:/data \
    --restart=always \
    portainer/portainer

    docker run -d \
    -p $PORTAINER_AGENT:9001 \
    --name portainer_agent \
    --restart=always \
    -e TZ=$TIMEZONE \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /var/lib/docker/volumes:/var/lib/docker/volumes \
    portainer/agent:2.16.2

    echo "Access portainer $HOSTNAME:$PORTAINER_PORT"
else
   echo "INSTALL_PORTAINER is false."
fi
```

## Radarr
Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent.
The project was inspired by other Usenet/BitTorrent movie downloaders such as CouchPotato.

```bash
INSTALL_RADARR=true
SONARR_RADARR=7878
RADARR_DOWNLOADS=/radarr

if $INSTALL_SONARR; then
    mkdir -p $DOCKER_CONF/sonarr
    docker kill sonarr && docker rm sonarr
    docker run -d \
    --name=sonarr \
    -e TZ=$TIMEZONE \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -p $SONARR_PORT:8989 \
    -v $DOCKER_CONF/sonarr:/config \
    --restart $RESTART_POLICY \
    lscr.io/linuxserver/sonarr:latest

    echo "Access Sonarr $HOSTNAME:$PORTAINER_PORT"
    echo "TODO Copy API key  for Overseer"
    echo "TODO Create Root folders for Overseer"
    echo "TODO Connect Sonarr to overseer"
    echo "See Connect Sonarr/Radarr to rdtclient"
else
   echo "INSTALL_SONARR is false."
fi
```

## Sonarr
is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for
new episodes of your favorite shows and will grab, sort and rename them.It can also be
 configured to automatically upgrade the quality of files already downloaded when a better
 quality format becomes available.
 https://github.com/linuxserver/docker-sonarr/pkgs/container/sonarr


```bash
INSTALL_SONARR=true
SONARR_PORT=8989

if $INSTALL_RADARR; then
    mkdir -p $DOCKER_CONF/radarr
    docker kill radarr && docker rm radarr
    docker run -d --name=radarr \
    -p $RADARR_PORT:7878 \
    -e TZ=$TIMEZONE \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -v $DOCKER_CONF/radarr:/config \
    -v $RADARR_DOWNLOADS:/shares \
    --restart $RESTART_POLICY \
    ghcr.io/linuxserver/radarr

    echo "Access Radarr $HOSTNAME:$RADARR_PORT"
    echo "TODO Connect Radarr to overseer"
    # See Connect Sonarr/Radarr to rdtclient
    # https://rarbg.to/rssdd.php?category=2;23;24;25;26
else
   echo "INSTALL_RADARR is false."
fi
```

## Lidarr
https://lidarr.audio

```bash
INSTALL_LIDARR=true
LIDARR_PORT=8686
LIDARR_MONITORED_FOLDER=/music
LIDARR_DOWNLOADS_FOLDER=/Downloads

if $INSTALL_LIDARR; then
    mkdir -p $DOCKER_CONF/lidarr
    docker kill lidarr && docker rm lidarr
    docker run -d \
    --name=lidarr \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -p $LIDARR_PORT:8686 \
    -v $DOCKER_CONF/lidarr/config:/config \
    -v $LIDARR_MONITORED_FOLDER:/music `#optional` \
    -v $LIDARR_DOWNLOADS_FOLDER:/downloads `#optional` \
    --restart $RESTART_POLICY \
    lscr.io/linuxserver/lidarr:latest

    echo "Access Lidarr $HOSTNAME:$LIDARR_PORT"
    echo "TODO Connect Lidarr to overseer"
    # See Connect Sonarr/Radarr to rdtclient
    # https://rarbg.to/rssdd.php?category=2;23;24;25;26
else
   echo "INSTALL_LIDARR is false."
fi
```

## Tautulli
https://hub.docker.com/r/tautulli/tautulli
https://tautulli.com/#download

```bash
INSTALL_TAUTULLI=true
TAUTULLI_PORT=8181

if $INSTALL_TAUTULLI; then
    mkdir -p $DOCKER_CONF/tautulli
    docker run -d \
    --name=tautulli \
    --restart $RESTART_POLICY \
    -v $DOCKER_CONF/tautulli:/config \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -p $TAUTULLI_PORT:8181 \
    ghcr.io/tautulli/tautulli
    echo "Access tautulli $HOSTNAME:$TAUTULLI_PORT"
else
   echo "INSTALL_TAUTULLI is false."
fi
```

## JDownloader
JDownloader is a download manager, written in Java, which allows automatic download of groups of files from one-click hosting sites.

```bash
INSTALL_JDOWN=true
JDOWN_PORT=5800
JDOWN_DOWNLOAD_FOLDER=/Downloads

if $INSTALL_JDOWN; then
    mkdir -p $DOCKER_CONF/config
    mkdir -p $JDOWN_DOWNLOAD_FOLDER
    docker kill jdownloader2
    docker rm jdownloader2
    docker run -d --name=jdownloader2 \
    -p 3129:3129 \
    -p $JDOWN_PORT:5800 \
    -p 5900:5900 \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -v $DOCKER_CONF/jdownloader2/config:/config \
    -v $JDOWN_DOWNLOAD_FOLDER:/output \
    --restart $RESTART_POLICY \
    jlesage/jdownloader-2

    echo "Access Jdownloader $HOSTNAME:$JDOWN_PORT"
else
   echo "INSTALL_JDOWN is false."
fi
```

## Homarr
Homarr simplify the management of your server with Homarr - a sleek, modern dashboard that puts all of your apps and services at your fingertips.

```bash
INSTALL_HOMARR=true
HOMARR_PWD=xxxxxxx
HOMARR_PORT=4000

if $INSTALL_HOMARR; then
    mkdir -p $DOCKER_CONF/homarr
    mkdir -p $DOCKER_CONF/homarr/icons

    docker kill homarr && docker rm homarr
    docker run -d --name=homarr \
        -p $HOMARR_PORT:7575 \
        -v $DOCKER_CONF/homarr:/app/data/configs \
        -v $DOCKER_CONF/homarr/icons:/app/public/icons \
        -e PASSWORD=$HOMARR_PWD \
        -e PUID=$MY_PUID -e PGID=$MY_PGID \
        -e TZ=$TIMEZONE \
        --restart $RESTART_POLICY \
    ghcr.io/ajnart/homarr

    echo "Access homarr $HOSTNAME:$HOMARR_PORT"
else
   echo "INSTALL_HOMARR is false."
fi
```

## Photoprism


```bash
INSTALL_PHOTOPRISM=true
PHOTOPRISM_PWD=xxxxxxxxx
PHOTOPRISM_STORAGE=/Pictures
PHOTOPRISM_PORT=2342

if $INSTALL_PHOTOPRISM; then
    mkdir -p $DOCKER_CONF/photoprism
    docker kill photoprism
    docker rm photoprism

    docker run -d --name=photoprism \
    -p $PHOTOPRISM_PORT:2342 \
    -e TZ=$TIMEZONE \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e PHOTOPRISM_UPLOAD_NSFW=true \
    -e PHOTOPRISM_ADMIN_PASSWORD=$PHOTOPRISM_PWD \
    -e PHOTOPRISM_ORIGINALS_LIMIT=-1 \
    -v $DOCKER_CONF/photoprism:/photoprism/storage \
    -v $PHOTOPRISM_STORAGE:/photoprism/originals \
    --restart $RESTART_POLICY \
    photoprism/photoprism
else
   echo "INSTALL_PHOTOPRISM is false."
fi
```



## Audiobookshelf
Audiobookshelf is a free and open source audiobook and podcast manager.
```bash
INSTALL_AUDIOBOOKSHELF=true
AUDIOBOOKSHELF_PORT=13378
AUDIOBOOKSHELF_MEDIA=/audiobookshelf/

if $INSTALL_AUDIOBOOKSHELF; then
    docker pull ghcr.io/advplyr/audiobookshelf
    mkdir -p $DOCKER_CONF/audiobookshelf/config

    mkdir -p $AUDIOBOOKSHELF_MEDIA/metadata
    mkdir -p $AUDIOBOOKSHELF_MEDIA/audiobooks
    mkdir -p $AUDIOBOOKSHELF_MEDIA/podcasts

    docker kill audiobookshelf
    docker remove audiobookshelf

    docker run -d \
    -p $AUDIOBOOKSHELF_PORT:80 \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -e TZ=$TIMEZONE \
    -v $DOCKER_CONF/audiobookshelf/config:/config \
    -v $AUDIOBOOKSHELF_MEDIA/metadata:/metadata \
    -v $AUDIOBOOKSHELF_MEDIA/audiobooks:/audiobooks \
    -v $AUDIOBOOKSHELF_MEDIA/podcasts:/podcasts \
    --name audiobookshelf \
    --restart $RESTART_POLICY \
    --rm ghcr.io/advplyr/audiobookshelf

    echo " ${GREEN}INFO${NC} Access audiobookshelf $HOSTNAME:$AUDIOBOOKSHELF_PORT"
else
   echo "INSTALL_AUDIOBOOKSHELF is false."
fi
```

## Calibreweb
Calibre-Web is a web app providing a clean interface for browsing, reading and downloading eBooks using a valid Calibre database.
```bash
# Default login initial is admin/admin123
INSTALL_CALIBRE_WEB=true
CALIBRE_WEB_PORT=8083
CALIBRE_WEB_FOLDER=/calibreweb

if $INSTALL_CALIBRE_WEB; then
    mkdir -p $DOCKER_CONF/calibreweb
    mkdir -p $CALIBRE_WEB_FOLDER
    docker kill calibre-web
    docker remove calibre-web

    docker run -d --name=calibre-web \
    -p $CALIBRE_WEB_PORT:8083 \
    -e TZ=$TIMEZONE \
    -e DOCKER_MODS=linuxserver/mods:universal-calibre \
    -e OAUTHLIB_RELAX_TOKEN_SCOPE=1 \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -v $DOCKER_CONF/calibreweb:/config \
    -v $CALIBRE_WEB_FOLDER:/books \
    --restart $RESTART_POLICY \
    ghcr.io/linuxserver/calibre-web

    echo "${GREEN}INFO${NC} Access calibre-web $HOSTNAME:$CALIBRE_WEB_PORT Login initial is admin pwd: admin123"
    echo "${GREEN}INFO${NC} use tireader with http://$HOSTNAME:$CALIBRE_WEB_PORT/opds?auth=username:password"
else
   echo "INSTALL_CALIBRE_WEB is false."
fi
```


## Jellyfin
```bash
    mkdir -p $DOCKER_CONF/jellyfin/config
    mkdir -p $DOCKER_CONF/jellyfin/cache

    docker run -d  \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    -v $DOCKER_CONF/jellyfin/config:/config  \
    -v $DOCKER_CONF/jellyfin/cache:/cache  \
    -v $JELLYFIN_MEDIA:/media  \
    --net=host \
    --restart $RESTART_POLICY \
    jellyfin/jellyfin:latest
```

## Watchtower
** Attention it update images and can breal sometimes services, run daily

With watchtower you can update the running version of your containerized app simply by pushing a new image to the Docker Hub or your own image registry.
```bash
docker run --detach \
    --name watchtower \
    -e TZ=$TIMEZONE \
    -e PUID=$MY_PUID -e PGID=$MY_PGID \
    --restart $RESTART_POLICY \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower
```
## Support me

[Buy me a coffee](https://www.buymeacoffee.com/cedricwalter)
