import { Link } from "react-router";
import styles from './Navbar.module.css'

function Navbar({noOfItems}) {
    return (
        <nav>
            <Link className="link" to="/">Costcutters</Link>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/shop">Shop</Link>
            <Link className="link" to="/cart">Cart ({noOfItems})</Link>
        </nav>
    )
};

export default Navbar;