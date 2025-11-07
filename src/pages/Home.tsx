import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import ProgramCard from "../components/ProgramCard";
import {
  heroImage1st,
  sliderImages,
  programsPreview,
  programsIntro,
  diseasePreventionContent,
  letsConnectContent,
  meetingInfo,
} from "../content/homeContent";

const Home = () => {
  return (
    <div className="page-home">
      {/* Hero Image (Static) */}
      <section className="hero-image-section">
        <img
          src={heroImage1st}
          alt="Rotary Club of Dhulikhel"
          className="hero-image"
        />
      </section>

      {/* Image Slider */}
      <ImageSlider images={sliderImages} />

      {/* Our Programs Section */}
      <section className="section programs-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title">{programsIntro.title}</h2>
            <p className="section-description">{programsIntro.description}</p>
          </div>
          <Row className="justify-content-center">
            {programsPreview.map((program) => (
              <Col key={program.id} lg={3} md={6} className="mb-4">
                <ProgramCard
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  link={program.link}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Disease Prevention Section */}
      <section className="section disease-prevention-section">
        <Container>
          <h2 className="section-title text-center mb-4">
            {diseasePreventionContent.title}
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="450"
                  src={diseasePreventionContent.videoUrl}
                  title="Rotary Club of Dhulikhel - Disease Prevention & Treatment"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Let's Connect Section */}
      <section className="section lets-connect-section">
        <Container>
          <h2 className="section-title text-center mb-4">
            {letsConnectContent.title}
          </h2>
          <div className="meeting-info text-center">
            <p className="meeting-text">{meetingInfo.text}</p>
            <Link to={meetingInfo.ctaLink} className="btn-contact-slide">
              <span className="btn-arrow">→</span>
              <span className="btn-text">{meetingInfo.ctaText}</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
