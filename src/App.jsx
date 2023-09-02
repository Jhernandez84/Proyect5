import './App.css'
import FooterPages from './Components/HeaderFooter/Footer'
import HeaderPage from './Components/HeaderFooter/Header'
import { NavBar } from './Components/NavBar/NavBar'
import { MainRoutes } from './Components/Routes/MainRoutes'

function App() {
  return(
  <>
    <NavBar/>
    <HeaderPage/>
    <MainRoutes/>
    <FooterPages/>
  </>
  )
}

export default App
