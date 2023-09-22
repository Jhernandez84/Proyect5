import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/user/userContext"
import { ProductContext } from "../../context/products/ProductsContext"
import { Login } from "../Pages/Login"
import { useState } from "react"
import { Register } from "../Pages/Register"
import { CartDetail } from "../Carrito/Cart"
import swal from "sweetalert"
import { types } from "../../context/user/userReducer"
import { useNavigate } from "react-router-dom"


import userReducer from "../../context/user/userReducer"
import { useEffect } from "react"
// import './styles.css'

export const NavBar = () => {

    const { cart } = useContext(ProductContext)

    const cartQuantity = cart.reduce((total, product) => total + product.quantity, 0);

    const navigate = useNavigate();

    const [user, dispatch] = useContext(UserContext)

    const [renderDropdown, setRenderDropdown] = useState(true);

    const [userLogIn, setUserLogIn] = useState("No")


    const RegisterNewUser = () => {
        setUserLogIn("Yes");
    }
    const JustLogIn = () => {
        setUserLogIn("No");
    }

    const handleLogout = () => {
        // Dispatch the LOGOUT action to update the user state
        dispatch({ type: types.LOGOUT }); // Dispatch the 'LOGOUT' action
        setRenderDropdown(false); // Hide the dropdown
        navigate('/')
    };

    const totalCost = cart.reduce((total, product) => {
        const quantity = parseInt(product.quantity);
        const valorUnidad = parseFloat(product.valorUnidad);
        return total + (quantity * valorUnidad);
    }, 0);
    // const logOutBtn = () => {
    //     const { logout } = UserContext([]);
    // }
    return (
        <>
            <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Mi Carrito</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cart.length > 0 ? (
                                <CartDetail />
                            ) : (
                                <h1>Ups, tu carro está vacío</h1>
                            )
                            }
                        </div>
                        <div className="modal-footer">
                            <h1>Total a pagar: {totalCost.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h1>
                            <button className="btn btnCart" data-bs-dismiss="cartModal" data-bs-target="#cartModal" onClick={() => swal("Pago exitoso", "Vamos a pensar que ya pagaste!", "success")}>
                                <span className="material-symbols-outlined">
                                    shopping_cart_checkout
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <>
                                {userLogIn === "No" ? (
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Iniciar sesión</h1>
                                ) : (
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Página de Registro</h1>
                                    )}
                            </>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {userLogIn === "No" ? (
                                <>
                                    <Login />
                                    <button type="button" onClick={RegisterNewUser} className="btn btn-primary btn-sm">No tengo cuenta aún, quiero registrarme</button>
                                </>
                            ) : (
                                <>
                                    <Register />
                                    <button type="button" onClick={JustLogIn} className="btn btn-primary btn-sm">Volver al LogIn</button>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">E-Commerce</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/HomePage">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/Contacto">Contacto</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/carrito">CartPage</NavLink>
                            </li> */}
                        </ul>
                    </div>
                    {cartQuantity > 0 ? (
                        <>
                            <button type="button" className="btn btn-primary position-relative">
                                <span data-bs-toggle="modal" data-bs-target="#cartModal" className="material-symbols-outlined">shopping_bag</span>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartQuantity}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </>
                    ) : ([])
                    }

                    {renderDropdown && user ? (
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mi Cuenta
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Pedidos (Pronto)</a></li>
                                    <li><a className="dropdown-item" href="#">Configurar  (Pronto)</a></li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/Dashboard">Dashboard</NavLink>
                                    </li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => handleLogout()} to="/">Log Out</a></li>
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <>
                            <NavLink className="nav-link active" aria-current="page" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</NavLink>
                            {/* <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Log Out</a> */}
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}