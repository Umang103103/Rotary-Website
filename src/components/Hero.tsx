import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroProps) => {
  return (
    <section
      className="hero"
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      <Container>
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {description && <p className="hero-description">{description}</p>}
          {ctaText && ctaLink && (
            <Link to={ctaLink} className="btn btn-primary btn-lg hero-cta">
              {ctaText}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
