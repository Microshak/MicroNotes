~~~~

// Logs that indicate errors or warnings
AzureActivity
| where Level == "Error" or Level == "Warning"
| project TimeGenerated, Level, ResourceProvider, ActivityStatus, Caller, Category, Properties, CorrelationId

~~~~
