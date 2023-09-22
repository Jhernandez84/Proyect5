import { Route,Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/Homepage"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"
import { Dashboard } from "../Pages/AdminPage/Dashboard"
import { CartPage } from "../Pages/HomePage/CartPage"
import {CompraExitosa} from "../Pages/SuccessPurchase"
import { ProductDetails } from "../Products/Productdetails"
import { FormContacto } from "../Form/Form"

export const MainRoutes = () => {
    return(
        <div className="main-container">
            <Routes>
                <Route path="/" element={<HomePage/>}/> 
                <Route path="/Dashboard" element={<Dashboard/>}/> 
                <Route path="/HomePage" element={<HomePage/>}/> 
                <Route path="/Contacto" element={<FormContacto/>}/> 
                <Route path="/Register" element={<Register/>}/> 
                <Route path="/ProductDetails/:_id" element={<ProductDetails/>}/> 
                <Route path="/Login" element={<Login/>}/> 
                <Route path="/success-purchase" element={<CompraExitosa/>}/> 
                <Route path="*" element={<h1>Not Found</h1>}/> 
            </Routes>
        </div>
    )
}