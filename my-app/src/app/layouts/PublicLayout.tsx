import React from "react"
import { Link, Outlet } from "react-router-dom"
import { Header } from "@/app/components/layout/Header"
import { useTheme } from "@/app/components/theme"

export const PublicLayout: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  function Children() {
    return (
      <>
        {/* لوگو + سوییچر تم */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-lg font-bold text-text"
          >
            MyApp
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="تغییر تم"
              className="
                rounded-md border border-neutral bg-base-soft
                px-2 py-1 text-sm
                transition-colors hover:bg-base-strong
              "
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        {/* ناوبری اصلی */}
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-4 text-sm text-muted"
        >
          <Link to="/blog" className="transition-colors hover:text-main">
            بلاگ
          </Link>
          <Link to="/faq" className="transition-colors hover:text-main">
            سوالات متداول
          </Link>
          <Link to="/about" className="transition-colors hover:text-main">
            درباره ما
          </Link>
          <Link to="/contact" className="transition-colors hover:text-main">
            تماس با ما
          </Link>
        </nav>
      </>
    )
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col bg-base">
      {/* هدر عمومی سایت */}
      <Header children={Children()} />

      {/* محتوای صفحه‌ها */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* فوتر */}
      <footer
        role="contentinfo"
        className="border-t border-neutral bg-base-strong"
      >
        <div className="container mx-auto flex flex-col justify-between gap-3 px-4 py-6 text-sm text-muted sm:flex-row">
          <span>© 2025 MyApp. تمامی حقوق محفوظ است.</span>
          <span className="flex gap-4">
            <Link
              to="/privacy"
              className="transition-colors hover:text-main"
            >
              حریم خصوصی
            </Link>
            <Link
              to="/terms"
              className="transition-colors hover:text-main"
            >
              شرایط استفاده
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
