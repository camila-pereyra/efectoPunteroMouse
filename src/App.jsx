import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      setPositionMouse({ x: event.clientX, y: event.clientY });
    };
    if (enabled) {
      window.addEventListener("mousemove", handleMove);
    }
    //limpiador de eventos
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setEnabled(!enabled);
          }}
        >
          {!enabled ? "Activar" : "Desactivar"} seguir el puntero
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setEnabled(false);
            setPositionMouse({ x: 0, y: 0 });
          }}
        >
          Ir a posicion original
        </button>
      </div>
      <div
        className="ball"
        style={{
          position: "absolute",
          top: -30,
          left: -30,
          border: "2px solid #fff",
          width: 60,
          height: 60,
          backgroundColor: "rgba(0,0,0,0.5)",
          transform: `translate(${positionMouse.x}px, ${positionMouse.y}px)`,
          borderRadius: 50,
          pointerEvents: "none",
        }}
      ></div>
    </>
  );
}

export default App;
