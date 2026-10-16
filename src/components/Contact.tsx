import type { FormEvent } from 'react'

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Thanks for reaching out! This is a demo — connect the form to your backend or Formspree.')
  }

  return (
    <section className="section" id="contact">
      <div className="reveal">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="contact-grid reveal" style={{ transitionDelay: '100ms' }}>
        <div className="contact-card">
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon">📧</div>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">cosethapun@gmail.com</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">Jakarta, Indonesia</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">💼</div>
              <div>
                <div className="contact-info-label">Status</div>
                <div className="contact-info-value">Open to opportunities</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">🌐</div>
              <div>
                <div className="contact-info-label">Website</div>
                <div className="contact-info-value">cosetha.github.io</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-input" type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="email" id="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input className="form-input" type="text" id="subject" placeholder="Project inquiry" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-textarea" id="message" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn btn-primary" id="btn-send-message" style={{ marginTop: '0.5rem' }}>
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
