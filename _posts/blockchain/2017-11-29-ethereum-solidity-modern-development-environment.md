---
id: 8690
title: 'Ethereum Solidity modern development environment'
date: '2017-11-29T19:28:06+01:00'
author: 'Cédric Walter'
categories:
- blockchain
guid: 'https://waltercedric.com/new/?p=8690'

header:
  teaser: /assets/images/2017/02/Ethereum.png
tags:
    - blockchain
    - capabilities
    - chances
    - code
    - compatible
    - container
    - core
    - day
    - definition
    - development
    - directories
    - docker
    - Download
    - editor
    - ethereum
    - HowTo
    - java
---

Here are the list of tips and tricks to develop solidity in a modern way (understand back to 2017 year 🙂 )

### IDE Support

I recommend you to use the excellent Jetbrains [Webstorm](https://www.jetbrains.com/webstorm/) or [Intellij IDEA](https://www.jetbrains.com/idea) with the folllowing free plugins:

- **Intellij-Solidity** see <https://github.com/intellij-solidity/intellij-solidity>
- **Solidity Solhint Plugin** allow to enable Solhint inspection capabilities in your project. It highlight of warnings / errors found by the linter in editor during code modification.
- Refactoring in Javascript is excellent but still not supported in Solidity,

### Auto-completion of solidity

Your smart contract code also deserve to be recognized by your IDE and in your test-cases. In order to enjoy auto-completion you’ll have to use Soltsice ()<https://github.com/dbrainio/Soltsice>) to convert Solidity code to TypeScript at compile time.

Add to your package.json

```
"scripts": {
 "types": "soltsice build/contracts types",
},
"devDependencies": {
 "soltsice": "^0.9.8", 
}
```

After any major changes to your Solidity code, run “npn run types”, once done you can enjoy auto-completion in javascript and in solidity!

### Auto-completion in Javascript

Chances are high that you are writing a lot of unit tests, integration tests…I hope you do. In order to get hint from the IDE, you’ll need under IDEA/WebStorm settings – Javascript – to add the following libraries by clicking \[ download \]

mocha, jasmine, chai, chai-as-promised, babel-core, add as much as your are using in your code.

FYI by doing so you just add typedscript packages from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) GitHub project.

### Auto-completion of Web3 

Web3 is the Ethereum compatible [JavaScript API](https://github.com/ethereum/wiki/wiki/JavaScript-API) which implements the [Generic JSON RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) spec. It’s available on npm as a node module, for bower and component as an embeddable js and as a meteor.js package.

There currently no official [Web3](https://github.com/ethereum/web3.js/) type definition included in the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) project. But there is one package good enough even if in Beta at <https://www.npmjs.com/package/web3-typescript-typings>

### Debugger

Only the Truffle debugger for now [http://truffleframework.com/docs/getting\_started/debugging](http://truffleframework.com/docs/getting_started/debugging)

### Running unit test

Using [Karma](http://karma-runner.github.io) is still a work in progress with TruffleSuite. A karma-trufflesuite runner is missing (<https://github.com/karma-runner>) but i am developing one!

### CI in Travis with Docker, .travis.yml

```
dist: trusty 
sudo: required group: beta 
language: node_js 
node_js:   
 - "8" cache:   
 directories:     
  - node_modules 
 before_script:   
   - truffle version 
 script:   
   - npm run lint   
   - npm run test 
 notifications:   
  slack:     
   rooms:   
    - secure: xxxxxxxxxxxxxxxx     
on_success: change     
on_failure: always     
on_pull_requests: false
```

### Easy testing of EVM Time shifting with Truffle snapshot/restore

Buggy right now, but may be solved soon see <https://github.com/trufflesuite/ganache-cli/issues/390>

This is a work in progress, i will continue trying to improve my day to day Solidity toolbox! If you have more tips, feel free to use the comment section below.