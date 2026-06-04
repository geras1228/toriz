import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaArrowLeft
} from "react-icons/fa";

import { pageVariants, pageTransition } from "../../animations/pageTransitions";
import axios from "axios";
import { useEffect, useState } from "react";

function Vias() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [imagenes, setImagenes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/imagenes/vias`)
      .then((res) => {
        console.log(res.data);
        setImagenes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(imagenes);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <div
        style={{
          background: "#111",
          color: "white",
          padding: "40px 20px",
          minHeight: "100vh"
        }}
      >
        {/* BOTÓN REGRESAR */}
       <button
                onClick={() => navigate("/experiencia")}
                style={{
                  position: "fixed",
                  top: "100px",
                  left: "25px",
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  border: "none",
                  background: "linear-gradient(135deg,#c89b3c,#f3c66f)",
                  color: "#111827",
                  cursor: "pointer",
                  zIndex: 9999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  boxShadow: "0 10px 30px rgba(200,155,60,.35)",
                  transition: "all .3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <FaArrowLeft />
              </button>

        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "3rem"
          }}
        >
          Vías de Comunicación
        </h1>

        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {imagenes.map((img, index) => {
            console.log(`${API_URL}/uploads/vias/${img}`);

            return (
              <div key={index}>
                <img
                  src={`${API_URL}/uploads/vias/${img}`}
                  alt=""
                  style={{
                    width: "100%",
                    height: "600px",
                    objectFit: "contain",
                    borderRadius: "15px",
                    background: "#111"
                  }}
                />
              </div>
            );
          })}
        </Carousel>

        {/* FOOTER CON ICONOS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            padding: "20px 0",
            borderTop: "1px solid #333",
            marginTop: "30px"
          }}
        >
          <FaFacebook size={28} style={{ cursor: "pointer" }} />
          <FaWhatsapp size={28} style={{ cursor: "pointer" }} />
          <FaInstagram size={28} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </motion.div>
  );
}

export default Vias;