import breastCancerImg from './assets/breast-cancer.jpg';
import sakinaImg from './assets/sakina.jpg';
import wonderlandImg from './assets/wonderland.jpg';

function Projects() {
  const projects = [
    { id: 1, name: 'BreastCancerCare-AI 🩺', desc: 'Top 5 Finalist, AI Hackathon. Developed the front-end interface for an AI-powered healthcare application focused on breast cancer care.', tech: ['HTML', 'CSS', 'TypeScript', 'React', 'Bootstrap'], demo: 'https://radwasengr.github.io/breast-cancer-care-ai/', image: breastCancerImg },
    { id: 2, name: 'SAKINA Web App 📿', desc: "Designed and implemented a responsive and intuitive user interface for the SAKINA platform, prioritizing user experience.", tech: ['HTML', 'CSS', 'TypeScript', 'React'], demo: 'https://radwasengr.github.io/SAKINA/', image: sakinaImg },
    { id: 3, name: 'Wonderland Restaurant 🍽️', desc: 'Built a visually appealing and dynamic front-end for a restaurant website, featuring interactive menus and engaging layouts.', tech: ['HTML', 'CSS', 'JavaScript'], demo: 'https://radwasengr.github.io/wonder-land-restaurant/', image: wonderlandImg }
  ];
  return <section id="projects" className="py-5 rounded shadow-sm border border-primary mb-5"><div className="container"><h2 className="text-primary mb-4 text-center fw-bold">🚀 Projects</h2><div className="row g-4">{projects.map((project) => <div className="col-md-4 text-start" key={project.id}><div className="p-3 border rounded border-primary h-100 bg-body-tertiary d-flex flex-column justify-content-between card-hover"><div><img src={project.image} alt={project.name} className="img-fluid rounded mb-3 border border-primary-subtle project-image" /><h4 className="text-primary fw-bold mb-2">{project.name}</h4><p className="text-body-secondary project-description">{project.desc}</p></div><div className="mt-3"><div className="mb-3 d-flex flex-wrap gap-1">{project.tech.map((tech) => <span key={tech} className="badge bg-primary-subtle text-primary border border-primary-subtle">{tech}</span>)}</div><a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary w-100 fw-bold"><i className="fa-solid fa-arrow-up-right-from-square me-1"></i>Live Demo</a></div></div></div>)}</div></div></section>;
}

export default Projects;
