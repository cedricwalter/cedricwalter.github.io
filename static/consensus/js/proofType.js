var proof = [];

proof['PoW'] = [
    "Proof of Work (PoW)",
    "Bitcoin, which made the blockchain technology popular, developed the so-called Proof of Work (PoW) algorithm. In principle, each participant on the Bitcoin network can participate in the block generation. In order to confirm the transaction and enter a block into the blockchain, a miner has to provide an answer, or a proof, to a specific challenge. Miners use PoW to validate transactions and mining new coins, but its main goal is to block potential cyber-attacks or suspicious activities within the network. Each time a miner confirms a transaction, he is rewarded with Bitcoin(s). The disadvantage of this algorithm is that it consumes large quantities of electricity.",
    "",
    "<a href=\"https://en.wikipedia.org/wiki/Proof-of-work_system\" target=\"_blank\">Proof-of-work_system</a>",
    "Oldest and safest | Transaction fees not mandatory",
    "Energy intensive | vulnerable to 51% attack | Reducing block rewards",
    "1. Transactions are bundled together in form of blocks.<br>2. Miners verify the transactions within the blocks as legitimate.<br>3. Miners then solve a mathematical problem known as the proof-of-work problem.<br>4. A reward is then given to the first person to solve the problem.<br>5. Verified transactions are stored in the public blockchain."
];



proof['PoS'] = [
    "Proof of stake (PoS)",
    "Proof of stake (PoS) is a type of algorithm by which a cryptocurrency blockchain network aims to achieve distributed consensus. Coin age is used in the calculation for both stake weight AND the staking reward. Staking reward is set by the coin's APR. The effect is a stable, consistent interest for all staking wallets, regardless of input size or reasonable downtime.",
    "Ada, EOS.IO, Gridcoin, Nxt, Waves",
    "<a href=\"https://en.wikipedia.org/wiki/Proof-of-stake\" target=\"_blank\">Wikipedia</a>",
    "Cost efficient: speed, energy, hardware",
    "Economic inequality, rich get richer.",
    "Coin age is used in the calculation for both stake weight AND the staking reward. Staking reward is set by the coin's APR. The effect is a stable, consistent interest for all staking wallets, regardless of input size or reasonable downtime."
];

proof['HPoW'] = [
    "Hybrid Proof of Work (HPoW)",
    "HPoW still uses PoW but modifies it so it isn’t profitable and, as a result, creates an entire cryptocurrency network that can run on energy efficient, easy to set-up, low-cost computers or cloud services. HPoW removes the profit incentive for miners because the mining reward is so low. In fact, mining farms would actually lose money if they tried to mine Lynx, meaning they will leave Lynx to the individuals who want to solve the sustainability problem. This takes control away from mining farms and pools and puts it squarely into the hands of individuals (solo miners) who want to build upon and use Lynx. HPoW supports network maintenance by incentivizing and empowering those who want to use Lynx. With every new solo miner that connects, the network becomes more secure by reducing the risks associated with a centralized and hierarchical cryptocurrency network. This security is achieved through redundancy: the more individual nodes on the network, the stronger the network becomes. If an individual node or miner fails, or if an entire region of nodes fail due to widespread  power outages or war, the network is still secure because mining rigs are plentiful.",
    "<a href=\"https://getlynx.io\">Lynx</a>",
    "<a href=\"http://cdn.getlynx.io/2018-06-18_Lynx_Whitepaper.pdf\">Whitepaper</a>",
    "mining unprofitable",
    "",
    "Taken together, the three business rules result in “Hybrid Proof of Work” (HPoW)<br>1. A single miner can’t win a block more than once every 30 minutes.<br>2. The miner’s reward address balance must be greater than or equal to a required<br>fluctuating minimum amount of Lynx to win a block.<br>3. By using random selection, the fastest miners are not always guaranteed to win the block reward."
];

proof['DPoS'] = [
    "Delegated proof-of-stake (DPoS)",
    "DPoS is a twist on Proof of Stake consensus that relies upon a group of delegates to validate blocks on behalf of all nodes in the network. Works using witnesses, who generate blocks. Witnesses are elected by stakeholders at a rate of one vote per share per witness. However, with PoA, the appointment of an authority is automatic, meaning that there can be no bias or uneven process caused by unequal stakes. Coin age is irrelevant. All coins that are mature will add the same staking weight (usually 1 in the wallet hover display). Results in stable, consistent interest only for active wallets and only with small inputs. Downtime and large inputs will significantly impact your interest with DPOS. On the plus side, no age means that moving coins is less costly because lost coin age is not detrimental.",
    "<a href=\"https://steemit.com/@zanewithspoon\" target=\"_blank\">Steemit</a>, <a href=\"https://eos.io/\" target=\"_blank\">EOS</a>,<a href=\"https://bitshares.org/\" data-href=\"https://bitshares.org/\" target=\"_blank\">BitShares</a>",
    "<a href=\"https://en.wikipedia.org/wiki/Delegated_proof-of-stake\" target=\"_blank\">Wikipedia</a>",
    "Cheap transactions | scalable | energy efficient | Coin age is irrelevant: no age means that moving coins is less costly because lost coin age is not detrimental. | All coins that are mature will add the same staking weight (usually 1 in the wallet hover display). | Results in stable, consistent interest only for active wallets and only with small inputs. | Downtime and large inputs will significantly impact your interest with DPOS.",
    "Partially centralized",
    "With DPoS blockchain consensus protocols, coin holders use their coin balances to elect delegates, called witnesses. These witnesses have the opportunity to stake blocks of new transactions and add them to the blockchain. Voting power is determined by cyberwealth. Those who have more coins or tokens will have a greater impact on the network that those with fewer."
];
proof['LPoS'] = [
    "Leased Proof-of-Stake (LPoS)",
    "Your chances to find a new block only depend on how many Token you have ( i.e. your stake).",
    "NXT, Waves",
    "<a href=\"https://medium.com/@wavesgo/explaining-waves-lpos-3a9f838cf167\" target=\"_blank\">Medium1</a> | <a href=\"https://blog.wavesplatform.com/waves-launches-balance-leasing-in-lite-client-14db9eac0377\" target=\"_blank\">Medium2</a>",
    "you don’t need a lot of computing power to forge a new block",
    ""
];
proof['PoST'] = [
    "Proof-of-Stake-Time (PoST)",
    "A time-accepted periodic proof factor in a nonlinear distributed consensus. Stake-Time as “The coin-age of a transaction or set of transactions in which the Stake-Time is the product of the total coins (C) and the fraction (f) of acceptable age(a)",
    "PostCoin, Vericoin",
    "<a href=\"https://vericoin.info\" target=\"_blank\">Whitepaper</a>",
    "maintains the efficiencies of Proof-of-Stake",
    "",
    "introducing a nonlinear proof function that defines a fraction of time active and idle, at a given block. Idle-time is defined as the fraction of age that no longer supports the distribution of consensus and instead begins to degrade it. This quantified idle-time is unique to each stake, as It decreases the probability to meet the proof and impacts the fraction of earnable matured interest via consensus. Where the fraction of accepted age (f) is equal to the squared cosine of the product of π and that transactions consensus power (p), defined as the fraction coin-age (g) of the average network wide stake-time weight (n) over 60 blocks (1 hour) [figure 1]. If the consensus-power (p) is greater than 0.45 all age is lost and the Time-active fraction is equal to the minimum stake time (m) of 8 hours"
];
proof['TPoS'] = [
    "Traditional Proof of stake / Tiered Proof Of Stake (TPOS)",
    "TPOS or Traditional Proof of stake is a form of the algorithm through which a cryptocurrency Social Network Blockchain aims to realize distributed agreement. In TPOS-derived currencies, the originator of the next block is selected through different combinations of random collection and the stake.",
    "XSN",
    "",
    "Payments through processing dealings counts mainly on coin holders instead of on miners.",
    "",
    ""
];
proof['HiPoS'] = [
    "High Interest Proof of Stake (HiPoS)",
    "Coin age is used in the calculation for stake weight, but not staking reward. Staking reward is fixed per a schedule. Results in stable, consistent interest for staking wallets as long as down time is minimal and inputs are small. Large input size is harshly punished by HiPOS.",
    "Positron(2015),BitBean (2015),EdgeCoin (EDGE),GRAVITYBITS",
    "",
    "Great for incentivizing people to hold as developers release more info on their projects | allow people with smaller holdings to benefit greatly by simply finding a few blocks at the right time.",
    "",
    "hiPOS is High Interest Proof of Stake. Essentially; a POS system that is a fixed reward rather than a percentage yield; which is awarded out based on luck/coin age/coin weight. hiPOS can be viewed as an extension of POW. Where hiPOS blocks equal the output in terms of coin count as POW blocks - in a short period of time. So a hiPOS coin would say have a total 10M coins; 5M of which are POW over a timespan of 60 Days; and the other 5M are hiPOS minted as POS over an additional 60 Days. "
];

