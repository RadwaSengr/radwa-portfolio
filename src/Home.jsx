import { useEffect, useState } from 'react';
import profilePic from './assets/Radwa-Sengr.jpeg';

function Home() {
  const headlineMessages = [
    'Front End Developer - React',
    'Web Designer',
    'UI Developer'
  ];
  const [activeMessage, setActiveMessage] = useState(0);

  useEffect(() => {
    const tickerTimer = window.setInterval(() => {
      setActiveMessage((current) => (current + 1) % headlineMessages.length);
    }, 2800);

    return () => window.clearInterval(tickerTimer);
  }, [headlineMessages.length]);

  return (
    <section id="home" className="py-5 rounded shadow-sm border border-primary mb-5 bg-body-tertiary">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-7 text-center text-lg-start mt-4 mt-lg-0">
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill mb-3">
              ✨ Welcome to My Portfolio
            </span>
            <h1 className="display-4 fw-bold text-primary mb-3">Hi, I'm Radwa Usama Sengr 💖</h1>

            <div className="headline-ticker mb-4" aria-live="polite">
              <span key={activeMessage} className="headline-ticker__text">
                {headlineMessages[activeMessage]}
              </span>
            </div>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <a href="#projects" className="btn btn-primary px-4 py-2 fw-bold">View My Projects 🚀</a>
              <a href="#contact" className="btn btn-outline-primary px-4 py-2 fw-bold">Contact Me 📬</a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div className="profile-photo-wrap">
              <img src={profilePic} alt="Radwa Sengr" className="img-fluid rounded-circle border border-3 border-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
