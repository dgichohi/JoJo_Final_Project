import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-column">
          <h4>Main</h4>
          <Link to="/">Home</Link>
        </div>

        <div className="footer-column">
          <h4>About the Creator</h4>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-column">
          <h3>Parts</h3>
          <ul>
            <li><Link to="/part1">Part 1</Link></li>
            <li><Link to="/part2">Part 2</Link></li>
            <li><Link to="/part3">Part 3</Link></li>
            <li><Link to="/part4">Part 4</Link></li>
            <li><Link to="/part5">Part 5</Link></li>
          </ul>
        </div>

      </div>


      <div className="footer-bottom">
        © {new Date().getFullYear()} This is a JoJo’s Bizarre Adventure fan class project.  All characters and content belong to Hirohiko Araki.
      </div>
    </footer>
  );
};

export default Footer;
