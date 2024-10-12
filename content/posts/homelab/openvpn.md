---
title: "OpenVPN server in a Docker container"
date: 2024-02-01T10:44:17+01:00
cover: https://www.waltercedric.com/2023/docker.webp
summary: "OpenVPN server in a Docker container complete with an EasyRSA PKI CA."
categories:
  - Homelab
tags:
  - homelab
  - linux
  - travel
  - docker
  - openvpn
  - oss
  - opensource
---
Here's a Docker Compose file for OpenVPN

find a name starting with "ovpn-data-" for the volume, e.g. ovpn-data-example
choose a domain name, e.g. VPN.SERVERNAME.COM

```yaml
version: '3'
services:
  openvpn:
    image: kylemanna/openvpn
    container_name: openvpn
    ports:
      - "1194:1194/udp"
    cap_add:
      - NET_ADMIN
    volumes:
      - ovpn-data-example:/etc/openvpn
    restart: always

volumes:
  ovpn-data-example:
```

Save this content in a file named `docker-compose.yml` and then you can use the following commands:

1. Create the volume:

```bash
OVPN_DATA=ovpn-data-example # change to your value
SERVER_NAME=VPN.SERVERNAME.COM

docker volume create --name $OVPN_DATA
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_genconfig -u udp://$SERVER_NAME
docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn ovpn_initpki

```

2. Run the OpenVPN configuration:

Generate a client certificate without a passphrase for each user
```bash
CLIENTNAME=Alice

docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn easyrsa build-client-full $CLIENTNAME nopass
```

Retrieve the client configuration with embedded certificates for each user
```bash
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_getclient $CLIENTNAME > $CLIENTNAME.ovpn
```

You will have a Alice.ovpn to give to use in any openVPN client.

3. Start the OpenVPN server:

```bash
docker-compose up -d
```

This Docker Compose file defines a service named `openvpn` using the `kylemanna/openvpn` image. It maps the UDP port 1194 on the host to the container and adds the `NET_ADMIN` capability. The volume named `ovpn-data-example` is mounted to persist the OpenVPN configuration and keys. The service is set to restart always to ensure it starts automatically on system boot.

Make sure to replace `VPN.SERVERNAME.COM` with your actual VPN server's domain or IP address.

## Get a OpenVPN client

https://openvpn.net/client/

## More?
Read more at https://hub.docker.com/r/kylemanna/openvpn
