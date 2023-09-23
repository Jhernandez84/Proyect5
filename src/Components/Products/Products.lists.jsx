import { useState } from "react"
import { useContext } from "react";
import { UserContext } from "../../context/user/userContext"
import { ProductContext } from "../../context/products/ProductsContext";
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert"
import { CantidadOrden } from "../Helpers/HelperOrders"
import './styles.css'
import axios from "axios";

export const ProductCardGenerator = ({ Product }) => {
    const navigate = useNavigate();
    // const [product, ProductAction] = useContext(ProductContext)
    const { Pedido, aumentar, reducir } = CantidadOrden(0)
    // Variables de modificaciones de productos en BD
    const itemDetails = (_id) =>{
        navigate(`/ProductDetails/${_id}`)
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <img className="card-image" onClick={() => itemDetails(Product._id)} src={Product.image} alt={Product.productName} />
                    <p className="card-title">{Product.productName}</p>
                    <p className="card-title">Valor:{Product.valorUnidad.toLocaleString('es-CL', { style: 'currency', currency: 'CLP'})}</p>
                    <p className="card-text-desc">{Product.desc}</p>
                    <div className="menu-pedido-container">
                        {Pedido === 0 ? (
                            <button className="btn btnCart" onClick={() => { aumentar(Product) }}>
                                <strong> Agregar</strong>
                            </button>
                        ) : (Pedido === 1 ? (
                            <>
                                <button className="btn btnCart" onClick={() => reducir(Product)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                                <h3>{Pedido}</h3>
                                <button className="btn btnCart" onClick={() => aumentar(Product)}>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btnCart" onClick={() => reducir(Product)}>
                                    <span className="material-symbols-outlined">
                                        remove
                                    </span>
                                </button>
                                <h2>{Pedido}</h2>
                                <button className="btn btnCart" onClick={() => aumentar(Product)}>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </>
                        )
                        )}
                    </div>
                    {/* <div className="menu-pedido-container">
                        {Pedido > 0 ? (
                            //Acá tiene que enviarme al carrito de compras
                            <>
                            <button className="btn btnCart">
                                <span class="material-symbols-outlined">
                                    shopping_cart_checkout
                                </span>
                            </button>
                            </>
                        ) : ([])
                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}

export const ProductAdmin = ({ Product }) => {

    const [CtdStockOriginal, setCtdStockOriginal] = useState(0)

    const [user, dispatch] = useContext(UserContext)

    const [CtdStock, setCtdStock] = useState(0)

    const EliminaProducto = async (id) => {
        try {
            const { data } = await axios.delete("https://backend-proyect5.onrender.com/productos", {
                data: {
                    "_id": id
                },
                // const {data} = await axios.post("https://backendproyect5.onrender.com/users/login", user, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            // acá termina el proceso.
            // acá termina el proceso.
            dispatch({
                // type: types.setUserState,
                payload: data,
            })
            console.log(data)
            swal(`El producto ID ${id} fue eliminado`)
            // setFormUser(initialUser)
        } catch (error) {
            console.log(error)
            dispatch({
                // type: types.setError,
                payload: error
            })
            console.log(error)
        }
    }

    const ActQty = (e) => {
        setCtdStock(e.target.value)
    }

    const ActStock = async (Id) => {
        // console.log(CtdStockOriginal)
        // console.log(CtdStock)
        if (CtdStockOriginal != CtdStock) {
            try {
                const { data } = await axios.put("https://backend-proyect5.onrender.com/productos", {
                    "_id": Id,
                    "ProductUpdated": {
                        "stock": CtdStock
                    }
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                // acá termina el proceso.
                // acá termina el proceso.
                dispatch({
                    // type: types.setUserState,
                    payload: data,
                })
                swal(`El stock del producto ID ${Id}, fue actualizado a ${CtdStock} unidades disponibles`)
                // setFormUser(initialUser)
            } catch (error) {
                console.log(error)
                dispatch({
                    // type: types.setError,
                    payload: error
                })
                console.log(error)
            }
        }

    }

    return (
        <tr className="table-row">
            <td> <img className="image-product-list" src={Product.image} alt="" /></td>
            <td>{Product.productName}</td>
            <td>{Product.sku}</td>
            <td>{Product.desc}</td>
            <td>
                <input type="number" className="InputStockQty" name="stockQty" onFocus={() => setCtdStockOriginal(Product.stock)} onBlur={() => ActStock(Product._id)} onChange={(e) => ActQty(e)} id="stockQty" defaultValue={Product.stock} />
            </td>
            <td>
                <button onClick={() => swal("Proximamente")} className="btn btn-warning">Editar</button>
            </td>
            <td>
                <button onClick={() => EliminaProducto(Product._id)} className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    )
}