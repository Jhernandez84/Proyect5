import { useState } from "react"

export const ProductosdelCarrito = ({producto, setCarritoDeCompras}) => {

const [contador, setContador] = useState(producto.quantity)

const productoModificado = {
    ...producto,
    quantity: contador
}

const aumentar = () => {
    setCarritoDeCompras((producto) => {
        const productoMatch = producto.map((product )=> {
            return(product.id===producto.id)
        })
        return productoMatch
    })
    const productoAModificar = 
    setContador((contador) => contador +1)
}

const disminuir = () => {
setContador((contador) => contador -1)}

  return (
    <li>
    <h2>{producto.price}</h2>
    <p>{producto.title}</p>
    <p>{contador}</p>
    <p>{contador * producto.price}</p>
    <button onClick={disminuir} >-1</button>
    <button onClick={aumentar} >+1</button>
</li>
  )
}
