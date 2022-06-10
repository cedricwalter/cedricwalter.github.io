---
id: 8764
title: 'Add Docker container logs in Splunk'
date: '2019-09-02T13:34:27+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8764'
permalink: /development/add-docker-container-logs-in-splunk/
header:
  teaser: /assets/images/2019/09/manage-container-resources.png
tags:
    - container
    - docker
    - HowTo
---

With [Splunk](https://www.splunk.com) You will be able to

# optimize container usage** by monitoring CPU, memory, disk and network performance metrics from your containers. Pay only for what you need by managing resources and measuring the impact on service reliability and container resource requirements.

# Get a complete overview of Kubernetes and OpenShift Environments** Correlate performance metrics, container logs and OpenShift/Kubernetes configuration and metadata for a better understanding of how your infrastructure is performing and how hosted applications are behaving.

 ![](/assets/images/2019/09/manage-container-resources.png)

## Add a new HTTP Event Collector

you need to enable the [Splunk](https://www.splunk.com) HTTP Event Collector. In the Splunk UI, go to ***Settings*** -> ***Data Inputs*** -> ***HTTP Event Collector*** -> ***Global Settings***.

Click **Enabled** alongside ‘**All Tokens**’, and **enable SSL**. This will enable the HTTP Event Collector on port 8088 (the default), using the [Splunk](https://www.splunk.com) default certificate.

Note down the token, e.g. f7a00add-34cd-5c00-bb16-e4f813805d81

You can do a quick test by running

```
 curl -k https://159.100.242.68:8088/services/collector \     -H 'Authorization: Splunk f6a00add-63cd-4c00-bb16-e2f815805d81' -d '{"sourcetype": "mysourcetype", "event":"Hello, World!"}' 
```

## Add docker app

Navigate to yourSplunkHost/en-US/manager/launcher/appsremote?offset=0&amp;count=20&amp;order=relevance&amp;query=docker

![](/assets/images/2019/09/splunk-add-docker-app.png)

Click Install and log using **your Splunk.com credentials** [(register now](https://www.splunk.com) if needed)

## Configure Docker to log to Splunk

You can configure Docker logging to use the [Splunk](https://www.splunk.com) driver by default or on a per-container basis.

To use the [Splunk](https://www.splunk.com) driver as the default logging driver, set the keys <span class="code">log-driver and <span class="code">log-opts to appropriate values in the <span class="code">daemon.json configuration file and restart Docker. For example:

```
{   "log-driver": "splunk",   "log-opts": {     "splunk-token": "f6a00add-63cd-4c00-bb16-e2f815805d81",     "splunk-url": "https://159.100.242.68:8088"   } } 
```

The daemon.json file is located in <span class="code">/etc/docker/daemon.json

Restart the docker daemon and you’re done.