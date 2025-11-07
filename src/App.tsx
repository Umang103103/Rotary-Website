import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import SiteNavbar from "./components/SiteNavbar";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import ServiceProjects from "./pages/ServiceProjects";
import OngoingProjects from "./pages/OngoingProjects";
import GetInvolve from "./pages/GetInvolve";
import News from "./pages/News";
import NewsletterSubscription from "./pages/NewsletterSubscription";
import AranikoSouvenir from "./pages/AranikoSouvenir";
import Contact from "./pages/Contact";
import GirlsToiletProject from "./pages/GirlsToiletProject";
import JanapriyaSchool from "./pages/JanapriyaSchool";
import DeviSchool from "./pages/DeviSchool";
import SatyadeviSchool from "./pages/SatyadeviSchool";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Add/remove home-page class based on current route
    if (location.pathname === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }
  }, [location]);

  return (
    <div className="app">
      <SiteNavbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/about/board-of-directors"
            element={<BoardOfDirectors />}
          />
          <Route path="/services" element={<ServiceProjects />} />
          <Route
            path="/services/ongoing-projects"
            element={<OngoingProjects />}
          />
          <Route path="/get-involve" element={<GetInvolve />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/news/newsletter-subscription"
            element={<NewsletterSubscription />}
          />
          <Route
            path="/news/araniko-souvenir-2025-26"
            element={<AranikoSouvenir />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/100-girls-toilet-project"
            element={<GirlsToiletProject />}
          />
          <Route path="/janapriya-school" element={<JanapriyaSchool />} />
          <Route path="/devi-school" element={<DeviSchool />} />
          <Route path="/satyadevi-school" element={<SatyadeviSchool />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
