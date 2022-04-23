function AddedStep({ step, deleteStep }) {
  return (
    <li>
      <div className="added-step">
        <p>{step.name}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteStep(step.id);
          }}
        >
          &times;
        </button>
      </div>
    </li>
  );
}

export default AddedStep;
