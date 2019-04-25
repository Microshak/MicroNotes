# Spin up Redis
```ps

docker run -p 6379:6379 --name redis-redisjson redislabs/rejson:latest

```
---
# Exec into Docker

```ps

 docker exec -it [container] bash

```

---
# Start CLI
```sh

redis-cli

```
---

```sh
JSON.SET foo . '"bar"'
JSON.GET foo
JSON.SET example . '[ true, { "answer": 42 }, null ]'
JSON.GET example
JSON.GET example [1].answer
JSON.DEL example [-1]
JSON.GET example



```
---

```py
import redis
import json

redis_host = "localhost"
redis_port = 6379
redis_password = ""
data = {'foo': 'bar'}

r = redis.StrictRedis(host=redis_host, port=redis_port, password=redis_password)
r.execute_command('JSON.SET', 'doc', '.', json.dumps(data))
reply = json.loads(r.execute_command('JSON.GET', 'doc'))
print(reply)

```