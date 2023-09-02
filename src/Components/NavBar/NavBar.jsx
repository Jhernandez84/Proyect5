import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/user/userContext"
import swal from "sweetalert"
import { LoginModal } from "../Pages/Modals/Login.Modals"
import { Login } from "../Pages/Login"

// import './styles.css'
export const NavBar = () => { 
    const [user, dispatch] = useContext(UserContext)
    // const logOutBtn = () => {
    //     const { logout } = UserContext([]);
    // }
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Iniciar sesión</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Login/>
                        </div>
                        <div class="modal-footer">
                        <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">No tengo cuenta</a> registrarse </p>
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
                                <NavLink className="nav-link active" aria-current="page" to="/Register">Registro</NavLink>
                            </li>

                        </ul>
                    </div>
                    {user ? (
                        <li className="nav-item">
                            <div class="btn-group">
                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mi Cuenta
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Pedidos</a></li>
                                    <li><a className="dropdown-item" href="#">Configurar</a></li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/Dashboard">Dashboard</NavLink>
                                    </li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a class="dropdown-item" href="#">Log Out</a></li>
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <>
                            <NavLink className="nav-link active" aria-current="page" to="/#" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</NavLink>
                            {/* <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Log Out</a> */}
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}