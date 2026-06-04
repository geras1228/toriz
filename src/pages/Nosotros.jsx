import { TabView, TabPanel } from "primereact/tabview";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { motion } from "framer-motion";
import { Avatar } from "primereact/avatar";

function Nosotros() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
     <div
          style={{
            marginTop: "80px",
            minHeight: "100vh",
            background:
              "linear-gradient(180deg,#f8fafc,#eef2f7)"
          }}
        >

        {/* HERO */}
        <div
          style={{
            background:
              "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "120px 20px",
            textAlign: "center",
            color: "white"
          }}
        >
          <h1
            style={{
              fontSize:"clamp(2.2rem,6vw,4rem)",
              marginBottom: "15px",
              fontWeight: "800"
            }}
          >
            Sobre Nosotros
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              fontSize: "1.2rem",
              opacity: 0.9
            }}
          >
            Especialistas en urbanización, topografía,
            vías terrestres, estructuras metálicas,
            sistemas de riego y gestión integral de proyectos.
          </p>
        </div>

        {/* ESTADÍSTICAS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            padding: "40px",
            marginTop: "-60px"
          }}
        >
         <Card
              style={{
                background: "rgba(255,255,255,.95)",
                borderRadius: "24px",
                textAlign: "center",
                padding: "20px",
                borderTop: "4px solid #c89b3c",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)"
              }}
            >
              <h1
                style={{
                  fontSize: "3rem",
                  margin: 0,
                  color: "#c89b3c",
                  fontWeight: "800"
                }}
              >
                10+
              </h1>

              <h3
                style={{
                  color: "#111827"
                }}
              >
                Años de Experiencia
              </h3>
            </Card>

          <Card
              style={{
                background: "rgba(255,255,255,.95)",
                borderRadius: "24px",
                textAlign: "center",
                padding: "20px",
                borderTop: "4px solid #c89b3c",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)"
              }}
            >
              <h1
                style={{
                  fontSize: "3rem",
                  margin: 0,
                  color: "#c89b3c",
                  fontWeight: "800"
                }}
              >
                250+
              </h1>

              <h3
                style={{
                  color: "#111827"
                }}
              >
                Proyectos Terminados 
              </h3>
            </Card>

          <Card
                style={{
                  background: "rgba(255,255,255,.95)",
                  borderRadius: "24px",
                  textAlign: "center",
                  padding: "20px",
                  borderTop: "4px solid #c89b3c",
                  boxShadow: "0 15px 35px rgba(0,0,0,.08)"
                }}
              >
                <h1
                  style={{
                    fontSize: "3rem",
                    margin: 0,
                    color: "#c89b3c",
                    fontWeight: "800"
                  }}
                >
                  100%
                </h1>

                <h3
                  style={{
                    color: "#111827"
                  }}
                >
                  Compromiso
                </h3>
              </Card>

         <Card
              style={{
                background: "rgba(255,255,255,.95)",
                borderRadius: "24px",
                textAlign: "center",
                padding: "20px",
                borderTop: "4px solid #c89b3c",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)"
              }}
            >
              <h1
                style={{
                  fontSize: "3rem",
                  margin: 0,
                  color: "#c89b3c",
                  fontWeight: "800"
                }}
              >
                50+
              </h1>

              <h3
                style={{
                  color: "#111827"
                }}
              >
                Clientes Satisfechos
              </h3>
            </Card>
        </div>

        {/* CONTENIDO */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            padding: "20px"
          }}
        >
          <TabView  style={{
              background: "white",
              borderRadius: "25px",
              padding: "20px",
              boxShadow: "0 20px 50px rgba(0,0,0,.08)"
            }}
            >

            {/* HISTORIA */}
            <TabPanel header="Historia">

              <Divider align="left">
                <span
                  style={{
                    color: "#c89b3c",
                    fontWeight: "700",
                    fontSize: "1.1rem"
                  }}
                >
                  Nuestra Historia
                </span>
              </Divider>

              <div
                style={{
                display:"flex",
                  flexDirection:window.innerWidth < 768 ? "column" : "row",
                  alignItems:"center",
                  gap:"25px",
                }}
              >

                {[
                  {
                    año: "2015",
                    texto:
                      "Inicio de operaciones en proyectos de urbanización e infraestructura."
                  },
                  {
                    año: "2018",
                    texto:
                      "Expansión de servicios hacia topografía y vías terrestres."
                  },
                  {
                    año: "2022",
                    texto:
                      "Incorporación de estructuras metálicas y sistemas de riego."
                  },
                  {
                    año: "Actualidad",
                    texto:
                      "Desarrollo integral de proyectos de ingeniería y construcción."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                   style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "25px",
                      background: "#fff",
                      padding: "25px",
                      borderRadius: "24px",
                      border: "1px solid rgba(200,155,60,.15)",
                      boxShadow: "0 15px 30px rgba(0,0,0,.05)"
                    }}
                  >
                    <div
                     style={{
                          minWidth: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg,#c89b3c,#f3c66f)",
                          color: "#111827",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          boxShadow:
                            "0 10px 30px rgba(200,155,60,.35)"
                        }}
                    >
                      {item.año}
                    </div>

                    <div>
                      <h3>{item.año}</h3>
                      <p style={{ color: "#64748b" }}>
                        {item.texto}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </TabPanel>

            {/* EQUIPO */}
           <TabPanel header="Equipo">

              <Divider align="left">
                <span
                  style={{
                    color:"#c89b3c",
                    fontWeight:"700",
                    fontSize:"1.1rem"
                  }}
                >
                  Nuestro Equipo
                </span>
              </Divider>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
      marginTop: "25px"
    }}
  >

    {[
      {
        puesto: "Director General",
        area: "Ingeniería Civil"
      },
      {
        puesto: "Topografía",
        area: "Levantamientos de Precisión"
      },
      {
        puesto: "Proyectos",
        area: "Supervisión y Planeación"
      }
    ].map((item, index) => (
      <Card
          key={index}
          style={{
            borderRadius:"24px",
            textAlign:"center",
            padding:"15px",
            border:"1px solid rgba(200,155,60,.15)",
            boxShadow:"0 15px 30px rgba(0,0,0,.05)"
          }}
        >
       <Avatar
            icon="pi pi-user"
            size="xlarge"
            shape="circle"
            style={{
              width:"100px",
              height:"100px",
              marginBottom:"15px",
              background:
                "linear-gradient(135deg,#c89b3c,#f3c66f)",
              color:"#111827"
            }}
          />

        <h2>{item.puesto}</h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "15px"
          }}
        >
          {item.area}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px"
          }}
        >
          <i
              className="pi pi-briefcase"
              style={{
                color:"#c89b3c",
                fontSize:"1.2rem"
              }}
            />

            <i
              className="pi pi-building"
              style={{
                color:"#c89b3c",
                fontSize:"1.2rem"
              }}
            />

            <i
              className="pi pi-users"
              style={{
                color:"#c89b3c",
                fontSize:"1.2rem"
              }}
            />
        </div>
      </Card>
    ))}

  </div>

