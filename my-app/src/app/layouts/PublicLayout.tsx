import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PageTemplate } from './PageTemplate';
import { ThemeSwitcher, useTheme } from '@app/components/theme';
export const PublicLayout: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header role="banner" className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">MyApp</Link>
          <nav aria-label="Main navigation" className="space-x-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer role="contentinfo" className="bg-white dark:bg-gray-800 border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600 dark:text-gray-300">
          <span>© 2025 MyApp</span>
          <span className="space-x-4">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </span>
        </div>
      </footer>
    </div>
  )
};
