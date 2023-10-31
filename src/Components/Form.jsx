import { Location } from "./Formulario/Location";
import { Meters2 } from "./Formulario/Meters2";
import { Properties } from "./Formulario/Properties";
import { Button } from "./Formulario/Button";
import { Price } from "./Formulario/Price";

export function Form() {
  return (
    <div className=" center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <Properties />
      <Location />
      <Meters2 />
      <Button />
      <Price />
    </div>
  );
}
