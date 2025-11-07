import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/images/1st.png";

const SatyadeviSchool = () => {
  return (
    <div className="page-satyadevi-school">
      {/* Hero Image with Title */}
      <section className="about-hero-section">
        <img
          src={heroImage}
          alt="Shree Satyadevi Secondary School - Karnali Province"
          className="about-hero-image"
        />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">
            SHREE SATYADEVI SECONDARY SCHOOL - KARNALI PROVINCE
          </h1>
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
                    <strong>School Name:</strong> Shree Satyadevi Secondary
                    School
                  </li>
                  <li>
                    <strong>Address:</strong> Tilagupha Municipality, Kalikot
                  </li>
                  <li>
                    <strong>Number of Students:</strong> 350 (205 girls & 145
                    boys)
                  </li>
                  <li>
                    <strong>Number of Available Toilet:</strong> 2
                  </li>
                  <li>
                    <strong>Needed Toilet for Girls:</strong> 8 Toilets (6
                    urinals & 2 flush toilets)
                  </li>
                  <li>
                    <strong>Needed Toilet for Boys:</strong> 6 Toilets (4
                    urinals & 2 flush toilets) - optional
                  </li>
                  <li>
                    <strong>Budget for Girls' Toilet:</strong> USD 20,000 (WHO
                    Standard RCT Toilet Building, incinerator, WAS Training,
                    Menstruation Health Management Training, etc)
                  </li>
                  <li>
                    <strong>Budget for Boys' Toilet:</strong> USD 15,000 (WHO
                    Standard RCT Toilet Building, WAS Training, etc)
                  </li>
                </ul>

                <h3 className="mt-4">Project Overview</h3>
                <p>
                  Located in the remote Karnali Province, Shree Satyadevi
                  Secondary School in Tilagupha Municipality, Kalikot, serves
                  350 students with 205 girls and 145 boys. Despite its
                  significant student population, the school currently has only
                  2 toilet facilities, creating an extreme sanitation crisis in
                  one of Nepal's most underserved regions.
                </p>
                <p>
                  The project prioritizes the construction of 8 toilet
                  facilities for girls (6 urinals and 2 flush toilets), which is
                  critical given that girls represent the majority of the
                  student body. The comprehensive approach includes not just
                  physical infrastructure but also essential health education
                  components including WAS (Water, Sanitation, and Hygiene)
                  Training and Menstruation Health Management Training.
                </p>
                <p>
                  This holistic project will provide WHO Standard RCT toilet
                  facilities, an incinerator for safe waste disposal, and
                  crucial health education programs. By addressing both
                  infrastructure and education, the project will create a
                  sustainable, dignified environment that supports the health,
                  well-being, and educational success of all 350 students, with
                  particular emphasis on the 205 girl students who face
                  significant challenges in remote Karnali Province.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SatyadeviSchool;
