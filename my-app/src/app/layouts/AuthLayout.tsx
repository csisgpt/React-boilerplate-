import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export interface AuthLayoutProps {
  title: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative p-4">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <header className="absolute top-4 left-4">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
    </header>
    <main className="w-full max-w-md">
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        <Outlet />
      </div>
    </main>
  </div>
);
