import { Card } from "react-bootstrap";

interface BoardMemberCardProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

const BoardMemberCard = ({ name, role, image, bio }: BoardMemberCardProps) => {
  const placeholderImage =
    "https://via.placeholder.com/300x300?text=" + encodeURIComponent(name);

  return (
    <Card className="board-member-card h-100 text-center">
      <div className="card-image-wrapper">
        <Card.Img
          variant="top"
          src={image || placeholderImage}
          alt={name}
          className="board-member-image"
        />
      </div>
      <Card.Body>
        <Card.Title className="member-name">{name}</Card.Title>
        <p className="member-role">{role}</p>
        {bio && <Card.Text className="member-bio">{bio}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default BoardMemberCard;
