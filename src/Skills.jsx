function Skills({ lang }) {
  const skillsList = [
    { name: "HTML5", icon: "fa-brands fa-html5 text-danger" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt text-primary" },
    { name: "JavaScript", icon: "fa-brands fa-js text-warning" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap text-info" },
    { name: "React", icon: "fa-brands fa-react text-info" },
    { name: "C++", icon: "fa-solid fa-code text-primary" },
    { name: "C#", icon: "fa-solid fa-hashtag text-info" },
    { name: "Java", icon: "fa-brands fa-java text-danger" },
    { name: "Python", icon: "fa-brands fa-python text-primary" },
    { name: "Git & GitHub", icon: "fa-brands fa-git-alt text-danger" },
    { name: "Responsive Design", icon: "fa-solid fa-mobile-screen text-success" },
  ];

  return (
    <section id="skills" className="py-5 rounded shadow-sm border border-primary mb-5">
      <div className="container text-center">
        <h2 className="text-primary mb-4 fw-bold">
          {lang === 'en' ? '🛠️ Technical Skills' : '🛠️ المهارات التقنية'}
        </h2>
        <div className="row g-3 justify-content-center">
          {skillsList.map((skill, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="p-3 border rounded border-primary-subtle bg-body-tertiary card-hover h-100 d-flex flex-column align-items-center justify-content-center">
                <i className={`${skill.icon} fs-1 mb-2`}></i>
                {/* 🌟 استخدام text-body لضبط لون النص تلقائياً حسب المظهر */}
                <span className="fw-bold text-body">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;