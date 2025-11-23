import { Button } from "@/app/components/ui/Button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "استارتر",
    price: "29",
    description: "مناسب برای پروژه‌های شخصی و تیم‌های کوچک",
    features: [
      "تا ۵ عضو در تیم",
      "۱۰ گیگابایت فضای ذخیره‌سازی",
      "آنالیتیکس پایه",
      "پشتیبانی ایمیلی",
      "SLA آپ‌تایم ۹۹.۹٪",
    ],
    cta: "شروع نسخهٔ آزمایشی رایگان",
    popular: false,
  },
  {
    name: "حرفه‌ای",
    price: "99",
    description: "برای تیم‌های در حال رشد که به قدرت و امکانات بیشتری نیاز دارند",
    features: [
      "تا ۲۵ عضو در تیم",
      "۱۰۰ گیگابایت فضای ذخیره‌سازی",
      "آنالیتیکس پیشرفته",
      "پشتیبانی اولویت‌دار",
      "SLA آپ‌تایم ۹۹.۹۹٪",
      "یکپارچه‌سازی‌های سفارشی",
    ],
    cta: "شروع نسخهٔ آزمایشی رایگان",
    popular: true,
  },
  {
    name: "سازمانی",
    price: "Custom", // از این مقدار فقط برای منطق استفاده می‌کنیم
    description: "برای سازمان‌هایی با نیازهای پیچیده و در سطح Enterprise",
    features: [
      "اعضای تیم نامحدود",
      "فضای ذخیره‌سازی نامحدود",
      "آنالیتیکس سفارشی",
      "پشتیبانی ۲۴/۷ اختصاصی",
      "SLA آپ‌تایم ۹۹.۹۹۹٪",
      "یکپارچه‌سازی‌های کاملاً سفارشی",
      "SSO و امکانات امنیت پیشرفته",
    ],
    cta: "تماس با واحد فروش",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-neutral bg-base py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* هدر بخش قیمت‌گذاری */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-main sm:text-4xl lg:text-5xl">
            قیمت‌گذاری ساده و شفاف
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            پلنی را انتخاب کنید که با نیازهای تیم شما سازگار است. همهٔ پلن‌ها شامل
            ۱۴ روز استفادهٔ رایگان هستند.
          </p>
        </div>

        {/* کارت‌های پلن‌ها */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border p-8 transition-all ${
                plan.popular
                  ? "border-secondary-strong bg-base-soft shadow-lg scale-[1.02]"
                  : "border-neutral bg-base-soft hover:border-neutral-strong hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-[color:var(--color-text-on-primary)] shadow-sm">
                    محبوب‌ترین انتخاب
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-main">
                  {plan.name}
                </h3>
                <p className="mb-4 text-sm text-muted">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-4xl font-bold text-main">
                      ${plan.price}
                    </span>
                  )}
                  {plan.price === "Custom" && (
                    <span className="text-3xl font-bold text-main">
                      قیمت توافقی
                    </span>
                  )}
                  {plan.price !== "Custom" && (
                    <span className="text-muted text-sm">/ماه</span>
                  )}
                </div>
              </div>

              <Button
                className="mb-6 w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-secondary-strong)]" />
                    <span className="text-sm text-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
