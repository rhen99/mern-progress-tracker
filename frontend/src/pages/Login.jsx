import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login, message } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [localStorage.getItem("token")]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError(message || "Please add all fields");
      return;
    }

    login({ username, password });
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
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="error">
                <p>{error}</p>
              </div>
            )}
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
              <button type="submit" className="btn primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
