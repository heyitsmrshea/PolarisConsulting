# Polaris Consulting Website

A completely revamped, modern website for Polaris Consulting—a senior-led cybersecurity and IT services provider for growing organizations (20-150 users). Built with React, TypeScript, Vite, and Tailwind CSS.

## 🎯 Complete Website Revamp

This website addresses **20 critical UI/graphic design/marketing issues** identified in the original site, including:
- Weak hero section and value proposition
- Poor visual hierarchy and lack of compelling imagery
- Inadequate trust signals and social proof
- Generic service descriptions
- Weak mobile experience
- And 15 more critical issues (see `DESIGN_ANALYSIS.md`)

## ✨ Features

- 🎨 **Modern, Security-Focused Design** - Professional UI with trust-building elements
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast load times
- 🎯 **TypeScript** - Type-safe code for reliability
- 💨 **Tailwind CSS v4** - Modern utility-first styling
- 🔒 **Trust Signals** - SOC 2, certifications, and social proof prominently displayed
- 📊 **Interactive Elements** - Smooth animations and micro-interactions
- 🎯 **Clear CTAs** - Strategic call-to-action placement throughout
- 🏢 **Industry-Specific** - Tailored messaging for target industries
- 🚀 **SEO Optimized** - Proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd PolarisConsulting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## Deployment to GitHub Pages

1. Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Update `vite.config.ts` with base path:
```typescript
export default defineConfig({
  base: '/PolarisConsulting/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure

```
PolarisConsulting/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── App.tsx      # Main application component
│   ├── App.css      # App-specific styles
│   ├── index.css    # Global styles with Tailwind
│   └── main.tsx     # Application entry point
├── index.html       # HTML template
└── package.json     # Dependencies and scripts
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## License

This project is private and proprietary.
