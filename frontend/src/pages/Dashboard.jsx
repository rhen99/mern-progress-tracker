import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="headings">
          <h1>Your Projects</h1>
        </div>
        <div className="content">
          <ul className="project-list">
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
            <li>
              <div className="project">
                <h4>
                  <Link to="#">Project Heading</Link>
                </h4>
                <p className="project-content">Project Steps: 0 - Done - 0</p>
                <div className="project-actions">
                  <button className="btn delete">Delete</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
