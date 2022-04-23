import { Link } from "react-router-dom";
import ProgressBar from "../componemts/ProgressBar";
import Step from "../componemts/Step";

function Project() {
  return (
    <>
      <div className="container">
        <div className="headings">
          <div className="page-action">
            <Link className="btn primary" to="/">
              Go Back
            </Link>
          </div>
          <h1>Your Project</h1>
        </div>
        <ProgressBar />
        <div className="steps">
          <ul className="step-list">
            <Step />
            <Step />
            <Step />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
