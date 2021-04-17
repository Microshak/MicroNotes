## 1. Create a dockerfile
```sh
FROM ubuntu:latest
CMD echo Hey

```
---

## 2. Docker build


```sh
docker build -t hey .

```
---
## 3. Docker run

```sh
docker run --rm -t hey

```

---

## 4. Docker run interactive

```sh

docker run -it -t hey bin/bash
```
