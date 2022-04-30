import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../context/projectStore";

function ProjectItem({ project }) {
  const { removeProject } = useContext(ProjectContext);
  return (
    <li>
      <div className="project">
        <h4>
          <Link to={`/${project._id}`}>{project.name}</Link>
        </h4>
        <p className="project-content">
          Project Steps: {project.steps.length} - Done -{" "}
          {Math.floor((100 / project.steps.length) * project.progress)}%
        </p>
        <div className="project-actions">
          <button
            className="btn delete"
            onClick={() => removeProject(project._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
