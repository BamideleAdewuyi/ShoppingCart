import { Link, useOutletContext } from "react-router";
import styles from "./CartPage.module.css";
import ShopCard from "../Card/Card";
import { useState, useEffect } from "react";

function Cart() {
    const [cart, setCart] = useOutletContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function findTotal(cart) {
            try{
                const total = Object.keys(cart).reduce(function (previous, key) {
            return previous + (cart[key].quantity * cart[key].price)
            }, 0)
            setTotal(total)
            } catch (error) {
                console.log(error)
            }
        };
        findTotal(cart);
    }, [cart])

    function updateCart(title, quantity, price, image, id) {
        setCart({
                ...cart,
                [title]: {
                    quantity: quantity,
                    image: image,
                    price: price,
                    id: id
                }                
            })
    };

    return (
        <div>
            <h1>Cart</h1>
            <h2>Total: £{total}</h2>
            <div className={styles.cards}>
                {Object.keys(cart)
                .filter(key => cart[key].quantity > 0)
                .map(key => (
                    <ShopCard key={cart[key].id} title={key} price={cart[key].price} image={cart[key].image} updateCart={updateCart} amount={cart[key].quantity} id={cart[key].id} buttonText="Update"/>
                ))}
            </div>
        </div>
    )
}

export default Cart;