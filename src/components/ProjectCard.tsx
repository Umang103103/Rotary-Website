import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  status?: string;
  impact?: string;
  timeline?: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  status,
  impact,
  timeline,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="project-card h-100">
      <div className="card-image-wrapper">
        <Card.Img variant="top" src={image} alt={title} />
        <span className="category-badge">{category}</span>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>

        {(status || impact || timeline) && (
          <div className="project-meta">
            {status && (
              <div className="meta-item">
                <strong>Status:</strong> {status}
              </div>
            )}
            {impact && (
              <div className="meta-item">
                <strong>Impact:</strong> {impact}
              </div>
            )}
            {timeline && (
              <div className="meta-item">
                <strong>Timeline:</strong> {timeline}
              </div>
            )}
          </div>
        )}

        {link && (
          <Link to={link} className="btn btn-outline-primary mt-3">
            Read More
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
