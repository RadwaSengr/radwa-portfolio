import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    if (serviceId === 'YOUR_SERVICE_ID') {
      setTimeout(() => { setSubmitted(true); setLoading(false); }, 600);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => { setSubmitted(true); setLoading(false); })
      .catch(() => { setError('Something went wrong. Please try again.'); setLoading(false); });
  };

  return (
    <section id="contact" className="py-5 bg-body-tertiary rounded shadow-sm border border-primary mb-5">
      <div className="container px-3">
        <h2 className="text-primary mb-2 text-center fw-bold">Get In Touch 📬</h2>
        <p className="text-center text-body-secondary mb-4">Feel free to reach out via the contact form or connect with me directly.</p>

        <div className="contact-socials d-flex flex-wrap justify-content-center gap-3 mb-5" aria-label="Social links">
          <a href="mailto:radwasengr44@gmail.com" className="btn btn-outline-primary rounded-pill px-3"><i className="fa-solid fa-envelope me-2"></i>Email</a>
          <a href="https://www.linkedin.com/in/radwa-s-2b4079306" target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill px-3"><i className="fa-brands fa-linkedin-in me-2"></i>LinkedIn</a>
          <a href="https://github.com/RadwaSengr" target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill px-3"><i className="fa-brands fa-github me-2"></i>GitHub</a>
          <a href="https://www.facebook.com/share/19WkpMHX4a/" target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill px-3"><i className="fa-brands fa-facebook-f me-2"></i>Facebook</a>
        </div>

        {submitted ? (
          <div className="alert alert-success text-center fw-bold">Thank you, <strong>{formData.user_name || 'Friend'}</strong>! Your message has been sent successfully.</div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form col-md-10 mx-auto p-4 border rounded border-primary-subtle bg-body shadow-sm">
            {error && <div className="alert alert-danger mb-3">{error}</div>}
            <div className="mb-3"><label className="form-label text-body fw-bold">Your Name:</label><input type="text" name="user_name" className="form-control border-primary-subtle" placeholder="Enter your name" value={formData.user_name} onChange={handleChange} required /></div>
            <div className="mb-3"><label className="form-label text-body fw-bold">Your Email:</label><input type="email" name="user_email" className="form-control border-primary-subtle" placeholder="name@example.com" value={formData.user_email} onChange={handleChange} required /></div>
            <div className="mb-4"><label className="form-label text-body fw-bold">Message:</label><textarea name="message" className="form-control border-primary-subtle" rows="4" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required></textarea></div>
            <button type="submit" className="btn btn-primary w-100 fw-bold py-2" disabled={loading}>{loading ? 'Sending...' : 'Send Message 🚀'}</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
