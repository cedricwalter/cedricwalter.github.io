---
id: 13741
title: 'Install MongoDB High Availability on Microsoft Azure'
date: '2020-10-22T22:28:08+02:00'
author: 'Cédric Walter'

guid: 'https://www.waltercedric.com/?p=13741'

ngg_post_thumbnail:
    - '0'
header:
  teaser: /assets/images/2020/10/mongodb.png
tags:
    - azure
    - database
    - devops
    - microsoft
    - mongo
    - replica
---

![](/assets/images/2020/10/microsoft-azure.jpg)<figcaption><https://azure.microsoft.com/en-us/></figcaption>[Microsoft Azure](https://azure.microsoft.com/en-us/), commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.

Azure offer [CosmosDB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) and Cloud Atlas:

[Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction) is Microsoft’s globally distributed, multi-model database service. With a click of a button, Cosmos DB enables you to elastically and independently scale throughput and storage across any number of Azure regions worldwide. You can elastically scale throughput and storage, and take advantage of fast, single-digit-millisecond data access using your favorite API including: SQL, [MongoDB](https://www.mongodb.com/), Cassandra, Tables, or Gremlin.

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) is the global cloud database service for modern applications.  
Deploy fully managed [MongoDB](https://www.mongodb.com/) across AWS, Google Cloud, and Azure with best-in-class automation and proven practices that guarantee availability, scalability, and compliance with the most demanding data security and privacy standards.

But **you may still want to manage your own MongoDB cluster** on Azure.

## Creating Virtual machines

# **Firstly****, You will create VMs, at least 3, ideally in a different zone but sharing the same virtual network.

The primary receives all write operations. While Secondaries replicate operations from the primary to maintain an identical data set. Because of that Secondaries may have additional configurations for special usage profiles.

I recommend you create also dedicated [recovery services vaults](https://portal.azure.com/#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.RecoveryServices%2Fvaults) to backup your cluster. The default backup policy is an Hourly backup, retained for 30 days.

Go to [Virtual machines](https://portal.azure.com/#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Compute%2FVirtualMachines) Use `start with a preset`

1. Select a workload environment: Use `Production`
    - Boot diagnostics
    - High availability
    - Azure backup (where available)
2. Select a workload type: use`General purpose (D-Series) default`
3. Availability Options: `Availability set`
4. Availability set: To provide redundancy to your application, we recommend that you group two or more virtual machines in an availability set. This configuration ensures that during a planned or unplanned maintenance event, at least one virtual machine will be available and meet the 99.95% Azure SLA. The availability set of a virtual machine can’t be changed after it is created.
5. I prefer Ubuntu, but CentOS is also good
6. For production don’t use Azure Spot Instance! You do not want
7. Attach additional disks for the mongodb data, ideally SSD, Don’t use [Ultra disk](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-enable-ultra-ssd?tabs=azure-portal), as they don’t support Azure Backup and encryption today (you could but will have to implement your own Bacula/xxx backup method)
8. Activate Os Guest Diagnostics and all other options fitting to your use case
9. Do not assign public IP except maybe for the primary. And even you could avoid this and still access though a Azure load Balancer or dedicated small VM in the same virtual network (= jump station)

## Installing MongoDB on each VM

Secondly, we update the operating system (Ubuntu) and mount the external disk permanently.

```
sudo apt update && sudo apt upgrade -y

# locate the external disk
lsblk -o NAME,HCTL,SIZE,MOUNTPOINT | grep -i "sd"
# Here it is scd for me
# Partition the new disc with XFS
sudo parted /dev/sdc --script mklabel gpt mkpart xfspart xfs 0% 100%
sudo mkfs.xfs /dev/sdc1
sudo partprobe /dev/sdc1

# Add some folder on it
sudo mkdir /datadrive
sudo mount /dev/sdc1 /datadrive

# Mount and add to fstab to remount automatically at reboot, found its UUID
sudo blkid

# and add it to fstab
sudo vi /etc/fstab
UUID=300d0d47-ca5d-43ce-ba62-6f123fcbabb6   /datadrive   xfs   defaults,nofail   1   2
```

Install MongoDB, set data folder and replica name.

```
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update && sudo apt-get install -y mongodb-org

# some more directories
sudo mkdir -p /datadrive/data
sudo chown -R mongodb /datadrive/

# time to tell mongoDB where the Data, Logs are
# adapt to match below values
sudo vi /etc/mongod.conf
 port = 27017
 bindIp: 0.0.0.0
 dbpath = /datadrive/data
 logpath = /datadrive/mongod.log

replication:
  replSetName : mongors
```

Start Mongo DB using systemD.

```
sudo service mongod start
sudo tail --f /datadrive/mongod.log
```

The “waiting for connections” message in the log file indicates mongod is up and running and waiting for client connections

## Configure the replicas

Check first that the primary VM can connect to all secondaries using their private IP (telnet ip1/ip2/ip3 27017)

On the future primary VM, run mongo –port 27017

```
> conf = {
   _id : "mongors",
   members : [
     {_id:0, host:"10.2.0.4:27017"},
     {_id:1, host:"10.2.0.5:27017"},
     {_id:2, host:"10.2.0.6:27017"}]}
> rs.initiate(conf)
```

This will start the initialization of the mongodb replica set. Type the command `rs.status()` to check the status of the replica set. Upon successful initialization, you should see 1 of the 3 instances being the “Primary” of the set and the other 2 being the “Secondaries”

Moreover don’t forget to configure Azure monitoring (insights), Alerts, Disaster recovery, ….

# [](https://github.com/enable-jarowa/AzureCluster/blob/main/enable.jarowa.de/Mongo.md#application-configuration)

### [](https://github.com/enable-jarowa/AzureCluster/blob/main/enable.jarowa.de/Mongo.md#configure-the-replica-set)