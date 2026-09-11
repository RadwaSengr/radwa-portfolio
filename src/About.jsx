function About() {
  return (
    <section id="about" className="py-5 bg-white rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <h2 className="text-primary mb-4 text-center fw-bold">👩‍💻 About Me</h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            
           <div className="mb-4">
  <div className="p-2 bg-light rounded-circle border border-primary d-inline-block shadow-sm overflow-hidden">
    <img 
      src="/Radwa-Sengr.jpeg" 
      alt="Radwa Sengr" 
      className="img-fluid"
      style={{ 
        width: "200px", 
        height: "200px", 
        objectFit: "cover", 
        objectPosition: "center 20%", 
        borderRadius: "50%"
      }} 
    />
  </div>
</div>
            
            <h3 className="text-primary fw-bold mb-3">Frontend React Developer</h3>
            <p className="text-secondary fs-5 mb-3">
              Passionate Frontend Developer dedicated to crafting responsive, high-performance web applications with intuitive user experiences.
            </p>
            <p className="text-secondary mb-4">
              Achieved <strong>Top 5 Finalist</strong> in the AI Hackathon for developing the <em>BreastCancerCare-AI</em> frontend. Always eager to turn ideas into clean and interactive code.
            </p>
            
            <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
              <span className="badge bg-light text-primary border border-primary">React.js</span>
              <span className="badge bg-light text-primary border border-primary">JavaScript (ES6+)</span>
              <span className="badge bg-light text-primary border border-primary">HTML5 & CSS3</span>
              <span className="badge bg-light text-primary border border-primary">Bootstrap 5</span>
              <span className="badge bg-light text-primary border border-primary">Git & GitHub</span>
            </div>

            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
              <a 
                href="https://github.com/RadwaSengr" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-primary fw-bold"
              >
                <i className="fa-brands fa-github me-1"></i> GitHub Profile
              </a>
              
              <a 
                href="/Radwa Usama Sengr - CV (1).pdf" 
                download="Radwa_Sengr_Frontend_CV.pdf"
                className="btn btn-primary fw-bold"
              >
                <i className="fa-solid fa-download me-1"></i> Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;