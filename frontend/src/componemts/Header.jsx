import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">Progress Tracker</Link>
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <Link to="/register">Register</Link>
            </li>
            <li className="navigation-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
