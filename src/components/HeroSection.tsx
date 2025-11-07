import heroImage from "../assets/images/1st.png";

interface HeroSectionProps {
  title: string;
}

const HeroSection = ({ title }: HeroSectionProps) => {
  return (
    <section className="about-hero-section">
      <img src={heroImage} alt={title} className="about-hero-image" />
      <div className="about-hero-overlay">
        <h1 className="about-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
