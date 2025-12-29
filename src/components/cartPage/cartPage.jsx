import { Link, useOutletContext } from "react-router";
import styles from "./CartPage.module.css";
import ShopCard from "../ShopCard/ShopCard";

function Cart() {
    const [noOfItems, setNoOfItems, cart, setCart] = useOutletContext();
    
    function updateCart() {

    };

    return (
        <div>
            <h1>Cart</h1>
            <div className={styles.cards}>
                {Object.keys(cart).map(key => (
                    <ShopCard key={cart[key].id} title={key} price={cart[key].price} image={cart[key].image} updateCart={updateCart} amount={cart[key].quantity} id={cart[key].id} buttonText="Update"/>
                ))}
            </div>
        </div>
    )
}

export default Cart;