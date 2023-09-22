import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/user/userContext"
import { types } from "../../context/user/userReducer";
import axios from "axios"
import React from "react"

export const Register = () => {

    const [user, dispatch] = useContext(UserContext)

    const initialUser = {
        username: "",
        email: "",
        password: "",
    }

    const [formUser, setFormUser] = useState(initialUser)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            // const {data} = await axios.post("https://backendproyect5.onrender.com/users", formUser, {
            const { data } = await axios.post('http://localhost:4000/users', formUser, {
                headers: {
                    "Context-Type": "application/json"
                }
            })
            // acá termina el proceso.
            // acá termina el proceso.
            dispatch({
                type: types.setUserState,
                payload: data,
            })

            console.log(formUser)
            swal("Usuario Registrado Exitosamente")
            // setFormUser(initialUser)
        } catch (error) {
            console.log(error)
            dispatch({
                type: types.setError,
                payload: error
            })
            window.alert("Error al registrar al usuario")
        }
    }

    const handleChanges = ({ target }) => {
        setFormUser({
            ...formUser, [target.name]: target.value
        })
        console.log(formUser)
    }
    return (
        <>
            <form className="container center">
                <div className="mb-4">
                    <div className="form-input">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre de Usuario</label>
                        <input name="username" onChange={handleChanges} value={formUser.username} type="text" className="form-control" id="inputUserName" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                        <input name="email" onChange={handleChanges} value={formUser.email} type="email" className="form-control" id="inputMail" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                        <input name="password" onChange={handleChanges} value={formUser.password} type="password" className="form-control" id="inputPhone" aria-describedby="emailHelp"></input>
                    </div>
                    {formUser.email && formUser.password ? (
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Registro</button>
                    ) : ([])}
                </div>
            </form>
        </>
    )
}