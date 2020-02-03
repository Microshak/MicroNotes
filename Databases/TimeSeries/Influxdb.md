
# Running with Docker
```sh
docker run -p 8086:8086 \
      -v $PWD:/var/lib/influxdb \
      influxdb
```
---
# Query
```sql
CREATE DATABASE mydb

SHOW DATABASES

USE mydb

INSERT cpu,host=serverA,region=us_west value=0.64


SELECT "host", "region", "value" FROM "cpu"

INSERT temperature,machine=unit42,type=assembly external=25,internal=37

SELECT * FROM "temperature"

```
---
* [Features and Keywords](https://docs.influxdata.com/influxdb/v1.7/query_language/spec/)
* [Writing Data](https://docs.influxdata.com/influxdb/v1.7/guides/writing_data/)
* [Python SDK](https://github.com/influxdata/influxdb-python)

inset.()