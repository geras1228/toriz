import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="navbar-logo">
        TORIZ PALACIOS ALFONSO
      </h2>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Inicio
        </Link>

        <Link to="/nosotros" className="navbar-link">
          Nosotros
        </Link>

        <Link to="/experiencia" className="navbar-link">
          Experiencia
        </Link>
      </div>
    </div>
  );
}

export default Navbar;