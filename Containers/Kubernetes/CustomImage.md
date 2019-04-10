# Using the Minikube Docker Server
You need to set the docker to run and build on minikube
```sh
$ eval $(minikube docker-env)
```

--- 



# Docker Images
Create a flask app
```python

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
```
----

# Create a docker file
```dockerfile
FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential

COPY . /app
WORKDIR /app
RUN pip install Flask
ENTRYPOINT ["python"]
CMD ["app.py"]
```

---
# Build and Run
```bash
docker build -t helloflask .
```
---


# Create a repository
[Create Repository](https://cloud.docker.com/repository/create)


# push local image to repository
```sh
docker login

docker tag helloflask microshak/helloflask:v1
docker push microshak/helloflask:v1
```
---

# Deploy from repository
```bash
kubectl create deployment helloflask --image=helloflask microshak/helloflask:v1

kubectl expose deployment helloflask --type=LoadBalancer --port=8080

kubectl get services
```