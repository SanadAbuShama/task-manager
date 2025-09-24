# Task Manager

A modern, full-featured task management application built with React, TypeScript, and Tailwind CSS. This project demonstrates advanced frontend development skills including authentication, internationalization, responsive design, and state management.

## 🚀 Features

- **Authentication System**: Secure login/signup with protected routes
- **Multi-language Support**: English and Arabic with RTL support
- **Dark/Light Theme**: Toggle between themes with persistent preferences
- **Task Management**: Create, edit, delete, and organize tasks
- **Custom Status System**: Create and manage custom task statuses with colors
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Data Tables**: Sortable, paginated task tables with advanced filtering
- **Form Validation**: Comprehensive form handling with React Hook Form + Zod

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Radix UI components
- **Routing**: React Router v7 with protected routes
- **State Management**: React Context API
- **Forms**: React Hook Form with Zod validation
- **Internationalization**: i18next with dynamic language switching
- **Build Tool**: Vite
- **Code Quality**: ESLint + TypeScript strict mode

## 📦 Key Dependencies

- `@tanstack/react-table` - Advanced data table functionality
- `@radix-ui/*` - Accessible, unstyled UI primitives
- `react-hook-form` + `zod` - Type-safe form handling
- `i18next` - Internationalization framework
- `lucide-react` - Modern icon library
- `vaul` - Mobile-friendly drawer component

## 🏗️ Architecture

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── forms/          # Form components with validation
│   ├── tasks/          # Task-specific components
│   └── ui/             # Base UI components (Radix-based)
├── context/            # React Context providers
│   ├── auth/           # Authentication state
│   ├── language/       # Internationalization
│   ├── theme/          # Theme management
│   └── tasks/          # Task state management
├── pages/              # Route components
├── translations/       # i18n translation files
└── hooks/              # Custom React hooks
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

## ✨ Highlights

- **Type Safety**: Full TypeScript implementation with strict configuration
- **Accessibility**: Built with Radix UI primitives for screen reader support
- **Performance**: Lazy loading, code splitting, and optimized re-renders
- **UX**: Smooth animations, loading states, and responsive interactions
- **Code Quality**: Consistent ESLint rules and TypeScript best practices

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first CSS approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography scaling

## 🌐 Internationalization

- Dynamic language switching without page refresh
- RTL support for Arabic
- Persistent language preferences
- Comprehensive translation coverage

---

*Built as a demonstration of modern React development practices and frontend engineering skills.*