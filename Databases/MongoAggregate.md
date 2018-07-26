use SawyerDB;
db.getCollection("Command").aggregate(
    [
        { 
            "$group" : {
                "_id" : {
                    "Name" : "$Name"
                }, 
                "COUNT(*)" : {
                    "$sum" : NumberInt(1)
                }
            }
        }, 
        { 
            "$project" : {
                "_id" : NumberInt(0), 
                "Name" : "$_id.Name", 
                "COUNT(*)" : "$COUNT(*)"
            }
        }, 
        { 
            "$project" : {
                "_id" : NumberInt(0), 
                "Name" : "$Name", 
                "COUNT(*)" : "$COUNT(*)"
            }
        }
    ]
);
