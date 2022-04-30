import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authStore";
import { ProjectContext } from "../context/projectStore";
import ProjectItem from "../componemts/ProjectItem";

function Dashboard() {
  const navigate = useNavigate();

  const { isError, getUserData, logout } = useContext(AuthContext);
  const { getProjects, projects, clearProject } = useContext(ProjectContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData(JSON.parse(localStorage.getItem("token")));
      getProjects();
      clearProject();
      if (isError) {
        logout();
      }
    } else {
      navigate("/login");
    }
  }, [localStorage.getItem("token")]);
  return (
    <>
      <div className="container">
        <div className="headings">
          <h1>Your Projects</h1>
        </div>
        <div className="content">
          <div className="content-actions">
            <Link to="/create" className="btn primary">
              Add Project
            </Link>
          </div>
          <ul className="project-list">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectItem key={project._id} project={project} />
              ))
            ) : (
              <li>
                <div className="project">
                  <p className="project-content">
                    You have no listed projects.
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
