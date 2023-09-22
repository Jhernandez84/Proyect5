import swal from "sweetalert"
import { useContext } from "react"
import { UserContext } from "../../../context/user/userContext"
import { ProductCardGenerator } from "../../Products/Products.lists"
import axios from "axios"
import { useState, useEffect } from "react"
import HeaderPage from "../../HeaderFooter/Header"
import "./styles.css"

export const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:4000/Productos", {
            // // const {data} = await axios.post("https://backendproyect5.onrender.com/users/login", user, {
            headers: {
                "Context-Type": "application/json"
            }
        })
        setProducts(response.data.detail)
    }
    return (
        <>
            <div className="container">
                <div className="row align-items-start">
                    {products.map((Product) => (<ProductCardGenerator Product={Product} key={Product._id} />))}
                </div>
            </div>
        </>
    )
}