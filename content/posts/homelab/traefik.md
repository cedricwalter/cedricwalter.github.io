---
title: "Reverse proxy Docker applications and applications with Let's Encrypt and Traefik"
date: 2024-02-28T10:44:17+01:00
cover: "/homelab/traefik.webp"
summary: "Securing Docker containers with Let's Encrypt and Traefik involves setting up a reverse proxy with SSL termination using `Traefik` and obtaining SSL/TLS certificates with the help of letsencrypt"
categories:
  - Homelab
tags:
  - docker-registry
  - docker-security
  - ssl/tls
  - traefik
  - let's-encrypt
  - https
  - docker-compose
  - reverse-proxy
  - calibre
  - calibre-web
  - homelab
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
Traefik, a modern reverse proxy and load balancer, has gained significant traction in recent years owing to its simplicity and versatility. Built with cloud-native environments in mind, Traefik excels in dynamically managing routing, handling SSL certificates, and integrating seamlessly with container orchestrators like Kubernetes and Docker.

**Key Features of Traefik:**

* **Automatic Configuration:** Traefik stands out for its automatic configuration capabilities, dynamically discovering services as they are added or removed from the infrastructure.
* **Let's Encrypt Integration:** With built-in support for Let's Encrypt, Traefik simplifies the process of securing web applications by automatically provisioning and renewing SSL certificates.
* **Load Balancing:** Traefik efficiently distributes incoming traffic across multiple instances of an application, ensuring optimal performance and reliability.
* **Service Discovery:** Traefik supports various service discovery mechanisms, including Docker, Kubernetes, and Consul, making it well-suited for dynamic environments.

**How does Traefik compare to Nginx proxy manager?**

Choosing between Traefik and Nginx Proxy Manager ultimately depends on your specific requirements and preferences. Here are some considerations to help you decide:

* **Complexity vs. Simplicity:** Traefik offers robust features for dynamic environments but may have a steeper learning curve, especially for beginners. Nginx Proxy Manager, with its user-friendly interface, provides a more straightforward setup process.
* **Scalability and Performance:** Traefik's automatic configuration and support for container orchestration platforms make it well-suited for scalable and dynamic environments. However, Nginx Proxy Manager can also handle significant loads efficiently, particularly when properly configured.
* **Community and Support:** Both Traefik and Nginx Proxy Manager have active communities and extensive documentation.

**Ready to integrate with Authentik**

One of the popular authentication providers that Traefik integrates with is Authentik. Authentik is an open-source authentication and authorization service that provides Single Sign-On (SSO) capabilities, making it easier to manage user access across multiple applications.

Here's how Traefik can integrate with Authentik:

* **Traefik Forward Authentication Middleware:** Traefik provides a Forward Authentication middleware that can be configured to delegate authentication to an external service before allowing access to protected resources. This middleware acts as a gatekeeper, intercepting incoming requests and verifying the user's identity before forwarding the request to the backend application.
* **Authentik Configuration:** To integrate Traefik with Authentik, you need to configure Traefik to use Authentik as the authentication provider. This typically involves specifying the URL of the Authentik server and configuring any required authentication parameters, such as client ID and client secret.
* **Authentication Flow:** When a user attempts to access a protected resource served by Traefik, Traefik intercepts the request and redirects the user to the Authentik login page. The user then authenticates with Authentik using their credentials. Once authenticated, Authentik generates a token or session identifier, which is returned to Traefik.
* **Authorization Check:** Traefik validates the token or session identifier received from Authentik to ensure that the user is authenticated. If the validation is successful, Traefik allows the request to proceed and forwards it to the backend application. If the validation fails, Traefik denies access and returns an authentication error.
* **Session Management:** Traefik can also manage user sessions by storing session information and associating it with subsequent requests from the same user. This allows Traefik to maintain user authentication state and avoid prompting the user to log in repeatedly during a session.

By integrating Traefik with Authentik, you can centralize authentication and authorization for your web applications and services, streamlining the user authentication process and enhancing security. Additionally, Traefik's flexible middleware architecture and support for various authentication providers make it easy to integrate with Authentik and other identity management solutions, allowing you to customize authentication workflows to suit your specific requirements.

# Prepare Cloudflare
Securing a Docker container with Let's Encrypt and [Traefik](https://traefik.io/traefik/) is really easy these days.

Create as many DNS proxy as required, one for each docker container you wan to expose or better only one entry with *

e.g of 2 Cloudflare DNS proxy:
* plex.mydomain.com
* homarr.mydomain.com
or a generic subdomains using '*'

