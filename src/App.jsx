import Home from "./componentes/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContent from "./componentes/CartContent/CartContent";
import dataProvider from "./componentes/Context/DataContext";

const App = () => {
  return (
    <dataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartContent/>} />
        </Routes>
      </BrowserRouter>
    </dataProvider>
  )
}

export default App