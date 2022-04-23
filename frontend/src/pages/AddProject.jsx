import { useState } from "react";
import AddedStep from "../componemts/AddedStep";

function AddProject() {
  const [name, setName] = useState("");
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);

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

  const deleteStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };
  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="form-heading">
            <h2>Create a project</h2>
          </div>
          <form>
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
