import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className= "nav-container">
        <nav className= "navbar">
            <h1 className="navbar-logo">shop.</h1>
            <Link className="seecarrito" to={"/cart"}>🛒</Link>
        </nav>
    </div>
  )
}

export default NavBar