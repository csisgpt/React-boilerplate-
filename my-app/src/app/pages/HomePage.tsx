import React from "react"
import { Helmet } from "react-helmet-async"
import { PageTemplate } from "@/app/layouts"
import {
  HeroSection,
  FeatureGrid,
  TestimonialSlider,
} from "@/app/components/ui/blocks"
import { Button } from "@/app/components/ui/Button"

const features = [
  { title: "آنالیتیکس", description: "درک عمیق رفتار کاربران", icon: "📊" },
  { title: "اتوماسیون", description: "صرفه‌جویی در زمان با کمک هوش مصنوعی", icon: "⚙️" },
  { title: "امنیت", description: "حفاظت از داده‌ها در سطح سازمانی", icon: "🔒" },
  { title: "پشتیبانی", description: "همیشه در کنار شما هستیم", icon: "💬" },
]

const testimonials = [
  { quote: "این اپلیکیشن کسب‌وکار ما را متحول کرد!", name: "مریم رضایی" },
  { quote: "کارایی بالا و امکانات فوق‌العاده.", name: "علی احمدی" },
  { quote: "پشتیبانی عالی و رابط کاربری ساده و روان.", name: "سارا کریمی" },
]

export const HomePage: React.FC = () => (
  <div className="space-y-10">
    <Helmet>
      <title>صفحه اصلی – MyApp</title>
      <meta name="description" content="خوش آمدید به MyApp" />
    </Helmet>
    {/* Hero */}
    <HeroSection
      title="خوش آمدید به MyApp"
      subtitle="ابزارهای مدرن برای کسب‌وکارهای در حال رشد"
      ctaText="شروع کنید"
    />

    {/* ویژگی‌ها */}
    <FeatureGrid features={features} />

    {/* نظرات کاربران */}
    <section>
      <TestimonialSlider testimonials={testimonials} />
    </section>

    {/* فرم عضویت در خبرنامه */}
    <section className=" text-center my-20">
      <form className="inline-flex flex-col items-center justify-center gap-2 sm:flex-row">
        <input
          type="email"
          className="
            w-60 rounded-md border border-neutral bg-base-soft
            px-3 py-2 text-sm text-text placeholder:text-text-muted
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
          "
          placeholder="ایمیل شما"
          aria-label="ایمیل"
        />
        <Button type="submit">
          عضویت در خبرنامه
        </Button>
      </form>
    </section>
  </div>
)
