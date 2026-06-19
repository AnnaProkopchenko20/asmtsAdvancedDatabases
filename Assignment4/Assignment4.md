# Assignment 4

## MongoDB
### Task 2
- simple filters
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)

- updates
![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)
![alt text](image-9.png)

![alt text](image-10.png)
![alt text](image-11.png)

- deletes

![alt text](image-12.png)
![alt text](image-13.png)
### Task 3

![alt text](image-14.png)
![alt text](image-15.png)

### Optimisation Task
```
// Task 4


db.books.find({
    category: "Programming",
    published_year: { $gte: 2020 }
    }).explain("executionStats")

db.books.createIndex({
    category: 1,
    published_year: 1
    })
```

* **before optimisation**

- COLLSCAN
- 33 examined ( all documnets)
- execution time 5ms

```
{"executionSuccess": true, "nReturned": new NumberInt("8"), 
"executionTimeMillis": new NumberInt("5"),
 "totalKeysExamined": new NumberInt("0"), 
"totalDocsExamined": new NumberInt("33"),
 "executionStages": {"isCached": false, "stage": 
"COLLSCAN", 
"filter": {"$and": [{"category": {"$eq": "Programming"}}, {"published_year": {"$gte": new NumberInt("2020")}}]}, "nReturned": new NumberInt("8"), "executionTimeMillisEstimate": new NumberInt("0"), "works": new NumberInt("34"), "advanced": new NumberInt("8"), "needTime": new NumberInt("25"), "needYield": new NumberInt("0"), "saveState": new NumberInt("0"), "restoreState": new NumberInt("0"), "isEOF": new NumberInt("1"), "direction": "forward", "docsExamined": new NumberInt("33")}}
```


* **after optimisation**

- IXSCAN
- 8 examined ( 8 needed)
- execution time 7ms (worse because dataset is very small and had to both scna index and the fetch)


```
{"executionSuccess": true, "nReturned": new NumberInt("8"),
 "executionTimeMillis": new NumberInt("7"),
  "totalKeysExamined": new NumberInt("8"), 
"totalDocsExamined": new NumberInt("8"),
 "executionStages": {"isCached": false, "stage": "FETCH", "nReturned": new NumberInt("8"), "executionTimeMillisEstimate": new NumberInt("0"), "works": new NumberInt("9"), "advanced": new NumberInt("8"), "needTime": new NumberInt("0"), "needYield": new NumberInt("0"), "saveState": new NumberInt("0"), "restoreState": new NumberInt("0"), "isEOF": new NumberInt("1"),
  "docsExamined": new NumberInt("8"),
   "alreadyHasObj": new NumberInt("0"), "inputStage": {"stage":
 "IXSCAN", 
  "nReturned": new NumberInt("8"), "executionTimeMillisEstimate": new NumberInt("0"), "works": new NumberInt("9"), "advanced": new NumberInt("8"), "needTime": new NumberInt("0"), "needYield": new NumberInt("0"), "saveState": new NumberInt("0"), "restoreState": new NumberInt("0"), "isEOF": new NumberInt("1"), "keyPattern": {"category": new NumberInt("1"), "published_year": new NumberInt("1")}, "indexName": "category_1_published_year_1", "isMultiKey": false, "multiKeyPaths": {"category": [], "published_year": []}, "isUnique": false, "isSparse": false, "isPartial": false, "indexVersion": new NumberInt("2"), "direction": "forward", "indexBounds": {"category": ["[\"Programming\", \"Programming\"]"], "published_year": ["[2020, inf]"]}, "keysExamined": new NumberInt("8"), "seeks": new NumberInt("1"), "dupsTested": new NumberInt("0"), "dupsDropped": new NumberInt("0")}}}
```

## Redis
### sme execution screenshots
![alt text](image-16.png)

![alt text](image-17.png)
![alt text](image-18.png)
![alt text](image-19.png)
![alt text](image-20.png)
![alt text](image-21.png)
![alt text](image-22.png)
![alt text](image-23.png)

![alt text](image-24.png)
![alt text](image-25.png)
![alt text](image-26.png)

![alt text](image-27.png)
![alt text](image-28.png)
![alt text](image-29.png)

![alt text](image-30.png)
![alt text](image-31.png)
![alt text](image-32.png)
![alt text](image-33.png)


![alt text](image-34.png)
![alt text](image-35.png)
![alt text](image-36.png)
![alt text](image-37.png)

### code
```

-- Task 1
SET product:1:name Tea
SET product:1:price 35
SET product:1:category Food
SET product:1:stock 2

GET product:1:name
GET product:1:price
GET product:1:category
GET product:1:stock

-- Task 2
HSET product:2 name "Matcha" price "60" category "Food" stock "2"

HGETALL product:2

-- Task 3
LPUSH recent_orders "order:1" "order:2" "order:3" "order:4" "order:5" "order:6" "order:7" "order:8" "order:9" "order:10"

LRANGE recent_orders 0 -1

LRANGE recent_orders 0 2

-- Task 4

SADD product:2:product_tags "organic" "loose_leaf" "earl_grey" "caffeinated" "antioxidants" "premium_blend" "citrus_notes" "organic"
SMEMBERS product:2:product_tags
SISMEMBER product:2:product_tags "earl_grey"
SISMEMBER product:2:product_tags "green"

-- Task 5

SETEX featured_product:1 60 "product:2"
TTL featured_product:1
GET featured_product:1

-- Task 6

SETEX cache:product:1001 120 "name: Peanuts, price: 600, category: Food, stock: 39"
GET cache:product:1001
TTL cache:product:1001

SET cache:product:1002  "name: Peanuts, price: 600, category: Food, stock: 39"

EXPIRE cache:product:1002 120
TTL cache:product:1002
GET cache:product:1002

-- bonus
ZADD sales_leaderboard 150 "product:1" 50 "product:2" 500 "product:3" 12 "product:4" 320 "product:5"

ZREVRANGE sales_leaderboard 0 -1 WITHSCORES

ZREVRANGE sales_leaderboard 0 0 WITHSCORES
```

### notes

* **descriptions**
1. zadd - sorted => fast access/sorting but slower inserts more memory because of hash table maintanence along with the data
2. sadd - set fast operations with other sets, very quick addition of new elements, uniqness
3. lpush - linked list

4. hset - fast unified access to one set of object data, no key cluttering

5. regular set - controlled access to each field, conrolled ttl for each field, but possible key cluttering and annoying o get all fields of one object

6. Expire SETEX - setting ttl for a key

* **usecases**
1. leaderboard
2. tracking unqiue things, ip addresses
3. last visited, picked , looked on a site
4. storing queries, configs with TTL
5. specific values, rate limiting


## AI usage
- used ai to generate the insertMany statement for a lot of books in MongoDb
- used ai to get basic syntax for redis or mongo






