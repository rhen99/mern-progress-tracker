import { Link } from "react-router-dom";

function ProjectItem() {
  return (
    <li>
      <div className="project">
        <h4>
          <Link to="/123">Project Heading</Link>
        </h4>
        <p className="project-content">Project Steps: 0 - Done - 0</p>
        <div className="project-actions">
          <button className="btn delete">Delete</button>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