proof['PoI'] = [
    "Proof of Identity (PoI)",
    "Proof of Identity (PoI) is a cryptographic evidence (piece of data) which tells that any user knows a private key that compares to an authorized identity and cryptographically attached to a specific transaction. Every individual from some group can create a PoF (only a block of data) and present it to anyone for instance to the processing node.",
    "NEM",
    "<a href=\"https://www.reddit.com/r/CryptoUBI/comments/2v2gi6/proof_of_identityproof_of_person_the_elephant_in/\" target=\"_blank\">Reddit</a>"
];

proof['PoA'] = [
    "Proof-of-authority (PoA)",
    "In PoA-based networks, transactions and blocks are validated by approved accounts, known as validators. alidators run software allowing them to put transactions in blocks. The process is automated and does not require validators to be constantly monitoring their computers. It, however, does require maintaining the computer (the authority node) uncompromised.",
    "<a href=\"https://poa.network/\" target=\"_blank\">POA.Network</a>,<a href=\"https://kovan.etherscan.io/\" target=\"_blank\">Ethereum Kovan testnet</a><a href=\"https://gist.github.com/cryptogoth/10a98e8078cfd69f7ca892ddbdcf26bc\" target=\"_blank\">Rinkeby</a>",
    "<a href=\"https://en.wikipedia.org/wiki/Proof-of-authority\" target=\"_blank\">Wikipedia</a>",
    "High throughput; scalable, private blockchains",
    "By identifying validators it is a centralized system",
    ""
];

proof['Proof of Ownership'] = [
    "Proof of Ownership",
    "This technique can be used by artists or businesses to certify the integrity, date of publication and ownership of their creations or contracts. A Proof of Ownership is always attached to a piece of data using cryptographic functions. This makes it impossible to alter the data after certification. If the content is modified, even by a single bit, then the whole certificate becomes invalid.",
    "",
    "",
    "",
    "",
    "Only the people with the private key associated with the signature can prove they are the owner."
];

proof['PoC'] = [
    "Proof-of-space (PoC)",
    "(PoSpace), also called proof-of-capacity (PoC)  is a means of showing that one has a legitimate interest in a service (such as sending an email) by allocating a non-trivial amount of memory or disk space to solve a challenge presented by the service provider. ", "Burstcoin, Chia, SpaceMint",
    "<a href=\"https://hackernoon.com/burst-part-3-proof-of-capacity-the-green-alternative-8e2651211671\" target=\"_blank\">Burstcoin</a>",
    "<a href=\"https://en.wikipedia.org/wiki/Proof-of-space\" target=\"_blank\">Wikipedia</a>",
    "Efficient , cheap, distributed",
    "",
    "You pay with your hard drive space. The more you have, the better your chance of mining the next block and earning the reward."
];

proof['PoSign'] = [
    "Proof-of-Signature (PoSign)",
    "PROOF-OF-SIGNATURE is a new consensus method (developed by Borzalom) that utilizes a network of registered STATIC nodes. STATIC nodes must be registered and active in order to participate in consensus. STATIC node registration status is verified using Proof-of-Signature, as all node are registered and known",
    "XBY",
    "<a href=\"https://www.reddit.com/r/CryptoCurrency/comments/7ifzer/understanding_xbys_proofofsignature_posign/\" target=\"_blank\">Reddit</a> | <a href=\"https://xtrabytes.global/build/files/whitepaper.pdf/\" target=\"_blank\">Whitepaper</a>",
    "",
    "",
    "PoSIGN consensus is achieved through the interactions between a system of real and virtual node networks in constant communication, ensuring precise, rapid, signature-verified transactions. Additional benefits achieved by the ZOLT algorithm include substantially decreased energy consumption, as the consensus algorithm does not require nodes to solve computationally difficult problems to earn transaction fees or create new tokens. The STATIC (Services Transactions and Trusted in Control) node network is the bedrock upon which the XTRABYTES platform is built. STATIC nodes provide security, ensure consensus, and play a large and developing future role in XTRABYTES governance. The virtual VITALS network of nodes utilizes a proprietary network protocol in order to create an enclosed, private network by which online STATIC nodes can directly communicate. Lastly, to ensure STATIC nodes are indeed verifying the correct block as the VITALS network maintains consensus, the PULSE network functions as the central communication transmission system, providing time stamps in order to make block verification simpler across the entire STATIC network. Transactions are verified by a network of what are called STATIC nodes—importantly, each of these nodes must sign off on a transaction before the associated block can be appended to the chain. Should a malicious node repeatedly attempt to compromise the chain, it will be blacklisted automatically."
];

proof['Proof of Time'] = [
    "Proof of Time",
    "ChronoLogic considers time as value. Rather than proof-of-work or proof-of-stake mechanisms, ChronoLogicworks on proof-of-time. In its first use-case ChronoLogic pegs time to a store of value token named DAY based on the Ethereum blockchain. This cryptocurrency enables future value to be independent of third party assets that can be harvested such as electricity & processing power in the case of traditional cryptocurrency mining. The only way additional DAY can be produced is via the passage of time.",
    "<a href=\"https://chronologic.network\" target=\"_blank\">Chronologic</a>",
    "<a href=\"https://chronologic.network/uploads/Chronologic_Whitepaper.pdf\" target=\"_blank\">Whitepaper</a>",
    "",
    "",
    "The DAY smart contract has advanced minting capabilities and a halving mechanism to limit the total supply of DAY in the future. Every contributor in any phase of the token contribution period will receive a minting address called a TimeMint with a specific minting power called ChronoPower. ChronoPower ranges from 1% to 0.5% minting additional DAY in the respective TimeMint based on the TimeMint’s current balance of DAY. ChronoPower decays linearly among contributors based on their contribution order. The first contributor receives TimeMint0001 with the highest ChronoPower of 1% & the last TimeMint receives the lowest ChronoPower of 0.5%."
];

