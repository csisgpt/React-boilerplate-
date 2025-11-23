import { Button } from "@/app/components/ui/Button"
import { useTheme } from "@/app/components/theme"

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-border/60 backdrop-blur-lg bg-base-soft/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + عنوان + سوئیچر تم */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-text-on-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="تغییر تم"
                className="p-1.5 rounded-lg bg-base-strong/70 border border-neutral-border/60 text-text hover:bg-base-strong/90 transition-colors"
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
            </div>

            <span className="text-xl font-semibold text-text">
              استریم‌لاین
            </span>
          </div>

          {/* منو */}
          <nav className="hidden md:flex items-center gap-6 text-text-muted [&>*]:hover:text-primary">
            <a href="#features" className="text-sm transition-colors">
              ویژگی‌ها
            </a>
            <a href="#testimonials" className="text-sm transition-colors">
              تجربه‌ مشتریان
            </a>
            <a href="#pricing" className="text-sm transition-colors">
              قیمت‌گذاری
            </a>
            <a href="#" className="text-sm transition-colors">
              مستندات
            </a>
          </nav>

          {/* دکمه‌ها */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-text-muted hover:text-primary"
            >
              ورود
            </Button>
            <Button size="sm">
              شروع کنید
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
