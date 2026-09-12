import { useEffect, useState } from 'react';
import profilePic from './assets/Radwa-Sengr.jpeg';

const headlineMessages = [
  'Front End Developer - React',
  'Web Designer',
  'UI Developer'
];

function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentMessage = headlineMessages[loopNum % headlineMessages.length];
    let timer;

    if (!isDeleting && text === currentMessage) {
      // الانتظار 1.8 ثانية بعد اكتمال الجملة قبل بدء المسح
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && text === '') {
      // الانتقال للكلمة التالية بعد الانتهاء من المسح
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    } else {
      // سرعة الكتابة (100ms) وسرعة المسح (50ms)
      const speed = isDeleting ? 50 : 100;
      timer = setTimeout(() => {
        setText(
          isDeleting
            ? currentMessage.substring(0, text.length - 1)
            : currentMessage.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="py-5 rounded shadow-sm border border-primary mb-5 bg-body-tertiary">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-7 text-center text-lg-start mt-4 mt-lg-0">
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill mb-3">
              ✨ Welcome to My Portfolio
            </span>
            <h1 className="display-4 fw-bold text-primary mb-3">
              Hi, I'm Radwa Usama Sengr 💖
            </h1>

            <div className="headline-ticker mb-4" aria-live="polite">
              <span className="headline-ticker__text">
                {text}
                <span className="typewriter-cursor">|</span>
              </span>
            </div>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <a href="#projects" className="btn btn-primary px-4 py-2 fw-bold">
                View My Projects 🚀
              </a>
              <a href="#contact" className="btn btn-outline-primary px-4 py-2 fw-bold">
                Contact Me 📬
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div className="profile-photo-wrap">
              <img 
                src={profilePic} 
                alt="Radwa Sengr" 
                className="img-fluid rounded-circle border border-3 border-primary" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;


