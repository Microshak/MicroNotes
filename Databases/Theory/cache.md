## Client-Side Caching
The client (user's device) stores copies of resources locally, such as images or scripts, to reduce the need for repeated requests to the server.

## Server-Side Caching
The server stores copies of responses to requests so that it can quickly provide the same response if the same request is made again.

## Database Caching
Frequently queried database results are stored in memory for faster retrieval, reducing the need to execute the same database queries repeatedly.


# Caching Strategies for System Design


1. Least Recently Used (LRU)
2. Most Recently Used (MRU)
3. First-In-First-Out (FIFO)
4. Random Replacement

# Cache Statetegies
3. Cache-Aside (Lazy-Loading) application code is responsible for loading data into the cache
4. Read Through -- Miss cache causes the cache to get data 
5. Write Back -- All to Cache then bulk to db
6. write through -- app-->cache-->db