# Gmail Graph-Classifier Add-on Boilerplate

A modern React + TypeScript boilerplate for the Gmail Graph-Classifier Add-on, built with Vite and FluentUI.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **UI Framework**: Microsoft FluentUI 2.0
- **State Management**: Zustand with devtools
- **Testing**: Vitest + Testing Library
- **Code Quality**: ESLint + Prettier + Husky
- **Type Safety**: Strict TypeScript configuration
- **Accessibility**: WCAG 2.1 AA compliant components

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Layout.tsx      # Main layout with navigation
│   ├── Dashboard.tsx   # Dashboard overview
│   ├── ClassificationPanel.tsx  # Email classification interface
│   ├── ChatAssistant.tsx       # AI chat interface
│   ├── Settings.tsx    # Settings panel
│   └── __tests__/      # Component tests
├── services/           # API services
│   └── api.ts         # Axios-based API client
├── stores/            # State management
│   └── appStore.ts    # Zustand store
├── hooks/             # Custom React hooks
│   └── useApi.ts      # API hooks with error handling
├── types/             # TypeScript type definitions
│   └── index.ts       # Core application types
├── utils/             # Utility functions
│   └── index.ts       # Common utilities
├── styles/            # Global styles
│   └── global.css     # FluentUI theme + custom styles
└── test/              # Test configuration
    └── setup.ts       # Vitest setup
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - TypeScript type checking
- `npm run format` - Format code with Prettier

## 🎨 Design System

The boilerplate follows the FluentUI design system with:

- **Color Palette**: Semantic color tokens
- **Typography**: Segoe UI Variable font family
- **Spacing**: Consistent spacing scale
- **Components**: FluentUI components with custom styling
- **Accessibility**: WCAG 2.1 AA compliance

### Key Design Principles

- **Professional Excellence**: Enterprise-grade visual design
- **Cognitive Clarity**: Intuitive information hierarchy
- **Operational Efficiency**: Streamlined workflows
- **Universal Accessibility**: Inclusive design

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
VITE_API_ENDPOINT=http://localhost:3001
VITE_APP_NAME=Gmail Graph-Classifier
```

### TypeScript Configuration

- Strict mode enabled
- Path mapping for clean imports
- No `any` types allowed
- Comprehensive type definitions

### ESLint Configuration

- TypeScript-aware linting
- React hooks rules
- Prettier integration
- Strict code quality standards

## 🧪 Testing

The boilerplate includes comprehensive testing setup:

- **Vitest**: Fast unit testing
- **Testing Library**: React component testing
- **Coverage**: 100% coverage requirements
- **Mocking**: API service mocking

### Test Structure

```typescript
// Example test
describe('Dashboard', () => {
  it('renders dashboard title', () => {
    render(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
```

## 📦 API Integration

The boilerplate includes a complete API service layer:

- **Axios**: HTTP client with interceptors
- **Error Handling**: Comprehensive error management
- **Type Safety**: Fully typed API responses
- **Authentication**: Token-based auth support

### API Services

- Classification service
- Gmail integration
- Chat assistant
- Rules management

## 🚀 Deployment

### Build Process

```bash
# Production build
npm run build

# Preview build
npm run preview
```

### Deployment Options

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: CloudFlare, AWS CloudFront
- **Container**: Docker with nginx

## 🔒 Security

- **Content Security Policy**: CSP headers
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Token-based requests
- **HTTPS**: Secure communication

## 📚 Documentation

- **Component Documentation**: JSDoc comments
- **API Documentation**: TypeScript interfaces
- **Architecture**: Component diagrams
- **Guidelines**: Coding standards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow coding standards
4. Add tests for new features
5. Submit a pull request

### Code Standards

- **TDD**: Test-driven development
- **Type Safety**: Strict TypeScript
- **Documentation**: Comprehensive comments
- **Accessibility**: WCAG compliance

## 📄 License

MIT © 2025 Your Company

---

For more information, see the main [README.md](README.md) and documentation in the `docs/` folder.