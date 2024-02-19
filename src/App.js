import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Pianos from "./pages/Pianos";
import Keyboards from "./pages/Keyboards";
import Guitars from "./pages/Guitars";
import Drums from "./pages/Drums";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="pianos" element={<Pianos/>}/>
          <Route path="keyboards" element={<Keyboards/>}/>
          <Route path="guitars" element={<Guitars/>}/>
          <Route path="drums" element={<Drums/>}/>
        </Route>
      </Routes>
      <Route path="*" element={<h1>404 no encontrado</h1>}/>
    </BrowserRouter>
  ); 
}

export default App;
