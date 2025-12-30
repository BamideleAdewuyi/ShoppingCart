import { Link, useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./ShopPage.module.css"

function Shop() {
    const [cart, setCart] = useOutletContext();
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

    function addToCart(item, quantity, price, image, id) {
        const cost = price * quantity;
        if (itemInCart(item)) {
            const prevQuantity = cart[item].quantity;
            setCart({
                ...cart,
                [item]: {
                    quantity: Number(prevQuantity) + Number([quantity]),
                    image: image,
                    price: price,
                    id: id
                }                
            })
        } else if (!itemInCart(item) && quantity > 0){
            setCart({
                ...cart,
                [item]: {
                    quantity: quantity,
                    image: image,
                    price: price,
                    id: id
                }
            })
        }
        setTotal(prev => prev + cost);
    };
    
    return (
        <div>
            <h1>ITEMS</h1>
            <div className={styles.cards}>
                {items.map(({id, title, price, image}) => (
                    <Card key={id} title={title} price={parseFloat(price).toFixed(2)} image={image} updateCart={addToCart} amount={0} id={id} buttonText="Add to Cart"/>
                ))}
            </div>
        </div>
    )
}

export default Shop;