proof['Proof of Existence'] = [
    "Proof of Existence",
    "Proof of Existence is an online service that verifies the existence of computer files as of a specific time via timestamped transactions in the bitcoin blockchain.",
    "Poex.io, HeroNode, DragonChain",
    "<a href=\"https://en.wikipedia.org/wiki/Proof_of_Existence\" target=\"_blank\">Wikipedia</a>",
    "",
    "",
    ""
];

proof['Ouroboros'] = [
    "Ouroboros",
    "A variation of Proof-of-stake(with rigorous security guarantees) used by Cardano.",
    "Cardano",
    "<a href=\"https://eprint.iacr.org/2016/889.pdf\" target=\"_blank\">Whitepaper</a>",
    "",
    "",
    ""
];
proof['POR'] = [
    "Proof of Retrievability (POR)",
    "A proof of Retrievability (POR) is a compact proof by a file system (prover) to a client (verifier) that a target file F is intact, in the sense that the client can fully recover it. As PORs incur lower communication complexity than transmission of F itself, they are an attractive building block for high-assurance remote storage systems. It can be really useful as a consensus algorithm for Cloud computing systems.",
    "Microsoft",
    "<a href=\"https://eprint.iacr.org/2008/175.pdf\" target=\"_blank\">Whitepaper</a>",
    "",
    "",
    ""
];

proof['Limited Confidence Proof-of-Activity'] = [
    "Limited Confidence Proof-of-Activity",
    "Combine Proof of Work component with a Proof of Stake. mining first begins in the traditional manner, with miners vying to be the first to solve a puzzle and claim their reward. The difference is that the blocks being mined do not contain transactions. They are simply templates with header information and the mining reward address. Once this nearly blank block is mined, the system switches to a proof of stake protocol. The header information is used to select a random group of validators to sign the block. These are coin holders (stakeholders) and the larger the stake a validator holds, the greater the chance they will be selected to sign the new block. Once all the chosen validators sign the block it becomes an actual part of the blockchain. If the block remains unsigned by some of the chosen validators after a given time, it is discarded as incomplete and the next winning block is used. Validators are once again chosen and this continues until a winning block is signed by all the chosen validators. The network fees are split between the winning miner and the validators who signed the block.,",
    "<a href=\"https://www.decred.org/\" target=\"_blank\">Decred</a>, Espers",
    "<a href=\"https://eprint.iacr.org/2014/452.pdf\" target=\"_blank\">Research Paper</a>, <a href=\"https://www.coinbureau.com/blockchain/proof-of-activity-explained-hybrid-consensus-algorithm\" target=\"_blank\">Coinbureau</a>",
    "",
    "",
    ""
];

proof['PoP'] = [
    "Proof-of-Proof (PoP)",
    "The Proof of Proof™ consensus protocol enables blockchains to inherit proof-of-work security from other blockchains, creating an ecosystem wherein security originates on established blockchains like Bitcoin and extends to other blockchains.",
    "VeriBlock,",
    "<a href=\"https://www.veriblock.com/wp-content/uploads/2017/02/PoP-White-Paper-v1.0j.pdf\" target=\"_blank\">WhitePaper</a>",
    "",
    "",
    ""
];

proof['PoPP'] = [
    "Proof of Processed Payments (PoPP)",
    "Proof-of-Processed-Payments (PoPP) is how Metal aims to distribute MTL to the masses. Think of it as a human-powered Proof-of-Work (POW), as opposed to a computational-powered PoW, such as the one Bitcoin uses. PoPP acts as a provable way of identifying users and distributing new currency into the system. At the same time, it rewards users who convert fiat currency into cryptocurrency. When a payment is settled, a portion of the gross amount of the payment is returned in MTL. The amount received is up to 5% of the volume of the transaction at trading value for MTL in either direction (sender/receiver). Consider as an example that Alice sends Bob $100 using the Metal Pay app and at the time MTL is trading at $1 per MTL. Following confirmation of a successful transaction, both Alice and Bob would receive $5 in MTL, which in this case would be 5 MTL.",
    "metalpay",
    "<a href=\"https://support.metalpay.com/hc/en-us/articles/115000369474-What-is-PoPP-\" target=\"_blank\">MetalPay</a>",
    "",
    "",
    ""
];

proof['Scrypt-adaptive-N (ASIC resistant)'] = [
    "Scrypt-adaptive-N (ASIC resistant)",
    "The idea behind the algorithm is that even if the memory requirements of the Scrypt algorithm used by Litecoin were adjusted, there would always come a time when it would not be high enough to render ASIC development impossible. Since this issue must be dealt with from the start, Scrypt-N is a perfect solution. Scrypt-N relies on the “Adaptive N-Factor” in which  N is the memory required to complete new hashing functions.",
    "<a href=\"https://vertcoin.org\" target=\"_blank\">Vertcoin</a>, ExeCoin (EXE), GPUcoin (GPUC), ParallaxCoin (PLX), SiliconValleyCoin (XSV)",
    "",
    "",
    "",
    "The idea is that N (memory requirement) will always increase over time, rendering ASIC development unfeasible. A coin with an adaptive 'n' factor usually starts at '11' , and stating it is adaptive that means that over time usually specific to a future unix time stamp it will become '12' , '13'...  As it increases the amount of memory necessary to 'mine' the coin increases....quickly."
];

proof['PoR'] = [
    "Proof of Reputation (PoR)",
    "Proof of Reputation (PoR) consensus model depends on the reputation of the participants to keep the network secure. A participant (a block signer) must have a reputation important enough that they would face significant financial and brand consequences if they were to attempt to cheat the system.",
    "",
    "<a href=\"https://hackernoon.com/consensuspedia-an-encyclopedia-of-29-consensus-algorithms-e9c4b4b7d08f\" target=\"_blank\">HackerNoon</a>",
    "",
    "",
    ""
];
proof['DPoR'] = [
    "Proof of Research (DPoR)",
    "Each participant helps performing research by computations in Gridcoins network. The network average is similar to difficulty in PoW mining. As the network average rises it becomes harder to get the same magnitude so if you want to keep getting the same reward you would have to add more compute power if we have an environment of a rising network average. If the price rose significantly more compute power would come on board, raising the network average, making it harder to get the same reward, just like difficulty in PoW.",
    "Gridcoin,",
    "<a href=\"https://wiki.gridcoin.us/Proof-of-Research\" target=\"_blank\">Gridcoin</a>",
    "",
    "",
    ""
];

proof['PoB'] = [
    "Proof of Burn (PoB)",
    "With proof of burn, instead of pouring money into expensive computer equipment, you ‘burn’ coins by sending them to an address where they are irretrievable. By committing your coins to never-never land, you earn a lifetime privilege to mine on the system based on a random selection process.",
    "<a href=\"http://slimco.in/\" data-href=\"http://slimco.in/\" target=\"_blank\">Slimcoin</a>, TGCoin (Third Generation Coin)",
    "<a href=\"https://hackernoon.com/consensuspedia-an-encyclopedia-of-29-consensus-algorithms-e9c4b4b7d08f\" target=\"_blank\">HackerNoon</a><a href=\"https://bitcointalk.org/index.php?topic=704213.0\">bitcointalk.org</a>",
    "Keeping coins is not rewarded like in PoS",
    "Burning coins doesnt guarantee that you’re selected to mine future blocks, whales are favored | security get better with huge market capital (attack costs increase) | As with PoS, the principle is not suitable for distributing the first coins.",
    "A user who gives up short term wealth proves that they are following the consensus mechanism and is rewarded with a lifetime privilege to mine the next block on the blockchain. Coins are sent to <a href=\"https://99bitcoins.com/what-is-proof-of-burn/\" target=\"_blank\">unspendable address</a>"
];

