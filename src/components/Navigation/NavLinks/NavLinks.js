import React from "react";
import "./NavLinks.scss";
import { Link } from 'react-router-dom';

const NavLinks = ({ toggle, nav }) => {
  let style;

  if (nav) {
    style = {
      transform: `translate(0)`,
      opacity: 1,
    };
  }

  return (
    <nav className="nav-slide" style={style}>
      <div className="page-links">
        <Link onClick={toggle} to="/" className={`link-page ${nav ? "link-page-open" : ""}`}>
          <span className="link-text">Home</span>
        </Link>
        <Link onClick={toggle} to="/Portfolio/Astro" className={`link-page ${nav ? "link-page-open" : ""}`}>
        <span className="link-text">Astro</span>
        </Link>
        <Link onClick={toggle} to="/Portfolio/Travel" className={`link-page ${nav ? "link-page-open" : ""}`}>
        <span className="link-text">Travel</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavLinks;
