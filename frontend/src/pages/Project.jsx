import { Link } from "react-router-dom";

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
        <div className="progress">
          <div className="progress-bar-outer">
            <div className="progress-bar-inner">
              <span className="progress-text">0%</span>
            </div>
          </div>
        </div>
        <div className="steps">
          <ul className="step-list">
            <li>
              <div className="step">
                <div className="step-content">
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="step-actions">
                  <button className="btn sm check">Check Step</button>
                </div>
              </div>
            </li>
            <li>
              <div className="step">
                <div className="step-content">
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="step-actions">
                  <button className="btn sm check">Check Step</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
