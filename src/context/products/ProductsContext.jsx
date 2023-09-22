import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react"

export const ProductContext = createContext()

// Provider, Higher Order Component
// children se utiliza como palabra reservada

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
    // const [Product, ProductAction] = useReducer(ProductReducer,null)
    const [cart, setCart] = useState([])

    // useEffect(() => {
    //     console.log(cart)
    //     console.log(cart.length)
    // }, [cart])

    const addToCart = (Product) => {
        const existingProductIndex = cart.findIndex((item) => item._id === Product._id);
        if (existingProductIndex !== -1) {
            // If the product exists, update the quantity
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            // If the product doesn't exist, add it to the cart with a quantity of 1
            setCart([...cart, { ...Product, quantity: 1 }]);
        }
    };

    const removeFromCart = (Product) => {
        const existingProductIndex = cart.findIndex((item) => item._id === Product._id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            const existingProduct = updatedCart[existingProductIndex];

            if (existingProduct.quantity === 1) {
                // Si solo hay un ítem, eliminarlo del carrito
                updatedCart.splice(existingProductIndex, 1);
            } else {
                // Si hay más de uno, reducir la cantidad en 1
                existingProduct.quantity -= 1;
            }

            setCart(updatedCart);
        }
    };

    const editCart = (updatedProduct) => {
        const updatedCart = cart.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setCart(updatedCart);
    };

    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        editCart,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )
}