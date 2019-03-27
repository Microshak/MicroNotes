# Maps
```yaml
---
apiVersion: v1
kind: Pod
```
```json
{
   "apiVersion": "v1",
   "kind": "Pod"
}
```
---- 
# Nested Maps 
```yaml
---
apiVersion: v1
kind: Pod
metadata:
  name: rss-site
  labels:
    app: web
```
```json
{
  "apiVersion": "v1",
  "kind": "Pod",
  "metadata": {
               "name": "rss-site",
               "labels": {
                          "app": "web"
                         }
              }
}
```

# Lists
```yaml
args:
  - sleep
  - "1000"
  - message
  - "Bring back Firefly!"
```
```json
{
   "args": ["sleep", "1000", "message", "Bring back Firefly!"]
}
```
---

# Maps and Lists
```yaml
---
apiVersion: v1
kind: Pod
metadata:
  name: rss-site
  labels:
    app: web
spec:
  containers:
    - name: front-end
      image: nginx
      ports:
        - containerPort: 80
    - name: rss-reader
      image: nickchase/rss-php-nginx:v1
      ports:
        - containerPort: 88
```
```json
{
   "apiVersion": "v1",
   "kind": "Pod",
   "metadata": {
                 "name": "rss-site",
                 "labels": {
                             "app": "web"
                           }
               },
    "spec": {
       "containers": [{
                       "name": "front-end",
                       "image": "nginx",
                       "ports": [{
                                  "containerPort": "80"
                                 }]
                      }, 
                      {
                       "name": "rss-reader",
                       "image": "nickchase/rss-php-nginx:v1",
                       "ports": [{
                                  "containerPort": "88"
                                 }]
                      }]
            }
}
```

