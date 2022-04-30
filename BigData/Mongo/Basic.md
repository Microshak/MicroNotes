# Replica Set
In atlas has min of 3 nodes 1 primary and 2 secondary.  
Can deploy more nodes for workload isolation
Can deploy a sharded cluster

# Disk
You can choose a disk size
Disk IOps is associated with it. (Disk operations per second)
The larger the disk is the larger the IOps

# Backups
Disaster Recovery Stragegy
Restore cluster from snapshot


# Work Load
Too Little and too much have performance issues

# Connections
* Too many can indicate an Iops issue on the drive.

# Resources
* CPU
* Memory
* disk ios
* face timeouts & app slow & everything goes to queue server unable to process operations

# OpLog
like a buffer for replication
When it it too small to capture all operations that are preformed during write
secondary nodes can be stale and need a resync

# Alerts
Through UI or API


# Performance Advisor
Drop indexes
create image

# real time panel
see long running
query staticss
kill offencign ops

# Profiller
See performance issues

# Auto Scale Cluster?
Threshold up and down depending on usage