# 2 Streams must have a time window
# Drone
```sql
select * from DRONE d 
LEFT OUTER JOIN WEATHER w  WITHIN 1 HOURS 
on d.weatherstation = w.weatherstation;

```

# Table 
```sql
CREATE STREAM vip_actions AS 
SELECT userid, fullname, url, status  FROM clickstream c  
LEFT JOIN users u ON c.userid = u.user_id 
WHERE u.level = 'Platinum'; 


```

# Fraud Detection
```sql
CREATE TABLE possible_fraud AS
 SELECT card_number, count(*) 
 FROM authorization_attempts  WINDOW TUMBLING (SIZE 5 SECONDS) 
 GROUP BY card_number 
 HAVING count(*) > 3;
```
#DDL

```sql
CREATE STREAM clickstream 
( time BIGINT
, url VARCHAR
, status INTEGER
, bytes INTEGER
, userid VARCHAR
, agent VARCHAR) 
WITH ( value_format = 'JSON', kafka_topic='my_clickstream_topic' ); 

```
```sql
CREATE TABLE users 
( user_id INTEGER
, registered_at LONG
, username VARCHAR
, name VARCHAR
, city VARCHAR
, level VARCHAR) 
WITH ( key = 'user_id', 'kafka_topic=‘clickstream_users', value_format='JSON'); 

```
```sql
 list streams

```
```
select * from movies_raw

```

```


```