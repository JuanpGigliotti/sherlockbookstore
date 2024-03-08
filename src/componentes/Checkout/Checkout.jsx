import { useState,useContext} from "react"
import { DataContext } from "../Context/DataContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import NavBar from "../NavBar/NavBar"
import CartTotal from "../CartContent/CartTotal"

const Checkout = () => {
    const {cart, total, emptyCart  } = useContext (DataContext)

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState ("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completa los campos pedazo de loro");
            return;
        }

        if(email !== emailConfirmacion){
            setError("los mail no son iguales sos boludo o le tiras piedras a los aviones?")
            return;
        }

        const orden = {
            items: cart.map(product => ({
                id: product.id,
                nombre: product.name,
                cantidad:product.quanty
            })),
            total,
            fecha: new Date(),
            nombre,
            apellido,
            email
            
        }

        addDoc(collection (db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                emptyCart()
            })
            .catch(error => {
                console.log("error torbellino", error);
                setError("asi no campeon")
            })
    }

  return (
    <>
    <NavBar/>
    <form onSubmit={manejadorSubmit}>
        {
            cart.map(product => (
                <div key={product.id}>
                    <p> {product.name} X {product.quanty} </p>
                    <p> {product.price}</p>
                </div>
            ))
        }

        <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="telefono">Telefono</label>
            <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="emailconfirmacion">Confirmar Email</label>
            <input type="email" id="emailconfirmacion" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
        </div>

        {
            error && <p style={{color: "red"}}>{error}</p>
        }

        <button disabled={cart.length === 0}> Finalizar orden </button>

        {
            ordenId && <strong>Gracias por la compra numero de orden {ordenId} </strong>
        }


    </form>
    </>
  )
}

export default Checkout