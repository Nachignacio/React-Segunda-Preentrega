import "../styles/pages/Home.css"
import Logo from "../img/pedals.png";
import Piano from "../img/kawaies110.jpg";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";

function Home(){
    return(
        <div>
        <header>
            <h1> Music Store </h1>
            <img src={Logo} alt="logo"/>
            <NavBar/>
        </header>
        <ItemListContainer nombre="Kawai ES110" image={Piano} descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui."/>
    </div>
    )
}

export default Home;