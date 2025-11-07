import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

const NewsCard = ({
  title,
  excerpt,
  date,
  category,
  image,
  link,
}: NewsCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="news-card h-100">
      <div className="card-image-wrapper">
        <Card.Img variant="top" src={image} alt={title} />
        <span className="category-badge">{category}</span>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="news-date">{formattedDate}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{excerpt}</Card.Text>
        <Link to={link} className="btn btn-link p-0 mt-auto">
          Read More →
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
