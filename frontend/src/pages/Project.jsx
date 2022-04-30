import { useEffect, useContext, useState } from "react";
import { ProjectContext } from "../context/projectStore";
import { AuthContext } from "../context/authStore";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProgressBar from "../componemts/ProgressBar";
import Step from "../componemts/Step";

function Project() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { singleProject, project, updateProject } = useContext(ProjectContext);
  const { isError, getUserData, logout } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [steps, setSteps] = useState([]);
  const [progress, setProgress] = useState(0);

  const checkStep = (id) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) =>
        step._id === id
          ? {
              ...step,
              isDone: !step.isDone,
            }
          : step
      )
    );

    setUpdate(true);
  };

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

  useEffect(() => {
    if (!project || project._id !== id) {
      setIsLoading(true);
      singleProject(id);
    } else {
      setSteps(project.steps);
      setProgress(project.progress);
      setIsLoading(false);
    }
  }, [project]);

  useEffect(() => {
    if (update) {
      const computedProgress = steps.filter(
        (step) => step.isDone === true
      ).length;
      updateProject(id, { steps, progress: computedProgress });
      setProgress(computedProgress);
      setUpdate(false);
    }
  }, [steps, progress, update]);
  if (!isLoading && project) {
    return (
      <>
        <div className="container">
          <div className="headings">
            <div className="page-action">
              <Link className="btn primary" to="/">
                Go Back
              </Link>
            </div>
            <h1>{project.name}</h1>
          </div>
          <ProgressBar progress={progress} length={steps.length} />
          <div className="steps">
            <ul className="step-list">
              {steps.map((step) => (
                <Step step={step} key={step._id} checkStep={checkStep} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
