# 3. Graph Data Model

## Node tables

| Table | Key columns | Notes |
|-------|-------------|-------|
| `node_person`     | `id, display_name, emails[], company_id, embedding` | |
| `node_company`    | `id, name, domains[], embedding`                    | |
| `node_project`    | `id, name, company_id, status, embedding`           | |
| `node_topic`      | `id, stem, embedding`                               | |
| `node_label`      | `id (PK), gmail_label_id, display`                  | |
| `node_rule`       | `id, name, description, created_by`                 | |

`edge (src_table, src_id, rel_type, dst_table, dst_id)` stores all relationships.

## ER diagram

![Graph schema](img/graph_schema.png)

### Embeddings

We store a 768-dimensional `vector` per node:  
```sql
ALTER TABLE node_topic ADD COLUMN embedding vector(768);
```

Used for fuzzy look-ups when NER finds "Prod Y", "Product-Y", etc.

### Schema Extensions

```sql
ALTER TABLE node_rule ADD COLUMN free_text text;      -- null for graph rules
ALTER TABLE node_rule ADD COLUMN pattern_type text    -- 'GRAPH' (default) | 'NL'
```