import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authStore";
import ProjectItem from "../componemts/ProjectItem";

function Dashboard() {
  const navigate = useNavigate();
  const { reset, getData, user } = useContext(AuthContext);

  useEffect(() => {
    getData();
    if (!user) {
      navigate("/login");
    }
    reset();
  }, [reset, getData, user, navigate]);
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
