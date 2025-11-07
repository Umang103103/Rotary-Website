import HeroSection from "../components/HeroSection";
import ButtonList from "../components/ButtonList";

const newsItems = [
  {
    id: 1,
    title: "Araniko Souvenir 2025-26",
    link: "/news/araniko-souvenir-2025-26",
  },
  {
    id: 2,
    title: "Newsletter Subscription",
    link: "/news/newsletter-subscription",
  },
];

const News = () => (
  <div className="page-news">
    <HeroSection title="NEWS" />
    <ButtonList items={newsItems} />
  </div>
);

export default News;