proof['PoWeight'] = [
    "Proof-of-Weight (PoWeight)",
    "Proof-of-Weight is a broad classification of consensus algorithms based around the Algorand consensus model. The general idea is that where in PoS, your percentage of tokens owned in the network represents your probability of “discovering” the next block, in a PoWeight system, some other relatively weighted value is used. Concrete example: Filecoin’s Proof-of-Spacetime is weighted on how much IPFS data you’re storing. Other systems could include weights for things like Proof-of-Reputation.",
    "<a href=\"https://people.csail.mit.edu/nickolai/papers/gilad-algorand-eprint.pdf\" target=\"_blank\">Algorand</a>,<a href=\"https://filecoin.io/\" target=\"_blank\">Filecoin</a>,<a href=\"https://chia.network/\" target=\"_blank\">Chia</a>",
    "",
    "Customizable; scalable",
    "Incentivization can be a challenge",
    ""
];



proof['PoW/PoZ'] = [
    "Proof of Zero (PoZ)",
    "PoZ is an evolution of actual PoS, with the main difference that is capable of Zero-Knowledge transactions. PoZ gives every users the chance of earning interest over their owned coins, just as standard Proof of Stake. Last but not least PoZ is far away more cheap than PoW, in term of power & processor consumption. Zcrypt is an anoymouc cryptocurrency that uses zero knowledge proofs. It uses a Proof of Work/Proof of Stake protocol with a new algorithm, LyraZ.",
    "ZCrypt",
    "",
    "",
    ""
];


proof['Raft'] = [
    "Raft",
    "Raft is a consensus algorithm designed as an alternative to Paxos. It was meant to be more understandable than Paxos by means of separation of logic, but it is also formally proven safe and offers some additional features. Raft offers a generic way to distribute a state machine across a cluster of computing systems, ensuring that each node in the cluster agrees upon the same series of state transitions. ",
    "IPFS Private Cluster, Quorum",
    "",
    "",
    ""
];
proof['PoET'] = [
    "PoET",
    "PoET is a consensus mechanism algorithm that is often used on the permissioned blockchain networks to decide the mining rights or the block winners on the network. " +
    "Permissioned blockchain networks are those which require any prospective participant to identify themselves before they are allowed to join. " +
    "Based on the principle of a fair lottery system where every single node is equally likely to be a winner, the PoET mechanism is based on spreading the chances of a winning fairly across the largest possible number of network participants.",
    "<a href=\"https://www.hyperledger.org/projects/sawtooth\" target=\"_blank\">Hyperledger Sawtooth</a>",
    "<a href=\"https://hackernoon.com/consensuspedia-an-encyclopedia-of-29-consensus-algorithms-e9c4b4b7d08f\" target=\"_blank\">HackerNoon</a>",
    "Node will rest, so more energy efficient",
    "Trust Intel, require dedicated hardware",
    "The timer is different for each node. Every participant in the network is assigned a random amount of time to wait, and the first participant to finish waiting gets to commit the next block to the blockchain. Similar to pulling straws, but this time, the shortest stem in the stack wins the lottery."
];

proof['Proof of History'] = [
    "Proof of History",
    "Instead of trusting the timestamp on the transaction, you could prove that the transaction occurred sometime before and after an event. The Proof of History is a high frequency Verifiable Delay Function. A Verifiable Delay Function requires a specific number of sequential steps to evaluate, yet produces a unique output that can be efficiently and publicly verified.",
    "Solana",
    "<a href=\"https://solana.com/solana-whitepaper.pdf\" target=\"_blank\">Whitepaper</a>",
    "",
    "",
    "<img src=\"refs/Proof of History.png\"><br>Proof of History is a sequence of computation that can provide a way to cryptographically verify passage of time between two events. It uses a cryptographically secure function written so that output cannot be predicted from the input, and must be completely executed to generate the output. The function is run in a sequence on a single core, its previous output as the current input, periodically recording the current output, and how many times its been called. The output can then be re-computed and verified by external computers in parallel by checking each sequence segment on a separate core. Data can be timestamped into this sequence by appending the data (or a hash of some data) into the state of the function. The recording of the state, index and data as it was appended into the sequences provides a timestamp that can guarantee that the data was created sometime before the next hash was generated in the sequence. This design also supports horizontal scaling as multiple generators can synchronize amongst each other by mixing their state into each others sequences."
];

proof['PoSV'] = [
    "Proof of Stake Velocity",
    "Proof of Stake Velocity (PoSV) is proposed as an alternative to Proof of Work (PoW) and Proof of Stake (PoS) to secure the peer-to-peer network and confirm transactions of Reddcoin, a cryptocurrency created specifically to facilitate social interactions in the digital age. PoSV is designed to encourage both ownership (Stake) and activity (Velocity) which directly correspond to the two main functions of Reddcoin as a real currency: store of value and medium of exchange. Reddcoin can also function as the unit of account in heterogeneous social context.",
    "Reddcoin",
    "<a href=\"https://hackernoon.com/consensuspedia-an-encyclopedia-of-29-consensus-algorithms-e9c4b4b7d08f\" target=\"_blank\">HackerNoon</a>",
    "",
    "",
    ""
];

proof['Proof of Importance'] = [
    "Proof of Importance",
    "NEM’s consensus network depends not only the number of coins but on the possibility that productive system action ought to be remunerated. The chances of staking a block are a component of various factors, including notoriety (controlled by a different purpose-designed framework), balance, and the number of transactions made to and from that position. ",
    "New Economy Movement (XEM)",
    "<a href=\"https://themerkle.com/what-is-proof-of-importance\" target=\"_blank\">HacdkerNoon</a>",
    "You can still be a priority (over miner) if you perform frequent transactions and connections that are good for the ecosystem.",
    "",
    "Productive network activity, not just the number of coins accumulated, should be rewarded. Participants who frequently send and receive transactions are more likely to find blocks."
];

proof['Proof of Participation'] = [
    "Proof of Participation (PoP)",
    "If you read or listen to podcasts on the Let's Talk Bitcoin website, you have just participated in PoP",
    "",
    "<a href=\"https://docs.google.com/document/d/1L7HmE8IupFiSrfqk9BgNa4Zg9XogqtScyQjTw0k2xCc/edit\" target=\"_blank\">Example</a>",
    "",
    "",
    ""
];

proof['Proof Of Activity'] = [
    "Proof Of Activity",
    "Proof of activity is a hybrid approach that combines both proof of work and proof of stake.",
    "Decred",
    "<a href=\"https://www.decred.org/\" target=\"_blank\">Decred</a>",
    "",
    "Criticisms are the same as for both proof of work and proof of stake.",
    "As in PoW, miners race to solve a cryptographic puzzle. Then the system switches to PoS."
];

