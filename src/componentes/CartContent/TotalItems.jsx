import { useContext } from "react";
import { DataContext } from "../Context/DataContext";


    

const totalItems = () => {
    const {cart} = useContext(DataContext)
    const itemsQuanty = cart.reduce ((acc, el) => acc + el.Quanty, 0)

  return <span className="cart-items-total">{itemsQuanty}</span>
}

export default totalItems