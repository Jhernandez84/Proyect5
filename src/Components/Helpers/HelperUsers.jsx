// Helpers... ayuda a ejecutar funciones con usuarios
import { useContext } from "react"
import { UserContext } from "../../context/user/userContext"
import axios from "axios"
import React from "react"


const getUserData = async (user) => {

    // const [user, dispatch] = useContext(UserContext)

    // console.log(`GetUSerData ${user}`)

    // const {data} = await axios.get(`http://localhost:4000/users/${user.userId}`,{
    // // const {data} = await axios.post("https://backendproyect5.onrender.com/users/login", user, {
    //         headers: {
    //             "Authorization": `Bearer ${auth_token}`,
    //             "Context-Type":"application/json"
    //         }
    //     })
    // return (
    //     <h1>1</h1> 

    // )
}

export default getUserData;