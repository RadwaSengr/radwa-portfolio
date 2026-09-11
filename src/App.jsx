import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Card from './Card';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer'; // 🌟 استيراد مكون الفوتر الجديد

function App() {
  // جلب اللغة والـ Theme من LocalStorage (وإذا لم يوجد، ضع الافتراضي)
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // التأثير الأول: تحديث الـ Theme في الـ DOM والـ LocalStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark'); 
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [theme]);

  // التأثير الثاني: تحديث اللغة واتجاه الصفحة في الـ DOM والـ LocalStorage
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // دوال التبديل التي سنمررها للـ Navbar
  const toggleTheme = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLang(prevLang => prevLang === 'en' ? 'ar' : 'en');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
      />
      
      <main className="container my-4 flex-grow-1">
        <Home lang={lang} />

        <section className="mb-5 text-center">
          <h3 className="text-primary fw-bold mb-4">
            {lang === 'en' ? 'Featured Highlights ✨' : 'أبرز المشاريع ✨'}
          </h3>
          <div className="row g-4 justify-content-center">
            <div className="col-md-5">
              <Card 
                title={lang === 'en' ? "React SPA 🌟" : "تطبيقات رياكت 🌟"} 
                text={lang === 'en' 
                  ? "Building fast, interactive single page applications with modern React practices." 
                  : "بناء تطبيقات تفاعلية وسريعة بصفحة واحدة باستخدام أحدث تقنيات رياكت."} 
                lang={lang}
              />
            </div>
            <div className="col-md-5">
              <Card 
                title={lang === 'en' ? "Bootstrap Design 🎨" : "تصميم بوتستراب 🎨"} 
                text={lang === 'en' 
                  ? "Creating beautiful responsive user interfaces with custom color themes." 
                  : "إنشاء واجهات مستخدم متجاوبة وجميلة مع ألوان مخصصة."} 
                lang={lang}
              />
            </div>
          </div>
        </section>

        <About lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <ScrollToTop />

      {/* 🌟 استخدام مكون الفوتر المنفصل الذي يحتوي على وسائل التواصل */}
      <Footer lang={lang} />
    </div>
  );
}

App.displayName = 'App';

export default App;