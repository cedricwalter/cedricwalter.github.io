---
id: 8679
title: 'Blockchain definitions'
date: '2017-10-04T08:45:44+02:00'
author: 'Cédric Walter'
categories:
- blockchain
guid: 'https://waltercedric.com/new/?p=8679'

---

###   

### Blocks & Transactions

Transaction data is permanently recorded in files called blocks. They can be thought of as the individual pages of a
city recorder’s recordbook (where changes to title to real estate are recorded) or a stock transaction ledger. Blocks
are organized into a linear sequence over time (“Miner” or “Worker”) also known as the block chain). New transactions
are constantly being processed by Miners (into new blocks which are added to the end of the chain and can never be
changed or removed once accepted by the network. Each block contains, among other things, a record of some or all recent
transactions, and a reference to the block that came immediately before it. It also contains an answer to a
difficult-to-solve mathematical puzzle – the answer to which is unique to each block. New blocks cannot be submitted to
the network without the correct answer – the process of “mining” is essentially the process of competing to be the next
to find the answer that “solves” the current block. The mathematical problem in each block is extremely difficult to
solve, but once a valid solution is found, it is very easy for the rest of the network to confirm that the solution is
correct. There are multiple valid solutions for any given block – only one of the solutions needs to be found for the
block to be solved. Because there is a reward of brand new cryptocurrency units for solving each block, every block also
contains a record of which address is entitled to receive the reward. Transactions are broadcast to the network by the
sender, and all peers trying to solve blocks collect the transaction records and add them to the block they are working
to solve. Miners get incentive to include transactions in their blocks because of attached transaction fees. The
difficulty of the mathematical problem is automatically adjusted by the network, such that it targets a goal of solving
an average of (X) blocks per time interval (details are specified in the respective consensus rules of a cryptocurrency)
. The network comes to a consensus and automatically increases (or decreases) the difficulty of generating blocks.
Because each block contains a reference to the prior block, the collection of all blocks in existence can be said to
form a chain. However, it’s possible for the chain to have temporary splits – for example, if two Miners arrive at two
different valid solutions for the same block at the same time, unbeknownst to one another. The peer-to-peer network is
designed to resolve these splits within a short period of time, so that only one branch of the chain survives. The
client accepts the “longest” chain of blocks as valid. The “length” of the entire block chain refers to the chain with
the most combined difficulty, not the one with the most blocks. \[Source: <https://en.bitcoin.it/wiki/Block> \]

### Uncles

Uncles are orphaned blocks that contribute to the security of the main chain, but are not considered the canonical
“truth” for that particular chain height. They only exist in Ethereumbased cryptocurrencies. For more information on
Ethereums uncle mechanism please review the relevant section of the Ethereum wiki
under <https://github.com/ethereum/wiki/wiki/Design-Rationale#uncle-incentivization>.
\[Source: [http://ethereum.stackexchange.com/questions/34/what-is-an-uncle-ommer-block\]](http://ethereum.stackexchange.com/questions/34/what-is-an-uncle-ommer-block])

### Block chain

Block chain is a decentralized and continually updated list of transactions occurring across a certain peer-to-peer
network. Blocks of transactions are validated and linked together by specific methods of cryptography. Manipulating
individual transaction records is hardly possible in this context. A blockchain provides a wide range of functionality.
Besides establishing cryptocurrency and payment infrastructures, it can be used, for instance, to digitally sign
documents (proving identity) or create verifiable records of business processes.

### Mining

Mining is the process of adding transaction records to a cryptocurrencies public ledger of past transactions. This
ledger of past transactions is called the block chain as it is a chain of blocks. The block chain serves to confirm
transactions to the rest of the network as having taken place. Cryptocurrency nodes use the block chain to distinguish
legitimate transactions from attempts to re-spend coins that have already been spent elsewhere. Mining is intentionally
designed to be resource-intensive and difficult so that the number of blocks found each day by Miners remains steady.
Individual blocks must contain a proof of work to be considered valid. This proof of work is verified by other nodes
each time they receive a block. Ethereum uses the “ethash” proof-of-work function while Zcash uses the “equihash”
algorithm. The primary purpose of mining is to allow nodes to reach a secure, tamper-resistant consensus. Mining is also
the mechanism used to introduce new units of cryptocurrency into the system: Miners are paid any transaction fees as
well as a “subsidy” of newly created coins. These both serve the purpose of disseminating new coins in a decentralized
manner as well as motivating people to provide security for the system. Mining is so called because it resembles the
mining of other commodities: it requires exertion and it slowly makes new currency available at a rate that resembles
the rate at which commodities like gold are mined from the ground. \[Source: <https://en.bitcoin.it/wiki/Mining>\] To
ensure mining can be carried out reasonably, certain hardware demands are to be fulfilled; mining entails a high level
of power consumption. The process of mining is conducted using specialized software available for different operating
systems. Each cryptocurrency defines a unique mining reward scheme. For more information on the rewarding scheme
employed by the Ethereum cryptocurrency please consult the Ethereum Yellow Paper
under <https://github.com/ethereum/yellowpaper> ; for more information on the Zcash rewarding scheme please consult the
Zcash protocol specifications under <https://github.com/zcash/zips/blob/master/protocol/protocol.pdf> . The intensity of
the mining tasks is highly demanding; hardware components may – exceptionally – be destroyed completely. As the hardware
setup of each Worker is individually compiled, you must assess (and bear) the risk associated with such high electrical
load by yourself. As mining is an intensive task for the hardware of your computer (CPU, GPU), the process can cause
high costs for electricity.

### Mining pools

Mining pools pursue the objective to solve blocks more quickly and split the rewards equally. Participants of a mining
pool presenting a valid proof of work are awarded a “share”. A share is a hash, smaller than a specified difficulty, but
generally without value as only the hash smaller than the target value solving a block and determined by difficulty is
of importance. Mining pools are available in a range of forms and arrangements as well as for different types of
cryptocurrency. Depending on the mining pool, various payout schemes may be applied.

#### Solo mining payout scheme

Each submitted share will increase the credits of the Miner who submitted the share by the fixed share difficulty of the
pool. The Miner who accumulated the most credits will receive the reward of the next block that has been mined by the
pool and his credits will be reset to his current credits minus the credits of the runner up Miner. “Uncles” are
distributed in a similar way only that the credits of the Miner receiving the uncle reward will not be reset.

#### Pay-Per-Last-NShares (“PPLNS”) payout scheme

This reward system is round based, whereby one round has an arbitrary number (N) of minutes. When a block has been found
by the pool, the block reward is distributed according to the number and difficulty of the shares submitted during the
last hour. Payout takes place immediately after the minimum payout amount of 1 “Coin” has been reached. However, the
payout threshold may be customizable.

#### Pool fee

The pool fee to be collected by the service provider amounts to a uniform x% (0.5% up to 2%) calculated from the total
mining rewards as defined by the cryptocurrency consensus protocol .

### Share

A Share is awarded by the mining pool to the clients who present a valid proof of work of the same type as the proof of
work that is used for creating blocks, but of lesser difficulty, so that it requires less time on average to generate.
\[Source: [https://en.bitcoin.it/wiki/Pooled\_mining](https://en.bitcoin.it/wiki/Pooled_mining) \]

### Ethereum

Ethereum is an open-source project establishing a decentralised platform running applications exactly as programmed.
Downtime, censorship, fraud and third party interference are not possible according to the developers. Using a
customized blockchain able to move values, Ethereum has an enormously wide application area and provides numerous
options for developers. The platform facilitates the realization of so called smart contracts, allowing, for example,
the automatic negotiation or enforcement of contracts. Ether, as the actual cryptocurrency, is a necessary element for
operating Ethereum (payment for requested operations). It is also traded on cryptocurrency exchanges. Ethereum Classic
is a split from the existing cryptocurrency Ethereum and Etherium Classic offer the same features. Both blockchains act
individually.

### Zcash

Zcash (“ZEC”) is a decentralised and open-source cryptocurrency with increased confidentiality. Despite payments are –
as usual in connection with cryptocurrencies – published on a blockchain, the sender, recipient and amount of
transactions are only visible to those people with the corresponding “view key” as these “shielded” transactions are
specifically encrypted. In using advanced cryptographic technology, transactions can be verified without revealing
additional information.