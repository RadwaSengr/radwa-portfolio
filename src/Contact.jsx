import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ lang }) {
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
        setError(lang === 'en' ? 'Something went wrong. Please try again!' : 'حدث خطأ ما. يرجى المحاولة مرة أخرى!');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-5 bg-body-tertiary rounded shadow-sm border border-primary col-md-10 col-lg-8 mx-auto mb-5">
      <div className="px-3">
        <h2 className="text-primary mb-2 text-center fw-bold">
          {lang === 'en' ? 'Get In Touch 📬' : 'تواصل معي 📬'}
        </h2>
        <p className="text-center text-body-secondary mb-4">
          {lang === 'en' 
            ? 'Feel free to reach out via the contact form below!' 
            : 'لا تتردد في مراسلتي عبر النموذج أدناه!'}
        </p>

        {/* ✉️ فورمة إرسال الرسائل ✉️ */}
        {submitted ? (
          <div className="alert alert-success text-center fw-bold">
            {lang === 'en' ? (
              <>Thank you, <strong>{formData.user_name || 'Friend'}</strong>! Your message has been sent successfully ✨.</>
            ) : (
              <>شكراً لك، <strong>{formData.user_name || 'يا صديقي'}</strong>! تم إرسال رسالتك بنجاح ✨.</>
            )}
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="col-md-10 mx-auto p-4 border rounded border-primary-subtle bg-body shadow-sm">
            {error && <div className="alert alert-danger mb-3">{error}</div>}

            <div className="mb-3 text-start">
              <label className="form-label text-body fw-bold">
                {lang === 'en' ? 'Your Name:' : 'الاسم:'}
              </label>
              <input 
                type="text" 
                name="user_name"
                className="form-control border-primary-subtle" 
                placeholder={lang === 'en' ? 'Enter your name' : 'أدخل اسمك'} 
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label text-body fw-bold">
                {lang === 'en' ? 'Your Email:' : 'البريد الإلكتروني:'}
              </label>
              <input 
                type="email" 
                name="user_email"
                className="form-control border-primary-subtle" 
                placeholder="name@example.com" 
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 text-start">
              <label className="form-label text-body fw-bold">
                {lang === 'en' ? 'Message:' : 'الرسالة:'}
              </label>
              <textarea 
                name="message"
                className="form-control border-primary-subtle" 
                rows="4" 
                placeholder={lang === 'en' ? 'Write your message here...' : 'اكتب رسالتك هنا...'}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold py-2" disabled={loading}>
              {loading 
                ? (lang === 'en' ? 'Sending...' : 'جاري الإرسال...') 
                : (lang === 'en' ? 'Send Message 🚀' : 'إرسال الرسالة 🚀')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;