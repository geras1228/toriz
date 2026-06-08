import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

// IMPORTA TUS IMÁGENES
import urbanizacionImg from "../assets/urbanizacion.png";
import topografiaImg from "../assets/topografia.png";
import viasImg from "../assets/viasImg.png";
import metalicasImg from "../assets/metalicas.png";
import riegoImg from "../assets/riego.png";
import proyectosImg from "../assets/proyectos.png";

function Servicios() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
  nombre: "",
  email: "",
  telefono: "",
  mensaje: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const enviarFormulario = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "http://localhost:3001/contacto",
      formData
    );

    alert("Mensaje enviado correctamente");

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    });

 } catch (error) {

  console.log(error);

  alert("Error al enviar mensaje");

}

};

 const servicios = [
  {
    titulo: "Urbanización",
    icono: "pi pi-building",
    descripcion: "Diseño y desarrollo de zonas urbanas modernas y funcionales.",
    imagen: urbanizacionImg,
    ruta: "/experiencia/urbanizacion"
  },

  {
    titulo: "Topografía",
    icono: "pi pi-map",
    descripcion: "Levantamientos topográficos precisos para ingeniería.",
    imagen: topografiaImg,
    ruta: "/experiencia/topografia"
  },

  {
    titulo: "Vías Terrestres",
    icono: "pi pi-directions",
    descripcion: "Construcción y mantenimiento de carreteras.",
    imagen: viasImg,
    ruta: "/experiencia/vias"
  },

  {
    titulo: "Estructuras Metálicas",
    icono: "pi pi-home",
    descripcion: "Diseño y montaje de estructuras seguras.",
    imagen: metalicasImg,
    ruta: "/experiencia/metalicas"
  },

  {
    titulo: "Riego",
    icono: "pi pi-sliders-h",
    descripcion: "Sistemas de riego eficientes para agricultura.",
    imagen: riegoImg,
    ruta: "/experiencia/riego"
  },

  {
    titulo: "Proyectos",
    icono: "pi pi-briefcase",
    descripcion: "Gestión integral de proyectos de construcción.",
    imagen: proyectosImg,
    ruta: "/experiencia/proyectos"
  }
];

  return (
    <section style={{ padding: "100px 8%", background: "#f5f5f5" }}>

    <div
  style={{
    textAlign: "center",
    marginBottom: "70px"
  }}
>
  <span
    style={{
      color: "#c89b3c",
      letterSpacing: "4px",
      fontWeight: "600",
      textTransform: "uppercase"
    }}
  >
    Ingeniería y Construcción
  </span>

  <h2
    style={{
      fontSize: "clamp(2rem,5vw,56px)",
      marginTop: "15px",
      marginBottom: "15px",
      fontWeight: "800",
      color: "#111827"
    }}
  >
    Nuestros Servicios
  </h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      color: "#6b7280",
      fontSize: "18px",
      lineHeight: "1.8"
    }}
  >
    Soluciones integrales para urbanización,
    topografía, vías terrestres, estructuras
    metálicas, sistemas de riego y gestión
    de proyectos.
  </p>
</div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px"
      }}>

        {servicios.map((servicio, index) => (
             <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >

         <Card
            key={index}
            onClick={() => navigate(servicio.ruta)}
            header={
                <div style={{ overflow: "hidden", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", position: "relative" }}>
              <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    transition: "transform .6s ease",
                    filter: "brightness(.85)"
                  }}
                  className="card-img"
                />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,.35), transparent)"
                    }}
                  />

                </div>
            }
            title={
                <span style={{ fontSize: "22px", fontWeight: "600", color: "#1f2937" }}>
                {servicio.titulo}
                </span>
            }
           subTitle={
              <span
                style={{
                  color: "#c89b3c",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontSize: "12px"
                }}
              >
                Ingeniería Especializada
              </span>
            }
            className="custom-card"
           style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "none",
              borderTop: "4px solid #c89b3c"
            }}
            >

            <div
                  style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "18px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-35px",
                  right: "25px",
                  boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                  border: "3px solid #fff"
                }}
              >
                  <i
                    className={servicio.icono}
                    style={{
                      fontSize: "1.6rem",
                      color: "#c89b3c"
                    }}
                  />

                  

              </div>

       <div style={{ position: "relative" }}>

            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "#fff8e7",
                color: "#c89b3c",
                fontSize: "11px",
                fontWeight: "700",
                marginBottom: "12px"
              }}
            >
              SERVICIO
            </div>


            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                {servicio.descripcion}
            </p>

                  <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#c89b3c",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition:".3s"
                      }}
                  >
                      Ver proyectos
                      <i className="pi pi-arrow-right" />
                  </div>


            </div>
            </Card>
        </motion.div>
        ))}

      </div>

      <div
  style={{
    marginTop: "120px",
    marginBottom: "100px"
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: "50px"
    }}
  >
    <span
      style={{
        color: "#c89b3c",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontWeight: "600"
      }}
    >
      Nuestra Experiencia
    </span>

    <h3
      style={{
        fontSize: "3rem",
        fontWeight: "800",
        color: "#111827",
        marginTop: "15px"
      }}
    >
      ¿Por qué elegirnos?
    </h3>

    <div
      style={{
        width:"90%",
        maxWidth: "1100px",
        height: "4px",
        background: "#c89b3c",
        borderRadius: "999px",
        margin: "20px auto"
      }}
    />

    <p
      style={{
        color: "#64748b",
        maxWidth: "1000px",
        margin: "15px auto 0"
      }}
    >
      Más de una década desarrollando proyectos
      de infraestructura, urbanización y construcción
      con calidad, innovación y compromiso.
    </p>
  </div>

  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap:"wrap",
    gap: "8px",
    marginTop: "45px",
   
  }}
