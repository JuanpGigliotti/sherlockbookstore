import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const {cart, total} = useContext(DataContext)
  
  
    return <div className="cartTotal">
        <h3>total {total}$</h3>
        <Link to="/checkout">
        <button>Finalizar Compra</button>
        </Link>
    </div>
}

export default CartTotal