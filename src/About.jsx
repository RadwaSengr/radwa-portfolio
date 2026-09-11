function About({ lang }) {
  return (
    <section id="about" className="py-5 bg-body-tertiary rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <h2 className="text-primary mb-4 text-center fw-bold">
          {lang === 'en' ? '👩‍💻 About Me' : '👩‍💻 نبذة عني'}
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            
            <h3 className="text-primary fw-bold mb-3">
              {lang === 'en' ? 'Frontend React Developer' : 'مطور واجهات أمامية (React)'}
            </h3>
            
            <p className="text-body-secondary fs-5 mb-3">
              {lang === 'en' 
                ? 'Passionate Frontend Developer dedicated to crafting responsive, high-performance web applications with intuitive user experiences.'
                : 'مطور واجهات أمامية شغوف وملتزم بتصميم تطبيقات ويب متجاوبة وعالية الأداء مع تجارب مستخدم بديهية ومريحة.'
              }
            </p>
            
            <p className="text-body-secondary mb-4">
              {lang === 'en' ? (
                <>
                  Achieved <strong>Top 5 Finalist</strong> in the AI Hackathon for developing the <em>BreastCancerCare-AI</em> frontend. Always eager to turn ideas into clean and interactive code.
                </>
              ) : (
                <>
                  وصلت إلى قائمة <strong>أفضل 5 مشاريع نهائية</strong> في هاكاثون الذكاء الاصطناعي لتطوير الواجهة الأمامية لمشروع <em>BreastCancerCare-AI</em>. مستعد دائماً لتحويل الأفكار إلى كود نظيف وتفاعلي.
                </>
              )}
            </p>
            
            {/* قسم المهارات (يظل كما هو لأنه مصطلحات تقنية) */}
            <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">React.js</span>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">JavaScript (ES6+)</span>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">HTML5 & CSS3</span>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">Bootstrap 5</span>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">Git & GitHub</span>
            </div>

            {/* الأزرار */}
            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
              <a 
                href="https://github.com/RadwaSengr" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-primary fw-bold px-4"
              >
                <i className="fa-brands fa-github me-2"></i>
                {lang === 'en' ? 'GitHub Profile' : 'حسابي على GitHub'}
              </a>
              
              <a 
                href={`${import.meta.env.BASE_URL}Radwa%20Usama%20Sengr%20-%20CV%20(1).pdf`} 
                download="Radwa_Sengr_Frontend_CV.pdf"
                className="btn btn-primary fw-bold px-4"
              >
                <i className="fa-solid fa-download me-2"></i>
                {lang === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية'}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;