const testimonials = [
  {
    quote:
      "استریم‌لاین نحوه‌ی دیپلوی کد در تیم ما را کاملاً تغییر داد. زمان استقرار تا ۸۰٪ کم شده و تمرکز توسعه‌دهنده‌ها از کارهای تکراری برگشته روی خود محصول.",
    author: "سارا چن",
    role: "مدیر فنی (CTO)، TechCorp",
    avatar: "/imam.webp",
  },
  {
    quote:
      "بهترین سرمایه‌گذاری ما روی زیرساخت در چند سال اخیر بود. بازگشت سرمایه در همان ماه اول کاملاً مشخص بود. برای هر تیم در حال رشد پیشنهادش می‌کنم.",
    author: "مایکل رودریگز",
    role: "معاون فنی، DataFlow",
    avatar: "/imam.webp",
  },
  {
    quote:
      "کل پلتفرم‌مان را در یک آخر هفته منتقل کردیم. تجربه‌ی توسعه فوق‌العاده است و تیم پشتیبانی هم سریع و همراه است.",
    author: "امیلی واتسون",
    role: "توسعه‌دهنده ارشد، CloudSync",
    avatar: "/imam.webp",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-neutral bg-base py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* هدر بخش */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-main sm:text-4xl lg:text-5xl">
            اعتماد تیم‌های پیشرو در صنعت
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            فقط به حرف ما اکتفا نکنید؛ ببینید تیم‌هایی که از استریم‌لاین استفاده
            می‌کنند چه تجربه‌ای دارند.
          </p>
        </div>

        {/* کارت‌های نظر مشتریان */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-6 rounded-xl border border-neutral bg-base-soft p-8 transition-all hover:border-neutral-strong"
            >
              <div >
                <svg
                  className="h-8 w-8 text-[color:var(--color-secondary-strong)] opacity-40"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>

              <blockquote className="leading-relaxed text-main">
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full border border-neutral"
                />
                <div>
                  <div className="font-semibold text-main">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
