import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authStore";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { register, message } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [localStorage.getItem("token")]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !username || !password || !password2) {
      setError("Please add all fields");
      return;
    }
    if (password !== password2) {
      setError("Your password doesn't match.");
      return;
    }

    register({ name, username, password });
    if (message) {
      setError(message || "Something went wrong.");
      return;
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="form-heading">
            <h2>Register</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="error">
                <p>{error}</p>
              </div>
            )}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
