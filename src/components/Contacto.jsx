import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

function Contacto() {
  return (
    <div
      style={{
        padding: "80px 20px",
        background: "linear-gradient(180deg,#04091f,#09123a)",
        color: "white"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "15px"
          }}
        >
          Contáctanos
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.8"
          }}
        >
          Estamos listos para ayudarte en tu próximo proyecto de
          urbanización, topografía, estructuras metálicas y vías
          terrestres.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center"
          }}
        >
          {/* IZQUIERDA */}
          <div>
            <h3
              style={{
                color: "#c89b3c",
                fontSize: "2rem",
                marginBottom: "40px"
              }}
            >
              Información de Contacto
            </h3>

            <div style={{ marginBottom: "30px" }}>
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <FaPhoneAlt color="#c89b3c" />
                Teléfono
              </h4>

              <p style={{ color: "#cbd5e1" }}>
                +52 331 532 0692
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <FaEnvelope color="#c89b3c" />
                Correo
              </h4>

              <p style={{ color: "#cbd5e1" }}>
                toriz1666@hotmail.com
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <FaMapMarkerAlt color="#c89b3c" />
                Ubicación
              </h4>

              <p style={{ color: "#cbd5e1" }}>
                Yahualica, Jalisco
              </p>
            </div>

            <h4
              style={{
                color: "#c89b3c",
                marginTop: "40px",
                marginBottom: "20px"
              }}
            >
              Síguenos en Redes
            </h4>

            <div
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "30px"
              }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook color="white" />
              </a>

              <a
                href="https://wa.me/5213315320692"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp color="white" />
              </a>

              <a
                href="https://instagram.com/torizpalaciosalfonso"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram color="white" />
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!4v1780599187706!6m8!1m7!1sWUG_-Eo6jO-LBo4WagxFFA!2m2!1d21.17733720334516!2d-102.8841882303817!3f193.51!4f1.8299999999999983!5f0.7820865974627469"
              width="100%"
              height="450"
              style={{
                border: "0",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,.35)"
              }}
              loading="lazy"
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "70px",
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(90deg,transparent,#c89b3c,transparent)"
          }}
        />

        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#94a3b8",
            fontSize: "14px"
          }}
        >
          © {new Date().getFullYear()} Toriz Palacios Alfonso |
          Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}

export default Contacto;