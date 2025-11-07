import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/images/1st.png";

const DeviSchool = () => {
  return (
    <div className="page-devi-school">
      {/* Hero Image with Title */}
      <section className="about-hero-section">
        <img
          src={heroImage}
          alt="Shree Devi Secondary School"
          className="about-hero-image"
        />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">SHREE DEVI SECONDARY SCHOOL</h1>
        </div>
      </section>

      {/* Project Content */}
      <section className="section project-content-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="project-text">
                <h3>School Information</h3>
                <ul>
                  <li>
                    <strong>School Name:</strong> Shree Devi Secondary School
                  </li>
                  <li>
                    <strong>Address:</strong> Kattari-05, Udayapur
                  </li>
                  <li>
                    <strong>Total Class:</strong> ECD-Class 10
                  </li>
                  <li>
                    <strong>Total Student:</strong> 328 (boys-159, girls-169)
                  </li>
                  <li>
                    <strong>Existing Toilet:</strong> 2
                  </li>
                  <li>
                    <strong>Need of Girl's Toilet:</strong> 7 (as per WHO
                    requirement)
                  </li>
                  <li>
                    <strong>Need of Boy's Toilet:</strong> 6 (as per WHO
                    requirement)
                  </li>
                  <li>
                    <strong>Cost of WHO Standard Girl's Toilet:</strong> USD
                    13,500
                  </li>
                  <li>
                    <strong>Cost of WHO Standard Boy's Toilet:</strong> USD
                    12,000
                  </li>
                </ul>

                <h3 className="mt-4">Project Overview</h3>
                <p>
                  Shree Devi Secondary School is a larger educational
                  institution serving 328 students from ECD through Class 10,
                  with 159 boys and 169 girls. Despite its size and the number
                  of students, the school currently has only 2 toilet
                  facilities, creating a severe sanitation crisis that affects
                  the health, dignity, and educational outcomes of all students.
                </p>
                <p>
                  According to WHO standards, the school requires 7 separate
                  toilet facilities for girls and 6 for boys to adequately serve
                  its student population. The current shortage of proper
                  sanitation facilities is particularly concerning for
                  adolescent girls, who often miss school during menstruation
                  due to lack of privacy and adequate hygiene facilities.
                </p>
                <p>
                  This project aims to construct WHO Standard toilet facilities
                  that will provide separate, safe, and hygienic sanitation for
                  both girls and boys. The improved facilities will ensure
                  proper privacy, maintain health standards, and create a
                  supportive environment that encourages consistent school
                  attendance for all students, particularly benefiting the 169
                  girl students who currently face significant challenges.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DeviSchool;
