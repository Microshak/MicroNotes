#Docker-compose.yml
```yaml
version: '3.3'
services:
  hey:
    build: ./hey
  ho:
    build: ./ho

```
---
# Hey/Dockerfile
```
FROM ubuntu:latest
CMD echo Hey

```
---
# Ho/Dockerfile
```
FROM ubuntu:latest
CMD echo Ho

```
