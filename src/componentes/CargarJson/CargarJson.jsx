import { useEffect } from "react";
import { db } from "../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";


const CargarJson = () => {
  useEffect( () => {
    const cargarUnArchivo = async() => {
        try {
            const res = await fetch ("./data.json")
            const jsonData = await res.json()

            jsonData.forEach (async(producto) => {
                const productoDoc = doc(collection(db, "productos"),producto.id.toString())
                await setDoc(productoDoc,producto )
            })

        } catch (error) {
            console.log("flaco sos un inutil no servis para esta vida", error)
        }
    }
    cargarUnArchivo()
  }, [])  
  
  
    return (
    <></>
  )
}

export default CargarJson