---
id: 8761
title: 'Installing latest Splunk in 5 minutes using Docker'
date: '2019-09-02T13:26:56+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8761'
permalink: /development/installing-latest-splunk-in-5-minutes-using-docker/
tags:
    - container
    - docker
    - HowTo
---

From 0 to [Splunk](https://www.splunk.com) in 5 minutes using Docker and Compose

# Splunk** is an American multinational corporation headquartered in San Francisco, California, which produces software for searching, monitoring, and analyzing machine-generated big data, via a web-style interface.

# *Docker*** is an open source software platform to create, deploy and manage virtualized application containers on a common operating system (OS), with an ecosystem of allied tools.

# *Compose*** is a tool for *defining* and running multi-container *Docker* applications. With *Compose*, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

## Install docker and docker-compose

if not already done by running

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" sudo apt-get update sudo apt-get install -y docker-ce sudo usermod -aG docker ${USER}  sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose sudo chmod +x /usr/local/bin/docker-compose docker-compose -v
```

Create a new file docker-compose.yml

```
version: '3'  volumes:   opt-splunk-etc:   opt-splunk-var:  services:   splunkenterprise:     #build: .     hostname: splunkenterprise     image: splunk/splunk:7.3     environment:       SPLUNK_START_ARGS: --accept-license       SPLUNK_PASSWORD: "put password here or pass -e SPLUNK_PASSWORD=xxxxxx to start command"       SPLUNK_ADD: tcp 1514       SPLUNK_USER: root       SPLUNK_ENABLE_LISTEN: 9997       SPLUNK_ADD: tcp 1514     volumes:       - opt-splunk-etc:/opt/splunk/etc       - opt-splunk-var:/opt/splunk/var     ports:       - "8080:8000"       - "9997:9997"       - "8088:8088"       - "1514:1514"
```

 To start and stop [Splunk](https://www.splunk.com):

```
sudo docker-compose -f docker-compose.yml up -d sudo docker-compose -f docker-compose.yml down
```

You can now browse [Splunk](https://www.splunk.com) at http://localhost:8080