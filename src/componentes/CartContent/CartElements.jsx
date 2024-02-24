import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";



const CartElements = () => {
const {cart, setCart} = useContext(DataContext)

const deleteProduct = (id) => {
    const fundId = cart.find((element)=> element.id === id)

    const newCart = cart.filter((element) => {
        return element !== fundId
    });

    setCart (newCart);
}

return cart.map((Product) => {
    return (
        <div className="cartContent" key={Product.id}>
            <img src={Product.img} alt="product-card" />
            <h3 className="name">{Product.name}</h3>
            <CartItemCounter product={product} />
            <h4 className="price">{Product.price * product.quanty}$</h4>
            <h3 className="cart-delete" on onClick={() => deleteProduct(product.id)}>❌</h3>
        </div>
    )
})
}

export default CartElements