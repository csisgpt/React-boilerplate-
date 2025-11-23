import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { name: "ویژگی‌ها", href: "#features" },
    { name: "قیمت‌گذاری", href: "#pricing" },
    { name: "مستندات", href: "#" },
    { name: "مرجع API", href: "#" },
  ],
  company: [
    { name: "درباره ما", href: "#" },
    { name: "بلاگ", href: "#" },
    { name: "فرصت‌های شغلی", href: "#" },
    { name: "تماس با ما", href: "#" },
  ],
  legal: [
    { name: "حریم خصوصی", href: "#" },
    { name: "شرایط استفاده", href: "#" },
    { name: "امنیت", href: "#" },
    { name: "کوکی‌ها", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-neutral bg-base-soft">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* لوگو + توضیح کوتاه + سوشال‌ها */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-[color:var(--color-text-on-primary)]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold text-main">
                استریم‌لاین
              </span>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-muted">
              پلتفرم کامل برای نظم‌دهی به جریان کار و دیپلوی سریع‌تر محصولات
              نرم‌افزاری.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="transition-colors text-muted hover:text-main"
                aria-label="توییتر"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition-colors text-muted hover:text-main"
                aria-label="گیت‌هاب"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition-colors text-muted hover:text-main"
                aria-label="لینکدین"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ستون محصول */}
          <div>
            <h3 className="mb-4 font-semibold text-main">محصول</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-main"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted transition-colors hover:text-main"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ستون شرکت */}
          <div>
            <h3 className="mb-4 font-semibold text-main">شرکت</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-main"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted transition-colors hover:text-main"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ستون قوانین */}
          <div>
            <h3 className="mb-4 font-semibold text-main">قوانین و مقررات</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-main"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted transition-colors hover:text-main"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="mt-12 border-t border-neutral pt-8">
          <p className="text-center text-sm text-muted">
            © {new Date().getFullYear()} استریم‌لاین. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  )
}
