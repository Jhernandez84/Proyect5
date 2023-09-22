// // Provider, Higher Order Component
// // children se utiliza como palabra reservada
// import { ProductContext } from "./ProductsContext"
// import { useReducer } from "react"
// import ProductReducer from "./ProductsReducer"
// import { useState } from "react"

// // Proveedor del contexto
// export const ProductProvider = ({children}) => {
//     // const [Product, ProductAction] = useReducer(ProductReducer,null)

//     const [cart, setCart] = useState([])

//     const addToCart = (product) => {
//       setCart([...cart, product]);
//     };

//     const removeFromCart = (product) => {
//       setCart([...cart, product]);
//     };

//     const editCart = (product) => {
//       setCart([...cart, product]);
//     };

//     return (
//     <ProductContext.Provider value={[cart,setCart]}>
//         {children}
//     </ProductContext.Provider>
//   )
// }