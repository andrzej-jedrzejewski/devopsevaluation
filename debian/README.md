# debian:jessie-slim (data-only container)

To build docker image and push it to ecr:

1. Build the image:
```
sudo docker build -t 29xxxxxxx4179.dkr.ecr.eu-central-1.amazonaws.com/debian:jessie-slim .
```
where 29xxxxxxx4179.dkr.ecr.eu-central-1.amazonaws.com is your registry.

2. Create repository:
```
aws ecr create-repository --repository-name debian
```

3. Push image to your registry:
```
sudo docker push 294xxxxx4179.dkr.ecr.eu-central-1.amazonaws.com/debian:jessie-slim
```


