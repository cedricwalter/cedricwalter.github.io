---
id: 8187
title: 'How to install your own open source Mind Map tool in html5'
date: '2014-02-02T18:58:36+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8187'
permalink: /internet/how-to-install-your-own-open-source-mind-map-tool-in-html5-2/
tags:
    - internet
    - java
    - web
    - web2.0
---

![](https://digitalfireflymarketing.com/sites/default/files/nodejs_0.png)

Thanks to <https://github.com/drichard/mindmaps> you can host your own copy of Mind Map like I did at

[http://mindmap.waltercedric.com/index.html](http://mindmap.waltercedric.com/index.html "http://mindmap.waltercedric.com/index.html")

[![image](/assets/images/2013/09/image.png "image")](http://mindmap.waltercedric.com/index.html)

[Node.js](http://nodejs.org/ "node.js") is a platform built on [Chrome’s #JavaScript runtime](http://code.google.com/p/v8/) for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

and [npm](https://npmjs.org/) is the package manager for the Node #JavaScript platform. It puts modules in place so that node can find them, and manages dependency   
conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs. ([https://npmjs.org/](https://npmjs.org/ "https://npmjs.org/"))

# Short How To

```
sudo apt-get install nodejs npm

wget <a href="https://github.com/drichard/mindmaps/archive/master.zip">https://github.com/drichard/mindmaps/archive/master.zip</a> 

unzip master.zip cd master

npm install

jake -f Jakefile.js
```

Now you can copy the content of the ./bin directory to any web root and you are good to go!

# Longer version 

These are all the error I havve encounter and how I did solve them

### TypeError: Object #<Object> has no method ‘existsSync’

This is because your version of nodejs is tool old: nodejs 0.6 moved `path.existsSync` to `fs.existsSync`, so if you’re using an old version of node then `fs.existsSync` will be broken.

Check your current version of node.js

\# nodejs –version

was returning v0.6.19 on my box

To update to the latest version v0.10.25, you’ll have to rely on an external ppa

```
sudo add-apt-repository ppa:chris-lea/node.js sudo apt-get update sudo apt-get install nodejs
```

Now you should have the latest version of node.js

### npm http 404 http://registry.npmjs.org/uglify-js npm ERR! registry error parsing json

Either set the registry to not use SSL globally

```
sudo npm config set registry <a href="http://registry.npmjs.org/">http://registry.npmjs.org/</a>
```

or specify the registry and get manually the required dependencies

```
sudo npm install uglify-js --registry http://registry.npmjs.org/ sudo npm install node-static --registry http://registry.npmjs.org/ sudo npm install -g jake --registry <a href="http://registry.npmjs.org/">http://registry.npmjs.org/</a>
```

### npm WARN cannot run in wd 

The Node.js package manager ca not run in working directory

```
npm WARN package.json node-static@0.5.9 No repository field. npm WARN prefer global jake@0.7.6 should be installed with -g npm WARN cannot run in wd mindmaps@0.7.3 npm install -g jake (wd=/xxx/…)
```

You need to run npm as sudo or without permission checks

```
sudo npm install --unsafe-perm
```

a successful install should look like

```
sudo npm install 



npm WARN package.json node-static@0.5.9 No repository field. npm WARN prefer global jake@0.7.6 should be installed with -g  > mindmaps@0.7.3 postinstall /mindmap/build > npm install -g jake  npm http GET https://registry.npmjs.org/jake npm http 304 https://registry.npmjs.org/jake npm http GET https://registry.npmjs.org/utilities npm http GET https://registry.npmjs.org/minimatch npm http 304 https://registry.npmjs.org/minimatch npm http 304 https://registry.npmjs.org/utilities npm http GET https://registry.npmjs.org/lru-cache npm http GET https://registry.npmjs.org/sigmund npm http 304 https://registry.npmjs.org/lru-cache npm http 304 https://registry.npmjs.org/sigmund /usr/bin/jake -> /usr/lib/node_modules/jake/bin/cli.js jake@0.7.6 /usr/lib/node_modules/jake ├── utilities@0.0.31 └── minimatch@0.2.14 (sigmund@1.0.0, <a href="mailto:lru-cache@2.5.0">lru-cache@2.5.0</a>)
```

Last step is to run the jakefile with `jake`. The finished build will appear in `/bin`.

```
jake -f Jakefile.js
```