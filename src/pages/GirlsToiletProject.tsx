import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/images/1st.png";

const GirlsToiletProject = () => {
  return (
    <div className="page-girls-toilet">
      {/* Hero Image with Title */}
      <section className="about-hero-section">
        <img
          src={heroImage}
          alt="100 Girl's Toilet Project"
          className="about-hero-image"
        />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">100 GIRL'S TOILET PROJECT</h1>
        </div>
      </section>

      {/* Project Content */}
      <section className="section project-content-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="project-text">
                <p>
                  In many rural communities in Nepal, access to safe and
                  hygienic toilets for girls in schools is a major challenge.
                  This lack of proper sanitation facilities often leads to girls
                  missing school during their menstrual cycle, which can have a
                  significant impact on their education and overall well-being.
                </p>
                <p>
                  To address this issue, the 100 Girls Toilet Project has been
                  initiated in a community school in Nepal. The project aims to
                  provide separate and safe toilet facilities for girls,
                  ensuring their privacy and dignity while at 100 schools.
                </p>
                <p>
                  The project involves building new toilet blocks specifically
                  for girls, equipped with running water, proper ventilation,
                  and waste disposal systems. Additionally, the project included
                  hygiene education sessions for both students and teachers to
                  promote good sanitation practices and menstrual hygiene
                  management.
                </p>
                <p>
                  The 100 Girls Toilet Project not only improves the overall
                  sanitation and hygiene conditions in the school but also helps
                  to empower girls to attend school regularly and participate
                  fully in their education. By providing a safe and comfortable
                  environment for girls, the project will contribute to creating
                  a more inclusive and supportive learning environment for all
                  students.
                </p>
                <p>
                  Overall, the 100 Girls Toilet Project in the community school
                  of Nepal will have a positive impact on the lives of the
                  students, particularly girls, and will help to break down
                  barriers to education and promote gender equality in the
                  community.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Application Section */}
      <section className="section application-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="application-box">
                <h3 className="application-heading">Apply for the Project</h3>
                <p className="application-text">
                  Please download the application form with 5 pictures and send
                  it to{" "}
                  <a
                    href="mailto:rotarydhulikhel@gmail.com"
                    className="email-link"
                  >
                    rotarydhulikhel@gmail.com
                  </a>
                </p>
                <a
                  href="https://rotarydhulikhel.org.np/wp-content/uploads/2024/04/Online-Application-Form-100-Girls-Toilet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-slide"
                >
                  <span className="btn-arrow">→</span>
                  <span className="btn-text">DOWNLOAD APPLICATION FORM</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default GirlsToiletProject;
