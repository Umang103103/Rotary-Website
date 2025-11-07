import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ButtonItem {
  id: number;
  title: string;
  link: string;
}

interface ButtonListProps {
  items: ButtonItem[];
}

const ButtonList = ({ items }: ButtonListProps) => {
  return (
    <section className="section service-button-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="ongoing-projects-buttons">
              {items.map((item) => (
                <Link key={item.id} to={item.link} className="btn-slide-effect">
                  <span className="btn-text">{item.title}</span>
                  <span className="btn-arrow">→</span>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ButtonList;
