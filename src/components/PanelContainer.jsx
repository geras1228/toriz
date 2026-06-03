// src/components/PanelContainer.jsx
/* eslint-disable react/prop-types */

function PanelContainer({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 20,
      borderRadius: 10
    }}>
      {children}
    </div>
  )
}

export default PanelContainer