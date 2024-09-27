---
title: "Monitor Docker Container with Grafana & Prometheus"
date: 2024-02-29T10:32:17+01:00
cover: "/homelab/ddclient-cloudflare.webp"
summary: ""
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
  - network
  - dynamic-ip
  - linux
mermaid: true
draft: true
---

https://fernandocejas.com/blog/engineering/2023-01-06-over-engineered-home-lab-docker-kubernetes/


## Configure Docker

```bash
vi /etc/dockerdaemon.json
#these is daemon.json file content
{
  "metrics-addr" : "0.0.0.0:9393",
  "experimental" : true
}
systemctl restart docker
```

## Install Prometheus

```yaml
# my global config
global:
  scrape_interval: 15s
  evaluation_interval: 15s

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape: Prometheus itself.
scrape_configs:
  - job_name: "prometheus"
    static_configs:
      - targets: ["192.168.1.216:22090"]

  - job_name: "Docker Job"
    static_configs:
      - targets: ["192.168.1.216:9393"]
```



```yaml
services:
  prometheus:
    image: "prom/prometheus:latest"
    container_name: prometheus
    restart: unless-stopped
    ports:
      - 22090:9090
    environment:
      - PUID=0 # root user
      - PGID=0 # root user group
      - TZ=Europe/Zurich # change to your location
    volumes:
      - /docker/root/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml  # change path to your volume if needed
```

in Prometheus and check whether target resource is up or not for that go to “Prometheus > Status > targets”

## Install grafana



https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/

. You can login grafana with default “User= admin”, “Password=admin”

 grafana login with credentials
then click on “Administration => Data Source => Prometheus => and add Prometheus url”
Then click on “Data Source”
Click on Add Data Source and select “Prometheus”
 In setting paste Prometheus URL and keep other setting as by default and click “Save and Test”
 Now go to dashboard and in right hand corner click on “+” icon =>New Dashboard => Add visualisation

 In the Metrics browser section add below query. Choose one query to fetch the number of containers in a specific state.

 engine_daemon_container_states_containers{state="stopped"}
 engine_daemon_container_states_containers{state="paused"}
 engine_daemon_container_states_containers{state="running"}

 then click on apply and save and again click on “+” icon
29. If you want to see data in Stat then click on “Time Series” then you will see multiple visualization, I am selecting “Stat” option
