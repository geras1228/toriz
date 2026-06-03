import {Routes, Route } from "react-router-dom";
//import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Nosotros from "./pages/Nosotros";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Experiencia from "./pages/Experiencia";
import Servicios from "./components/Servicios";
import Vias from "./pages/experiencia/Vias";
import Urbanizacion from "./pages/experiencia/Urbanizacion";
import Riego from "./pages/experiencia/Riego";
import Metalicas from "./pages/experiencia/Metalicas";
import Topografia from "./pages/experiencia/Topografia";
import Proyectos from "./pages/experiencia/Proyectos";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import PageLoader from "./components/PageLoader";
import { useState, useEffect } from "react";


function App() {

  const location = useLocation(); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 300);

  return () => clearTimeout(timer);
}, [location.pathname]);

useEffect(() => {
  const theme = localStorage.getItem("theme") || "light";

  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
}, []);



  return (
    <>
      <Header />

      <AnimatePresence mode="wait" > {loading && <PageLoader key="loader" />}
        </AnimatePresence>
        <Routes location={location} key={location.pathname}>
          
          <Route path="/" element={
            <>
              <Hero />
              <Servicios />
              <Contacto />
            </>
          } />

          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/experiencia/vias" element={<Vias />} />
          <Route path="/experiencia/urbanizacion" element={<Urbanizacion />} />
          <Route path="/experiencia/riego" element={<Riego />} />
          <Route path="/experiencia/metalicas" element={<Metalicas />} />
          <Route path="/experiencia/topografia" element={<Topografia />} />
          <Route path="/experiencia/proyectos" element={<Proyectos />} />

        </Routes>
      
    </>
  );
}

export default App;