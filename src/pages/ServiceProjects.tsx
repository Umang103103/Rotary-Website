import HeroSection from "../components/HeroSection";
import ButtonList from "../components/ButtonList";

const serviceButton = [
  { id: 1, title: "ONGOING PROJECTS", link: "/services/ongoing-projects" },
];

const ServiceProjects = () => (
  <div className="page-services">
    <HeroSection title="SERVICE PROJECTS" />
    <ButtonList items={serviceButton} />
  </div>
);

export default ServiceProjects;
