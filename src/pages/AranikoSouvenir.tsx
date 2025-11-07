import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import { souvenirContent } from "../content/newsContent";

const AranikoSouvenir = () => {
  return (
    <div className="page-souvenir">
      <Hero
        title={souvenirContent.title}
        subtitle={souvenirContent.description}
      />

      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="souvenir-date text-center mb-4">
                <p className="text-muted">
                  <em>{souvenirContent.date}</em>
                </p>
              </div>

              <div className="content-block">
                <h3 className="content-heading">Inside This Issue</h3>
                <Row>
                  {souvenirContent.sections.map((section, index) => (
                    <Col key={index} md={6} className="mb-4">
                      <div className="souvenir-section">
                        <h4 className="section-name">{section.title}</h4>
                        <p>{section.content}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              <div className="download-section text-center mt-5 p-5">
                <p className="lead mb-4">{souvenirContent.downloadText}</p>
                <button className="btn btn-primary btn-lg">
                  <i className="bi bi-download me-2"></i>
                  {souvenirContent.ctaText}
                </button>
                <p className="mt-3 text-muted">
                  <small>Digital edition available in PDF format</small>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AranikoSouvenir;
