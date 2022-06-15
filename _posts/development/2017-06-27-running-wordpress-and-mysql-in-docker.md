---
id: 8636
title: 'Running WordPress and MySql in Docker'
date: '2017-06-27T14:13:52+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2017/06/docker.png
tags:
    - about
    - background
    - bash
    - code
    - completely
    - conf
    - considered
    - container
    - crash
    - create
    - database
    - default
    - development
    - docker
    - HowTo
    - linux
    - MySQL
---

### Notes

- A Docker image is a lightweight, stand-alone, executable package of a piece of software that includes everything needed to run it: code, runtime, system tools, system libraries, settings. Available for both #Linux and #Windows based apps, containerized software will always run the same, regardless of the environment. #Containers isolate software from its surroundings, for example differences between development and staging environments and help reduce conflicts between teams running different software on the same infrastructure.
- A container is a runtime instance of an image—what the image becomes in memory when actually executed. It runs completely isolated from the host environment by default, only accessing host files and ports if configured to do so. **\#Container are stateless and should be considered read only! (you can go inside the container change data, but at container creation your changes are lost)**
- Both MYSQL (Data, users) and WordPress (plugins, themes, uploads) are stateful, so we have to use #Docker volume to persist data across container restart.
- expose: 3306 will let you connect later with MySQLWorbench to the port from outside of the container. it is optional.
- depends\_on tell #wordpress to wait till mysql db container is up
- The always restart policy tells #Docker to restart the container under every circumstance. What’s great about the always restart policy is that even if our #Docker host was to crash on boot, the Docker service will restart our container.

We will be using the official #Wordpress image from [Docker HUB](https://hub.docker.com/_/wordpress/) But first let’s create a file uploads.ini to avoid issues later on while uploading plugins in wordpress.

```properties
file_uploads = On 
memory_limit = 256M 
upload_max_filesize = 256M 
post_max_size = 300M 
max_execution_time = 600 
```

Create a new file docker-compose.yml, adapt values to your liking, especially all passwords and username. Note that #MYSQL and #Worpress data are persisted OUTSIDE of container.

```yaml
version: '2' 
services: 
 wordpress: 
	depends_on: 
	 - db 
	image: wordpress:latest 
	volumes: 
	 - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini 
	 - ./file-wordpress:/var/www/html 
	ports: 
	 - 80:80 
	 - 443:443 
	restart: always 
	environment: 
	  WORDPRESS_DB_HOST: db 
	  WORDPRESS_DB_USER: wordpress 
	  WORDPRESS_DB_PASSWORD: wordpress 
	  WORDPRESS_TABLE_PREFIX: abcd 
 db: 
	image: mysql:5.7 
	volumes: 
	 - ./db-wordpress:/var/lib/mysql 
	restart: always 
	expose: 
	 - "3306" 
	environment: 
	  MYSQL_ROOT_PASSWORD: wordpress 
	  MYSQL_DATABASE: wordpress 
	  MYSQL_USER: wordpress 
	  MYSQL_PASSWORD: wordpress
```

The docker-compose up command aggregates the output of each container. It Builds, (re)creates, starts, and attaches to containers for a service. When the command exits, all containers are stopped. Running docker-compose up -d starts the containers in the background and leaves them running. To start WordPress in the background

```bash
docker-compose up -d
```

To find the name of the container

```bash
docker ps -a
```

or

```bash
docker-compose ps
```

To read the logs file

```bash
docker logs wordpress docker logs db
```

To go inside the container (remember all changes in there are lost at container restart)

```bash
docker exec -it wordpress bash
```

To delete all volume

```bash
docker-compose  rm -v
```