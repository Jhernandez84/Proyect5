import { CantidadOrden } from "../Helpers/HelperOrders"
import './styles.css'

export const ProductCardGenerator = ({ Product }) => {
    const { Pedido, aumentar, reducir, eliminar } = CantidadOrden(0)
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={Product.image} alt={Product.productName} />
                    <p className="card-title">{Product.productName}</p>
                    <p className="card-text-desc">{Product.sku}</p>
                    <p className="card-text-desc">{Product.desc}</p>
                    <div className="menu-pedido-container">
                        {Pedido === 0 ? (
                            <button className="btn btnCart" onClick={() => aumentar(0)}>
                                <strong> Agregar</strong>
                            </button>
                        ) : (
                            Pedido === 1 ? (
                                <>
                                    <button className="btn btnCart" onClick={() => reducir(0)}>
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                    <h2>{Pedido}</h2>
                                    <button className="btn btnCart" onClick={() => aumentar(0)}>
                                        <span class="material-symbols-outlined">
                                            add
                                        </span>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btnCart" onClick={() => reducir(0)}>
                                        <span class="material-symbols-outlined">
                                            remove
                                        </span>

                                    </button>
                                    <h2>{Pedido}</h2>
                                    <button className="btn btnCart" onClick={() => aumentar(0)}>
                                        <span class="material-symbols-outlined">
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
    return (
        <tr className="table-row">
            {/* <td> <img className="small-image" src={Product.image} alt="" /></td> */}
            <td>{Product.sku}</td>
            <td>{Product.sku}</td>
            <td>{Product._id}</td>
            <td>
                <button className="btn btn-warning"> Editar </button>
            </td>
            <td>
                <button className="btn btn-danger"> Eliminar </button>
            </td>
            <td>
                <button className="btn btn-primary">  Publicar </button>
            </td>
            <td>
                <button className="btn btn-primary">  Act. Stock </button>
            </td>
        </tr>

    )
}