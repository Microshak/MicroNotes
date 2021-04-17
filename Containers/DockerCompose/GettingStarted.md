# Create app.py
```python
import time

import redis
from flask import Flask


app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)


def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)


@app.route('/')
def hello():
    count = get_hit_count()
    return 'Hello World! I have been seen {} times.\n'.format(count)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
```
---
# Create a Dockerfile
```dockerfile
FROM python:3.4-alpine
ADD . /code
WORKDIR /code
RUN pip install flask
RUN pip install redis
CMD ["python", "app.py"]
```
---
#Create a docker-compose.yml
```yaml
version: '3'
services:
  web:
    build: .
    ports:
     - "5000:5000"
  redis:
    image: "redis:alpine"
```
---
# Run Docker Compose
```bash
docker-compose up
```

---
#Docker Compose Cheatsheet

```bash
docker-compose up
docker-compose ps       #List containers
docker-compose down
```
