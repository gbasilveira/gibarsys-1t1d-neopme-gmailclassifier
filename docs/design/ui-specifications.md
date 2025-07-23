# UI Specifications

[← Back to Main README](../../README.md)

## Overview

This document defines UI component specifications and interface standards for the Gmail Graph-Classifier Add-on using exclusively vanilla Fluent UI components.

## Design System Requirements

### Fluent UI Standards
- **Framework**: Microsoft Fluent UI 2.0 exclusively
- **Custom CSS**: Prohibited - use only Fluent UI design tokens and utilities
- **Custom Components**: Prohibited - use only official Fluent UI component library
- **Theme**: Standard Fluent UI theme without modifications
- **Icons**: Fluent UI System Icons only

### Implementation Constraints
- All styling must use Fluent UI design tokens
- Component composition using official Fluent UI components only
- No CSS overrides or custom styling permitted
- Consistent with Microsoft 365 design language

## Interface Components

### Gmail Add-on Interface
- Sidebar panel using Fluent UI layout components
- Classification controls using Fluent UI buttons and inputs
- Results display using Fluent UI cards and lists

### Rule Management Interface
- Natural language rule input using Fluent UI text areas
- Rule validation feedback using Fluent UI message bars
- Rule listing using Fluent UI data grids or lists

### Classification Results Interface
- Label application display using Fluent UI badges and tags
- Confidence indicators using Fluent UI progress indicators
- Action buttons using standard Fluent UI button variants

## Component Specifications

*Detailed component specifications using vanilla Fluent UI components will be added during development.*

## Related Documentation

- [UX Workflows](ux-workflows.md)
- [Design System](design-system.md)
- [System Design](../architecture/system-design.md)