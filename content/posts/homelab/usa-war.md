---
title: "Ditch american products! EU first"
date: 2025-03-05T09:44:17+01:00
summary: "list of federated selfhosted apps that can replace all major social network like x, Instagram, Facebook, reddit, messenger and other"
categories:
  - Homelab
cover: "https://www.waltercedric.com/homelab/how-trumps-tariffs-against-his-allies-work.webp"
tags:
  - trump-is-an-idiot
  - putin-dictator
  - european-freedom
  - buy-european
  - owning-technology-stack
  - eu-freedom
  - social-network-will-end-civilization
  - freedom-of-speech-but-respect-law
  - foreign-country-manipulation
---

# AI
## Replacement for OpenAI ChatGPT
use LeChat from MistralAI https://chat.mistral.ai/chat
or better Ollama.com and https://github.com/open-webui/open-webui if your computer is fast enough (16GB Ram, and/or with a GPU)

# IDE
## Replacement for Vidual Studio Code
https://vscodium.com/#install

Microsoft’s vscode source code is open source (MIT-licensed), but the product available for download (Visual Studio Code) is licensed under this not-FLOSS license and contains telemetry/tracking. According to this comment from a Visual Studio Code maintainer:

```
When we [Microsoft] build Visual Studio Code, we do exactly this. We clone the vscode repository, we lay down a customized product.json that has Microsoft specific functionality (telemetry, gallery, logo, etc.), and then produce a build that we release under our license.
When you clone and build from the vscode repo, none of these endpoints are configured in the default product.json. Therefore, you generate a “clean” build, without the Microsoft customizations, which is by default licensed under the MIT license```

The VSCodium project exists so that you don’t have to download+build from source. This project includes special build scripts that clone Microsoft’s vscode repo, run the build commands, and upload the resulting binaries for you to GitHub releases. These binaries are licensed under the MIT license. Telemetry is disabled.

# Social Networks

Here’s a list of federated, self-hosted apps that can replace major social networks and platforms. These are typically built on open protocols like ActivityPub or Matrix, allowing federation and interoperability!

{{< notice warning>}} 
The best is to ditch all social networks, they make you loose time, polarize society. We are at this point of history because of these tools!
{{< /notice >}}

## Replacement for Twitter/X  
- [Mastodon](https://joinmastodon.org): A microblogging platform similar to Twitter, decentralized and federated.  
- [Pleroma](https://pleroma.social/): A lightweight alternative to Mastodon with similar functionality.  
- [Misskey](https://misskey-hub.net/en/): A more customizable federated microblogging platform.  

## Replacement for Instagram  
- [Pixelfed](https://pixelfed.org): A federated photo-sharing platform designed to be a privacy-friendly alternative to Instagram.  

## Replacement for Facebook  
- [Friendica](https://friendi.ca/): A decentralized social network with a focus on integration (can connect with Mastodon, Diaspora, etc.).  
- [Hubzilla](https://hubzilla.org/): A privacy-aware, federated platform with features like forums, wikis, and file sharing.  

## Replacement for Reddit  
- [Lemmy](https://join-lemmy.org): A federated alternative to Reddit, allowing communities to create and moderate their own instances.  
- [Kbin](https://kbin.pub/): A federated Reddit-like platform that also supports microblogging.  

## Replacement for Messenger/Chat Apps  
- [Matrix](https://matrix.org/) (with apps like [Element](https://element.io/)): A decentralized communication protocol for secure messaging, VoIP, and collaboration.  
- [XMPP](https://xmpp.org) (e.g., with [Conversations](https://conversations.im/)): A robust protocol for messaging and presence information.  

## Replacement for YouTube  
- [PeerTube](https://joinpeertube.org/): A federated video hosting platform with features similar to YouTube.  

## Replacement for TikTok  
- [Owncast](https://owncast.online/): A self-hosted live streaming service that could be adapted for short video content.  
- [Peertube](https://joinpeertube.org/): Can also be used for short video clips with proper configuration.  

## Replacement for WhatsApp or Signal  
- [Matrix](https://matrix.org/): Secure messaging, with end-to-end encryption.  
- [Jami](https://jami.net/): A peer-to-peer alternative for secure chat and video calls without servers.  

## Replacement for Spotify (Social/Sharing Music)  
- [Funkwhale](https://funkwhale.audio/): A federated platform for sharing and streaming music.  

## Replacement for Medium/Substack (Blogging)  
- [WriteFreely](https://writefreely.org/): A federated blogging platform focused on simplicity and privacy.  
- [Plume](https://joinplume.org/): A federated blogging platform with collaboration features.  

## General Decentralized Social Networking  
- [Diaspora](https://diasporafoundation.org/): A decentralized social network that emphasizes privacy.  
- [GNU Social](https://gnu.io/social/): One of the earliest federated social networking platforms.  

## Replacement for Workplace/Professional Networks (LinkedIn)  
- [Bonfire](https://bonfirenetworks.org/): A modular and federated platform that can be tailored for professional networking.  

## Replacement for Discord  
- [Revolt](https://revolt.chat/): A self-hosted chat platform with features similar to Discord.  
- [Matrix](https://matrix.org/): Can replicate many of Discord’s functionalities with proper configuration.