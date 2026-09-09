import radwaPhoto from './assets/radwa-photo.jpg';

function About() {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow-sm border border-primary text-center">
      
      {/* Profile Header */}
      <div className="mb-4">
        <img 
          src={radwaPhoto} 
          alt="Radwa Usama" 
          className="rounded-circle shadow border border-3 border-primary mb-3"
          style={{ 
            width: '160px', 
            height: '160px', 
            objectFit: 'cover',
            objectPosition: 'center 20%'
          }}
        />
        <h2 className="text-primary fw-bold">Radwa Usama Sengr 👩‍💻</h2>
        <p className="text-muted fw-bold">Front-End Software Engineer | Damanhour, Egypt</p>
        <p className="lead px-md-5 mt-3" style={{ fontSize: '1.05rem' }}>
          A motivated Computer Science student with a solid foundation in software engineering and a strong passion for Front-End Development. Recognized for competitive problem-solving skills, notably securing a Top 5 placement in the prestigious AI Hackathon.
        </p>
        <a 
          href="/Radwa Usama Sengr - CV.pdf" 
          download="Radwa_Usama_CV.pdf" 
          className="btn btn-outline-primary px-4 py-2 fw-bold mt-2"
        >
          <i className="fa-solid fa-download me-2"></i> Download Full CV 📄
        </a>
      </div>

      <hr className="border-primary my-4" />

      {/* Skills Section */}
      <div className="text-start">
        <h3 className="text-primary mb-3 text-center">💡 Core Skills</h3>
        <div className="p-3 border rounded border-primary bg-light">
          <p className="mb-2"><strong>Web Development:</strong> HTML5, CSS3, Responsive Web Design, UI/UX Principles</p>
          <p className="mb-2"><strong>Programming Languages:</strong> Python, C, C++</p>
          <p className="mb-2"><strong>Tools & Version Control:</strong> Git, GitHub, VS Code, CLI</p>
          <p className="mb-0"><strong>Soft Skills:</strong> Problem-Solving, Team Collaboration, Fast Learner</p>
        </div>
      </div>

    </div>
  );
}

export default About;