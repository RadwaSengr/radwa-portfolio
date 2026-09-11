function Home() {
  return (
    <section id="home" className="py-5 bg-white rounded shadow-sm border border-primary mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <span className="badge bg-light text-primary border border-primary px-3 py-2 rounded-pill mb-3">
              ✨ Welcome to My Portfolio
            </span>
            <h1 className="display-4 fw-bold text-primary mb-3">
              Hi, I'm Radwa Usama Sengr 💖
            </h1>
            <p className="lead text-secondary mb-4">
              Frontend Developer specializing in building fast, interactive, and modern Single Page Applications with <strong>React.js</strong> & <strong>Bootstrap</strong>.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#portfolio" className="btn btn-primary px-4 py-2 fw-bold">
                View My Projects 🚀
              </a>
              <a href="#contact" className="btn btn-outline-primary px-4 py-2 fw-bold">
                Contact Me 📬
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;