proof['Proof of Believability'] = [
    "Proof of Believability",
    "IOST introduced Servi as both a measurement of users’ contribution to the community and a way to encourage members to contribute to the continued development of the IOSChain.",
    "IOST",
    "<a href=\"https://github.com/iost-official/Documents/blob/master/Technical_White_Paper/EN/Tech_white_paper_EN.md#consensus-mechanism\" target=\"_blank\">Whitepaper</a>",
    "",
    ""
];
proof['Proof of Care'] = [
    "Proof of Care (PoC)",
    "Rather than distributing presale tokens based on, say, how much users are contributing, companies can distribute token based on the quality of your proof-of-care for the project. On top of that, it's not even about social proof (i.e., how many Twitter followers you have), it's about the genuineness of your proof-of-care.",
    "Quantstamp,TomoCoin",
    "<a href=\"https://github.com/iost-official/Documents/blob/master/Technical_White_Paper/EN/Tech_white_paper_EN.md#consensus-mechanism\" target=\"_blank\">Whitepaper</a>",
    "Implementing individual caps is very good step and can restrict whales from entering the public sale | Attract long term investors | Help spread the word by individuals",
    "Content creators have an advantage as they will have more influence and better chances to make it through. | Other people will just copy content from other's post just to complete their Proof of Care = lot of spam.",
    "It's a great way to essentially crowd-market your blockchain project by encouraging others to get the word out about it. it's about producing interesting, fun, informative content."
];

proof['PoV'] = [
    "Proof of Value (PoV)",
    "Earn token when user publish work to audience.",
    "<a href=\"https://docs.google.com/document/d/1VogMc11WOeWB_OrcsIGD_J7F02KZ0I5zlDYTma7FJkA/edit\" target=\"_blank\">Doc</a>",
    "LTBcoin",
    "",
    ""
];

proof['PoQ'] = [
    "Proof of Quality (PoQ)",
    "E.g after <a href=\"glossary.html#PoV\">PoV</a> a month later when the performance of any work is compared against all the other work published during that week, user get an additional reward",
    "<a href=\"https://docs.google.com/document/d/1HBbuN8rmrH22kXSYiDZaRv9aR7MVrI4FB8fSrSQ37tc/edit\" target=\"_blank\">Doc</a>",
    "LTBcoin",
    "",
    ""
];

proof['PoW/DPoW'] = [
    "PoW/DPoW",
    "",
    "",
    "",
    "",
    ""
];

proof['vDPOS'] = [
    "Variable Delayed Proof Of Stake (vDPOS)",
    "",
    "CryptoCircuits",
    "",
    "",
    ""
];


proof['PoWT'] = [
    "Proof-of-work time (PoWT)",
    "Proof-of-Work-Time (PoWT) is a novel approach to forming a consensus by introducing a variable blocktime that scales with mining power, where the blockchain speeds up with power increases. This better scales the blockchain, increases transaction speed with power and allows for auto-adjusting more profitable mining. Difficulty dependent blocktime (Max ~6.2 minutes, minimum 15 seconds).",
    "Vericoin, Verium",
    "<a href=\"https://wiki.vericoin.info\">Wiki</a>",
    "",
    "",
    "Blocktime dependent rewards (~Reward halving every minute decrease in blocktime till 10x VRC supply parity, then variable ~3% disinflation). Algo: scrypt² (N of 1024² or 128MB per thread) Block 1: 564,705 VRM minted for ICO participants who purchased VRM using VRC. Minimum Transaction Fee: 0.2 VRM (high commodity transaction fee paid to miners). RPC Port: 33987, P2Port: 36988 Confirmations: 30, Maturity: 100."
];
proof['PoW/HiPoS'] = [
    "Proof-of-work (PoW) / High Interest Proof of Stake (HiPoS)",
    "Coin combining <a href=\"glossary.html#PoW\">PoW</a> and <a href=\"glossary.html#HiPoS\">HiPoS</a>",
    "EdgeCoin (EDGE)",
    ""
];

proof['PoW/PoS'] = [
    "Proof-of-work (PoW) / Proof of stake (PoS)",
    "Coin combining <a href=\"glossary.html#PoW\">PoW</a> and <a href=\"glossary.html#PoS\">PoS</a>",
    "",
    "",
    "",
    ""
];

proof['PoW/nPoS'] = [
    "Proof of Work (PoW) / Nexus Proof of State (nPoS) or Nexus Proof of Holding (nPOH)",
    "Nexus uses 3 consensus channels to maximize decentralization and provide fast, secure transactions. Each channel has an independent difficulty algorithm, amongst other checks and balances, to prevent a single channel from monopolizing block production and compromising the security of the network. Nexus channels include a Prime channel (CPU Mining), a Hashing channel (GPU Mining), and Nexus Proof of Holding (nPOH). Nexus takes the proof-of-stake system developed by Peercoin, and combines it with a Trust-based weighting system to create the Proof-of-Holding consensus mechanism. Nodes receive a Trust rating that is established by their contributions to the network, which increases over time. Nodes with greater Trust are granted an increased minting rate, which increases from 0.5% to 3% within one year, the longer you build Trust on the network.",
    "<a href=\"https://nexusearth.com\" target=\"_blank\">Nexus</a>",
    "<a href=\"https://nexusearth.com/nexus-white-paper\" target=\"_blank\">Whitepaper</a>",
    "Key signature scheme to keep an account’s public keys obscured even when making transactions (This is made possible by moving away from addresses based on public key hashes, and implementing a new system called Signature Chains). | quantum resistance (Nexus uses a combination of SHA3 hashing algorithms combined with 571 bit private keys and 512/1024 bit proof of work) | multiple consensus channels greatly reduces the risk of a 51% attack (attacker would need to control all 3 channels) |  OnChain scalability Transaction processing is distributed across multiple channels working synergistically to increase transaction throughput as resources increase. Individual channels verify transactions, consolidate verified transactions into Merkle trees, and add finished blocks onto the blockchain. The Unified Time protocol enables transaction processing, trust locks, and block locks to be consistent throughout time. The potential of Nexus 3DC is limited only by node count and represents the most energy-efficient consensus system to date.",
    "",
    "3 consensus channels: Prime (CPU), Hashing (GPU), and Nexus Proof of Holding (nPOH)\n"
];
proof['PoW/PoSC'] = [
    "Proof-of-work (PoW) / PoSC", "",
    "Coin combining <a href=\"glossary.html#PoW\">PoW</a> and ",
    "",
    "",
    "",
    ""
];

proof['dPoW'] = [
    "Delayed Proof of Work (dPoW)",
    "Delayed Proof of Work (dPoW) is a hybrid consensus method that allows one blockchain to take advantage of the security provided through the hashing power of a secondary blockchain. This is achieved through a group of notary nodes that add data from the first blockchain onto the second, which would then require both blockchains to be compromised to undermine the security of the first.",
    "",
    "",
    "Energy efficient | Increased security",
    "Limited to blockchain using PoW or PoS",
    "Delayed Proof of Work (dPoW) is a hybrid consensus method that allows one blockchain to take advantage of the security provided through the hashing power of a secondary blockchain. This is achieved through a group of notary nodes that add data from the first blockchain onto the second, which would then require both blockchains to be compromised to undermine the security of the first. The first to make use of this consensus method is Komodo, which is attached to the Bitcoin blockchain."
];

