import HeroSection from "../components/HeroSection";
import ButtonList from "../components/ButtonList";

const projects = [
  {
    id: 1,
    title: "100 Girl's Toilet Project",
    link: "/100-girls-toilet-project",
  },
  { id: 2, title: "Shree Janapriya Primary School", link: "/janapriya-school" },
  { id: 3, title: "Shree Devi Secondary School", link: "/devi-school" },
  {
    id: 4,
    title: "Shree Satyadevi Secondary School - Karnali Province",
    link: "/satyadevi-school",
  },
];

const OngoingProjects = () => (
  <div className="page-ongoing-projects">
    <HeroSection title="ONGOING PROJECTS" />
    <ButtonList items={projects} />
  </div>
);

export default OngoingProjects;
