//Acá ingresaré luego de hacer click en ver detalles o en la imagen
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CantidadOrden } from '../Helpers/HelperOrders';
import { useContext } from 'react';
import { ProductContext } from '../../context/products/ProductsContext';

export const ProductDetails = () => {

    const {cart} = useContext(ProductContext)
    const { Pedido, aumentar, reducir } = CantidadOrden(0)

    const { _id } = useParams()
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        getProductDetail(_id)
    }, []);

    const getProductDetail = async (_id) => {
        const response = await axios.get(`http://localhost:4000/Productos/${_id}`, {
            // // const {data} = await axios.post("https://backendproyect5.onrender.com/users/login", user, {
            headers: {
                "Context-Type": "application/json"
            }
        })
        setProductDetail(response.data.detail)
        console.log(productDetail)
    }

    return (
        <>
            {/* <p>Detalle producto {_id}</p> */}
            <div className="container detail-product-container">
                <div className="card-container">
                    <img className="card-detail-product-image" src={productDetail.image} alt="" />
                </div>
                <div className="container product-details">
                    <p className="card-title">{productDetail.productName}</p>
                    <p className="card-text card-text-stock"> {productDetail.stock} Unidades disponibles</p>
                    <p className="card-text card-text-sku"> SKU: {productDetail.sku}</p>
                    <p className="card-text card-text-desc"> {productDetail.desc}</p>

                    <div className="menu-pedido-container">
                        {Pedido === 0 ? (
                            <button className="btn btnCart" onClick={() => { aumentar(productDetail) }}>
                                <strong> Agregar</strong>
                            </button>
                        ) : (Pedido === 1 ? (
                            <>
                                <button className="btn btnCart" onClick={() => reducir(productDetail)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                                <h3>{Pedido}</h3>
                                <button className="btn btnCart" onClick={() => aumentar(productDetail)}>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btnCart" onClick={() => reducir(productDetail)}>
                                    <span className="material-symbols-outlined">
                                        remove
                                    </span>
                                </button>
                                <h2>{Pedido}</h2>
                                <button className="btn btnCart" onClick={() => aumentar(productDetail)}>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </>
                        )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}