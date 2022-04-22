import React from "react";

function Login() {
  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="form-heading">
            <h2>Login</h2>
          </div>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
