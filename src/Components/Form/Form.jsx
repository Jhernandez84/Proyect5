import "./styles.css"
import swal from "sweetalert"
import { useState } from "react"

export const FormContacto = () =>{
    const camposContacto = {name:'',phone:'',email:'',request:'Compras mayoristas'}
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
                <img src="https://i.pinimg.com/474x/c6/ae/ce/c6aecee31268074b26053f4987a71107.jpg" alt="Imagen-Contacto"/>
            </div>

        <div className="container">
        <form>
        <div className="mb-4">
        
        <h4>¿Necesitas más información?</h4>
        <p>Por favor completa los datos y te contactaremos a la brevedad</p>
        <div className="form-input">
        <label htmlFor="exampleInputName" className="form-label">Nombre Completo</label>
        <input name="name" onChange={getFormValues} value={contacto.name} type="text" className="form-control" id="inputContactName" aria-describedby="inputName" required></input>
        </div>
        <div className="form-input">
        <label htmlFor="exampleInputPhone" className="form-label">Teléfono de contacto</label>
        <input name="phone" onChange={getFormValues} value={contacto.phone} type="phone" className="form-control" id="inputContactPhone" aria-describedby="inputPhone"></input>
        </div>
        <div className="form-input">
        <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input name="email" onChange={getFormValues} value={contacto.email} type="email" className="form-control" id="inputContactMail" aria-describedby="inputMail"></input>
        </div>
        <div className="form-input">
        <label htmlFor="inputState">¿En que podemos ayudarte?</label>
            <select selected={contacto.request} name="request" onChange={getFormValues} value={contacto.request} id="inputContactState" className="form-control">
            <option >Compras mayoristas</option>
            <option>Importaciones</option>
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