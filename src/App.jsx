import { useState } from 'react';
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

function App() {
  const [lang, setLang] = useState('en'); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    
    if (nextTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark'); 
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode}
        toggleLanguage={toggleLanguage}
        lang={lang}
      />
      
      <main className="container my-4">
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

      <footer className="bg-white text-center py-4 border-top border-primary mt-auto">
        <div className="container">
          <div className="d-flex justify-content-center gap-4 mb-2">
            <a href="mailto:radwasengr44@gmail.com" className="text-primary fs-3 card-hover" title="Email Me">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/radwa-s-2b4079306" target="_blank" rel="noopener noreferrer" className="text-primary fs-3 card-hover" title="LinkedIn Profile">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/RadwaSengr" target="_blank" rel="noopener noreferrer" className="text-primary fs-3 card-hover" title="GitHub Profile">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.facebook.com/share/19WkpMHX4a/" target="_blank" rel="noopener noreferrer" className="text-primary fs-3 card-hover" title="Facebook Profile">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          
          <p className="text-primary mb-0 mt-2 fw-semibold">
            {lang === 'en' 
              ? '© 2026 | Built with 💖 by Radwa Usama Sengr' 
              : '© 2026 | صُنع بحب 💖 بواسطة رضوى أسامة سنجر'}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;