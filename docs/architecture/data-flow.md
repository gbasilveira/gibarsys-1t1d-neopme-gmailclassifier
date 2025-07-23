# Data Flow

[← Back to Main README](../../README.md) | [← Back to Architecture](system-design.md)

## Overview

This document describes data processing workflows and information flow through the Gmail Graph-Classifier system.

## Primary Data Flows

### Email Classification Flow
1. Email thread input
2. Content extraction and preprocessing
3. Graph entity recognition
4. Rule evaluation against knowledge graph
5. Label assignment and application

### Rule Creation Flow
1. Natural language rule input
2. LLM-based rule parsing
3. Graph entity mapping
4. Rule validation and storage

### Knowledge Graph Update Flow
1. New entity detection
2. Entity validation and enrichment
3. Graph relationship updates
4. Vector embedding generation

## Data Processing Patterns

*Detailed data flow diagrams and processing patterns will be added during development.*

## Related Documentation

- [System Design](system-design.md)
- [Integration Patterns](integration-patterns.md)
- [API Contracts](../implementation/api-contracts.md)