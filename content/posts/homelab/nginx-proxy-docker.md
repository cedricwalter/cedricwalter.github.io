---
title: "Securing a Docker registry with Let's Encrypt and Nginx-proxy"
date: 2024-01-30T10:44:17+01:00
cover: "/homelab/Plex-Jellyfin.webp"
summary: "Securing Docker containers with Let's Encrypt and Nginx-proxy-manager involves setting up a reverse proxy with SSL termination using `nginx-proxy` and obtaining SSL/TLS certificates with the help of letsencrypt"
categories:
  - Homelab
tags:
  - docker-registry
  - docker-security
  - ssl/tls
  - nginx-proxy
  - let's-encrypt
  - https
  - docker-compose
  - reverse-proxy
  - containerization
  - devops
  - docker-networking
  - ssl-termination
  - web-security
  - server-configuration
  - docker-hosting
  - docker
  - linux
---
Nginx Proxy Manager offers a user-friendly interface for managing Nginx as a reverse proxy server. It provides a graphical user interface (GUI) that simplifies the process of creating and managing proxy hosts, SSL certificates, and routing rules.

**Key Features of Nginx Proxy Manager:**

* Intuitive Web Interface: Nginx Proxy Manager offers a clean and intuitive web interface, enabling users to manage proxy hosts and SSL certificates with ease, without delving into complex configuration files.
* SSL Certificate Management: Similar to Traefik, Nginx Proxy Manager supports SSL certificate management, allowing users to easily provision and manage SSL certificates for their websites.
* User Authentication: Nginx Proxy Manager provides options for user authentication, allowing administrators to restrict access to certain applications or services based on user credentials.
* Customizable Routing Rules: Users can define custom routing rules to control how incoming requests are directed to backend services, providing flexibility in configuring the proxy behavior.

**How does Traefik compare to Nginx proxy manager?**

Choosing between Traefik and Nginx Proxy Manager ultimately depends on your specific requirements and preferences. Here are some considerations to help you decide:

* Complexity vs. Simplicity: Traefik offers robust features for dynamic environments but may have a steeper learning curve, especially for beginners. Nginx Proxy Manager, with its user-friendly interface, provides a more straightforward setup process.
* Scalability and Performance: Traefik's automatic configuration and support for container orchestration platforms make it well-suited for scalable and dynamic environments. However, Nginx Proxy Manager can also handle significant loads efficiently, particularly when properly configured.
* Community and Support: Both Traefik and Nginx Proxy Manager have active communities and extensive documentation. Consider the availability of resources and community support when making your decision.

Securing a Docker container with Let's Encrypt and [nginx-proxy-manager](https://nginxproxymanager.com) is really easy these days.

## Prepare Cloudflare
Create as many DNS proxy as required, one for each docker container

e.g of 2 Cloudflare DNS proxy:
* plex.mydomain.com
* homarr.mydomain.com

Pointing to your router public IP, use https://www.whatsmyip.org to find your public IP

## Prepare your router
* Your home router will have a Port Forwarding section somewhere. Log in and find it, most of the time under the menu "NAT" or "Port Forwarding"
* Add port forwarding for port 80 and 443 to the server IP running the docker container

## Prepare your server running docker
Create a `docker-compose.yml` file similar to this one:
```yaml
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```
Start nginx-proxy-manager container by running
```bash
docker-compose up -d

# If using docker-compose-plugin
docker compose up -d
```

You can now accss this nginx-proxy-manager container under http://docker-server-ip:81

```
Email:    admin@example.com
Password: changeme
```

## Configure nginx-proxy-manager
Add as many proxy host as Cloudflare DNS

By following these steps, you can secure any Docker coontainer with HTTPS using Nginx-proxy and Let's Encrypt. This setup automates the process of obtaining and renewing SSL/TLS certificates, making it easier to secure your Docker services.
