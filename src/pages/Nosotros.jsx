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
          background: "#f8fafc"
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
          <Card>
            <h1 style={{ color: "#2563eb" }}>10+</h1>
            <h3>Años de Experiencia</h3>
          </Card>

          <Card>
            <h1 style={{ color: "#2563eb" }}>250+</h1>
            <h3>Proyectos Terminados</h3>
          </Card>

          <Card>
            <h1 style={{ color: "#2563eb" }}>100%</h1>
            <h3>Compromiso</h3>
          </Card>

          <Card>
            <h1 style={{ color: "#2563eb" }}>50+</h1>
            <h3>Clientes Satisfechos</h3>
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
          <TabView>

            {/* HISTORIA */}
            <TabPanel header="Historia">

  <Divider align="left">
    <strong>Nuestra Historia</strong>
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
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,.08)"
        }}
      >
        <div
          style={{
            minWidth: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "#2563eb",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "1.1rem"
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
    <strong>Nuestro Equipo</strong>
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
          textAlign: "center",
          borderRadius: "20px",
          overflow: "hidden"
        }}
      >
        <Avatar
          icon="pi pi-user"
          size="xlarge"
          shape="circle"
          style={{
            width: "90px",
            height: "90px",
            marginBottom: "15px",
            background: "#2563eb",
            color: "white"
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
          <i className="pi pi-briefcase" />
          <i className="pi pi-building" />
          <i className="pi pi-users" />
        </div>
      </Card>
    ))}

  </div>

</TabPanel>

            {/* PROYECTOS */}
          <TabPanel header="Proyectos">

  <Divider align="left">
    <strong>Proyectos Destacados</strong>
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
          overflow: "hidden",
          borderRadius: "20px"
        }}
      >

        <div
          style={{
            height: "180px",
            background:
              "linear-gradient(135deg,#2563eb,#1e40af)",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

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