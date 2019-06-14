
sudo snap install helm --classic
helm init --upgrade
minikube addons enable registry-creds



helm install --name my-release stable/mongodb --set replicaSet.enabled=true




export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace default kissable-iguana-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)


kubectl run --namespace default kissable-iguana-mongodb-client --rm --tty -i --restart='Never' --image bitnami/mongodb --command -- mongo admin --host kissable-iguana-mongodb --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD






db.createCollection('cities')
db.cities.insert({ name: 'New York', country: 'USA' })
db.cities.insert({ name: 'Paris', country: 'France' })
db.cities.find()
db.cities.find({"name": "Paris"})