import { useState, useEffect, useContext } from "react"
import { ProductContext } from '../../context/products/ProductsContext';
import swal from "sweetalert"

export const CantidadOrden = ({ Product }) => {
    const { cart, addToCart, removeFromCart } = useContext(ProductContext)

    const initialValue = 0
    const [Pedido, setCantidadOrden] = useState(initialValue)

    // useEffect(() => {
    //     console.log(`Cantidad de ítems en el carrito ${cart.length}`)
    // }, [cart])

    const aumentar = (Product) => {
        // console.log(`Aumentar en ${Product.stock}`)
        if (cart === 10 || cart === 10) {
            swal("Excede cantidad", "El máximo a pedir es 10 unidades, para volumen coordinar con ventas", "warning");
        } else {
            addToCart(Product)
            setCantidadOrden(Pedido + 1)
        }
    }
    const reducir = (Product) => {
        if (cart < 1) return
        removeFromCart(Product)
        setCantidadOrden(Pedido - 1)
    }
    return {
        Pedido,
        aumentar,
        reducir,
    }
}