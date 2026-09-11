function Education({ lang }) {
  return (
    <section id="education" className="py-5 rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <h2 className="text-primary mb-4 text-center fw-bold">
          {lang === 'en' ? '🎓 Education' : '🎓 التعليم'}
        </h2>

        <div className="p-4 border rounded border-primary bg-body-tertiary card-hover">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-graduation-cap fs-2 text-primary me-3"></i>
            <div>
              <h5 className="fw-bold text-body-emphasis mb-1">
                {lang === 'en' ? 'Faculty of Business Information Systems' : 'كلية نظم معلومات الأعمال'}
              </h5>
              <span className="badge bg-primary">2024 - Present</span>
            </div>
          </div>
          <p className="text-body-secondary small mb-0">
            {lang === 'en' 
              ? 'Studying Software Development, Web Technologies, Frontend Development, and Data Structures.'
              : 'دراسة تطوير البرمجيات، تقنيات الويب، تطوير الواجهات الأمامية، وهياكل البيانات.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;