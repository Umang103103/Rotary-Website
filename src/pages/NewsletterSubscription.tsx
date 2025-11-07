import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Hero from "../components/Hero";
import { newsletterContent } from "../content/newsContent";
import { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log("Newsletter subscription:", { name, email });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 3000);
  };

  return (
    <div className="page-newsletter">
      <Hero
        title={newsletterContent.title}
        subtitle={newsletterContent.description}
      />

      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="content-block">
                <h3 className="content-heading">Why Subscribe?</h3>
                <ul className="benefits-list">
                  {newsletterContent.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="subscription-form-wrapper mt-5 p-4">
                <h4 className="mb-4">Subscribe Now</h4>
                {submitted ? (
                  <div className="alert alert-success">
                    Thank you for subscribing! You'll receive our newsletter at{" "}
                    {email}
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <p className="privacy-note">
                      <small>{newsletterContent.privacyNote}</small>
                    </p>

                    <Button variant="primary" type="submit" size="lg">
                      Subscribe
                    </Button>
                  </Form>
                )}
              </div>

              <div className="text-center mt-4">
                <p className="text-muted">
                  <strong>Frequency:</strong> {newsletterContent.frequency}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewsletterSubscription;
