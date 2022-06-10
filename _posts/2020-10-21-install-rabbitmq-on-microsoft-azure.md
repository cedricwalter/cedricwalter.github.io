---
id: 13736
title: 'Install RabbitMQ on Microsoft Azure'
date: '2020-10-21T20:40:47+02:00'
author: 'Cédric Walter'

guid: 'https://www.waltercedric.com/?p=13736'
permalink: /development/install-rabbitmq-on-microsoft-azure/
ngg_post_thumbnail:
    - '0'
image: /wp-content/uploads/2020/10/rabbitMQ.jpg
tags:
    - azure
    - cloud
    - cluster
    - HowTo
    - microsoft
    - rabbitmq
    - ssh
---

[RabbitMQ](https://www.rabbitmq.com/) is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, MQ Telemetry Transport, and other protocols.

[RabbitMQ](https://www.rabbitmq.com/) is the most widely deployed open-source message broker. **Message brokers** are a communication technology used for applications to communicate between them. They act as an intermediary platform when it comes to processing communication between two or more applications.

![](/assets/images/2020/10/microsoft-azure.jpg)<figcaption><https://azure.microsoft.com/en-us/></figcaption>[Microsoft Azure](https://azure.microsoft.com/en-us/), commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.

[Bitnami](https://bitnami.com/) is offering a [ready to use deployment](https://bitnami.com/stack/rabbitmq/containers) to ease the installation

- Go to Azure [marketplace](https://portal.azure.com/#blade/Microsoft_Azure_Marketplace/MarketplaceOffersBlade/selectedMenuItemId/home)
- Search for `RabbitMQ Cluster`
- Click Create
- Basics
    - Resource group:
    - Region: `choose a region`
    - Deployment name: `choose a deploymentname. e.g. rabbitmq`
    - Save the application password carefully, it wont be displayed again.
    - Number of Slave machine: 2 or more is recommended
- Environment Configuration
    - Authentification Type: `password` or shh
    - Save the Authentification password carefully, it wont be displayed again.
- Click create

Wait a bit till all 3 VM’s created. One acting as a master and 2 as slaves in the example above. The names of each VM will be your Deployment name followed by a number. E.g. rabbitmq1, rabbitmq2, rabbitmq3. These VM will be visible under the Virtual machine page.

Note that an IP will be assigned only to a master VM by default. You can choose to assign IP’s to the other VM’s if you intend to access them independently. Also by default SSH will be enabled on port 22 for all VM’s.

## Accessing the master VM 

Head up to master VM, Settings – Connect menu. Azure display the SSH command to use. E.g like

```
ssh -i <private-key-path> bitnami@xxxxxxxx-vm0.region.cloudapp.azure.com
```

You can now connect to the master. You may want to install the RabbitMQ management panel on that node by running:

```
sudo rabbitmq-plugins enable rabbitmq_management
```

## Accessing RabbitMQ Administration panel

It is recommended to access the RabbitMQ management panel through an SSH tunnel, so just add to the previous SSH a tunnel on port 15672

```
ssh -i <private-key-path> bitnami@xxxxxxxx-vm0.region.cloudapp.azure.com -L 15672:127.0.0.1:15672
```

You can now access the RabbitMQ management using your browser at `http://localhost:15672/`

## Monitoring

It is recommended to configure properly Microsoft insights and alerts on each VM

## Interesting paths and command

```
sudo vi /opt/bitnami/rabbitmq/etc/rabbitmq/rabbitmq.config
sudo service bitnami start
sudo service bitnami stop
sudo rabbitmqctl cluster_status
```

## Links

- <https://docs.bitnami.com/azure/infrastructure/rabbitmq/>
- [RabbitMQ Images](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/bitnami.rabbitmq-cluster?tab=Overview)