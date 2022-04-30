function ProgressBar({ progress, length }) {
  return (
    <div className="progress">
      <div className="progress-bar-outer">
        <div
          className="progress-bar-inner"
          style={{ width: `${Math.floor((100 / length) * progress)}%` }}
        >
          <span className="progress-text">
            {progress < length
              ? `${Math.floor((100 / length) * progress)}%`
              : "Done!!!"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
