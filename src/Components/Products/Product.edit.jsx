import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { AdminProducts } from '../Pages/ProductsPage/Admin.Products'

export const ProductEdit = ({ EditById }) => {
    console.log(`ID para editar producto ID Numero ${EditById} `)
    const [updatedProduct, setupdatedProduct] = useState([])

    const getFormProductsChanges = ({ target }) => {
        setupdatedProduct({
            ...updatedProduct, [target.name]: target.value
        })
        console.log(updatedProduct)
    }

    const EditProduct = async (e) => {
        e.preventDefault()
        try {
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            // const {data} = await axios.post("https://backendproyect5.onrender.com/users", formUser, {

            // setFormUser(initialUser)
        } catch (error) {
            console.log(error)
            // dispatch({
            //     // type: types.setError,
            //     payload: error
            // })
            window.alert("Error al crear el producto")
        }
    }

    return (
        // Seleccionar si presionó el botón Login o Registrarse, en ese caso, desplegaría otro cuadro de PopUP
        <>
            <form className="container center">
                <div className="mb-4">
                    <div className="form-input">
                        <label htmlFor="inputproductName" className="form-label">Nombre corto del producto</label>
                        <input name="productName" onChange={getFormProductsChanges} type="text" className="form-control" id="inputproductName"  aria-describedby="inputproductName"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputSku" className="form-label">Sku</label>
                        <input name="sku" onChange={getFormProductsChanges} type="text" className="form-control" id="inputSku" aria-describedby="inputSku"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputCategory" className="form-label">Categoría</label>
                        <input name="category" onChange={getFormProductsChanges} type="text" className="form-control" id="inputCategory" aria-describedby="inputCategory"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputStock" className="form-label">Cantidad</label>
                        <input name="stock" onChange={getFormProductsChanges} type="number" className="form-control" id="inputStock" aria-describedby="inputStock"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputImage" className="form-label">Dirección de imagen</label>
                        <input name="image" onChange={getFormProductsChanges} type="url" className="form-control" id="inputImage" aria-describedby="inputImage"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputDesc" className="form-label">Descripción</label>
                        <input name="desc" onChange={getFormProductsChanges} type="text" className="form-control" id="inputDesc" aria-describedby="inputDesc"></input>
                    </div>
                    {updatedProduct.productName && updatedProduct.category && updatedProduct.stock && updatedProduct.sku && updatedProduct.image && updatedProduct.desc ? (
                        <button type="submit" onClick={EditProduct} className="btn btn-primary">Crear</button>
                    ) : ([])}
                </div>
            </form>

        </>
    )
}