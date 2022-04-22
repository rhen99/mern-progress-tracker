import React from "react";

function Register() {
  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="form-heading">
            <h2>Register</h2>
          </div>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" />
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
