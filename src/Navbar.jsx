import { useState } from 'react';

function Navbar({ toggleTheme, theme }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  const links = [
    ['home', 'Home'],
    ['about', 'About'],
    ['education', 'Education'],
    ['experience', 'Experience'],
    ['certificates', 'Certificates'],
    ['skills', 'Skills'],
    ['projects', 'Projects'],
    ['contact', 'Contact'],
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top mb-4 border-bottom border-primary-subtle">
      <div className="container">
        <a className="navbar-brand text-primary fw-bold fs-4" href="#home" onClick={closeNav}>
          <i className="fa-solid fa-code me-2"></i>Radwa Sengr
        </a>

        <div className="d-flex align-items-center gap-2 ms-auto order-lg-3">
          <button
            onClick={toggleTheme}
            className="btn btn-outline-primary btn-sm rounded-circle px-2"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fa-solid fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsNavOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse order-lg-2 ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {links.map(([id, label]) => (
              <li className="nav-item" key={id}>
                <a className="nav-link fw-semibold" href={`#${id}`} onClick={closeNav}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