proof['dPoW/PoW'] = [
    "Delayed Proof of Work (dPoW) / Proof-of-work (PoW) /",
    "Coin combining <a href=\"glossary.html#PoW\">PoW</a> and <a href=\"glossary.html#dPoW\">dPoW</a>",
    "<a href=\"https://wiki.komodoplatform.com/wiki/Komodo\" target=\"_blank\">Komodo</a>",
    "<a href=\"https://hackernoon.com/consensuspedia-an-encyclopedia-of-29-consensus-algorithms-e9c4b4b7d08f\" target=\"_blank\">Consensuspedia</a> | <a href=\"https://wiki.komodoplatform.com/wiki/Delayed_Proof_of_Work_%28dPoW%29\" target=\"_blank\">Komodo</a>",
    "Energy efficient | Increased security",
    "Limited to blockchain using PoW or PoS",
    "Delayed Proof of Work (dPoW) is a hybrid consensus method that allows one blockchain to take advantage of the security provided through the hashing power of a secondary blockchain. This is achieved through a group of notary nodes that add data from the first blockchain onto the second, which would then require both blockchains to be compromised to undermine the security of the first. The first to make use of this consensus method is Komodo, which is attached to the Bitcoin blockchain."
];

proof['PoW/PoM/PoSII'] = [
    "Proof of Work (PoW) / PoM / PoSII",
    "Coin combining <a href=\"glossary.html#PoW\">PoW</a> and <a href=\"glossary.html#PoM\">PoM</a> and <a href=\"glossary.html#PoSII\">PoSII</a>",
    "NOBL,Magi Coin",
    "<a href=\"https://github.com/magi-project/m-Noblecoin\" target=\"_blank\">Github</a>",
    "",
    "",
    ""
];

proof['PoW/PoS/PoC'] = [
    "Proof of Work (PoW) / Proof of Stake (PoS) / Proof Of Care (PoC)",
    "Coin combining <a href=\"glossary.html#PoW\">PoW</a> and <a href=\"glossary.html#PoS\">PoS</a> and <a href=\"glossary.html#PoC\">PoC</a>",
    "TamaGucci",
    "",
    "",
    "",
    ""
];


proof['PoS/PoB'] = [
    "PoS/PoB",
    "Coin combining <a href=\"glossary.html#PoS\">PoS</a> and <a href=\"glossary.html#PoB\">PoB</a>",
    "QuBuck Coin",
    "",
    "",
    ""
];
proof['PoS/PoD'] = [
    "Proof of Stake (PoS) / Proof of Disintegration (PoD)",
    "B3 is the first coin to develop and implement Fundamental Nodes (FN). A Fundamental Node is similar to a regular masternode in terms of the service it provides to the network but the coins used to purchase a Fundamental Node are destroyed. This reduces the overall supply of the coin over time as more Fundamental Nodes are added to the network. Fundamental Nodes receive 60% of the block reward while those staking receive 40%.",
    "<a href=\"https://b3coin.io\n\">b3coin</a>",
    "<a href=\"https://b3coin.io\n\">Whitepaper</a>",
    "",
    ""
];
proof['PoS/PoP'] = [
    "Proof-of-Stake (POS) / Proof-of-Presence (PoP)",
    "1. Reward for generating blocks (Proof-of-Stake, POS). This involves running a full node, unlocked and with the user's stake applied to generate blocks. Users who run a block generating node generally need to have at least a moderate amount of token on their account<br>2. Reward for storing the blockchain (Proof-of-Presence, POP). Only the most recent blocks file is distributed amongst all p2p nodes, previous blocks files are not needed for normal p2p operations. Token incentives users to store and make available previously archived block files.",
    "HEAT",
    "<a href=\"https://heatledger.com/HEATWhitepaper.pdf\">Whitepaper</a>",
    "",
    "",
    ""
];
proof['PoS/PoW'] = [
    "Proof-of-Stake (POS) / Proof of Work (PoW)",
    "Coin combining <a href=\"glossary.html#PoS\">PoS</a> and <a href=\"glossary.html#PoW\">PoW</a>",
    "",
    "",
    "",
    ""
];





proof['DPoS/LPoS'] = [
    "DPoS/LPoS",
    "",
    "",
    "",
    "",
    ""
];
proof['PoS/PoW/PoT'] = [
    "Proof-of-Stake (POS) / Proof of Work (PoW) /PoT",
    "Coin combining <a href=\"glossary.html#PoS\">PoS</a> and <a href=\"glossary.html#PoW\">PoW</a> and ",
    "",
    "",
    "",
    ""
];
proof['PoS/LPoS'] = [
    "Leasing Proof of Stake (PoS/LPoS)",
    "LPoS is an enhanced version of Proof-of-Stake. In a regular Proof-of-Stake system, each node that holds a certain amount of cryptocurrency is eligible to add the next block to the blockchain but in the LPoS system, on the Waves Platform, users can lease their balance to full nodes. WithLPoS, the user will have the ability to Lease WAVES form the wallet to different contractors which can pay a percentage as a reward. The larger the amount that is leased to a full node, the higher the chances of that full node being selected to produce the next block. If that full node is selected to produce the next block, the leaser will then receive a percentage of the transaction fee that is collected by the full node. In a LeasedProof-of-Stake environment, users can choose between running a full node or leasing their stake to a full node with receiving rewards. This system allows anyone to participate in the Waves network maintenance. User can leas his waves through leasing on any computer or mobile device that has an internet browser since Waves provides a lite client solution that does not require Miners, that are leasing their balance to store the whole Blockchain or to have the wallet running",
    "Nxt, Waves",
    "",
    "",
    ""
];

proof['Tangle'] = [
    "Tangle (DAG)",
    " Tangle is the DAG consensus algorithm used by Iota. In order to send an Iota transaction, you need to validate two previous transactions you’re received. The two-for-one, pay-it-forward consensus strengthens the validity of transactions the more transactions are added to the Tangle. Because the consensus is established by the transactions, theoretically, if someone can generate 1/3 of the transactions they could convince the rest of the network their invalid transactions are valid. Until there’s enough transaction volume that creating 1/3rd of the volume becomes unfeasible, Iota is sort-of “double-checking” all of the network’s transactions on a centralized node called “The Coordinator”. Iota says The Coordinator works like training wheels for the system, and will be removed once the Tangle is big enough.",
    "IOTA",
    "<a href=\"https://assets.ctfassets.net/r1dr6vzfxhev/2t4uxvsIqk0EUau6g2sw0g/45eae33637ca92f85dd9f4a3a218e1ec/iota1_4_3.pdf\">iota1_4_3.pdf</a>, <a href=\"https://domschiener.gitbooks.io/iota-guide/content/chapter1/current-role-of-the-coordinator.html\" target=\"_blank\">The Coordinator</a>",
    "Low transaction fees (PoW on 2 other Tx) | Extremely small transactions | Scalability | Lightweight | Quantum-secure (Use trinary, or balanced ternary computations instead of the standard binary computations performed by classical computers)",
    "No Smart Contracts yet | Vulnerable (only 34% of the total hashing power required)",
    "<img src=\"refs/Tangle1.png\"><br>This is directed, asynchronous graph (DAG) representing each individual transaction. You’ll notice that each transaction references exactly two other transactions to the left."
];



