import "./styles.css"
import swal from "sweetalert"
import { useState } from "react"

export const FormContacto = () =>{
    const camposContacto = {name:'',phone:'',email:'',request:'Reservas'}
    const [contacto,setContacto] = useState(camposContacto)

    const SendData = (e) =>{
        e.preventDefault()
        console.log(contacto)
        swal ("Enviando")
        setContacto(camposContacto)
    }
// Acá estoy enviando la información de reserva a la base de datos firestore.
    const getFormValues = ({target}) =>{
        setContacto({
          ...contacto,[target.name]: target.value
          })
          console.log(contacto)
      }
    return (
        <>
        <section className="container-fluid d-flex flex-row justify-content-between">
            <div className="container order-0">
                <img src="https://img.freepik.com/fotos-premium/foto-vertical-copa-vid-vino-seco-oscuro-sobre-fondo-borroso-luz-restaurante-cafe-interior-plato-acompanamiento-pasta-fusilli-salchicha-plato-blanco-mesa-reservas-restaurante-cerrar_349071-2775.jpg" alt="Imagen-Contacto"/>
            </div>

        <div className="container">
        <form>
        <div className="mb-4">
        
        <h4>¿Quieres hablar con nosotros o necesitas más información?</h4>
        <p>Por favor completa los datos y te contactaremos a la brevedad</p>
        <div className="form-input">
        <label htmlFor="exampleInputEmail1" className="form-label">Nombre Completo</label>
        <input name="name" onChange={getFormValues} value={contacto.name} type="text" className="form-control" id="inputName" aria-describedby="emailHelp" required></input>
        </div>
        <div className="form-input">
        <label htmlFor="exampleInputEmail1" className="form-label">Teléfono de contacto</label>
        <input name="phone" onChange={getFormValues} value={contacto.phone} type="phone" className="form-control" id="inputPhone" aria-describedby="emailHelp"></input>
        </div>
        <div className="form-input">
        <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input name="email" onChange={getFormValues} value={contacto.email} type="email" className="form-control" id="inputMail" aria-describedby="emailHelp"></input>
        </div>
        <div className="form-input">
        <label htmlFor="inputState">¿En que podemos ayudarte?</label>
            <select name="request" onChange={getFormValues} value={contacto.request} id="inputState" className="form-control">
            <option selected default>Reservas</option>
            <option>Eventos Coporativos</option>
            <option>Clases de Cocina</option>
            <option>Otros</option>
        </select>
        </div>
        </div>
        {contacto.email && contacto.name && contacto.phone && contacto.request ? (
            <button type="submit" onClick={SendData} className="btn btn-primary">Enviar</button>
        ):([])}        
        </form>
        </div>
        </section>
       </> 
    )
}