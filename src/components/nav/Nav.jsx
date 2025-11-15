import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePage, usePageSwitch } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import { pages } from "../../App.jsx";
import "./nav.css";

const Nav = () => {
  const page = usePage();
  const pageSwitch = usePageSwitch();
  const [title, updateTitle] = useTextAnimation(page);

  useEffect(() => updateTitle(page), [page]);

  return (
    <nav className="nav--section">
      <h2>{title}</h2>
      <ul className="nav--menu">
        {pages.map((p, i) => (
          <li key={i} className="nav--link" onClick={() => pageSwitch(p.name)}>
            <Link to={p.path} className={page === p.name ? "active" : ""}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
