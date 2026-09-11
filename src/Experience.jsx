function Experience({ lang }) {
  return (
    <section id="experience" className="py-5 rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <h2 className="text-primary mb-4 text-center fw-bold">
          {lang === 'en' ? '💼 Work Experience & Achievements' : '💼 الخبرات والجوائز'}
        </h2>

        <div className="p-4 border rounded border-primary bg-body-tertiary card-hover">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-trophy fs-2 text-primary me-3"></i>
            <div>
              <h5 className="fw-bold text-body-emphasis mb-1">
                {lang === 'en' ? 'Top 5 Finalist - AI Hackathon' : 'المركز الخامس - هاكاثون الذكاء الاصطناعي'}
              </h5>
              <span className="badge bg-success">BreastCancerCare-AI</span>
            </div>
          </div>
          <p className="text-body-secondary small mb-0">
            {lang === 'en'
              ? 'Designed and built the frontend for an AI-powered breast cancer care application.'
              : 'تطوير واجهة المستخدم لتطبيق ذكي مخصص لرعاية مرضى سرطان الثدي.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;