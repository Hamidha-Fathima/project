
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div style={{
      backgroundColor: '#1f2937',
      padding: '50px',
      borderRadius: '16px',
      marginBottom: '60px'
    }}>
      <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px',color: '#6b21a8' }}>Contact Me</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '15px', marginBottom: '15px', background: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: 'white' }}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '15px', marginBottom: '15px', background: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: 'white' }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ width: '100%', padding: '15px', marginBottom: '15px', background: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: 'white' }}
        />
        {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}

        <textarea
          name="message"
          placeholder="What is this about?"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          style={{ width: '100%', padding: '15px', marginBottom: '15px', background: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: 'white', resize: 'vertical' }}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '18px',
            backgroundColor: '#8b5cf6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;