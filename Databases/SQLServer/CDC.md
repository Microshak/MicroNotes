## Conceptually

Exec sys.sp_cdc_enable_db
exec sys.sp_cdc_enable_table

![](https://www.sqlservercentral.com/wp-content/uploads/legacy/1bf51f51de2a678ff57f64ebd2def10c590cef9e/cdc_changetable.png)


The system tables created by the feature
The following tables are automatically created in the tracked database when Change Data Capture is enabled:

cdc.captured_columns – contains a row for each column tracked in the tracked (source) tables

cdc.change_tables – contains a row for each change table in the tracked database

cdc.ddl_history – contains a row for each structure (Data Definition Language) change of source tables

cdc.index_columns – contains a row for each index column associated with a change table. The index columns are used to uniquely identify rows in the source tables

cdc.lsn_time_mapping – contains a row for each transaction in the source tables. It maps Log Sequence Number values to the time the transaction was committed

The table dbo.cdc_jobs that stores configuration parameters for capture and cleanup jobs is the only system table created in the msdb database




---
## JOBS

The jobs are:

cdc.{DatabaseName}_capture

---

# Remove CDC

https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sys-sp-cdc-disable-table-transact-sql?view=sql-server-ver15

```
EXEC sys.sp_cdc_disable_db;
```
```
EXEC sys.sp_cdc_disable_table
 @source_schema = ‘HumanResources',
 @source_name = ‘Department',
 @capture_instance = ‘all';
```
