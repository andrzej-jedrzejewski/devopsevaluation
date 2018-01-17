## devopsevaluation
### 1. Assumptions: we are using application stack that consist of: php 7 (Laravel) / mysql 5.7 / nginx 1.8.1. We have a 100 simultaneous user connections (time needed for the response is longer than 1 sec.). We want to scale our platform to 10000 users. What can be done to achieve such a scale?

I assume that we have 10k users around the world (USA, Europe, Asia) and also we want to guarantee HA.
I will start with testing small setup with jmeter to be sure that it can handle the 100 concurrent users.
If this works I will move forward. I will split web application and database to separate servers/containers. 
As a base instance I will choose t2.large and I will go with horizontal scaling.
In front of the Web Tier we can place load balancer (we can use sticky sessions or use memchache/redis 
as a separate service for caching) + CDN (to serve static files) and Route 53 (geolocation). It should decrease the webapp load. 
Web Tier: nginx+laravel + Auto Scaling based on CPU usage
Database Tier: RDS(mysql) + read replicas

To verify architecture we can use jmeter + blazeMeter.
The draft of the architecture:

![Draft of Architecture](images/ApplicationArchitecture.png?raw=true "Draft of Architecture")

### 2. What is cache? What kind of caches do you know and what are the differences between them?

It's a temporary storage. It can be used to store frequently access data.
Server (application) cache:

* File: cached objects in the filesystem
* Database (mysql): cached objects are stored in table
* Mamcached
* Redis

User cache:
	* WebBrowser cache, e.g graphic files (banners, buttons, icons, ad-files etc.), photographs, script files, and even HTML pages.


### 3. Which tool for container orchestration will you chose for the environment that consist of 10 physical nodes. Do the same for 100 physical nodes as well. Please, explain also your choice.

In both cases, I'll go with Kubernetes. Kubernetes itself is complicated but thanks that it is also flexible. It is the most mature and most popular solution in the market. Kubernetes can be deployed within ansible (if we prepare ansible role for slave we can very quickly add new physical nodes) or kubeadm. Kubernetes offers inbuilt logging and monitoring tools. From the DevOps point of view:

* Scalability: deployments can be scaled in or out at any time.
* Visibility: identify completed, in-process, and failing deployments with status querying capabilities.
* Time savings.
* Version Control.
* Horizontal autoscaling.
* Rolling updates.
* Canary deployments.
* It supports stateless, stateful, and data-processing workloads.

### 4. What is the easiest way to scale up instance group in GCP?

* Using AutoScaling.

### 5. Translate attached configuration (docker-compose.yml) to Amazon ECS service by creating
ECS tasks. As a stanza we would like a json file that, when used on ECS, will create proper
configuration.

![ecstask](https://github.com/andrzej-jedrzejewski/devopsevaluation/blob/e176385d78f63199ec8162d66254315ce4bae7ed/task-definitions/phpstack.json?)
