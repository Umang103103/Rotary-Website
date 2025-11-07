import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

const SiteNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show navbar when at top of page
      if (currentScrollY < 100) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scroll when menu is open
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <nav
        className={`site-navbar ${scrolled ? "scrolled" : ""} ${
          navVisible ? "visible" : "hidden"
        }`}
      >
        <Container>
          <div className="navbar-content">
            <Link to="/" className="brand-logo" onClick={closeMenu}>
              Rotary Club of Dhulikhel
            </Link>

            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </Container>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span className="close-icon">
            <span></span>
            <span></span>
          </span>
        </button>

        <div className="menu-container">
          <nav className="menu-nav">
            <NavLink to="/" onClick={closeMenu} end>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink to="/services" onClick={closeMenu}>
              Service Projects
            </NavLink>
            <NavLink to="/get-involve" onClick={closeMenu}>
              Get Involved
            </NavLink>
            <NavLink to="/news" onClick={closeMenu}>
              News
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>

          <div className="menu-contact">
            <div className="contact-info">
              <p className="contact-heading">Contact</p>
              <p>info@rotarydhulikhel.org.np</p>
              <p>+977-11-490000</p>
            </div>

            <div className="social-links-menu">
              <a
                href="https://facebook.com/rotarydhulikhel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://youtube.com/@rotarydhulikhel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteNavbar;
