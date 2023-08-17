import { useParams } from "react-router-dom";
import { AppState } from "../context/AppContext.jsx";
import SimpleNavBar from "../components/simpleNavbar/SimpleNavBar.jsx";
import { BsGithub } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";

const Project = () => {
  const { projects } = AppState();
  const { projectId } = useParams();
  const project = projects.find((project) => project.id == projectId);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="app__Project">
      <SimpleNavBar />
      <div className="project-content">
        <img src={project.largeImg} alt={project.title} />
        <div className="buttons">
          <a
            href={project.codeLink}
            rel="noreferrer"
            target="_blank"
            className="git-button"
          >
            <BsGithub />
          </a>
          {project.projectLink && (
            <a
              href={project.projectLink}
              rel="noreferrer"
              target="_blank"
              className="live-button"
            >
              Go Live
            </a>
          )}
        </div>
        <div className="readme">
          <ReactMarkdown className="react-markdown" remarkPlugins={[remarkGfm]}>
            {project.readme}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Project;
