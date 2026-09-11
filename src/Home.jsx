import profilePic from './assets/Radwa-Sengr.jpeg';

function Home({ lang }) {
  return (
    <section id="home" className="py-5 rounded shadow-sm border border-primary mb-5 bg-body-tertiary">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          
          {/* قسم النصوص */}
          <div className="col-lg-7 text-center text-lg-start mt-4 mt-lg-0">
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill mb-3">
              {lang === 'en' ? '✨ Welcome to My Portfolio' : '✨ مرحباً بكم في معرض أعمالي'}
            </span>
            <h1 className="display-4 fw-bold text-primary mb-3">
              {lang === 'en' ? "Hi, I'm Radwa Usama Sengr 💖" : "مرحباً، أنا رضوى أسامة سنجر 💖"}
            </h1>
            <p className="lead text-body-secondary mb-4">
              {lang === 'en' 
                ? <>Frontend Developer specializing in building fast, interactive, and modern Single Page Applications with <strong>React.js</strong> & <strong>Bootstrap</strong>.</>
                : <>مطور واجهات أمامية متخصص في بناء تطبيقات ويب سريعة وتفاعلية وحديثة باستخدام <strong>React.js</strong> و <strong>Bootstrap</strong>.</>
              }
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="#projects" className="btn btn-primary px-4 py-2 fw-bold">
                {lang === 'en' ? 'View My Projects 🚀' : 'تصفح مشاريعي 🚀'}
              </a>
              <a href="#contact" className="btn btn-outline-primary px-4 py-2 fw-bold">
                {lang === 'en' ? 'Contact Me 📬' : 'تواصل معي 📬'}
              </a>
            </div>
          </div>

          {/* قسم الصورة */}
          <div className="col-lg-5 text-center">
            <div className="position-relative d-inline-block">
              {/* ظل خلفي للصورة يعطيها شكلاً مميزاً */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-circle shadow" style={{ transform: 'translate(-10px, 10px)', zIndex: 0, opacity: 0.2 }}></div>
              
              <img 
                src={profilePic} 
                alt="Radwa Sengr" 
                className="img-fluid rounded-circle border border-3 border-primary position-relative shadow"
                style={{ 
                  width: '280px', 
                  height: '280px', 
                  objectFit: 'cover',
                  objectPosition: 'center 20%', /* 🌟 تمت إضافة التوسيط هنا 🌟 */
                  zIndex: 1 
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;