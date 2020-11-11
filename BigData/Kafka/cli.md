
# ACL
```
ccloud login
ccloud kafka cluster  list
ccloud kafka cluster use <cluster id>
ccloud api-key list
ccloud kafka acl list

ccloud kafka acl create --service-account 97586 --operation DESCRIBE --consumer-group '*' --allow
ccloud kafka acl create --service-account 97586 --operation DELETE --consumer-group '*' --allow
ccloud kafka acl create --service-account 97586 --operation READ --consumer-group '*' --allow
```

# Consumer Groups 
```
./kafka-consumer-groups --bootstrap-server pkc-lgwgm.eastus2.azure.confluent.cloud:9092 --command-config config.properties —list

kafka-consumer-groups --bootstrap-server ...confluent.cloud:9092 --command-config config.properties --delete --group mike-0924

```