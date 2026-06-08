import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-line"></div>

      <div className="particles">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
      
      <div className="hero-overlay"></div>
      

      <div className="hero-content">

        

        <p className="hero-small">
          Diseño • Construcción • Topografía
        </p>

        <h1>
          Construimos <br />
          proyectos <span>modernos</span> <br />
          y funcionales
        </h1>

        <p className="hero-description">
          Más de 10 años desarrollando proyectos urbanos,
          estructurales y de infraestructura.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-btn"
            onClick={() => {
              const phone = "5213315320692";
              const message =
                "Hola, me pueden ayudar con una cotizacion?";
              window.open(
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
          >
            Solicitar Cotización
          </button>

         
        </div>

        <div className="hero-stats">
          <div>
            <h3>10+</h3>
            <span>Años</span>
          </div>

          <div>
            <h3>250+</h3>
            <span>Proyectos</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Compromiso</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;