---
title: "Self-Hosting Matrix for Federated Communication"
date: 2024-10-07T10:44:17+01:00
summary: "In an era where privacy and control over personal data are increasingly at risk, self-hosting communication tools has become more attractive. Among the available options, Matrix, an open-source decentralized communication protocol, stands out for its ability to offer federated, secure, and scalable communication."
cover: https://www.waltercedric.com/homelab/quit-social-network.webp
categories:
    - Homelab
tags:
    - im
    - alternative
    - federated
    - communication
    - imessage
    - whatsapp
    - telegram
    - signal
    - messenger
    - sécurité
    - confidentialité
---

Privacy and control over personal data are increasingly at risk, self-hosting communication tools has become more attractive. Among the available options, Matrix, an open-source decentralized communication protocol, stands out for its ability to offer federated, secure, and scalable communication.

# Full Control Over Data

In today’s digital age, privacy concerns are higher than ever. Large tech companies collect vast amounts of data, often without explicit user consent. When using centralized platforms (e.g., WhatsApp, Slack), you're placing trust in third-party entities to manage sensitive conversations and data.

By self-hosting Matrix, you have complete control over your server, meaning your data remains where you want it to be. You decide what is stored, how it is stored, and who can access it. In a world of increasing data breaches, this level of control ensures better protection of personal and business information.

# Federation for Decentralization

Matrix operates on a federated model, meaning different servers can communicate with each other. This decentralization gives you the freedom to:
* Join or create your server: You can run your own server and still communicate with users on other Matrix servers seamlessly.
* Reduce dependency on centralized entities: Centralized services are vulnerable to shutdowns, policy changes, or server issues. Federation ensures resilience, allowing communication to continue even if one server goes offline.

For example, you can set up a small server for your company and enable external federated communication with clients and partners using other Matrix servers. This gives the flexibility to collaborate without compromising autonomy.

# Privacy and End-to-End Encryption

Matrix supports end-to-end encryption (E2EE), providing a high level of privacy for your conversations. With self-hosting, you have the assurance that your encrypted messages aren’t passing through a third-party server, reducing the risk of external surveillance.

While centralized platforms may claim to offer secure messaging, the question remains: Who controls the encryption keys? With Matrix, those keys stay in your hands when you self-host.

# Customizability and Open Source

Matrix is open source, meaning you can tweak and customize the platform to fit your specific needs. Self-hosting allows you to:
* Integrate with other tools: Easily connect your Matrix server with other self-hosted services like GitLab, Nextcloud, or Jitsi for a unified, privacy-focused ecosystem.
* Personalize features: You can modify the platform’s appearance, behavior, or add features not available on centralized messaging systems.
For developers and tech-savvy users, the possibilities are endless in crafting a solution tailored to their exact requirements. This flexibility is especially useful for organizations looking to integrate specific workflows or automate communication processes.

# Scalability and Cost Efficiency

One common misconception is that self-hosting is expensive or resource-intensive. Matrix, however, is designed to be scalable:

Start small, scale as needed: Whether you're a single user or managing communication for a large team, Matrix allows you to start with a small setup and grow as your user base expands.
Cost control: Self-hosting Matrix can be cost-effective since you can control hardware and hosting costs, compared to SaaS subscriptions for enterprise communication tools.
For a personal server, modest resources might be sufficient, but you can expand as your needs grow without worrying about escalating subscription fees.

# Installation of Synapse in docker
Synapse is an open-source homeserver implementation of the Matrix protocol. Matrix is a decentralized communication protocol designed to support secure, real-time communication, including instant messaging, VoIP, and more. Synapse acts as a server that hosts user accounts, stores messages, and participates in federated communications within the Matrix ecosystem.

Run only once this to generate configuration files
Adapt path /root/docker/matrix and DNS name my.matrix.host 
```yaml
services:
    synapse:
        stdin_open: true
        tty: true
        volumes:
           - /root/docker/matrix:/data
        environment:
          - SYNAPSE_SERVER_NAME=my.matrix.host
          - SYNAPSE_REPORT_STATS=yes
        image: matrixdotorg/synapse:latest
        command: generate
```
Start the Synapse server with the following YAML.
Note that we are running Synapse behind a reverse proxy (here Traefik) offers several benefits, including better control over HTTPS configurations, load balancing, and access logging.

```yaml
networks:
  traefik_proxy:
    external: true

services:
    synapse:
        image: matrixdotorg/synapse:latest
        container_name: matrix
        environment:
          - LOG_LEVEL=debug
          - PUID=1000
          - PGID=1000
          - TZ=Europe/Zurich
        ports:
          - 8008:8008 # admin API
        volumes:
          - /root/docker/matrix:/data
        restart: unless-stopped
        labels:
          - "traefik.enable=true"
          - "traefik.docker.network=traefik_proxy"
          # Http (Only redirect to HTTPS)
          - "traefik.http.routers.matrix.entrypoints=http"
          - "traefik.http.routers.matrix.rule=Host(`my.matrix.host`)"
          - "traefik.http.middlewares.matrix-https-redirect.redirectscheme.scheme=https"
          - "traefik.http.routers.matrix.middlewares=matrix-https-redirect"
          # Https
          - "traefik.http.routers.matrix-secure.entrypoints=https"
          - "traefik.http.routers.matrix-secure.rule=Host(`my.matrix.host`)"
          - "traefik.http.routers.matrix-secure.tls=true"
          - "traefik.http.routers.matrix-secure.tls.certresolver=letsencrypt"
          - "traefik.http.routers.matrix-secure.service=matrix"
          - "traefik.http.routers.matrix-secure.middlewares=secureHeaders@file"
          # Service
          - "traefik.http.services.matrix.loadbalancer.server.port=8008"
          - "traefik.http.services.matrix.loadbalancer.server.scheme=http"
        networks:
          - traefik_proxy
    synapse-admin:
        image: awesometechnologies/synapse-admin
        container_name: synapse-admin
        environment:
          - LOG_LEVEL=debug
          - PUID=1000
          - PGID=1000
          - TZ=Europe/Zurich
        ports:
          - 98080:80
        restart: unless-stopped
        # not mapped with labels to internet with traefik on purpose
```

Finally create an admin user with
```bash
docker exec -it matrix register_new_matrix_user http://localhost:8008 -c /data/homeserver.yaml -u adminUsername -p adminPassword
```

You can create as many user as wanted using the command above

## Hardening
add to homeserver.yaml

```yaml
enable_registration: false
allow_guest_access: false

## Repactha and registration config
recaptcha_public_key: "####################"
recaptcha_private_key: "####################"
enable_registration_captcha: true

## Disable federation if you want
# federation_domain_whitelist: []

rc_message:
  per_second: 0.2  # messages per second
  burst_count: 10   # allow bursts of up to 10 messages
rc_registration:
  per_second: 0.03  # registration requests per second
  burst_count: 5    # burst limit
```
        
## Configure bridges
An important idea in Matrix is Interoperability. This means that Matrix is open to exchanging data and messages with other platforms using an Open Standard. We refer to the connection to other platforms as bridging. Click on the platform you would like to bridge to to see all the existing bridges.
https://matrix.org/ecosystem/bridges/#whatsapp