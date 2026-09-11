import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-top-button btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center"
      style={{ zIndex: 1000, width: '45px', height: '45px' }}
      title="Back to Top"
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}

export default ScrollToTop;