proof['LFT'] = [
    "LFT",
    "LFT is a continuation of Tendermint to improve BFT consensus algorithms, it is currently what ICON uses as its consensus algorithm. LFT reduces communication overhead by consolidating messages from the network",
    "ICON",
    "<a href=\"http://icon.support/a-primer-to-lft-loop-fault-tolerance-consensus-algorithm/\" target=\"_blank\">ICON</a>"
];

proof['mFBA'] = [
    "Modified Federated Byzantine Agreement (mFBA)",
    "FBA organises nodes into groups call quorums whereby overall consensus is met by: Quorum consensus among a certain amount of nodes (within a specific quorum); then Consensus among a certain number of quorums to finally determine the final consensus.",
    "",
    "<a href=\"https://medium.com/@boscoin/dpos-mfba-c84bae2e21ae\" target=\"_blank\">Medium</a>",
    "Decentralized control | Low latency | Flexible trust | Asymptotic security",
    "",
    "<img src=\"refs/mFBA.png\"><br>"
];



proof['PoP/PoV/PoQ'] = [
    "PoP/PoV/PoQ",
    "",
    "LTBC",
    "",
    "",
    "",
    ""
];



proof['POBh'] = [
    "proof-of-bible-hash",
    "Proof Type is not known for these coins",
    "",
    "",
    "",
    "",
    ""
];
proof['PoB/PoS'] = [
    "PoB/ Proof-of-Stake (POS)",
    "",
    "",
    "",
    "",
    "",
    ""
];



proof['FBA'] = [
    "Federated Byzantine Agreement",
    "The general idea is that every Byzantine general, responsible for their own chain, sorts messages as they come in to establish truth. In Ripple the generals (validators) are pre-selected by the Ripple foundation. In Stellar, anyone can be a validator so you choose which validators to trust.",
    "Stellar, Ripple",
    "<a href=\"https://www.stellar.org/papers/stellar-consensus-protocol.pdf\" target=\"_blank\">Stellar Whitepaper</a>",
    "High throughput, low transaction cost, network scalability",
    "",
    ""
];
proof['PBFT'] = [
    "Practical Byzantine Fault Tolerance",
    "PBFT works in asynchronous environments like the Internet and incorporates several important optimizations that improve the response time of previous algorithms by more than an order of magnitude.",
    "Hyperledger Fabric",
    "http://pmg.csail.mit.edu/papers/osdi99.pdf",
    "High transaction throughput",
    "Centralized/permissioned",
    ""
];
proof['dBFT'] = [
    "Delegated Byzantine Fault Tolerance",
    "The dBFT is called the Delegated Byzantine Fault Tolerant, a Byzantine fault-tolerant consensus mechanism that enables large-scale participation in consensus through proxy voting. The holder of the NEO token can, by voting, pick the bookkeeper it supports. The selected group of bookkeepers, through BFT algorithm, reach a consensus and generate new blocks. Voting in the NEO network continues in real time, rather than in accordance with a fixed term.",
    "Neo",
    "<a href=\"https://github.com/neo-project/docs/blob/master/en-us/index.md#neo-technology-implementation\" target=\"_blank\">Neo implementation</a>",
    "",
    "",
    ""
];


