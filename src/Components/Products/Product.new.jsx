import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const ProductNew = () => {

    const newProductInitial = {
        productName: "",
        sku: "",
        category: "",
        stock: "",
        image: "",
        desc: "",
        valorUnidad:""
    }

    const [newProduct, setNewProduct] = useState(newProductInitial)

    const getFormProductsChanges = ({ target }) => {
        setNewProduct({
            ...newProduct, [target.name]: target.value
        })
        console.log(newProduct)
    }

    const AddNewProducto = async (e) => {
        e.preventDefault()
        try {
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            // En esta seccion vamos a validar si existe o no en una cadena de conexión.
            // const {data} = await axios.post("https://backendproyect5.onrender.com/users", formUser, {
            const { data } = await axios.post('http://localhost:4000/Productos', newProduct, {
                headers: {
                    "Context-Type": "application/json"
                }
            })
            // acá termina el proceso.
            // acá termina el proceso.
            // dispatch({
            //     // type: types.setUserState,
            //     payload: data,
            // })
            console.log(newProduct)
            swal(`Producto ${newProduct.productName} ha sido creado exitosamente`)
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
                        <label htmlFor="emailHelp" className="form-label">Sku</label>
                        <input name="sku" onChange={getFormProductsChanges} type="text" className="form-control" id="inputSku" aria-describedby="inputSku"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="exampleInputEmail1" className="form-label">Categoría</label>
                        <input name="inputCategory" onChange={getFormProductsChanges} type="text" className="form-control" id="inputCategory" aria-describedby="inputCategory"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputStock" className="form-label">Cantidad</label>
                        <input name="stock" onChange={getFormProductsChanges} type="number" className="form-control" id="inputStock" aria-describedby="inputStock"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputvalorUnidad" className="form-label">Valor Unitario $</label>
                        <input name="valorUnidad" onChange={getFormProductsChanges} type="text" className="form-control" id="inputvalorUnidad" aria-describedby="inputvalorUnidad"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputImage" className="form-label">Dirección de imagen</label>
                        <input name="image" onChange={getFormProductsChanges} type="url" className="form-control" id="inputImage" aria-describedby="inputImage"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="inputDesc" className="form-label">Descripción</label>
                        <input name="desc" onChange={getFormProductsChanges} type="text" className="form-control" id="inputDesc" aria-describedby="inputDesc"></input>
                    </div>
                    {newProduct.productName && newProduct.category && newProduct.stock && newProduct.sku && newProduct.image && newProduct.desc ? (
                        <button type="submit" onClick={AddNewProducto} className="btn btn-primary">Crear</button>
                    ) : ([])}
                </div>
            </form>

        </>
    )
}
