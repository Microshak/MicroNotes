sudo cat /etc/rancher/k3s/k3s.yaml

https://127.0.0.1:6443/


kctl create namespace retail-project-dev

kctl app -f test.yaml

get ingress,svc,pods -n retail-project-dev