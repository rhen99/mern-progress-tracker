import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authStore";
import { Link } from "react-router-dom";

function Header() {
  const { logout, reset, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    reset();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">Progress Tracker</Link>
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            {user ? (
              <li>
                <button
                  className="btn primary logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="navigation-item">
                  <Link to="/register">Register</Link>
                </li>
                <li className="navigation-item">
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
