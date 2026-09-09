import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setSubmitted(true);
    }
  };

  return (
    <div className="mt-4 p-4 bg-white rounded shadow-sm border border-primary col-md-6 mx-auto">
      <h2 className="text-primary mb-3">Contact Me 📬</h2>
      
      {submitted ? (
        <div className="alert alert-success mt-3">
          Thank you, <strong>{name}</strong>! Your message has been sent successfully ✨.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label text-primary fw-bold">Your Name:</label>
            <input 
              type="text" 
              className="form-control border-primary" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label text-primary fw-bold">Your Email:</label>
            <input 
              type="email" 
              className="form-control border-primary" 
              placeholder="name@example.com" 
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label text-primary fw-bold">Message:</label>
            <textarea 
              className="form-control border-primary" 
              rows="3" 
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-outline-primary w-100">
            Send Message 🚀
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;