```sh
FROM ubuntu:latest
CMD echo Hey

```
---
```sh
docker build -t myapp .

```
---
```sh
docker run --rm -t hey

```

---

```sh

docker run -it -t hey bin/bash
```