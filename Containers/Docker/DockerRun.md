# Hello Docker
## Pull a docker image
```bash
docker pull hello-world

```
 ---

# Hello Grafana

```bash
  docker run \
  -d \
  -p 3000:3000 \
  --name=grafana \
  grafana/grafana

```

---
# Hello Mongo

```bash
mkdir ~/data
sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo

```


---
# Testing Hello Mongo
Install Mongo Client
```bash

sudo apt-get install mongodb-clients

mongo localhost/mydb
```
Run Mongo
```javascript

db.createCollection('cities')
db.cities.insert({ name: 'New York', country: 'USA' })
db.cities.insert({ name: 'Paris', country: 'France' })
db.cities.find()
db.cities.find({"name": "Paris"})

```

