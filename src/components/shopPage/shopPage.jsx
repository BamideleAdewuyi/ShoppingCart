import { Link, useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./ShopPage.module.css"

function Shop() {
    const [noOfItems, setNoOfItems, cart, setCart] = useOutletContext();
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    
    useEffect(() => {
        async function getItems() {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const json = await res.json();
                const array = await json.slice(0, 8)
                setItems(array);
            } catch (error) {
                console.log(error);
            }
        }
        getItems();
    }, [total])

    function itemInCart(item) {
        let res = false;
        if (item in cart)  res = true;
        return res;
    };

    function addToCart(item, quantity, price) {
        const cost = price * quantity;
        if (itemInCart(item)) {
            const prevQuantity = cart[item];
            setCart({
                ...cart,
                [item]: prevQuantity + quantity
            })

        } else {
            setCart({
                ...cart,
                [item]: quantity
            })
        }
        setNoOfItems(prev => prev + quantity);
        setTotal(prev => prev + cost);
    };
    
    return (
        <div>
            <h1>ITEMS</h1>
            <div className={styles.cards}>
                {items.map(({id, title, price, image}) => (
                    <Card key={id} title={title} price={price} image={image} addToCart={addToCart} amount={0}/>
                ))}
            </div>
        </div>
    )
}

export default Shop;