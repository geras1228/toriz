// src/views/Home.jsx
import PanelContainer from "../components/PanelContainer"

function Home() {
  return (
    <PanelContainer>
      <h2>Bienvenido a la Constructora</h2>

      <img
        src="https://via.placeholder.com/400"
        alt="casa"
        style={{ width: "100%", borderRadius: 10 }}
      />
    </PanelContainer>
  )
}

export default Home
