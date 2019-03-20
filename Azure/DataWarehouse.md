# PolyBase
* Allow cheap storage in Data Lake
* Connect with Different sources
---
# Massively Parallel Processing (MPP)
* Azure SQL Warehouse 20,000 nodes "pause"
* Redshift 128 nodes
---
# Cost
* Azure SQL Warehouse starting at $750 mo "cheaper"
* Redshift starting at ~$20 mo "more expensive"
---

# Columun Store
### Row Store
| User        | Where           | 
| ------------- |:-------------:|
| Mike      | is here |
| Joe      | is is there      | 
| Mike | is there      |   

### Column Store
| User        |        
| ------------- |
| Mike      | 
| Joe      |  

| Where        |        
| ------------- |
|is here|
|is there|


---
# How
```SQL

CREATE CLUSTERED COLUMNSTORE INDEX cci ON Sales.Orders
```
![Full](https://microshak.github.io/MicroNotes/Images/rowtoColumninar.png)

---

