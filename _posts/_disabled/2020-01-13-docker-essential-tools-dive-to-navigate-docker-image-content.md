---
id: 8783
title: 'Docker essential tools: Dive to navigate docker image content'
date: '2020-01-13T13:23:27+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2017/06/docker.png
tags:
    - bash
    - container
    - definition
    - directory
    - docker
    - efficiency
    - environment
    - Features
    - files
    - future
    - github
    - HowTo
    - linux
---

If you want to explore the content of a docker image, Dive is THE tool for exploring a docker image, layer contents, and discovering ways to shrink the size of your Docker image.

Note that we will be exploring the image not the container: viewing the container and the image are not the same thing. You can get most of the time a bash access to a running container with

```
docker run -it image_name sh
```

Or following for images with an `entrypoint`

`docker run -it --entrypoint sh image_name`

NOTE: there is no guarantee that an image will have any sort of interactive shell. many minimal images contain only the binaries necessary to support a service.

An image is not running, consider it like a definition of a future container. You can still view the content, this is possible since each “layerid” directory contains json file describing layer property and filesystem associated with that layer. Docker stores Container images as layers to optimize storage space by reusing layers across images.

Beside Dive, you can also use [docker inspect](https://docs.docker.com/engine/reference/commandline/inspect/)

```
docker image inspect image_id
```

But Dive **is a lot better** as it allow to **navigate** and see the filesystem changes in a nice norton commander interface.

![](/assets/images/2020/01/docker-dive-demo.gif)

# Features

### Show Docker image contents broken down by layer

As you select a layer on the left, you are shown the contents of that layer combined with all previous layers on the right. Also, you can fully explore the file tree with the arrow keys.

### Indicate what’s changed in each layer

Files that have changed, been modified, added, or removed are indicated in the file tree. This can be adjusted to show changes for a specific layer, or aggregated changes up to this layer.

### Estimate “image efficiency”

The lower left pane shows basic layer info and an experimental metric that will guess how much wasted space your image contains. This might be from duplicating files across layers, moving files across layers, or not fully removing files. Both a percentage “score” and total wasted file space is provided.

### Quick build/analysis cycles

You can build a Docker image and do an immediate analysis with one command: `dive build -t some-tag .`

You only need to replace your `docker build` command with the same `dive build` command.

### CI Integration

Analyze and image and get a pass/fail result based on the image efficiency and wasted space. Simply set `CI=true` in the environment when invoking any valid dive command.

To install it:

```
docker pull wagoodman/dive
```

then just provide your image tag/id/digest

docker run –rm -it -v /var/run/docker.sock:/var/run/docker.sock wagoodman/dive:latest <your-image>

Get more by visiting the project page <https://github.com/wagoodman/dive>