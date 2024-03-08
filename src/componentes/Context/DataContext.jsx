import { createContext, useState, useEffect } from "react";
/* import axios from "axios"; */

import {db} from "../../services/config";
import { getDocs, collection, query } from "firebase/firestore";

export const DataContext = createContext();


const DataProvider = ({ children }) =>{
    const[data, setData] = useState([]);
    const[cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect (() => {
      const misProductos = query (collection (db, "productos"))
      
      getDocs(misProductos)
        .then(res => {
          setData (res.docs.map(doc => ({id:doc.id, ...doc.data()})))
        })
    }, [])

    useEffect(() => {
      const newTotal = cart.reduce((acc, item) => acc + item.price * item.quanty, 0);
      setTotal(newTotal);
    }, [cart]);


/*     useEffect(()=>{
        axios("data.json").then((res) => setData(res.data));
    },[]); */

    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.id === product.id);
          if(productrepeat){
            setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productrepeat.quanty + 1 } : item)))
          }else{
            setCart([...cart, product]);
          }
      
      };

      const emptyCart = () => {
        setCart([]);
        setTotal(0);
      };

    return(
        <DataContext.Provider value={{ data, cart, setCart, buyProducts, total, emptyCart }} >{children}</DataContext.Provider>
    )
};

export default DataProvider;