# 10. Chat-First UI

End-users never touch tables or forms.  
They chat with an in-add-on assistant that:

1. **Understands questions** ("Which rules tag invoices from ACME?")  
2. **Creates or edits rules** from NL ("Whenever Claire complains about Onboarding, tag as *Urgent-Onboarding*")  
3. **Runs ad-hoc queries** ("Show me all open auth issues for Product Y").

### UX Mock

```
User: If anyone from Company X mentions authentication about Product Y, label it Auth-ProdY
Assistant: Got it! New rule *Auth-ProdY* created.
User: Also flag any thread longer than 10 messages as Needs-Review
Assistant: Added rule *Needs-Review*. That one uses a length trigger instead of graph nodes.
```

### How it works under the hood

| Step | Responsibility |
|------|----------------|
| **NL input** | Captured from CardService `<TextInput>` → sent to n8n |
| **Agent** | Decides: *graph rule* → emit SQL edges **or** *free-form NL rule* → store as plain text in `node_rule.free_text` |
| **Executor** | At classification time, if a rule has `free_text` the agent is called again to interpret it on the fly |