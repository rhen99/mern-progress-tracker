import { useState, useContext } from "react";
import { AuthContext } from "../context/authStore";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, reset } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
    reset();
  };

  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="form-heading">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
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
