import { Link } from "react-router";
import styles from './Navbar.module.css'
import { useEffect, useState } from "react";

function Navbar({cart}) {
    const [noOfItems, setNoOfItems] = useState(0);

    useEffect(() => {
        async function noOfItems(cart) {
            try{
                const total = Object.keys(cart).reduce(function (previous, key) {
            return previous + cart[key].quantity
            }, 0)
            setNoOfItems(total)
            } catch (error) {
                console.log(error)
            }
        };
        noOfItems(cart);
    }, [cart])
    
    return (
        <nav className={styles.container}>
            <Link className="link" to="/">Costcutters</Link>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/shop">Shop</Link>
            <Link className="link" to="/cart">Cart ({noOfItems})</Link>
        </nav>
    )
};

export default Navbar;