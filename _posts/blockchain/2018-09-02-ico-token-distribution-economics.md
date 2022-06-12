---
id: 8743
title: 'ICO TOKEN DISTRIBUTION &#038; ECONOMICS'
date: '2018-09-02T18:10:46+02:00'
author: 'Cédric Walter'
categories:
- blockchain
guid: 'https://waltercedric.com/new/?p=8743'

header:
  teaser: /assets/images/2019/03/blockchain.jpg
tags:
    - analysis
    - blockchain
    - community
    - cryptocurrency
    - foundation
    - report
    - research
    - team
    - token
---

Usually, a percentage of the tokens is sold to ICO participants and a percentage kept for the company’s needs. The token distribution and allocation of the token is usually a chapter in the future company whitepaper. A pie chart displays how and to whom tokens will be allocated. But how much tokens are allocated (amount) and what are they used for? how much token should I spend for advisor? is 15% of all tokens too much for founder? How many company use reward pool and what is the best size?

I’m trying to answer all these questions at <https://ico.tokens-economy.com/distribution/> You can discover how much token are given for pre-sale, main sales, or reserved for particular needs across a bit less than 900 ICO!

[After analyzing 896 ICO](https://ico.tokens-economy.com/distribution/), up to 24 main categories used to describe token distribution have been identified:

### advisors, airdrop, bonus, bounty, burned, community, company, crowdsale, ecommerce, foundation, founder, investors, legal, lockup, marketing, operations, pool, premined, presale, referrals, research, reserves, team

# The tedious work** was to get the data and map categories (people used a huge amount of synonyms: up to 1936 unique words/sentences, including typos) down to 24 categories!

Some examples:

- crowdsale: ico, sales, crowd sale, crowd-sale, free sale, ico round, main-ico, coinsale, coin sale, ico token, public, …
- bounty: ico bounty, bug bounty, gift, bounties
- frozen: frozen, lock-up, vesting, lockup
- and the list goes on….

After that, [graphing all these values](https://ico.tokens-economy.com/distribution/) was easy thanks to #google charts API

I will update[ the data regularly](https://ico.tokens-economy.com/distribution/), so keep visiting this page in the future.

### How it was done

- Data are stored in Google Sheet, 2190 ICO, read from Whitepapers using PDFBox.
- A category parser read and match token distribution categories (> 1936 unique words/sentences) and their respective values
- A category reducer reduce the number of categories to a more manageable number by mapping similar category together. E.g. Early Bird investors -> preico
- A category analyzer can query these data using multiple category selector strategies.

### What’s next?

I will improve the category reducer over time to catch more and more synonyms and increase the coverage of ICO taken into account by the category analyzer.

I plan to export the rules used in the category reducer and display them beside each pi chart soon.

Feel free in comments to give me your feedback