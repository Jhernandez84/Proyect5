import { useState, useEffect } from "react";
import axios from "axios";
import { ProductAdmin } from "../../Products/Products.lists.jsx"


export const AdminProducts = () => {

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
    // console.log(products)
    return (
        <>
            <div className="container">
                {/* {products.map((Product) => (<ProductCardGenerator Product={Product} key={Product._id} />))} */}
                <table>
                    <thead>
                        <th>Producto</th>
                        <th>Sku</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Opciones</th>
                        <th>Funciones Rápidas</th>
                    </thead>
                    <tbody>
                        {products.map((Product) => (<ProductAdmin Product={Product} key={Product._id} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}