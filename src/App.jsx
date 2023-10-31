import { useState, useEffect } from 'react'
import './App.css'
import Toastify from 'toastify-js'
import Swal from 'sweetalert2'

function App() {
  const [datos, setDatos] = useState({ propiedades: [], ubicaciones: [] });

// Cargar los datos del archivo JSON
useEffect(() => {
  fetch('Components/datos.json')
    .then(response => response.json())
    .then(data => setDatos(data))
    .catch(error => console.error('Error al cargar los datos', error));
}, []);

{/* TOASTIFY */}
  const toast = ()=> {
    Toastify({
        text: "Cotización guardada.",
        duration: 4000,
        newWindow: true,
        gravity: "top",
        position: "right",
        style: {
          background: "CornflowerBlue",
        }
      }).showToast();
}

{/* SWEETALERT */}
const alerta = (titulo, mensaje, icono)=> {
  Swal.fire({
      icon: icono || '', 
      title: titulo || '',
      text: mensaje,
      showConfirmButton: false,
      timer: 3500,
      width: '240px'
    })
}

  return (
    <>
      {/* NAVEGADOR */}
      <nav>
        <div className="historial">
          <a href="Historial.jsx">
            <span title="Ver Historial">📋</span>
          </a>
        </div>
        <h1 className="center separador">Seguros del hogar 🏡</h1>
      </nav>

      {/* FORMULARIO */}
      <div className=" center div-cotizador">

        <h2 className="center separador">Completa los datos solicitados</h2>

        <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
        <select id="propiedad">
            <option selected disabled>...</option>
            {datos.propiedades.map((propiedad, index) => (
              <option key={index} value={propiedad}>{propiedad}</option>
            ))}
        </select>

        <label htmlFor="ubicacion">Selecciona su ubicación</label>
        <select id="ubicacion">
            <option selected disabled>...</option>
            {datos.ubicaciones.map((ubicacion, index) => (
              <option key={index} value={ubicacion}>{ubicacion}</option>
            ))}
        </select>

        <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
        <input type="number" id="metros2" value="20" min="20" max="500" required />

        {/* BOTÓN */}
        <div className="center separador">
            <button onClick={alerta}>Cotizar</button>
        </div>

        {/* IMPORTE */}
        <div className="center separador">
            <p className="importe">Precio estimado: $ <span id="valorPoliza">0.00</span><span className="guardar ocultar" onClick={toast} title="Guardar en historial">💾</span></p>
        </div>

      </div>
    </>
  )
}

export default App