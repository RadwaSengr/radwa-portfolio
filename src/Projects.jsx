import breastCancerImg from './assets/breast-cancer.jpg';
import sakinaImg from './assets/sakina.jpg';
import wonderlandImg from './assets/wonderland.jpg';

function Projects({ lang }) {
  const myPortfolioProjects = [
    { 
      id: 1, 
      name: lang === 'en' ? "BreastCancerCare-AI 🩺" : "رعاية سرطان الثدي بالذكاء الاصطناعي 🩺", 
      desc: lang === 'en' 
        ? "Top 5 Finalist, AI Hackathon. Developed the front-end interface for an AI-powered healthcare application focused on breast cancer care."
        : "من أفضل 5 مشاريع في هاكاثون الذكاء الاصطناعي. تطوير واجهة المستخدم لتطبيق صحي يعتمد على الذكاء الاصطناعي.",
      tech: ["HTML", "CSS", "TypeScript", "React", "Bootstrap"],
      demo: "https://radwasengr.github.io/breast-cancer-care-ai/",
      image: breastCancerImg
    },
    { 
      id: 2, 
      name: lang === 'en' ? "SAKINA Web App 📿" : "تطبيق سَكِينَة 📿", 
      desc: lang === 'en' 
        ? "Designed and implemented a responsive and intuitive user interface for the 'SAKINA' platform, prioritizing user experience."
        : "تصميم وتنفيذ واجهة مستخدم متجاوبة وسلسة لمنصة سَكِينَة مع التركيز على تحسين تجربة المستخدم.",
      tech: ["HTML", "CSS", "TypeScript", "React"],
      demo: "https://radwasengr.github.io/SAKINA/",
      image: sakinaImg
    },
    { 
      id: 3, 
      name: lang === 'en' ? "Wonderland Restaurant 🍽️" : "مطعم أرض العجائب 🍽️", 
      desc: lang === 'en' 
        ? "Built a visually appealing and dynamic front-end for a restaurant website, featuring interactive menus and engaging layouts."
        : "بناء واجهة جذابة وديناميكية لموقع مطعم، تحتوي على قوائم طعام تفاعلية وتصاميم متميزة.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://radwasengr.github.io/Wonderland-Restaurant/",
      image: wonderlandImg
    }
  ];

  return (
    <section id="projects" className="py-5 rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <h2 className="text-primary mb-4 text-center fw-bold">
          {lang === 'en' ? '🚀 Featured Projects' : '🚀 مشاريعي'}
        </h2>
        
        <div className="row g-4">
          {myPortfolioProjects.map((project) => (
            <div className="col-md-4 text-start" key={project.id}>
              <div className="p-3 border rounded border-primary h-100 bg-body-tertiary d-flex flex-column justify-content-between card-hover">
                <div>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="img-fluid rounded mb-3 border border-primary-subtle"
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                  <h4 className="text-primary fw-bold mb-2">{project.name}</h4>
                  <p className="text-body-secondary" style={{ fontSize: '0.95rem' }}>{project.desc}</p>
                </div>
                
                <div className="mt-3">
                  <div className="mb-3 d-flex flex-wrap gap-1">
                    {project.tech.map((t, index) => (
                      <span key={index} className="badge bg-primary-subtle text-primary border border-primary-subtle">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-2">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-sm btn-primary w-100 fw-bold d-flex align-items-center justify-content-center gap-1"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                        {lang === 'en' ? 'Live Demo' : 'معاينة المشروع'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;