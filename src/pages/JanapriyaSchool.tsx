import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/images/1st.png";

const JanapriyaSchool = () => {
  return (
    <div className="page-janapriya-school">
      {/* Hero Image with Title */}
      <section className="about-hero-section">
        <img
          src={heroImage}
          alt="Shree Janapriya Primary School"
          className="about-hero-image"
        />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">SHREE JANAPRIYA PRIMARY SCHOOL</h1>
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
                    <strong>School Name:</strong> Shree Janapriya Primary School
                  </li>
                  <li>
                    <strong>Address:</strong> Kattari-01, Udayapur
                  </li>
                  <li>
                    <strong>Total Class:</strong> ECD-Class 08
                  </li>
                  <li>
                    <strong>Total Student:</strong> 125 (boys-65, girls-60)
                  </li>
                  <li>
                    <strong>Existing Toilet:</strong> 1 (4 urinals & 1 stool
                    toilet) both for girls & boys
                  </li>
                  <li>
                    <strong>Need of Toilet:</strong> 5 (as per WHO requirement)
                  </li>
                  <li>
                    <strong>Cost of WHO Standard 5 rooms RCT Toilet:</strong>{" "}
                    USD 12,000
                  </li>
                </ul>

                <h3 className="mt-4">Project Overview</h3>
                <p>
                  Shree Janapriya Primary School currently serves 125 students
                  with only one toilet facility containing 4 urinals and 1 stool
                  toilet shared by both girls and boys. This inadequate
                  sanitation infrastructure falls far short of WHO standards,
                  which require 5 separate toilet rooms for a school of this
                  size.
                </p>
                <p>
                  The existing toilet is severely overcrowded, serving all 125
                  students and creating unsanitary conditions that can affect
                  the health and well-being of the children. This lack of proper
                  facilities particularly impacts girl students, who may miss
                  school during menstruation due to inadequate privacy and
                  hygiene facilities.
                </p>
                <p>
                  The project aims to construct a WHO Standard 5-room RCT
                  (Reinforced Concrete Technology) toilet facility that will
                  provide separate, safe, and hygienic sanitation for students.
                  This new facility will ensure proper privacy, dignity, and
                  health standards for all children, contributing to better
                  school attendance and overall student well-being.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default JanapriyaSchool;
