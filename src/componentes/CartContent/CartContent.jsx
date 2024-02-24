import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import NavBar from "../NavBar/NavBar";

const CartContent = () => {
  const {cart} = useContext(DataContext)
  
return (
  <>
  <NavBar/>
  {cart.lenght > 0 ? (
    <>
    <CartElements />
    <CartTotal/>
    </>
  ) : (
    <h2 className="cart-message-center">Cart is empty</h2>
  )}
  </>
)
}
export default CartContent