import Home from "./componentes/Home/Home"
import CartContent from "./componentes/CartContent/CartContent";
import DataProvider from "./componentes/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CargarJson from "./componentes/CargarJson/CargarJson";
import Checkout from "./componentes/Checkout/Checkout";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categoria/:idCategoria" element={<Home/>}/>
          <Route path="/cart" element={<CartContent/>} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    <CargarJson/>
    </DataProvider>
  )
}

export default App