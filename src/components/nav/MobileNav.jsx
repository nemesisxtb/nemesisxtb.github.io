import { Link } from "react-router-dom";
import { usePage, usePageSwitch } from "../../contexts/PageContext";
import pages from "../../App";
import "./mobileNav.css";

const MobileNav = ({ handleClick }) => {
  const page = usePage();
  const pageSwitch = usePageSwitch();

  return (
    <nav className="mobile--nav">
      <ul className="mobile--nav-links">
        {pages.map((p, i) => (
          <li
            key={i}
            className="nav--link"
            onClick={() => {
              pageSwitch(p.name);
              handleClick();
            }}
          >
            <Link to={p.path} className={page === p.name ? "active" : ""}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mobile--socials">
        <a href="mailto:marceelp@proton.me">Mail</a>
        <a href="https://instagram.com/marceelp">Instagram</a>
      </div>
    </nav>
  );
};

export default MobileNav;
