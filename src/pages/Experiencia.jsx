import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import viasImg from "../assets/viasImg.png";
import urbanizacionImg from "../assets/urbanizacion.png";
import riegoImg from "../assets/riego.png";
import metalicasImg from "../assets/metalicas.png";
import topografiaImg from "../assets/topografia.png";
import proyectosImg from "../assets/proyectos.png";

function Experiencia() {

  const navigate = useNavigate();

  const cards = [
    {
      title: "Vías de Comunicación",
     image: viasImg,
      items: [
        "Carreteras",
        "Caminos",
        "Terracerías"
      ],
      route: "/experiencia/vias"
    },

    {
      title: "Urbanización",
      image: urbanizacionImg,
      items: [
        "Casa habitación",
        "Calles",
        "Pavimentación",
        "Líneas de agua",
        "Drenaje",
        "Líneas eléctricas"
      ],
      route: "/experiencia/urbanizacion"
    },

    {
      title: "Sistemas de Riego",
      image: riegoImg,
      items: [
        "Cárcamos de bombeo",
        "Líneas de conducción",
        "Riego por goteo",
        "Aspersión"
      ],
      route: "/experiencia/riego"
    },

    {
      title: "Estructuras Metálicas",
      image: metalicasImg,
      items: [
        "Domos",
        "Tejabanes",
        "Bodegas"
      ],
      route: "/experiencia/metalicas"
    },

    {
      title: "Topografía",
      image: topografiaImg,
      items: [
        "Levantamientos topográficos",
        "Replanteos"
      ],
      route: "/experiencia/topografia"
    },

    {
      title: "Proyectos Ejecutivos",
      image: proyectosImg,
      items: [
        "Teléfono",
        "Correo",
        "Oficina"
      ],
      route: "/experiencia/proyectos"
    }
  ];

  return (
   <div
  style={{
    background: "#f4f4f4",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "60px 15px",
    position: "relative",

     display: "flex",
     flexDirection: "column",
     justifyContent: "space-between"
    
  }}
>

    <div> 

      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "2rem",
          marginBottom: "10px"
        }}
      >
        Nuestra Experiencia
      </h1>

      <div className="grid">

        {cards.map((card, index) => (

          <div
            key={index}
            className="col-12 md:col-6 lg:col-4"
          >

            <Card
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#1c1c1c",
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                transition: "0.3s",
                height: "100%"
              }}
            >

              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "20px" }}>

                <h2
                  style={{
                    color: "#c89b3c",
                    marginBottom: "15px"
                  }}
                >
                  {card.title}
                </h2>

                <ul style={{ lineHeight: 2 }}>
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <Button
                  label="Ver más"
                  style={{
                    marginTop: "20px",
                    background: "#c89b3c",
                    border: "none",
                    width: "100%"
                  }}
                  onClick={() => navigate(card.route)}
                />

              </div>

            </Card>

          </div>

        ))}
        
        </div>

      </div>

           {/* FOOTER */}
     <div
        style={{
            background: "#000",
            marginTop: "50px",

            /* 👇 esto hace que se expanda */
            marginLeft: "-15px",
            marginRight: "-15px",

            padding: "35px 20px",
            textAlign: "center"
        }}
        >
        <h3
            style={{
            color: "#c89b3c",
            marginBottom: "10px"
            }}
        >
            Toriz Palacios Alfonso
        </h3>

        <p
            style={{
            color: "#aaa",
            margin: 0
            }}
        >
            © {new Date().getFullYear()} Todos los derechos reservados
        </p>

        <p
            style={{
            color: "#777",
            marginTop: "8px",
            fontSize: "14px"
            }}
        >
            Ingeniería • Construcción • Proyectos
        </p>
        </div>

    </div>
  );
}

export default Experiencia;