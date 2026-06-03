// src/components/PageContainer.jsx
/* eslint-disable react/prop-types */

function PageContainer({ children }) {
  return (
    <div>
      <nav style={{ padding: 20, background: "#222", color: "#fff" }}>
        <h2>Constructora</h2>
      </nav>

      {children}
    </div>
  )
}

export default PageContainer