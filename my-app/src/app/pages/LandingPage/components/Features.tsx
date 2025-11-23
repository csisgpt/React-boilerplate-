import { Zap, Shield, Rocket, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "سرعت خیره‌کننده",
    description:
      "دیپلوی در چند ثانیه با زیرساخت بهینه‌شده. تجربه‌ی بیلد تا ۱۰ برابر سریع‌تر و بازگشت فوری به نسخه‌های قبلی.",
  },
  {
    icon: Shield,
    title: "امنیت در سطح سازمانی",
    description:
      "رمزنگاری در سطح بانک‌ها، انطباق با استانداردهای امنیتی و به‌روزرسانی خودکار برای حفاظت از داده‌های حساس شما.",
  },
  {
    icon: Rocket,
    title: "مقیاس‌پذیری بدون دردسر",
    description:
      "زیرساخت خودکار مقیاس‌پذیر که همراه رشد شما بزرگ می‌شود. مدیریت میلیون‌ها درخواست بدون فشار و استرس.",
  },
  {
    icon: Users,
    title: "همکاری تیمی یکپارچه",
    description:
      "ابزارهای همکاری لحظه‌ای، اتصال روان به Git و اتوماسیون قدرتمند برای ساده‌کردن جریان کار تیم توسعه.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-neutral py-20 lg:py-32 bg-base"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* هدر بخش ویژگی‌ها */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-main sm:text-4xl lg:text-5xl">
            هر آنچه برای تحویل سریع‌تر محصول نیاز دارید
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            مجموعه‌ای از قابلیت‌های قدرتمند برای تیم‌های توسعه‌ی مدرن. تنظیمات تکراری را
            کنار بگذارید و روی نوآوری و ساخت محصول تمرکز کنید.
          </p>
        </div>

        {/* کارت ویژگی‌ها */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative cursor-pointer rounded-xl border border-neutral bg-base-soft p-8 transition-all hover:border-neutral-strong hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center  bg-base-strong rounded-lg text-secondary-strong transition-all group-hover:scale-110 group-hover:bg-secondary group-hover:text-base">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold ">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



