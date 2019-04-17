# Setup a DB
stack.yml
```yaml
version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
```
---
# Start and Run
```sh
docker-compose -f stack.yml up

```
GOTO http://localhost:8081
OR
```
docker exec -it [☢️️️name of docker️ container️️️️☢] bash
```
---
# Upload some data
[Inventory Data](https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/inventory.crud.json)

---
# Mongo Crud
```
db.inventory.insertOne(
   { "item" : "canvas",
     "qty" : 100,
     "tags" : ["cotton"],
     "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" }
   }
)
```

Find All
```
myCursor = db.inventory.find( {} )
```
[Docs](https://docs.mongodb.com/guides/)
[Cheat Sheet](https://www.opentechguides.com/how-to/article/mongodb/118/mongodb-cheatsheat.html)

