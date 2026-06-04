import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";
import axios from "axios";
import { useEffect, useState } from "react";

function Urbanizacion() {

  const API_URL = import.meta.env.VITE_API_URL;

  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {

    axios
      .get(`${API_URL}/imagenes/urbanizacion`)
      .then((res) => {
        setImagenes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

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
          Urbanización
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Especialistas en Urbanización
        </p>

        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {imagenes.map((img, index) => (
            <div key={index}>
              <img
               src={`${API_URL}/uploads/urbanizacion/${img}`}
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
          ))}
        </Carousel>

      </div>

    </motion.div>

  );
}

export default Urbanizacion;