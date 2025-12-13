import { Link } from "react-router";
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <Link to="/">Costcutters</Link>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
};

export default Navbar;