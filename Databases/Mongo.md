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
