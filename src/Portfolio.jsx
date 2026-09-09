function Portfolio() {
  
  const myPortfolioProjects = [
    { 
      id: 1, 
      name: "BreastCancerCare-AI 🩺", 
      desc: "Top 5 Finalist, AI Hackathon. Developed the front-end interface for an AI-powered healthcare application focused on breast cancer care.",
      tech: "HTML, CSS, Python"
    },
    { 
      id: 2, 
      name: "SAKINA Web App 📿", 
      desc: "Designed and implemented a responsive and intuitive user interface for the 'SAKINA' platform, prioritizing user experience.",
      tech: "HTML, CSS, JavaScript"
    },
    { 
      id: 3, 
      name: "Wonderland Restaurant 🍽️", 
      desc: "Built a visually appealing and dynamic front-end for a restaurant website, featuring interactive menus and engaging layouts.",
      tech: "HTML, CSS, JavaScript"
    }
  ];

  return (
    <div className="mt-4 p-4 bg-white rounded shadow-sm border border-primary">
      <h2 className="text-primary mb-4 text-center">🏆 My Professional Portfolio</h2>
      
      <div className="row g-4">
        {myPortfolioProjects.map((project) => (
          <div className="col-md-4 text-start" key={project.id}>
            <div className="p-3 border rounded border-primary h-100 bg-light d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-primary fw-bold">{project.name}</h4>
                <p className="mt-2 text-secondary" style={{ fontSize: '0.95rem' }}>{project.desc}</p>
              </div>
              <div className="mt-3">
                <span className="badge bg-primary">{project.tech}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Portfolio;