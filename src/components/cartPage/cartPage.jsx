import { Link } from "react-router";
import styles from "./CartPage.module.css";
import Card from "../Card/Card";

function Cart() {
    return (
        <div>
            <h1>Cart</h1>
            <div className={styles.cards}>
                
            </div>
        </div>
    )
}

export default Cart;