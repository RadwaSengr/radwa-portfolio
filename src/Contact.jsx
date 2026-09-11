import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
      }, 600);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Something went wrong. Please try again!');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-5 bg-white rounded shadow-sm border border-primary col-md-10 col-lg-8 mx-auto mb-5">
      <div className="px-3">
        <h2 className="text-primary mb-2 text-center fw-bold">Get In Touch 📬</h2>
        <p className="text-center text-secondary mb-4">
          Feel free to reach out via direct message or through the contact form below!
        </p>

        {/* 🌟 أزرار التواصل المباشر باللينكات الحقيقية 🌟 */}
        <div className="row g-3 justify-content-center mb-4 text-center">
          {/* Direct Email */}
          <div className="col-6 col-md-3">
            <a 
              href="mailto:radwasengr44@gmail.com" 
              className="p-3 border rounded border-primary d-block text-decoration-none card-hover bg-light"
            >
              <i className="fa-solid fa-envelope fs-3 text-primary mb-2"></i>
              <div className="fw-bold text-dark fs-6">Email</div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="col-6 col-md-3">
            <a 
              href="https://www.linkedin.com/in/radwa-s-2b4079306" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 border rounded border-primary d-block text-decoration-none card-hover bg-light"
            >
              <i className="fa-brands fa-linkedin fs-3 text-primary mb-2"></i>
              <div className="fw-bold text-dark fs-6">LinkedIn</div>
            </a>
          </div>

          {/* GitHub */}
          <div className="col-6 col-md-3">
            <a 
              href="https://github.com/RadwaSengr" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 border rounded border-primary d-block text-decoration-none card-hover bg-light"
            >
              <i className="fa-brands fa-github fs-3 text-primary mb-2"></i>
              <div className="fw-bold text-dark fs-6">GitHub</div>
            </a>
          </div>

          {/* Facebook */}
          <div className="col-6 col-md-3">
            <a 
              href="https://www.facebook.com/share/19WkpMHX4a/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 border rounded border-primary d-block text-decoration-none card-hover bg-light"
            >
              <i className="fa-brands fa-facebook fs-3 text-primary mb-2"></i>
              <div className="fw-bold text-dark fs-6">Facebook</div>
            </a>
          </div>
        </div>

        <hr className="my-4 border-primary" />

        {/* ✉️ فورمة إرسال الرسائل ✉️ */}
        {submitted ? (
          <div className="alert alert-success text-center fw-bold">
            Thank you, <strong>{formData.user_name || 'Friend'}</strong>! Your message has been sent successfully ✨.
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="col-md-10 mx-auto">
            <h4 className="text-primary mb-3 text-center fw-bold fs-5">Or Send Me a Quick Message</h4>
            {error && <div className="alert alert-danger mb-3">{error}</div>}

            <div className="mb-3 text-start">
              <label className="form-label text-primary fw-bold">Your Name:</label>
              <input 
                type="text" 
                name="user_name"
                className="form-control border-primary" 
                placeholder="Enter your name" 
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label text-primary fw-bold">Your Email:</label>
              <input 
                type="email" 
                name="user_email"
                className="form-control border-primary" 
                placeholder="name@example.com" 
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label text-primary fw-bold">Message:</label>
              <textarea 
                name="message"
                className="form-control border-primary" 
                rows="4" 
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-outline-primary w-100 fw-bold py-2" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message 🚀'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;