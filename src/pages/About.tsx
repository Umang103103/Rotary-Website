import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/1st.png";

const About = () => {
  return (
    <div className="page-about">
      {/* Hero Image with About Us Title */}
      <section className="about-hero-section">
        <img
          src={heroImage}
          alt="About Rotary Club of Dhulikhel"
          className="about-hero-image"
        />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">ABOUT US</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section about-content-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="about-text">
                <p>
                  Established in 1997, The Rotary Club of Dhulikhel (Club No.
                  50576) provides civic-minded business and professional men and
                  women with an enjoyable and organized way to contribute to
                  Dhulikhel and needy areas of Nepal. By using our skills and
                  expertise, members also enhance their professional network,
                  career development, and cross-cultural understanding.
                </p>
                <p>
                  The Rotary Club of Dhulikhel has 4 Rotaract Clubs, 2 Interact
                  Clubs, and 10 Rotary Community Corps that include 1200 members
                  all together working together to make a better society.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* YouTube Videos */}
      <section className="section about-videos-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} className="mb-4">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/sAjcm1H6zaQ"
                  title="Rotary Club of Dhulikhel Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/v5-83DMemzA"
                  title="Rotary Club of Dhulikhel Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>

          {/* Board of Directors Button */}
          <Row className="justify-content-center mt-5">
            <Col lg={10} className="text-center">
              <Link
                to="/about/board-of-directors"
                className="btn-contact-slide"
              >
                <span className="btn-arrow">→</span>
                <span className="btn-text">BOARD OF DIRECTORS</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
