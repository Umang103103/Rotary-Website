import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Rotary Club of Dhulikhel</h5>
            <p className="footer-text">
              Service Above Self - Building communities and transforming lives
              through humanitarian service and fellowship.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com/rotarydhulikhel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com/rotarydhulikhel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://linkedin.com/company/rotarydhulikhel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about/board-of-directors">Board</Link>
              </li>
              <li>
                <Link to="/services">Projects</Link>
              </li>
              <li>
                <Link to="/get-involve">Get Involved</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li>
                <Link to="/100-girls-toilet-project">
                  100 Girl's Toilet Project
                </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/news/araniko-souvenir-2025-26">
                  Araniko Souvenir 2025-26
                </Link>
              </li>
              <li>
                <Link to="/about/board-of-directors">Board of Directors</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="footer-heading">Meeting Time</h5>
            <p className="footer-text">
              <strong>Every Saturday</strong>
              <br />
              12:00 PM
              <br />
              Hotel Himalayan Horizon
            </p>
            <p className="footer-text">
              <i className="bi bi-envelope"></i> info@rotarydhulikhel.org.np
              <br />
              <i className="bi bi-telephone"></i> +977-11-490000
            </p>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="copyright">
              © {currentYear} Rotary Club of Dhulikhel. All rights reserved. |
              Part of{" "}
              <a
                href="https://www.rotary.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rotary International
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SiteFooter;
