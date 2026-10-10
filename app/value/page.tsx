import Link from "next/link";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-zinc-900 font-sans" dir="rtl">
      {/* الترويسة العلوية / Navigation Bar */}
      <header className="w-full px-4 py-3 sticky top-0 z-50">
        <nav
          dir="rtl"
          className="max-w-6xl mx-auto bg-stone-100/80 backdrop-blur-md border border-stone-200/60 shadow-lg shadow-black/5 rounded-full px-5 py-2.5 flex items-center justify-between gap-6"
        >
          {/* الشعار */}
          <Link href="/" className="font-extrabold text-lg text-zinc-900 tracking-tight shrink-0 flex items-center gap-2">
            <img
              src="/assets/image.png"
              alt="عمران"
              className="w-12 h-12 rounded-full object-cover border border-black shadow-sm animate-logo-pop"
            />
             
          </Link>

          {/* الروابط في المنتصف بأزرار تفاعلية ناعمة */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-20 bg-stone-200/50 p-1 px-4 rounded-full border border-stone-200/40">
            <Link href="/services" className="px-4 py-1.5 text-base font-semibold text-zinc-700 rounded-full hover:bg-white hover:text-zinc-950 hover:shadow-xs transition-all">
              خدماتنا
            </Link>
            <Link href="/projects" className="px-4 py-1.5 text-base font-semibold text-zinc-700 rounded-full hover:bg-white hover:text-zinc-950 hover:shadow-xs transition-all">
              مشاريع البناء
            </Link>
            <Link href="/properties" className="px-4 py-1.5 text-base font-semibold text-zinc-700 rounded-full hover:bg-white hover:text-zinc-950 hover:shadow-xs transition-all">
              العقارات
            </Link>
            <Link href="/about" className="px-4 py-1.5 text-base font-semibold text-zinc-700 rounded-full hover:bg-white hover:text-zinc-950 hover:shadow-xs transition-all">
              من نحن
            </Link>
          </div>

          {/* السوشيال ميديا + زر التواصل */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-stone-300">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-stone-300/80 flex items-center justify-center text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1FC12u9qwE/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-stone-300/80 flex items-center justify-center text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-xs md:text-sm font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-transform active:scale-95 shadow-xs"
            >
              تواصل معنا
            </Link>
          </div>
        </nav>
      </header>

      {/* قسم العرض الرئيسي (Hero Section) بحواف مقوسة علوية وصورة خلفية معمارية */}
      <main className="max-w-7xl mx-auto px-4 mt-2">
        <div className="relative w-full h-[620px]  flex justify-center overflow-hidden ">
          {/* صورة خلفية للبناء والعمارة الحديثة */}
          <img
            src="/assets/2.png"
            alt="عقارات وتطوير عمراني"
            className="w-full h-full object-contain"
          />

          {/* تدرج لوني للنصوص */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-12 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
              نبني المستقبل، ونختار لك أرقى المساحات العقارية
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 max-w-xl">
              حلول إنشائية مبتكرة واستشارات عقارية متكاملة لتحويل رؤيتك إلى واقع ملموس بأعلى معايير الجودة.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-100 transition">
                استكشف المشاريع
              </button>
              <button className="px-6 py-3 bg-black/40 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-black/60 transition">
                طلب استشارة
              </button>
            </div> */}
          {/* </div> */}
        </div>
      </main>
    </div>
  );
}