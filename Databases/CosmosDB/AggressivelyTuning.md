# Spread the Load
Using Azure Functions to perform workloads over periots of time.  This can be cone with Azure Storage Queues

---
# Implementing index documents
* If you need the most recent data try switching over from text based index to _ts

* Break out heavy documents with simple updates to new collections
---
# Monitoring RU

You can monitor RUs in the SDK
[https://docs.microsoft.com/en-us/azure/cosmos-db/find-request-unit-charge](link)

```dotnet
 FeedResponse<dynamic> queryResponse = await query.ExecuteNextAsync<dynamic>();
    requestCharge = queryResponse.RequestCharge;
```

---
# Beware the update!
Writes can be as much as 10x over reads
* Break out heavy documents with simple updates to new collections

---
# Use the Capacity Planner to estimate how decisions affect cost
[https://cosmos.azure.com/capacitycalculator/](https://cosmos.azure.com/capacitycalculator/)
You can use it in the last step to determine cost savings of the update split.
---
# Pre-emptive scaling
Scale up and down with predicted workloads
```c#
var coll = cosmosDBClient
	.CreateDocumentCollectionQuery(UriFactory.CreateDatabaseUri(databaseName))
	.Where(c => c.Id == collectionName)
	.AsEnumerable()
	.Single();

var offer = cosmosDBClient
	.CreateOfferQuery()
	.Where(o => o.ResourceLink == coll.SelfLink)
	.AsEnumerable()
	.Single();

var newOffer = new OfferV2(offer, newRUs);
await cosmosDBClient.ReplaceOfferAsync(newOffer);

```
---
# OpenAsync
OpenAsync preforms a meta data read which can cause 5x RUs for larger systems.
Make sure that it is in the constructor or removed entirely.