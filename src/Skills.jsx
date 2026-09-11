function Skills() {
  const technical = [
    ['HTML5', 'fa-brands fa-html5 icon-html'],
    ['CSS3', 'fa-brands fa-css3-alt icon-css'],
    ['JavaScript', 'fa-brands fa-js icon-js'],
    ['Bootstrap', 'fa-brands fa-bootstrap icon-bootstrap'],
    ['React', 'fa-brands fa-react icon-react'],
    ['Next.js', 'fa-solid fa-n icon-next'],
    ['TypeScript', 'fa-solid fa-code icon-typescript'],
    ['MS SQL Server', 'fa-solid fa-database icon-sql'],
    ['C++', 'fa-solid fa-c icon-cpp'],
    ['C#', 'fa-solid fa-hashtag icon-csharp'],
    ['MySQL', 'fa-solid fa-database icon-mysql'],
    ['Firebase', 'fa-solid fa-fire icon-firebase'],
    ['Java', 'fa-brands fa-java icon-java'],
    ['Python', 'fa-brands fa-python icon-python'],
    ['Responsive Web Design', 'fa-solid fa-mobile-screen icon-responsive'],
    ['Web Application Development', 'fa-solid fa-laptop-code icon-web'],
    ['VS Code', 'fa-solid fa-code icon-vscode'],
    ['Git & GitHub', 'fa-brands fa-git-alt icon-git']
  ];

  const soft = [
    ['Teamwork', 'fa-solid fa-people-group icon-teamwork'],
    ['Leadership', 'fa-solid fa-users-gear icon-leadership'],
    ['Communication', 'fa-solid fa-comments icon-communication'],
    ['Problem-Solving', 'fa-solid fa-puzzle-piece icon-problem-solving'],
    ['Time Management', 'fa-solid fa-clock icon-time'],
    ['Adaptability', 'fa-solid fa-sliders icon-adaptability']
  ];

  const renderSkills = (list) => (
    <div className="row g-3 justify-content-center">
      {list.map(([name, icon]) => (
        <div className="col-6 col-md-3" key={name}>
          <div className="skill-card p-3 border rounded border-primary-subtle bg-body-tertiary card-hover h-100 d-flex flex-column align-items-center justify-content-center">
            <i className={`skill-icon ${icon}`} aria-hidden="true"></i>
            <span className="fw-bold text-body text-center">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-5 rounded shadow-sm border border-primary mb-5">
      <div className="container text-center">
        <h2 className="text-primary mb-4 fw-bold">🛠️ Technical Skills</h2>
        {renderSkills(technical)}
        <h2 className="text-primary mb-4 fw-bold border-top border-primary-subtle pt-5 mt-5">🤝 Soft Skills</h2>
        {renderSkills(soft)}
      </div>
    </section>
  );
}

export default Skills;
