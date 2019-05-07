```sql
SELECT dbschemas.[name] as 'Schema', 
dbtables.[name] as 'Table', 
dbindexes.[name] as 'Index',
indexstats.alloc_unit_type_desc,
indexstats.avg_fragmentation_in_percent,
indexstats.page_count
FROM sys.dm_db_index_physical_stats (DB_ID(), NULL, NULL, NULL, NULL) AS indexstats
INNER JOIN sys.tables dbtables on dbtables.[object_id] = indexstats.[object_id]
INNER JOIN sys.schemas dbschemas on dbtables.[schema_id] = dbschemas.[schema_id]
INNER JOIN sys.indexes AS dbindexes ON dbindexes.[object_id] = indexstats.[object_id]
AND indexstats.index_id = dbindexes.index_id
WHERE indexstats.database_id = DB_ID()
ORDER BY indexstats.avg_fragmentation_in_percent desc
```









```sql

DECLARE@TableName VARCHAR(255) 
DECLARE @sql NVARCHAR(500)
DECLARE@fillfactor INT

SET@fillfactor=80 

DECLARE TableCursor CURSOR FOR SELECT'['+ OBJECT_SCHEMA_NAME([object_id])+'].['+name+']'AS TableName
FROM sys.tables
OPEN TableCursor
FETCH NEXT FROM TableCursor 
INTO@TableName

WHILE@@FETCH_STATUS =0
BEGIN
  SET@sql ='ALTER INDEX ALL ON '+@TableName +' REBUILD WITH (FILLFACTOR = '+CONVERT(VARCHAR(3),@fillfactor)+')'
  EXEC(@sql)
FETCH NEXT FROM TableCursor INTO@TableName

END
CLOSE TableCursor
DEALLOCATE TableCursor
GO

```



```sql
GO
SET NOCOUNT ON
GO
DECLARE updatestats CURSOR FOR
SELECT table_name FROM information_schema.tables
	where TABLE_TYPE = 'BASE TABLE'
OPEN updatestats

DECLARE @tablename NVARCHAR(128)
DECLARE @Statement NVARCHAR(300)

FETCH NEXT FROM updatestats INTO @tablename
WHILE (@@FETCH_STATUS = 0)
BEGIN
   PRINT N'UPDATING STATISTICS ' + @tablename
   SET @Statement = 'UPDATE STATISTICS '  + @tablename + '  WITH FULLSCAN'
   EXEC sp_executesql @Statement
   FETCH NEXT FROM updatestats INTO @tablename
END

CLOSE updatestats
DEALLOCATE updatestats
GO
SET NOCOUNT OFF
GO

```


