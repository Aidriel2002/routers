import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <h1>Dix</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/trash">Trash</Link>
      </div>
    </nav>
  );
}
