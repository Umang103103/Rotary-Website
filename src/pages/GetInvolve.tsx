import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/images/1st.png";

const GetInvolve = () => {
  return (
    <div className="page-get-involve">
      {/* Hero Image with Title */}
      <section className="about-hero-section">
        <img src={heroImage} alt="Get Involved" className="about-hero-image" />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">GET INVOLVED</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section project-content-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="project-text">
                <h3>Become a Member</h3>
                <p>
                  You can be a member of the Rotary Club of Dhulikhel by
                  submitting your CV at{" "}
                  <a
                    href="mailto:rotarydhulikhel@gmail.com"
                    className="email-link"
                  >
                    rotarydhulikhel@gmail.com
                  </a>
                </p>

                <h3 className="mt-5">Partnership Opportunities</h3>
                <p>
                  International clubs can be the international & funding
                  partners for the following global grants:
                </p>

                <div className="partnership-projects mt-4">
                  <div className="partnership-item">
                    <h4>Menstrual Health Management - Global Grant</h4>
                    <p>Looking for funding partners.</p>
                  </div>

                  <div className="partnership-item">
                    <h4>Nepal Ultrasound Project</h4>
                    <p>Looking for International & Funding partners.</p>
                  </div>

                  <div className="partnership-item">
                    <h4>Empowering Women Through Goat Farming</h4>
                    <p>Looking For International & Funding Partners.</p>
                  </div>

                  <div className="partnership-item">
                    <h4>Dhulikhel Hospital Lab Upgradement Project</h4>
                    <p>Looking for International & Funding partners.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default GetInvolve;