</TabPanel>

            {/* PROYECTOS */}
          <TabPanel header="Proyectos">

            <Divider align="left">
              <span
                style={{
                  color:"#c89b3c",
                  fontWeight:"700",
                  fontSize:"1.1rem"
                }}
              >
                Proyectos Destacados
              </span>
             </Divider>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(320px,1fr))",
      gap: "25px",
      marginTop: "25px"
    }}
  >

    {[
      "Urbanización",
      "Topografía",
      "Vías Terrestres"
    ].map((titulo, index) => (
      <Card
          key={index}
          style={{
            overflow:"hidden",
            borderRadius:"24px",
            border:"1px solid rgba(200,155,60,.15)",
            boxShadow:"0 15px 30px rgba(0,0,0,.05)"
          }}
        >

        <div
            style={{
              height: "180px",
              background:
                "linear-gradient(135deg,#0f1115,#1f2937)",
              borderRadius: "12px",
              marginBottom: "20px",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "#c89b3c",
                color: "#111827",
                padding: "8px 14px",
                borderRadius: "50px",
                fontWeight: "700"
              }}
            >
              Proyecto
            </div>
          </div>

        <h2>{titulo}</h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: "1.8"
          }}
        >
          Aquí podrás mostrar fotografías,
          descripciones y resultados de
          proyectos realizados por la empresa.
        </p>

      </Card>
    ))}

  </div>

</TabPanel>

          </TabView>
        </div>

      </div>
    </motion.div>
  );
}

export default Nosotros;