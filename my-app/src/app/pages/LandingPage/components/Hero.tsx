import { Button } from "@/app/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-base"
    >
      {/* بک‌گراند ملایم با استفاده از توکن‌های تم */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-secondary)_0,_var(--color-base)_55%)] opacity-30 dark:opacity-40" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge بالای هدر */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral bg-base-soft/80 px-4 py-1.5 text-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-strong" />
            </span>
            <span className="text-muted">
              اکنون در نسخهٔ بتای عمومی
            </span>
          </div>

          {/* تیتر اصلی */}
          <h1 className="mb-6 text-balance leading-20 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            پلتفرم کامل برای{" "}
            <span className="text-primary">
              نظم‌دهی
            </span>{" "}
            به جریان کار تیم شما
          </h1>

          {/* توضیح زیر تیتر */}
          <p className="mx-auto mb-10 max-w-2xl text-balance text-lg sm:text-xl leading-relaxed text-muted">
            استریم‌لاین به تیم شما کمک می‌کند سریع‌تر بسازید، استقرار دهید و مقیاس
            بدهید. تمام ابزارها و زیرساخت لازم را در یک جا فراهم می‌کند تا
            ایده‌های خام را به محصول آماده‌ی استفاده تبدیل کنید.
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto">
              شروع نسخهٔ آزمایشی رایگان
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              مشاهدهٔ دمو
            </Button>
          </div>

          {/* نکات کوچک زیر هرو */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[color:var(--color-secondary-strong)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>۱۴ روز استفادهٔ رایگان</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[color:var(--color-secondary-strong)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>بدون نیاز به اطلاعات پرداخت</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
