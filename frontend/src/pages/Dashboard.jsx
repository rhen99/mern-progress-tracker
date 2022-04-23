import ProjectItem from "../componemts/ProjectItem";
function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="headings">
          <h1>Your Projects</h1>
        </div>
        <div className="content">
          <ul className="project-list">
            <ProjectItem />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
