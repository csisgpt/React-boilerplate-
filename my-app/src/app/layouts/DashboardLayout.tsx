import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDisclosure } from '@/app/components/feedback/useDisclosure';
import { useTheme } from '@/app/components/theme';

export const DashboardLayout: React.FC = () => {
  const { isOpen, toggle } = useDisclosure(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <aside
        role="navigation"
        className={`bg-white dark:bg-gray-800 w-64 p-4 space-y-2 shadow-md md:block ${isOpen ? 'block' : 'hidden'}`}
      >
        <nav className="space-y-2">
          <Link to="/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/profile" className="block hover:underline">
            Profile
          </Link>
          <Link to="/settings" className="block hover:underline">
            Settings
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header role="banner" className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
          <button className="md:hidden" onClick={toggle} aria-label="Toggle sidebar">
            ☰
          </button>
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded bg-gray-200 dark:bg-gray-700">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <img src="https://via.placeholder.com/32" alt="User" className="rounded-full" />
          </div>
        </header>
        <main className="flex-1 p-4 grid gap-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
