import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const TotalItems = () => {
    const { cart } = useContext(DataContext);

    // Filtra los elementos con Quanty definido y no NaN, luego suma la cantidad
    const itemsQuanty = cart.filter(el => el.Quanty && !isNaN(el.Quanty))
                             .reduce((acc, el) => acc + el.Quanty, 0);

    return <span className="cart-items-total">{itemsQuanty}</span>;
}

export default TotalItems;
