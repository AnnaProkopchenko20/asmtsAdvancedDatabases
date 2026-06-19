### Architecture Diagram

**Raw Files** (CSV) -> **Bronze Layer** (Append) -> **Silver Layer** (Clean/Filter) -> **Gold Layer** (Aggregated) -> **Analytics** (Dashboard)

### Data Flow Description

* **Ingestion (Bronze):** Raw daily CSV files are incrementally loaded; `ingestion_timestamp` and `source_file_name` are added.
* **Refinement (Silver):** Data is deduplicated, standardized (text fields trimmed/uppercased), and validated. Clean data merges into `silver.orders`; invalid data routes to `silver.rejected_orders`.
* **Aggregation (Gold):** Clean data is aggregated into business-level tables and dashboard.

### Data Quality Rules

* same as in the assignment requirements + uppercase/lowwercase some columns

### Assumptions

* **Optimization** Made a `silver.managers` table to demonstrate join optimization and kept the flat source table as requested
* **Primary Key:** Assumed `Row_ID` is a globally unique and reliable primary key for handling `MERGE` operations.

### Limitations

* **Compute Restrictions:** Serverless/Free Tier clusters restrict manual override of `spark.sql.autoBroadcastJoinThreshold` or other features useful for testing the broadcasts
* **Orchestration:** Manual notebook cell execution, no automated pipeline

## AI usage
- used ai to explain commons sense usage stuff of databrics
- used ai heavily to explain typical python usage to get what i want in databricks with pyspark
- used ai to tell about specific sql syntax of the databricks sql
- used ai to make a template to fill in for this md file