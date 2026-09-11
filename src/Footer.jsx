// ملف: src/components/Footer.jsx

function Footer({ lang }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-body-tertiary border-top border-primary-subtle text-center mt-auto">
      <div className="container">
        
        {/* وسائل التواصل الاجتماعي 🌟 */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a 
            href="mailto:radwasengr44@gmail.com" 
            className="btn btn-outline-primary rounded-circle shadow-sm" 
            style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
            title="Email"
          >
            <i className="fa-solid fa-envelope fs-5"></i>
          </a>

          <a 
            href="https://www.linkedin.com/in/radwa-s-2b4079306" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-outline-primary rounded-circle shadow-sm" 
            style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in fs-5"></i>
          </a>
          
          <a 
            href="https://github.com/RadwaSengr" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-outline-primary rounded-circle shadow-sm" 
            style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
            title="GitHub"
          >
            <i className="fa-brands fa-github fs-5"></i>
          </a>
          
          <a 
            href="https://www.facebook.com/share/19WkpMHX4a/" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-outline-primary rounded-circle shadow-sm" 
            style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
            title="Facebook"
          >
            <i className="fa-brands fa-facebook-f fs-5"></i>
          </a>
        </div>

        {/* حقوق النشر */}
        <p className="mb-1 text-body-secondary fw-semibold">
          {lang === 'en' 
            ? `© ${currentYear} Radwa Usama Sengr. All rights reserved.` 
            : `© ${currentYear} رضوى أسامة سنجر. جميع الحقوق محفوظة.`}
        </p>
        <p className="small text-primary mb-0 fw-bold">
          Built with React & Bootstrap 💖
        </p>

      </div>
    </footer>
  );
}

export default Footer;