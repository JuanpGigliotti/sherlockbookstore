import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDocs, collection, query, where } from "firebase/firestore";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const { idCategoria } = useParams(); 

  useEffect(() => {
    
    const productosCollection = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

      getDocs(productosCollection)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Nuevos productos:", nuevosProductos);
        setData(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quanty, 0);
    setTotal(newTotal);
  }, [cart]);

  const buyProducts = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);
    if (productrepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...product, quanty: productrepeat.quanty + 1 } : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const emptyCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <DataContext.Provider value={{ data, cart, setCart, buyProducts, total, emptyCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;