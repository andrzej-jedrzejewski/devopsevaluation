# node-sample

To build docker image and push it to ecr:

1. Build the image:
```
sudo docker build -t 29xxxxxxx4179.dkr.ecr.eu-central-1.amazonaws.com/node-sample:latest .
```
where 29xxxxxxx4179.dkr.ecr.eu-central-1.amazonaws.com is your registry.

2. Create repository:
```
aws ecr create-repository --repository-name node-sample
```

3. Push image to your registry:
```
sudo docker push 294xxxxx4179.dkr.ecr.eu-central-1.amazonaws.com/node-sample:latest
```
You can also test docker image locally:
```
sudo docker run -p 8888:8888 294108764179.dkr.ecr.eu-central-1.amazonaws.com/node-sample:latest
```

