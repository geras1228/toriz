import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

function Contacto() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        position: "relative",
        overflow: "hidden",
        color: "white"
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          fontSize: "2rem"
        }}
      >
        Contáctanos
      </h2>

      <p
          style={{
            color: "#cbd5e1",
            maxWidth: "650px",
            margin: "0 auto 40px",
            lineHeight: "1.8"
          }}
         >
          Estamos listos para ayudarte en tu próximo proyecto
          de urbanización, topografía, estructuras metálicas
          o vías terrestres.
        </p>

      <div
        style={{
          fontSize: 32,
          display: "flex",
          justifyContent: "center",
          gap: 35
        }}
      >
        <a href="https://facebook.com" target="_blank">
          <div className="contact-icon">
          <FaFacebook style={{ color: "#ffffff" }} />
          </div>
        </a>

       <a
        href="https://wa.me/5213315320692?text=Hola,%20quiero%20una%20cotización"
        target="_blank"
        rel="noopener noreferrer"
        >
          <div className="contact-icon">
        <FaWhatsapp style={{ color: "#ffffff" }} />
        </div>
        </a>

        <a  href="https://instagram.com/torizpalaciosalfonso" target="_blank">
           <div className="contact-icon">
          <FaInstagram style={{ color: "#ffffff" }} />
          </div>
        </a>

       <a
        href="https://maps.app.goo.gl/PLDn5aX3zRegQs1x8"
        target="_blank"
        rel="noopener noreferrer"
        >
          <div className="contact-icon">
        <FaMapMarkerAlt style={{ color: "#c89b3c" }} />
        </div>
        </a>

        <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=toriz1666@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          <div className="contact-icon">
        <FaEnvelope style={{ color: "#ffffff" }} />
        </div>
        </a>
      </div>

        <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "45px"
  }}
>
  <div>
    <h4 style={{ color: "#c89b3c" }}>
      Correo
    </h4>

    <p style={{ color: "#cbd5e1" }}>
      toriz1666@hotmail.com
    </p>
  </div>

  <div>
    <h4 style={{ color: "#c89b3c" }}>
      Teléfono
    </h4>

    <p style={{ color: "#cbd5e1" }}>
      +52 331 532 0692
    </p>
  </div>

  <div>
    <h4 style={{ color: "#c89b3c" }}>
      Ubicación
    </h4>

    <p style={{ color: "#cbd5e1" }}>
      Yahualica, Jalisco
    </p>
  </div>
</div>



<div
  style={{
    marginTop: "20px",
    width: "100%",
    maxWidth: "1500px",
    height: "3px",
    background: "#c89b3c",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "999px"
  }}
/>

<div
  style={{
    marginTop: "30px",
    borderTop: "1px solid #333",
    paddingTop: "15px",
    color: "#aaa",
    fontSize: "14px"
  }}
>
  © {new Date().getFullYear()} Toriz Palacios Alfonso | Todos los derechos reservados
</div>

    </div>
  );
}

export default Contacto;