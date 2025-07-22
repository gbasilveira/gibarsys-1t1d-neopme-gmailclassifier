import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Dashboard } from '../Dashboard';

describe('Dashboard', () => {
  it('renders dashboard title and description', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to your Gmail Graph-Classifier dashboard/)).toBeInTheDocument();
  });

  it('renders statistics cards', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('Emails Classified')).toBeInTheDocument();
    expect(screen.getByText('156')).toBeInTheDocument();
    expect(screen.getByText('People in Graph')).toBeInTheDocument();
  });

  it('renders quick actions section', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
    expect(screen.getByText('Classify Current Thread')).toBeInTheDocument();
    expect(screen.getByText('Chat with Assistant')).toBeInTheDocument();
    expect(screen.getByText('Manage Rules')).toBeInTheDocument();
  });
});