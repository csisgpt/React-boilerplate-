# React Vite Starter

This project provides a boilerplate React application powered by Vite and TypeScript. It includes TailwindCSS v4, ESLint, Prettier, path aliases, Husky pre-commit hooks, and a VS Code DevContainer for a smooth development experience.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [npm](https://www.npmjs.com/)

## Getting Started

```bash
npm install
npm run dev       # start development server
npm run build     # build for production
npm run lint      # run ESLint and Prettier
```

## Environment Variables

Create a `.env.local` file for local overrides. All client-exposed variables must begin with `VITE_APP_`.

Example `.env`:

```
VITE_APP_API_URL=https://api.example.com
```

## VS Code DevContainer

Open the project in VS Code and choose **Reopen in Container** if you have the Dev Containers extension installed. The container installs dependencies automatically and forwards port 3000 for the Vite server.
