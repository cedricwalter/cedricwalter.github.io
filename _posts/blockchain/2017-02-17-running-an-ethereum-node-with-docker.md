---
id: 8608
title: 'Running an Ethereum Node with Docker'
date: '2017-02-17T14:28:04+01:00'
author: 'Cédric Walter'
categories:
- blockchain
guid: 'https://waltercedric.com/new/?p=8608'

header:
  teaser: /assets/images/2017/02/Ethereum.png
tags:
    - bash
    - blockchain
    - client
    - container
    - continuous
    - cpu
    - create
    - development
    - docker
    - enhanced
    - environments
    - ethereum
    - example
    - full
    - github
    - give
    - host
    - HowTo
    - image
    - linux
---

Docker is a powerful tool for managing containers and run-time environments and, besides its many advantages, Docker can also be handy to keep your server tidy and secure.

\#Docker allows to run operating systems, applications and tools in so called Containers. A \#Container is an isolated environments that represents a autonomous host on its own – a bit in the same way a Virtual Machine does. Yet, Docker Containers are much lighter. They do not start an entire full-blown operating system for each Container instance. Instead, Docker uses #Linux kernel isolation mechanisms to run applications on the top of the host’s operating systems, yet keeping them isolated.

The Ethereum Go (language) team builds a [Docker image](https://github.com/ethereum/go-ethereum/wiki/Running-in-Docker) of a “*[geth](https://github.com/ethereum/go-ethereum/wiki/geth)*” node as part of their continuous build chain. Their [Howto](https://github.com/ethereum/go-ethereum/wiki/Running-in-Docker) is more then enough to run your full node, mine below is just an enhanced example with volume, name, .. nothing fancy.

# i want to persist the blockchain in a volume

```bash
docker volume create --name=ethereum-data
```

\# and limit cpu usage to 20% of all 8 cores –cpus=”.2″, give a name to container, more [command line options](https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options)

```bash
docker run --cpus=".2" -d -p 8545:8545 -p 30303:30303 \
 --name=ethereum-node \
 -v ethereum-data:/root/.ethereum ethereum/client-go \
 --rpc --rpcaddr "127.0.0.1"
```

to stop and recreate the container

```bash
docker stop ethereum-node && docker rm ethereum-node
```

to go inside the container

```bash
docker exec -it ethereum-node bash
```

to test the RPC api

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' localhost:8545
```

or 

```bash
curl -H "Content-Type: application/json" -X POST \
 --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest", true],"id":1}' http://127.0.0.1:8545
```

see[https://ethereum.gitbooks.io/frontier-guide/content/rpc.html](https://ethereum.gitbooks.io/frontier-guide/content/rpc.html)

You may want to register your node at The [Ethereum (centralised) network status monitor](https://ethstats.net/) , in that case just follow <https://github.com/ethereum/wiki/wiki/Network-Status>

My Ethereum node is now running at [http://ethereum.galaxiis.com](http://ethereum.galaxiis.com/)

A better status page is in development using [PHP with RPC](https://github.com/btelle/ethereum-php)