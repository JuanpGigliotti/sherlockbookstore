import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import"./Products.css";

const Products = () => {
const { data, buyProducts } = useContext(DataContext);

  return data.map((product) => {
      return(
        <div className="card" key={product.id}>
          <img src={product.img} alt="img-product-card" />
          <h3>{product.name}</h3>
          <h4>{product.author}</h4>
          <h4>{product.price}$</h4>
          <button onClick={()=> buyProducts(product)}>buy</button>
        </div>
      );
    });
};

export default Products