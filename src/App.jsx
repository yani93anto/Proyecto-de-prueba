import './App.css'
import { Header } from './Components/Header'
import { Form } from './Components/Form'
import { Button } from './Components/Button'
import { Price } from './Components/Price'

function App() {

  return (
    <>
      {/* NAVEGADOR */}
      <Header />

      <div className=" center div-cotizador">
      {/* FORMULARIO */}
      <Form />
      
      {/* BOTÓN */}
      <Button />

      {/* IMPORTE */}
      <Price />

      </div>
    </>
  )
}

export default App