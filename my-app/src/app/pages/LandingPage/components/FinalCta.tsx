import { Button } from "@/app/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section
      className="border-t border-neutral bg-base py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-strong bg-base-soft p-12 lg:p-20">
          {/* بک‌گراند ملایم با گرادیانت بر اساس رنگ‌های خودت */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-secondary)_0,_var(--color-base-soft)_55%,_transparent_70%)] opacity-70 dark:opacity-80" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-main sm:text-4xl lg:text-5xl">
              آماده‌ای جریان کار تیمت را متحول کنی؟
            </h2>
            <p className="mb-10 text-balance text-lg leading-relaxed text-muted">
              به صدها تیمی بپیوند که با استریم‌لاین سریع‌تر دیپلوی می‌کنند. همین
              امروز نسخهٔ آزمایشی رایگان را شروع کن – بدون نیاز به اطلاعات
              پرداخت.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group w-full sm:w-auto">
                شروع رایگان
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                رزرو دمو
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
