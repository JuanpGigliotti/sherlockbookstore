import Home from "./componentes/Home/Home"
import CartContent from "./componentes/CartContent/CartContent";
import DataProvider from "./componentes/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartContent/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App