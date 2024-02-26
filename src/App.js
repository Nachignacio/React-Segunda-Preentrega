import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from "./components/Product";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/category/" element={<ItemListContainer/>}/>
                    </Route>
                    <Route path="*" element={<h1>404 no encontrado</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;