function Step({ step, checkStep }) {
  return (
    <li>
      <div className="step">
        <div className="step-content">
          <p>{step.name}</p>
        </div>
        <div className="step-actions">
          <button
            className={`btn sm ${step.isDone ? "delete" : "check"}`}
            onClick={() => checkStep(step._id)}
          >
            {step.isDone ? "Uncheck Step" : "Check Step"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default Step;
