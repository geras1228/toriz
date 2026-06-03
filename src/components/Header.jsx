import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { useState, useEffect } from "react";

function Header() {
 const [isMobile, setIsMobile] = useState(
  window.innerWidth < 768
);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener("resize", handleResize);
}, []);

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // ✅ cargar tema guardado
 useEffect(() => {
  const currentTheme = localStorage.getItem("theme");
  setDarkMode(currentTheme === "dark");
}, []);

  // ✅ cambiar tema
 const toggleTheme = () => {
  const newTheme = darkMode ? "light" : "dark";

  document.body.classList.remove("light", "dark");
  document.body.classList.add(newTheme);

  localStorage.setItem("theme", newTheme);
  setDarkMode(newTheme === "dark");
};

  // ✅ menú
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Nosotros",
      icon: "pi pi-users",
      command: () => navigate("/nosotros"),
    },
    {
      label: "Experiencia",
      icon: "pi pi-briefcase",
      command: () => navigate("/experiencia"),
    },

    
  ];

  // ✅ botón dark mode
  const end = (
    
    <div
    style={{
      display: "flex",
      gap: "12px",
      alignItems: "center"
    }}
  >

    {/* 🔥 BOTÓN ADMIN */}
    {!isMobile && (
    <button
      onClick={() => {
        window.location.href = "http://localhost:3001";
      }}
      style={{
        padding: "12px 22px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        background: "linear-gradient(135deg,#111827,#1f2937)",
        boxShadow: "0 10px 25px rgba(0,0,0,.20)",
        color: "white",
        fontWeight: "700",
        fontSize: "14px",
        transition: "0.3s"
      }}
    >
      Admin
    </button>
    )}

    {/* 🌙 DARK MODE */}
    <button
      onClick={toggleTheme}
      style={{
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        border: "none",
        cursor: "pointer",
        background: darkMode ? "#222" : "#eee",
        color: darkMode ? "#fff" : "#111",
        fontSize: "18px",
      }}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>

  </div>

);

    const start = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}
  >
    <i
      className="pi pi-building"
      style={{
        fontSize: "1.8rem",
        color: "#c89b3c"
      }}
    />

    <div>
      <div
        style={{
          fontWeight: "800",
          fontSize: "1.4rem"
        }}
      >
        TORIZ
      </div>

      <div
        style={{
          fontSize: ".75rem",
          color: "#64748b"
        }}
      >
        Ingeniería & Construcción
      </div>
    </div>
  </div>
);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,0.5)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: 1000,
      }}
    >
      {/* 🔥 Barra superior */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "8px",
          fontSize: "13px",
          letterSpacing: "1px",
        }}
      >
        Diseño • Proyecto • Construcción • Topografia
      </div>



      {/* 🔥 Menú */}
     <Menubar
     
  model={items}
  start={start}
  end={end}
  style={{
    padding: "10px 40px",
    border: "none",
    borderBottom: "1px solid #e5e5e5",
    borderRadius: 0,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(20px)",
    display: "flex",
    justifyContent: "space-between", // 👈 ESTO LO EMPUJA A LA DERECHA
    boxShadow: "0 10px 30px rgba(0,0,0,.05)"
  }}
      />

    

    </div>
  );
}

export default Header;