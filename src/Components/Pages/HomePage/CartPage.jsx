import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ProductosdelCarrito } from '../../Carrito/ProductosdelCarrito'
// import { useNavigate } from 'react-router-dom'

// const redirectPayment = useNavigate()

const initialCart = [
    {
        title: 'fasdfa',
        price: 154,
        quantity: 15,
        id: 1
    },
    {
        title: 'fasdfa',
        price: 120,
        quantity: 35,
        id: 2
    }, {
        title: 'fasdfa',
        price: 130,
        quantity: 40,
        id: 3
    },
    {
        title: 'fasdfa',
        price: 275,
        quantity: 68,
        id: 4
    },
]

const Comprar = async () => {
    const paymentUrl = "http://localhost:4000/payment/create-payment"
    const { data } = await axios.post(paymentUrl)
    console.log(data.detail.response.init_point)
    window.location.href= data.detail.response.init_point
    // redirectPayment(data.detail.response.init_point)
}
export const CartPage = () => {

    const [carritoDeCompras, setCarritoDeCompras] = useState(initialCart)
    const [precioTotal, setPrecioTotal] = useState(0)

    useEffect(() => {
        const PrecioTotalProductos = carritoDeCompras.reduce((acc, item) => acc + item.price * item.quantity, 0)
        console.log(PrecioTotalProductos)
        setPrecioTotal(PrecioTotalProductos)
    }, [])

    return (
        <>
            <h1>Carrito de Compras</h1>
            <ul>
                {
                    carritoDeCompras.map((producto) => (<ProductosdelCarrito Key={producto.id} producto={producto} setCarritoDeCompras={setCarritoDeCompras} />
                    ))
                }
            </ul>
            <p>{precioTotal}</p>
            <button className='btn btn-primary' onClick={Comprar}>
                <p>Pagar</p>
                <span class="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
            </button>
        </>
    )
}