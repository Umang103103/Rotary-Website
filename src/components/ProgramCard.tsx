import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProgramCard = ({ title, description, image, link }: ProgramCardProps) => {
  return (
    <Card className="program-card h-100">
      <div className="card-image-wrapper">
        <Card.Img variant="top" src={image} alt={title} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        {description && (
          <Card.Text className="program-description">{description}</Card.Text>
        )}
        <Link to={link} className="btn-slide-effect mt-auto">
          <span className="btn-text">Learn More</span>
          <span className="btn-arrow">→</span>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProgramCard;
