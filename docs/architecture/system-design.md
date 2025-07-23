# System Design

[← Back to Main README](../../README.md)

## Overview

This document outlines the core system architecture and component relationships for the Gmail Graph-Classifier Add-on.

## System Components

### Presentation Layer
- Gmail Add-on interface
- User interaction components
- Classification result display

### Orchestration Layer
- n8n workflow management
- Process coordination
- Event handling

### Domain Layer
- Classification logic
- Rule evaluation engine
- Graph-based reasoning

### Data Layer
- PostgreSQL with pgvector
- Knowledge graph storage
- Semantic search capabilities

### Integration Layer
- Gmail API integration
- LLM service connections
- External system interfaces

## Component Interactions

*Detailed component interaction diagrams and patterns will be added during development.*

## Related Documentation

- [Data Flow Patterns](data-flow.md)
- [Integration Patterns](integration-patterns.md)
- [Design System](../design/design-system.md)