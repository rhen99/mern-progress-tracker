import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authStore";
import ProjectItem from "../componemts/ProjectItem";

function Dashboard() {
  const navigate = useNavigate();

  const { isError, getUserData, logout } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData(JSON.parse(localStorage.getItem("token")));
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
          <ul className="project-list">
            <ProjectItem />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
