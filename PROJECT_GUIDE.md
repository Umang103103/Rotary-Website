# Rotary Club of Dhulikhel Website - Complete Build Guide

## Table of Contents

1. [Project Setup](#step-1-project-setup)
2. [Project Structure](#step-2-project-structure)
3. [Install Dependencies](#step-3-install-dependencies)
4. [Create Reusable Components](#step-4-create-reusable-components)
5. [Build Pages](#step-5-build-pages)
6. [Setup Routing](#step-6-setup-routing)
7. [Add Styling](#step-7-add-styling)
8. [Run & Build](#step-8-run--build)

---

## Step 1: Project Setup

### 1.1 Initialize Vite + React + TypeScript Project

Open your terminal and run:

```bash
npm create vite@latest rotary-dhulikhel -- --template react-ts
cd rotary-dhulikhel
```

### 1.2 Install Required Dependencies

```bash
npm install
npm install react-router-dom
npm install bootstrap react-bootstrap
npm install bootstrap-icons
```

**What each package does:**

- `react-router-dom` - Client-side routing (page navigation)
- `bootstrap` - CSS framework for responsive layouts
- `react-bootstrap` - React components for Bootstrap
- `bootstrap-icons` - Icon library

---

## Step 2: Project Structure

Create this folder structure:

```
rotary-dhulikhel/
├── src/
│   ├── assets/
│   │   └── images/          # Store all images here
│   │       ├── 1st.png      # Hero image
│   │       ├── 1.png        # Slider images
│   │       ├── 2.png
│   │       ├── 3.png
│   │       ├── 4.png
│   │       └── 5.png
│   ├── components/          # Reusable components
│   │   ├── HeroSection.tsx
│   │   ├── ButtonList.tsx
│   │   ├── SiteNavbar.tsx
│   │   └── SiteFooter.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── ServiceProjects.tsx
│   │   ├── OngoingProjects.tsx
│   │   ├── News.tsx
│   │   ├── Contact.tsx
│   │   └── BoardOfDirectors.tsx
│   ├── App.tsx              # Main app with routing
│   ├── style.css            # Global styles
│   └── main.tsx             # Entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Step 3: Install Dependencies

After running npm install, your `package.json` should look like:

```json
{
  "name": "rotary-dhulikhel",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.5",
    "bootstrap": "^5.3.8",
    "react-bootstrap": "^2.10.10",
    "bootstrap-icons": "^1.11.3"
  },
  "devDependencies": {
    "@types/react": "^19.1.1",
    "@types/react-dom": "^19.1.1",
    "typescript": "~5.6.2",
    "vite": "^7.1.14"
  }
}
```

---

## Step 4: Create Reusable Components

### 4.1 HeroSection Component

**File:** `src/components/HeroSection.tsx`

```typescript
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
```

**Purpose:** Reusable hero image with title overlay for all pages

---

### 4.2 ButtonList Component

**File:** `src/components/ButtonList.tsx`

```typescript
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ButtonItem {
  id: number;
  title: string;
  link: string;
}

interface ButtonListProps {
  items: ButtonItem[];
}

const ButtonList = ({ items }: ButtonListProps) => {
  return (
    <section className="section service-button-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="ongoing-projects-buttons">
              {items.map((item) => (
                <Link key={item.id} to={item.link} className="btn-slide-effect">
                  <span className="btn-text">{item.title}</span>
                  <span className="btn-arrow">→</span>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ButtonList;
```

**Purpose:** Reusable vertical button list with consistent styling

---

### 4.3 Navbar Component

**File:** `src/components/SiteNavbar.tsx`

```typescript
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteNavbar = () => {
  return (
    <Navbar expand="lg" className="site-navbar fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          Rotary Club of Dhulikhel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Service Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/get-involve">
              Get Involved
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
```

---

### 4.4 Footer Component

**File:** `src/components/SiteFooter.tsx`

```typescript
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5>About Rotary Dhulikhel</h5>
            <p>
              Established in 1997, serving the community through humanitarian
              projects and global partnerships.
            </p>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h5>Resources</h5>
            <ul className="footer-links">
              <li>
                <Link to="/100-girls-toilet-project">
                  100 Girl's Toilet Project
                </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/board-of-directors">Board of Directors</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h5>Contact</h5>
            <p>
              Email: rotarydhulikhel@gmail.com
              <br />
              Meeting: Every Friday, 5:00 PM
              <br />
              Location: Dhulikhel, Nepal
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; 2025 Rotary Club of Dhulikhel. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SiteFooter;
```

---

## Step 5: Build Pages

### 5.1 Simple Page Example: Ongoing Projects

**File:** `src/pages/OngoingProjects.tsx`

```typescript
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
```

**That's it!** Only 18 lines for a complete page.

---

### 5.2 Service Projects Page

**File:** `src/pages/ServiceProjects.tsx`

```typescript
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
```

---

### 5.3 News Page

**File:** `src/pages/News.tsx`

```typescript
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
```

---

## Step 6: Setup Routing

### 6.1 Main App Component

**File:** `src/App.tsx`

```typescript
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
import ServiceProjects from "./pages/ServiceProjects";
import OngoingProjects from "./pages/OngoingProjects";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import "./style.css";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <SiteNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServiceProjects />} />
          <Route
            path="/services/ongoing-projects"
            element={<OngoingProjects />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
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
```

---

## Step 7: Add Styling

### 7.1 Import Bootstrap in main.tsx

**File:** `src/main.tsx`

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

### 7.2 Global CSS Variables

**File:** `src/style.css` (beginning)

```css
:root {
  --color-accent: #0e6d66;
  --color-dark-text: #1a1a1a;
  --color-body-text: #4a4a4a;
  --color-cream-bg: #f8f6f3;
  --color-white: #ffffff;
  --color-border: #e5e1da;
  --transition-smooth: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--color-body-text);
  background-color: var(--color-cream-bg);
}
```

---

### 7.3 Hero Section Styles

```css
.about-hero-section {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.about-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(14, 109, 102, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-hero-title {
  color: white;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Mobile responsive */
@media (max-width: 767px) {
  .about-hero-section {
    height: 300px;
  }

  .about-hero-title {
    font-size: 1.75rem;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .about-hero-section {
    height: 450px;
  }

  .about-hero-title {
    font-size: 2.5rem;
  }
}
```

---

### 7.4 Button Styles

```css
.btn-slide-effect {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  background-color: var(--color-accent);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 8px;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.btn-slide-effect:hover {
  color: var(--color-accent);
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-text {
  flex: 1;
  text-align: center;
}

.btn-arrow {
  font-size: 1.5rem;
  margin-left: 1rem;
}

.ongoing-projects-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
```

---

## Step 8: Run & Build

### 8.1 Development Mode

```bash
npm run dev
```

Open browser to `http://localhost:5173`

### 8.2 Build for Production

```bash
npm run build
```

Output will be in `dist/` folder

### 8.3 Preview Production Build

```bash
npm run preview
```

---

## Key Concepts Explained

### Why Reusable Components?

**Before (repetitive code):**

```typescript
// Every page had 40+ lines of hero code
<section className="about-hero-section">
  <img src={heroImage} alt="..." className="about-hero-image" />
  <div className="about-hero-overlay">
    <h1 className="about-hero-title">TITLE</h1>
  </div>
</section>
```

**After (1 line):**

```typescript
<HeroSection title="TITLE" />
```

### TypeScript Interfaces

```typescript
interface HeroSectionProps {
  title: string; // Define what props the component accepts
}
```

This provides type safety and auto-complete in your editor.

### React Router

```typescript
<Link to="/about">About</Link> // Client-side navigation (no page reload)
```

### CSS Variables

```css
:root {
  --color-accent: #0e6d66; // Define once, use everywhere
}

.button {
  background-color: var(--color-accent); // Reference the variable
}
```

---

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Add a new package
npm install package-name
```

---

## Project Benefits

✅ **90% less code** through reusable components  
✅ **Type-safe** with TypeScript  
✅ **Fast** with Vite build tool  
✅ **Responsive** with Bootstrap grid  
✅ **SEO-friendly** with React Router  
✅ **Maintainable** modular architecture

---

## Next Steps

1. Add more pages (Home, About, Contact)
2. Add images to `src/assets/images/`
3. Customize colors in CSS variables
4. Add more content sections
5. Deploy to hosting (Vercel, Netlify, etc.)

---

**Questions?** Each component is independent and easy to modify. Start with one page and build from there!
