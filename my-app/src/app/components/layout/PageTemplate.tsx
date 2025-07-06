import React, { ReactNode, useState } from 'react';

interface BreadcrumbItem { label: string; href?: string }
interface PageTemplateProps {
  title: string;
  breadcrumbItems?: BreadcrumbItem[];
  showSidebar?: boolean;
  children: ReactNode;
}

export function PageTemplate({
  title,
  breadcrumbItems = [],
  showSidebar = false,
  children,
}: PageTemplateProps) {
  const [sidebarOpen, setSidebarOpen] = useState(showSidebar);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">{title}</h1>
          {showSidebar && (
            <button
              className="md:hidden p-2 border rounded"
              onClick={() => setSidebarOpen((o) => !o)}
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
          )}
        </div>
        {breadcrumbItems.length > 0 && (
          <nav aria-label="Breadcrumb" className="bg-gray-100">
            <div className="container mx-auto px-4 py-2 text-sm text-gray-600">
              {breadcrumbItems.map((item, idx) => (
                <span key={idx}>
                  {item.href ? (
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                  {idx < breadcrumbItems.length - 1 && ' / '}
                </span>
              ))}
            </div>
          </nav>
        )}
      </header>

      <div className="container mx-auto px-4 flex flex-1 gap-6 py-6">
        {showSidebar && (
          <aside
            className={`w-64 bg-white shadow p-4 hidden md:block ${sidebarOpen ? 'block' : ''}`}
          >
            {/* Sidebar content */}
          </aside>
        )}
        <main className="flex-1">{children}</main>
      </div>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © 2025 Your Company
        </div>
      </footer>
    </div>
  );
}
