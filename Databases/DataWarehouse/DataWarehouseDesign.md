#Inmon Approach (Enterprise Data Warehouse)
* Integrated, Centralized Source of Truth
* Meta, Summary, and Raw Data stores
* Data Marts for each Department within the Organization
* 3NF
* Strategic
* High Startup Costs

---

# Kimbal Approach (Dimensional Data Model)
  * Star/Snowflake Schema
  * Data Marts
  * Individual Business Requirements
  * Low Startup Costs


---

# Star Approach
![Full](https://microshak.github.io/MicroNotes/Images/star.png)

---

# Star Approach
* Pros
  * Handles new systems replacing old
  * Fast
  * Tools for modeling (mdx, excel)
* Cons
  * Not a full representation of source system

---

# Snowflake
![full](https://microshak.github.io/MicroNotes/Images/snowflake.png)
  

---

# Snowflake
* Pros
  * Handles more complex data
  * Easier to build
* Cons
  * Slower
  * Less prebuilt tools
