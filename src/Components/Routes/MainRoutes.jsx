import { Route,Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/Homepage"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"
import { Dashboard } from "../Pages/AdminPage/Dashboard"

export const MainRoutes = () => {
    return(
        <div className="main-container">
            <Routes>
                <Route path="/" element={<HomePage/>}/> 
                <Route path="/Dashboard" element={<Dashboard/>}/> 
                <Route path="/HomePage" element={<HomePage/>}/> 
                <Route path="/Register" element={<Register/>}/> 
                <Route path="/Login" element={<Login/>}/> 
                <Route path="*" element={<h1>Not Found</h1>}/> 
            </Routes>
        </div>
    )
}