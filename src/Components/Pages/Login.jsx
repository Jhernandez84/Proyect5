import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../../context/user/userContext"
import { types } from "../../context/user/userReducer"
import getUserData from "../Helpers/HelperUsers"
import axios from "axios"
import React from "react"

export const Login = () => {
    const [user, dispatch] = useContext(UserContext)

    const navigate = useNavigate();

    const initialUser = {
        email: "",
        password: ""
    }

    const [formUser, setFormUser] = useState(initialUser)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            const { data } = await axios.post('http://localhost:4000/users/login', formUser, {
                // const {data} = await axios.post("https://backendproyect5.onrender.com/users/login", user, {
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
            console.log(data)
            swal("Usuario Logeado Exitosamente")
            navigate('/')
            // setFormUser(initialUser)
        } catch (error) {
            console.log(error)
            dispatch({
                type: types.setError,
                payload: error
            })
            console.log(error)
        }
    }

    const getFormChanges = ({ target }) => {
        setFormUser({
            ...formUser, [target.name]: target.value
        })
        console.log(formUser)
    }

    return (
        <>
            <form className="container center">
                <div className="mb-4">
                    <p className="text-center">Por favor complete sus datos para iniciar sesión o regístrese para tener una cuenta propia</p>
                    <div className="form-input">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                        <input name="email" onChange={getFormChanges} value={formUser.email} type="email" className="form-control" id="inputMail" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                        <input name="password" onChange={getFormChanges} value={formUser.password} type="password" className="form-control" id="inputPhone" aria-describedby="emailHelp"></input>
                    </div>
                    {formUser.email && formUser.password ? (
                        <button type="submit" onClick={handleLogin} className="btn btn-primary">Log In</button>
                    ) : ([])}
                </div>
            </form>
        </>
    )
}