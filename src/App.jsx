import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Certificates from './Certificates';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }, [theme]);

  const toggleTheme = () => setTheme((previousTheme) => previousTheme === 'light' ? 'dark' : 'light');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="container my-4 flex-grow-1">
        <Home />
        <About />
        <Education />
        <Experience />
         <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

App.displayName = 'App';

export default App;
