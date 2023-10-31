export function Form() {
  return (
    <div><h2 className="center separador">Completa los datos solicitados</h2>

      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select id="propiedad">
        <option selected disabled>...</option>
      </select>

      <label htmlFor="ubicacion">Selecciona su ubicación</label>
      <select id="ubicacion">
        <option selected disabled>...</option>
      </select>

      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input type="number" id="metros2" value="20" min="20" max="500" required /></div>
  );
}
