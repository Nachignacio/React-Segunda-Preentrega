import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.js"
import Logo from "../img/pedals.png";
import "../styles/pages/Layout.css";

function Layout(){
    return(
        <div>
            <header>
                <h1> Virtual Store </h1>
                <img src={Logo} alt="logo"/>
            </header>
            <NavBar/>
            <Outlet/>
            <footer>Pie de pagina</footer>
        </div>
    )
}

export default Layout;