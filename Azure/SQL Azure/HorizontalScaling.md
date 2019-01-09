# Horizontal Scaling (a.k.a sharding)

## Sharding
*  Splitting identically structured data across several independent databases
*  Each Tenant has its own shard key
*  Shardded Databaes are Called Shard Set
![d](https://microshak.github.io/MicroNotes/Images/Shardding.png)
 
 ---

## Shard Map

*  There is a tale called the Shard Map which keeps track of Tenant and Shark Keys
* The Shard Map Manager Keeps Track of at keeps track of the Shard Map in Azure 
![ShardMap](https://microshak.github.io/MicroNotes//Images/ShardMap.png)

---

## Elastic Scale Elements

* **Sharded Tables**: Tables are split based on their sharded keys are called 
* **Reference tables**: Tables that do not need to be sharded are called 
* **Shardlet**: All of the data of a sharding key on a shard.


---

## Developing

* You can code against the sharded databases with the Elastic Database Client Library in [.Net or Java](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-elastic-scale-shard-map-management)

```dotnet
public SqlConnection OpenConnectionForKey<TKey>(TKey key, string connectionString, ConnectionOptions options)

```

###Update a Shard
```dotnet 
int customerId = 12345; 
int newPersonId = 4321; 

// Connect to the shard for that customer ID. No need to call a SqlConnection 
// constructor followed by the Open method.
using (SqlConnection conn = customerShardMap.OpenConnectionForKey(customerId, Configuration.GetCredentialsConnectionString(), ConnectionOptions.Validate)) 
{ 
    // Execute a simple command. 
    SqlCommand cmd = conn.CreateCommand(); 
    cmd.CommandText = @"UPDATE Sales.Customer 
                        SET PersonID = @newPersonID WHERE CustomerID = @customerID"; 

    cmd.Parameters.AddWithValue("@customerID", customerId);
    cmd.Parameters.AddWithValue("@newPersonID", newPersonId); 
    cmd.ExecuteNonQuery(); 
}  
```

### Query All Shards
```dotnet
using (MultiShardConnection conn = new MultiShardConnection(myShardMap.GetShards(), myShardConnectionString)) 
{ 
    using (MultiShardCommand cmd = conn.CreateCommand())
    { 
        cmd.CommandText = "SELECT c1, c2, c3 FROM ShardedTable"; 
        cmd.CommandType = CommandType.Text; 
        cmd.ExecutionOptions = MultiShardExecutionOptions.IncludeShardNameColumn; 
        cmd.ExecutionPolicy = MultiShardExecutionPolicy.PartialResults; 

        using (MultiShardDataReader sdr = cmd.ExecuteReader()) 
        { 
            while (sdr.Read())
            { 
                var c1Field = sdr.GetString(0); 
                var c2Field = sdr.GetFieldValue<int>(1); 
                var c3Field = sdr.GetFieldValue<Int64>(2);
            } 
        } 
    } 
} 
```
---

## Elastic Database Query:


![Elastic Database Query](https://microshak.github.io/MicroNotes/Images/ElasticDatabaseQuery.png)

[Example Queries](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-elastic-query-getting-started)

---

## Elastic Database Jobs

* allow you to run queries on schedule


---

## Splitting and Merging Shards
* use the Split/Merge Service from Azure
* has Web, C#, and PowerShell interface

[example code](http://www.gethynellis.com/2018/10/horizontal-scaling-in-azure-SQL-database.html)