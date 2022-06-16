---

title: 'Setting up an Ethereum 2.0 Validator Node on Prysm Topaz Testnet'
date: '2020-05-23T17:34:11+02:00'
author: 'Cédric Walter'
categories:
- blockchain



    
header:
  teaser: /assets/images/2017/02/Ethereum.png
tags:
    - blockchain
    - ethereum
    - PoS
    - staking
---

## Introduction

Ethereum 2.0 is an upgrade to the Ethereum Network- and is also referred to as “Serenity”. Ethereum 2.0 validator nodes are going to be the future of how Ethereum will run and how transactions are going to be validated, which is to rely on Proof of Stake (PoS) or Staking.

Ethereum 2.0 is a protocol that is currently implemented by multiple companies and using multiple codebase (like it was done [for ETH 1 clients](https://eth.wiki/eth1/clients)):

- [Prysm client ](https://github.com/prysmaticlabs/prysm)developed by [Prysmatic Labs](https://prylabs.net/) in Go,
- [Lighthouse client](https://github.com/sigp/lighthouse) developed by [Sigma Prime](https://lighthouse.sigmaprime.io/) in RUST
- Firefly will be the official Geth for ETH2
- and a LOT more, an up to date list is available [here](https://eth.wiki/eth2/clients).

Note that Schlesi testnet is the first multi-client Ethereum 2.0 testnet that simulates the main-net environment.

### What is the expected Return on Investment (ROI)?

You can check here, but expected is [annual 14.2% Return on Investment (ROI)](https://ethereumprice.org/eth-2-calculator/)

## What software do I need to run to stake?

There are two main types of software to be aware of when considering staking on Ethereum:

# Beacon nodes: This is the hub for your validators.

- Stores canonical state handles peers and incoming sync, propagate blocks and attestations.
- It has a gRPC server that clients can connect to and provides a public API.

# Validator clients: Talks to your beacon node and signs blocks. You can have multiple of these at 32 ETH each.

- Stores important secrets such as RANDAO reveal proof of custody for shared data and BLS private key.
- Can swap underlying beacon nodes efficiently.
- Tracks shared state execution data and data blobs that the validator has signed.

This means that there are three possible combinations of software to run:

1. Beacon node only
2. Beacon node + validator client (you need 32 ETH)
3. Beacon node + multiple validator clients (you need a multiple of 32 ETH)

## Installation

There is 2 ways to try Ethereum 2.0 Phase 0. Use either

1. The online tutorial of Prysmatic Labs <https://prylabs.net/participate> (Recommended)
2. OR setup everything from scratch using Docker and linux (See below)

## Requirements

You’ll need a virtual machine or better VPS server (Physical or using any cloud provider: AWS, Azure). Just make sure you have a decent CPU and 100GB + of SSD

I always recommend Ubuntu, ideally a Long Term Support, aka 20.04 as of today

We will use docker, so basic knowledge of command line is also required.

## Start the Beacon node

The [beacon node](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-client-architecture/) is the primary link in the beacon chain that forms the backbone of the Eth 2.0 blockchain.

```
docker run -it -v $HOME/prysm/beacon:/data \
-p 4000:4000 \
-p 13000:13000 \
gcr.io/prysmaticlabs/prysm/beacon-chain:latest  \
–datadir=/data
```

## Create your validator keypair identity

This will return your newly public key.

```
docker run -it -v $HOME/prysm/validator:/data \ 
gcr.io/prysmaticlabs/prysm/validator:latest \ 
accounts create –keystore-path=/data
```

## Get some Goerli ETH

You need at least 32 ETH, get a bit more like 32.5 ETH to pay also the Transaction fees. These ETH have no real value!

You can use https://faucet.goerli.mudit.blog/ or follow the instructions found on [prylabs.network](https://prylabs.network/) to use the testnet faucet.

Once your beacon node is up, the chain will be waiting for you to deposit 32 Goerli ETH into a [validator deposit contract](https://docs.prylabs.network/docs/how-prysm-works/validator-deposit-contract) in order to activate your validator. You can withdraw ETH, but this take at least 18 hours time and adjusts dynamically depending on how many people are withdrawing at that time.

## Start the Validator client

```
docker run -it -v $HOME/prysm/validator:/data –network=”host” \ 
gcr.io/prysmaticlabs/prysm/validator:latest \ 
–beacon-rpc-provider=127.0.0.1:4000 \ 
–keymanager=keystore \ 
–keymanageropts='{“path”:”/data”,”passphrase”:”enterPreviousPassPassphrase”}’
```

Wait from 5 hours to 2 days till you see the Validator activated pubKey=0x…… message in the logs.

You can see the progress of your transaction on [https://goerli.etherscan.io](https://goerli.etherscan.io/tx/0xb945b324c43140cca72f93d17e74c7f70dfdb149abda1504e794ba029f611a7e)  
You can also follow the current beacon chain in Bitfly’s block explorer: [https://beaconcha.in](https://beaconcha.in/) or on [https://beacon.etherscan.io](https://beacon.etherscan.io/). Additionally, it is recommended to register your node on [eth2stats](https://eth2stats.io/).

Once you get assigned, you’ll be able to see how your validator performs its responsibility of creating or voting on blocks as well as earning any rewards throughout its lifecycle. Your beacon chain client must be synced for the validator assignment to be seen by your validator client. If you leave your validator offline for a while, it will begin to accrue penalties (0.01 ETH and more ) from the network for being idle.

You can check also <https://docs.prylabs.network/docs/install/lin/docker/> or <https://docs.prylabs.network/docs/prysm-usage/activating-a-validator/> for more details