# 4. Classification Workflow

1. **Trigger**  
   - User action OR n8n scheduled bulk job.

2. **Fetch email**  
   - `users.threads.get` with `format=full`.

3. **NER**  
   - spaCy model `en_core_web_lg` → entities.

4. **Graph match**  
   - Cosine similarity ≥ 0.85 to existing nodes; else raise suggestion.

5. **Rule evaluation**  
   - SQL join of email-bound nodes vs `node_rule` pattern edges.

6. **Label application**  
   - Batch `users.threads.modify` (100 threads / call).

7. **Audit log**  
   - n8n writes decision + latency to `classification_log` table.