function About() {
  return (
    <section id="about" className="py-5 bg-body-tertiary rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <h2 className="text-primary mb-4 text-center fw-bold">👩‍💻 About Me</h2>
        <div className="row justify-content-center"><div className="col-lg-8 text-center">
          <h3 className="text-primary fw-bold mb-3">Frontend React Developer</h3>
          <p className="text-body-secondary fs-5 mb-3">Passionate Frontend Developer dedicated to crafting responsive, high-performance web applications with intuitive user experiences.</p>
          <p className="text-body-secondary mb-4">Achieved <strong>Top 5 Finalist</strong> in the AI Hackathon for developing the <em>BreastCancerCare-AI</em> frontend. Always eager to turn ideas into clean and interactive code.</p>
          <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
            {['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Bootstrap 5', 'Git & GitHub'].map((skill) => <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2" key={skill}>{skill}</span>)}
          </div>
          <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://github.com/RadwaSengr" target="_blank" rel="noreferrer" className="btn btn-outline-primary fw-bold px-4"><i className="fa-brands fa-github me-2"></i>GitHub Profile</a>
            <a href={`${import.meta.env.BASE_URL}Radwa%20Usama%20Sengr%20-%20CV%20(1).pdf`} download="Radwa_Sengr_Frontend_CV.pdf" className="btn btn-outline-secondary btn-sm fw-semibold px-3 cv-link"><i className="fa-solid fa-download me-2"></i>Download CV</a>
          </div>
        </div></div>
      </div>
    </section>
  );
}

export default About;
