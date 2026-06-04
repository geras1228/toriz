import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";
import axios from "axios";
import { useEffect, useState } from "react";


function Vias() {

  const API_URL = import.meta.env.VITE_API_URL;

  const [imagenes, setImagenes] = useState([]);

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
    }}
  >
    <h1
      style={{
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "3rem",
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
          height: "500px",
          objectFit: "cover",
          borderRadius: "15px",
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
        marginTop: "30px",
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