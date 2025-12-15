import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [partsOpen, setPartsOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => {
    setMenuOpen(false);
    setPartsOpen(false);
  };

  const toggleParts = () => setPartsOpen((v) => !v);

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          JoJo's Bizarre Adventure
        </Link>
      </h2>

      {/* Hamburger*/}
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        &#8801;
      </button>

      <ul className={`navbar-links ${menuOpen ? "isOpen" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        {/* Dropdown menu for Parts */}
        <li className={`dropdown ${partsOpen ? "open" : ""}`}>
          <button
            type="button"
            className="dropdown-toggle"
            onClick={toggleParts}
            aria-expanded={partsOpen}
          >
            Parts <span className="caret">▾</span>
          </button>

          <ul className="dropdown-menu">
            <li><Link to="/part1" onClick={closeMenu}>Part 1</Link></li>
            <li><Link to="/part2" onClick={closeMenu}>Part 2</Link></li>
            <li><Link to="/part3" onClick={closeMenu}>Part 3</Link></li>
            <li><Link to="/part4" onClick={closeMenu}>Part 4</Link></li>
            <li><Link to="/part5" onClick={closeMenu}>Part 5</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
