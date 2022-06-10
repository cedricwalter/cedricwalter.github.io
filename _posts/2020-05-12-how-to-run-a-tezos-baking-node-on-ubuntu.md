---
id: 13448
title: 'how to run a tezos baking node on Ubuntu'
date: '2020-05-12T21:13:59+02:00'
author: 'Cédric Walter'

guid: 'https://www.waltercedric.com/?p=13448'
permalink: /development/how-to-run-a-tezos-baking-node-on-ubuntu/
image: /wp-content/uploads/2020/05/tezos-baking-e1610896669778.png
tags:
    - baking
    - blockchain
    - donttrustverify
    - HowTo
    - linux
    - tezos
    - ubuntu
---

[Tezos](https://tezos.com/) is a decentralized blockchain that governs itself by establishing a true digital commonwealth. It facilitates formal verification, a technique which mathematically proves the correctness of the code governing transactions and boosts the security of the most sensitive or financially weighted smart contracts.

I will be constantly updating this document, if you have any issues please let me know. These instructions were used for building a node on the date specified above.

![](/assets/images/2020/05/tezos-baking-explained.jpg)Tezos delegation only requires your public key. Your private key is not required and as such your security is never compromised.

Download [Ubuntu 20.04 LTS](https://ubuntu.com/download/desktop) and install it on a notebook, VMWare, ….

Note: You don’t need Ubuntu desktop edition, the server edition is more than enough, but a browser will be helpful to check the synchronization state or tzstats.

### When using this setup?

For solo baking, for testing. You want to apply the mantra “Don’t trust: verify!”. You could move this setup to a datacenter but you will need to configure properly a remote signer for obvious security reasons.

### Attention 

This setup

- Has no guaranteed uptime nor is high available: it miss an UPS to protect from power outage, software crashes (node, baker, endorser, accuser) are not monitored nor have a restart policy.
- Is not immune to hardware failures: this would require another physical location and hardware redundancy,
- Is not protected against network failures as it use your local network/wifi: adding a 4G USB key could help, automatic network switching and load balancer should be also on your list,
- Has no monitoring system.

All the above could lead to stolen blocks and losing the baking reward.

> A stolen block is one where the priority 0 baker was unavailable and the block was baked by the priority 1 (or higher) baker assigned to that block. “stealing” is a bit misleading in this case; there is no nefarious action taking place. For whatever reason, the prio0 baker had an issue (network, hardware, power, etc) and was unable to bake his assigned block. The “next guy in line” took his turn and baked. Had the prio1 baker also had issues, then prio2 would have stepped up, etc, etc, up to 64.

Note that [Disruptr GmbH](https://disruptr.ch/) is in the process to offer a enterprise grade Tezos baking service on Google [Kubernetes](https://kubernetes.io/) Engine:

- High availability baking, endorsing and accusing: [Kubernetes](https://kubernetes.io/) private cluster with two nodes located in two Google Cloud zones,
- Remote signer connected to a Hardware Security Module,
- Support for two highly available remote signers, both having redundant access to internet with 4G access point,
- Metric-based monitoring and alerting with prometheus
- Based on Google Cloud, [Terraform](https://www.terraform.io/), [Kubernetes](https://kubernetes.io/), [Docker](https://www.docker.com/), [Ansible](https://www.ansible.com/)

[Disruptr GmbH](https://disruptr.ch/) will ALSO BUILD afterward a [Cardano](https://www.cardano.org/) and [Ethereum](https://ethereum.org/) 2 staking pool.

### Update the system

Always keep your Ubuntu box up to date!

```
sudo apt update && sudo apt upgrade -y
```

### Install some prerequisites

We will use xz-utils to uncompress [Tezos](https://tezos.com/) snapshots later, and in order to compile Tezos from source we need some additional dependencies.

```
sudo apt-get install screen curl xz-utils rsync git m4 build-essential patch unzip bubblewrap wget pkg-config libgmp-dev libev-dev libhidapi-dev -y
```

### Install OPAM

opam is a source-based package manager. It supports multiple simultaneous compiler installations, flexible package constraints, and a Git-friendly development workflow. [https://opam.ocaml.org](https://opam.ocaml.org/). We will install the latest stable version as of today: 2.0.7. If you use another architecture: 32 bits or ARM (raspberry Pi) don’t forget to adapt the URL

```
wget https://github.com/ocaml/opam/releases/download/2.0.7/opam-2.0.7-x86_64-linux
sudo cp opam-2.0.7-x86_64-linux /usr/local/bin/opam
sudo chmod a+x /usr/local/bin/opam
```

### Compile Tezos from source

```
git clone https://gitlab.com/tezos/tezos.git && cd tezos && git checkout mainnet
opam init --bare.  # answer twice yes (y)
make build-deps
eval $(opam env)
make # be patient this take a while
export PATH=~/tezos:$PATH
source ./src/bin_client/bash-completion.sh
export TEZOS_CLIENT_UNSAFE_DISABLE_DISCLAIMER=Y
```

### Compile Tezos developer tools

```
make build-deps
make build-dev-deps # be patient this take a while
eval $(opam env)
make
```

### Use a Tezos snapshot

[tezos-snapshots](https://github.com/Phlogi/tezos-snapshots) provide Automatic tezos blockchain daily snapshot [releases](https://github.com/Phlogi/tezos-snapshots/releases) and will save us days of synchronization. It took me 10 min using Wifi ac to download a full node snapshot archive.

We install *jq*. a lightweight and flexible command-line JSON processor to be able to parse the JSON Github API response to locate the latest set of files.

```
sudo apt install -y jq
```

We run the following CURL that will download *multiple* splitted files, each 2GB, as Github limit asset size.

```
curl -s https://api.github.com/repos/Phlogi/tezos-snapshots/releases/latest | jq -r ".assets[] | select(.name) | .browser_download_url" | grep full | xargs wget -q --show-progress
```

you will see a set of files like this, note the block number BL4zuJwRkJdeQBqmhmExP4uapNebCN8BRjMZdXBXDgadfF1Fk2b

```
mainnet.full.2020-05-12_04-15.BL4zuJwRkJdeQBqmhmExP4uapNebCN8BRjMZdXBXDgadfF1Fk2b.948666.chain.xz.00
mainnet.full.2020-05-12_04-15.BL4zuJwRkJdeQBqmhmExP4uapNebCN8BRjMZdXBXDgadfF1Fk2b.948666.chain.xz.01
```

Extract them all into a new file mainnet.importme by running:

```
cat mainnet.full.* | xz -d -v -T0 > mainnet.importme
```

Time now to interact with our Tezos node! first lets create our node identity

```
./tezos-node identity generate
return 
Stored the new identity (idsmxxxxxxxxxxxxxxxxxxxxxxxxx) into '/home/hp/.tezos-node/identity.json'.
```

Lets import the snapshot

```
./tezos-node snapshot import mainnet.importme --block BL4zuJwRkJdeQBqmhmExP4uapNebCN8BRjMZdXBXDgadfF1Fk2b

May 12 17:37:34 - snapshot: Importing data from snapshot file mainnet.importme
May 12 17:37:34 - snapshot: Retrieving and validating data. This can take a while, please bear with us
Context: 1985K elements, 152MiB read
```

open a new terminal and check the synchronization status by running

```
./tezos-client bootstrapped

Disclaimer:
  The  Tezos  network  is  a  new  blockchain technology.
  Users are  solely responsible  for any risks associated
  with usage of the Tezos network.  Users should do their
  own  research to determine  if Tezos is the appropriate
  platform for their needs and should apply judgement and
  care in their network interactions.

Current head: BLxAyj1KNCeg (timestamp: 2020-05-12T16:19:08-00:00, validation: 2020-05-12T16:19:24-00:00)
Bootstrapped.
```

Stop the node running by killing the process running on port 8732/9732

```
sudo kill -9 `sudo lsof -t -i:8732`
sudo kill -9 `sudo lsof -t -i:9732`
```

restart node, we use screen to run the node in the background, not attached to this terminal.

```
cd ~/tezos/
screen -S TezosNode
./tezos-node run --rpc-addr 127.0.0.1
<CTRL>D
```

To re-enter the screen process then you just re-attach to that screen. Useful if you want to kill the process.

```
screen -r TezosNode
```

Congratulation, you have a running full [Tezos](https://tezos.com/) node!!!!

## Connecting Nanoledger S HSM

![](/assets/images/2020/05/nanoledger-s.jpeg)<figcaption>**Ledger** Nano S: [The Ledger Nano S](https://amzn.to/2zB0yI0) is the most sold hardware wallet in the world. With its dedicated security chip, it protects you from unauthorized access to your crypto currencies, virtually and physically.</figcaption>A hardware wallet is a cryptocurrency wallet which stores the user’s private keys (critical piece of information used to authorize outgoing transactions on the blockchain network) in a secure hardware device. [Ledger Nano S](https://amzn.to/2zB0yI0) is a hardware wallet that is used for the storage of and transactions in popular cryptocurrencies like Bitcoin, Ethereum and other popular altcoins.

You can use the more expensive (has a lot more features and can run 100 apps/coins at the same time) [Ledger Nano X](https://amzn.to/2zB0J68), but it make just no sense: Your nano ledger will just run one Application: the Tezos Baking App.

On Linux you need first to create a set of udev rules to allow device access. So Follow <https://support.ledger.com/hc/en-us/articles/115005165269-Fix-connection-issues>

Install Ledger Live, initialize properly the Ledger Nano S. Install [Tezos](https://tezos.com/) Baking on your Ledger Nano S. If you are using Ledger live, go to Settings -&gt; Toggle ‘Developer Mode’ on. Then, go to Manager and install ‘Tezos Baking’ app.

Open the [Tezos](https://tezos.com/) Baking app on your ledger device.

find your nanoledger by running:

```
./tezos-client list connected ledgers

## Ledger `uncommon-havanese-sorrowful-monkey`
Found a Tezos Wallet 2.2.5 (git-description: "") application running on
Ledger Nano S at [0003:0005:00].

To use keys at BIP32 path m/44'/1729'/0'/0' (default Tezos key path), use one
of:
  tezos-client import secret key ledger_hp "ledger://uncommon-havanese-sorrowful-monkey/bip25519/0h/0h"
  tezos-client import secret key ledger_hp "ledger://uncommon-havanese-sorrowful-monkey/ed25519/0h/0h"
  tezos-client import secret key ledger_hp "ledger://uncommon-havanese-sorrowful-monkey/secp256k1/0h/0h"
  tezos-client import secret key ledger_hp "ledger://uncommon-havanese-sorrowful-monkey/P-256/0h/0h"
```

We create an ALIAS ‘ledger\_hp’ to avoid typing this long identifier, we select the first derivation path. If you use TezBox use the second ed25519 derivation path.

```
./tezos-client import secret key 'ledger_hp' "ledger://uncommon-havanese-sorrowful-monkey/bip25519/0h/0h"

Please validate (and write down) the public key hash displayed on the Ledger,
it should be equal
to `tz1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`:

# check public address and confirmed on nanoledger, you should see

Tezos address added: `tz1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
```

We now setup ledger to bake for the account, the last block number can be found at <https://tzstats.com/>

```
./tezos-client setup ledger to bake for 'ledger_hp' --main-hwm '949464'

Setting up the ledger:
* Main chain ID: 'Unspecified' -> NetXdQprcVkpaWU
* Main chain High Watermark: 0 -> 949509
* Test chain High Watermark: 0 -> 0
Authorized baking for address: tz1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Corresponding full public key: edpxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

set the high water mark level to the current block to prevent any double baking

```
./tezos-client set ledger high watermark for 'ledger_hp' to '949511'
```

Now we need the chain ID

```
./tezos-client rpc get /chains/main/chain_id

return 
"NetXdQprcVkpaWU"
```

And run now with the proper chain ID

```
./tezos-client setup ledger to bake for 'ledger_hp' --main-chain-id "NetXdQprcVkpaWU" 

return 
Setting up the ledger:
* Main chain ID: NetXdQprcVkpaWU -> NetXdQprcVkpaWU
* Main chain High Watermark: 949511 -> 949511
* Test chain High Watermark: 949511 -> 949511
Authorized baking for address: tz1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Corresponding full public key: edpxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Victory!

### Start the baker process

The Tezos network has successfully upgraded to protocol 006 following an on-chain governance process. The self-amending governance network upgraded from the Babylon protocol to [Carthage](https://twitter.com/tezos/status/1235590757416751105) at block 851,969, bringing about a gas limit increase and various other small fixes for the network.

> The baker is a daemon that once connected to an account, computes the baking rights for that account, collects transactions from the mempool and bakes a block. Note that the baker is the only program that needs direct access to the node data directory for performance reasons.
> 
> <cite><https://tezos.gitlab.io/introduction/howtorun.html#baker></cite>

The baker require local access to the data files that the node creates. The Tezos blockchain data is stored in an LMDB database, and the baker requires access to these files while it is operating, so the baker should be running on the same system as the Tezos node.

It will take at least 2 cycles before you get rights in a snapshot and 5 cycles before you start to bake (cycle is just under 3 days). in Tezos, snapshot is the schedule for baking rights.

open a new terminal and run

```
cd ~/tezos/
screen -S TezosBaker
./tezos-baker-006-PsCARTHA run with local node ~/.tezos-node 'ledger_hp'
<CTRL>D
```

### Start the endorser process

> The endorser is a daemon that once connected to an account, computes the endorsing rights for that account and, upon reception of a new block, verifies the validity of the block and emits an endorsement operation. It can endorse for a specific account or if omitted it endorses for all accounts.
> 
> <cite><https://tezos.gitlab.io/introduction/howtorun.html#endorser></cite>

The endorser don’t need to run on the same system as the Tezos node. It can run on a completely separate system, or on the same system, and only require communication with the Tezos node over RPC (to port 8732 by default).

open a new terminal and run

```
cd ~/tezos/
screen -S TezosEndorser
./tezos-endorser-006-PsCARTHA run 'ledger_hp'
<CTRL>D
```

### Start the accuser process

The accuser is a daemon that monitors all blocks received on all chains and looks for:

- bakers who signed two blocks at the same level
- endorsers who injected more than one endorsement operation for the same baking slot (more details [here](https://tezos.gitlab.io/whitedoc/proof_of_stake.html#proof-of-stake))

> Upon finding such irregularity, it will emit respectively a double-baking or double-endorsing denunciation operation, which will cause the offender to loose its security deposit. The accuser don’t need to run on the same system as the Tezos node. It can run on a completely separate system, or on the same system, and only require communication with the Tezos node over RPC (to port 8732 by default).
> 
> <cite>[https://tezos.gitlab.io/introduction/howtorun.html#](<https://tezos.gitlab.io/introduction/howtorun.html#accuser >)[accuser](https://tezos.gitlab.io/introduction/howtorun.html#accuser)[ ](<https://tezos.gitlab.io/introduction/howtorun.html#accuser >)</cite>

open a new terminal and run

```
cd ~/tezos/
screen -S TezosAccuser
./tezos-accuser-006-PsCARTHA run
<CTRL>D
```

### Automating payouts

You need to set your own fee in whatever software you use to manage payouts. There are 2 tools that I recommend you to try:

**TRD** is a software for distributing staking rewards of delegators introduced in detail in this [Medium article](https://medium.com/@huseyinabanox/tezos-reward-distributor-e6588c4d27e7). This is not a script but a full scale application which can continuously run in the background as a Linux service. It can track cycles and make payments. However it does not have to be used as a service, but it can also be used interactively. The documentation can be found [here](https://habanoz.github.io/tezos-reward-distributor/). [https://github.com/habanoz/tezos-reward-distributor ](https://github.com/habanoz/tezos-reward-distributor)

**Bäckerei** is tooling written by Cryptium Tezos Bäckerei. At a high level it manages the payments from the baker, to your delegators. Bäckerei is initialised with a TZ1 address which is used for baking. When run, it connects to a full-node and scans the entire transaction history to determine who the delegators are and how much they should get paid. Note that this full-node must be trusted. <https://github.com/cryptiumlabs/backerei>

### Useful commands

coming soon.

### Some resources

- <https://tezos.gitlab.io/> Official documentation
- <https://tezos.stackexchange.com/>
- <https://www.reddit.com/r/tezos/>
- [https://tezos-baking.slack.com](https://tezos-baking.slack.com/#/)
- <https://medium.com/cryptium>