proof['N/A'] = [
    "N/A",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['Hashgraph'] = [
    "Hashgraph - Directed Acyclic Graphs (DAGs)",
    "Hashgraph is a new consensus alternative to the blockchain. It uses a gossip protocol that works in the following manner: Every node in Hashgraph can spread signed information (called events) on newly-created transactions and transactions received from others, to its randomly chosen neighbors. These neighbors will aggregate received events with information received from other nodes into a new event, and then send it on to other randomly chosen neighbors. This process continues until all the nodes are aware of the information created or received at the beginning. Due to the rapid convergence property of the gossip protocol, every piece of new information can reach each node in the network in a fast manner. The history of the gossip protocol can be illustrated by a directed graph, i.e., each node maintains a graph representing sequences of forwarders/witnesses for each transaction. In the ideal case, all the nodes have the same view of all transactions and their witnesses. Further, by performing virtual voting, each node can determine if a transaction is valid based on whether it has over two-thirds of nodes in the network as witnesses. Note that Hashgraph runs in the Byzantine setting, where the assumption is that less than a third of nodes are Byzantine (nodes that can behave badly by forging, delaying, replaying and dropping incoming/outgoing messages)",
    "<a href=\"https://www.hederahashgraph.com/\">Hashgraph</a>",
    "",
    "",
    "private networks",
    ""
];

proof['Block-lattice'] = [
    "Block-lattice - Directed Acyclic Graphs (DAGs)",
    "The Block-lattice is a structure where every user (address) gets their own chain that only they can write to, and everyone holds a copy of all of the chains. Every transaction is broken down into both a send block on the sender’s chain and a receive block on the receiving party’s chain. ",
    "<a href=\"https://raiblocks.net/\" target=\"_blank\">Raiblocks/Nano</a>",
    "",
    "",
    "",
    "Penny-spend attack: attackers inflate the number of chains node must keep track of by sending negligible amounts to a wide array of empty wallets."
];

proof['Spectre'] = [
    "Serialization of Proof-of-work Events: Confirming Transactions via Recursive Elections",
    "Utilizes a combination of PoW and DAGs to reach scalable consensus. In SPECTRE, the blocks are mined pointing to multiple parents, not just one, so the network could potentially handle multiple blocks per second. Mining a block pointing to some parent blocks supports those blocks validity. Compared to PoW’s “longest chain wins”, SPECTRE uses something like “blocks with the most childen win.” SPECTRE hasn’t been battle-tested in the wild yet, and new attack vectors are likely to emerge, but it feels like a very clever potential way to fix Bitcoin.",
    "<a href=\"https://bitcoin.org/en\" target=\"_blank\">Proposal for Bitcoin</a>",
    "",
    "",
    "",
    ""
];




proof['BFT'] = [
    "Byzantine Fault Tolerance (BFT)",
    "The classical problem in distributed computing that is usually explained with Byzantine generals.",
    "<a href=\"https://www.hyperledger.org/\" target=\"_blank\">Hyperledger</a>,<a href=\"https://www.hyperledger.org/\" target=\"_blank\">Hyperledger</a>,<a href=\"https://t.me/dispatchlabs\" target=\"_blank\">Dispatch</a>,<a href=\"https://ripple.com/\" target=\"_blank\">Ripple</a>",
    "<a href=\"https://web.archive.org/web/20170205142845\" target=\"_blank\">Whitepaper</a>, <a href=\"http://lamport.azurewebsites.net/pubs/byz.pdf\" target=\"_blank\">Whitepaper</a>",
    "High throughput; low cost; scalable",
    "Semi-trusted",
    ""
];

proof['mPoW'] = [
    "Magi's proof-of-work (mPoW) ",
    "The magi's proof-of-work (PoW) protocol, in addition to required computational works to be done to deter denial of service attacks, is also a network-dependent rewarding model system. The mPoW rewards participants who solve complicated cryptographical questions not only to validate transactions but also to create new blocks and generate coins. The amout of coins generated are constantly monitored by the mPoW protocol and tuned on the basis of an attraction-repulsion model: 1) incremental rewarding to stimulate network activities during passive mining phase, and 2) decremental rewarding to mitigate redundant mining sources during agressive mining phase. mPoW can effectively govern the magi's network and limit it under a certain scale, enabling the general devices to be capable of mining magi.",
    "<a href=\"https://www.m-core.org\" target=\"_blank\">MAGI </a>",
    "<a href=\"https://arxiv.org/abs/1409.7948\" target=\"_blank\">Whitepaper</a>",
    "",
    "",
    ""
];

proof['mPoS'] = [
    "Magi's proof-of-stake (mPoS) ",
    "Aims to achieve distributed consensus through operations in addition to mPoW. mPoS is designed such that it rejects potential attacks through accumulating a large amount of coins or offline staking time, either of which leads to security concerns. Similar to mPoW's operation, mPoS is constructed in accordance with the concept of the attraction-repulsion model. Magi hybridizes mPoW with mPoS, and integrate both consensus approaches in order to acquire benefits from the two mechanisms and create a more robust payment system.",
    "<a href=\"https://www.m-core.org\" target=\"_blank\">MAGI </a>",
    "<a href=\"https://bitcointalk.org/index.php?topic=735170.msg9991269#msg9991269\" target=\"_blank\">Bitcointalk</a>",
    "",
    "",
    ""
];

proof['Zero-Knowledge Proof'] = [
    "Zero-Knowledge Proof",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['ePoW'] = [
    "ePoW: equitable chance and energy-saving",
    "Hdac uses ePoW as a consensus algorithm for creating new blocks and connecting them to the blockchain. ePoW refers to “PoW based on equitable chance ",
    "Hdac",
    "<a href=\"https://tokens-economy.gitbook.io/consensus/chain-based-proof-of-work/epow-equitable-chance-and-energy-saving.\" target=\"_blank\">ePoW Read more</a>",
    "",
    "",
    ""
];

proof['Consortium'] = [
    "Consortium or permisionned blockchains",
    "Corda, hyperledger",
    "",
    "",
    "",
    "",
    ""
];

proof['DPoC'] = [
    "DPoC",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['DPoI'] = [
    "Delegated Proof of Importance (DPoI)",
    "DPoI consensus algorithm integrates the concepts of EOSIO DPoS with the idea that social interactions naturally generate economic activity between individuals or organizations. The consensus is achieved with the help of delegates. Delegates are elected by the network participants based on the Importance of each voter", 
    "<a href=\"https://tokens-economy.gitbook.io/consensus/chain-based-proof-of-stake/delegated-proof-of-importance-dpoi\" target=\"_blank\">DPoI Read more</a>",
    "",
    "",
    "",
    ""
];

proof['DPoW'] = [
    "Delayed Proof of Work (dPow)",
    "Delayed Proof of Work (dPoW) is a security mechanism designed by the Komodo project. It is basically a modified version of the Proof of Work (PoW) consensus algorithm that makes use of Bitcoin blockchain’s hashpower as a way to enhance network security.",
    "",
    "",
    "",
    "",
    ""
];

proof['POS / MN'] = [
    "POS / MN",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['PoP + PoW'] = [
    "Proof of Participation (PoP) + Proof of work (PoW)",
    "",
    "",
    "",
    "",
    "",
    ""
];
proof['PoW + Hive'] = [
    "PoW + Hive",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['Proof of Authority'] = [
    "Proof of Authority (PoA)",
    "In PoA-based networks, transactions and blocks are validated by approved accounts, known as validators. alidators run software allowing them to put transactions in blocks. The process is automated and does not require validators to be constantly monitoring their computers. It, however, does require maintaining the computer (the authority node) uncompromised. With PoA individuals earn the right to become validators, so there is an incentive to retain the position that they have gained. By attaching a reputation to identity, validators are incentivized to uphold the transaction process, as they do not wish to have their identities attached to a negative reputation.",
    "<a href=\"https://tokens-economy.gitbook.io/consensus/chain-based-hybrid-models/proof-of-authority-poa\" target=\"_blank\">SPoS Read more</a>",
    "",
    "",
    "",
    ""
];

proof['Proof of Trust'] = [
    "Proof of Trust (PoT)",
    "Incorporating accountability mechanisms in online services requires effective trust management and immutable, traceable source of truth for transaction evidence. The emergence of the blockchain technology brings in high hopes for fulfilling most of those requirements. However, a major challenge is to find a proper consensus protocol that is applicable to the crowdsourcing services in particular and online services in general. Building upon the idea of using blockchain as the underlying technology to enable tracing transactions for service contracts and dispute arbitration, this paper proposes a novel consensus protocol that is suitable for the crowdsourcing as well as the general online service industry. The new consensus protocol is called “Proof-of-Trust” (PoT) consensus; it selects transaction validators based on the service participants’ trust values while leveraging RAFT leader election and Shamir's secret sharing algorithms. The PoT protocol avoids the low throughput and resource intensive pitfalls associated with Bitcoin’s “Proof-of-Work” (PoW) mining, while addressing the scalability issue associated with the traditional Paxos-based and Byzantine Fault Tolerance (BFT)-based algorithms. In addition, it addresses the unfaithful behaviors that cannot be dealt with in the traditional BFT algorithms. The paper demonstrates that our approach can provide a viable accountability solution for the online service industry.",
    "<a href=\"https://tokens-economy.gitbook.io/consensus/chain-based-others/proof-of-trust-pot\" target=\"_blank\">PoT Read more</a>",
    "",
    "",
    "",
    ""
];

proof['SPoS'] = [
    "Secure Proof of Stake (SPoS)",
    "Elrond has proposed a novel approach to consensus called “Secure Proof of Stake” which eliminates PoW computational waste, and combines eligibility through stake and rating with random validator selection, and an optimal dimension for the consensus group.",
    "<a href=\"https://tokens-economy.gitbook.io/consensus/chain-based-proof-of-stake/secure-proof-of-stake-spos\" target=\"_blank\">SPoS Read more</a>",
    "",
    "",
    "",
    ""
];
proof['BLUE.CUR'] = [
    "BLUE.CUR",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['BYND.CUR'] = [
    "BYND.CUR",
    "",
    "",
    "",
    "",
    "",
    ""
];
proof['EPAM.CUR'] = [
    "EPAM.CUR",
    "",
    "",
    "",
    "",
    "",
    ""
];proof['ROKU.CUR'] = [
    "ROKU.CUR",
    "",
    "",
    "",
    "",
    "",
    ""
];proof['TRIPAD'] = [
    "TRIPAD",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['dPoS'] = [
    "Delegated proof of stake (dPoS)",
    "",
    "Delegated proof of stake is a consensus protocol, which provides dependable verification and approval of transactions in a blockchain. Being an extension of the proof of stake protocol, DPoS allows blockchains to change network parameters, such as fee schedules, block intervals, transaction sizes, on the fly, without creating a hard fork, if the elected delegates vote for such a change.",
    "",
    "",
    "",
    ""
];
proof['dPoS/BFT'] = [
    "dPoS/BFT",
    "",
    "",
    "",
    "",
    "",
    ""
];proof['fPoW+ PBFT'] = [
    "fPoW+ PBFT",
    "",
    "",
    "",
    "",
    "",
    ""
];
proof['PoS/PoM'] = [
    "PoS/PoM",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['PoW/PoS/PoA'] = [
    "PoW/PoS/PoA",
    "",
    "",
    "",
    "",
    "",
    ""
];

proof['PoWPoS'] = [
    "PoWPoS",
    "",
    "",
    "",
    "",
    "",
    ""
];


function getProof(k) {
    return proof[k];
}