Pointing to your router public IP, use https://www.whatsmyip.org to find your public IP

# Prepare your router
* Your home router will have a Port Forwarding section somewhere. Log in and find it, most of the time under the menu "NAT" or "Port Forwarding"
* Add port forwarding for port 80 and 443 to the server IP running the Traefik docker container

# Insttall Traefik
![traefik-architecture](/homelab/traefik-architecture.webp)

Create a `docker-compose.yml` file similar to this one:
```yaml
version: '3'
services:
  traefik:
    image: "traefik:v3.1"
    container_name: traefik
    restart: unless-stopped
    environment:
      - PUID=0
      - PGID=0
      - TZ=Europe/Zurich
    networks:
      - traefik_proxy
    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"
    command:
      - "--api"
      - "--providers.docker=true"
      - "--providers.docker.exposedByDefault=false"
      - "--entrypoints.web.address=:80"
    volumes:
      - /root/docker/traefik/letsencrypt:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /root/docker/traefik/traefik.yml:/traefik.yml:ro
      - /root/docker/traefik/dynamic_conf.yml:/dynamic_conf.yml
      #- /root/docker/traefik/rules:/rules:ro
    labels:
          - traefik.enable=true
          - traefik.http.services.traefik.loadbalancer.server.port=8080
          - traefik.http.middlewares.waf.plugin.traefik-modsecurity-plugin.modSecurityUrl=http://waf:80
          - traefik.http.middlewares.waf.plugin.traefik-modsecurity-plugin.maxBodySize=10485760
  waf:
    image: owasp/modsecurity-crs:apache
    environment:
      - PARANOIA=1
      - ANOMALY_INBOUND=10
      - ANOMALY_OUTBOUND=5
      - BACKEND=http://dummy
    networks:
      - traefik_proxy
          
networks:
  traefik_proxy:
    external: true
```

## Configure Traefik static file
Traefik use a static configuration file (any changes in it and you need to restart the Traefik container)
Create a `/root/docker/traefik/traefik.yml` file similar to this one:
```yaml
# Api and, additionally, a monitoring dashboard (checkout docs for more,
# disable in production if not required!).
global:
  checkNewVersion: true
  sendAnonymousUsage: true

api:
  dashboard: true
  insecure: true

log:
  level: DEBUG

# Entrypoints (ports) Traefik should listen to; here we define two: "http"
# for unencrypted traffic, and "https" for SSL-encrypted traffic (port 443).
entryPoints:
  http:
    address: ":80"
  https:
    address: ":443"

# We define two providers
providers:
  # First, a docker provider, which allows us to enable routing to any Docker
  # container by setting some specific labels on the container. Example will
  # follow below ;).
  docker:
    endpoint: "unix:///var/run/docker.sock"
    # This ensures, that we manually have to request containers to be "added"
    # to Traefik.
    exposedByDefault: false
    network = "traefik_proxy"
  # Second, a dynamic configuration file - we'll come back to that file below.
  file:
    filename: "/dynamic_conf.yml" # this is mapped in traefik volume

# For automatic Let's Encrypt certificate generation, we define a "letsencrypt"
# resolver. It may store the certificates in the defined file/storage and should
# use the http endpoint (defined above) for the http challenge (i.e., for
# generating/ requesting the certificates).
certificatesResolvers:
  letsencrypt:
    acme:
      email: youremail@gmail.com # use a valid email for letsencrypt!
      storage: "/letsencrypt/acme.json"
      httpChallenge:
        entryPoint: http

experimental:
  plugins:
    fail2ban:
      moduleName: "github.com/tomMoulard/fail2ban"
      version: "v0.7.1"
```

