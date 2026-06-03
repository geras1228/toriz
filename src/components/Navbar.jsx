import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div
      style={{
        background: "#1f4e79",
        padding: "15px 30px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ margin: 0 }}>TORIZ PALACIOS ALFONSO</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Inicio
        </Link>

        <Link to="/nosotros" style={{ color: "white", textDecoration: "none" }}>
          Nosotros
        </Link>

        <Link to="/experiencia" style={{ color: "white", textDecoration: "none" }}>
          Experiencia
        </Link>
      </div>
    </div>
  );
}

export default Navbar;