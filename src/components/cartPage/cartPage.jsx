import { Link, useOutletContext } from "react-router";
import styles from "./CartPage.module.css";

function Cart() {
    const [noOfItems, setNoOfItems, cart, setCart] = useOutletContext();
    return (
        <div>
            <h1>Cart</h1>
            <div className={styles.cards}>

            </div>
        </div>
    )
}

export default Cart;