# Docker Images

Create a flask app.py

```python

from Flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

```

---

# Create a docker file

```dockerfile
FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python3-pip 
RUN apt-get install -y python-dev 
RUN apt-get install -y build-essential

COPY . /app
WORKDIR /app
RUN pip3 install Flask
ENTRYPOINT ["python3"]
CMD ["app.py"]


```

---

# Build and Run
```bash
docker build -t helloflask .
docker run -d -p 5000:5000 helloflask
```

---

# What went wrong

```bash
docker run -it -p 5000:5000 helloflask
```

---

# Lets rebuild

```bash 
docker build -t helloflask .
docker run -d -p 5000:5000 helloflask

```
---

# Lets make it better

```bash
docker build -t helloflask .
docker run -d -p 5000:5000 -v $(pwd):/app helloflask
```

---

# Lets modify the container

```bash
docker exec -it  [☢️️name of container️️️️️️️️☢️] /bin/bash
apt-get install nano
nano app.py

```
---

#Lets clean up

```bash
docker kill [☢️️name of container️️️️️️️️☢️]

docker system prune -a
```

---

# Commands to remember


docker [images](https://docs.docker.com/engine/reference/commandline/images/) -a # list all images

docker [ps](https://docs.docker.com/engine/reference/commandline/ps/) -a # list all containers
