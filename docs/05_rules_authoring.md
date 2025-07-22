# 5. Authoring Rules (Natural Language)

Users write rules by **talking** to the assistant, not by filling forms.

```text
User: "If any email from *@companyx.com* mentions authentication, label Auth-CompanyX"
```

The assistant chooses one of two code paths:

| Path               | When chosen                                                                                                     | Storage                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Graph rule**     | Utterance can be mapped to existing node types (Company / Topic / Project / Person)                             | Inserts edges in `edge` table                                      |
| **Free-text rule** | Utterance mentions criteria outside the graph schema (e.g., "thread length > 10", "contains attachment > 5 MB") | Stores plain English in `node_rule.free_text`; `pattern_type='NL'` |

### Prompt sent to LLM

```json
{
  "task": "create_rule",
  "text": "If anyone from Company X ...",
  "available_nodes": ["company", "topic", "project", "label"]
}
```

### LLM response → SQL upserts

```json
{ "rule":
  { "name": "Auth-ProdY",
    "edges": [
      {"type":"RULE_HAS_COMPANY", "dst":"Company:CompanyX"},
      {"type":"RULE_HAS_TOPIC",   "dst":"Topic:Authentication"},
      {"type":"RULE_HAS_PROJECT", "dst":"Project:ProductY"},
      {"type":"TRIGGERS_LABEL",   "dst":"Label:Auth-ProductY"}
]}}
```

n8n then executes `/sql/upsert_rule.sql`.

### Runtime evaluation of NL rules

1. n8n passes email metadata + body + `free_text` rule to the agent.
2. Agent returns `match: true/false`.
3. If **true** → apply label.
   If **false** → next rule.