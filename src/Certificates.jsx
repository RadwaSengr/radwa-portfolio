function Certificates() {
  const certificates = [
    {
      icon: 'fa-solid fa-certificate',
      title: 'Introduction of Computer Science',
      issuer: 'ITI — Information Technology Institute',
      date: 'Summer 2024'
    },
    {
      icon: 'fa-solid fa-certificate',
      title: 'CS50 Course',
      issuer: 'Harvard University',
      date: '2024'
    },
    {
      icon: 'fa-solid fa-certificate',
      title: 'AI Hackathon — BreastCancerCare-AI',
      issuer: 'ITIDA , INSTANT , ODC , CREATIVA ',
      date: '2026',
      description: 'Built responsive, accessible interfaces for healthcare, productivity, and restaurant web experiences.'
    },
  ];

  const achievements = [
    {
      icon: 'fa-solid fa-medal , fa-solid fa-certificate',
      title: 'Top 5 POSITION — AI Hackathon',
      issuer: 'ITIDA , INSTANT , ODC , CREATIVA ',
      date: '2026',
      description: 'Recognized among the top five finalists for the BreastCancerCare-AI project.'
    }
    
  ];

  return (
    <section id="certificates" className="py-5 rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <h2 className="text-primary mb-4 text-center fw-bold">🏆 Certificates & Achievements</h2>

        <div className="row g-4 justify-content-center mb-4">
          {certificates.map((certificate) => (
            <div className="col-md-6" key={certificate.title}>
              <article className="p-4 border rounded border-primary-subtle bg-body-tertiary card-hover h-100">
                <div className="d-flex align-items-start gap-3">
                  <i className={`${certificate.icon} fs-2 text-primary`} aria-hidden="true"></i>
                  <div>
                    <h5 className="fw-bold text-body-emphasis mb-2">{certificate.title}</h5>
                    <p className="text-primary fw-semibold mb-1">{certificate.issuer}</p>
                    <span className="badge bg-primary">{certificate.date}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="row g-4 justify-content-center">
          {achievements.map((achievement) => (
            <div className="col-md-6" key={achievement.title}>
              <article className="p-4 border rounded border-primary-subtle bg-body-tertiary card-hover h-100">
                <div className="d-flex align-items-start gap-3">
                  <i className={`${achievement.icon} fs-2 text-primary`} aria-hidden="true"></i>
                  <div>
                    <h5 className="fw-bold text-body-emphasis mb-2">{achievement.title}</h5>
                    <p className="text-body-secondary mb-0">{achievement.description}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
