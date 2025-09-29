# EGC India - Official Website

This repository contains the source code for the official website of **EGC India (Econs Gateway Commercial Services Pvt. Ltd.)**. The website is a modern, responsive single-page application built with React, Vite, and TypeScript. It showcases the company's dual focus on global commercial services and innovative technology platforms.

## Overview

EGC India is a technology-driven company that provides comprehensive solutions in two main areas:

1.  **Commercial Services**: Specializing in EXIM (Export-Import) Gateway solutions, Procure-to-Pay (P2P), Order-to-Cash (O2C), and trade advisory.
2.  **IT & Technology**: Developing and launching a suite of digital platforms, including **Econs EXIM Gateway**, **BuildMate (BxC)**, **PetSure**, **HerRidez**, and more.

This website serves as the primary digital presence for EGC India, providing information about its services, platforms, partners, and company vision.

## ✨ Key Features

- **Responsive Design**: A fully responsive layout that works on all devices, from mobile phones to desktop screens, built with Tailwind CSS.
- **Interactive UI**: Smooth animations and page transitions powered by Framer Motion for an engaging user experience.
- **Component-Based Architecture**: Built with a robust set of reusable UI components from **Shadcn/ui**, ensuring consistency and maintainability.
- **Fast & Modern Toolchain**: Utilizes Vite with SWC for a fast development server and optimized production builds.
- **Client-Side Routing**: A seamless Single Page Application (SPA) experience handled by React Router DOM.

## 🚀 Technology Stack

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Linting/Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 📂 Project Structure

The project follows a standard React application structure, with key directories organized for clarity and scalability.

```
/src
├── assets/          # Static assets like images and logos
├── components/      # Reusable components (UI primitives, layout parts)
│   ├── ui/          # Shadcn/ui components
│   ├── header/      # Header components
│   └── footer/      # Footer components
├── config/          # Site-wide configuration (nav links, text, etc.)
├── hooks/           # Custom React hooks
├── layouts/         # Main application layout structure
├── lib/             # Utility functions
├── pages/           # Route-specific page components
└── routes/          # Application routing configuration
```

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later)
- npm or a compatible package manager

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/EGC-india/egcindia-website.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd egcindia
    ```

3.  **Install dependencies:**

    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

The following scripts are available in the `package.json`:

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the TypeScript code and builds the application for production.
- `npm run lint`: Lints the entire codebase using ESLint.
- `npm run preview`: Serves the production build locally to preview it.
- `npm run format`: Formats all files using Prettier.

## 📦 Deployment

This project is configured for seamless deployment on [Vercel](https://vercel.com). The `vercel.json` file includes a rewrite rule to ensure that all client-side routes are correctly handled, which is standard for SPAs.
