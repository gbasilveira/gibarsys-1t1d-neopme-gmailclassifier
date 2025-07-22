# 9. FAQ

### "Why not use Gmail's built-in categories?"

They're fixed to *Primary, Social, Promotions …* and can't be managed by API.
Custom labels give full flexibility.

### "Does the add-on run continuously?"

No. Google's Limited Use policy disallows background scraping.  
Each classification run is triggered by an explicit user action.

### "How do I add a new Topic?"

Just mention it in a rule; if NER can't map it, you'll see a **Suggested Entity** card to approve.

### "Can I write rules the assistant doesn't understand?"

Yes. If the rule can't be translated into graph edges, it's stored verbatim.  
At classification time the assistant rereads the NL rule and decides whether each email matches.