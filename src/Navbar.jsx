import { useState } from 'react';

function Navbar({ toggleTheme, isDarkMode, toggleLanguage, lang }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top mb-4 border-bottom border-primary-subtle">
      <div className="container">
        
        <a className="navbar-brand text-primary fw-bold fs-4" href="#home" onClick={closeNav}>
          <i className="fa-solid fa-code me-2"></i>
          {lang === 'en' ? 'Radwa Sengr' : 'رضوى سنجر'}
        </a>
        
        <div className="d-flex align-items-center gap-2 ms-auto me-3 order-lg-2">
          <button 
            onClick={toggleTheme} 
            className="btn btn-outline-primary btn-sm rounded-circle px-2" 
            title={lang === 'en' ? 'Toggle Theme' : 'تغيير المظهر'}
          >
            {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>
          
          <button 
            onClick={toggleLanguage} 
            className="btn btn-outline-primary btn-sm fw-bold px-3" 
            title={lang === 'en' ? 'Change Language' : 'تغيير اللغة'}
          >
            {lang === 'en' ? 'ع' : 'EN'}
          </button>
        </div>
        
        <button 
          className="navbar-toggler border-0 order-lg-3" 
          type="button" 
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* روابط القائمة */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} order-lg-1`}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#home" onClick={closeNav}>{lang === 'en' ? 'Home' : 'الرئيسية'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about" onClick={closeNav}>{lang === 'en' ? 'About' : 'عني'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#skills" onClick={closeNav}>{lang === 'en' ? 'Skills' : 'المهارات'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#education" onClick={closeNav}>{lang === 'en' ? 'Education' : 'التعليم'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#experience" onClick={closeNav}>{lang === 'en' ? 'Experience' : 'الخبرات'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#projects" onClick={closeNav}>{lang === 'en' ? 'Projects' : 'المشاريع'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact" onClick={closeNav}>{lang === 'en' ? 'Contact' : 'تواصل معي'}</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;