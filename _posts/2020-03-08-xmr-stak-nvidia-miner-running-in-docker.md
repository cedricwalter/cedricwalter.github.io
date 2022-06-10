---
id: 8657
title: 'XMR-Stak-Nvidia miner running in docker'
date: '2020-03-08T14:24:34+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8657'
permalink: /development/xmr-stak-nvidia-miner-running-in-docker/
header:
  teaser: /assets/images/2017/06/docker.png
tags:
    - amd
    - cedricwalter
    - check
    - code
    - collaboration
    - container
    - cpu
    - deploy
    - deployment
    - docker
    - environments
    - github
    - HowTo
    - image
    - individual
    - installed
    - machines
    - multiple
    - natively
---

XMR-Stak is a universal Stratum pool miner. This is the NVIDIA GPU mining version; there is also an [AMD GPU version](https://github.com/fireice-uk/xmr-stak-amd), and a [CPU version](https://github.com/fireice-uk/xmr-stak-cpu).

Docker® containers are often used to seamlessly deploy CPU-based applications on multiple machines. But Docker Engine does not natively support NVIDIA GPUs with containers.

I have dockerized the Nvidia GPU-mining version, so it is now running in nvidia-docker.

Containerizing GPU applications provides several benefits, among them:

- Reproducible builds
- Ease of deployment
- Isolation of individual devices
- Run across heterogeneous driver/toolkit environments
- Requires only the NVIDIA driver to be installed
- Enables “fire and forget” GPU applications
- Facilitate collaboration

Check my code at <https://github.com/cedricwalter/docker-xmr-stak-nvidia>

or pull the image from docker hub <https://hub.docker.com/r/cedricwalter/xmr-stak-nvidia/>