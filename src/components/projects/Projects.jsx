import { useState, useEffect } from "react";
import { usePage } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import projects from "./data";
import "./projects.css";

const Projects = () => {
  const page = usePage();
  const [project, setProject] = useState(0);
  const [title, setTitle] = useTextAnimation("");
  const [animatedTitle, setAnimatedTitle] = useTextAnimation("");

  useEffect(() => {
    const int = setInterval(() => {
      setTitle(projects[Math.floor(Math.random() * projects.length)].title);
    }, 5000);
    return () => clearInterval(int);
  }, []);

  useEffect(() => setAnimatedTitle(title), [title]);

  return (
    <section className={`projects--section ${page === "Projects" ? "visible" : "invisible"}`}>
      <div className="project--titles">
        {projects.map((p, i) => (
          <h3
            key={i}
            onClick={() => setProject(i)}
            className={`project--title ${project === i ? "active-title" : ""}`}
          >
            {p.title === title ? animatedTitle : p.title}
          </h3>
        ))}
      </div>

      {projects.map((p, i) => (
        <div
          key={i}
          className="project--info"
          style={{ display: project === i ? "block" : "none" }}
        >
          <small className="project--description">{p.description}</small>

          <div className="project--links">
            {p.github && p.live ? (
              <>
                <a href={p.github} className="project--link" target="_blank">
                  View Github
                </a>

                <a href={p.live} className="project--link" target="_blank">
                  View site
                </a>
              </>
            ) : (
              <p>In progress, coming soon ...</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
