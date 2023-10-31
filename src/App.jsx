import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      {/* NAVEGADOR */}
      <nav><div className="historial"><a href="historial.html"><span title="Ver Historial">📋</span></a></div>
      <h1 className="center separador">Seguros del hogar 🏡</h1></nav>

      {/* FORMULARIO */}
      <div className=" center div-cotizador">

        <h2 className="center separador">Completa los datos solicitados</h2>

        <label for="propiedad">Selecciona el tipo de propiedad</label>
        <select id="propiedad">
            <option selected disabled>...</option>
        </select>

        <label for="ubicacion">Selecciona su ubicación</label>
        <select id="ubicacion">
            <option selected disabled>...</option>
        </select>

        <label for="metros2">Ingresa los Metros cuadrados:</label>
        <input type="number" id="metros2" value="20" min="20" max="500" required>

        {/* BOTÓN */}
        <div className="center separador">
            <button className="button button-outline">Cotizar</button>
        </div>

        {/* IMPORTE */}
        <div className="center separador">
            <p className="importe">Precio estimado: $ <span id="valorPoliza">0.00</span><span class="guardar ocultar" title="Guardar en historial">💾</span></p>
        </div>

      </div>
    </>
  )
}

export default App