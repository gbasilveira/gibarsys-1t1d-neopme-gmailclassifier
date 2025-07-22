# 8. Security & Privacy

* **OAuth scopes** limited to `gmail.readonly`, `gmail.modify`.
* **User consent**: every bulk job is user-initiated → GDPR lawful basis = Legitimate Interest.
* **Data retention**: raw bodies kept ≤ 30 days; hashed threadId retained for metrics.
* **PII in logs**: sender/recipient addresses masked with SHA-256.
* **Secrets** stored in AWS Secrets Manager; rotated every 90 days.