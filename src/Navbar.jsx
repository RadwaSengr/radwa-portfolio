function Navbar({ toggleTheme, isDarkMode, toggleLanguage, lang }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top mb-4 border-bottom border-primary-subtle">
      <div className="container">
        
        <a className="navbar-brand text-primary fw-bold fs-4" href="#home">
          <i className="fa-solid fa-code me-2"></i>
          {lang === 'en' ? 'Radwa Sengr' : 'رضوى سنجر'}
        </a>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#home">{lang === 'en' ? 'Home' : 'الرئيسية'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about">{lang === 'en' ? 'About' : 'عني'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#skills">{lang === 'en' ? 'Skills' : 'المهارات'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#education">{lang === 'en' ? 'Education' : 'التعليم'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#experience">{lang === 'en' ? 'Experience' : 'الخبرات'}</a>
            </li>
            <li className="nav-item">
  <a className="nav-link fw-semibold" href="#projects">
    {lang === 'en' ? 'Projects' : 'المشاريع'}
  </a>
</li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact">{lang === 'en' ? 'Contact' : 'تواصل معي'}</a>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0 d-flex gap-2">
              <button onClick={toggleTheme} className="btn btn-outline-primary btn-sm rounded-circle px-2" title={lang === 'en' ? 'Toggle Theme' : 'تغيير المظهر'}>
                {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
              </button>
              
              <button onClick={toggleLanguage} className="btn btn-outline-primary btn-sm fw-bold px-3" title={lang === 'en' ? 'Change Language' : 'تغيير اللغة'}>
                {lang === 'en' ? 'ع' : 'EN'}
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;