>
      {[
          {
            titulo: "Urbanización",
            icono: "pi pi-building"
          },
          {
            titulo: "Topografía",
            icono: "pi pi-map"
          },
          {
            titulo: "Vías Terrestres",
            icono: "pi pi-directions"
          },
          {
            titulo: "Estructuras Metálicas",
            icono: "pi pi-home"
          },
          {
            titulo: "Sistemas de Riego",
            icono: "pi pi-sliders-h"
          },
          {
            titulo: "Gestión de Proyectos",
            icono: "pi pi-briefcase"
          }
        ].map((item) => (
         <motion.div
            key={item.titulo}
            whileHover={{
              y: -4,
              scale: 1.03
            }}
          >
            <div
             style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#fff",
              padding: "10px 14px",
              borderRadius: "14px",
              border: "1px solid #eaeaea",
              boxShadow: "0 4px 12px rgba(0,0,0,.04)"
            }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "12px",
                  background: "#fff8e7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <i
                  className={item.icono}
                  style={{
                    fontSize: ".95rem",
                    color: "#c89b3c"
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "15px"
                  }}
                >
                  {item.titulo}
                </div>

              
              </div>
            </div>
          </motion.div>
        ))}
  </div>
</div>



       <div
        style={{
          marginTop: "100px",
          background:"linear-gradient(135deg,#0f172a,#111827)",
          padding: "70px 50px",
          borderRadius: "35px",
          border: "1px solid rgba(255,255,255,.08)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 60px rgba(0,0,0,.35)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        
  <h2
    style={{
      color: "white",
      textAlign: "center",
     fontSize:"clamp(2rem,5vw,52px)",
      marginBottom: "15px",
      fontWeight: "800",
      letterSpacing: "1px"
    }}
  >
    Solicita una Cotización
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#cbd5e1",
      marginBottom: "45px",
      fontSize: "18px"
    }}
  >
    Cuéntanos sobre tu proyecto y te contactaremos pronto
  </p>

  <form
    onSubmit={enviarFormulario}
    style={{
      display: "grid",
      gap: "22px",
      maxWidth: "750px",
      margin: "0 auto"
    }}
  >
    <input
      type="text"
      name="nombre"
      placeholder="Nombre completo"
      value={formData.nombre}
      onChange={handleChange}
      required
      style={{
        padding: "18px 20px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.08)",
        color: "white",
        fontSize: "16px",
        outline: "none",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease"
      }}
    />

    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      value={formData.email}
      onChange={handleChange}
      required
      style={{
        padding: "18px 20px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.08)",
        color: "white",
        fontSize: "16px",
        outline: "none",
        backdropFilter: "blur(10px)"
      }}
    />

    <input
      type="text"
      name="telefono"
      placeholder="Número telefónico"
      value={formData.telefono}
      onChange={handleChange}
      required
      style={{
        padding: "18px 20px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.08)",
        color: "white",
        fontSize: "16px",
        outline: "none",
        backdropFilter: "blur(10px)"
      }}
    />

    <textarea
      name="mensaje"
      placeholder="¿En qué te podemos ayudar?"
      rows="6"
      value={formData.mensaje}
      onChange={handleChange}
      required
      style={{
        padding: "18px 20px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.08)",
        color: "white",
        fontSize: "16px",
        outline: "none",
        resize: "none",
        backdropFilter: "blur(10px)"
      }}
    />

    <button
      type="submit"
      style={{
        padding: "18px",
        borderRadius: "14px",
        border: "none",
        background: "linear-gradient(90deg, #2563eb, #3b82f6)",
        color: "white",
        fontSize: "18px",
        fontWeight: "700",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 30px rgba(37,99,235,0.35)"
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "translateY(-3px)";
        e.target.style.boxShadow =
          "0 15px 35px rgba(37,99,235,0.5)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow =
          "0 10px 30px rgba(37,99,235,0.35)";
      }}
    >
      Enviar Mensaje
    </button>
  </form>
  
</div>

    </section>
    
  )
}

export default Servicios;