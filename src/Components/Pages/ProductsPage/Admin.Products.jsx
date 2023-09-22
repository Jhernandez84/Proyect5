import { useState, useEffect } from "react";
import axios from "axios";
import { ProductAdmin } from "../../Products/Products.lists.jsx"
import { ProductNew } from "../../Products/Product.new.jsx";
import { ProductEdit } from "../../Products/Product.edit.jsx";

export const AdminProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [products]);

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
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#NewProductModal" type="button">+ Nuevo Producto</button>
                </div>
                <>
                    <div className="modal fade" id="NewProductModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Producto</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <ProductNew />
                                </div>
                                <div className="modal-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Sku</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th colSpan={2}>Funciones Rápidas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((Product) => (<ProductAdmin Product={Product} key={Product._id} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}