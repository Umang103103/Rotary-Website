import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/images/1st.png";

const boardMembers = [
  { name: "Dr. Anish Joshi", position: "President", image: "" },
  { name: "Manish Yogal", position: "Vice President", image: "" },
  { name: "Jamuna Moktan", position: "Vice President", image: "" },
  { name: "Shreeya Shrestha", position: "Secretary", image: "" },
  { name: "Rtn. Chhitiz Shrestha", position: "Treasurer", image: "" },
  { name: "Rtn. Jagadish Shrestha", position: "Joint Treasurer", image: "" },
  { name: "Jyotsna Sainju", position: "Immediate Past President", image: "" },
  { name: "Rtn. Jiwan Kaji Makaju", position: "Club Service", image: "" },
  { name: "Jay Bahadur Rai", position: "Service Projects", image: "" },
  {
    name: "Rtn. Ranjeev Shrestha",
    position: "International Service Committee",
    image: "",
  },
  {
    name: "Rtn. Manik Lal Kalu Shrestha",
    position: "Vocational Service",
    image: "",
  },
  {
    name: "PP Rtn. Ashok Kumar Shrestha",
    position: "The Rotary Foundation",
    image: "",
  },
  { name: "Rtn. Pralhad Pyakurel", position: "Community Service", image: "" },
  { name: "Rtn. Bhawana Shrestha", position: "Youth Service", image: "" },
  { name: "Rtn. Nischal Shrestha", position: "Club Administration", image: "" },
];

const BoardOfDirectors = () => {
  return (
    <div className="page-board">
      {/* Hero Image with Title */}
      <section className="about-hero-section">
        <img
          src={heroImage}
          alt="Board of Directors"
          className="about-hero-image"
        />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">BOARD OF DIRECTORS</h1>
        </div>
      </section>

      <section className="section board-members-section">
        <Container>
          <Row className="g-5">
            {boardMembers.map((member, index) => (
              <Col key={index} lg={4} md={6} className="mb-5">
                <div className="board-member-card">
                  <div className="member-image-placeholder">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="member-image"
                      />
                    ) : (
                      <div className="member-initials">
                        {member.name
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BoardOfDirectors;