## Configure Traefik dynamic file
Traefik use a dynamic configuration file (any changes in it and you DON'T need to restart the Traefik container)
Create a `/root/docker/traefik/dynamic_conf.yml` file similar to this one:
```yaml
tls:
  options:
    default:
      minVersion: VersionTLS12
      cipherSuites:
        - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305
        - TLS_AES_128_GCM_SHA256
        - TLS_AES_256_GCM_SHA384
        - TLS_CHACHA20_POLY1305_SHA256
      curvePreferences:
        - CurveP521
        - CurveP384
      sniStrict: true

http:
  middlewares:
    secureHeaders:
      headers:
        forceSTSHeader: true
        browserXssFilter: true
        contentTypeNosniff: true
        frameDeny: true
        sslRedirect: true
        # HSTS Configuration
        stsIncludeSubdomains: true
        stsPreload: true
        stsSeconds: 31536000
        customFrameOptionsValue: "SAMEORIGIN"
    redirect-to-https:
      redirectScheme:
        scheme: "https"
        permanent: true
    my-fail2ban:
      plugin:
        fail2ban:
          allowlist:
              ip: ::1,127.0.0.1
          denylist:
              ip: 192.168.0.0/24
          rules:
              bantime: 3h
              enabled: "true"
              findtime: 10m
              maxretry: "4"
              statuscode: 400,401,403-499
    my-geoblock:
      plugin:
          geoblock:
              allowLocalRequests: "false"
              allowUnknownCountries: "false"
              api: https://get.geojs.io/v1/ip/country/{ip}
              apiTimeoutMs: "150"
              cacheSize: "15"
              countries: # only allow these countries, adapt
                  - CH
              forceMonthlyUpdate: "true"
              logAllowedRequests: "false"
              logApiRequests: "true"
              logLocalRequests: "false"
              silentStartUp: "false"
              unknownCountryApiResponse: nil
```

## Access Dashboard
Start Traefik container now by running
```bash
docker-compose up -d

# If using docker-compose-plugin
docker compose up -d
```

You can now accss this Traefik container under http://docker-server-ip:8080

# Reverse proxy calibre-web with Traefik
We just need to annotate with labels all container that we want to reverse proxy.

Create a `docker-compose.yml` file similar to this one:

* Change `subdomain.domain.com` to your cloudflare DNS
* Note that service name `calibre-web` and container name `calibre-web` must match in labels

```yaml
version: '3.8'
services:
  calibre-web:
    image: lscr.io/linuxserver/calibre-web:latest
    container_name: calibre-web
    logging:
      driver: "journald"
      options:
        tag: "calibre-web"
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Zurich
    volumes:
      - /root/docker/calibreweb:/config
      - /media/calibreweb:/books
    ports:
      - 8090:8083
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik_proxy"
      # Http (Only redirect to HTTPS)
      - "traefik.http.routers.calibre-web.entrypoints=http"
      - "traefik.http.routers.calibre-web.rule=Host(`subdomain.domain.com`)"
      - "traefik.http.middlewares.calibre-web-https-redirect.redirectscheme.scheme=https"
      - "traefik.http.routers.calibre-web.middlewares=calibre-web-https-redirect"
      # Https
      - "traefik.http.routers.calibre-web-secure.entrypoints=https"
      - "traefik.http.routers.calibre-web-secure.rule=Host(`subdomain.domain.com`)"
      - "traefik.http.routers.calibre-web-secure.tls=true"
      - "traefik.http.routers.calibre-web-secure.tls.certresolver=letsencrypt"
      - "traefik.http.routers.calibre-web-secure.service=calibre-web"
      - "traefik.http.routers.calibre-web-secure.middlewares=secureHeaders@file"
      # Service
      - "traefik.http.services.calibre-web.loadbalancer.server.port=8083" # optional, Traefik would locate the internal port
      - "traefik.http.services.calibre-web.loadbalancer.server.scheme=http"
    networks:
      - traefik_proxy
networks:
  traefik_proxy:
    external: true
```

# Reverse proxy native jellyfin with Traefik
* If you start Jellyfin using Docker, just add labels like we did above for Calibre-Web
* If you start Jellyfin natively on linux, installed with RPM, Bash, or Snap.

Add at the end of  `/root/docker/traefik/dynamic_conf.yml` file this snippet:
* replace ipadress:8096 with Jellyfin server ip and port
* replace subdomain.domain.com with DNS name of Cloudflare

```yaml
routers:
    jellyfin:
      rule: "Host(`subdomain.domain.com`)"
      service: "jellyfin"
      entryPoints:
        - "http"
        - "https"
      tls:
        certResolver: "letsencrypt"
      middlewares:
        - "redirect-to-https@file"

  middlewares:
    redirect-to-https:
      redirectScheme:
        scheme: "https"
        permanent: true

  services:
    jellyfin:
      loadBalancer:
        servers:
          - url: "http://ipadress:8096"
```

You do not need to restart Traefik (we changed dynamic config), first access to Jellyfin may failed, as letsencrypt take a few second to be created on demand.

# Conclusions

You can now add as many proxy host as you want, and annotate each docker container to use that DNS host name.

By following these steps, you can secure any Docker coontainer with HTTPS using Treafik and Let's Encrypt. This setup automates the process of obtaining and renewing SSL/TLS certificates, making it easier to secure your Docker services.
