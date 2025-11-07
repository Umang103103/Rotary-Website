import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import heroImage from "../assets/images/1st.png";
import { contactContent } from "../content/contactContent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="page-contact">
      {/* Hero Image with Title */}
      <section className="about-hero-section">
        <img src={heroImage} alt="Contact Us" className="about-hero-image" />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">CONTACT US</h1>
        </div>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3 className="content-heading mb-4">Get In Touch</h3>

              {submitted ? (
                <div className="alert alert-success p-4">
                  <h5>Thank you for contacting us!</h5>
                  <p>
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group className="mb-3">
                    <Form.Label>{contactContent.formFields.name}</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>{contactContent.formFields.email}</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>{contactContent.formFields.subject}</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>{contactContent.formFields.message}</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <button type="submit" className="btn-contact-slide">
                    <span className="btn-arrow">→</span>
                    <span className="btn-text">SEND MESSAGE</span>
                  </button>
                </Form>
              )}
            </Col>

            <Col lg={6}>
              <h3 className="content-heading mb-4">Contact Information</h3>

              <div className="contact-info-card mb-4 p-4">
                <h5>
                  <i className="bi bi-calendar-event me-2"></i>Meeting Time
                </h5>
                <p className="mb-0">
                  <strong>{contactContent.contactInfo.meetingTime}</strong>
                  <br />
                  {contactContent.contactInfo.meetingLocation}
                </p>
              </div>

              <div className="contact-info-card mb-4 p-4">
                <h5>
                  <i className="bi bi-envelope me-2"></i>Email
                </h5>
                <p className="mb-0">
                  <a href={`mailto:${contactContent.contactInfo.email}`}>
                    {contactContent.contactInfo.email}
                  </a>
                </p>
              </div>

              <div className="contact-info-card mb-4 p-4">
                <h5>
                  <i className="bi bi-telephone me-2"></i>Phone
                </h5>
                <p className="mb-0">
                  <a href={`tel:${contactContent.contactInfo.phone}`}>
                    {contactContent.contactInfo.phone}
                  </a>
                </p>
              </div>

              <div className="contact-info-card mb-4 p-4">
                <h5>
                  <i className="bi bi-geo-alt me-2"></i>Address
                </h5>
                <p className="mb-0">{contactContent.contactInfo.address}</p>
              </div>

              <div className="social-connect mt-4">
                <h5 className="mb-3">Connect With Us</h5>
                <div className="social-links-large">
                  {contactContent.socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-btn"
                      aria-label={social.platform}
                    >
                      <i className={`bi bi-${social.icon}`}></i>{" "}
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
