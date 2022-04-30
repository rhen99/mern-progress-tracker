import { useState, useEffect, useContext } from "react";
import { ProjectContext } from "../context/projectStore";
import { AuthContext } from "../context/authStore";
import { Link, useNavigate } from "react-router-dom";
import AddedStep from "../componemts/AddedStep";

function AddProject() {
  const [name, setName] = useState("");
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { addProject, message } = useContext(ProjectContext);
  const { logout, getUserData, isError } = useContext(AuthContext);

  const addStep = (e) => {
    e.preventDefault();
    if (!step) return;

    setSteps((prevSteps) => [
      ...prevSteps,
      {
        id: Math.floor(Math.random() * 100000),
        name: step,
        isDone: false,
      },
    ]);
    setStep("");
  };
  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    const newProject = {
      name,
      steps,
    };
    if (!name) {
      setError("Please add a title.");
      return;
    }
    if (steps.length < 1) {
      setError("Please add at least 1 step.");
      return;
    }
    addProject(newProject);
    if (message) {
      setError(message);
      return;
    }
    setName("");
    setSteps([]);
    navigate("/");
  };
  const deleteStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      logout();
      navigate("/login");
    } else {
      getUserData(JSON.parse(localStorage.getItem("token")));
      if (isError) {
        logout();
      }
    }
  }, [localStorage.getItem("token")]);
  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="form-heading">
            <div className="page-action">
              <Link className="btn primary" to="/">
                Go Back
              </Link>
            </div>
            <h2>Create a project</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="error">
                <p>{error}</p>
              </div>
            )}
            <div className="form-group">
              <label>Project Title</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-inline">
              <div className="form-group">
                <label>Step</label>
                <input
                  type="text"
                  onChange={(e) => setStep(e.target.value)}
                  value={step}
                />
              </div>
              <div className="form-group">
                <button className="btn primary" onClick={addStep}>
                  Add Step
                </button>
              </div>
            </div>
            <ul className="added-steps">
              {steps.map((added_step, index) => (
                <AddedStep
                  key={index}
                  deleteStep={deleteStep}
                  step={added_step}
                />
              ))}
            </ul>
            <div className="form-group">
              <button type="submit" className="btn primary">
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProject;
